'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Flower, Shield, Zap } from 'lucide-react'

const stats = [
  { icon: Users, value: 700, suffix: '+', label: 'Lives Transformed', description: 'Individuals healed naturally', color: 'text-[#3D1578]', bg: 'from-[#3D1578]/10 to-[#3D1578]/5' },
  { icon: Flower, value: 38, suffix: '', label: 'Healing Flower Remedies', description: 'Dr. Bach\'s original system', color: 'text-[#C89A2B]', bg: 'from-[#C89A2B]/15 to-[#C89A2B]/5' },
  { icon: Shield, value: 100, suffix: '%', label: 'Natural & Safe', description: 'Clinically gentle healing', color: 'text-[#76C043]', bg: 'from-[#76C043]/15 to-[#76C043]/5' },
  { icon: Zap, value: 0, suffix: '', label: 'Side Effects', description: 'Safe for all ages', color: 'text-[#B8A5E5]', bg: 'from-[#B8A5E5]/30 to-[#B8A5E5]/10' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' })

  useEffect(() => {
    if (!inView) return
    if (target === 0) { setCount(0); return }
    const duration = 1800
    const steps = 50
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {target === 0 ? '0' : count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-16 overflow-hidden" aria-label="Key statistics">
      {/* Background */}
      <div className="absolute inset-0 bg-[#3D1578]" />
      <div className="absolute inset-0 bg-[url('/images/hero-illustration.png')] bg-cover bg-center opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C89A2B]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C89A2B]/50 to-transparent" />

      {/* Orbs */}
      <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-[#C89A2B]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-[#B8A5E5]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center gap-3 p-6 rounded-2xl
                bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C89A2B]/30
                transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.bg} flex items-center justify-center mb-1`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <div className={`font-heading text-4xl font-bold ${stat.color}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-white">{stat.label}</p>
                <p className="font-body text-xs text-white/50 mt-0.5">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
