'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Award, Globe, Shield, Users, Clock, Target, ChevronRight } from 'lucide-react'
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

const strengths = [
  {
    icon: Award,
    title: '30+ Years Experience',
    description: 'Over three decades of expertise in animal healthcare manufacturing and research'
  },
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Exporting to 50+ countries with a strong distribution network worldwide'
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
    title: '24/7 Support',
    description: 'Round-the-clock technical support and consultation services'
  },
  {
    icon: Target,
    title: 'Custom Solutions',
    description: 'Tailored formulations to meet specific regional and farm requirements'
  },
]

const milestones = [
  { year: '1993', title: 'Company Founded', description: 'Siflon established with a vision to transform animal healthcare' },
  { year: '2000', title: 'ISO Certification', description: 'Achieved ISO 9001 certification for quality management systems' },
  { year: '2008', title: 'Global Expansion', description: 'Expanded operations to 25+ countries across Asia and Africa' },
  { year: '2015', title: 'WHO-GMP Certified', description: 'Received WHO-GMP certification for manufacturing excellence' },
  { year: '2020', title: '50 Countries Milestone', description: 'Products now available in 50+ countries worldwide' },
  { year: '2024', title: 'Innovation Center', description: 'Launched state-of-the-art R&D and innovation center' },
]

export default function AboutPage() {
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
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pioneering Animal Health Since 1993
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Dedicated to delivering excellence in animal healthcare through innovation, quality, and unwavering commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Siflon Drugs & Pharmaceuticals Pvt Ltd has been at the forefront of animal healthcare innovation for over three decades. 
                Founded in 1993, we started with a simple mission: to provide high-quality, affordable 
                healthcare solutions for animals across all sectors.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we serve a diverse range of sectors including poultry, aqua, dairy, swine, equine, and pets, 
                earning a sterling reputation for excellence and innovation. Our commitment to research and 
                development has led to breakthrough products that have transformed animal healthcare practices.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art manufacturing facilities are GMP and ISO certified, ensuring the highest 
                quality standards in every product we deliver. With a team of dedicated veterinarians, 
                nutritionists, and research scientists, we continuously develop cutting-edge solutions for 
                animal health challenges.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['GMP Certified', 'ISO 9001:2015', 'WHO-GMP', 'Export House'].map((cert, i) => (
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
              <div 
                className="rounded-2xl p-8"
                style={{ background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}15, ${PRIMARY_COLOR}05)` }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '500+', label: 'Product Range' },
                    { value: '50+', label: 'Countries' },
                    { value: '100+', label: 'Scientists' },
                    { value: '24/7', label: 'Support' }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white rounded-xl p-6 shadow-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                    >
                      <div className="text-3xl font-bold mb-1" style={{ color: PRIMARY_COLOR }}>{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge 
              className="mb-4"
              style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
            >
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
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:opacity-80 transition-colors"
                      style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
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

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge 
              className="mb-4"
              style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
            >
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Milestones Along the Way
            </h2>
          </AnimatedSection>
          
          <div className="relative">
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
                    <Card className="border-0 shadow-md">
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
                    className="w-4 h-4 rounded-full hidden md:block"
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
            Partner With Us Today
          </motion.h2>
          <motion.p 
            className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of farmers and businesses who trust Siflon
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
                Contact Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Products
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
