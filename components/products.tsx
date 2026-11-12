'use client'

import { motion } from 'framer-motion'
import BookingButton from '@/components/booking-button'
import { PLANS, type PlanId } from '@/lib/plans'

// Product photos live in /public/products. If a file is missing the card falls back to the placeholder.
const products: { planId: PlanId; image: string; description: string }[] = [
  {
    planId: 'product-bach-flower',
    image: '/products/bach-flower-remedies.webp',
    description: 'Customized essence blends matched to your unique emotional state.',
  },
  {
    planId: 'product-healing-oil',
    image: '/products/healing-oil.webp',
    description: 'A soothing Bach Flower blend to calm and restore everyday balance.',
  },
  {
    planId: 'product-hair-growth-oil',
    image: '/products/hair-growth-oil.webp',
    description: 'An Ayurvedic Jadibuti formulation to nourish and strengthen hair.',
  },
  {
    planId: 'product-pain-relief-oil',
    image: '/products/pain-relief-oil.webp',
    description: 'A targeted Bach Flower blend formulated for natural relief.',
  },
]

const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`

export default function Products() {
  return (
    <section id="products" className="section-padding relative overflow-hidden" aria-label="Healing products">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDFCFF] via-[#F5F0FF] to-[#FDFCFF]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-[#C89A2B] mb-4">
            Healing Products
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#3D1578] leading-tight mb-5 text-balance">
            Natural Remedies, <span className="text-gradient-gold">Crafted with Care</span>
          </h2>
          <p className="font-body text-[#3D1578]/65 text-lg leading-relaxed">
            Customized blends and healing tools to support your wellbeing between sessions and beyond.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => {
            const plan = PLANS[p.planId]
            return (
              <motion.div
                key={p.planId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col rounded-3xl overflow-hidden bg-white border border-[#E8DEF8] shadow-lg hover:shadow-2xl hover:shadow-[#3D1578]/10 transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F5F0FF]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={plan.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const img = e.currentTarget
                      if (!img.src.endsWith('/placeholder.jpg')) img.src = '/placeholder.jpg'
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-body text-lg font-bold text-[#3D1578]">{plan.name}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-[#3D1578]/65">{p.description}</p>
                  <p className="mt-auto pt-4 font-heading text-2xl font-bold text-[#3D1578]">{inr(plan.amount)}</p>
                  <BookingButton
                    planId={p.planId}
                    className="mt-4 block w-full rounded-full bg-gradient-to-r from-[#3D1578] to-[#6A2FC0] px-6 py-3.5 text-center font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Buy now
                  </BookingButton>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
