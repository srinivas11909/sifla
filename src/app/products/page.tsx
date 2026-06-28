// 'use client'

// import { useRef } from 'react'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { ChevronRight, Feather, Waves, Milk, CircleDot, Activity, Heart, Leaf } from 'lucide-react'
// import { motion, useInView } from 'framer-motion'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'
// import FloatingSocialLinks from '@/components/FloatingSocialLinks'

// const PRIMARY_COLOR = '#243d80'
// const PRIMARY_HOVER = '#1a2d5c'

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// }

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.1
//     }
//   }
// }

// const cardVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.5, ease: 'easeOut' }
//   }
// }

// // Animated section wrapper
// function AnimatedSection({ 
//   children, 
//   className = '', 
//   variant = fadeInUp 
// }: { 
//   children: React.ReactNode
//   className?: string
//   variant?: typeof fadeInUp 
// }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-100px' })

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={isInView ? 'visible' : 'hidden'}
//       variants={variant}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   )
// }

// const sectors = [
//   { name: 'Poultry', icon: Feather, value: 'poultry' },
//   { name: 'Aqua', icon: Waves, value: 'aqua' },
//   { name: 'Dairy', icon: Milk, value: 'dairy' },
//   { name: 'Swine', icon: CircleDot, value: 'swine' },
//   { name: 'Equine', icon: Activity, value: 'equine' },
//   { name: 'Pets', icon: Heart, value: 'pets' },
// ]

// const allProducts = {
//   feedSupplements: {
//     title: 'Feed Supplements',
//     description: 'Nutritional supplements for optimal animal health and growth',
//     items: [
//       { name: 'Mineral Mixtures', sector: ['poultry', 'dairy', 'swine'], description: 'Balanced mineral blends for bone health and productivity' },
//       { name: 'Vitamin Supplements', sector: ['all'], description: 'Essential vitamins for immune system support' },
//       { name: 'Amino Acid Blends', sector: ['poultry', 'aqua'], description: 'Optimized amino acid profiles for growth' },
//       { name: 'Enzyme Additives', sector: ['poultry', 'swine'], description: 'Digestive enzymes for better feed conversion' },
//       { name: 'Calcium Supplements', sector: ['poultry', 'dairy'], description: 'High-quality calcium for bone and egg shell formation' },
//       { name: 'Protein Concentrates', sector: ['aqua', 'poultry'], description: 'Concentrated protein sources for rapid growth' },
//     ]
//   },
//   probiotics: {
//     title: 'Probiotics',
//     description: 'Beneficial microorganisms for digestive health',
//     items: [
//       { name: 'Lactobacillus Strains', sector: ['poultry', 'swine', 'pets'], description: 'Gut health optimization with beneficial bacteria' },
//       { name: 'Bacillus Preparations', sector: ['aqua', 'poultry'], description: 'Spore-forming probiotics for water and feed' },
//       { name: 'Yeast Cultures', sector: ['dairy', 'poultry'], description: 'Live yeast for improved digestion' },
//       { name: 'Multi-strain Formulas', sector: ['all'], description: 'Comprehensive probiotic blends' },
//       { name: 'Prebiotic Blends', sector: ['pets', 'equine'], description: 'Nutrients that feed beneficial bacteria' },
//     ]
//   },
//   antibiotics: {
//     title: 'Antibiotics',
//     description: 'Therapeutic solutions for bacterial infections',
//     items: [
//       { name: 'Broad Spectrum', sector: ['poultry', 'swine', 'dairy'], description: 'Wide-range antibiotics for various infections' },
//       { name: 'Targeted Therapy', sector: ['all'], description: 'Specific antibiotics for targeted treatment' },
//       { name: 'Combination Drugs', sector: ['poultry', 'swine'], description: 'Synergistic antibiotic combinations' },
//       { name: 'Respiratory Treatments', sector: ['poultry', 'equine'], description: 'Specialized antibiotics for respiratory infections' },
//     ]
//   },
//   disinfectants: {
//     title: 'Disinfectants',
//     description: 'Biosecurity solutions for farm hygiene',
//     items: [
//       { name: 'Surface Disinfectants', sector: ['all'], description: 'Powerful disinfectants for farm surfaces' },
//       { name: 'Water Sanitizers', sector: ['poultry', 'aqua', 'dairy'], description: 'Safe water treatment solutions' },
//       { name: 'Aerial Disinfectants', sector: ['poultry'], description: 'Air sanitization for enclosed spaces' },
//       { name: 'Equipment Cleaners', sector: ['all'], description: 'Specialized cleaners for farm equipment' },
//       { name: 'Hoof Care Solutions', sector: ['dairy', 'equine'], description: 'Antimicrobial solutions for hoof health' },
//     ]
//   },
//   specialtyProducts: {
//     title: 'Specialty Products',
//     description: 'Specialized solutions for specific needs',
//     items: [
//       { name: 'Stress Relievers', sector: ['all'], description: 'Anti-stress formulations for animals' },
//       { name: 'Growth Promoters', sector: ['poultry', 'aqua', 'swine'], description: 'Natural growth enhancement products' },
//       { name: 'Immunity Boosters', sector: ['all'], description: 'Immune system enhancers' },
//       { name: 'Toxin Binders', sector: ['poultry', 'dairy', 'swine'], description: 'Mycotoxin binders for feed safety' },
//       { name: 'Electrolyte Balancers', sector: ['poultry', 'equine'], description: 'Electrolyte supplements for hydration' },
//     ]
//   }
// }

