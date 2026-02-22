


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
import TestimonialsSection from './TestimonialsSection'
import BecomeDistributor from './BecomeDistributor'
import AnimateLoader from './AnimalLoader'
import AnimalNetworkSection from './AnimalNetworkSection'
import SectorsCarousel from './SectorsCarousel'
import HeroSlider from './HeroSlider'
import CertificatesSection from './Certifications'
import FeaturedProductsCarousel from './ProductsList'


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
      {/* <FloatingSocialLinks /> */}
      <Header />
      <HeroSlider slides={heroSlides} />
      {/* Hero Carousel */}




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


      {/* Secotrs we are in are serve*/}

      <SectorsCarousel />

      {/* 
      <div className="hidden lg:flex items-center justify-center bg-white">
        <AnimalLoader />
      </div> */}


      {/* <div className="flex lg:hidden items-center justify-center bg-white">
        <AnimateLoader />
      </div>
       */}
      {/* 
       <AnimalNetworkSection /> */}



      <ProductsAtGlance />
      <FeaturedProductsCarousel />

     

   

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
      {/* <CertificatesSection /> */}
      {/* <TestimonialsSection /> */}



 

      {/* Our Best Services */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
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
      </section> */}

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




      {/* <BecomeDistributor /> */}

 

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