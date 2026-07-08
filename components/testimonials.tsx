'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Teacher, Mumbai',
    initials: 'PS',
    rating: 5,
    text: 'Bach Flower Therapy transformed my relationship with anxiety. After years of struggling with overwhelming fear before public speaking, just three weeks of my personalized remedy blend brought a calm I never thought possible. I am genuinely astonished by how naturally and deeply this works.',
    color: 'from-[#3D1578] to-[#6B35C4]',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner, Pune',
    initials: 'RK',
    rating: 5,
    text: 'I was deeply skeptical at first — I am an engineer, and I need evidence. But after three months working with Holistic Healing Pathways Foundation, my chronic stress and anger patterns have genuinely shifted. My team has noticed, my family has noticed, and most importantly, I have noticed.',
    color: 'from-[#C89A2B] to-[#9A7315]',
  },
  {
    name: 'Ananya Reddy',
    role: 'Homemaker, Hyderabad',
    initials: 'AR',
    rating: 5,
    text: 'My 7-year-old was having severe separation anxiety that affected our whole family. The practitioner was incredibly patient and created a gentle remedy specifically for her emotional needs. Within a month, she was going to school happily. I cannot express my gratitude enough.',
    color: 'from-[#76C043] to-[#3D9B1C]',
  },
  {
    name: 'Dr. Meera Patel',
    role: 'Physician, Ahmedabad',
    initials: 'MP',
    rating: 5,
    text: 'As a medical professional, I appreciate that Bach Flower Therapy works at the emotional root of illness. I now refer several of my patients here as a complementary approach and consistently see remarkable improvements in their emotional well-being and overall recovery.',
    color: 'from-[#B8A5E5] to-[#3D1578]',
  },
  {
    name: 'Vikram Singh',
    role: 'Software Engineer, Bangalore',
    initials: 'VS',
    rating: 5,
    text: 'The personalized consultation was unlike anything I had experienced — the practitioner truly listened and understood patterns in my emotional life I had never articulated before. The remedy blend they created was perfectly suited to me. My sleep improved dramatically within two weeks.',
    color: 'from-[#3D1578] to-[#C89A2B]',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" aria-label="Testimonials">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0FF] via-[#FDFCFF] to-[#F5F0FF]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#3D1578]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-[#C89A2B] mb-4">
            Real Stories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#3D1578] leading-tight mb-5 text-balance">
            Lives Changed by{' '}
            <span className="text-gradient-gold">Natural Healing</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[#3D1578]/8 border border-[#E8DEF8]"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote size={60} className="text-[#3D1578]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#C89A2B] text-[#C89A2B]" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="font-heading text-xl md:text-2xl font-light text-[#3D1578]/85 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="font-body text-sm font-bold text-white">
                    {testimonials[current].initials}
                  </span>
                </div>
                <div>
                  <p className="font-body font-bold text-[#3D1578]">{testimonials[current].name}</p>
                  <p className="font-body text-sm text-[#3D1578]/55">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-8 h-2.5 bg-[#3D1578]'
                      : 'w-2.5 h-2.5 bg-[#3D1578]/25 hover:bg-[#3D1578]/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border-2 border-[#3D1578]/20 flex items-center justify-center
                  text-[#3D1578]/60 hover:border-[#3D1578] hover:text-[#3D1578] hover:bg-[#F5F0FF]
                  transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-[#3D1578] flex items-center justify-center
                  text-white hover:bg-[#2A0D56] transition-colors duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mt-14"
        >
          {[
            { label: '700+ Happy Clients', sub: 'Across India & abroad' },
            { label: '5.0 Average Rating', sub: 'Based on verified reviews' },
            { label: '100% Recommend', sub: 'Natural healing approach' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-heading text-lg font-semibold text-[#3D1578]">{item.label}</p>
              <p className="font-body text-xs text-[#3D1578]/50">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