// export default function ProductsPage() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Floating Social Links */}
//       <FloatingSocialLinks />

//       {/* Header */}
//       <Header />

//       {/* Hero Section */}
//       <section 
//         className="relative py-20 md:py-28"
//         style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Badge className="mb-4 bg-white/20 text-white border-white/30">
//               Our Products
//             </Badge>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Comprehensive Product Portfolio
//             </h1>
//             <p className="text-lg text-blue-100 max-w-2xl">
//               Wide range of animal healthcare products manufactured with the highest quality standards for all sectors.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Products by Category */}
//       <section className="py-16 md:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//           <AnimatedSection className="text-center mb-12">
//             <Badge 
//               className="mb-4"
//               style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
//             >
//               Product Categories
//             </Badge>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Browse by Category
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Explore our extensive range of animal healthcare products
//             </p>
//           </AnimatedSection>

//           <Tabs defaultValue="feedSupplements" className="space-y-8">
//             <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent">
//               {Object.entries(allProducts).map(([key, category]) => (
//                 <TabsTrigger 
//                   key={key}
//                   value={key}
//                   className="data-[state=active]:text-[#243d80] cursor-pointer px-4 py-2 rounded-full border data-[state=active]:border-transparent"
//                   style={{
//                     '--active-bg': PRIMARY_COLOR
//                   } as React.CSSProperties}
//                 >
//                   {category.title}
//                 </TabsTrigger>
//               ))}
//             </TabsList>

//             {Object.entries(allProducts).map(([key, category]) => (
//               <TabsContent key={key} value={key}>
//                 <motion.div 
//                   className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//                   variants={staggerContainer}
//                   initial="hidden"
//                   animate="visible"
//                 >
//                   {category.items.map((item, index) => (
//                     <motion.div
//                       key={index}
//                       variants={cardVariants}
//                       whileHover={{ y: -5 }}
//                     >
//                       <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white h-full">
//                         <CardHeader>
//                           <div className="flex items-center justify-between">
//                             <CardTitle className="text-lg text-gray-900">{item.name}</CardTitle>
//                             <Leaf className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
//                           </div>
//                           <CardDescription className="text-sm text-gray-500">
//                             {item.description}
//                           </CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                           <div className="flex flex-wrap gap-1">
//                             {item.sector.includes('all') ? (
//                               <Badge variant="secondary" className="text-xs">All Sectors</Badge>
//                             ) : (
//                               item.sector.map((s, i) => (
//                                 <Badge key={i} variant="secondary" className="text-xs capitalize">
//                                   {s}
//                                 </Badge>
//                               ))
//                             )}
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </TabsContent>
//             ))}
//           </Tabs>
//         </div>
//       </section>

//       {/* Products by Sector */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//           <AnimatedSection className="text-center mb-12">
//             <Badge 
//               className="mb-4"
//               style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
//             >
//               Sectors
//             </Badge>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Products by Sector
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Find products specifically designed for your animal sector
//             </p>
//           </AnimatedSection>

//           <motion.div 
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-50px' }}
//           >
//             {sectors.map((sector, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover={{ y: -5, transition: { duration: 0.2 } }}
//               >
//                 <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white h-full">
//                   <CardContent className="p-6 text-center">
//                     <motion.div 
//                       className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:opacity-80 transition-colors"
//                       style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
//                       whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
//                     >
//                       <sector.icon className="w-7 h-7" style={{ color: PRIMARY_COLOR }} />
//                     </motion.div>
//                     <h3 className="font-semibold text-gray-900">{sector.name}</h3>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Quality Assurance */}
//       <section className="py-16 md:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <AnimatedSection>
//               <Badge 
//                 className="mb-4"
//                 style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
//               >
//                 Quality Assurance
//               </Badge>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Uncompromising Quality Standards
//               </h2>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Every product that leaves our facilities undergoes rigorous quality testing. 
//                 Our commitment to excellence ensures that farmers receive safe, effective, 
//                 and reliable healthcare solutions for their animals.
//               </p>
//               <ul className="space-y-3">
//                 {[
//                   'GMP certified manufacturing facilities',
//                   'In-house quality control laboratories',
//                   'Regular third-party audits and testing',
//                   'Traceable raw material sourcing',
//                   'Stability testing for all products',
//                   'Compliance with international standards'
//                 ].map((item, i) => (
//                   <motion.li 
//                     key={i} 
//                     className="flex items-center gap-3 text-gray-700"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <ChevronRight className="w-5 h-5 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
//                     {item}
//                   </motion.li>
//                 ))}
//               </ul>
//             </AnimatedSection>
//             <AnimatedSection className="fadeInRight" variant={fadeInUp}>
//               <div 
//                 className="rounded-2xl p-8 text-center"
//                 style={{ background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}15, ${PRIMARY_COLOR}05)` }}
//               >
//                 <div className="text-5xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>500+</div>
//                 <div className="text-lg text-gray-700 mb-4">Products in Our Range</div>
//                 <p className="text-gray-600 text-sm mb-6">
//                   Each product is developed with extensive research and tested for efficacy and safety.
//                 </p>
//                 <Link href="/contact">
//                   <Button style={{ backgroundColor: PRIMARY_COLOR }} className="hover:opacity-90">
//                     Request Product Catalog
//                   </Button>
//                 </Link>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <motion.section 
//         className="py-16"
//         style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 text-center">
//           <motion.h2 
//             className="text-3xl md:text-4xl font-bold text-white mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             Need Help Choosing Products?
//           </motion.h2>
//           <motion.p 
//             className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             Our team of experts is ready to help you find the right products for your needs
//           </motion.p>
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <Link href="/contact">
//               <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
//                 Contact Our Team
//                 <ChevronRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }


