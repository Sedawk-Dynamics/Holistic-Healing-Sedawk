'use client'

import { motion } from 'framer-motion'
import { Flower } from 'lucide-react'

export default function RemediesPageHero() {
  return (
    <section
      className="relative w-full pt-20 pb-12 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3D1578 0%, #5A2D8E 35%, #4E1A8C 65%, #3D1578 100%)',
      }}
      aria-label="38 Remedies Hero"
    >
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89A2B, transparent)' }} />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(200,154,43,0.15) 0%, rgba(200,154,43,0.03) 40%, transparent 70%)'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-6"
        >
          <div
            className="flex items-center justify-center w-20 h-20 rounded-full"
            style={{
              background: 'rgba(200,154,43,0.12)',
              border: '1.5px solid rgba(200,154,43,0.35)',
            }}
          >
            <Flower size={44} style={{ color: '#C89A2B', strokeWidth: 1.5 }} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-bold leading-tight text-balance mb-4"
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
            color: '#F0E5FF',
            textShadow: '0 2px 12px rgba(200,154,43,0.25)',
          }}
        >
          The 38 Bach Flower Remedies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: '#D9C9E8' }}
        >
          Discover nature&apos;s complete system for emotional healing, organized into 7 groups by Dr. Edward Bach
        </motion.p>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89A2B 40%, #C89A2B 60%, transparent)' }} />
    </section>
  )
}
