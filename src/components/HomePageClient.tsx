'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    ChevronRight, ChevronLeft, Feather, Waves, Milk, CircleDot, Activity, Heart,
    Play, Pause, MapPin, Globe, Award, Building2, Factory, Truck, Users,
    CheckCircle, Leaf, Microscope, Beaker, TestTube, Shield, Zap, Target
} from 'lucide-react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
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
        sectors: ['Cattle', 'Swine', 'Sheep', 'Goat'],
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
                        transition={{ duration: 0.5 }}
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

            {/* Oxyclozanide SEO Section */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Oxyclozanide Manufacturer & Supplier
                    </h2>

                    <p className="text-gray-600 mb-4">
                        Siflon Drugs & Pharmaceuticals Pvt Ltd is a trusted manufacturer and
                        supplier of Oxyclozanide, a veterinary anthelmintic drug widely used
                        for the treatment of liver fluke infections in livestock.
                    </p>

                    <p className="text-gray-600 mb-4">
                        We provide high-quality bulk Oxyclozanide with strict quality control,
                        GMP-certified manufacturing standards, and global export capabilities.
                    </p>

                    <ul className="list-disc pl-6 text-gray-600">
                        <li>Bulk Oxyclozanide manufacturer in India</li>
                        <li>Veterinary grade Oxyclozanide supply</li>
                        <li>Export quality pharmaceutical standards</li>
                        <li>Custom formulations available</li>
                    </ul>
                </div>
            </section>


            {/* Products at a Glance */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
                    <AnimatedSection className="text-center mb-12">
                        <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
                            Our Products
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Products at a Glance
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive range of animal healthcare products manufactured with highest quality standards
                        </p>
                    </AnimatedSection>

                    <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {productsGlance.map((product, index) => (
                            <motion.div key={index} variants={cardVariants} whileHover={{ y: -10 }}>
                                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                    <div className="h-2" style={{ backgroundColor: product.color }} />
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${product.color}20` }}>
                                                <product.icon className="w-6 h-6" style={{ color: product.color }} />
                                            </div>
                                            <span className="text-2xl font-bold" style={{ color: product.color }}>{product.count}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{product.title}</h3>
                                        <ul className="space-y-2">
                                            {product.items.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: product.color }} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
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
            <section className="py-16 md:py-24 bg-white">
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
            </section>

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
                    <div className="mt-12 grid md:grid-cols-4 gap-4">
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
                            <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
                                Request a Quote
                            </Button>
                        </Link>
                        <Link href="/products">
                            <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
                                View Products
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            <Footer />
        </div>
    )
}