// 'use client'

// import { useRef, useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { 
//   ChevronRight, Droplets, Package, Wheat, Pill, Syringe, 
//   Shield, Award, Star, ArrowRight,
//   Beaker, TestTube, Microscope, Zap,
//   Search, Image as ImageIcon
// } from 'lucide-react'
// import { motion, AnimatePresence, useInView } from 'framer-motion'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'
// import FloatingSocialLinks from '@/components/FloatingSocialLinks'

// const PRIMARY_COLOR = '#243d80'
// const PRIMARY_HOVER = '#1a2d5c'

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// }

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.1
//     }
//   }
// }

// const cardVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.4, ease: 'easeOut' }
//   }
// }

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { 
//     opacity: 1, 
//     scale: 1,
//     transition: { duration: 0.5, ease: 'easeOut' }
//   }
// }

// // Animated section wrapper
// function AnimatedSection({ 
//   children, 
//   className = '', 
//   variant = fadeInUp 
// }: { 
//   children: React.ReactNode
//   className?: string
//   variant?: typeof fadeInUp 
// }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-100px' })

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={isInView ? 'visible' : 'hidden'}
//       variants={variant}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   )
// }

// // Category configuration
// const CATEGORIES = [
//   { 
//     id: 'oralLiquids', 
//     name: 'Oral Liquids', 
//     icon: Droplets, 
//     color: '#3B82F6',
//     description: 'Premium liquid formulations for easy administration and rapid absorption'
//   },
//   { 
//     id: 'dryPowders', 
//     name: 'Dry Powders', 
//     icon: Package, 
//     color: '#8B5CF6',
//     description: 'Stable powder formulations for convenient storage and mixing'
//   },
//   { 
//     id: 'feedSupplements', 
//     name: 'Feed Supplements', 
//     icon: Wheat, 
//     color: '#22C55E',
//     description: 'Nutritional supplements to enhance feed quality and animal health'
//   },
//   { 
//     id: 'tabletsBolus', 
//     name: 'Tablets / Bolus', 
//     icon: Pill, 
//     color: '#EC4899',
//     description: 'Precise dosing with convenient tablet and bolus formulations'
//   },
//   { 
//     id: 'injectables', 
//     name: 'Injectables', 
//     icon: Syringe, 
//     color: '#EF4444',
//     description: 'Professional-grade injectable solutions for veterinary use'
//   },
// ]

// interface Product {
//   id: string
//   name: string
//   brandName: string
//   composition: string
//   packSize: string
//   image: string
//   description: string
//   category: string
//   sectors: string
//   featured: boolean
//   active: boolean
// }

// // Globe icon component
// const Globe = ({ className }: { className?: string }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10"/>
//     <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
//     <path d="M2 12h20"/>
//   </svg>
// )

// // Target icon component
// const Target = ({ className }: { className?: string }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10"/>
//     <circle cx="12" cy="12" r="6"/>
//     <circle cx="12" cy="12" r="2"/>
//   </svg>
// )

// // Stats data
// const stats = [
//   { icon: Beaker, value: '500+', label: 'Products', color: PRIMARY_COLOR },
//   { icon: Award, value: '30+', label: 'Years Experience', color: '#22C55E' },
//   { icon: Globe, value: '50+', label: 'Countries', color: '#8B5CF6' },
//   { icon: Shield, value: '6', label: 'Certifications', color: '#EF4444' },
// ]

// export default function ProductsPage() {
//   const [activeCategory, setActiveCategory] = useState('all')
//   const [products, setProducts] = useState<Product[]>([])
//   const [loading, setLoading] = useState(true)
//   const [searchQuery, setSearchQuery] = useState('')

//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('/api/products')
//       const data = await res.json()
//       setProducts(data.filter((p: Product) => p.active))
//     } catch (error) {
//       console.error('Error fetching products:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Filter products by category and search
//   const filteredProducts = products.filter(product => {
//     const matchesCategory = activeCategory === 'all' || product.category === activeCategory
//     const matchesSearch = searchQuery === '' || 
//       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.composition.toLowerCase().includes(searchQuery.toLowerCase())
//     return matchesCategory && matchesSearch
//   })

//   // Get current category info
//   const currentCategory = CATEGORIES.find(c => c.id === activeCategory)

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Floating Social Links */}
//       <FloatingSocialLinks />

//       {/* Header */}
//       <Header />

//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&h=800&fit=crop"
//             alt="Products Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}ee, ${PRIMARY_HOVER}cc)` }} />
//         </div>

//         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
//               <Star className="w-3 h-3 mr-1" />
//               Our Products
//             </Badge>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//               Comprehensive Range of<br />
//               <span className="text-blue-200">Animal Healthcare Products</span>
//             </h1>
//             <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
//               Trusted by farmers across 50+ countries for quality, efficacy, and reliability in animal health management.
//             </p>
//           </motion.div>
//         </div>

