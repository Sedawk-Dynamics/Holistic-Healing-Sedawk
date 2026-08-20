import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import NadiCourses from '@/components/nadi-courses'

export const metadata: Metadata = {
  title: 'Nadi Nakshatra Astrology Courses | Holistic Healing Pathways Foundation',
  description:
    'Enrol in the Nadi Nakshatra Astrology certification course or book a personal Nadi Prediction reading. Limited seats, personal mentoring by Dr. Nikunj Walia.',
}

export default function NadiCoursesPage() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-20">
        <NadiCourses />
      </div>
      <Footer />
    </main>
  )
}
