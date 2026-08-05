'use client'

import { useState, type CSSProperties, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Loader2, ShieldCheck } from 'lucide-react'
import { PLANS, type PlanId } from '@/lib/plans'

// Load the Paytm Checkout JS for a given merchant once.
let paytmScriptPromise: Promise<void> | null = null
function loadPaytm(host: string, mid: string) {
  if (paytmScriptPromise) return paytmScriptPromise
  paytmScriptPromise = new Promise<void>((resolve, reject) => {
    const src = `${host}/merchantpgpui/checkoutjs/merchants/${mid}.js`
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => {
      paytmScriptPromise = null
      reject(new Error('Failed to load Paytm'))
    }
    document.body.appendChild(s)
  })
  return paytmScriptPromise
}

type Props = {
  planId: PlanId
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export default function BookingButton({ planId, className, style, children }: Props) {
  const plan = PLANS[planId]
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

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
    setBusy(true)
    try {
      const res = await fetch('/api/paytm/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId, ...form }),
      })
      const data = await res.json()
      if (!res.ok || !data.txnToken) {
        setError(data.error || 'Could not start the payment. Please try again.')
        setBusy(false)
        return
      }

      await loadPaytm(data.host, data.mid)
      const Paytm = (window as unknown as { Paytm?: any }).Paytm
      if (!Paytm?.CheckoutJS) {
        setError('Payment gateway is unavailable right now. Please try again later.')
        setBusy(false)
        return
      }

      await Paytm.CheckoutJS.init({
        root: '',
        flow: 'DEFAULT',
        data: {
          orderId: data.orderId,
          token: data.txnToken,
          tokenType: 'TXN_TOKEN',
          amount: data.amount,
        },
        handler: {
          notifyMerchant: (eventName: string) => {
            if (eventName === 'APP_CLOSED') setBusy(false)
          },
        },
      })
      Paytm.CheckoutJS.invoke()
      // Paytm now takes over; on completion it redirects to /api/paytm/callback.
    } catch {
      setError('Something went wrong. Please try again.')
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

  return (
    <>
      <button type="button" className={className} style={style} onClick={() => setOpen(true)}>
        {children}
      </button>

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
            aria-label={`Book ${plan.name}`}
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

              <h3 className="font-heading text-2xl font-bold text-[#3D1578]">Book Your Seat</h3>
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
                <textarea
                  className={`${field} resize-none`}
                  rows={3}
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
                  Secure payment via Paytm. You&apos;ll be redirected to complete it.
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
