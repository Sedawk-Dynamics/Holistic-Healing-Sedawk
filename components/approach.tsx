'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Beaker, ClipboardList, HeartHandshake, Activity, Globe } from 'lucide-react'

const approaches = [
  {
    icon: MessageCircle,
    title: 'Personalized Consultation',
    description: 'Every healing journey begins with a deep, compassionate one-on-one session to understand your unique emotional landscape and life story.',
    number: '01',
  },
  {
    icon: ClipboardList,
    title: 'In-Depth Emotional Assessment',
    description: 'We carefully evaluate your emotional patterns, triggers, and underlying states to identify the precise imbalances affecting your well-being.',
    number: '02',
  },
  {
    icon: Beaker,
    title: 'Individual Remedy Selection',
    description: 'From Dr. Bach\'s 38 original flower essences, we craft a bespoke remedy blend tailored exclusively to your current emotional needs.',
    number: '03',
  },
  {
    icon: HeartHandshake,
    title: 'Relationship & Inner Balance Guidance',
    description: 'We address the emotional roots of relationship difficulties, helping you build healthier bonds and a more harmonious inner world.',
    number: '04',
  },
  {
    icon: Activity,
    title: 'Ongoing Stress & Wellness Support',
    description: 'Continuous monitoring and remedy adjustments ensure your healing progresses as you evolve, keeping you balanced through life\'s changes.',
    number: '05',
  },
  {
    icon: Globe,
    title: 'Holistic Wellness Integration',
    description: 'Bach Flower Therapy is seamlessly integrated with your overall health strategy, complementing any existing treatments or practices.',
    number: '06',
  },
]

export default function Approach() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#FDFCFF]" aria-label="Our healing approach">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#F5F0FF_0%,_transparent_60%)]" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full bg-[#C89A2B]/6 blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-[#C89A2B] mb-4">
            Our Methodology
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#3D1578] leading-tight mb-5 text-balance">
            A Deeply Personal{' '}
            <span className="text-gradient-gold">Healing Approach</span>
          </h2>
          <p className="font-body text-[#3D1578]/65 text-lg leading-relaxed">
            Your healing is unique. Our evidence-informed process is designed to meet you exactly where you are,
            providing a safe, compassionate space for genuine transformation.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-7 overflow-hidden
                bg-white border border-[#E8DEF8]
                hover:border-[#C89A2B]/40 hover:shadow-2xl hover:shadow-[#3D1578]/8
                transition-all duration-400"
            >
              {/* Glassmorphism animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3D1578]/0 via-transparent to-[#C89A2B]/0
                group-hover:from-[#3D1578]/5 group-hover:to-[#C89A2B]/5 transition-all duration-400" />

              {/* Number */}
              <div className="absolute top-5 right-5 font-heading text-5xl font-bold text-[#3D1578]/6 group-hover:text-[#3D1578]/10 transition-colors duration-300 select-none leading-none">
                {item.number}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center
                  bg-gradient-to-br from-[#3D1578]/10 to-[#3D1578]/5
                  group-hover:from-[#3D1578]/20 group-hover:to-[#C89A2B]/10
                  transition-all duration-300 border border-[#3D1578]/10 group-hover:border-[#C89A2B]/30">
                  <item.icon size={24} className="text-[#3D1578] group-hover:text-[#C89A2B] transition-colors duration-300" />
                </div>

                <h3 className="font-body text-base font-bold text-[#3D1578] mb-3">{item.title}</h3>
                <p className="font-body text-sm text-[#3D1578]/60 leading-relaxed">{item.description}</p>
              </div>

              {/* Bottom shimmer line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3D1578] to-[#C89A2B]
                scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
