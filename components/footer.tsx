'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Share2, MessageCircle, PlayCircle, X, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Therapy', href: '#therapy' },
  { label: 'Training Programs', href: '#training' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  { label: 'Personal Consultation', href: '#therapy' },
  { label: 'Anxiety & Stress Relief', href: '#therapy' },
  { label: 'Fear & Phobia Treatment', href: '#therapy' },
  { label: 'Children\'s Emotional Health', href: '#therapy' },
  { label: 'Depression Support', href: '#therapy' },
  { label: 'Relationship Healing', href: '#therapy' },
]

const socialLinks = [
  { icon: Share2, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'Instagram' },
  { icon: PlayCircle, href: '#', label: 'YouTube' },
  { icon: X, href: '#', label: 'X (Twitter)' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#1A0A35] overflow-hidden" aria-label="Footer">
      {/* Top gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C89A2B] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Image
              src="/hh%20logo%20png.png"
              alt="Holistic Healing Pathways Foundation"
              width={687}
              height={493}
              className="h-12 w-auto object-contain mb-5 brightness-0 invert opacity-90"
            />
            <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
              Empowering lives through the natural wisdom of Bach Flower Therapy. Holistic healing for emotional well-being and inner peace.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center
                    text-white/50 hover:bg-[#C89A2B]/20 hover:border-[#C89A2B]/40 hover:text-[#C89A2B]
                    transition-all duration-200"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-body text-sm font-bold text-white mb-5 tracking-wider uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-[#C89A2B] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#C89A2B]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="font-body text-sm font-bold text-white mb-5 tracking-wider uppercase">Our Services</h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="font-body text-sm text-white/50 hover:text-[#C89A2B] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#C89A2B]" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-body text-sm font-bold text-white mb-5 tracking-wider uppercase">Connect With Us</h3>

            <div className="flex flex-col gap-3 mb-7">
              <a href="tel:+919999999999" className="flex items-center gap-3 text-white/50 hover:text-[#C89A2B] transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C89A2B]/20 transition-colors">
                  <Phone size={13} className="text-[#C89A2B]" />
                </div>
                <span className="font-body text-sm">+91 99999 99999</span>
              </a>
              <a href="mailto:info@holistichealingpathways.com" className="flex items-center gap-3 text-white/50 hover:text-[#C89A2B] transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C89A2B]/20 transition-colors">
                  <Mail size={13} className="text-[#C89A2B]" />
                </div>
                <span className="font-body text-sm">info@holistichealingpathways.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} className="text-[#C89A2B]" />
                </div>
                <span className="font-body text-sm">India &amp; Online Consultations Worldwide</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="font-body text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Healing Insights Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Newsletter email"
                  className="flex-1 bg-white/8 border border-white/10 rounded-xl px-4 py-2.5 font-body text-sm text-white placeholder:text-white/30
                    focus:outline-none focus:border-[#C89A2B]/50 focus:bg-white/12 transition-all duration-200"
                />
                <button
                  type="button"
                  aria-label="Subscribe to newsletter"
                  className="px-4 py-2.5 rounded-xl bg-[#C89A2B] text-white font-body text-sm font-semibold hover:bg-[#E0B84A] transition-colors duration-200 flex-shrink-0"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gold divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C89A2B]/30 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
          <p className="font-body text-xs text-white/30">
            &copy; {new Date().getFullYear()} Holistic Healing Pathways Foundation. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map((item) => (
              <a key={item} href="#" className="font-body text-xs text-white/30 hover:text-[#C89A2B] transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
