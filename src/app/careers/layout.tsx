import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Siflon Drugs & Pharmaceuticals Pvt Ltd',
  description: 'Join Siflon Drugs & Pharmaceuticals for exploring unending career opportunities. We are a specialty veterinary pharmaceutical company in India providing high-quality, affordable medicines. Apply now for exciting roles in pharmaceutical manufacturing, R&D, quality assurance, and more.',
  keywords: [
    'Siflon careers',
    'veterinary pharmaceutical jobs',
    'pharma jobs India',
    'veterinary medicine careers',
    'pharmaceutical company jobs',
    'R&D jobs pharma',
    'quality assurance jobs',
    'manufacturing jobs pharmaceutical',
    'Siflon Drugs careers',
    'veterinary healthcare jobs',
    'pharma jobs Hyderabad',
    'animal health careers'
  ],
  openGraph: {
    title: 'Careers | Siflon Drugs & Pharmaceuticals Pvt Ltd',
    description: 'Join Siflon Drugs & Pharmaceuticals for exploring unending career opportunities. We are a specialty veterinary pharmaceutical company in India providing high-quality, affordable medicines.',
    url: 'https://siflonpharma.com/careers',
    siteName: 'Siflon Pharma',
    images: [
      {
        url: '/siflonlogo.png',
        width: 1200,
        height: 630,
        alt: 'Siflon Drugs & Pharmaceuticals - Career Opportunities',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Siflon Drugs & Pharmaceuticals Pvt Ltd',
    description: 'Join Siflon Drugs & Pharmaceuticals for exploring unending career opportunities in veterinary pharmaceuticals.',
    images: ['/siflonlogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://siflonpharma.com/careers',
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}