'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const programs = [
  {
    title: 'Foundation Program',
    subtitle: 'Begin Your Healing Education',
    duration: '4 Weeks',
    price: '₹8,999',
    priceNote: 'or ₹3,000/month',
    description: 'Perfect for individuals curious about Bach Flower Therapy who want to understand the essences and use them for personal healing.',
    features: [
      'Introduction to all 38 flower essences',
      'Understanding the 7 emotional groups',
      'Self-assessment and remedy selection',
      'Practical application techniques',
      'Certificate of Completion',
      'Study materials included',
    ],
    badge: null,
    gradient: 'from-[#F5F0FF] to-white',
    borderColor: 'border-[#E8DEF8]',
    buttonStyle: 'border-2 border-[#3D1578] text-[#3D1578] hover:bg-[#3D1578] hover:text-white',
    accentColor: '#3D1578',
  },
  {
    title: 'Therapist Certification',
    subtitle: 'Transform Lives Professionally',
    duration: '12 Weeks',
    price: '₹24,999',
    priceNote: 'EMI available',
    description: 'A comprehensive practitioner program that equips you to offer professional Bach Flower Therapy consultations.',
    features: [
      'Complete 38 remedy mastery',
      'Advanced consultation techniques',
      'Case study methodology',
      'Business & ethics training',
      'Supervised client practice',
      'International recognition certificate',
      'Ongoing mentorship support',
    ],
    badge: 'Most Popular',
    gradient: 'from-[#3D1578] to-[#2A0D56]',
    borderColor: 'border-[#C89A2B]/40',
    buttonStyle: 'bg-[#C89A2B] text-white hover:bg-[#E0B84A]',
    accentColor: '#C89A2B',
    dark: true,
  },
  {
    title: 'Advanced Trainer Program',
    subtitle: 'Lead & Teach the Next Generation',
    duration: '20 Weeks',
    price: '₹49,999',
    priceNote: 'Flexible payment plans',
    description: 'The elite track for experienced practitioners who wish to teach, train, and lead workshops on Bach Flower Therapy globally.',
    features: [
      'All Therapist Certification content',
      'Advanced teaching methodology',
      'Workshop design & facilitation',
      'International trainer certification',
      'Marketing & practice growth',
      'Lifetime alumni network access',
    ],
    badge: 'Premium',
    gradient: 'from-[#FFF8E8] to-white',
    borderColor: 'border-[#C89A2B]/30',
    buttonStyle: 'border-2 border-[#C89A2B] text-[#C89A2B] hover:bg-[#C89A2B] hover:text-white',
    accentColor: '#C89A2B',
  },
]

export default function Training() {
  return (
    <section id="training" className="section-padding relative overflow-hidden" aria-label="Training programs">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDFCFF] via-[#F5F0FF] to-[#FDFCFF]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#3D1578]/5 blur-3xl pointer-events-none" />

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
            Heal. Learn. Lead.
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#3D1578] leading-tight mb-5 text-balance">
            Turn Your Passion Into{' '}
            <span className="text-gradient-gold">a Healing Profession</span>
          </h2>
          <p className="font-body text-[#3D1578]/65 text-lg leading-relaxed">
            Whether you&apos;re healing yourself or building a career, our professionally structured programs
            provide everything you need to thrive in Bach Flower Therapy.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {programs.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-7 border ${plan.borderColor}
                bg-gradient-to-br ${plan.gradient}
                shadow-lg hover:shadow-2xl hover:shadow-[#3D1578]/10
                transition-all duration-400 overflow-hidden`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold font-body
                    bg-[#C89A2B] text-white">
                    <Star size={10} className="fill-white" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span className={`font-body text-xs font-semibold tracking-wider uppercase ${plan.dark ? 'text-[#C89A2B]' : 'text-[#C89A2B]'}`}>
                  {plan.duration}
                </span>
                <h3 className={`font-heading text-2xl font-semibold mt-1 mb-1 ${plan.dark ? 'text-white' : 'text-[#3D1578]'}`}>
                  {plan.title}
                </h3>
                <p className={`font-body text-sm ${plan.dark ? 'text-white/60' : 'text-[#3D1578]/60'}`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <span className={`font-heading text-4xl font-bold ${plan.dark ? 'text-white' : 'text-[#3D1578]'}`}>
                  {plan.price}
                </span>
                <span className={`font-body text-sm ml-2 ${plan.dark ? 'text-white/50' : 'text-[#3D1578]/50'}`}>
                  {plan.priceNote}
                </span>
              </div>

              <p className={`font-body text-sm leading-relaxed mb-6 ${plan.dark ? 'text-white/70' : 'text-[#3D1578]/65'}`}>
                {plan.description}
              </p>

              {/* Divider */}
              <div className={`h-px mb-6 ${plan.dark ? 'bg-white/15' : 'bg-[#E8DEF8]'}`} />

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5
                      ${plan.dark ? 'bg-[#C89A2B]/20' : 'bg-[#3D1578]/10'}`}>
                      <Check size={11} className={plan.dark ? 'text-[#C89A2B]' : 'text-[#3D1578]'} />
                    </div>
                    <span className={`font-body text-sm ${plan.dark ? 'text-white/75' : 'text-[#3D1578]/70'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center px-6 py-3.5 rounded-2xl font-body font-semibold text-sm
                  transition-all duration-300 ${plan.buttonStyle}`}
              >
                Enroll Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
