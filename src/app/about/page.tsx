// 'use client'

// import { useRef } from 'react'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { CheckCircle, Award, Globe, Shield, Users, Clock, Target, ChevronRight } from 'lucide-react'
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

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -30 },
//   visible: { 
//     opacity: 1, 
//     x: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// }

// const fadeInRight = {
//   hidden: { opacity: 0, x: 30 },
//   visible: { 
//     opacity: 1, 
//     x: 0,
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

// const strengths = [
//   {
//     icon: Award,
//     title: '30+ Years Experience',
//     description: 'Over three decades of expertise in animal healthcare manufacturing and research'
//   },
//   {
//     icon: Globe,
//     title: 'Global Presence',
//     description: 'Exporting to 50+ countries with a strong distribution network worldwide'
//   },
//   {
//     icon: Shield,
//     title: 'Quality Certified',
//     description: 'GMP, ISO, and WHO-GMP certified manufacturing facilities'
//   },
//   {
//     icon: Users,
//     title: 'Expert Team',
//     description: 'Team of veterinarians, nutritionists, and research scientists'
//   },
//   {
//     icon: Clock,
//     title: '24/7 Support',
//     description: 'Round-the-clock technical support and consultation services'
//   },
//   {
//     icon: Target,
//     title: 'Custom Solutions',
//     description: 'Tailored formulations to meet specific regional and farm requirements'
//   },
// ]

// const milestones = [
//   { year: '1993', title: 'Company Founded', description: 'Siflon established with a vision to transform animal healthcare' },
//   { year: '2000', title: 'ISO Certification', description: 'Achieved ISO 9001 certification for quality management systems' },
//   { year: '2008', title: 'Global Expansion', description: 'Expanded operations to 25+ countries across Asia and Africa' },
//   { year: '2015', title: 'WHO-GMP Certified', description: 'Received WHO-GMP certification for manufacturing excellence' },
//   { year: '2020', title: '50 Countries Milestone', description: 'Products now available in 50+ countries worldwide' },
//   { year: '2024', title: 'Innovation Center', description: 'Launched state-of-the-art R&D and innovation center' },
// ]

// export default function AboutPage() {
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
//               About Us
//             </Badge>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Pioneering Animal Health Since 1993
//             </h1>
//             <p className="text-lg text-blue-100 max-w-2xl">
//               Dedicated to delivering excellence in animal healthcare through innovation, quality, and unwavering commitment.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-16 md:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <AnimatedSection variant={fadeInLeft}>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Our Story
//               </h2>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Siflon Drugs & Pharmaceuticals Pvt Ltd has been at the forefront of animal healthcare innovation for over three decades. 
//                 Founded in 1993, we started with a simple mission: to provide high-quality, affordable 
//                 healthcare solutions for animals across all sectors.
//               </p>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Today, we serve a diverse range of sectors including poultry, aqua, dairy, swine, equine, and pets, 
//                 earning a sterling reputation for excellence and innovation. Our commitment to research and 
//                 development has led to breakthrough products that have transformed animal healthcare practices.
//               </p>
//               <p className="text-gray-600 mb-8 leading-relaxed">
//                 Our state-of-the-art manufacturing facilities are GMP and ISO certified, ensuring the highest 
//                 quality standards in every product we deliver. With a team of dedicated veterinarians, 
//                 nutritionists, and research scientists, we continuously develop cutting-edge solutions for 
//                 animal health challenges.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 {['GMP Certified', 'ISO 9001:2015', 'WHO-GMP', 'Export House'].map((cert, i) => (
//                   <motion.div 
//                     key={i} 
//                     className="flex items-center gap-2"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
//                     <span className="text-sm font-medium text-gray-700">{cert}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </AnimatedSection>
//             <AnimatedSection variant={fadeInRight}>
//               <div 
//                 className="rounded-2xl p-8"
//                 style={{ background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}15, ${PRIMARY_COLOR}05)` }}
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   {[
//                     { value: '500+', label: 'Product Range' },
//                     { value: '50+', label: 'Countries' },
//                     { value: '100+', label: 'Scientists' },
//                     { value: '24/7', label: 'Support' }
//                   ].map((stat, i) => (
//                     <motion.div 
//                       key={i}
//                       className="bg-white rounded-xl p-6 shadow-sm"
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: i * 0.1, duration: 0.4 }}
//                       viewport={{ once: true }}
//                       whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
//                     >
//                       <div className="text-3xl font-bold mb-1" style={{ color: PRIMARY_COLOR }}>{stat.value}</div>
//                       <div className="text-sm text-gray-600">{stat.label}</div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//           <AnimatedSection className="text-center mb-12">
//             <Badge 
//               className="mb-4"
//               style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
//             >
//               Why Choose Us
//             </Badge>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Your Trusted Partner in Animal Health
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Discover why thousands of farmers and businesses trust Siflon
//             </p>
//           </AnimatedSection>
//           <motion.div 
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-50px' }}
//           >
//             {strengths.map((strength, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white h-full">
//                   <CardContent className="p-6">
//                     <motion.div 
//                       className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:opacity-80 transition-colors"
//                       style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                     >
//                       <strength.icon className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
//                     </motion.div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">{strength.title}</h3>
//                     <p className="text-gray-600">{strength.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-16 md:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//           <AnimatedSection className="text-center mb-12">
//             <Badge 
//               className="mb-4"
//               style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
//             >
//               Our Journey
//             </Badge>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Milestones Along the Way
//             </h2>
//           </AnimatedSection>
          
