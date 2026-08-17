import { NextRequest, NextResponse } from 'next/server'
import { razorpayConfig } from '@/lib/razorpay'
import { PLANS, type PlanId } from '@/lib/plans'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const cfg = razorpayConfig()
  if (!cfg.keyId || !cfg.keySecret) {
    return NextResponse.json({ error: 'Payment is not configured yet.' }, { status: 500 })
  }

  let payload: { plan?: string; name?: string; email?: string; phone?: string; message?: string }
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const { plan, name, email, phone } = payload
  const selected = plan ? PLANS[plan as PlanId] : undefined
  if (!selected) return NextResponse.json({ error: 'Invalid program selected.' }, { status: 400 })
  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Name, email and phone are required.' }, { status: 400 })
  }

  // Server derives the amount from the plan id (in paise) — never trusts a client price.
  const amountPaise = selected.amount * 100
  const receipt = `HHPF${Date.now()}${Math.floor(Math.random() * 1000)}`
  const auth = Buffer.from(`${cfg.keyId}:${cfg.keySecret}`).toString('base64')

  let order: any
  try {
    const res = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Basic ${auth}` },
      body: JSON.stringify({
        amount: amountPaise,
        currency: 'INR',
        receipt,
        notes: { program: selected.name, name, email, phone },
      }),
    })
    order = await res.json()
    if (!res.ok || !order?.id) {
      return NextResponse.json(
        { error: order?.error?.description || 'Could not create the order.' },
        { status: 502 },
      )
    }
  } catch {
    return NextResponse.json({ error: 'Could not reach the payment gateway.' }, { status: 502 })
  }

  return NextResponse.json({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    keyId: cfg.keyId,
  })
}
