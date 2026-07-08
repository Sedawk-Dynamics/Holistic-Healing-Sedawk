import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import TrainingHero from '@/components/training-hero'
import TrainingLevels from '@/components/training-levels'
import TrainingFeatures from '@/components/training-features'

export const metadata: Metadata = {
  title: 'Bach Flower Therapy Training Programs | Holistic Healing Pathways Foundation',
  description:
    'Learn Bach Flower Therapy from Level 1 to Advanced Master Practitioner. IAAH-certified training programs with expert instruction, practical application, and career development.',
  keywords: [
    'Bach Flower Therapy Training',
    'Certification Course',
    'Practitioner Training',
    'Level 1 Course',
    'Advanced Training',
    'IAAH Certified',
    'Holistic Healing Education',
    'Bach Remedies Training',
  ],
}

export default function TrainingPage() {
  return (
    <main className="relative">
      <Navbar />
      <TrainingHero />
      <TrainingLevels />
      <TrainingFeatures />
      <Footer />
    </main>
  )
}
