'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Target, Cog, CheckCircle, Award, Shield, Leaf, Microscope, Factory, ClipboardCheck } from 'lucide-react'
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
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

// Tab data
const tabs = [
  {
    id: 'customer-focus',
    label: 'Customer Focus',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    title: 'Customer Focus',
    subtitle: 'Putting Customers at the Heart of Everything We Do',
    description: 'We understand that our success depends on our customers\' success. Our customer-centric approach ensures that every product we develop, every service we provide, and every decision we make is guided by the needs and expectations of those we serve.',
    points: [
      'Understanding customer requirements through continuous engagement',
      'Developing products that address real-world animal health challenges',
      'Providing exceptional technical support and after-sales service',
      'Building long-term partnerships based on trust and reliability',
      'Incorporating customer feedback into product improvements'
    ],
    stats: [
      { value: '98%', label: 'Customer Satisfaction' },
      { value: '24/7', label: 'Support Available' },
      { value: '50+', label: 'Countries Served' }
    ]
  },
  {
    id: 'leadership',
    label: 'Leadership',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    title: 'Leadership Excellence',
    subtitle: 'Driving Quality Through Visionary Leadership',
    description: 'Our leadership team is committed to establishing and maintaining a culture of quality throughout the organization. They provide clear direction, foster innovation, and ensure that quality objectives are aligned with business goals at every level.',
    points: [
      'Setting clear quality objectives and performance metrics',
      'Fostering a culture of continuous improvement',
      'Investing in cutting-edge technology and infrastructure',
      'Developing talent through training and mentorship programs',
      'Ensuring regulatory compliance and industry best practices'
    ],
    stats: [
      { value: '30+', label: 'Years Experience' },
      { value: '100+', label: 'Expert Team' },
      { value: '6', label: 'Quality Certifications' }
    ]
  },
  {
    id: 'process-approach',
    label: 'Process Approach',
    icon: Cog,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    title: 'Process-Driven Quality',
    subtitle: 'Systematic Approach to Consistent Excellence',
    description: 'We view our operations as interconnected processes that work together to deliver quality outcomes. This systematic approach allows us to identify opportunities for improvement, minimize variability, and ensure consistent product quality across all batches.',
    points: [
      'Standardized operating procedures for all critical processes',
      'In-process quality checks at every stage of production',
      'Advanced analytical testing and validation protocols',
      'Documentation and traceability systems',
      'Regular process audits and optimization initiatives'
    ],
    stats: [
      { value: '500+', label: 'Products Tested' },
      { value: '99.5%', label: 'Batch Acceptance' },
      { value: 'Zero', label: 'Critical Defects' }
    ]
  }
]

// Certifications data
const certifications = [
  { icon: Award, name: 'GMP Certified', description: 'Good Manufacturing Practice compliance' },
  { icon: Shield, name: 'ISO 9001:2015', description: 'Quality Management System' },
  { icon: Leaf, name: 'WHO-GMP', description: 'World Health Organization standards' },
  { icon: Microscope, name: 'HACCP', description: 'Food Safety Management' },
  { icon: Factory, name: 'GLP', description: 'Good Laboratory Practice' },
  { icon: ClipboardCheck, name: 'FSSAI', description: 'Food Safety Standards Authority' }
]

