'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What exactly is Bach Flower Therapy and how does it work?',
    answer: 'Bach Flower Therapy is a natural healing system developed by Dr. Edward Bach in the 1930s. It uses 38 flower essences, each corresponding to a specific emotional state, to restore emotional balance. The essences work by gently neutralizing negative emotions — the root cause of physical and mental illness — allowing the body\'s natural healing intelligence to restore harmony.',
  },
  {
    question: 'Is Bach Flower Therapy safe for children and elderly people?',
    answer: 'Absolutely. Bach Flower Therapy is one of the safest healing modalities available. The remedies are extremely dilute and contain no active chemical ingredients, making them completely safe for infants, children, pregnant women, the elderly, and even pets. They work harmoniously alongside all conventional medications and treatments.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Many people notice positive emotional shifts within the first 2-3 weeks of consistently taking their personalized remedy blend. However, deeper or more long-standing emotional patterns may take 6-12 weeks to fully resolve. Each person\'s healing journey is unique, and we monitor your progress carefully to adjust remedies as needed.',
  },
  {
    question: 'Can Bach Flower Therapy be used alongside conventional medicine?',
    answer: 'Yes, completely. Bach Flower Therapy is a complementary system that works alongside any conventional medical treatment. It does not interfere with pharmaceuticals, surgeries, or other therapies. In fact, many medical practitioners now recommend it as a supportive emotional wellness strategy for their patients.',
  },
  {
    question: 'What happens during a consultation?',
    answer: 'Your initial consultation lasts approximately 60-90 minutes. In a warm, confidential conversation, our practitioner explores your current emotional state, life circumstances, and the feelings most affecting your well-being. Based on this deep assessment, we prepare a bespoke remedy blend from Dr. Bach\'s 38 essences, along with clear instructions for use.',
  },
  {
    question: 'Do your training programs offer internationally recognized certification?',
    answer: 'Yes. Our Therapist Certification and Advanced Trainer Program are aligned with the Bach Foundation International Register (BFIR) standards, ensuring your qualifications are recognized by practitioners and institutions worldwide. Our Foundation Program offers a certificate of completion recognized within our accredited network.',
  },
  {
    question: 'Can consultations be conducted online?',
    answer: 'Yes, we offer fully effective online consultations via video call. Bach Flower Therapy is equally powerful whether conducted in person or remotely — what matters is the quality of the emotional assessment and the precision of the remedy selection, both of which we maintain to the highest standard in online sessions.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding relative overflow-hidden bg-[#FDFCFF]" aria-label="Frequently asked questions">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#3D1578]/5 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-[#C89A2B] mb-4">
            Common Questions
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#3D1578] leading-tight mb-5 text-balance">
            Everything You Need{' '}
            <span className="text-gradient-gold">to Know</span>
          </h2>
          <p className="font-body text-[#3D1578]/65 text-lg leading-relaxed">
            Have more questions? We&apos;re always happy to speak with you directly.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden
                ${openIndex === i
                  ? 'border-[#C89A2B]/40 bg-white shadow-lg shadow-[#3D1578]/6'
                  : 'border-[#E8DEF8] bg-white hover:border-[#3D1578]/20'
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-start justify-between gap-4 p-6 text-left"
              >
                <span className={`font-body text-base font-semibold leading-snug transition-colors duration-200
                  ${openIndex === i ? 'text-[#3D1578]' : 'text-[#3D1578]/80'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                  ${openIndex === i
                    ? 'bg-[#3D1578] text-white'
                    : 'bg-[#F5F0FF] text-[#3D1578]'
                  }`}>
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-[#E8DEF8] mb-4" />
                      <p className="font-body text-sm text-[#3D1578]/65 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
