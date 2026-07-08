import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import WhatIsBach from '@/components/what-is-bach'
import Stats from '@/components/stats'
import About from '@/components/about'
import Conditions from '@/components/conditions'
import Approach from '@/components/approach'
import WhyChoose from '@/components/why-choose'
import HealingJourney from '@/components/healing-journey'
import Remedies from '@/components/remedies'
import Training from '@/components/training'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <WhatIsBach />
      <Stats />
      <About />
      <Conditions />
      <Approach />
      <WhyChoose />
      <HealingJourney />
      <Remedies />
      <Training />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
