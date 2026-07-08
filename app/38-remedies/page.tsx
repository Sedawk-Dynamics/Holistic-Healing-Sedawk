import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import RemediesPageHero from '@/components/remedies-page-hero'
import RemediesGroups from '@/components/remedies-groups'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'The 38 Bach Flower Remedies | Holistic Healing Pathways',
  description: 'Explore all 38 Bach flower essences organized into 7 emotional groups. Discover which remedy supports your emotional healing journey.',
}

export default function RemediesPage() {
  return (
    <main className="relative">
      <Navbar />
      <RemediesPageHero />
      <RemediesGroups />
      <Footer />
    </main>
  )
}
