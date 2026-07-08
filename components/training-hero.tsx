'use client'

import { BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TrainingHero() {
  return (
    <section
      className="relative w-full overflow-hidden mt-20"
      style={{
        background: 'linear-gradient(135deg, #F8F5F0 0%, #F0ECEB 50%, #E8E0E8 100%)',
        minHeight: '380px',
      }}
      aria-label="Training page hero"
    >
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #3D1578, transparent)' }} />

      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 30% 50%, rgba(61,21,120,0.06) 0%, transparent 65%), radial-gradient(ellipse 40% 60% at 80% 30%, rgba(61,21,120,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center py-16 lg:py-24">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center w-20 h-20 rounded-full mb-8"
          style={{
            background: 'rgba(61,21,120,0.08)',
            border: '1.5px solid rgba(61,21,120,0.25)',
          }}
          aria-hidden="true"
        >
          <BookOpen size={44} style={{ color: '#3D1578', strokeWidth: 1.5 }} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold leading-none tracking-tight text-balance mb-6"
          style={{
            fontSize: 'clamp(2rem, 5.5vw, 4.2rem)',
            color: '#3D1578',
            letterSpacing: '-0.01em',
          }}
        >
          Structured Learning Pathway
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-lg md:text-xl leading-relaxed max-w-2xl text-pretty"
          style={{ color: '#5A4A6A' }}
        >
          Master Bach Flower Therapy through progressive levels of learning and practice
        </motion.p>

        {/* Level indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mt-10 flex-wrap"
        >
          <span className="font-body text-sm font-semibold px-4 py-2 rounded-full" style={{ color: '#3D1578', background: 'rgba(61,21,120,0.08)' }}>
            Level 1
          </span>
          <span className="text-xs" style={{ color: '#5A4A6A' }}>•</span>
          <span className="font-body text-sm font-semibold px-4 py-2 rounded-full" style={{ color: '#3D1578', background: 'rgba(61,21,120,0.08)' }}>
            Level 2
          </span>
          <span className="text-xs" style={{ color: '#5A4A6A' }}>•</span>
          <span className="font-body text-sm font-semibold px-4 py-2 rounded-full" style={{ color: '#3D1578', background: 'rgba(61,21,120,0.08)' }}>
            Advanced
          </span>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #3D1578 40%, #3D1578 60%, transparent)' }} />
    </section>
  )
}
