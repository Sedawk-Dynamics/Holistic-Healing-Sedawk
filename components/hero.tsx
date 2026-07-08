'use client'

import { motion } from 'framer-motion'
import { Flower } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden mt-20"
      style={{
        background: 'linear-gradient(135deg, #F8F5F0 0%, #F0ECEB 50%, #E8E0E8 100%)',
        minHeight: '560px',
      }}
      aria-label="Hero section"
    >
      {/* Gold decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #3D1578, transparent)' }} />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 30% 50%, rgba(61,21,120,0.06) 0%, transparent 65%), radial-gradient(ellipse 40% 60% at 80% 30%, rgba(61,21,120,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center" style={{ minHeight: '560px' }}>

        {/* LEFT — text content, 50% */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-7 py-20 lg:py-24 lg:pr-10">

          {/* Flower icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center justify-center w-20 h-20 rounded-full"
            style={{
              background: 'rgba(61,21,120,0.08)',
              border: '1.5px solid rgba(61,21,120,0.25)',
            }}
            aria-hidden="true"
          >
            <Flower size={44} style={{ color: '#3D1578', strokeWidth: 1.5 }} />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading font-bold leading-none tracking-tight text-balance"
            style={{
              fontSize: 'clamp(2.6rem, 6.5vw, 5.2rem)',
              color: '#3D1578',
              letterSpacing: '-0.01em',
            }}
          >
            Bach Flower Therapy
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-lg md:text-xl leading-relaxed max-w-xl text-pretty"
            style={{ color: '#5A4A6A' }}
          >
            Heal your emotions, transform your life. IAAH-certified training with global recognition.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#training"
              className="inline-flex items-center px-8 py-4 rounded-full font-body font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                background: 'linear-gradient(135deg, #3D1578, #5A2D8E)',
                color: '#F8F5F0',
                boxShadow: '0 4px 24px rgba(61,21,120,0.35)',
              }}
            >
              Start Your Training
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-full font-body font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/40"
              style={{
                background: 'rgba(61,21,120,0.05)',
                color: '#3D1578',
                border: '1.5px solid rgba(61,21,120,0.2)',
              }}
            >
              Book a Session
            </a>
          </motion.div>
        </div>

        {/* RIGHT — image, 50% */}
        <motion.div
          className="hidden lg:flex w-1/2 h-full items-end justify-center self-stretch relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          aria-hidden="true"
        >
          {/* Soft glow behind image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 60% 50%, rgba(61,21,120,0.08) 0%, transparent 70%)',
            }}
          />
          <div className="relative w-full h-full" style={{ minHeight: '560px' }}>
            <Image
              src="/images/hero-flower-light.png"
              alt="Serene figure surrounded by Bach flowers in a healing meditation"
              fill
              className="object-cover object-center"
              priority
              sizes="50vw"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </motion.div>

      </div>

      {/* Purple decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #3D1578 40%, #3D1578 60%, transparent)' }} />
    </section>
  )
}
