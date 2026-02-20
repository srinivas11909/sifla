'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ChevronRight, ChevronLeft, Feather, Waves, Milk, CircleDot, Activity, Heart, 
  Play, Pause, MapPin, Globe, Award, Building2, Factory, Truck, Users, 
  CheckCircle, Leaf, Microscope, Beaker, TestTube, Shield, Zap, Target, Download,
  Pill, Syringe, Droplets, FlaskConical, Sparkles
} from 'lucide-react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingSocialLinks from '@/components/FloatingSocialLinks'
import OutletsDialog from '@/components/OutletsDialog'

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

// Hero slides with veterinary pharmaceutical focus
const defaultHeroSlides = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1596464716607-75f178ae7275?w=1600&h=900&fit=crop',
    title: 'Veterinary Pharmaceutical Excellence',
    subtitle: 'GMP certified manufacturer of high-quality veterinary medicines, feed supplements & animal healthcare products. Trusted by veterinarians across 50+ countries.',
    badge: 'Since 1993'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&h=900&fit=crop',
    title: 'Premium Animal Medicines',
    subtitle: 'Comprehensive range of antibiotics, probiotics, feed supplements & disinfectants for poultry, aqua, dairy, swine & pets.',
    badge: '500+ Products'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1600&h=900&fit=crop',
    title: 'Research-Driven Formulations',
    subtitle: 'DSIR recognized R&D center developing innovative veterinary pharmaceutical solutions for better animal health outcomes.',
    badge: 'Certified Quality'
  }
]

// Product categories for pharmaceutical focus
const productCategories = [
  { 
    icon: Beaker, 
    title: 'Oral Liquids & Solutions', 
    count: '120+',
    color: '#0891b2',
    description: 'Liquid formulations for easy administration',
    items: ['Oral Suspensions', 'Liquid Medicines', 'Electrolytes', 'Vitamins']
  },
  { 
    icon: Beaker, 
    title: 'Feed Supplements', 
    count: '150+',
    color: '#22c55e',
    description: 'Nutritional supplements for all animals',
    items: ['Mineral Mixtures', 'Vitamins', 'Amino Acids', 'Enzymes']
  },
  { 
    icon: Pill, 
    title: 'Tablets & Bolus', 
    count: '80+',
    color: '#8b5cf6',
    description: 'Precise dosage solid formulations',
    items: ['Anthelmintics', 'Antibiotics', 'Nutritional', 'Combination']
  },
  { 
    icon: Syringe, 
    title: 'Injectables', 
    count: '60+',
    color: '#ef4444',
    description: 'Sterile injectable formulations',
    items: ['Antibiotics', 'Anti-inflammatory', 'Vitamins', 'Hormones']
  },
  { 
    icon: TestTube, 
    title: 'Probiotics', 
    count: '50+',
    color: '#f59e0b',
    description: 'Gut health solutions',
    items: ['Lactobacillus', 'Bacillus', 'Yeast Cultures', 'Multi-strain']
  },
  { 
    icon: Droplets, 
    title: 'Disinfectants', 
    count: '40+',
    color: '#06b6d4',
    description: 'Biosecurity solutions',
    items: ['Surface Cleaners', 'Water Sanitizers', 'Aerial', 'Equipment']
  },
]

// Animal sectors with professional images
const animalSectors = [
  { 
    name: 'Poultry', 
    icon: Feather, 
    description: 'Complete healthcare solutions for poultry farms',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=300&fit=crop',
    products: ['Vaccines', 'Antibiotics', 'Gut Health', 'Nutrition']
  },
  { 
    name: 'Aqua', 
    icon: Waves, 
    description: 'Specialized aquaculture medicines',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop',
    products: ['Probiotics', 'Water Treatment', 'Feed Additives', 'Immunity']
  },
  { 
    name: 'Dairy', 
    icon: Milk, 
    description: 'Dairy cattle health solutions',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop',
    products: ['Mastitis Care', 'Nutrition', 'Reproduction', 'Immunity']
  },
  { 
    name: 'Swine', 
    icon: CircleDot, 
    description: 'Comprehensive swine healthcare',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=300&fit=crop',
    products: ['Respiratory', 'Digestive', 'Reproduction', 'Growth']
  },
  { 
    name: 'Equine', 
    icon: Activity, 
    description: 'Premium equine health products',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=300&fit=crop',
    products: ['Performance', 'Joint Care', 'Digestive', 'Wound Care']
  },
  { 
    name: 'Pets', 
    icon: Heart, 
    description: 'Companion animal pharmaceuticals',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
    products: ['Deworming', 'Supplements', 'Skin Care', 'Dental']
  },
]

