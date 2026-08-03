'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

// Brand icons (lucide-react in this project ships no brand marks, so inline SVGs)
type IconProps = { size?: number; className?: string }

function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function XIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  )
}

function LinkedinIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Home', href: '' },
  { label: 'About', href: '#about' },
  { label: 'Therapy', href: '#therapy' },
  // { label: 'Training Programs', href: '#training' },
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
  { label: ' Healing', href: '#therapy' },

]

const socialLinks = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: XIcon, href: '#', label: 'X (Twitter)' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
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
              src="/images/hero-logo.png"
              alt="Holistic Healing Pathways Foundation"
              width={707}
              height={206}
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
              <a href="tel:+91987146883" className="flex items-center gap-3 text-white/50 hover:text-[#C89A2B] transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C89A2B]/20 transition-colors">
                  <Phone size={13} className="text-[#C89A2B]" />
                </div>
                <span className="font-body text-sm">+91 987146883</span>
              </a>
              <a href="mailto:info@hhpf.in" className="flex items-center gap-3 text-white/50 hover:text-[#C89A2B] transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C89A2B]/20 transition-colors">
                  <Mail size={13} className="text-[#C89A2B]" />
                </div>
                <span className="font-body text-sm">info@hhpf.in</span>
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
