'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, Clock, Lightbulb, BookMarked } from 'lucide-react'

const levels = [
  {
    id: 1,
    title: 'Introduction to Bach Flower Therapy',
    subtitle: 'Level-1 • Foundation Course',
    duration: '5 Days',
    hours: '10–15 Hours',
    description: 'Understand the philosophy of Dr. Edward Bach, emotional states, and basic practical use of all 38 remedies.',
    practicals: [
      'Remedy identification exercises',
      'Emotional observation practice',
      'Short case discussions',
      'Self-analysis exercise',
    ],
    outcomes: [
      'Understand all 38 remedies',
      'Select basic remedies confidently',
      'Handle simple emotional cases',
      'Understand emotional roots of illness',
    ],
    color: '#7C4BC9',
  },
  {
    id: 2,
    title: 'Intermediate Practitioner Course',
    subtitle: 'Level-2 • Deep Emotional Analysis & Clinical Application',
    duration: '1 Month',
    hours: '60–70 Hours',
    description: 'Understand deeper emotional layers, personality structures, psychosomatic patterns, and advanced case handling.',
    practicals: [
      'Advanced case studies',
      'Remedy differentiation exercises',
      'Emotional analysis assignments',
      'Mock consultations',
    ],
    outcomes: [
      'Handle deeper emotional cases',
      'Understand psychosomatic illness',
      'Differentiate remedies accurately',
      'Conduct structured consultations',
    ],
    color: '#5A2D8E',
  },
  {
    id: 3,
    title: 'Professional & Integrative Healing Mastery',
    subtitle: 'Advanced Level • Become a Master Practitioner',
    duration: '12 Months',
    hours: '1 Year Full Program',
    description: 'Train students for professional practice, teaching, advanced emotional decoding, and integrative healing with astrology, chakras, and energy work.',
    practicals: [
      'Live consultations',
      'Supervised practice',
      'Case presentations',
      'Research assignments',
      'Teaching demonstration',
    ],
    outcomes: [
      'Practice professionally',
      'Conduct deep emotional healing sessions',
      'Integrate Bach with astrology, chakras, and energy work',
      'Teach Bach Flower Therapy confidently',
      'Handle complex psychosomatic cases',
    ],
    color: '#3D1578',
  },
]

export default function TrainingLevels() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: '#FDFBFA' }}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4" style={{ color: '#3D1578' }}>
            Three Levels of Mastery
          </h2>
          <p className="font-body text-lg" style={{ color: '#5A4A6A' }}>
            Progress from foundation to professional practitioner
          </p>
        </div>

        {/* Levels accordion */}
        <div className="space-y-4">
          {levels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            >
              <div
                className="rounded-xl overflow-hidden border cursor-pointer transition-all duration-300"
                style={{
                  borderColor: expandedId === level.id ? level.color : 'rgba(61,21,120,0.1)',
                  background: expandedId === level.id ? `linear-gradient(135deg, ${level.color}08 0%, ${level.color}04 100%)` : '#FFFFFF',
                }}
                onClick={() => setExpandedId(expandedId === level.id ? null : level.id)}
              >
                {/* Header */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-body text-sm font-semibold px-3 py-1 rounded-full" style={{ color: level.color, background: `${level.color}12` }}>
                          Level {level.id}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-2" style={{ color: level.color }}>
                        {level.title}
                      </h3>
                      <p className="font-body text-sm lg:text-base mb-4" style={{ color: '#5A4A6A' }}>
                        {level.subtitle}
                      </p>

                      {/* Duration pills */}
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2" style={{ color: level.color }}>
                          <Clock size={18} />
                          <span className="font-body text-sm font-semibold">{level.duration}</span>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: '#5A4A6A' }}>
                          <BookMarked size={18} />
                          <span className="font-body text-sm">{level.hours}</span>
                        </div>
                      </div>
                    </div>

                    {/* Expand icon */}
                    <motion.div
                      animate={{ rotate: expandedId === level.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={28} style={{ color: level.color }} />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedId === level.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t"
                      style={{ borderColor: 'rgba(61,21,120,0.1)' }}
                    >
                      <div className="p-6 lg:p-8 space-y-8">
                        {/* Description */}
                        <div>
                          <p className="font-body text-base leading-relaxed" style={{ color: '#5A4A6A' }}>
                            {level.description}
                          </p>
                        </div>

                        {/* Two column layout for practicals and outcomes */}
                        <div className="grid lg:grid-cols-2 gap-8">
                          {/* Practicals */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Lightbulb size={20} style={{ color: level.color }} />
                              <h4 className="font-heading font-bold text-lg" style={{ color: level.color }}>
                                Practical Components
                              </h4>
                            </div>
                            <ul className="space-y-3">
                              {level.practicals.map((practical, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div
                                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                                    style={{ background: `${level.color}20` }}
                                  >
                                    <Check size={14} style={{ color: level.color }} />
                                  </div>
                                  <span className="font-body text-sm" style={{ color: '#333333' }}>
                                    {practical}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Outcomes */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Lightbulb size={20} style={{ color: level.color }} />
                              <h4 className="font-heading font-bold text-lg" style={{ color: level.color }}>
                                Learning Outcomes
                              </h4>
                            </div>
                            <ul className="space-y-3">
                              {level.outcomes.map((outcome, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div
                                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                                    style={{ background: `${level.color}20` }}
                                  >
                                    <Check size={14} style={{ color: level.color }} />
                                  </div>
                                  <span className="font-body text-sm" style={{ color: '#333333' }}>
                                    {outcome}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4 border-t" style={{ borderColor: 'rgba(61,21,120,0.1)' }}>
                          <button
                            className="font-body font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                            style={{
                              background: `linear-gradient(135deg, ${level.color}, ${level.color}dd)`,
                              color: '#F8F5F0',
                            }}
                          >
                            Enroll in Level {level.id}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
