import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import BookingEmailer from '@/components/booking-emailer'

export const metadata: Metadata = {
  title: 'Booking Status | Holistic Healing Pathways Foundation',
  robots: { index: false, follow: false },
}

const STATES = {
  success: {
    emoji: '✅',
    heading: 'Booking Confirmed',
    message:
      'Your payment was successful and your booking has been received. Our team will reach out to you shortly with the next steps. A confirmation has been sent to our team.',
    color: '#76C043',
  },
  pending: {
    emoji: '⏳',
    heading: 'Payment Pending',
    message:
      'Your payment is being processed. If any amount was deducted, it will be confirmed shortly. We have recorded your booking and will follow up with you.',
    color: '#C89A2B',
  },
  failed: {
    emoji: '⚠️',
    heading: 'Payment Not Completed',
    message:
      'Your payment could not be completed and no booking was confirmed. If money was deducted, it will be refunded automatically. Please try again or contact us.',
    color: '#B23B3B',
  },
} as const

type Status = keyof typeof STATES

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; order?: string }>
}) {
  const { status, order } = await searchParams
  const state = STATES[(status as Status) in STATES ? (status as Status) : 'failed']

  return (
    <main className="relative">
      <BookingEmailer />
      <Navbar />
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-32" style={{ background: '#FDFCFF' }}>
        <div
          className="w-full max-w-lg rounded-3xl p-10 text-center shadow-lg"
          style={{ background: '#FFFFFF', border: '1px solid #E8DEF8' }}
        >
          <div className="text-5xl mb-4">{state.emoji}</div>
          <h1 className="font-heading font-bold text-3xl mb-3" style={{ color: state.color }}>
            {state.heading}
          </h1>
          <p className="font-body text-base leading-relaxed mb-2" style={{ color: '#5A4A6A' }}>
            {state.message}
          </p>
          {order && (
            <p className="font-body text-xs mb-8" style={{ color: '#7A6A9A' }}>
              Reference: {order}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#training"
              className="px-6 py-3 rounded-full font-body font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background: '#3D1578' }}
            >
              Back to Programs
            </Link>
            <a
              href="mailto:info@hhpf.in"
              className="px-6 py-3 rounded-full font-body font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ border: '1px solid #3D1578', color: '#3D1578' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
