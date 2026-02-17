import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Siflon Drugs & Pharmaceuticals - Veterinary Healthcare Since 1996',
  description: 'Founded in 1996 by Mr. R. Ananthaiah, Siflon Group has diversified into veterinary APIs, formulations, PTFE components, engineering, and herbal products. Siflon Drugs & Pharmaceuticals provides quality animal healthcare solutions for farm animals.',
  keywords: [
    'Siflon Pharmaceuticals',
    'veterinary healthcare company',
    'animal health products',
    'veterinary formulations',
    'Siflon Drugs',
    'Siflon Group',
    'veterinary pharmaceuticals India',
    'farm animal healthcare',
    'cattle medicines',
    'sheep medicines',
    'goat medicines',
    'swine medicines',
    'veterinary company India',
    'animal healthcare manufacturer',
    'PTFE components',
    'veterinary APIs',
    'quality veterinary products',
    'affordable animal healthcare',
    'Mr R Ananthaiah',
    'Siflon history'
  ],
  authors: [{ name: 'Siflon Drugs & Pharmaceuticals Pvt Ltd' }],
  creator: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
  publisher: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
  openGraph: {
    title: 'About Us | Siflon Drugs & Pharmaceuticals - Veterinary Healthcare Since 1996',
    description: 'Founded in 1996, Siflon Group has diversified into veterinary APIs, formulations, PTFE components, engineering, and herbal products. Quality animal healthcare for farm animals.',
    url: 'https://siflonpharma.com/about',
    siteName: 'Siflon Pharmaceuticals',
    images: [
      {
        url: 'https://siflonpharma.com/about/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Siflon Pharmaceuticals - 28+ Years of Excellence in Veterinary Healthcare',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Siflon Drugs & Pharmaceuticals - Veterinary Healthcare Since 1996',
    description: 'Founded in 1996, Siflon Group provides quality animal healthcare solutions. Trusted by farmers across India for cattle, sheep, goat, and swine medicines.',
    images: ['https://siflonpharma.com/about/og-image.jpg'],
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
    canonical: 'https://siflonpharma.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* JSON-LD Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
            alternateName: 'Siflon Group',
            description: 'Founded in 1996 by Mr. R. Ananthaiah, Siflon Group has diversified into veterinary APIs, formulations, PTFE components, engineering, and herbal products.',
            url: 'https://siflonpharma.com',
            logo: 'https://siflonpharma.com/logo.png',
            foundingDate: '1996',
            founder: {
              '@type': 'Person',
              name: 'Mr. R. Ananthaiah',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Plot No. 17, Road No. 5, IDA Mallapur',
              addressLocality: 'Nacharam, Hyderabad',
              addressRegion: 'Telangana',
              postalCode: '500076',
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-40-27139090',
              contactType: 'sales',
              areaServed: 'Worldwide',
              availableLanguage: ['English', 'Hindi'],
            },
            sameAs: [
              'https://www.facebook.com/siflonpharma',
              'https://www.linkedin.com/company/siflon-pharmaceuticals',
              'https://twitter.com/siflonpharma',
            ],
            subOrganization: [
              {
                '@type': 'Organization',
                name: 'Siflon Drugs',
                description: 'Manufacture of Veterinary APIs',
              },
              {
                '@type': 'Organization',
                name: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
                description: 'Veterinary Formulations',
                foundingDate: '2006',
              },
              {
                '@type': 'Organization',
                name: 'Siflon Vet Pharma',
                description: 'Veterinary Pharmaceutical Franchisee Outlets',
              },
              {
                '@type': 'Organization',
                name: 'Siflon Polymers',
                description: 'PTFE Components Manufacturing',
              },
              {
                '@type': 'Organization',
                name: 'Siflon Engineering',
                description: 'Reactors & Engineering Solutions',
              },
              {
                '@type': 'Organization',
                name: 'Aloewell Herbals',
                description: 'Aloevera Products',
              },
            ],
          }),
        }}
      />
      {/* JSON-LD Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Siflon Drugs & Pharmaceuticals',
            description: 'Learn about Siflon Group - founded in 1996, diversified into veterinary healthcare, PTFE components, engineering, and herbal products.',
            url: 'https://siflonpharma.com/about',
            mainEntity: {
              '@type': 'Organization',
              name: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
              description: 'Leading veterinary pharmaceutical company in India',
              foundingDate: '1996',
              numberOfEmployees: {
                '@type': 'QuantitativeValue',
                minValue: 100,
                maxValue: 500,
              },
            },
          }),
        }}
      />
      {/* JSON-LD Structured Data for Timeline */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Siflon Company Milestones',
            description: 'Key milestones in Siflon\'s journey from 1996 to present',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Company Founded',
                description: 'Founded by Mr. R. Ananthaiah as a small scale PTFE component manufacturing industry',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Siflon Drugs & Pharmaceuticals',
                description: 'Started veterinary formulations with a vision to provide quality animal healthcare',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Product Portfolio Expansion',
                description: 'Launched comprehensive range of products for farm animals',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Multi-Sector Growth',
                description: 'Diversified into 6 major business divisions',
              },
              {
                '@type': 'ListItem',
                position: 5,
                name: 'Global Reach',
                description: 'Established presence in multiple countries',
              },
              {
                '@type': 'ListItem',
                position: 6,
                name: 'Innovation & Growth',
                description: 'Continuing to develop new products addressing unmet medical needs',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
