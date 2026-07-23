'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Therapy', href: '/#therapy' },
  { label: 'Training', href: '/training' },
  { label: '38 Remedies', href: '/38-remedies' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled
          ? 'shadow-md border-b border-gray-100'
          : 'border-b border-transparent'
          }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 xl:px-10">
          <div className="grid grid-cols-[220px_1fr_auto] items-center h-20 gap-8">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <Image
                src="/hh%20logo%20png.png"
                alt="Holistic Healing Pathways Foundation"
                width={687}
                height={493}
                priority
                className="h-14 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveLink(item.label)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${activeLink === item.label
                    ? 'text-[#3D1578]'
                    : 'text-gray-700 hover:text-[#3D1578]'
                    }`}
                >
                  {item.label}

                  <span
                    className={`absolute left-4 right-4 bottom-0 h-[2px] rounded-full bg-[#C89A2B] transition-all duration-300 ${activeLink === item.label
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                  />
                </a>
              ))}
            </nav>

            {/* Right Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#social-impact"
                className="px-4 py-2 rounded-full text-sm font-medium border border-[#3D1578]/20 text-[#3D1578] hover:bg-[#3D1578] hover:text-white transition-all duration-300"
              >
                Social Impact
              </a>

              <a
                href="#shop"
                className="px-4 py-2 rounded-full text-sm font-medium border border-[#C89A2B]/30 text-[#C89A2B] hover:bg-[#C89A2B] hover:text-white transition-all duration-300"
              >
                Shop
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-[#3D1578] text-white text-sm font-semibold shadow-lg hover:bg-[#51209d] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Therapy
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-40 lg:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setActiveLink(item.label)
                    setMobileOpen(false)
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeLink === item.label
                    ? 'bg-[#F6F2FD] text-[#3D1578]'
                    : 'text-gray-700 hover:bg-[#F6F2FD] hover:text-[#3D1578]'
                    }`}
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="border-t border-gray-100 mt-4 pt-4 flex flex-col gap-3">
                <a
                  href="#social-impact"
                  className="py-3 rounded-full border border-[#3D1578]/20 text-center text-[#3D1578] font-medium hover:bg-[#3D1578] hover:text-white transition-all"
                >
                  Social Impact
                </a>

                <a
                  href="#shop"
                  className="py-3 rounded-full border border-[#C89A2B]/30 text-center text-[#C89A2B] font-medium hover:bg-[#C89A2B] hover:text-white transition-all"
                >
                  Shop
                </a>

                <a
                  href="#contact"
                  className="py-3 rounded-full bg-[#3D1578] text-center text-white font-semibold hover:bg-[#51209d] transition-all"
                >
                  Book a Therapy
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
