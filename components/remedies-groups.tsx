'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface Remedy {
  name: string
  challenge: string
  transformation: string
}

interface Group {
  id: string
  name: string
  description: string
  remedies: Remedy[]
}

interface RemedyImage {
  src: string
  width: number
  height: number
}

// Illustrated remedy posters (public/remedies), keyed by remedy name.
// Any remedy present here renders as its image card; others keep the text card.
const IMG = '/remedies/WhatsApp%20Image%202026-07-11%20at%2015.44.'
const remedyImages: Record<string, RemedyImage> = {
  // Fear
  'Rock Rose': { src: `${IMG}34.jpeg`, width: 1216, height: 1294 },
  'Mimulus': { src: `${IMG}32.jpeg`, width: 1212, height: 1297 },
  'Cherry Plum': { src: `${IMG}26%20(2).jpeg`, width: 1214, height: 1296 },
  'Aspen': { src: `${IMG}23.jpeg`, width: 1204, height: 1306 },
  'Red Chestnut': { src: `${IMG}33%20(2).jpeg`, width: 1216, height: 1294 },
  // Uncertainty
  'Cerato': { src: `${IMG}26%20(1).jpeg`, width: 1199, height: 1312 },
  'Scleranthus': { src: `${IMG}34%20(2).jpeg`, width: 1216, height: 1294 },
  'Gentian': { src: `${IMG}29.jpeg`, width: 1216, height: 1294 },
  'Gorse': { src: `${IMG}29%20(1).jpeg`, width: 1217, height: 1292 },
  'Hornbeam': { src: `${IMG}30%20(2).jpeg`, width: 1212, height: 1298 },
  'Wild Oat': { src: `${IMG}37%20(2).jpeg`, width: 1216, height: 1294 },
  // Insufficient Interest in Present
  'Clematis': { src: `${IMG}27%20(2).jpeg`, width: 1216, height: 1294 },
  'Honeysuckle': { src: `${IMG}30%20(1).jpeg`, width: 1216, height: 1294 },
  'Wild Rose': { src: `${IMG}38.jpeg`, width: 1216, height: 1294 },
  'Olive': { src: `${IMG}33.jpeg`, width: 1214, height: 1296 },
  'White Chestnut': { src: `${IMG}37%20(1).jpeg`, width: 1216, height: 1294 },
  'Mustard': { src: `${IMG}32%20(1).jpeg`, width: 1211, height: 1299 },
  'Chestnut Bud': { src: `${IMG}27.jpeg`, width: 1204, height: 1306 },
  // Loneliness
  'Water Violet': { src: `${IMG}37.jpeg`, width: 1216, height: 1294 },
  'Impatiens': { src: `${IMG}31.jpeg`, width: 1212, height: 1298 },
  'Heather': { src: `${IMG}29%20(2).jpeg`, width: 1213, height: 1296 },
  // Over-sensitivity to Influences
  'Agrimony': { src: `${IMG}22.jpeg`, width: 1204, height: 1306 },
  'Centaury': { src: `${IMG}26.jpeg`, width: 1201, height: 1309 },
  'Walnut': { src: `${IMG}36%20(2).jpeg`, width: 1216, height: 1294 },
  'Holly': { src: `${IMG}30.jpeg`, width: 1211, height: 1299 },
  // Despondency or Despair
  'Larch': { src: `${IMG}31%20(1).jpeg`, width: 1212, height: 1298 },
  'Pine': { src: `${IMG}33%20(1).jpeg`, width: 1215, height: 1295 },
  'Elm': { src: `${IMG}28%20(1).jpeg`, width: 1216, height: 1294 },
  'Sweet Chestnut': { src: `${IMG}35%20(1).jpeg`, width: 1216, height: 1294 },
  'Star of Bethlehem': { src: `${IMG}35.jpeg`, width: 1209, height: 1300 },
  'Willow': { src: `${IMG}38%20(1).jpeg`, width: 1216, height: 1294 },
  'Oak': { src: '/remedies/Oak.jpeg', width: 1212, height: 1298 },
  'Crab Apple': { src: '/remedies/Crab-apple.jpeg', width: 1208, height: 1302 },
  'Rescue Remedy': { src: '/remedies/Rescue-Remedy.jpeg', width: 1216, height: 1294 },
  // Over-care for Welfare of Others
  'Chicory': { src: `${IMG}27%20(1).jpeg`, width: 1210, height: 1300 },
  'Vervain': { src: `${IMG}36.jpeg`, width: 1216, height: 1294 },
  'Vine': { src: `${IMG}36%20(1).jpeg`, width: 1216, height: 1294 },
  'Beech': { src: `${IMG}25.jpeg`, width: 1199, height: 1312 },
  'Rock Water': { src: `${IMG}34%20(1).jpeg`, width: 1216, height: 1294 },
}

