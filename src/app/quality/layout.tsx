import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quality Management System | Siflon Drugs & Pharmaceuticals Pvt Ltd',
  description: 'Siflon\'s quality management system ensures consistent quality through customer focus, leadership excellence, and process-driven approach. GMP, ISO, and WHO-GMP certified manufacturing.',
  keywords: [
    'Quality management system',
    'Siflon quality',
    'pharmaceutical quality assurance',
    'GMP certified',
    'ISO 9001 certification',
    'WHO-GMP certification',
    'quality control pharmaceuticals',
    'animal healthcare quality',
    'veterinary medicine quality',
    'quality assurance India',
    'process quality management',
    'customer focused quality',
    'leadership in quality'
  ],
  openGraph: {
    title: 'Quality Management System | Siflon Drugs & Pharmaceuticals Pvt Ltd',
    description: 'Siflon\'s quality management system ensures consistent quality through customer focus, leadership excellence, and process-driven approach.',
    url: 'https://siflonpharma.com/quality',
    siteName: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Siflon Quality Management System'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quality Management System | Siflon Drugs & Pharmaceuticals Pvt Ltd',
    description: 'Siflon\'s quality management system ensures consistent quality through customer focus, leadership excellence, and process-driven approach.',
    images: ['/hero-bg.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://siflonpharma.com/quality'
  }
}

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}