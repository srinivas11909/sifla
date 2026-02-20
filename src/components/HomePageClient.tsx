


'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ChevronRight, ChevronLeft, Feather, Waves, Milk, CircleDot, Activity, Heart, Clock, Eye,
  Play, Pause, MapPin, Globe, Award, Building2, Factory, Truck, Users, Package, Syringe, Pill,
  CheckCircle, Leaf, Microscope, Beaker, TestTube, Shield, Zap, Target, Download, FlaskConical, Droplets
} from 'lucide-react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingSocialLinks from '@/components/FloatingSocialLinks'
import OutletsDialog from '@/components/OutletsDialog'
import AnimalLoader from './AnimateLoader'
import ProductsAtGlance from './ProductsAtGlance'

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

const sectors = [
  {
    name: 'Poultry',
    icon: Feather,
    description: 'Complete healthcare solutions for poultry farms',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=300&fit=crop'
  },
  {
    name: 'Aqua',
    icon: Waves,
    description: 'Specialized products for aquaculture',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop'
  },
  {
    name: 'Dairy',
    icon: Milk,
    description: 'Dairy cattle health and productivity',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop'
  },
  {
    name: 'Swine',
    icon: CircleDot,
    description: 'Comprehensive swine healthcare range',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=300&fit=crop'
  },
  {
    name: 'Equine',
    icon: Activity,
    description: 'Premium equine health products',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=300&fit=crop'
  },
  {
    name: 'Pets',
    icon: Heart,
    description: 'Companion animal healthcare',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop'
  },
]

