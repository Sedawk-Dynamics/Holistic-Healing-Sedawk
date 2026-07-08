'use client'

import { motion } from 'framer-motion'
import { Flower, Leaf, Droplets, Shield, Heart, Sparkles } from 'lucide-react'

const pillars = [
  {
    icon: Leaf,
    title: '100% Natural',
    body: 'Made from the flowering parts of wild plants, trees, and bushes — with zero synthetic ingredients.',
  },
  {
    icon: Droplets,
    title: '38 Flower Essences',
    body: 'Each remedy targets a specific negative emotional state, gently restoring inner harmony and balance.',
  },
  {
    icon: Shield,
    title: 'Safe for Everyone',
    body: 'Completely safe for children, the elderly, pregnant women, and those on conventional medications.',
  },
  {
    icon: Heart,
    title: 'Emotionally Focused',
    body: 'Unlike other therapies, Bach Flower Therapy addresses the emotional root cause behind physical ailments.',
  },
]

export default function WhatIsBach() {
  return (
    <section
      id="what-is-bach"
      className="w-full py-20 lg:py-28"
      style={{ background: '#F7F5FF' }}
      aria-labelledby="what-is-bach-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-5"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-body text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(61,21,120,0.08)', color: '#3D1578' }}
          >
            <Sparkles size={13} />
            Discover the Healing System
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="what-is-bach-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-balance mb-6"
          style={{ color: '#3D1578', lineHeight: '1.15' }}
        >
          What is Bach Flower Therapy?
        </motion.h2>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="font-body text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-6"
          style={{ color: 'rgba(61,21,120,0.65)' }}
        >
          Developed in the 1930s by Dr. Edward Bach — a British physician, bacteriologist, and
          homeopath — Bach Flower Therapy is a gentle, natural healing system that uses the vibrational
          energy of 38 wild flowers to address negative emotional states such as fear, uncertainty,
          loneliness, over-sensitivity, despair, and over-concern for others.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="font-body text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16"
          style={{ color: 'rgba(61,21,120,0.65)' }}
        >
          Dr. Bach believed that <strong className="font-semibold" style={{ color: '#3D1578' }}>disease is a result of disharmony between the soul and the mind</strong>. By restoring emotional balance, the body&apos;s own natural healing ability can work at its most efficient. Today, Bach Flower Therapy is recognised and used worldwide as a complementary approach to health and well-being.
        </motion.p>

        {/* Quote block */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="relative max-w-2xl mx-auto mb-16 px-8 py-6 rounded-2xl text-center"
          style={{
            background: 'rgba(61,21,120,0.06)',
            borderLeft: '4px solid #C89A2B',
          }}
        >
          <Flower
            size={28}
            className="mx-auto mb-3 opacity-40"
            style={{ color: '#C89A2B' }}
            aria-hidden="true"
          />
          <p className="font-heading text-xl md:text-2xl font-medium italic leading-relaxed text-balance" style={{ color: '#3D1578' }}>
            &ldquo;Health depends on being in harmony with our souls.&rdquo;
          </p>
          <cite className="block mt-3 font-body text-sm font-semibold not-italic tracking-wide" style={{ color: '#C89A2B' }}>
            — Dr. Edward Bach
          </cite>
        </motion.blockquote>

        {/* Four pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -40px 0px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col items-start gap-4 p-6 rounded-2xl group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(61,21,120,0.1)',
                boxShadow: '0 2px 12px rgba(61,21,120,0.06)',
              }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl"
                style={{ background: 'rgba(61,21,120,0.08)' }}
                aria-hidden="true"
              >
                <pillar.icon size={22} style={{ color: '#3D1578' }} />
              </div>
              <h3
                className="font-heading text-xl font-semibold"
                style={{ color: '#3D1578' }}
              >
                {pillar.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: 'rgba(61,21,120,0.6)' }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
