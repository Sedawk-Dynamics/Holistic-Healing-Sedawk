'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flower, X } from 'lucide-react'

const remedyGroups = [
  {
    name: 'Fear',
    color: '#3D1578',
    bg: 'from-[#3D1578]/15 to-[#3D1578]/5',
    border: 'border-[#3D1578]/20',
    remedies: [
      { name: 'Rock Rose', emotion: 'Terror & panic' },
      { name: 'Mimulus', emotion: 'Known fears & phobias' },
      { name: 'Cherry Plum', emotion: 'Fear of losing control' },
      { name: 'Aspen', emotion: 'Unknown, vague fears' },
      { name: 'Red Chestnut', emotion: 'Fear for others' },
    ],
  },
  {
    name: 'Uncertainty',
    color: '#C89A2B',
    bg: 'from-[#C89A2B]/15 to-[#C89A2B]/5',
    border: 'border-[#C89A2B]/20',
    remedies: [
      { name: 'Cerato', emotion: 'Lack of trust in oneself' },
      { name: 'Scleranthus', emotion: 'Indecision' },
      { name: 'Gentian', emotion: 'Discouragement' },
      { name: 'Gorse', emotion: 'Hopelessness' },
      { name: 'Hornbeam', emotion: 'Mental fatigue' },
      { name: 'Wild Oat', emotion: 'Uncertainty of direction' },
    ],
  },
  {
    name: 'Insufficient Interest',
    color: '#76C043',
    bg: 'from-[#76C043]/15 to-[#76C043]/5',
    border: 'border-[#76C043]/20',
    remedies: [
      { name: 'Clematis', emotion: 'Dreaminess, lack of interest' },
      { name: 'Honeysuckle', emotion: 'Living in the past' },
      { name: 'Wild Rose', emotion: 'Resignation, apathy' },
      { name: 'Olive', emotion: 'Exhaustion' },
      { name: 'White Chestnut', emotion: 'Unwanted thoughts' },
      { name: 'Mustard', emotion: 'Deep gloom' },
      { name: 'Chestnut Bud', emotion: 'Failure to learn lessons' },
    ],
  },
  {
    name: 'Loneliness',
    color: '#B8A5E5',
    bg: 'from-[#B8A5E5]/30 to-[#B8A5E5]/10',
    border: 'border-[#B8A5E5]/30',
    remedies: [
      { name: 'Water Violet', emotion: 'Aloofness, pride' },
      { name: 'Impatiens', emotion: 'Impatience' },
      { name: 'Heather', emotion: 'Self-absorption' },
    ],
  },
  {
    name: 'Oversensitivity',
    color: '#3D1578',
    bg: 'from-[#3D1578]/10 to-[#3D1578]/3',
    border: 'border-[#3D1578]/15',
    remedies: [
      { name: 'Agrimony', emotion: 'Concealed worry' },
      { name: 'Centaury', emotion: 'Weak will' },
      { name: 'Walnut', emotion: 'Transition & change' },
      { name: 'Holly', emotion: 'Hatred, envy, jealousy' },
    ],
  },
  {
    name: 'Despondency',
    color: '#C89A2B',
    bg: 'from-[#C89A2B]/12 to-[#C89A2B]/3',
    border: 'border-[#C89A2B]/15',
    remedies: [
      { name: 'Larch', emotion: 'Lack of confidence' },
      { name: 'Pine', emotion: 'Guilt & self-blame' },
      { name: 'Elm', emotion: 'Overwhelm' },
      { name: 'Sweet Chestnut', emotion: 'Extreme mental anguish' },
      { name: 'Star of Bethlehem', emotion: 'Shock & grief' },
      { name: 'Willow', emotion: 'Resentment & bitterness' },
      { name: 'Oak', emotion: 'Overwork without rest' },
      { name: 'Crab Apple', emotion: 'Self-disgust, cleansing' },
    ],
  },
  {
    name: 'Over-care for Others',
    color: '#76C043',
    bg: 'from-[#76C043]/12 to-[#76C043]/3',
    border: 'border-[#76C043]/15',
    remedies: [
      { name: 'Chicory', emotion: 'Possessive love' },
      { name: 'Vervain', emotion: 'Over-enthusiasm' },
      { name: 'Vine', emotion: 'Domineering' },
      { name: 'Beech', emotion: 'Intolerance' },
      { name: 'Rock Water', emotion: 'Self-repression' },
    ],
  },
]

