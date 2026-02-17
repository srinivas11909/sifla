import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Veterinary Products | Animal Healthcare Solutions - Siflon Pharmaceuticals',
  description: 'Explore Siflon\'s comprehensive range of veterinary products including oral liquids, dry powders, feed supplements, tablets/bolus, and injectables. Quality animal healthcare solutions trusted in 50+ countries.',
  keywords: [
    'veterinary products',
    'animal healthcare',
    'veterinary medicines',
    'livestock medicines',
    'poultry medicines',
    'oral liquids veterinary',
    'dry powders veterinary',
    'feed supplements',
    'veterinary injectables',
    'animal health products',
    'veterinary pharmaceuticals',
    'Siflon products',
    'cattle medicines',
    'poultry supplements',
    'dairy animal health',
    'swine medicines',
    'aquaculture medicines',
    'veterinary antibiotics',
    'anthelmintic veterinary',
    'vitamin supplements animals'
  ],
  authors: [{ name: 'Siflon Drugs & Pharmaceuticals Pvt Ltd' }],
  creator: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
  publisher: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
  openGraph: {
    title: 'Veterinary Products | Animal Healthcare Solutions - Siflon Pharmaceuticals',
    description: 'Explore Siflon\'s comprehensive range of veterinary products including oral liquids, dry powders, feed supplements, tablets/bolus, and injectables. Quality animal healthcare solutions trusted in 50+ countries.',
    url: 'https://siflonpharma.com/products',
    siteName: 'Siflon Pharmaceuticals',
    images: [
      {
        url: 'https://siflonpharma.com/products/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Siflon Veterinary Products - Animal Healthcare Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veterinary Products | Animal Healthcare Solutions - Siflon Pharmaceuticals',
    description: 'Explore Siflon\'s comprehensive range of veterinary products. Quality animal healthcare solutions trusted in 50+ countries.',
    images: ['https://siflonpharma.com/products/og-image.jpg'],
    creator: '@siflonpharma',
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
    canonical: 'https://siflonpharma.com/products',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* JSON-LD Structured Data for Products Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Siflon Veterinary Products',
            description: 'Comprehensive range of veterinary products for animal healthcare',
            numberOfItems: 500,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Oral Liquids',
                description: 'Premium liquid formulations for easy administration and rapid absorption',
                item: 'https://siflonpharma.com/products#oral-liquids',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Dry Powders',
                description: 'Stable powder formulations for convenient storage and mixing',
                item: 'https://siflonpharma.com/products#dry-powders',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Feed Supplements',
                description: 'Nutritional supplements to enhance feed quality and animal health',
                item: 'https://siflonpharma.com/products#feed-supplements',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Tablets / Bolus',
                description: 'Precise dosing with convenient tablet and bolus formulations',
                item: 'https://siflonpharma.com/products#tablets-bolus',
              },
              {
                '@type': 'ListItem',
                position: 5,
                name: 'Injectables',
                description: 'Professional-grade injectable solutions for veterinary use',
                item: 'https://siflonpharma.com/products#injectables',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
            description: 'Leading manufacturer of veterinary pharmaceuticals and animal healthcare products',
            url: 'https://siflonpharma.com',
            logo: 'https://siflonpharma.com/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-40-27139090',
              contactType: 'sales',
              areaServed: 'Worldwide',
              availableLanguage: ['English', 'Hindi'],
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Plot No. 17, Road No. 5, IDA Mallapur',
              addressLocality: 'Nacharam, Hyderabad',
              addressRegion: 'Telangana',
              postalCode: '500076',
              addressCountry: 'IN',
            },
            sameAs: [
              'https://www.facebook.com/siflonpharma',
              'https://www.linkedin.com/company/siflon-pharmaceuticals',
              'https://twitter.com/siflonpharma',
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Veterinary Products',
            description: 'Browse Siflon\'s comprehensive range of veterinary products for animal healthcare',
            url: 'https://siflonpharma.com/products',
            publisher: {
              '@type': 'Organization',
              name: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
              logo: {
                '@type': 'ImageObject',
                url: 'https://siflonpharma.com/logo.png',
              },
            },
            mainEntity: {
              '@type': 'ItemList',
              name: 'Veterinary Products Catalog',
              numberOfItems: 500,
            },
          }),
        }}
      />
      {children}
    </>
  )
}