const groups: Group[] = [
  {
    id: 'fear',
    name: 'Fear',
    description: 'For those who experience fear in its various forms',
    remedies: [
      {
        name: 'Rock Rose',
        challenge: 'Terror, extreme fear, panic',
        transformation: 'Courage and presence of mind',
      },
      {
        name: 'Mimulus',
        challenge: 'Known fears – illness, pain, accidents, poverty, darkness, being alone',
        transformation: 'Bravery and confidence to face life',
      },
      {
        name: 'Cherry Plum',
        challenge: 'Fear of losing control, uncontrollable rages, impulses',
        transformation: 'Composure and calm even under great strain',
      },
      {
        name: 'Aspen',
        challenge: 'Vague, unknown fears, sense of foreboding, anxiety',
        transformation: 'Inner peace and fearlessness',
      },
      {
        name: 'Red Chestnut',
        challenge: 'Excessive fear and worry for loved ones',
        transformation: 'Calm concern and rational care for others',
      },
    ],
  },
  {
    id: 'uncertainty',
    name: 'Uncertainty',
    description: 'For those experiencing doubt, indecision, or a lack of direction.',
    remedies: [
      {
        name: 'Cerato',
        challenge: 'Seeking validation from others instead of trusting personal judgment.',
        transformation: 'Develops self-confidence and trust in inner wisdom.',
      },
      {
        name: 'Scleranthus',
        challenge: 'Struggling to choose between alternatives and experiencing emotional ups and downs.',
        transformation: 'Encourages inner stability and decisive action.',
      },
      {
        name: 'Gentian',
        challenge: 'Becoming discouraged when plans do not go as expected.',
        transformation: 'Builds resilience, optimism, and determination.',
      },
      {
        name: 'Gorse',
        challenge: 'Feeling that circumstances cannot improve and losing hope.',
        transformation: 'Inspires renewed faith and a brighter perspective.',
      },
      {
        name: 'Hornbeam',
        challenge: 'Mental exhaustion and difficulty finding the energy to begin tasks.',
        transformation: 'Restores enthusiasm, focus, and mental strength.',
      },
      {
        name: 'Wild Oat',
        challenge: 'Feeling uncertain about one\'s path, ambitions, or future direction.',
        transformation: 'Brings clarity of purpose and confidence in life\'s journey.',
      },
    ],
  },
  {
    id: 'insufficient-interest',
    name: 'Insufficient Interest in Present',
    description: 'For those who struggle to engage fully with the present moment.',
    remedies: [
      {
        name: 'Clematis',
        challenge: 'Living more in imagination than in present-day experiences.',
        transformation: 'Encourages focus, awareness, and active involvement in life.',
      },
      {
        name: 'Honeysuckle',
        challenge: 'Being emotionally attached to the past or longing for what has been.',
        transformation: 'Promotes acceptance of the past while embracing the present.',
      },
      {
        name: 'Wild Rose',
        challenge: 'Feeling indifferent, uninspired, or unwilling to make changes.',
        transformation: 'Rekindles motivation, ambition, and enthusiasm for life.',
      },
      {
        name: 'Olive',
        challenge: 'Deep exhaustion caused by sustained effort, stress, or responsibility.',
        transformation: 'Supports recovery, vitality, and renewed strength.',
      },
      {
        name: 'White Chestnut',
        challenge: 'Repetitive thinking, mental overactivity, and difficulty switching off.',
        transformation: 'Brings mental clarity, peace, and constructive thought patterns.',
      },
      {
        name: 'Mustard',
        challenge: 'Sudden feelings of gloom or sadness without an obvious trigger.',
        transformation: 'Encourages emotional stability, optimism, and inner contentment.',
      },
      {
        name: 'Chestnut Bud',
        challenge: 'Overlooking lessons from previous experiences and repeating mistakes.',
        transformation: 'Enhances self-awareness, learning, and personal growth.',
      },
    ],
  },
  {
    id: 'loneliness',
    name: 'Loneliness',
    description: 'For those seeking deeper connection and meaningful relationships.',
    remedies: [
      {
        name: 'Water Violet',
        challenge: 'Keeping emotional distance from others and preferring self-reliance over connection.',
        transformation: 'Encourages openness, warmth, and balanced social engagement while preserving individuality.',
      },
      {
        name: 'Impatiens',
        challenge: 'Feeling irritated by delays, slower-paced people, or inefficiency.',
        transformation: 'Promotes patience, tolerance, and a calmer approach to interactions.',
      },
      {
        name: 'Heather',
        challenge: 'Seeking constant companionship or focusing heavily on personal worries and experiences.',
        transformation: 'Fosters genuine interest in others, emotional balance, and deeper interpersonal relationships.',
      },
    ],
  },
  {
    id: 'over-sensitivity',
    name: 'Over-sensitivity to Influences',
    description: 'For those easily influenced by external opinions and energy.',
    remedies: [
      {
        name: 'Agrimony',
        challenge: 'Presenting a happy exterior while concealing inner stress or emotional discomfort.',
        transformation: 'Encourages honesty with oneself and a deeper sense of inner peace.',
      },
      {
        name: 'Centaury',
        challenge: 'Putting others\' wishes first and struggling to assert personal boundaries.',
        transformation: 'Develops healthy self-respect and balanced service to others.',
      },
      {
        name: 'Walnut',
        challenge: 'Feeling unsettled during transitions or influenced by surrounding opinions.',
        transformation: 'Supports confidence, consistency, and smooth adjustment to change.',
      },
      {
        name: 'Holly',
        challenge: 'Experiencing jealousy, mistrust, anger, or emotional resentment.',
        transformation: 'Promotes compassion, emotional warmth, and unconditional goodwill.',
      },
    ],
  },
  {
    id: 'despondency',
    name: 'Despondency or Despair',
    description: 'For those experiencing deep emotional pain and hopelessness.',
    remedies: [
      {
        name: 'Larch',
        challenge: 'Self-doubt and fear of failure.',
        transformation: 'Confidence, courage, and self-belief.',
      },
      {
        name: 'Pine',
        challenge: 'Guilt and excessive self-blame.',
        transformation: 'Self-acceptance and balanced responsibility.',
      },
      {
        name: 'Elm',
        challenge: 'Feeling overwhelmed by duties.',
        transformation: 'Confidence and capability under pressure.',
      },
      {
        name: 'Sweet Chestnut',
        challenge: 'Intense emotional suffering.',
        transformation: 'Hope, resilience, and renewal.',
      },
      {
        name: 'Star of Bethlehem',
        challenge: 'Trauma, grief, or emotional shock.',
        transformation: 'Healing, comfort, and inner peace.',
      },
      {
        name: 'Willow',
        challenge: 'Resentment and self-pity.',
        transformation: 'Optimism, acceptance, and personal empowerment.',
      },
      {
        name: 'Oak',
        challenge: 'Struggling on past exhaustion and never giving up.',
        transformation: 'Strength with balance and the wisdom to rest.',
      },
      {
        name: 'Crab Apple',
        challenge: 'Feeling unclean, impure, or ashamed of oneself.',
        transformation: 'Self-acceptance, cleansing, and inner purity.',
      },
    ],
  },
  {
    id: 'over-care',
    name: 'Over-care for Welfare of Others',
    description: 'For those who give too much care at the expense of self-care.',
    remedies: [
      {
        name: 'Chicory',
        challenge: 'Becoming overly attached to loved ones and expecting recognition or affection in return.',
        transformation: 'Encourages unconditional care, emotional generosity, and healthy relationships.',
      },
      {
        name: 'Vervain',
        challenge: 'Overcommitting energy to causes, ideas, or responsibilities, often leading to tension and exhaustion.',
        transformation: 'Promotes calm determination, balance, and sustainable enthusiasm.',
      },
      {
        name: 'Vine',
        challenge: 'Taking charge in a way that leaves little room for others\' perspectives.',
        transformation: 'Develops confident leadership combined with empathy and respect.',
      },
      {
        name: 'Beech',
        challenge: 'Focusing on others\' shortcomings and finding it difficult to tolerate differences.',
        transformation: 'Fosters compassion, patience, and a broader understanding of people.',
      },
      {
        name: 'Rock Water',
        challenge: 'Living by rigid rules and placing excessive pressure on oneself to be perfect.',
        transformation: 'Encourages adaptability, self-kindness, and enjoyment of life\'s journey.',
      },
    ],
  },
  {
    id: 'rescue-remedy',
    name: 'Flower Rescue Remedy',
    description: 'The five-flower combination for moments of stress, shock, panic, and emotional emergency.',
    remedies: [
      {
        name: 'Rescue Remedy',
        challenge: 'Acute stress, shock, panic, or emotional emergency.',
        transformation: 'Instant calm, comfort, and inner stability.',
      },
    ],
  },
]