// Emergency remedy
const emergencyRemedy = {
  name: 'Rescue Remedy',
  description: 'The iconic emergency composite of Rock Rose, Impatiens, Clematis, Star of Bethlehem, and Cherry Plum. Used for acute stress, shock, and emotional emergencies.',
  color: '#C89A2B',
}

export default function Remedies() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  const totalRemedies = remedyGroups.reduce((sum, g) => sum + g.remedies.length, 0)

  return (
    <section id="remedies" className="section-padding relative overflow-hidden bg-[#FDFCFF]" aria-label="38 Bach Flower Remedies">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#F5F0FF_0%,_transparent_55%)]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#C89A2B]/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-[#C89A2B] mb-4">
            The Complete System
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#3D1578] leading-tight mb-5 text-balance">
            All {totalRemedies} Remedies,{' '}
            <span className="text-gradient-gold">7 Emotional Groups</span>
          </h2>
          <p className="font-body text-[#3D1578]/65 text-lg leading-relaxed">
            Dr. Bach organized his 38 flower essences into seven groups based on emotional states.
            Click any group to explore the remedies within it.
          </p>
        </motion.div>

        {/* Group cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {remedyGroups.map((group, i) => (
            <motion.button
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setActiveGroup(activeGroup === group.name ? null : group.name)}
              className={`relative rounded-2xl p-5 border text-left transition-all duration-300
                ${activeGroup === group.name
                  ? 'bg-white shadow-xl shadow-[#3D1578]/12 border-transparent scale-[1.02]'
                  : `bg-white border-[#E8DEF8] hover:border-[${group.color}]/30 hover:shadow-md`
                }`}
              aria-expanded={activeGroup === group.name}
            >
              {activeGroup === group.name && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-100"
                  style={{ background: `linear-gradient(135deg, ${group.color}18, ${group.color}08)`, border: `1.5px solid ${group.color}30` }}
                />
              )}
              <div className="relative z-10">
                <div
                  className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center bg-gradient-to-br ${group.bg}`}
                >
                  <Flower size={18} style={{ color: group.color }} />
                </div>
                <h3 className="font-body text-sm font-bold text-[#3D1578] mb-1">{group.name}</h3>
                <p className="font-body text-xs text-[#3D1578]/50">{group.remedies.length} remedies</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Expanded group view */}
        <AnimatePresence mode="wait">
          {activeGroup && (
            <motion.div
              key={activeGroup}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              {remedyGroups.filter(g => g.name === activeGroup).map(group => (
                <div
                  key={group.name}
                  className="rounded-2xl p-6 mb-8 border"
                  style={{ background: `linear-gradient(135deg, ${group.color}10, white)`, borderColor: `${group.color}25` }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <h4 className="font-heading text-xl font-semibold" style={{ color: group.color }}>
                      Group: {group.name}
                    </h4>
                    <button
                      onClick={() => setActiveGroup(null)}
                      aria-label="Close group"
                      className="w-7 h-7 rounded-full bg-white/60 border border-[#E8DEF8] flex items-center justify-center text-[#3D1578]/40 hover:text-[#3D1578] transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {group.remedies.map((remedy) => (
                      <div
                        key={remedy.name}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white shadow-sm hover:shadow-md transition-shadow"
                      >
                        <p className="font-body text-sm font-bold text-[#3D1578] mb-1">{remedy.name}</p>
                        <p className="font-body text-xs text-[#3D1578]/55 leading-relaxed">{remedy.emotion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rescue Remedy highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-7 bg-gradient-to-br from-[#3D1578] to-[#2A0D56] border border-[#C89A2B]/30 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#C89A2B]/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#C89A2B]/20 border border-[#C89A2B]/40 flex items-center justify-center flex-shrink-0">
              <Flower size={26} className="text-[#C89A2B]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-heading text-2xl font-semibold text-white">Rescue Remedy</h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold font-body bg-[#C89A2B]/20 text-[#C89A2B] border border-[#C89A2B]/30">
                  Emergency Composite
                </span>
              </div>
              <p className="font-body text-sm text-white/65 leading-relaxed max-w-2xl">
                {emergencyRemedy.description}
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center px-6 py-3 rounded-xl font-body text-sm font-semibold
                bg-[#C89A2B] text-white hover:bg-[#E0B84A] transition-colors duration-200"
            >
              Ask About Remedies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
