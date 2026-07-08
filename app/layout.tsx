import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Holistic Healing Pathways Foundation | Bach Flower Therapy',
  description:
    'Experience the transformative power of Bach Flower Therapy. Natural, safe emotional healing through 38 flower essences. Personalized consultations, training programs, and holistic wellness support.',
  keywords: [
    'Bach Flower Therapy',
    'Holistic Healing',
    'Natural Healing',
    'Emotional Wellness',
    'Flower Remedies',
    'Mental Wellness',
    'Alternative Therapy',
    'Stress Relief',
    'Anxiety Treatment',
    'Holistic Healing Pathways Foundation',
  ],
  authors: [{ name: 'Holistic Healing Pathways Foundation' }],
  openGraph: {
    title: 'Holistic Healing Pathways Foundation | Bach Flower Therapy',
    description:
      'Discover the gentle power of Bach Flower Therapy — a holistic healing system that restores emotional balance through 38 natural flower remedies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Holistic Healing Pathways Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holistic Healing Pathways Foundation | Bach Flower Therapy',
    description:
      'Natural emotional wellness through Bach Flower Therapy. 38 remedies. No side effects. Safe for all ages.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#3D1578',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