//         {/* Stats Bar */}
//         <div className="relative bg-white/10 backdrop-blur-md border-t border-white/20">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
//             <motion.div 
//               className="grid grid-cols-2 md:grid-cols-4 gap-6"
//               variants={staggerContainer}
//               initial="hidden"
//               animate="visible"
//             >
//               {stats.map((stat, i) => (
//                 <motion.div 
//                   key={i} 
//                   className="flex items-center gap-3"
//                   variants={scaleIn}
//                 >
//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20">
//                     <stat.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-white">{stat.value}</div>
//                     <div className="text-sm text-blue-100">{stat.label}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Statement */}
//       <section className="py-12 md:py-16 bg-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <AnimatedSection className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15` }}>
//               <Target className="w-7 h-7" style={{ color: PRIMARY_COLOR }} />
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               Our Mission
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Our goal is to become one of the most reliable companies with regards to the veterinary formulations. 
//               We want to be known as a company that is furthering animal health, with good quality products at affordable prices.
//             </p>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Products Catalog Section */}
//       <section id="products" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           {/* Section Header */}
//           <AnimatedSection className="text-center mb-8">
//             <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
//               <Package className="w-3 h-3 mr-1" />
//               Product Catalog
//             </Badge>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Browse Our Products
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Discover our comprehensive range of veterinary formulations
//             </p>
//           </AnimatedSection>

//           {/* Search Bar */}
//           <div className="max-w-md mx-auto mb-8">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-gray-100 outline-none transition-all"
//               />
//             </div>
//           </div>

//           {/* Category Tabs */}
//           <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
//             <motion.button
//               onClick={() => setActiveCategory('all')}
//               className={`flex items-center cursor-pointer gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl font-medium transition-all duration-300 ${
//                 activeCategory === 'all'
//                   ? 'text-white shadow-lg'
//                   : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
//               }`}
//               style={{
//                 backgroundColor: activeCategory === 'all' ? PRIMARY_COLOR : undefined,
//                 boxShadow: activeCategory === 'all' ? `0 10px 30px ${PRIMARY_COLOR}40` : undefined
//               }}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Package className="w-4 h-4 md:w-5 md:h-5" />
//               <span>All Products</span>
//             </motion.button>
//             {CATEGORIES.map((category) => (
//               <motion.button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`flex items-center gap-2 cursor-pointer px-4 md:px-5 py-2.5 md:py-3 rounded-xl font-medium transition-all duration-300 ${
//                   activeCategory === category.id
//                     ? 'text-white shadow-lg'
//                     : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
//                 }`}
//                 style={{
//                   backgroundColor: activeCategory === category.id ? category.color : undefined,
//                   boxShadow: activeCategory === category.id ? `0 10px 30px ${category.color}40` : undefined
//                 }}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <category.icon className="w-4 h-4 md:w-5 md:h-5" />
//                 <span className="hidden sm:inline">{category.name}</span>
//                 <span className="sm:hidden">{category.name.split(' ')[0]}</span>
//               </motion.button>
//             ))}
//           </div>

//           {/* Category Description */}
//           {currentCategory && (
//             <motion.p 
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center text-gray-500 mb-8"
//             >
//               {currentCategory.description}
//             </motion.p>
//           )}

//           {/* Products Count */}
//           <div className="text-center mb-6">
//             <span className="text-sm text-gray-500">
//               Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
//               {activeCategory !== 'all' && ` in ${CATEGORIES.find(c => c.id === activeCategory)?.name}`}
//             </span>
//           </div>

//           {/* Products Grid */}
//           {loading ? (
//             <div className="flex items-center justify-center py-20">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: PRIMARY_COLOR }} />
//             </div>
//           ) : filteredProducts.length === 0 ? (
//             <Card className="max-w-lg mx-auto">
//               <CardContent className="p-8 text-center">
//                 <Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">No Products Found</h3>
//                 <p className="text-gray-500">
//                   {searchQuery 
//                     ? 'Try adjusting your search query' 
//                     : 'No products available in this category yet'}
//                 </p>
//               </CardContent>
//             </Card>
//           ) : (
//             <motion.div 
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//               variants={staggerContainer}
//               initial="hidden"
//               animate="visible"
//             >
//               <AnimatePresence mode="popLayout">
//                 {filteredProducts.map((product) => {
//                   const category = CATEGORIES.find(c => c.id === product.category)
//                   const packSizes = product.packSize ? JSON.parse(product.packSize) : []

//                   return (
//                     <motion.div
//                       key={product.id}
//                       layout
//                       variants={cardVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       whileHover={{ y: -5 }}
//                       className="h-full"
//                     >
//                       <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
//                         {/* Product Image */}
//                         <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
//                           {product.image ? (
//                             <img 
//                               src={product.image} 
//                               alt={product.brandName}
//                               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                             />
//                           ) : (
//                             <div className="w-full h-full flex items-center justify-center">
//                               <ImageIcon className="w-16 h-16 text-gray-300" />
//                             </div>
//                           )}
//                           {product.featured && (
//                             <div className="absolute top-3 left-3">
//                               <Badge className="bg-yellow-500 text-white border-0 shadow-md">
//                                 <Star className="w-3 h-3 mr-1 fill-current" />
//                                 Featured
//                               </Badge>
//                             </div>
//                           )}
//                           {category && (
//                             <div className="absolute top-3 right-3">
//                               <Badge 
//                                 variant="secondary" 
//                                 className="shadow-md text-white border-0"
//                                 style={{ backgroundColor: category.color }}
//                               >
//                                 {category.name.split(' ')[0]}
//                               </Badge>
//                             </div>
//                           )}
//                         </div>

//                         <CardContent className="p-4">
//                           {/* Brand Name */}
//                           <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-gray-700">
//                             {product.brandName}
//                           </h3>