const stats = [
  { value: 30, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Countries Served' },
  { value: 500, suffix: '+', label: 'Products Range' },
  { value: 10000, suffix: '+', label: 'Happy Clients' },
]

// Products at a glance
const productsGlance = [
  {
    icon: Leaf,
    title: 'Feed Supplements',
    count: '150+',
    color: '#22c55e',
    items: ['Mineral Mixtures', 'Vitamins', 'Amino Acids', 'Enzymes']
  },
  {
    icon: TestTube,
    title: 'Probiotics',
    count: '80+',
    color: '#8b5cf6',
    items: ['Lactobacillus', 'Bacillus', 'Yeast Cultures', 'Multi-strain']
  },
  {
    icon: Shield,
    title: 'Antibiotics',
    count: '100+',
    color: '#ef4444',
    items: ['Broad Spectrum', 'Targeted Therapy', 'Combinations', 'Respiratory']
  },
  {
    icon: Beaker,
    title: 'Disinfectants',
    count: '60+',
    color: '#f59e0b',
    items: ['Surface Cleaners', 'Water Sanitizers', 'Aerial', 'Equipment']
  },
]

const productCategories = [
  {
    icon: Droplets,
    title: 'Oral Liquids',
    count: '120+',
    color: '#0891b2',
    description: 'High-quality liquid formulations for easy administration and rapid absorption',
    items: ['Oral Suspensions', 'Liquid Medicines', 'Electrolytes', 'Vitamin Solutions'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
  },
  {
    icon: Package,
    title: 'Dry Powders',
    count: '80+',
    color: '#f59e0b',
    description: 'Stable powder formulations with extended shelf life for water soluble applications',
    items: ['Water Soluble Powders', 'Premixes', 'Concentrates', 'Feed Additives'],
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop'
  },
  {
    icon: Beaker,
    title: 'Feed Supplements',
    count: '150+',
    color: '#22c55e',
    description: 'Nutritional supplements for optimal animal health and productivity',
    items: ['Mineral Mixtures', 'Vitamins', 'Amino Acids', 'Enzymes'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop'
  },
  {
    icon: Pill,
    title: 'Tablets',
    count: '60+',
    color: '#8b5cf6',
    description: 'Precise dosage solid formulations for accurate treatment protocols',
    items: ['Anthelmintics', 'Antibiotics', 'Nutritional', 'Combination Tablets'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
  },
  {
    icon: Syringe,
    title: 'Injectables',
    count: '50+',
    color: '#ef4444',
    description: 'Sterile injectable formulations for rapid and effective treatment',
    items: ['Antibiotics', 'Anti-inflammatory', 'Vitamins', 'Hormones'],
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=300&fit=crop'
  },
  {
    icon: FlaskConical,
    title: 'Disinfectants',
    count: '40+',
    color: '#06b6d4',
    description: 'Powerful biosecurity solutions for farm hygiene and disease prevention',
    items: ['Surface Cleaners', 'Water Sanitizers', 'Aerial Disinfectants', 'Equipment'],
    image: 'https://images.unsplash.com/photo-1584362917165-526a968a8e8b?w=400&h=300&fit=crop'
  },
  {
    icon: Shield,
    title: 'Ectoparasites',
    count: '35+',
    color: '#e11d48',
    description: 'Effective external parasite control for all animal species',
    items: ['Tick Control', 'Mite Treatment', 'Fly Repellents', 'Lice Control'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  },
]
// Infrastructure
const infrastructure = [
  {
    icon: Factory,
    title: 'Manufacturing Plant',
    description: 'State-of-the-art manufacturing facility spread across 50,000 sq.ft with automated production lines and GMP certified processes.',
    features: ['GMP Certified', 'Automated Lines', 'Quality Control', 'Cold Storage']
  },
  {
    icon: Microscope,
    title: 'R&D Laboratory',
    description: 'Advanced research laboratory equipped with modern instrumentation for product development and quality testing.',
    features: ['Modern Equipment', 'Expert Scientists', 'Clinical Trials', 'Innovation Hub']
  },
  {
    icon: Truck,
    title: 'Supply Chain',
    description: 'Robust logistics network ensuring timely delivery across 50+ countries with proper handling and cold chain management.',
    features: ['Cold Chain', 'Global Reach', 'Real-time Tracking', 'Quality Assurance']
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Team of 100+ professionals including veterinarians, nutritionists, and scientists dedicated to excellence.',
    features: ['Veterinarians', 'Nutritionists', 'Scientists', 'Field Support']
  }
]

// Services
const services = [
  {
    title: 'Veterinary',
    icon: Heart,
    color: '#dc2626',
    description: 'Comprehensive healthcare solutions for livestock including cattle, swine, sheep, and goats.',
    features: ['Therapeutic Solutions', 'Nutritional Supplements', 'Preventive Care', 'Health Management'],
    sectors: ['Cattle', 'Swine', 'Sheep', 'Goat', 'Dog', 'Cat'],
    image: '/hero-bg.png'
  },
  {
    title: 'Aqua',
    icon: Waves,
    color: '#0891b2',
    description: 'Specialized products for aquaculture including fish and shrimp farming.',
    features: ['Water Treatment', 'Feed Additives', 'Probiotics', 'Disease Prevention'],
    sectors: ['Fish', 'Shrimp', 'Prawns', 'Crab'],
    image: '/hero-bg.png'
  }
]

// Certifications
const certifications = [
  { name: 'GMP', description: 'Good Manufacturing Practice' },
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'WHO-GMP', description: 'World Health Organization GMP' },
  { name: 'HACCP', description: 'Food Safety Management' },
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

// Hero Carousel Slides - fallback if database is empty
const defaultHeroSlides = [
  {
    type: 'image',
    src: '/hero-bg.png',
    title: 'Premium Animal Healthcare Solutions',
    subtitle: 'Trusted partner for poultry, aqua, dairy, swine, equine, and pet healthcare. Delivering excellence through innovation for over 30 years.',
    badge: 'Since 1993'
  },
  {
    type: 'video',
    src: 'https://cdn.coverr.co/videos/coverr-milking-a-cow-on-a-farm-5764/1080p.mp4',
    poster: '/hero-bg.png',
    title: 'Dairy Solutions for Better Yield',
    subtitle: 'Specialized healthcare products for dairy cattle. Enhance milk production and cattle health with our proven solutions.',
    badge: 'Dairy Focus'
  },
  {
    type: 'image',
    src: '/hero-bg.png',
    title: 'Global Quality Standards',
    subtitle: 'GMP, ISO, and WHO-GMP certified manufacturing. Trusted by farmers across 50+ countries worldwide.',
    badge: 'Certified Excellence'
  }
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

function getYouTubeVideoId(url: string): string | null {
  if (!url) return null

  // Handle various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}


export default function Home() {
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

  // Fetch hero slides from database
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

      {/* Hero Carousel */}
      <section className="relative overflow-hidden h-[600px] md:h-[700px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {currentSlideData.type === 'youtube' ? (
              <>
                {/* Poster image as background */}
                {currentSlideData.poster && (
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${currentSlideData.poster})` }}
                  />
                )}
                <iframe
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(currentSlideData.src)}?autoplay=1&mute=1&loop=1&playlist=${getYouTubeVideoId(currentSlideData.src)}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                  title={currentSlideData.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ pointerEvents: 'none' }}
                />
              </>
            ) : currentSlideData.type === 'video' ? (
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

        <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}cc, ${PRIMARY_COLOR}99)` }} />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 h-full flex items-center">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                <Badge className="mb-4 border" style={{ backgroundColor: `${PRIMARY_COLOR}40`, color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                  {currentSlideData.badge}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {currentSlideData.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                  {currentSlideData.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products">
                    <Button size="lg" className="text-white" style={{ backgroundColor: '#3b82f6' }}>
                      Explore Products <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
                      Contact Us
                    </Button>
                  </Link>
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



      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant={fadeInLeft}>
              <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
                Welcome to Siflon
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Global Leader in Animal Healthcare
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Siflon Drugs & Pharmaceuticals Pvt Ltd is one of the fastest-growing pharmaceutical and nutraceutical manufacturing companies
                in the animal healthcare sector. We serve a diverse range of sectors including poultry, aqua,
                dairy, swine, equine, and pets, earning a sterling reputation for excellence and innovation.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our highly developed infrastructure, coupled with a team of expert veterinarians, nutritionists,
                and scientists, enables us to deliver cutting-edge solutions that meet the evolving needs of
                the global animal healthcare industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button style={{ backgroundColor: PRIMARY_COLOR }} className="hover:opacity-90">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}>
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection variant={fadeInRight}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border"
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  >
                    <Award className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
                    <div className="text-3xl font-bold mb-1" style={{ color: PRIMARY_COLOR }}>30+</div>
                    <div className="text-gray-600 text-sm">Years of Excellence</div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border mt-8"
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  >
                    <Globe className="w-12 h-12 mb-4" style={{ color: '#22c55e' }} />
                    <div className="text-3xl font-bold mb-1 text-green-600">50+</div>
                    <div className="text-gray-600 text-sm">Countries Worldwide</div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border"
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  >
                    <Leaf className="w-12 h-12 mb-4 text-green-500" />
                    <div className="text-3xl font-bold mb-1 text-green-600">500+</div>
                    <div className="text-gray-600 text-sm">Product Range</div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border mt-8"
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  >
                    <Users className="w-12 h-12 mb-4" style={{ color: '#8b5cf6' }} />
                    <div className="text-3xl font-bold mb-1 text-purple-600">100+</div>
                    <div className="text-gray-600 text-sm">Expert Team</div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff"
      }}>
        <AnimalLoader />
      </div>

      {/* Animal Network Section - Beautiful Animated Connections */}
      <section className="relative w-full min-h-[700px] md:min-h-[800px] overflow-hidden" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}08, #f0f9ff, ${PRIMARY_COLOR}05)` }}>
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill={`${PRIMARY_COLOR}20`} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

        </div>

        {/* Animated SVG Connections */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_COLOR} stopOpacity="0.6" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor={PRIMARY_COLOR} stopOpacity="0.6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated connection lines */}
          <motion.line
            x1="50%" y1="50%"
            x2="20%" y2="25%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="50%" y1="50%"
            x2="80%" y2="25%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="50%" y1="50%"
            x2="15%" y2="60%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="50%" y1="50%"
            x2="85%" y2="60%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="50%" y1="50%"
            x2="30%" y2="85%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="50%" y1="50%"
            x2="70%" y2="85%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          {/* Inter-node connections */}
          <motion.line
            x1="20%" y1="25%"
            x2="80%" y2="25%"
            stroke="#60a5fa"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ delay: 1.5, duration: 1 }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="15%" y1="60%"
            x2="85%" y2="60%"
            stroke="#60a5fa"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ delay: 1.7, duration: 1 }}
            viewport={{ once: true }}
          />
        </svg>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? PRIMARY_COLOR : '#60a5fa',
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i % 4) * 20}%`,
              opacity: 0.3,
              zIndex: 0
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Center Logo */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative"
            animate={{
              boxShadow: [
                `0 0 30px ${PRIMARY_COLOR}30`,
                `0 0 60px ${PRIMARY_COLOR}40`,
                `0 0 30px ${PRIMARY_COLOR}30`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-2xl flex items-center justify-center border-4" style={{ borderColor: PRIMARY_COLOR }}>
              <Image
                src="/siflonlogo.png"
                alt="Siflon"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: PRIMARY_COLOR }}
              animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: PRIMARY_COLOR }}
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Animal Nodes */}
        {[
          { id: 'poultry', src: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=200&fit=crop', top: '15%', left: '15%', label: 'Poultry', icon: Feather },
          { id: 'aqua', src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=200&h=200&fit=crop', top: '15%', left: '73%', label: 'Aqua', icon: Waves },
          { id: 'dairy', src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=200&h=200&fit=crop', top: '50%', left: '5%', label: 'Dairy', icon: Milk },
          { id: 'swine', src: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&h=200&fit=crop', top: '50%', left: '82%', label: 'Swine', icon: CircleDot },
          { id: 'equine', src: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=200&h=200&fit=crop', top: '78%', left: '22%', label: 'Equine', icon: Activity },
          { id: 'pets', src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop', top: '78%', left: '62%', label: 'Pets', icon: Heart },
        ].map((animal, index) => (
          <motion.div
            key={animal.id}
            className="absolute z-20"
            style={{ top: animal.top, left: animal.left }}
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.15, y: -10 }}
              className="relative group cursor-pointer"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle, ${PRIMARY_COLOR}20 0%, transparent 70%)` }}
              />

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-2 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden">
                  <Image
                    src={animal.src}
                    alt={animal.label}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: `${PRIMARY_COLOR}cc` }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <animal.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span
                    className="text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-lg bg-white"
                    style={{ color: PRIMARY_COLOR }}
                  >
                    {animal.label}
                  </span>
                </div>
              </div>

              {/* Animated pulse dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full"
                style={{ backgroundColor: PRIMARY_COLOR }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: PRIMARY_COLOR }} />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}

        {/* Section Title */}
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-30"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-2" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
            Our Sectors
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Serving All Animal Sectors
          </h2>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base text-gray-600 max-w-md">
            Comprehensive healthcare solutions for all animal sectors, connected by quality and innovation
          </p>
        </motion.div>
      </section>


      {/* Manufacturing Plant Section - Two Column Layout with Background Image */}
      <section className="relative min-h-[700px] md:min-h-[800px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop"
            alt="Pharmaceutical manufacturing facility"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}f0 0%, ${PRIMARY_COLOR}d0 50%, ${PRIMARY_COLOR}90 100%)` }} />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 py-16 md:py-24 min-h-[700px] md:min-h-[800px] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <Factory className="w-3.5 h-3.5 mr-1.5" />
                  Manufacturing Facility
                </Badge>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                State-of-the-Art<br />
                <span className="text-blue-200">Pharmaceutical Plant</span>
              </motion.h2>

              <motion.p
                className="text-lg text-blue-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our WHO-GMP certified manufacturing facility spans over 50,000 sq.ft with cutting-edge
                automated production lines, dedicated zones for different formulations, and stringent
                quality control at every stage.
              </motion.p>

              {/* Features List with Animation */}
              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: Shield, text: 'WHO-GMP & ISO 9001:2015 Certified', highlight: true },
                  { icon: Factory, text: '50,000+ sq.ft Manufacturing Area' },
                  { icon: Microscope, text: 'In-house R&D & Quality Testing Lab' },
                  { icon: Truck, text: 'Cold Chain & Global Distribution' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${feature.highlight ? 'bg-yellow-400' : 'bg-white/20'}`}>
                      <feature.icon className={`w-5 h-5 ${feature.highlight ? 'text-gray-900' : 'text-white'}`} />
                    </div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats Row */}
              <motion.div
                className="grid grid-cols-3 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  { value: '500+', label: 'Products' },
                  { value: '6', label: 'Categories' },
                  { value: '50+', label: 'Countries' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
              >
                <Link href="/about">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold cursor-pointer">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-primary hover:bg-white/10 hover:text-white cursor-pointer">
                    Schedule Visit
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Image with Animation */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Main Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=700&fit=crop"
                  alt="Pharmaceutical laboratory and manufacturing equipment"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              {/* Floating Badge - Top */}
              <motion.div
                className="absolute -top-4 -right-4 md:right-8 bg-white rounded-xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${PRIMARY_COLOR}15` }}>
                    <Award className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">WHO-GMP</div>
                    <div className="text-xs text-gray-500">Certified</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Bottom */}
              <motion.div
                className="absolute -bottom-4 -left-4 md:left-8 bg-white rounded-xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">ISO 9001:2015</div>
                    <div className="text-xs text-gray-500">Quality Certified</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Circle */}
              <motion.div
                className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 rounded-full border-4 border-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
        </div>
        {/* Manufacturing Plant Video Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23243d80' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
            {/* Section Header */}
            <AnimatedSection className="text-center mb-12">
              <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
                <Play className="w-3 h-3 mr-1" />
                Facility Tour
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Our Manufacturing Facility
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take a virtual tour of our state-of-the-art pharmaceutical manufacturing plant and see how we produce quality veterinary medicines
              </p>
            </AnimatedSection>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Video */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                  {/* Video Embed */}
                  <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/KdDbU4X0AGk?rel=0"
                      title="Siflon Manufacturing Facility Tour"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Video Stats */}
                <div className="flex items-center justify-center gap-6 mt-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">5+ min tour</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">HD Quality</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      World-Class Manufacturing Infrastructure
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our WHO-GMP certified facility in Hyderabad is equipped with cutting-edge machinery and
                      follows stringent quality protocols to manufacture premium veterinary pharmaceutical products.
                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Factory, label: '50,000 sq.ft', sublabel: 'Manufacturing Area', color: '#3b82f6' },
                      { icon: Shield, label: 'WHO-GMP', sublabel: 'Certified Facility', color: '#22c55e' },
                      { icon: Microscope, label: 'In-house', sublabel: 'R&D Laboratory', color: '#8b5cf6' },
                      { icon: Users, label: '100+', sublabel: 'Expert Team', color: '#f59e0b' },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${feature.color}20` }}
                        >
                          <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{feature.label}</div>
                          <div className="text-xs text-gray-500">{feature.sublabel}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Manufacturing Capabilities */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Manufacturing Capabilities</h4>
                    <div className="space-y-2">
                      {[
                        'Oral Liquids & Solutions - State-of-the-art liquid manufacturing',
                        'Dry Powders & Feed Supplements - Automated powder processing',
                        'Tablets & Bolus - High-speed tablet compression lines',
                        'Injectables - Sterile injectable production suite',
                        'Probiotics - Fermentation and formulation facility'
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link href="/contact">
                      <Button style={{ backgroundColor: PRIMARY_COLOR }} className="hover:opacity-90 cursor-pointer">
                        Schedule a Visit <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                    <a href="/siflonpharma-brochure.pdf" download>
                      <Button variant="outline" style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }} className='cursor-pointer'>
                        <Download className="w-4 h-4 mr-2" />
                        Download Brochure
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Stats Bar */}
            <motion.div
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { value: '6', label: 'Product Categories', icon: FlaskConical },
                { value: '500+', label: 'Products Manufactured', icon: Package },
                { value: '50+', label: 'Countries Exported', icon: Globe },
                { value: 'ISO 9001', label: 'Quality Certified', icon: Award },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: PRIMARY_COLOR }} />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
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

      {/* Stats Section - 30+ Years of Excellence */}
      {/* <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}>
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
      </section> */}

      <ProductsAtGlance />



      {/* Infrastructure Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
              Infrastructure
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge facilities designed for excellence in manufacturing and research
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {infrastructure.map((item, index) => (
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
                      <div className="p-6 md:w-1/3 flex items-center justify-center" style={{ backgroundColor: `${PRIMARY_COLOR}10` }}>
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
        </div>
      </section>

      {/* Our Best Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
              Our Best Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services tailored for different animal sectors
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="h-3" style={{ backgroundColor: service.color }} />
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}15` }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <service.icon className="w-8 h-8" style={{ color: service.color }} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <div className="flex gap-2 mt-1">
                        {service.sectors.map((sector, i) => (
                          <span key={i} className="text-xs text-gray-500">• {sector}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link href="/products">
                    <Button className="w-full" style={{ backgroundColor: service.color }}>
                      Explore {service.title} Products <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      {/* <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
              Sectors
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sectors We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions across diverse animal husbandry sectors
            </p>
          </AnimatedSection>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {sectors.map((sector, index) => (
              <motion.div key={index} variants={cardVariants} whileHover={{ y: -10 }}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white h-full cursor-pointer overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <motion.div
                        className="absolute bottom-2 left-3 w-8 h-8 rounded-full flex items-center justify-center bg-white/90"
                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      >
                        <sector.icon className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
                      </motion.div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-gray-900 mb-1">{sector.name}</h3>
                      <p className="text-xs text-gray-500 line-clamp-2">{sector.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Global Presence */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
              Global Presence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving 50+ Countries Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our products are trusted by farmers and businesses across the globe with a strong distribution network.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* World Map Background */}
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=600&fit=crop"
                alt="World Map - Global Presence"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent" />

              {/* Map Pins */}
              <div className="absolute inset-0">
                {/* India */}
                <motion.div
                  className="absolute"
                  style={{ top: '45%', left: '68%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-red-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">India</span>
                    </div>
                  </div>
                </motion.div>

                {/* USA */}
                <motion.div
                  className="absolute"
                  style={{ top: '35%', left: '18%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">USA</span>
                    </div>
                  </div>
                </motion.div>

                {/* Brazil */}
                <motion.div
                  className="absolute"
                  style={{ top: '60%', left: '30%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Brazil</span>
                    </div>
                  </div>
                </motion.div>

                {/* Vietnam */}
                <motion.div
                  className="absolute"
                  style={{ top: '48%', left: '75%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-yellow-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Vietnam</span>
                    </div>
                  </div>
                </motion.div>

                {/* Thailand */}
                <motion.div
                  className="absolute"
                  style={{ top: '50%', left: '73%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-purple-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Thailand</span>
                    </div>
                  </div>
                </motion.div>

                {/* Nigeria */}
                <motion.div
                  className="absolute"
                  style={{ top: '52%', left: '48%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-orange-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-orange-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Nigeria</span>
                    </div>
                  </div>
                </motion.div>

                {/* Egypt */}
                <motion.div
                  className="absolute"
                  style={{ top: '42%', left: '55%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-teal-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-teal-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Egypt</span>
                    </div>
                  </div>
                </motion.div>

                {/* Mexico */}
                <motion.div
                  className="absolute"
                  style={{ top: '42%', left: '15%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-pink-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-pink-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Mexico</span>
                    </div>
                  </div>
                </motion.div>

                {/* Indonesia */}
                <motion.div
                  className="absolute"
                  style={{ top: '58%', left: '78%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-indigo-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Indonesia</span>
                    </div>
                  </div>
                </motion.div>

                {/* Bangladesh */}
                <motion.div
                  className="absolute"
                  style={{ top: '43%', left: '70%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-cyan-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-cyan-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Bangladesh</span>
                    </div>
                  </div>
                </motion.div>

                {/* Philippines */}
                <motion.div
                  className="absolute"
                  style={{ top: '47%', left: '80%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-rose-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-rose-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Philippines</span>
                    </div>
                  </div>
                </motion.div>

                {/* Colombia */}
                <motion.div
                  className="absolute"
                  style={{ top: '55%', left: '24%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-amber-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-amber-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Colombia</span>
                    </div>
                  </div>
                </motion.div>
              </div>

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
                    <span className="text-white/80 text-sm uppercase tracking-wider">Global Reach</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    50+ Countries
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Our products are trusted by farmers and businesses across the globe.
                    With a strong distribution network and local partnerships.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Asia', 'Africa', 'Americas', 'Europe'].map((region) => (
                      <span key={region} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                        {region}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications Row */}
          {/* <div className="mt-12 grid md:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Award className="w-8 h-8 mx-auto mb-2" style={{ color: PRIMARY_COLOR }} />
                <div className="font-bold text-gray-900 text-sm">{cert.name}</div>
                <div className="text-xs text-gray-500">{cert.description}</div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Quick Resources Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
              Quick Access
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources & Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our company brochure or find our outlet locations near you
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Company Brochure</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Download our comprehensive product catalog and company profile.
                      Includes detailed product information, certifications, and contact details.
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
              <div className="h-1 w-full group-hover:w-full transition-all duration-300" style={{ backgroundColor: PRIMARY_COLOR }} />
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Our Outlets</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Find Siflon distributors and sales points near you.
                        We have a strong presence across India and 50+ countries worldwide.
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">5+ Domestic</Badge>
                        <Badge variant="outline" className="text-xs">50+ International</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Find a location</span>
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
      <motion.section className="py-16" style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Ready to Partner With Us?
          </motion.h2>
          <motion.p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            Get in touch with our experts to discuss your animal healthcare requirements
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <Link href="/contact">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold cursor-pointer">
                Request a Quote
              </Button>
            </Link>
            <a href="/siflonpharma-brochure.pdf" download>
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10 hover:text-white cursor-pointer">
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