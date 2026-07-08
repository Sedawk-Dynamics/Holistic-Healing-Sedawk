'use client'

import { motion } from 'framer-motion'
import {
  AlertCircle, Wind, Eye, Flame, Moon, Star,
  HeartHandshake, CloudRain, Brain, Smile
} from 'lucide-react'

const conditions = [
  { icon: AlertCircle, title: 'Stress Management', description: 'Release chronic stress patterns and restore natural calm with targeted flower essences.', gradient: 'from-[#3D1578] to-[#6B35C4]' },
  { icon: Wind, title: 'Anxiety Relief', description: 'Ease racing thoughts and fearful anticipation through gentle emotional rebalancing.', gradient: 'from-[#C89A2B] to-[#E0B84A]' },
  { icon: Eye, title: 'Fear & Phobias', description: 'Overcome specific fears and deeply rooted phobias at their emotional source.', gradient: 'from-[#3D1578] to-[#B8A5E5]' },
  { icon: Flame, title: 'Anger Management', description: 'Transform anger, irritability, and resentment into understanding and patience.', gradient: 'from-[#76C043] to-[#3D9B1C]' },
  { icon: Moon, title: 'Sleep Disorders', description: 'Calm an overactive mind and invite the deep restorative sleep your body craves.', gradient: 'from-[#3D1578] to-[#2A0D56]' },
  { icon: Star, title: 'Confidence Issues', description: 'Dissolve self-doubt and cultivate unshakeable self-belief and personal power.', gradient: 'from-[#C89A2B] to-[#9A7315]' },
  { icon: HeartHandshake, title: 'Relationship Challenges', description: 'Heal relational wounds and develop deeper, more authentic connections.', gradient: 'from-[#B8A5E5] to-[#3D1578]' },
  { icon: CloudRain, title: 'Depression Support', description: 'Lift emotional heaviness and rediscover joy, motivation, and life purpose.', gradient: 'from-[#76C043] to-[#C89A2B]' },
  { icon: Brain, title: 'Mental Wellness', description: 'Strengthen emotional resilience and cultivate lasting psychological wellbeing.', gradient: 'from-[#3D1578] to-[#C89A2B]' },
  { icon: Smile, title: 'Overall Emotional Health', description: 'Achieve holistic harmony across all dimensions of your emotional life.', gradient: 'from-[#C89A2B] to-[#3D1578]' },
]

export default function Conditions() {
  return (
    <section id="therapy" className="section-padding relative overflow-hidden" aria-label="Conditions we help with">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0FF] via-[#FDFCFF] to-[#FFF8E8]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#C89A2B]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-[#3D1578]/8 blur-3xl pointer-events-none" />

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
            Healing Scope
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#3D1578] leading-tight mb-5 text-balance">
            Restore Balance in{' '}
            <span className="text-gradient-gold">Every Aspect of Life</span>
          </h2>
          <p className="font-body text-[#3D1578]/65 text-lg leading-relaxed">
            Natural emotional wellness for everyday challenges — no matter how long you&apos;ve struggled,
            healing is always possible with the right remedy.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {conditions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl p-5 bg-white border border-[#E8DEF8]
                hover:border-transparent hover:shadow-xl hover:shadow-[#3D1578]/10
                transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              <div className="relative z-10">
                <div className={`w-11 h-11 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${item.gradient} opacity-100`}>
                  <item.icon size={20} className="text-white" />
                </div>
                <h3 className="font-body text-sm font-bold text-[#3D1578] group-hover:text-white mb-2 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-[#3D1578]/60 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: conditions.length * 0.07 }}
            className="rounded-2xl p-5 bg-gradient-to-br from-[#3D1578] to-[#6B35C4]
              border border-[#C89A2B]/20 flex flex-col items-start justify-between"
          >
            <p className="font-heading text-lg font-semibold text-white leading-snug mb-4">
              Not sure if Bach Flower Therapy is right for you?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold font-body
                bg-[#C89A2B] text-white hover:bg-[#E0B84A] transition-colors duration-200"
            >
              Get Free Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
