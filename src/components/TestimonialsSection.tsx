'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Star, Quote, Building2, MapPin, Play, Pause } from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Dr. Ahmed Hassan',
    designation: 'Chief Veterinarian',
    company: 'Al-Rashid Poultry Farms',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    title: 'Exceptional Quality Products',
    content: 'We have been using Siflon products for over 8 years now. Their poultry medicines have significantly improved our flock health and productivity. The quality consistency and technical support are outstanding. Highly recommend their oral liquids and feed supplements.',
    productUsed: 'Poultry Health Range',
    year: 'Customer since 2016'
  },
  {
    id: 2,
    name: 'Mr. Nguyen Van Minh',
    designation: 'Farm Owner',
    company: 'Mekong Aqua Farm',
    location: 'Ho Chi Minh City, Vietnam',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    title: 'Revolutionized Our Aqua Farm',
    content: 'Siflon\'s aquaculture products have transformed our shrimp farming operations. Their probiotics and water treatment solutions have reduced mortality rates by 40%. The team\'s expertise in aquatic health is unmatched in the industry.',
    productUsed: 'Aqua Probiotics Range',
    year: 'Customer since 2019'
  },
  {
    id: 3,
    name: 'Dr. Sarah Johnson',
    designation: 'Veterinary Consultant',
    company: 'Kenya Dairy Cooperative',
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    title: 'Trusted Partner for Dairy Health',
    content: 'As a veterinary consultant for 15+ dairy farms, I recommend Siflon products to all my clients. Their mastitis treatment and nutritional supplements are effective and affordable. The company truly understands dairy cattle health challenges.',
    productUsed: 'Dairy Cattle Medicines',
    year: 'Customer since 2018'
  },
  {
    id: 4,
    name: 'Mr. Rajesh Patel',
    designation: 'Managing Director',
    company: 'Gujarat Swine Farm Pvt Ltd',
    location: 'Ahmedabad, India',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    title: 'Reliable and Effective Solutions',
    content: 'Siflon has been our trusted partner for swine healthcare for over a decade. Their respiratory treatments and growth promoters have excellent results. Their technical team is always available for consultation.',
    productUsed: 'Swine Health Products',
    year: 'Customer since 2012'
  },
  {
    id: 5,
    name: 'Dr. Maria Santos',
    designation: 'Animal Health Director',
    company: 'Manila Veterinary Hospital',
    location: 'Manila, Philippines',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    title: 'Premier Pet Healthcare Products',
    content: 'We exclusively use Siflon\'s pet care range at our veterinary hospital. Their deworming tablets and nutritional supplements are preferred by pet owners for their efficacy and safety profile. Excellent quality at competitive prices.',
    productUsed: 'Pet Care Range',
    year: 'Customer since 2020'
  },
  {
    id: 6,
    name: 'Mr. Tunde Okonkwo',
    designation: 'CEO',
    company: 'Lagos Agro Industries',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    title: 'Outstanding Export Quality',
    content: 'Importing Siflon products for West African market has been a game-changer for our business. Their WHO-GMP certified products meet all regulatory requirements. Their export documentation support is excellent.',
    productUsed: 'Complete Product Range',
    year: 'Customer since 2017'
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: PRIMARY_COLOR }} />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        {/* Quote pattern */}
        <div className="absolute top-10 left-10 text-white/5 text-[200px] font-serif leading-none">
          "
        </div>
        <div className="absolute bottom-10 right-10 text-white/5 text-[200px] font-serif leading-none rotate-180">
          "
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge 
            className="mb-4 px-4 py-1.5 bg-white/10 text-white border-white/20"
          >
            Client Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Trusted by farmers, veterinarians, and agricultural businesses across 50+ countries
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.3 }
                  }}
                  className="text-center"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <Quote className="w-12 h-12 text-white/30" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {currentTestimonial.title}
                  </h3>

                  {/* Content */}
                  <p className="text-blue-100 text-lg leading-relaxed mb-8">
                    "{currentTestimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 mb-4">
                      <img 
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-white">{currentTestimonial.name}</h4>
                    <p className="text-blue-200 text-sm">{currentTestimonial.designation}</p>
                    
                    <div className="flex items-center gap-4 mt-3 text-sm text-blue-200">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>{currentTestimonial.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{currentTestimonial.location}</span>
                      </div>
                    </div>

                    {/* Product Used & Year */}
                    <div className="flex items-center gap-4 mt-4">
                      <Badge className="bg-white/20 text-white border-white/30 text-xs">
                        {currentTestimonial.productUsed}
                      </Badge>
                      <Badge className="bg-white/10 text-blue-200 border-white/20 text-xs">
                        {currentTestimonial.year}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    goToSlide(index)
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'w-8 h-2.5 bg-white' 
                      : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Play/Pause */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Client Logos Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-center text-blue-200 text-sm mb-6">Trusted by Leading Organizations</p>
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => {
                  setIsAutoPlaying(false)
                  goToSlide(index)
                }}
                className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-white scale-110' 
                    : 'border-white/30 opacity-60 hover:opacity-100'
                }`}
                whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
              >
                <img 
                  src={testimonial.image}
                  alt={testimonial.company}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