const stats = [
  { value: 30, suffix: '+', label: 'Years Experience', icon: Award },
  { value: 50, suffix: '+', label: 'Countries Served', icon: Globe },
  { value: 500, suffix: '+', label: 'Products Range', icon: FlaskConical },
  { value: 10000, suffix: '+', label: 'Happy Clients', icon: Users },
]

// Manufacturing excellence
const manufacturingExcellence = [
  {
    icon: Factory,
    title: 'GMP Certified Manufacturing',
    description: 'State-of-the-art facility with WHO-GMP certifications and automated production lines.',
    features: ['WHO-GMP Certified', 'Automated Lines', 'Quality Control', 'Cold Storage']
  },
  {
    icon: Microscope,
    title: 'R&D Laboratory',
    description: 'DSIR recognized research center for innovative veterinary pharmaceutical development.',
    features: ['Modern Equipment', 'Expert Scientists', 'Clinical Trials', 'Innovation Hub']
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing protocols ensuring every product meets international standards.',
    features: ['In-house Testing', 'Stability Studies', 'Documentation', 'Compliance']
  },
  {
    icon: Truck,
    title: 'Global Distribution',
    description: 'Robust supply chain with cold chain management for temperature-sensitive products.',
    features: ['Cold Chain', 'Global Reach', 'Real-time Tracking', 'Quality Assurance']
  }
]

// Certifications
const certifications = [
  { name: 'WHO-GMP', description: 'World Health Organization GMP Certified' },
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'GMP', description: 'Good Manufacturing Practice' },
  { name: 'HACCP', description: 'Food Safety Management' },
]

interface HeroSlideData {
  id: string
  title: string
  subtitle: string
  badge: string | null
  type: string
  src: string
  poster: string | null
  active: boolean
}

