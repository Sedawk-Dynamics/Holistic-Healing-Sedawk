'use client'

import { motion } from 'framer-motion'
import { Leaf, ShieldOff, Baby, Heart, User, Award } from 'lucide-react'

const reasons = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Derived purely from flower essences found in nature — no synthetic compounds, no chemicals.',
    accent: '#76C043',
    bg: 'from-[#76C043]/15 to-[#76C043]/5',
  },
  {
    icon: ShieldOff,
    title: 'Zero Side Effects',
    description: 'Completely harmless and non-toxic. Works gently without any adverse reactions or dependencies.',
    accent: '#3D1578',
    bg: 'from-[#3D1578]/10 to-[#3D1578]/5',
  },
  {
    icon: Baby,
    title: 'Safe for Children',
    description: 'Gentle enough for infants and toddlers, making it ideal for the whole family.',
    accent: '#C89A2B',
    bg: 'from-[#C89A2B]/15 to-[#C89A2B]/5',
  },
  {
    icon: Heart,
    title: 'Safe for Elderly',
    description: 'Works without interference with medications, making it perfect for senior wellness support.',
    accent: '#B8A5E5',
    bg: 'from-[#B8A5E5]/30 to-[#B8A5E5]/10',
  },
  {
    icon: User,
    title: 'Personalized Healing',
    description: 'Every remedy blend is uniquely crafted for your individual emotional blueprint — no one-size-fits-all.',
    accent: '#3D1578',
    bg: 'from-[#3D1578]/10 to-[#3D1578]/5',
  },
  {
    icon: Award,
    title: 'Globally Recognized',
    description: 'Bach Flower Therapy is practiced in over 50 countries and recognized by the WHO as a complementary therapy.',
    accent: '#C89A2B',
    bg: 'from-[#C89A2B]/15 to-[#C89A2B]/5',
  },
]

export default function WhyChoose() {
  return (
    <section className="section-padding relative overflow-hidden" aria-label="Why choose us">
      <div className="absolute inset-0 bg-[#3D1578]" />
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #C89A2B 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C89A2B]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#B8A5E5]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C89A2B]/40 to-transparent" />

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
            Our Advantage
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight mb-5 text-balance">
            Why Families Trust{' '}
            <span className="text-[#C89A2B]">Holistic Healing Pathways</span>
          </h2>
          <p className="font-body text-white/60 text-lg leading-relaxed">
            We are committed to providing a healing experience that is safe, personalized,
            and rooted in the time-tested wisdom of Dr. Edward Bach.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl p-6 bg-white/5 border border-white/10
                hover:bg-white/10 hover:border-[#C89A2B]/30
                transition-all duration-300"
            >
              <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${item.bg} flex items-center justify-center mb-5 w-12 h-12`}>
                <item.icon size={22} style={{ color: item.accent }} />
              </div>
              <h3 className="font-body text-base font-bold text-white mb-3">{item.title}</h3>
              <p className="font-body text-sm text-white/55 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