//           <div className="relative">
//             {/* Timeline line */}
//             <div 
//               className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block"
//               style={{ backgroundColor: `${PRIMARY_COLOR}20` }}
//             />
            
//             <div className="space-y-8">
//               {milestones.map((milestone, index) => (
//                 <motion.div
//                   key={index}
//                   className={`flex flex-col md:flex-row items-center gap-4 ${
//                     index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                   }`}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
//                     <Card className="border-0 shadow-md">
//                       <CardContent className="p-6">
//                         <div 
//                           className="text-sm font-bold mb-2"
//                           style={{ color: PRIMARY_COLOR }}
//                         >
//                           {milestone.year}
//                         </div>
//                         <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
//                         <p className="text-gray-600 text-sm">{milestone.description}</p>
//                       </CardContent>
//                     </Card>
//                   </div>
//                   <div 
//                     className="w-4 h-4 rounded-full hidden md:block"
//                     style={{ backgroundColor: PRIMARY_COLOR }}
//                   />
//                   <div className="flex-1 hidden md:block" />
//                 </motion.div>
//               ))}
//             </div>
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
//             Partner With Us Today
//           </motion.h2>
//           <motion.p 
//             className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             Join thousands of farmers and businesses who trust Siflon
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
//                 Contact Us
//                 <ChevronRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Link href="/products">
//               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
//                 View Products
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

'use client'

import { useRef, useState,useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  CheckCircle, Award, Globe, Shield, Users, Clock, Target, ChevronRight,
  Building2, Microscope, Beaker, Factory, Leaf, Stethoscope, ArrowRight,
  Layers, ShieldCheck, Warehouse, Droplets, Pill, Package
} from 'lucide-react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
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

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const stats = [
  { value: 30, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Countries Served' },
  { value: 500, suffix: '+', label: 'Products Range' },
  { value: 10000, suffix: '+', label: 'Happy Clients' },
]

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



// Counter animation component
function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const incrementTime = (duration * 1000) / end

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) clearInterval(timer)
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// Business divisions
const divisions = [
  {
    icon: Beaker,
    name: 'Siflon Drugs',
    description: 'Manufacture of Veterinary APIs',
    color: '#3B82F6'
  },
  {
    icon: Stethoscope,
    name: 'Siflon Drugs & Pharmaceuticals',
    description: 'Veterinary Formulations',
    color: '#22C55E'
  },
  {
    icon: Building2,
    name: 'Siflon Vet Pharma',
    description: 'Veterinary Pharmaceutical Franchisee Outlets',
    color: '#8B5CF6'
  },
  {
    icon: Factory,
    name: 'Siflon Polymers',
    description: 'PTFE Components Manufacturing',
    color: '#F59E0B'
  },
  {
    icon: Microscope,
    name: 'Siflon Engineering',
    description: 'Reactors & Engineering Solutions',
    color: '#EF4444'
  },
  {
    icon: Leaf,
    name: 'Aloewell Herbals',
    description: 'Aloevera Products',
    color: '#10B981'
  },
]

const strengths = [
  {
    icon: Award,
    title: 'Since 1996',
    description: 'Over 28 years of expertise in manufacturing and pharmaceuticals'
  },
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Expanding our reach to serve customers worldwide'
  },
  {
    icon: Shield,
    title: 'Quality Certified',
    description: 'GMP, ISO, and WHO-GMP certified manufacturing facilities'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Team of veterinarians, nutritionists, and research scientists'
  },
  {
    icon: Clock,
    title: 'Technical Support',
    description: 'Outstanding technical support to animal farmers and veterinarians'
  },
  {
    icon: Target,
    title: 'Affordable Pricing',
    description: 'Good quality products at affordable prices for all farmers'
  },
]

