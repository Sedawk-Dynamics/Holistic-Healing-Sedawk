import { NextRequest, NextResponse } from 'next/server'
import { generateSignature, paytmConfig } from '@/lib/paytm'
import { PLANS, type PlanId } from '@/lib/plans'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const cfg = paytmConfig()
  if (!cfg.mid || !cfg.key) {
    return NextResponse.json({ error: 'Payment is not configured yet.' }, { status: 500 })
  }

  let payload: { plan?: string; name?: string; email?: string; phone?: string; message?: string }
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const { plan, name, email, phone, message } = payload
  const selected = plan ? PLANS[plan as PlanId] : undefined
  if (!selected) return NextResponse.json({ error: 'Invalid program selected.' }, { status: 400 })
  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Name, email and phone are required.' }, { status: 400 })
  }

  const orderId = `HHPF${Date.now()}${Math.floor(Math.random() * 1000)}`
  // Server derives the amount from the plan id — never trusts a client-sent price.
  const amount = selected.amount.toFixed(2)
  const callbackUrl = `${req.nextUrl.origin}/api/paytm/callback?orderId=${orderId}`

  const custId = `CUST_${orderId}`
  const body = {
    requestType: 'Payment',
    mid: cfg.mid,
    websiteName: cfg.website,
    orderId,
    callbackUrl,
    txnAmount: { value: amount, currency: 'INR' },
    userInfo: { custId, email, mobile: phone },
  }

  const signature = await generateSignature(JSON.stringify(body), cfg.key)
  const url = `${cfg.host}/theia/api/v1/initiateTransaction?mid=${cfg.mid}&orderId=${orderId}`

  let data: any
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body, head: { signature } }),
    })
    data = await res.json()
  } catch {
    return NextResponse.json({ error: 'Could not reach the payment gateway.' }, { status: 502 })
  }

  const txnToken = data?.body?.txnToken
  if (!txnToken) {
    console.error('[paytm] initiate failed:', JSON.stringify(data))
    return NextResponse.json(
      { error: data?.body?.resultInfo?.resultMsg || 'Failed to initiate payment.' },
      { status: 502 },
    )
  }

  const response = NextResponse.json({ orderId, txnToken, amount, mid: cfg.mid, host: cfg.host })

  // Carry the booking details to the (cross-site) callback via a short-lived first-party cookie.
  // SameSite=None; Secure so it is sent on Paytm's cross-site POST back to us.
  response.cookies.set(
    `booking_${orderId}`,
    JSON.stringify({ plan: selected.name, name, email, phone, message: message || '', amount }),
    { httpOnly: true, secure: true, sameSite: 'none', path: '/', maxAge: 1800 },
  )

  return response
}