export default function QualityPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const activeTabData = tabs.find(tab => tab.id === activeTab)!

  return (
    <div className="min-h-screen flex flex-col">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://siflonpharma.com/quality/#webpage',
                url: 'https://siflonpharma.com/quality',
                name: 'Quality Management System | Siflon Drugs & Pharmaceuticals Pvt Ltd',
                description: 'Siflon\'s quality management system ensures consistent quality through customer focus, leadership excellence, and process-driven approach.',
                isPartOf: {
                  '@id': 'https://siflonpharma.com/#website'
                },
                inLanguage: 'en-IN'
              },
              {
                '@type': 'Organization',
                '@id': 'https://siflonpharma.com/#organization',
                name: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
                hasCredential: [
                  { '@type': 'EducationalOccupationalCredential', name: 'GMP Certified' },
                  { '@type': 'EducationalOccupationalCredential', name: 'ISO 9001:2015' },
                  { '@type': 'EducationalOccupationalCredential', name: 'WHO-GMP' },
                  { '@type': 'EducationalOccupationalCredential', name: 'HACCP' }
                ]
              },
              {
                '@type': 'ItemList',
                name: 'Quality Management Principles',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Customer Focus',
                    description: 'Understanding and meeting customer requirements through continuous engagement and product development.'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Leadership',
                    description: 'Establishing and maintaining a culture of quality throughout the organization with clear objectives.'
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Process Approach',
                    description: 'Systematic approach to quality management through standardized processes and continuous improvement.'
                  }
                ]
              }
            ]
          })
        }}
      />
      
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
              Quality Management
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quality Excellence
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl">
              Committed to delivering the highest standards in animal healthcare through rigorous quality management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
              Our Commitment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality Management System
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Siflon&apos;s quality management system includes all aspects of quality relating to facilities, products, and service. However, quality management is not only focused on product and service quality, but also the means to achieve it. Quality management therefore uses quality assurance and control of processes as well as products to achieve the most consistent quality possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Shield, label: 'Quality Assurance' },
                { icon: ClipboardCheck, label: 'Quality Control' },
                { icon: Target, label: 'Continuous Improvement' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100"
                >
                  <item.icon className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
              Quality Principles
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Pillars
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on three fundamental principles that guide our commitment to excellence
            </p>
          </AnimatedSection>

          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
                }`}
                style={{
                  backgroundColor: activeTab === tab.id ? PRIMARY_COLOR : undefined
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
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
            >
              <Card className="overflow-hidden border-0 shadow-xl">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <img
                        src={activeTabData.image}
                        alt={activeTabData.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 lg:bottom-auto lg:top-6">
                        <Badge className="bg-white/90 text-gray-900">
                          <activeTabData.icon className="w-4 h-4 mr-1" style={{ color: PRIMARY_COLOR }} />
                          {activeTabData.label}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-10">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {activeTabData.title}
                        </h3>
                        <p className="text-gray-500 mb-4">{activeTabData.subtitle}</p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {activeTabData.description}
                        </p>

                        <ul className="space-y-3 mb-8">
                          {activeTabData.points.map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                              <span className="text-gray-700">{point}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          {activeTabData.stats.map((stat, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="text-center p-4 rounded-lg"
                              style={{ backgroundColor: `${PRIMARY_COLOR}10` }}
                            >
                              <div className="text-xl md:text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
                                {stat.value}
                              </div>
                              <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
              Certifications
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Internationally recognized certifications validating our commitment to quality
            </p>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                variants={scaleIn}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-xl p-6 text-center shadow-lg border"
              >
                <cert.icon className="w-10 h-10 mx-auto mb-3" style={{ color: PRIMARY_COLOR }} />
                <h4 className="font-bold text-gray-900 text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-gray-500">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Quality Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              From Raw Material to Finished Product
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Every step of our manufacturing process is designed to ensure the highest quality standards
            </p>
          </AnimatedSection>

          <motion.div 
            className="grid md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: '01', title: 'Raw Material Testing', desc: 'Thorough testing of all incoming materials' },
              { step: '02', title: 'In-Process Control', desc: 'Real-time monitoring during production' },
              { step: '03', title: 'Quality Testing', desc: 'Comprehensive analytical testing' },
              { step: '04', title: 'Final Release', desc: 'Batch release after full compliance' }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
                  <div className="text-4xl font-bold text-white/30 mb-4">{item.step}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Committed to Quality Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Learn more about our quality standards and how we can meet your animal healthcare needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" style={{ backgroundColor: PRIMARY_COLOR }} className="hover:opacity-90">
                Download Quality Certificate
              </Button>
              <Button size="lg" variant="outline" style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}>
                Contact Quality Team
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}