const milestones = [
  { year: '1996', title: 'Company Founded', description: 'Founded by Mr. R. Ananthaiah as a small scale PTFE component manufacturing industry' },
  { year: '2006', title: 'Siflon Drugs & Pharmaceuticals', description: 'Started veterinary formulations with a vision to provide quality animal healthcare' },
  { year: '2010', title: 'Product Portfolio Expansion', description: 'Launched comprehensive range of products for farm animals' },
  { year: '2015', title: 'Multi-Sector Growth', description: 'Diversified into 6 major business divisions' },
  { year: '2020', title: 'Global Reach', description: 'Established presence in multiple countries' },
  { year: '2024', title: 'Innovation & Growth', description: 'Continuing to develop new products addressing unmet medical needs' },
]

// Integration, Quality, Infrastructure tabs data
const integrationTabs = [
  {
    id: 'integration',
    title: 'Backward & Forward Integration',
    icon: Layers,
    image: 'https://siflonpharma.com/img/img-service-1.jpg',
    content: `Backward and forward integration has been the key to diversify into different sectors. The founder being a chemical engineer, always had a zeal to establish chemical industry and started Siflon Drugs for the manufacture of veterinary APIs. The company pursued a strategy of backward integration – in reactor, PTFE lined components manufacturing and forward integration – in veterinary formulations and franchisee outlets to market the veterinary medicines.`,
    highlights: [
      'Veterinary APIs Manufacturing',
      'Reactor Manufacturing',
      'PTFE Lined Components',
      'Veterinary Formulations',
      'Franchisee Outlets Network'
    ]
  },
  {
    id: 'quality',
    title: 'Quality and Commitment',
    icon: ShieldCheck,
    image: 'https://siflonpharma.com/img/img-service-3.jpg',
    content: `The Quality and Commitment are the pillars of our company. Our company's motto is "Quality is our strength" and we believe that it had been the promising reason for the company's progress. Thus, At Siflon, QUALITY comes first.`,
    highlights: [
      'Quality is Our Strength',
      'GMP Certified Facilities',
      'WHO-GMP Standards',
      'ISO 9001:2015 Certified',
      'Quality Assurance at Every Stage'
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: Warehouse,
    image: 'https://siflonpharma.com/img/img-service-2.jpg',
    content: `The manufacturing facility located at ALEAP Industrial Estate, Hyderabad, conforms to the latest global manufacturing standards. The company has state-of-the-art production capacity equipped with modern machinery and quality control laboratories.`,
    highlights: [
      '3000 KL of Oral Liquids per annum',
      '300 Tonnes of Granulation (Tablets/Bolus) per annum',
      '200 Tonnes of Dry Powders per annum',
      'ALEAP Industrial Estate, Hyderabad',
      'Global Manufacturing Standards'
    ]
  }
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('integration')
  const activeTabData = integrationTabs.find(t => t.id === activeTab)!

  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating Social Links */}
      <FloatingSocialLinks />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=800&fit=crop"
            alt="About Siflon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}ee, ${PRIMARY_HOVER}cc)` }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pioneering Excellence Since 1996
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              From humble beginnings to a diversified business group serving multiple sectors in veterinary healthcare and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant={fadeInLeft}>
              <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From PTFE to Pharmaceutical Excellence
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Founded in <strong>1996 by Mr. R. Ananthaiah</strong> as a small scale PTFE component manufacturing 
                industry, we&apos;ve gradually diversified into different sectors. Today, our operations span 6 major areas 
                serving diverse industries.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our group companies include <strong>Siflon Drugs</strong> (Veterinary APIs), <strong>Siflon Drugs & 
                Pharmaceuticals Pvt. Ltd.</strong> (Veterinary Formulations), <strong>Siflon Vet Pharma</strong> 
                (Veterinary Pharmaceutical Franchisee Outlets), <strong>Siflon Polymers</strong> (PTFE components), 
                <strong> Siflon Engineering</strong> (Reactors), and <strong>Aloewell Herbals</strong> (Aloevera products).
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['GMP Certified', 'ISO 9001:2015', 'WHO-GMP', 'Quality Assured'].map((cert, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                    <span className="text-sm font-medium text-gray-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection variant={fadeInRight}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl opacity-20" style={{ backgroundColor: PRIMARY_COLOR }} />
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop"
                  alt="Siflon Manufacturing Facility"
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold" style={{ color: PRIMARY_COLOR }}>28+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Siflon Drugs & Pharmaceuticals Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
              Our Veterinary Division
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Siflon Drugs & Pharmaceuticals Pvt. Ltd.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A subsidiary of Siflon Group, started in 2006 with a vision to provide good quality animal healthcare products.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant={fadeInLeft}>
              <Card className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=400&fit=crop"
                    alt="Veterinary Products"
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection variant={fadeInRight}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Committed to Animal Health
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We offer a variety of products with regards to animal health, especially for farm animals such as 
                <strong> sheep, goat, cattle, and swine</strong>. We provide outstanding technical support and 
                service to animal farmers as well as their veterinarians in India, to ensure the safety and improve 
                the quality and productivity of their livestock.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our goal is to become one of the most reliable companies with regards to the veterinary formulations. 
                We want to be known as a company that is furthering animal health, with good quality products at 
                affordable prices.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Sheep', 'Goat', 'Cattle', 'Swine', 'Poultry', 'Aqua'].map((animal, i) => (
                  <motion.span
                    key={animal}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white shadow-md border"
                    style={{ color: PRIMARY_COLOR, borderColor: `${PRIMARY_COLOR}30` }}
                  >
                    {animal}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Integration, Quality, Infrastructure Tabs Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23243d80' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
              Our Strengths
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built on Strong Foundations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore what makes Siflon a leader in veterinary pharmaceuticals
            </p>
          </AnimatedSection>

          {/* Tabs - Horizontal */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {integrationTabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white shadow-xl'
                    : 'bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-white shadow-md'
                }`}
                style={{
                  backgroundColor: activeTab === tab.id ? PRIMARY_COLOR : undefined,
                  boxShadow: activeTab === tab.id ? `0 10px 30px ${PRIMARY_COLOR}40` : undefined
                }}
                whileHover={{ scale: activeTab === tab.id ? 1.02 : 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base">{tab.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Image - Full Width */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full">
                <img 
                  src={activeTabData.image}
                  alt={activeTabData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                      <activeTabData.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {activeTabData.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Content - Below Image */}
              <div className="p-6 md:p-8">
                <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                  {activeTabData.content}
                </p>
                
                {/* Highlights */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {activeTabData.highlights.map((highlight, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-2 p-3 rounded-lg bg-gray-50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                      <span className="text-sm font-medium text-gray-700">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
              Our Divisions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Siflon Group Companies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diversified operations spanning multiple industries
            </p>
          </AnimatedSection>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {divisions.map((division, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white h-full overflow-hidden">
                  <CardContent className="p-6">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${division.color}15` }}
                    >
                      <division.icon className="w-7 h-7" style={{ color: division.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{division.name}</h3>
                    <p className="text-gray-600">{division.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection variant={fadeInLeft}>
              <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Our company is in the process of launching new products to strengthen our portfolio and establish 
                    a base to launch our products in different countries. We aspire to develop new products and 
                    medicines that will address significant unmet medical needs of both companion and farm animals.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection variant={fadeInRight}>
              <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Our goal is to become one of the most reliable companies with regards to the veterinary formulations. 
                    We want to be known as a company that is furthering animal health, with good quality products at 
                    affordable prices.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Trusted Partner in Animal Health
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why thousands of farmers and businesses trust Siflon
            </p>
          </AnimatedSection>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white h-full">
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                    >
                      <strength.icon className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{strength.title}</h3>
                    <p className="text-gray-600">{strength.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

           {/* Stats Section - 30+ Years of Excellence */}
            <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
                <AnimatedSection className="text-center mb-12">
                  <Badge className="mb-4 bg-white/20 text-white border-white/30 border">
                    Our Journey
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    30+ Years of Excellence
                  </h2>
                  <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                    A legacy of trust, innovation, and quality in animal healthcare since 1993
                  </p>
                </AnimatedSection>
      
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                      variants={scaleIn}
                      whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    >
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
      

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Milestones Along the Way
            </h2>
          </AnimatedSection>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block"
              style={{ backgroundColor: `${PRIMARY_COLOR}20` }}
            />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div 
                          className="text-sm font-bold mb-2"
                          style={{ color: PRIMARY_COLOR }}
                        >
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div 
                    className="w-4 h-4 rounded-full hidden md:block z-10 ring-4 ring-white"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
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
                      Partner With Us Today
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Join thousands of farmers and businesses who trust Siflon for quality animal healthcare solutions. 
                      Contact us to learn more about our products and services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact">
                        <Button size="lg" style={{ backgroundColor: PRIMARY_COLOR }} className="hover:opacity-90">
                          Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="/products">
                        <Button size="lg" variant="outline" style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}>
                          View Products
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                      alt="Partner with Siflon"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:hidden" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
