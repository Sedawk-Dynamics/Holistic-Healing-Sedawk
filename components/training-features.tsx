'use client'

import { motion } from 'framer-motion'
import { Users, Award, Zap, BookOpen, Globe, Heart } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'From foundational knowledge to advanced mastery across all three levels',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from certified practitioners with years of professional experience',
  },
  {
    icon: Award,
    title: 'Industry Recognized',
    description: 'IAAH-certified training with global recognition and professional credentials',
  },
  {
    icon: Zap,
    title: 'Practical Application',
    description: 'Hands-on exercises, case studies, and real-world consultation experience',
  },
  {
    icon: Globe,
    title: 'Career Ready',
    description: 'Build a professional practice or integrate Bach Flower Therapy into existing work',
  },
  {
    icon: Heart,
    title: 'Personal Transformation',
    description: 'Develop emotional mastery and personal healing alongside professional growth',
  },
]

export default function TrainingFeatures() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4" style={{ color: '#3D1578' }}>
            Why Choose Our Training
          </h2>
          <p className="font-body text-lg" style={{ color: '#5A4A6A' }}>
            Comprehensive Bach Flower Therapy education designed for your success
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                className="group p-8 rounded-xl border transition-all duration-300 hover:shadow-lg hover:border-transparent"
                style={{
                  borderColor: 'rgba(61,21,120,0.1)',
                  background: 'linear-gradient(135deg, #FDFBFA 0%, #F8F5F0 100%)',
                }}
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full mb-6 group-hover:scale-110 transition-transform"
                  style={{
                    background: 'rgba(61,21,120,0.1)',
                  }}
                >
                  <Icon size={24} style={{ color: '#3D1578' }} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#3D1578' }}>
                  {feature.title}
                </h3>
                <p className="font-body text-base" style={{ color: '#5A4A6A' }}>
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
