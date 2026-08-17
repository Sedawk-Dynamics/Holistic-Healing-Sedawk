import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { razorpayConfig } from '@/lib/razorpay'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const cfg = razorpayConfig()
  if (!cfg.keySecret) {
    return NextResponse.json({ valid: false, error: 'Payment is not configured.' }, { status: 500 })
  }

  let body: {
    razorpay_order_id?: string
    razorpay_payment_id?: string
    razorpay_signature?: string
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ valid: false }, { status: 400 })
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ valid: false }, { status: 400 })
  }

  // Razorpay signature = HMAC-SHA256(order_id + "|" + payment_id) keyed with the secret.
  const expected = crypto
    .createHmac('sha256', cfg.keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex')

  const valid =
    expected.length === razorpay_signature.length &&
    crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(razorpay_signature))

  return NextResponse.json({ valid })
}
