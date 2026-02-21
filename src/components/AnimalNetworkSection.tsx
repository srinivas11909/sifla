'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Feather, Waves, Milk, CircleDot, Activity, Heart, ChevronLeft, ChevronRight } from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

const animalSectors = [
  { id: 'poultry', src: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=200&fit=crop', label: 'Poultry', icon: Feather, description: 'Healthcare for chickens, turkeys & more' },
  { id: 'aqua', src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=200&h=200&fit=crop', label: 'Aqua', icon: Waves, description: 'Fish & aquaculture solutions' },
  { id: 'dairy', src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=200&h=200&fit=crop', label: 'Dairy', icon: Milk, description: 'Cattle & dairy farm products' },
  { id: 'swine', src: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&h=200&fit=crop', label: 'Swine', icon: CircleDot, description: 'Pig healthcare solutions' },
  { id: 'equine', src: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=200&h=200&fit=crop', label: 'Equine', icon: Activity, description: 'Horse health products' },
  { id: 'pets', src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop', label: 'Pets', icon: Heart, description: 'Companion animal care' },
]

// Desktop Network View
const DesktopNetworkView = () => {
  const nodePositions = [
    { top: '18%', left: '12%' },  // Poultry
    { top: '18%', left: '78%' },  // Aqua
    { top: '50%', left: '5%' },   // Dairy
    { top: '50%', left: '85%' },  // Swine
    { top: '78%', left: '18%' },  // Equine
    { top: '78%', left: '72%' },  // Pets
  ]

  return (
    <div className="relative w-full min-h-[700px] md:min-h-[800px] overflow-hidden">
      {/* Background */}
      <div style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}08, #f0f9ff, ${PRIMARY_COLOR}05)` }} className="absolute inset-0" />
      
      {/* Grid Pattern */}
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

        {/* Center to node connections */}
        {nodePositions.map((pos, idx) => (
          <motion.line
            key={`line-${idx}`}
            x1="50%" y1="50%"
            x2={pos.left} y2={pos.top}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: idx * 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        ))}

        {/* Horizontal connections */}
        <motion.line x1="12%" y1="18%" x2="78%" y2="18%" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5" initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} transition={{ delay: 1.5, duration: 1 }} viewport={{ once: true }} />
        <motion.line x1="5%" y1="50%" x2="85%" y2="50%" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5" initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} transition={{ delay: 1.7, duration: 1 }} viewport={{ once: true }} />
        <motion.line x1="18%" y1="78%" x2="72%" y2="78%" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5" initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} transition={{ delay: 1.9, duration: 1 }} viewport={{ once: true }} />
      </svg>

      {/* Floating Particles */}
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
          <motion.div className="absolute inset-0 rounded-full border-2" style={{ borderColor: PRIMARY_COLOR }} animate={{ scale: [1, 1.5], opacity: [0.8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} />
          <motion.div className="absolute inset-0 rounded-full border-2" style={{ borderColor: PRIMARY_COLOR }} animate={{ scale: [1, 1.8], opacity: [0.6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }} />
        </motion.div>
      </motion.div>

      {/* Animal Nodes */}
      {animalSectors.map((animal, index) => (
        <motion.div
          key={animal.id}
          className="absolute z-20"
          style={nodePositions[index]}
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.15, y: -10 }} className="relative group cursor-pointer">
            {/* Glow effect on hover */}
            <motion.div
              className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `radial-gradient(circle, ${PRIMARY_COLOR}20 0%, transparent 70%)` }}
            />

            {/* Card */}
            <div className="relative bg-white rounded-2xl p-2 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden">
                <Image src={animal.src} alt={animal.label} fill className="object-cover" />
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: `${PRIMARY_COLOR}cc` }}
                >
                  <animal.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-lg bg-white" style={{ color: PRIMARY_COLOR }}>
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
    </div>
  )
}

// Mobile/Tablet Carousel View
const MobileCarouselView = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % animalSectors.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + animalSectors.length) % animalSectors.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative py-16 px-4" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}08, #f0f9ff, ${PRIMARY_COLOR}05)` }}>
      {/* Section Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="mb-2" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
          Our Sectors
        </Badge>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Serving All Animal Sectors
        </h2>
      </motion.div>

      {/* Main Carousel */}
      <div className="relative max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <img
                    src={animalSectors[currentIndex].src}
                    alt={animalSectors[currentIndex].label}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${PRIMARY_COLOR}dd 0%, transparent 50%)` }}
                  />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      {(() => {
                        const Icon = animalSectors[currentIndex].icon
                        return <Icon className="w-8 h-8" />
                      })()}
                      <h3 className="text-2xl font-bold">{animalSectors[currentIndex].label}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{animalSectors[currentIndex].description}</p>
                  </div>

                  {/* Center Logo Watermark */}
                  <div className="absolute top-4 right-4">
                    <div className="w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
                      <Image src="/siflonlogo.png" alt="Siflon" width={40} height={40} className="w-10 h-10 object-contain" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronLeft className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronRight className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {animalSectors.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 ${
              idx === currentIndex 
                ? 'w-8 h-2 rounded-full' 
                : 'w-2 h-2 rounded-full bg-gray-300'
            }`}
            style={idx === currentIndex ? { backgroundColor: PRIMARY_COLOR } : {}}
          />
        ))}
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-6 gap-2 mt-8 max-w-md mx-auto">
        {animalSectors.map((sector, idx) => (
          <motion.button
            key={sector.id}
            onClick={() => setCurrentIndex(idx)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              idx === currentIndex ? 'border-white shadow-lg' : 'border-transparent opacity-60'
            }`}
          >
            <img src={sector.src} alt={sector.label} className="w-full h-full object-cover" />
          </motion.button>
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.p
        className="text-center text-sm text-gray-600 mt-8 max-w-sm mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Comprehensive healthcare solutions for all animal sectors
      </motion.p>
    </div>
  )
}

// Tablet Grid View
const TabletGridView = () => {
  return (
    <div className="relative py-12 px-4" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}08, #f0f9ff, ${PRIMARY_COLOR}05)` }}>
      {/* Section Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="mb-2" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
          Our Sectors
        </Badge>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Serving All Animal Sectors
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        {animalSectors.map((sector, idx) => (
          <motion.div
            key={sector.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <Card className="border-0 shadow-md overflow-hidden cursor-pointer group">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <img src={sector.src} alt={sector.label} className="w-full h-full object-cover" />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(to top, ${PRIMARY_COLOR}cc 0%, transparent 60%)` }}
                  />
                  <div className="absolute bottom-0 inset-x-0 p-2">
                    <div className="flex items-center gap-1.5">
                      <sector.icon className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">{sector.label}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Center Logo */}
      <div className="flex justify-center mt-8">
        <motion.div
          className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-2"
          style={{ borderColor: PRIMARY_COLOR }}
          animate={{ boxShadow: [`0 0 20px ${PRIMARY_COLOR}20`, `0 0 40px ${PRIMARY_COLOR}40`, `0 0 20px ${PRIMARY_COLOR}20`] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image src="/siflonlogo.png" alt="Siflon" width={40} height={40} className="w-10 h-10 object-contain" />
        </motion.div>
      </div>

      {/* Bottom tagline */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Comprehensive healthcare solutions for all animal sectors
      </p>
    </div>
  )
}

const AnimalNetworkSection = () => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setScreenSize('mobile')
      } else if (width < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <section className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {screenSize === 'mobile' && (
          <motion.div key="mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MobileCarouselView />
          </motion.div>
        )}
        {screenSize === 'tablet' && (
          <motion.div key="tablet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TabletGridView />
          </motion.div>
        )}
        {screenSize === 'desktop' && (
          <motion.div key="desktop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <DesktopNetworkView />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default AnimalNetworkSection
