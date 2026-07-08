'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Brain, Wind, Sun, Shield, Heart, Users } from 'lucide-react'

const benefits = [
  { icon: Brain, title: 'Emotional Balance', description: 'Harmonize your emotional state and find lasting inner equilibrium.', color: '#3D1578', bg: 'from-[#3D1578]/15 to-[#3D1578]/5' },
  { icon: Wind, title: 'Stress Relief', description: 'Dissolve tension and anxiety through the gentle power of flower essences.', color: '#C89A2B', bg: 'from-[#C89A2B]/20 to-[#C89A2B]/5' },
  { icon: Sun, title: 'Mental Clarity', description: 'Clear mental fog and experience renewed focus and purpose.', color: '#76C043', bg: 'from-[#76C043]/20 to-[#76C043]/5' },
  { icon: Heart, title: 'Inner Peace', description: 'Reconnect with your authentic self and cultivate deep serenity.', color: '#B8A5E5', bg: 'from-[#B8A5E5]/40 to-[#B8A5E5]/15' },
  { icon: Shield, title: 'Confidence Building', description: 'Awaken your self-worth and step into your fullest potential.', color: '#3D1578', bg: 'from-[#3D1578]/15 to-[#3D1578]/5' },
  { icon: Users, title: 'Relationship Healing', description: 'Nurture deeper connections through emotional understanding.', color: '#C89A2B', bg: 'from-[#C89A2B]/20 to-[#C89A2B]/5' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#FDFCFF]" aria-label="About Bach Flower Therapy">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#3D1578]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C89A2B]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-[#C89A2B] mb-4">
              About the Therapy
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#3D1578] leading-tight mb-6 text-balance">
              Experience the Power of{' '}
              <span className="text-gradient-gold">Natural Emotional Healing</span>
            </h2>
            <p className="font-body text-[#3D1578]/70 leading-relaxed mb-6">
              Discovered by Dr. Edward Bach in the 1930s, Bach Flower Therapy is a natural, gentle
              healing system that uses <strong className="text-[#3D1578]">38 carefully selected flower essences</strong> to
              address emotional imbalances — the root cause of physical and mental ailments.
            </p>
            <p className="font-body text-[#3D1578]/70 leading-relaxed mb-8">
              Unlike conventional medicine, Bach Flower Therapy treats the whole person — body,
              mind, and spirit. It is completely safe for all ages, from infants to the elderly,
              and works harmoniously alongside any existing treatment with absolutely no side effects.
            </p>

            {/* Key facts */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: 'Discovered in', value: '1930s' },
                { label: 'By Dr.', value: 'Edward Bach' },
                { label: 'Remedies', value: '38' },
              ].map((fact) => (
                <div key={fact.label} className="px-5 py-3 rounded-2xl bg-[#F5F0FF] border border-[#3D1578]/10">
                  <p className="font-body text-xs text-[#3D1578]/60">{fact.label}</p>
                  <p className="font-heading text-lg font-semibold text-[#3D1578]">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#3D1578]/15">
              <Image
                src="/images/about-illustration.png"
                alt="38 Bach Flower Remedies mandala illustration"
                width={600}
                height={550}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 max-w-xs glass border border-[#C89A2B]/30 rounded-2xl p-5 shadow-xl"
            >
              <p className="font-heading text-sm italic text-[#3D1578] leading-relaxed">
                &ldquo;The action of the flower essences raises our vibrations and opens up our channels for reception of the spiritual self.&rdquo;
              </p>
              <p className="font-body text-xs text-[#C89A2B] font-semibold mt-2">— Dr. Edward Bach</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#3D1578]">
            What Bach Flower Therapy Can Do For You
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(61,21,120,0.12)' }}
              className="group relative rounded-2xl p-6 bg-white border border-[#E8DEF8] hover:border-[#C89A2B]/40
                transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-[#F5F0FF] transition-all duration-300" />
              <div className="relative z-10 flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <div>
                  <h4 className="font-body text-base font-semibold text-[#3D1578] mb-1">{item.title}</h4>
                  <p className="font-body text-sm text-[#3D1578]/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
              {/* Animated border */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#3D1578] to-[#C89A2B] transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
