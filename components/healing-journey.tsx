'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, ClipboardList, Beaker, Sprout, Sun } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    step: '01',
    title: 'Book Your Consultation',
    description: 'Choose a convenient time for your initial session — available online or in-person. No prior knowledge of Bach Flower Therapy is needed.',
    color: '#3D1578',
    bg: 'from-[#3D1578] to-[#6B35C4]',   
    
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Emotional Assessment',
    description: 'In a warm, confidential conversation, our practitioner deeply explores your emotional world, current challenges, and underlying patterns.',
    color: '#C89A2B',
    bg: 'from-[#C89A2B] to-[#E0B84A]',
  },
  {
    icon: Beaker,
    step: '03',
    title: 'Flower Remedy Selection',
    description: 'Your unique remedy blend is carefully prepared from Dr. Bach\'s 38 flower essences, precisely matched to your emotional signature.',
    color: '#76C043',
    bg: 'from-[#76C043] to-[#3D9B1C]',
  },
  {
    icon: Sprout,
    step: '04',
    title: 'Begin Your Healing Journey',
    description: 'Take your bespoke remedy blend as directed. Most people begin noticing positive emotional shifts within the first few weeks.',
    color: '#B8A5E5',
    bg: 'from-[#B8A5E5] to-[#3D1578]',
  },
  {
    icon: Sun,
    step: '05',
    title: 'Thrive in Balanced Living',
    description: 'Experience lasting emotional freedom, inner peace, and a renewed sense of purpose — your natural, balanced state of well-being.',
    color: '#C89A2B',
    bg: 'from-[#C89A2B] to-[#3D1578]',
  },
]

export default function HealingJourney() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#FDFCFF]" aria-label="Your healing journey">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#F5F0FF_0%,_transparent_60%)]" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#C89A2B]/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-[#C89A2B] mb-4">
            Your Path to Healing
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#3D1578] leading-tight mb-5 text-balance">
            From First Session to{' '}
            <span className="text-gradient-gold">Lasting Freedom</span>
          </h2>
          <p className="font-body text-[#3D1578]/65 text-lg leading-relaxed">
            A simple, proven five-step journey designed to guide you from emotional struggle to genuine, lasting well-being.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#3D1578]/20 via-[#C89A2B]/30 to-[#3D1578]/20 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative flex gap-6 items-start"
              >
                {/* Icon circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.bg} flex items-center justify-center shadow-lg`}>
                    <step.icon size={26} className="text-white" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-[#C89A2B] flex items-center justify-center">
                    <span className="font-body text-[10px] font-bold text-[#C89A2B]">{i + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-4">
                  <div className="group-hover:bg-white group-hover:border-[#C89A2B]/20 group-hover:shadow-lg
                    transition-all duration-300 rounded-2xl p-5 border border-transparent">
                    <h3 className="font-body text-lg font-bold text-[#3D1578] mb-2">{step.title}</h3>
                    <p className="font-body text-sm text-[#3D1578]/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-body font-semibold text-white
              bg-gradient-to-r from-[#3D1578] to-[#6B35C4]
              hover:shadow-xl hover:shadow-[#3D1578]/30 hover:-translate-y-1
              transition-all duration-300"
          >
            Begin Your Healing Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
