'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import BookingButton from '@/components/booking-button'
import type { PlanId } from '@/lib/plans'

const cards: {
  planId: PlanId
  eyebrow: string
  title: string
  price: string
  priceNote: string
  features: string[]
  badge: string | null
  dark: boolean
  cta: string
}[] = [
  {
    planId: 'nadi-certification',
    eyebrow: 'Certification Course',
    title: 'Nadi Nakshatra Astrology',
    price: '₹65,000',
    priceNote: '6-month program · 21 modules',
    features: [
      '21-module structured curriculum',
      'All 27 Nakshatras & planetary linkages',
      'Live horoscope analysis & case studies',
      'Practical training & prediction exercises',
      'Personal mentoring by Dr. Nikunj Walia',
      'Certificate upon completion',
    ],
    badge: 'Most Popular',
    dark: true,
    cta: 'Enrol in NADI-NAKSHATRA',
  },
  {
    planId: 'nadi-prediction',
    eyebrow: 'Personal Reading',
    title: 'Nadi Prediction',
    price: '₹3,100',
    priceNote: 'One-time session',
    features: [
      'Your own Nadi Nakshatra chart read in full',
      'Event-specific guidance with timing',
      'Career, marriage, finance & health',
      'Karmic patterns & remedial measures',
      'Read by a certified practitioner',
    ],
    badge: null,
    dark: false,
    cta: 'Book a Reading',
  },
]

export default function NadiCourses() {
  return (
    <section id="nadi" className="section-padding relative overflow-hidden" aria-label="Nadi courses">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDFCFF] via-[#F5F0FF] to-[#FDFCFF]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#C89A2B] mb-4">
            Begin Your Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#3D1578] leading-tight mb-4">
            Reserve your seat
          </h2>
          <p className="font-body text-[#3D1578]/65 text-lg leading-relaxed mb-3">
            Limited seats ensure maximum personal attention for every student.
          </p>
          <p className="font-body text-sm font-semibold text-[#C89A2B]">
            ✦ One class every week&nbsp;&nbsp;·&nbsp;&nbsp;2 hours per class
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {cards.map((card, i) => (
            <motion.div
              key={card.planId}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 border shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                card.dark ? 'border-[#C89A2B]/40 bg-[#3D1578]' : 'border-[#E8DEF8] bg-white'
              }`}
            >
              {card.badge && (
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold font-body bg-[#C89A2B] text-[#2A0D56]">
                    <Star size={10} className="fill-[#2A0D56]" />
                    {card.badge}
                  </span>
                </div>
              )}

              <span
                className={`font-body text-xs font-semibold tracking-wider uppercase ${
                  card.dark ? 'text-white/60' : 'text-[#3D1578]/50'
                }`}
              >
                {card.eyebrow}
              </span>
              <h3
                className={`font-heading text-2xl md:text-3xl font-semibold mt-1 mb-5 ${
                  card.dark ? 'text-white' : 'text-[#3D1578]'
                }`}
              >
                {card.title}
              </h3>

              <div className="mb-6">
                <span className="font-heading text-4xl font-bold text-[#C89A2B]">{card.price}</span>
                <p className={`font-body text-sm mt-1 ${card.dark ? 'text-white/55' : 'text-[#3D1578]/55'}`}>
                  {card.priceNote}
                </p>
              </div>

              <ul className="flex flex-col gap-3.5 mb-8">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="text-[#C89A2B] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className={`font-body text-sm ${card.dark ? 'text-white/80' : 'text-[#3D1578]/75'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <BookingButton
                planId={card.planId}
                className={`block w-full text-center px-6 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
                  card.dark
                    ? 'bg-[#C89A2B] text-[#2A0D56] hover:bg-[#E0B84A]'
                    : 'border-2 border-[#3D1578] text-[#3D1578] hover:bg-[#3D1578] hover:text-white'
                }`}
              >
                {card.cta}
              </BookingButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
