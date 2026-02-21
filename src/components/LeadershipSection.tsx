'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, Quote } from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

// Leadership team data
const leadershipTeam = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    designation: 'Founder & Chairman',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'A visionary leader with 35+ years in pharmaceutical industry. Dr. Kumar founded Siflon with a mission to revolutionize animal healthcare in India and beyond.',
    achievements: ['PhD in Pharmaceutical Sciences', 'Industry Veteran since 1985', 'Awards: Entrepreneur of the Year 2018'],
    linkedin: '#',
    twitter: '#',
    email: '#'
  },
  {
    id: 2,
    name: 'Mrs. Priya Sharma',
    designation: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Leading operations and strategic growth initiatives. Mrs. Sharma brings 25+ years of experience in pharmaceutical manufacturing and global business development.',
    achievements: ['MBA from IIM Ahmedabad', 'Global Business Leader Award', '30+ Years Industry Experience'],
    linkedin: '#',
    twitter: '#',
    email: '#'
  },
  {
    id: 3,
    name: 'Dr. Anil Verma',
    designation: 'Director - R&D',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Pioneering research in veterinary pharmaceuticals. Dr. Verma leads our DSIR-recognized R&D center with a focus on innovative formulations.',
    achievements: ['PhD in Veterinary Pharmacology', '50+ Published Research Papers', '12 Patent Holdings'],
    linkedin: '#',
    twitter: '#',
    email: '#'
  },
  {
    id: 4,
    name: 'Mr. Suresh',
    designation: 'Director - Operations',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Ensuring operational excellence across manufacturing facilities. Mr. Reddy oversees production, quality control, and supply chain management.',
    achievements: ['B.Tech + MBA', '25+ Years in Manufacturing', 'Lean Six Sigma Certified'],
    linkedin: '#',
    twitter: '#',
    email: '#'
  },
  {
    id: 5,
    name: 'Dr. Meena Patel',
    designation: 'Director - Quality Assurance',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Guardian of quality standards. Dr. Patel ensures all products meet WHO-GMP and international quality benchmarks.',
    achievements: ['PhD in Quality Management', 'WHO-GMP Certified Auditor', '20+ Years QA Experience'],
    linkedin: '#',
    twitter: '#',
    email: '#'
  },
  {
    id: 6,
    name: 'Mr. Vikram Singh',
    designation: 'Director - International Business',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Expanding global footprint across 50+ countries. Mr. Singh drives international partnerships and export operations.',
    achievements: ['MBA International Business', 'Present in 50+ Countries', 'Export Excellence Award'],
    linkedin: '#',
    twitter: '#',
    email: '#'
  },
]

export default function LeadershipSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = leadershipTeam.length - 1
      if (nextIndex >= leadershipTeam.length) nextIndex = 0
      return nextIndex
    })
  }

  const currentLeader = leadershipTeam[currentIndex]

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge 
            className="mb-4 px-4 py-1.5"
            style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
          >
            Our Leadership
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Visionary Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guided by experience, driven by innovation - our leadership team brings decades of expertise in pharmaceutical excellence.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-0 shadow-2xl bg-white">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x)
                        if (swipe < -swipeConfidenceThreshold) {
                          paginate(1)
                        } else if (swipe > swipeConfidenceThreshold) {
                          paginate(-1)
                        }
                      }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={currentLeader.image}
                        alt={currentLeader.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Quote */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-start gap-3">
                          <Quote className="w-8 h-8 text-white/50 flex-shrink-0" />
                          <p className="text-white text-sm italic line-clamp-2">
                            "Excellence is not a destination but a continuous journey of improvement and innovation."
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
                    <button
                      onClick={() => paginate(-1)}
                      className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                    </button>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
                    <button
                      onClick={() => paginate(1)}
                      className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Name & Designation */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {currentLeader.name}
                      </h3>
                      <p 
                        className="text-lg font-semibold mb-6"
                        style={{ color: PRIMARY_COLOR }}
                      >
                        {currentLeader.designation}
                      </p>

                      {/* Bio */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {currentLeader.bio}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Achievements</h4>
                        <ul className="space-y-2">
                          {currentLeader.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i}
                              className="flex items-center gap-2 text-sm text-gray-600"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: PRIMARY_COLOR }} />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3">
                        <a href={currentLeader.linkedin} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors text-gray-600">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={currentLeader.twitter} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sky-100 hover:text-sky-500 transition-colors text-gray-600">
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a href={currentLeader.email} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-colors text-gray-600">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Dots Navigation */}
                  <div className="flex gap-2 mt-8">
                    {leadershipTeam.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1)
                          setCurrentIndex(index)
                        }}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentIndex 
                            ? 'w-8 h-2.5' 
                            : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                        }`}
                        style={index === currentIndex ? { backgroundColor: PRIMARY_COLOR } : {}}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team Grid Preview */}
        <motion.div 
          className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {leadershipTeam.map((leader, index) => (
            <motion.button
              key={leader.id}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-4 ring-offset-2 shadow-lg' 
                  : 'opacity-60 hover:opacity-100'
              }`}
              style={index === currentIndex ? { ringColor: PRIMARY_COLOR } : {}}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold truncate">{leader.name}</p>
                <p className="text-white/70 text-[10px] truncate">{leader.designation}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