const filterOptions = [
  { id: 'all', label: 'All Groups' },
  { id: 'fear', label: 'Fear' },
  { id: 'uncertainty', label: 'Uncertainty' },
  { id: 'insufficient-interest', label: 'Insufficient Interest in Present' },
  { id: 'loneliness', label: 'Loneliness' },
  { id: 'over-sensitivity', label: 'Over-sensitivity to Influences' },
  { id: 'despondency', label: 'Despondency or Despair' },
  { id: 'over-care', label: 'Over-care for Welfare of Others' },
  { id: 'rescue-remedy', label: 'Flower Rescue Remedy' },
]

export default function RemediesGroups() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [lightbox, setLightbox] = useState<{ name: string; image: RemedyImage } | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const filteredGroups = selectedFilter === 'all' ? groups : groups.filter((g) => g.id === selectedFilter)

  // Close the image lightbox on Escape and lock background scroll while open
  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative w-full py-16 md:py-20" style={{ background: '#FFFFFF' }}>
      {/* Filter Slider */}
      <div className="relative w-full mb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="flex-shrink-0 p-2 rounded-lg transition-colors"
              style={{ background: '#F0F0F0', color: '#3D1578' }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Filter Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto pb-2 flex-1 scroll-smooth"
              style={{
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedFilter(option.id)}
                  className="flex-shrink-0 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-200 whitespace-nowrap"
                  style={{
                    background: selectedFilter === option.id ? '#3D1578' : 'rgba(61,21,120,0.08)',
                    color: selectedFilter === option.id ? '#FFFFFF' : '#3D1578',
                    border: selectedFilter === option.id ? 'none' : '1px solid rgba(61,21,120,0.15)',
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="flex-shrink-0 p-2 rounded-lg transition-colors"
              style={{ background: '#F0F0F0', color: '#3D1578' }}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Remedies Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredGroups.map((group) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <div className="mb-6">
              <h2 className="font-heading font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: '#3D1578', marginBottom: '0.5rem' }}>
                {group.name}
              </h2>
              <p className="font-body text-lg" style={{ color: '#5A4A6A' }}>
                {group.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {group.remedies.map((remedy, idx) => {
                const image = remedyImages[remedy.name]
                return image ? (
                  <motion.button
                    key={remedy.name}
                    type="button"
                    onClick={() => setLightbox({ name: remedy.name, image })}
                    aria-label={`View the ${remedy.name} remedy card`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group block w-full overflow-hidden rounded-xl transition-all duration-200 hover:shadow-lg cursor-pointer"
                    style={{
                      background: 'rgba(61,21,120,0.05)',
                      border: '1px solid rgba(61,21,120,0.1)',
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={`${remedy.name} — Bach flower remedy`}
                      width={image.width}
                      height={image.height}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.button>
                ) : (
                  <motion.div
                    key={remedy.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-6 rounded-xl transition-all duration-200 hover:shadow-lg"
                    style={{
                      background: 'rgba(61,21,120,0.05)',
                      border: '1px solid rgba(61,21,120,0.1)',
                    }}
                  >
                    <h3 className="font-heading font-bold text-lg mb-3" style={{ color: '#3D1578' }}>
                      {remedy.name}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-body text-xs font-semibold uppercase tracking-wide" style={{ color: '#C89A2B', marginBottom: '0.5rem' }}>
                          Challenge
                        </p>
                        <p className="font-body text-sm leading-relaxed" style={{ color: '#5A4A6A' }}>
                          {remedy.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="font-body text-xs font-semibold uppercase tracking-wide" style={{ color: '#3D1578', marginBottom: '0.5rem' }}>
                          Transformation
                        </p>
                        <p className="font-body text-sm leading-relaxed" style={{ color: '#5A4A6A' }}>
                          {remedy.transformation}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image lightbox — enlarged remedy poster */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
            style={{ background: 'rgba(26,10,53,0.85)' }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.name} remedy card`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 hover:scale-110"
                style={{ background: '#3D1578' }}
              >
                <X size={20} />
              </button>
              <Image
                src={lightbox.image.src}
                alt={`${lightbox.name} — Bach flower remedy`}
                width={lightbox.image.width}
                height={lightbox.image.height}
                className="rounded-xl shadow-2xl"
                style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '90vh' }}
                sizes="(max-width: 768px) 90vw, 800px"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
