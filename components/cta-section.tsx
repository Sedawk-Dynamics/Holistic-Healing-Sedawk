'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', interest: 'therapy' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden" aria-label="Contact and book consultation">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A0D56] via-[#3D1578] to-[#6B35C4]" />
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(200,154,43,0.4) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(184,165,229,0.3) 0%, transparent 55%)' }} />
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${2 + (i % 3) * 2}px`,
            height: `${2 + (i % 3) * 2}px`,
            background: i % 2 === 0 ? 'rgba(200,154,43,0.5)' : 'rgba(184,165,229,0.4)',
            left: `${5 + i * 10}%`,
            top: `${10 + (i % 4) * 22}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.35 }}
        />
      ))}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C89A2B]/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-7 pt-2"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C89A2B]/15 border border-[#C89A2B]/30 mb-5">
                <Sparkles size={14} className="text-[#C89A2B]" />
                <span className="font-body text-xs font-semibold text-[#C89A2B] tracking-wider uppercase">Begin Your Journey</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight mb-4 text-balance">
                Take the First Step
                <br />
                <span className="text-[#C89A2B]">Toward True Healing</span>
              </h2>
              <p className="font-body text-lg text-white/65 leading-relaxed">
                Whether you&apos;re exploring therapy for the first time or looking to deepen your practice through training,
                we&apos;re here to guide you. Reach out today for a warm, judgment-free conversation.
              </p>
            </div>

            {/* Benefits of booking */}
            <div className="flex flex-col gap-3">
              {[
                'Compassionate, confidential one-on-one session',
                'Personalized remedy blend created just for you',
                'No prior knowledge required',
                'Online & in-person sessions available',
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#C89A2B] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-white/70">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-3 pt-2">
              <a href="tel:+919999999999" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#C89A2B]/15 border border-[#C89A2B]/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-[#C89A2B]" />
                </div>
                <span className="font-body text-sm text-white/60 group-hover:text-[#C89A2B] transition-colors">+91 99999 99999</span>
              </a>
              <a href="mailto:info@holistichealingpathways.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#C89A2B]/15 border border-[#C89A2B]/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-[#C89A2B]" />
                </div>
                <span className="font-body text-sm text-white/60 group-hover:text-[#C89A2B] transition-colors">info@holistichealingpathways.com</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C89A2B]/15 border border-[#C89A2B]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-[#C89A2B]" />
                </div>
                <span className="font-body text-sm text-white/60">India &amp; Online Worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <h3 className="font-heading text-2xl font-semibold text-white mb-1">Book a Free Consultation</h3>
                  <p className="font-body text-sm text-white/50 -mt-2 mb-1">We&apos;ll get back to you within 24 hours.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="font-body text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-white/30
                          focus:outline-none focus:border-[#C89A2B]/60 focus:bg-white/15 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="font-body text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-white/30
                          focus:outline-none focus:border-[#C89A2B]/60 focus:bg-white/15 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="font-body text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-white/30
                        focus:outline-none focus:border-[#C89A2B]/60 focus:bg-white/15 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="font-body text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">
                      I&apos;m interested in
                    </label>
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-sm text-white
                        focus:outline-none focus:border-[#C89A2B]/60 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="therapy" className="bg-[#3D1578] text-white">Personal Therapy / Consultation</option>
                      <option value="foundation" className="bg-[#3D1578] text-white">Foundation Training Program</option>
                      <option value="certification" className="bg-[#3D1578] text-white">Therapist Certification</option>
                      <option value="trainer" className="bg-[#3D1578] text-white">Advanced Trainer Program</option>
                      <option value="general" className="bg-[#3D1578] text-white">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="font-body text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us what you're experiencing or what you'd like to achieve..."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-white/30
                        focus:outline-none focus:border-[#C89A2B]/60 focus:bg-white/15 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-body font-semibold text-[#3D1578]
                      bg-white hover:bg-[#FFF8E8] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 mt-1"
                  >
                    Send My Request
                    <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center gap-5 py-10"
                >
                  <div className="w-20 h-20 rounded-full bg-[#C89A2B]/20 border-2 border-[#C89A2B]/40 flex items-center justify-center">
                    <CheckCircle size={36} className="text-[#C89A2B]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-white mb-2">Thank You, {form.name || 'Friend'}!</h3>
                    <p className="font-body text-sm text-white/65 leading-relaxed max-w-sm mx-auto">
                      We&apos;ve received your request and will reach out within 24 hours to schedule your consultation.
                      Your healing journey begins now.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '', interest: 'therapy' }) }}
                    className="font-body text-sm text-[#C89A2B] hover:text-[#E0B84A] transition-colors underline underline-offset-2"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
