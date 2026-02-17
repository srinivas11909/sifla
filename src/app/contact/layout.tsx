import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Siflon Drugs & Pharmaceuticals Pvt Ltd',
  description: 'Get in touch with Siflon Drugs & Pharmaceuticals Pvt Ltd. Contact us for animal healthcare products, feed supplements, probiotics, antibiotics, and disinfectants. Located in Hyderabad, Telangana, India.',
  keywords: [
    'Siflon contact',
    'animal healthcare contact',
    'veterinary products India',
    'feed supplements contact',
    'poultry healthcare',
    'aqua healthcare',
    'dairy cattle healthcare',
    'pharmaceutical company Hyderabad',
    'veterinary pharmaceuticals India',
    'animal health products supplier',
    'Siflon Pharmaceuticals',
    'Siflon Drugs contact',
    'veterinary medicine manufacturer',
    'livestock healthcare products'
  ],
  openGraph: {
    title: 'Contact Us | Siflon Drugs & Pharmaceuticals Pvt Ltd',
    description: 'Get in touch with Siflon Drugs & Pharmaceuticals Pvt Ltd. Leading manufacturer of animal healthcare products serving 50+ countries worldwide.',
    url: 'https://siflonpharma.com/contact',
    siteName: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Siflon Drugs & Pharmaceuticals - Animal Healthcare Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Siflon Drugs & Pharmaceuticals Pvt Ltd',
    description: 'Get in touch with Siflon Drugs & Pharmaceuticals Pvt Ltd. Leading manufacturer of animal healthcare products.',
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
    canonical: 'https://siflonpharma.com/contact'
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