export default function HomePageClient() {
  const [heroSlides, setHeroSlides] = useState<Array<{
    type: string
    src: string
    poster?: string | null
    title: string
    subtitle: string
    badge: string
  }>>(defaultHeroSlides)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch('/api/hero-slides')
        const data: HeroSlideData[] = await res.json()
        const activeSlides = data.filter(s => s.active)
        if (activeSlides.length > 0) {
          setHeroSlides(activeSlides.map(s => ({
            type: s.type,
            src: s.src,
            poster: s.poster,
            title: s.title,
            subtitle: s.subtitle,
            badge: s.badge || ''
          })))
        }
      } catch (error) {
        console.error('Error fetching hero slides:', error)
      }
    }
    fetchSlides()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isVideoPlaying) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [isVideoPlaying, heroSlides.length])

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isVideoPlaying, currentSlide])

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
    setIsVideoPlaying(false)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <div className="min-h-screen flex flex-col">
      <FloatingSocialLinks />
      <Header />

      {/* Hero Carousel - Veterinary Pharmaceutical Focus */}
      <section className="relative overflow-hidden h-[600px] md:h-[750px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {currentSlideData.type === 'video' ? (
              <>
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  poster={currentSlideData.poster}
                  muted
                  loop
                  playsInline
                >
                  <source src={currentSlideData.src} type="video/mp4" />
                </video>
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="absolute bottom-24 right-8 z-30 w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  {isVideoPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
                </button>
              </>
            ) : (
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${currentSlideData.src})` }} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Professional gradient overlay */}
        <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}ee 0%, ${PRIMARY_COLOR}cc 50%, ${PRIMARY_COLOR}99 100%)` }} />

        {/* Decorative elements */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 h-full flex items-center">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }}>
                <motion.div 
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span className="text-white text-sm font-medium">{currentSlideData.badge}</span>
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {currentSlideData.title}
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                  {currentSlideData.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products">
                    <Button size="lg" className="text-gray-900 bg-white hover:bg-gray-100 font-semibold">
                      <FlaskConical className="w-5 h-5 mr-2" />
                      View Products
                    </Button>
                  </Link>
                  <a href="/siflonpharma-brochure.pdf" download>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      <Download className="w-4 h-4 mr-2" />
                      Download Brochure
                    </Button>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
          <button onClick={() => handleSlideChange((currentSlide - 1 + heroSlides.length) % heroSlides.length)} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors">
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button key={index} onClick={() => handleSlideChange(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
          <button onClick={() => handleSlideChange((currentSlide + 1) % heroSlides.length)} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="py-6 bg-white border-b shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${PRIMARY_COLOR}15` }}>
                  <stat.icon className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories - Pharmaceutical Focus */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23243d80' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
              Product Range s
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veterinary Pharmaceutical Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of GMP certified veterinary medicines and healthcare products for all animal sectors
            </p>
          </AnimatedSection>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {productCategories.map((product, index) => (
              <motion.div key={index} variants={cardVariants} whileHover={{ y: -8, scale: 1.02 }}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="h-1.5 transition-all duration-300 group-hover:h-2" style={{ backgroundColor: product.color }} />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${product.color}15` }}>
                        <product.icon className="w-7 h-7" style={{ color: product.color }} />
                      </div>
                      <span className="text-2xl font-bold" style={{ color: product.color }}>{product.count}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.items.map((item, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/products">
              <Button size="lg" style={{ backgroundColor: PRIMARY_COLOR }} className="hover:opacity-90">
                View All Products <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Animal Sectors with Professional Design */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: PRIMARY_COLOR }} />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Animal Sectors
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Veterinary Solutions for Every Sector
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Specialized pharmaceutical products designed for the unique healthcare needs of each animal sector
            </p>
          </AnimatedSection>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {animalSectors.map((sector, index) => (
              <motion.div key={index} variants={cardVariants} whileHover={{ y: -10, scale: 1.02 }}>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full cursor-pointer overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={sector.image} 
                        alt={`${sector.name} healthcare products`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <motion.div 
                        className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-lg"
                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      >
                        <sector.icon className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                      </motion.div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1">{sector.name}</h3>
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2">{sector.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {sector.products.slice(0, 2).map((product, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23243d80' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` 
          }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
              Manufacturing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pharmaceutical Manufacturing Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art facilities with international certifications for quality veterinary pharmaceutical production
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {manufacturingExcellence.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-6 md:w-1/3 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                        <motion.div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: PRIMARY_COLOR }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.features.map((feature, i) => (
                            <span key={i} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Award className="w-8 h-8 mx-auto mb-2" style={{ color: PRIMARY_COLOR }} />
                <div className="font-bold text-gray-900 text-sm">{cert.name}</div>
                <div className="text-xs text-gray-500">{cert.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-blue-50 to-white" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
              Global Reach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Veterinarians Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our veterinary pharmaceutical products are exported to 50+ countries with a strong distribution network
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=600&fit=crop"
                alt="Global presence map - veterinary products export"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-8 h-8 text-white" />
                    <span className="text-white/80 text-sm uppercase tracking-wider">Global Distribution</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    50+ Countries
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Exporting quality veterinary pharmaceuticals to Asia, Africa, Americas, Europe & Middle East. 
                    Strong distribution partnerships ensuring product availability.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Asia Pacific', 'Africa', 'Middle East', 'Americas', 'Europe'].map((region) => (
                      <span key={region} className="px-3 py-1.5 bg-white/20 rounded-full text-white text-sm backdrop-blur-sm">
                        {region}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resources & Downloads Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
              Resources
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Download Product Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access our company brochure and product catalogs for detailed veterinary pharmaceutical information
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Brochure Download Card */}
            <motion.a
              href="/siflonpharma-brochure.pdf"
              download
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2 rounded-full opacity-10" style={{ backgroundColor: PRIMARY_COLOR }} />
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Zap className="w-7 h-7" style={{ color: PRIMARY_COLOR }} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Product Brochure</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Complete veterinary pharmaceutical product catalog with specifications, dosages & packaging details.
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">PDF Format</Badge>
                      <Badge variant="outline" className="text-xs">Updated 2024</Badge>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Click to download</span>
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: PRIMARY_COLOR }}>
                    Download Now
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="h-1 w-full" style={{ backgroundColor: PRIMARY_COLOR }} />
            </motion.a>

            {/* Outlets Card */}
            <OutletsDialog>
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2 rounded-full opacity-10 bg-red-500" />
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-red-50"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Target className="w-7 h-7 text-red-500" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Distribution Network</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Find authorized distributors and sales points across India and internationally.
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">5+ Domestic</Badge>
                        <Badge variant="outline" className="text-xs">50+ International</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Find locations</span>
                    <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                      View All Outlets
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 bg-red-500" />
              </motion.div>
            </OutletsDialog>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section className="py-16 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Partner with Siflon for Quality Veterinary Products
          </motion.h2>
          <motion.p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            Get in touch with our veterinary pharmaceutical experts to discuss your animal healthcare requirements
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <Link href="/contact">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
                Request a Quote
              </Button>
            </Link>
            <a href="/siflonpharma-brochure.pdf" download>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
