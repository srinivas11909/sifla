'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronRight, Feather, Waves, Milk, CircleDot, Activity, Heart, Leaf } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingSocialLinks from '@/components/FloatingSocialLinks'

const PRIMARY_COLOR = '#243d80'
const PRIMARY_HOVER = '#1a2d5c'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// Animated section wrapper
function AnimatedSection({ 
  children, 
  className = '', 
  variant = fadeInUp 
}: { 
  children: React.ReactNode
  className?: string
  variant?: typeof fadeInUp 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const sectors = [
  { name: 'Poultry', icon: Feather, value: 'poultry' },
  { name: 'Aqua', icon: Waves, value: 'aqua' },
  { name: 'Dairy', icon: Milk, value: 'dairy' },
  { name: 'Swine', icon: CircleDot, value: 'swine' },
  { name: 'Equine', icon: Activity, value: 'equine' },
  { name: 'Pets', icon: Heart, value: 'pets' },
]

const allProducts = {
  feedSupplements: {
    title: 'Feed Supplements',
    description: 'Nutritional supplements for optimal animal health and growth',
    items: [
      { name: 'Mineral Mixtures', sector: ['poultry', 'dairy', 'swine'], description: 'Balanced mineral blends for bone health and productivity' },
      { name: 'Vitamin Supplements', sector: ['all'], description: 'Essential vitamins for immune system support' },
      { name: 'Amino Acid Blends', sector: ['poultry', 'aqua'], description: 'Optimized amino acid profiles for growth' },
      { name: 'Enzyme Additives', sector: ['poultry', 'swine'], description: 'Digestive enzymes for better feed conversion' },
      { name: 'Calcium Supplements', sector: ['poultry', 'dairy'], description: 'High-quality calcium for bone and egg shell formation' },
      { name: 'Protein Concentrates', sector: ['aqua', 'poultry'], description: 'Concentrated protein sources for rapid growth' },
    ]
  },
  probiotics: {
    title: 'Probiotics',
    description: 'Beneficial microorganisms for digestive health',
    items: [
      { name: 'Lactobacillus Strains', sector: ['poultry', 'swine', 'pets'], description: 'Gut health optimization with beneficial bacteria' },
      { name: 'Bacillus Preparations', sector: ['aqua', 'poultry'], description: 'Spore-forming probiotics for water and feed' },
      { name: 'Yeast Cultures', sector: ['dairy', 'poultry'], description: 'Live yeast for improved digestion' },
      { name: 'Multi-strain Formulas', sector: ['all'], description: 'Comprehensive probiotic blends' },
      { name: 'Prebiotic Blends', sector: ['pets', 'equine'], description: 'Nutrients that feed beneficial bacteria' },
    ]
  },
  antibiotics: {
    title: 'Antibiotics',
    description: 'Therapeutic solutions for bacterial infections',
    items: [
      { name: 'Broad Spectrum', sector: ['poultry', 'swine', 'dairy'], description: 'Wide-range antibiotics for various infections' },
      { name: 'Targeted Therapy', sector: ['all'], description: 'Specific antibiotics for targeted treatment' },
      { name: 'Combination Drugs', sector: ['poultry', 'swine'], description: 'Synergistic antibiotic combinations' },
      { name: 'Respiratory Treatments', sector: ['poultry', 'equine'], description: 'Specialized antibiotics for respiratory infections' },
    ]
  },
  disinfectants: {
    title: 'Disinfectants',
    description: 'Biosecurity solutions for farm hygiene',
    items: [
      { name: 'Surface Disinfectants', sector: ['all'], description: 'Powerful disinfectants for farm surfaces' },
      { name: 'Water Sanitizers', sector: ['poultry', 'aqua', 'dairy'], description: 'Safe water treatment solutions' },
      { name: 'Aerial Disinfectants', sector: ['poultry'], description: 'Air sanitization for enclosed spaces' },
      { name: 'Equipment Cleaners', sector: ['all'], description: 'Specialized cleaners for farm equipment' },
      { name: 'Hoof Care Solutions', sector: ['dairy', 'equine'], description: 'Antimicrobial solutions for hoof health' },
    ]
  },
  specialtyProducts: {
    title: 'Specialty Products',
    description: 'Specialized solutions for specific needs',
    items: [
      { name: 'Stress Relievers', sector: ['all'], description: 'Anti-stress formulations for animals' },
      { name: 'Growth Promoters', sector: ['poultry', 'aqua', 'swine'], description: 'Natural growth enhancement products' },
      { name: 'Immunity Boosters', sector: ['all'], description: 'Immune system enhancers' },
      { name: 'Toxin Binders', sector: ['poultry', 'dairy', 'swine'], description: 'Mycotoxin binders for feed safety' },
      { name: 'Electrolyte Balancers', sector: ['poultry', 'equine'], description: 'Electrolyte supplements for hydration' },
    ]
  }
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating Social Links */}
      <FloatingSocialLinks />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28"
        style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Our Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Product Portfolio
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Wide range of animal healthcare products manufactured with the highest quality standards for all sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge 
              className="mb-4"
              style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
            >
              Product Categories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our extensive range of animal healthcare products
            </p>
          </AnimatedSection>

          <Tabs defaultValue="feedSupplements" className="space-y-8">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent">
              {Object.entries(allProducts).map(([key, category]) => (
                <TabsTrigger 
                  key={key}
                  value={key}
                  className="data-[state=active]:text-white px-4 py-2 rounded-full border data-[state=active]:border-transparent"
                  style={{
                    '--active-bg': PRIMARY_COLOR
                  } as React.CSSProperties}
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(allProducts).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {category.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg text-gray-900">{item.name}</CardTitle>
                            <Leaf className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                          </div>
                          <CardDescription className="text-sm text-gray-500">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-1">
                            {item.sector.includes('all') ? (
                              <Badge variant="secondary" className="text-xs">All Sectors</Badge>
                            ) : (
                              item.sector.map((s, i) => (
                                <Badge key={i} variant="secondary" className="text-xs capitalize">
                                  {s}
                                </Badge>
                              ))
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Products by Sector */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge 
              className="mb-4"
              style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
            >
              Sectors
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products by Sector
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find products specifically designed for your animal sector
            </p>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:opacity-80 transition-colors"
                      style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                      whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                    >
                      <sector.icon className="w-7 h-7" style={{ color: PRIMARY_COLOR }} />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900">{sector.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <Badge 
                className="mb-4"
                style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
              >
                Quality Assurance
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Uncompromising Quality Standards
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every product that leaves our facilities undergoes rigorous quality testing. 
                Our commitment to excellence ensures that farmers receive safe, effective, 
                and reliable healthcare solutions for their animals.
              </p>
              <ul className="space-y-3">
                {[
                  'GMP certified manufacturing facilities',
                  'In-house quality control laboratories',
                  'Regular third-party audits and testing',
                  'Traceable raw material sourcing',
                  'Stability testing for all products',
                  'Compliance with international standards'
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ChevronRight className="w-5 h-5 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection className="fadeInRight" variant={fadeInUp}>
              <div 
                className="rounded-2xl p-8 text-center"
                style={{ background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}15, ${PRIMARY_COLOR}05)` }}
              >
                <div className="text-5xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>500+</div>
                <div className="text-lg text-gray-700 mb-4">Products in Our Range</div>
                <p className="text-gray-600 text-sm mb-6">
                  Each product is developed with extensive research and tested for efficacy and safety.
                </p>
                <Link href="/contact">
                  <Button style={{ backgroundColor: PRIMARY_COLOR }} className="hover:opacity-90">
                    Request Product Catalog
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16"
        style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Need Help Choosing Products?
          </motion.h2>
          <motion.p 
            className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our team of experts is ready to help you find the right products for your needs
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
                Contact Our Team
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
