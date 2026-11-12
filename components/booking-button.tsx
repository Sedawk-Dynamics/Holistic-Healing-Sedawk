'use client'

import { useState, useEffect, type CSSProperties, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Loader2, ShieldCheck } from 'lucide-react'
import { PLANS, type PlanId } from '@/lib/plans'

// Load the Razorpay Checkout script once.
let razorpayScriptPromise: Promise<void> | null = null
function loadRazorpay() {
  if (razorpayScriptPromise) return razorpayScriptPromise
  razorpayScriptPromise = new Promise<void>((resolve, reject) => {
    const src = 'https://checkout.razorpay.com/v1/checkout.js'
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => {
      razorpayScriptPromise = null
      reject(new Error('Failed to load Razorpay'))
    }
    document.body.appendChild(s)
  })
  return razorpayScriptPromise
}

// Email the booking + payment details via Web3Forms (must run in the browser on the free plan).
async function sendBookingEmail(fields: Record<string, string>) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  if (!accessKey) return
  await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `${fields.Product ? 'New Order' : 'New Booking'} — ${fields.Product || fields.Program} (${fields.Payment_Status})`,
      from_name: 'HHPF Website Booking',
      ...fields,
    }),
  }).catch(() => {})
}

type Props = {
  planId: PlanId
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export default function BookingButton({ planId, className, style, children }: Props) {
  const plan = PLANS[planId]
  const isProduct = plan?.kind === 'product'
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', message: '' })
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const close = () => {
    if (busy) return
    setOpen(false)
    setError('')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError('Please fill in your name, email and phone number.')
      return
    }
    if (isProduct && !form.address.trim()) {
      setError('Please enter your shipping address.')
      return
    }
    setBusy(true)
    try {
      const res = await fetch('/api/razorpay/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId, ...form }),
      })
      const data = await res.json()
      if (!res.ok || !data.orderId) {
        setError(data.error || 'Could not start the payment. Please try again.')
        setBusy(false)
        return
      }

      await loadRazorpay()
      const Razorpay = (window as unknown as { Razorpay?: any }).Razorpay
      if (!Razorpay) {
        setError('Payment gateway is unavailable right now. Please try again later.')
        setBusy(false)
        return
      }

      const rzp = new Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        name: 'Holistic Healing Pathways Foundation',
        description: plan.name,
        image: '/images/hero-logo.png',
        prefill: { name: form.name, email: form.email, contact: form.phone },
        notes: { [isProduct ? 'product' : 'program']: plan.name },
        theme: { color: '#3D1578' },
        handler: async (response: {
          razorpay_order_id: string
          razorpay_payment_id: string
          razorpay_signature: string
        }) => {
          try {
            const vr = await fetch('/api/razorpay/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response),
            })
            const vd = await vr.json()
            if (!vd.valid) {
              setError('Payment could not be verified. If money was deducted, please contact us.')
              setBusy(false)
              return
            }
            await sendBookingEmail({
              ...(isProduct
                ? { Product: plan.name, Shipping_Address: form.address }
                : { Program: plan.name }),
              Name: form.name,
              Email: form.email,
              Phone: form.phone,
              Message: form.message || '—',
              Payment_Status: 'SUCCESS',
              Order_Id: response.razorpay_order_id,
              Payment_Id: response.razorpay_payment_id,
              Amount_Paid: `₹${plan.amount.toLocaleString('en-IN')}`,
            })
            window.location.href = `/booking/thank-you?status=success&order=${encodeURIComponent(
              response.razorpay_order_id,
            )}${isProduct ? '&type=product' : ''}`
          } catch {
            setError('Something went wrong after payment. Please contact us with your payment id.')
            setBusy(false)
          }
        },
        modal: { ondismiss: () => setBusy(false) },
      })
      rzp.on('payment.failed', (resp: { error?: { description?: string } }) => {
        setError(resp?.error?.description || 'Payment failed. Please try again.')
        setBusy(false)
      })
      rzp.open()
    } catch (err) {
      console.error('[booking]', err)
      const msg = err instanceof Error ? err.message : String(err)
      setError(`Something went wrong${msg ? `: ${msg}` : ''}. Please try again.`)
      setBusy(false)
    }
  }

  if (!plan) {
    return (
      <button type="button" className={className} style={style}>
        {children}
      </button>
    )
  }

  const field =
    'w-full rounded-xl px-4 py-3 font-body text-sm text-[#1A0A35] bg-[#F5F0FF] border border-[#E8DEF8] focus:outline-none focus:border-[#3D1578] transition-colors'

  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4"
          style={{ background: 'rgba(26,10,53,0.85)' }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${isProduct ? 'Buy' : 'Book'} ${plan.name}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              disabled={busy}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#3D1578] transition-colors hover:bg-[#F5F0FF] disabled:opacity-40"
            >
              <X size={18} />
            </button>

            <h3 className="font-heading text-2xl font-bold text-[#3D1578]">
              {isProduct ? 'Complete Your Order' : 'Book Your Seat'}
            </h3>
            <p className="mt-1 font-body text-sm text-[#5A4A6A]">{plan.name}</p>
            <div className="mt-3 mb-5 flex items-baseline gap-2">
              <span className="font-heading text-3xl font-bold text-[#3D1578]">
                ₹{plan.amount.toLocaleString('en-IN')}
              </span>
              <span className="font-body text-sm text-[#7A6A9A]">· {plan.duration}</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                className={field}
                placeholder="Full name *"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                disabled={busy}
              />
              <input
                className={field}
                type="email"
                placeholder="Email address *"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                disabled={busy}
              />
              <input
                className={field}
                type="tel"
                placeholder="Phone number *"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                disabled={busy}
              />
              {isProduct && (
                <textarea
                  className={`${field} resize-none`}
                  rows={3}
                  placeholder="Shipping address with PIN code *"
                  value={form.address}
                  onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                  disabled={busy}
                />
              )}
              <textarea
                className={`${field} resize-none`}
                rows={isProduct ? 2 : 3}
                placeholder="Anything you'd like us to know (optional)"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                disabled={busy}
              />

              {error && <p className="font-body text-sm text-[#B23B3B]">{error}</p>}

              <button
                type="submit"
                disabled={busy}
                className="mt-1 flex items-center justify-center gap-2 rounded-full bg-[#3D1578] px-6 py-3.5 font-body text-sm font-semibold text-white transition-all hover:bg-[#51209d] disabled:opacity-60"
              >
                {busy ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Starting secure payment…
                  </>
                ) : (
                  <>Proceed to Payment · ₹{plan.amount.toLocaleString('en-IN')}</>
                )}
              </button>

              <p className="mt-1 flex items-center justify-center gap-1.5 font-body text-xs text-[#7A6A9A]">
                <ShieldCheck size={13} className="text-[#76C043]" />
                Secure payment via Razorpay.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <button
        type="button"
        className={className}
        style={style}
        onClick={(e) => {
          // Prevent the click from bubbling to parent handlers (e.g. the /training
          // accordion toggle), which would collapse the panel and unmount the modal.
          e.stopPropagation()
          setOpen(true)
        }}
      >
        {children}
      </button>

      {/* Render the modal on document.body so it isn't affected by parent transforms/unmounts. */}
      {mounted ? createPortal(modal, document.body) : null}
    </>
  )
}