//                           {/* Product Name */}
//                           <p className="text-sm text-gray-500 mb-2">{product.name}</p>

//                           {/* Composition */}
//                           <div className="mb-3">
//                             <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">Composition</p>
//                             <p className="text-sm text-gray-600 line-clamp-2">{product.composition}</p>
//                           </div>

//                           {/* Pack Sizes */}
//                           {packSizes.length > 0 && (
//                             <div className="mb-3">
//                               <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">Pack Size</p>
//                               <div className="flex flex-wrap gap-1.5">
//                                 {packSizes.map((size: string) => (
//                                   <Badge 
//                                     key={size} 
//                                     variant="outline" 
//                                     className="text-xs font-medium"
//                                     style={{ 
//                                       borderColor: category?.color || PRIMARY_COLOR,
//                                       color: category?.color || PRIMARY_COLOR
//                                     }}
//                                   >
//                                     {size}
//                                   </Badge>
//                                 ))}
//                               </div>
//                             </div>
//                           )}

//                           {/* Description */}
//                           {product.description && (
//                             <p className="text-xs text-gray-400 line-clamp-2 mt-2">
//                               {product.description}
//                             </p>
//                           )}
//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   )
//                 })}
//               </AnimatePresence>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <AnimatedSection className="text-center mb-12">
//             <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
//               Why Choose Us
//             </Badge>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               The Siflon Advantage
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               What sets us apart in the animal healthcare industry
//             </p>
//           </AnimatedSection>

//           <motion.div 
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {[
//               { 
//                 icon: Microscope, 
//                 title: 'Research Driven', 
//                 description: 'Products developed through extensive R&D and field trials',
//                 color: '#3B82F6'
//               },
//               { 
//                 icon: Shield, 
//                 title: 'Quality Assured', 
//                 description: 'GMP, ISO, and WHO-GMP certified manufacturing',
//                 color: '#22C55E'
//               },
//               { 
//                 icon: Zap, 
//                 title: 'Fast Delivery', 
//                 description: 'Efficient logistics for timely product delivery',
//                 color: '#F59E0B'
//               },
//               { 
//                 icon: TestTube, 
//                 title: 'Lab Tested', 
//                 description: 'Every batch tested for potency and purity',
//                 color: '#8B5CF6'
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={cardVariants}
//                 whileHover={{ y: -8 }}
//               >
//                 <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
//                   <CardContent className="p-6 text-center">
//                     <motion.div 
//                       className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
//                       style={{ backgroundColor: `${item.color}15` }}
//                     >
//                       <item.icon className="w-7 h-7" style={{ color: item.color }} />
//                     </motion.div>
//                     <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
//                     <p className="text-sm text-gray-500">{item.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Quality Certifications */}
//       <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}>
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <AnimatedSection className="text-center mb-10">
//             <Badge className="mb-4 bg-white/20 text-white border-white/30">
//               <Award className="w-3 h-3 mr-1" />
//               Certifications
//             </Badge>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Quality You Can Trust
//             </h2>
//           </AnimatedSection>

//           <motion.div 
//             className="flex flex-wrap justify-center gap-6"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {['GMP Certified', 'ISO 9001:2015', 'WHO-GMP', 'HACCP', 'GLP', 'FSSAI'].map((cert, i) => (
//               <motion.div
//                 key={cert}
//                 variants={scaleIn}
//                 whileHover={{ scale: 1.05 }}
//                 className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
//               >
//                 <span className="text-white font-medium">{cert}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-20 bg-gray-50">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <Card className="overflow-hidden border-0 shadow-xl bg-white">
//               <CardContent className="p-0">
//                 <div className="grid lg:grid-cols-2">
//                   <div className="p-8 md:p-12">
//                     <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
//                       Get Started
//                     </Badge>
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                       Ready to Partner With Us?
//                     </h2>
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       Contact our team for product catalogs, pricing, and technical support. 
//                       We&apos;re here to help you find the right solutions for your animal healthcare needs.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4">
//                       <Link href="/contact">
//                         <Button size="lg" style={{ backgroundColor: PRIMARY_COLOR }} className="hover:opacity-90">
//                           Contact Us <ArrowRight className="ml-2 h-5 w-5" />
//                         </Button>
//                       </Link>
//                       <Link href="/quality">
//                         <Button size="lg" variant="outline" style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}>
//                           Our Quality Standards
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="relative h-64 lg:h-auto">
//                     <img 
//                       src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
//                       alt="Contact Us"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:hidden" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }


'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ChevronRight, Droplets, Package, Wheat, Pill, Syringe,
  Shield, Award, Star, ArrowRight,
  Beaker, TestTube, Microscope, Zap,
  Search, Image as ImageIcon, ChevronLeft, X,
  CheckCircle
} from 'lucide-react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingSocialLinks from '@/components/FloatingSocialLinks'

const PRIMARY_COLOR = '#243d80'
const PRIMARY_HOVER = '#1a2d5c'
const ITEMS_PER_PAGE = 12

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
      staggerChildren: 0.08,
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
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
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

// Category configuration
const CATEGORIES = [
  {
    id: 'oralLiquids',
    name: 'Oral Liquids',
    icon: Droplets,
    color: '#3B82F6',
    description: 'Premium liquid formulations for easy administration and rapid absorption'
  },
  {
    id: 'dryPowders',
    name: 'Dry Powders',
    icon: Package,
    color: '#8B5CF6',
    description: 'Stable powder formulations for convenient storage and mixing'
  },
  {
    id: 'feedSupplements',
    name: 'Feed Supplements',
    icon: Wheat,
    color: '#22C55E',
    description: 'Nutritional supplements to enhance feed quality and animal health'
  },
  {
    id: 'tabletsBolus',
    name: 'Tablets / Bolus',
    icon: Pill,
    color: '#EC4899',
    description: 'Precise dosing with convenient tablet and bolus formulations'
  },
  {
    id: 'injectables',
    name: 'Injectables',
    icon: Syringe,
    color: '#EF4444',
    description: 'Professional-grade injectable solutions for veterinary use'
  },
]

interface Product {
  id: string
  name: string
  productType: string
  composition: string
  packSize: string
  image: string
  indications: string
  dosage: string
  category: string
  sectors: string
  featured: boolean
  active: boolean
}

// Globe icon component
const Globe = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)

