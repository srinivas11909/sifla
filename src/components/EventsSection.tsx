'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Star,
  Play,
  Pause,
  CalendarDays
} from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  images: string[]
  eventType: string
  featured: boolean
  active: boolean
  order: number
}

const EVENT_TYPE_COLORS: Record<string, string> = {
  exhibition: '#3b82f6',
  conference: '#10b981',
  seminar: '#f59e0b',
  workshop: '#8b5cf6',
  award: '#ef4444',
  training: '#06b6d4',
  launch: '#ec4899',
  general: '#6b7280',
}

export default function EventsSection() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  useEffect(() => {
    fetchEvents()
  }, [])

  // Auto-advance image slider
  useEffect(() => {
    if (!isAutoPlaying || events.length === 0) return
    
    const currentEvent = events[currentEventIndex]
    if (!currentEvent?.images || currentEvent.images.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentEvent.images.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, events, currentEventIndex])

  // Auto-advance event cards (for featured section)
  useEffect(() => {
    if (!isAutoPlaying || events.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length)
      setCurrentImageIndex(0)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, events.length])

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events')
      const data = await res.json()
      // Filter active events, show featured first
      const activeEvents = data
        .filter((event: Event) => event.active)
        .sort((a: Event, b: Event) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return a.order - b.order
        })
      setEvents(activeEvents)
    } catch (error) {
      console.error('Error fetching events:', error)
    } finally {
      setLoading(false)
    }
  }

  const goToPreviousEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length)
    setCurrentImageIndex(0)
  }

  const goToNextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length)
    setCurrentImageIndex(0)
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return dateString
    }
  }

  const getEventTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      exhibition: 'Exhibition',
      conference: 'Conference',
      seminar: 'Seminar',
      workshop: 'Workshop',
      award: 'Award Ceremony',
      training: 'Training Program',
      launch: 'Product Launch',
      general: 'Event',
    }
    return labels[type] || 'Event'
  }

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: PRIMARY_COLOR }} />
          </div>
        </div>
      </section>
    )
  }

  if (events.length === 0) {
    return null
  }

  const currentEvent = events[currentEventIndex]

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
            style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}
          >
            <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
            Events & Exhibitions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming <span style={{ color: PRIMARY_COLOR }}>Events</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us at industry events, exhibitions, and conferences worldwide
          </p>
        </motion.div>

        {/* Main Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-0 shadow-2xl bg-white">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Image Slider Section */}
                <div className="relative h-[350px] lg:h-[500px] overflow-hidden bg-gray-200">
                  {currentEvent.images && currentEvent.images.length > 0 ? (
                    <>
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`${currentEventIndex}-${currentImageIndex}`}
                          src={currentEvent.images[currentImageIndex]}
                          alt={currentEvent.title}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.5 }}
                        />
                      </AnimatePresence>

                      {/* Image Navigation Dots */}
                      {currentEvent.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
                          {currentEvent.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`transition-all duration-300 rounded-full ${
                                idx === currentImageIndex ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                              }`}
                            />
                          ))}
                          <button 
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="ml-2 text-white hover:text-white/80"
                          >
                            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                          </button>
                        </div>
                      )}

                      {/* Image Counter */}
                      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                        {currentImageIndex + 1} / {currentEvent.images.length}
                      </div>
                    </>
                  ) : (
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                    >
                      <Calendar className="w-24 h-24" style={{ color: PRIMARY_COLOR }} />
                    </div>
                  )}

                  {/* Event Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className="text-white border-0"
                      style={{ backgroundColor: EVENT_TYPE_COLORS[currentEvent.eventType] || PRIMARY_COLOR }}
                    >
                      {getEventTypeLabel(currentEvent.eventType)}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  {currentEvent.featured && (
                    <div className="absolute top-4 left-28">
                      <Badge className="bg-yellow-500 text-yellow-900 border-0">
                        <Star className="w-3 h-3 mr-1 fill-yellow-900" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Event Navigation Arrows */}
                  {events.length > 1 && (
                    <>
                      <button
                        onClick={goToPreviousEvent}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
                      >
                        <ChevronLeft className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                      </button>
                      <button
                        onClick={goToNextEvent}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
                      >
                        <ChevronRight className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                      </button>
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentEventIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {currentEvent.title}
                      </h3>

                      {/* Date & Location */}
                      <div className="space-y-3 mb-6">
                        {currentEvent.date && (
                          <div className="flex items-center gap-3 text-gray-600">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                            >
                              <Calendar className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Date</p>
                              <p className="font-medium">{formatDate(currentEvent.date)}</p>
                            </div>
                          </div>
                        )}

                        {currentEvent.location && (
                          <div className="flex items-center gap-3 text-gray-600">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                            >
                              <MapPin className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Location</p>
                              <p className="font-medium">{currentEvent.location}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      {currentEvent.description && (
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {currentEvent.description}
                        </p>
                      )}

                      {/* CTA Button */}
                      <Button
                        size="lg"
                        className="text-white font-semibold"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                      >
                        Learn More
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </AnimatePresence>

                  {/* Event Dots Navigation */}
                  {events.length > 1 && (
                    <div className="flex gap-2 mt-8">
                      {events.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentEventIndex(index)
                            setCurrentImageIndex(0)
                          }}
                          className={`transition-all duration-300 rounded-full ${
                            index === currentEventIndex 
                              ? 'w-8 h-2.5' 
                              : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                          }`}
                          style={index === currentEventIndex ? { backgroundColor: PRIMARY_COLOR } : {}}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Events Grid Preview */}
        {events.length > 1 && (
          <motion.div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {events.map((event, index) => (
              <motion.button
                key={event.id}
                onClick={() => {
                  setCurrentEventIndex(index)
                  setCurrentImageIndex(0)
                }}
                className={`relative rounded-xl overflow-hidden aspect-video transition-all duration-300 ${
                  index === currentEventIndex 
                    ? 'ring-4 ring-offset-2 shadow-lg' 
                    : 'opacity-60 hover:opacity-100'
                }`}
                style={index === currentEventIndex ? { ringColor: PRIMARY_COLOR } : {}}
                whileHover={{ scale: 1.05 }}
              >
                {event.images && event.images.length > 0 ? (
                  <img 
                    src={event.images[0]}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: `${PRIMARY_COLOR}30` }}
                  >
                    <Calendar className="w-8 h-8" style={{ color: PRIMARY_COLOR }} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-semibold truncate">{event.title}</p>
                  {event.date && (
                    <p className="text-white/70 text-[10px] truncate">{formatDate(event.date)}</p>
                  )}
                </div>
                {event.featured && (
                  <Star className="absolute top-2 right-2 w-4 h-4 text-yellow-400 fill-yellow-400" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
