import { NextRequest, NextResponse } from 'next/server'
import { generateSignature, paytmConfig } from '@/lib/paytm'

export const runtime = 'nodejs'

type Booking = {
  plan?: string
  name?: string
  email?: string
  phone?: string
  message?: string
  amount?: string
}

async function handle(req: NextRequest) {
  const cfg = paytmConfig()

  // orderId comes back on the callback URL; fall back to Paytm's POST body if missing.
  let orderId = req.nextUrl.searchParams.get('orderId') || ''
  if (!orderId) {
    try {
      const form = await req.formData()
      orderId = String(form.get('ORDERID') || '')
    } catch {
      /* ignore */
    }
  }

  const origin = req.nextUrl.origin
  const cookie = req.cookies.get(`booking_${orderId}`)?.value
  const booking: Booking | null = cookie ? JSON.parse(cookie) : null

  let outcome: 'success' | 'failed' | 'pending' = 'failed'
  const txn: Record<string, unknown> = { orderId }

  if (orderId && cfg.mid && cfg.key) {
    // Authoritatively verify with Paytm's Transaction Status API (server-to-server).
    const body = { mid: cfg.mid, orderId }
    const signature = await generateSignature(JSON.stringify(body), cfg.key)
    try {
      const res = await fetch(`${cfg.host}/v3/order/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body, head: { signature } }),
      })
      const data = await res.json()
      const info = data?.body || {}
      const status = info?.resultInfo?.resultStatus
      txn.status = status
      txn.txnId = info.txnId
      txn.amount = info.txnAmount
      txn.bankTxnId = info.bankTxnId
      txn.paymentMode = info.paymentMode
      txn.date = info.txnDate
      txn.message = info?.resultInfo?.resultMsg

      if (status === 'TXN_SUCCESS') outcome = 'success'
      else if (status === 'PENDING') outcome = 'pending'
    } catch {
      /* leave outcome as failed */
    }
  }

  const redirect = NextResponse.redirect(
    `${origin}/booking/thank-you?status=${outcome}&order=${encodeURIComponent(orderId)}`,
    { status: 303 },
  )
  redirect.cookies.delete(`booking_${orderId}`)

  // Web3Forms (free plan) only accepts submissions from the browser, so we hand the
  // combined booking + payment details to the thank-you page via a short-lived,
  // client-readable cookie and email it from there.
  if (outcome === 'success' || outcome === 'pending') {
    const result = {
      program: booking?.plan || '',
      name: booking?.name || '',
      email: booking?.email || '',
      phone: booking?.phone || '',
      message: booking?.message || '',
      status: String(txn.status ?? outcome),
      orderId,
      txnId: String(txn.txnId ?? ''),
      amount: String(txn.amount ?? booking?.amount ?? ''),
      bankTxnId: String(txn.bankTxnId ?? ''),
      paymentMode: String(txn.paymentMode ?? ''),
      date: String(txn.date ?? ''),
    }
    redirect.cookies.set('booking_result', JSON.stringify(result), {
      httpOnly: false,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 600,
    })
  }

  return redirect
}

export const POST = handle
export const GET = handle