// Target icon component
const Target = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

// Stats data
const stats = [
  { icon: Beaker, value: '500+', label: 'Products', color: PRIMARY_COLOR },
  { icon: Award, value: '30+', label: 'Years Experience', color: '#22C55E' },
  { icon: Globe, value: '50+', label: 'Countries', color: '#8B5CF6' },
  { icon: Shield, value: '6', label: 'Certifications', color: '#EF4444' },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedProductType, setSelectedProductType] = useState<string>('all')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data.filter((p: Product) => p.active))
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  // Filter products by category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesProductType = activeCategory === 'all' || selectedProductType === 'all' || product.productType === selectedProductType

    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.productType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesProductType && matchesSearch
  })

  // Get unique product types for the selected category
  const productTypesInCategory = activeCategory !== 'all'
    ? [...new Set(products.filter(p => p.category === activeCategory).map(p => p.productType))].filter(Boolean)
    : []

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchQuery])

  // Get current category info
  const currentCategory = CATEGORIES.find(c => c.id === activeCategory)

  // Pagination controls
  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
    window.scrollTo({ top: document.getElementById('products')?.offsetTop || 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating Social Links */}
      <FloatingSocialLinks />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      {/* <section className="relative overflow-hidden">
    
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&h=800&fit=crop"
            alt="Products Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}ee, ${PRIMARY_HOVER}cc)` }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Star className="w-3 h-3 mr-1" />
              Our Products
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive Range of<br />
              <span className="text-blue-200">Animal Healthcare Products</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Trusted by farmers across 50+ countries for quality, efficacy, and reliability in animal health management.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Mission Statement */}
      {/* <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15` }}>
              <Target className="w-7 h-7" style={{ color: PRIMARY_COLOR }} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our goal is to become one of the most reliable companies with regards to the veterinary formulations. 
              We want to be known as a company that is furthering animal health, with good quality products at affordable prices.
            </p>
          </AnimatedSection>
        </div>
      </section> */}

      {/* Products Catalog Section */}
      <section id="products" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-8">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
              <Package className="w-3 h-3 mr-1" />
              Product Catalog
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of veterinary formulations
            </p>
          </AnimatedSection>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-gray-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            <motion.button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === 'all'
                ? 'text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                }`}
              style={{
                backgroundColor: activeCategory === 'all' ? PRIMARY_COLOR : undefined,
                boxShadow: activeCategory === 'all' ? `0 10px 30px ${PRIMARY_COLOR}40` : undefined
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Package className="w-4 h-4 md:w-5 md:h-5" />
              <span>All Products</span>
            </motion.button>
            {CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                  }`}
                style={{
                  backgroundColor: activeCategory === category.id ? category.color : undefined,
                  boxShadow: activeCategory === category.id ? `0 10px 30px ${category.color}40` : undefined
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <category.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>

          {/* Product Type Sub-Tabs - Show when category is selected */}
          {activeCategory !== 'all' && productTypesInCategory.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-2 mb-6 py-3 px-4 bg-gray-50 rounded-xl mx-auto max-w-3xl"
            >
              {/* <button
                onClick={() => setSelectedProductType('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedProductType === 'all'
                  ? 'text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                  }`}
                style={{
                  backgroundColor: selectedProductType === 'all' ? currentCategory?.color : undefined,
                }}
              >
                All Types
              </button> */}
              {productTypesInCategory.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedProductType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 uppercase ${selectedProductType === type
                    ? 'text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                    }`}
                  style={{
                    backgroundColor: selectedProductType === type ? currentCategory?.color : undefined,
                  }}
                >
                  {type}
                </button>
              ))}
            </motion.div>
          )}

          {/* Category Description */}
          {currentCategory && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-gray-500 mb-8"
            >
              {currentCategory.description}
            </motion.p>
          )}

          {/* Products Count */}
          <div className="text-center mb-6">
            <span className="text-sm text-gray-500">
              Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              {activeCategory !== 'all' && ` in ${CATEGORIES.find(c => c.id === activeCategory)?.name}`}
            </span>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="flex gap-6 overflow-hidden mx-2 md:mx-8">
              {[...Array(8)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <Card className="max-w-lg mx-auto">
              <CardContent className="p-8 text-center">
                <Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No Products Found</h3>
                <p className="text-gray-500">
                  {searchQuery
                    ? 'Try adjusting your search query'
                    : 'No products available in this category yet'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              <motion.div
                key={`${activeCategory}-${currentPage}`}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence mode="popLayout">
                  {paginatedProducts.map((product) => {
                    const category = CATEGORIES.find(c => c.id === product.category)
                    const packSizes = product.packSize ? JSON.parse(product.packSize) : []

                    return (
                      <motion.div
                        key={product.id}
                        layout
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ y: -5 }}
                        className="h-full cursor-pointer"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group rounded-xl py-0">
                          {/* Product Image */}
                          <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden p-6">
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <ImageIcon className="w-16 h-16 text-gray-300" />
                              </div>
                            )}

                            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                            <div className="pointer-events-none absolute inset-x-5 bottom-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-md">
                                <div className="flex items-start gap-3">
                                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                                    {category?.icon ? (
                                      <category.icon className="h-5 w-5" />
                                    ) : (
                                      <ImageIcon className="h-5 w-5" />
                                    )}
                                  </div>

                                  <div className="min-w-0">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300">
                                      {category?.name || 'Category'}
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-white line-clamp-1">
                                      {product.productType}
                                    </p>
                                    {category?.description && (
                                      <p className="mt-2 text-xs leading-5 text-slate-300 line-clamp-2">
                                        {category.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {product.featured && (
                              <div className="absolute top-3 left-3">
                                <Badge className="bg-yellow-500 text-white border-0 shadow-md">
                                  <Star className="w-3 h-3 mr-1 fill-current" />
                                  Featured
                                </Badge>
                              </div>
                            )}
                            {category && (
                              <div className="absolute top-3 right-3">
                                <Badge
                                  variant="secondary"
                                  className="shadow-md text-white border-0 uppercase"
                                  style={{ backgroundColor: category.color }}
                                >
                                  {category.name.split(' ')[0]}
                                </Badge>
                              </div>
                            )}
                          </div>

                          <CardContent className="p-5">
                            {/* Product Name */}
                            <h3 className="text-base font-bold text-gray-900 mb-1.5 line-clamp-2">
                              {product.name}
                            </h3>

                            {/* Product Type (Category) */}
                            <p className="text-xs text-gray-500 mb-3 line-clamp-1 uppercase">{product.productType}</p>

                            {/* Composition */}
                            {/* <div className="mb-3">
                              <p className="text-xs text-gray-400 line-clamp-2">{product.composition}</p>
                            </div> */}

                            {/* Pack Sizes */}
                            {/* {packSizes.length > 0 && (
                              <div className="flex flex-wrap gap-1.5">
                                {packSizes.slice(0, 3).map((size: string) => (
                                  <Badge 
                                    key={size} 
                                    variant="outline" 
                                    className="text-xs font-medium"
                                    style={{ 
                                      borderColor: category?.color || PRIMARY_COLOR,
                                      color: category?.color || PRIMARY_COLOR
                                    }}
                                  >
                                    {size}
                                  </Badge>
                                ))}
                                {packSizes.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{packSizes.length - 3} more
                                  </Badge>
                                )}
                              </div>
                            )} */}
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  className="flex items-center justify-center gap-2 mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Previous Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="h-10 w-10"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {/* First page */}
                    {currentPage > 3 && (
                      <>
                        <Button
                          variant={currentPage === 1 ? 'default' : 'outline'}
                          size="icon"
                          onClick={() => goToPage(1)}
                          className="h-10 w-10"
                          style={currentPage === 1 ? { backgroundColor: PRIMARY_COLOR } : {}}
                        >
                          1
                        </Button>
                        {currentPage > 4 && (
                          <span className="px-2 text-gray-400">...</span>
                        )}
                      </>
                    )}

                    {/* Pages around current */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(page => {
                        if (totalPages <= 5) return true
                        if (page === 1 || page === totalPages) return false
                        return Math.abs(page - currentPage) <= 1
                      })
                      .map(page => (
                        <Button
                          key={page}
                          variant={currentPage === page ? 'default' : 'outline'}
                          size="icon"
                          onClick={() => goToPage(page)}
                          className="h-10 w-10"
                          style={currentPage === page ? { backgroundColor: PRIMARY_COLOR } : {}}
                        >
                          {page}
                        </Button>
                      ))}

                    {/* Last page */}
                    {currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && (
                          <span className="px-2 text-gray-400">...</span>
                        )}
                        <Button
                          variant={currentPage === totalPages ? 'default' : 'outline'}
                          size="icon"
                          onClick={() => goToPage(totalPages)}
                          className="h-10 w-10"
                          style={currentPage === totalPages ? { backgroundColor: PRIMARY_COLOR } : {}}
                        >
                          {totalPages}
                        </Button>
                      </>
                    )}
                  </div>

                  {/* Next Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="h-10 w-10"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Siflon Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the animal healthcare industry
            </p>
          </AnimatedSection>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: Microscope, 
                title: 'Research Driven', 
                description: 'Products developed through extensive R&D and field trials',
                color: '#3B82F6'
              },
              { 
                icon: Shield, 
                title: 'Quality Assured', 
                description: 'GMP, ISO, and WHO-GMP certified manufacturing',
                color: '#22C55E'
              },
              { 
                icon: Zap, 
                title: 'Fast Delivery', 
                description: 'Efficient logistics for timely product delivery',
                color: '#F59E0B'
              },
              { 
                icon: TestTube, 
                title: 'Lab Tested', 
                description: 'Every batch tested for potency and purity',
                color: '#8B5CF6'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon className="w-7 h-7" style={{ color: item.color }} />
                    </motion.div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Quality Certifications */}
      {/* <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Award className="w-3 h-3 mr-1" />
              Certifications
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quality You Can Trust
            </h2>
          </AnimatedSection>

          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['GMP Certified', 'ISO 9001:2015', 'WHO-GMP', 'HACCP', 'GLP', 'FSSAI'].map((cert, i) => (
              <motion.div
                key={cert}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="text-white font-medium">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
                      Get Started
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Ready to Partner With Us?
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Contact our team for product catalogs, pricing, and technical support. 
                      We&apos;re here to help you find the right solutions for your animal healthcare needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact">
                        <Button size="lg" style={{ backgroundColor: PRIMARY_COLOR }} className="hover:opacity-90">
                          Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="/quality">
                        <Button size="lg" variant="outline" style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}>
                          Our Quality Standards
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                      alt="Contact Us"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:hidden" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />

      {/* Product Detail Dialog */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="flex flex-col md:flex-row h-full max-h-[92vh] overflow-hidden">
                {/* Image Section */}
                <div className="md:w-2/5 relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 md:p-12 overflow-y-auto">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {selectedProduct.image ? (
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <ImageIcon className="w-24 h-24 text-gray-300" />
                    )}
                  </div>
                  {/* Featured Badge */}
                  {selectedProduct.featured && (
                    <div className="absolute top-8 left-8">
                      <Badge className="bg-yellow-500 text-white border-0 shadow-lg">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 flex flex-col overflow-y-auto">
                  {/* Header with Category */}
                  <div className="px-8 md:px-10 pt-8 md:pt-10 pb-6 border-b border-gray-100">
                    {(() => {
                      const category = CATEGORIES.find(c => c.id === selectedProduct.category)
                      return category ? (
                        <Badge
                          className="mb-4 text-white font-medium "
                          style={{ backgroundColor: category.color }}
                        >
                          {category.name}
                        </Badge>
                      ) : null
                    })()}

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-sm text-gray-500 uppercase">{selectedProduct.productType}</p>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 px-8 md:px-10 py-8 space-y-8 overflow-y-auto">
                    {/* Composition */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                        Composition
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {selectedProduct.composition}
                      </p>
                    </div>

                    {/* Pack Sizes */}
                    {selectedProduct.packSize && JSON.parse(selectedProduct.packSize).length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                          Available Pack Sizes
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {JSON.parse(selectedProduct.packSize).map((size: string) => {
                            const category = CATEGORIES.find(c => c.id === selectedProduct.category)
                            return (
                              <Badge
                                key={size}
                                className="px-4 py-2 text-sm font-semibold"
                                style={{
                                  borderColor: category?.color || PRIMARY_COLOR,
                                  color: category?.color || PRIMARY_COLOR,
                                  backgroundColor: `${category?.color || PRIMARY_COLOR}10`,
                                  border: `1.5px solid ${category?.color || PRIMARY_COLOR}`
                                }}
                                variant="outline"
                              >
                                {size}
                              </Badge>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Indications */}
                    {selectedProduct.indications && (
                      <div>
                        <h4 className="text-xs font-bold text-black uppercase tracking-widest mb-3">
                          Indications
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-base">
                          {selectedProduct.indications}
                        </p>
                      </div>
                    )}

                    {/* Dosage */}
                    {selectedProduct.dosage && (
                      <div>
                        <h4 className="text-xs font-bold text-black uppercase tracking-widest mb-3">
                          Dosage
                        </h4>
                        <div className="text-gray-700 leading-relaxed text-base space-y-2">
                          {selectedProduct.dosage.split('\n').map((line: string, idx: number) => {
                            const colonIndex = line.indexOf(':')
                            if (colonIndex === -1) {
                              return <p key={idx}>{line}</p>
                            }
                            const boldPart = line.substring(0, colonIndex)
                            const normalPart = line.substring(colonIndex)
                            return (
                              <p key={idx}>
                                <span className="font-bold">{boldPart}</span>
                                {normalPart}
                              </p>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Sectors */}
                    {selectedProduct.sectors && JSON.parse(selectedProduct.sectors).length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                          Suitable For
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {JSON.parse(selectedProduct.sectors).map((sector: string) => (
                            <div key={sector} className="flex items-center gap-2.5">
                              <div className="flex-shrink-0">
                                <CheckCircle className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                              </div>
                              <span className="text-gray-700 font-medium capitalize">
                                {sector === 'all' ? 'All Animals' : sector}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="px-8 md:px-10 py-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="flex-1">
                      <Button
                        className="w-full h-12 text-base font-semibold hover:shadow-lg transition-all"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                      >
                        Request Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Button
                      className="flex-1 h-12 text-base font-semibold hover:bg-gray-100 transition-all"
                      variant="outline"
                      onClick={() => setSelectedProduct(null)}
                    >
                      Continue Browsing
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}




// --- Skeleton Component for Loading State ---
const ProductSkeleton = () => {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[300px]">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col animate-pulse">
        {/* Image Skeleton */}
        <div className="relative w-full h-56 bg-gradient-to-br from-gray-200 to-gray-300" />

        {/* Content Skeleton */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Title Skeleton */}
          <div className="h-6 bg-gray-200 rounded-lg w-3/4 mb-2" />
          <div className="h-6 bg-gray-200 rounded-lg w-1/2 mb-2" />

          {/* Type Skeleton */}
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />

          {/* Footer Skeleton */}
          <div className="mt-auto pt-4 border-t border-gray-50">
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </div>
        </div>
      </div>
    </div>
  )
}