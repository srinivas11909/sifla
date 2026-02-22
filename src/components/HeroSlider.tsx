// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Download, FlaskConical } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'

// const PRIMARY_COLOR = '#243d80'

// // Helper function to extract YouTube video ID from various URL formats
// function getYouTubeVideoId(url: string): string | null {
//   if (!url) return null
  
//   const patterns = [
//     /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
//     /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
//   ]
  
//   for (const pattern of patterns) {
//     const match = url.match(pattern)
//     if (match) return match[1]
//   }
  
//   return null
// }

// interface HeroSlide {
//   type: string
//   src: string
//   poster?: string | null
//   title: string
//   subtitle: string
//   badge: string
// }

// interface HeroSliderProps {
//   slides: HeroSlide[]
// }

// export default function HeroSlider({ slides }: HeroSliderProps) {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isHovered, setIsHovered] = useState(false)
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const youtubePlayerRef = useRef<HTMLIFrameElement>(null)

//   // Auto-advance carousel - paused when hovering
//   useEffect(() => {
//     if (isHovered) return // Pause auto-play on hover
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 6000)
    
//     return () => clearInterval(interval)
//   }, [slides.length, isHovered])

//   // Handle video playback
//   useEffect(() => {
//     if (videoRef.current && slides[currentSlide]?.type === 'video') {
//       videoRef.current.play().catch(() => {
//         // Autoplay might be blocked
//       })
//     }
//   }, [currentSlide, slides])

//   const handleSlideChange = (index: number) => {
//     setCurrentSlide(index)
//   }

//   const goToPrevious = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//   }

//   const goToNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }

//   if (!slides || slides.length === 0) {
//     return null
//   }

//   const currentSlideData = slides[currentSlide]
//   const isVideo = currentSlideData.type === 'video' || currentSlideData.type === 'youtube'
//   const hasContent = currentSlideData.title || currentSlideData.subtitle

//   return (
//     <section 
//       className="relative overflow-hidden h-[600px] md:h-[750px]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Slide Content */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {currentSlideData.type === 'youtube' ? (
//             <>
//               {/* Poster image as background */}
//               {currentSlideData.poster && (
//                 <div 
//                   className="absolute inset-0 bg-cover bg-center z-0"
//                   style={{ backgroundImage: `url(${currentSlideData.poster})` }}
//                 />
//               )}
//               <iframe
//                 ref={youtubePlayerRef}
//                 className="absolute inset-0 w-full h-full object-cover z-10"
//                 src={`https://www.youtube.com/embed/${getYouTubeVideoId(currentSlideData.src)}?autoplay=1&mute=1&loop=1&playlist=${getYouTubeVideoId(currentSlideData.src)}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
//                 title={currentSlideData.title || 'YouTube Video'}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 style={{ pointerEvents: 'none' }}
//               />
//             </>
//           ) : currentSlideData.type === 'video' ? (
//             <video
//               ref={videoRef}
//               className="absolute inset-0 w-full h-full object-cover"
//               poster={currentSlideData.poster}
//               muted
//               loop
//               playsInline
//               autoPlay
//             >
//               <source src={currentSlideData.src} type="video/mp4" />
//             </video>
//           ) : (
//             <div 
//               className="absolute inset-0 bg-cover bg-center" 
//               style={{ backgroundImage: `url(${currentSlideData.src})` }} 
//             />
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* Blue Gradient Overlay - ONLY for images */}
//       {currentSlideData.type === 'image' && (
//         <div 
//           className="absolute inset-0 z-10" 
//           style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}ee 0%, ${PRIMARY_COLOR}cc 50%, ${PRIMARY_COLOR}99 100%)` }} 
//         />
//       )}

//       {/* Decorative elements - Only for images */}
//       {currentSlideData.type === 'image' && (
//         <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
//           <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
//         </div>
//       )}

//       {/* Subtle overlay for videos with content */}
//       {isVideo && hasContent && (
//         <div 
//           className="absolute inset-0 z-10" 
//           style={{ background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)` }} 
//         />
//       )}

//       {/* Content Section - Only show if there's title or subtitle */}
//       {hasContent && (
//         <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 h-full flex items-center">
//           <div className="max-w-3xl">
//             <AnimatePresence mode="wait">
//               <motion.div 
//                 key={currentSlide} 
//                 initial={{ opacity: 0, y: 30 }} 
//                 animate={{ opacity: 1, y: 0 }} 
//                 exit={{ opacity: 0, y: -30 }} 
//                 transition={{ duration: 0.6 }}
//               >
//                 {/* Badge */}
//                 {currentSlideData.badge && (
//                   <motion.div 
//                     className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     <Sparkles className="w-4 h-4 text-yellow-300" />
//                     <span className="text-white text-sm font-medium">{currentSlideData.badge}</span>
//                   </motion.div>
//                 )}
                
//                 {/* Title */}
//                 {currentSlideData.title && (
//                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//                     {currentSlideData.title}
//                   </h1>
//                 )}
                
//                 {/* Subtitle */}
//                 {currentSlideData.subtitle && (
//                   <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
//                     {currentSlideData.subtitle}
//                   </p>
//                 )}
                
//                 {/* CTA Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Link href="/products">
//                     <Button size="lg" className="text-gray-900 bg-white hover:bg-gray-100 font-semibold">
//                       <FlaskConical className="w-5 h-5 mr-2" />
//                       View Products
//                     </Button>
//                   </Link>
//                   <a href="/siflonpharma-brochure.pdf" download>
//                     <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
//                       <Download className="w-4 h-4 mr-2" />
//                       Download Brochure
//                     </Button>
//                   </a>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       )}

//       {/* Carousel Navigation */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
//         <button 
//           onClick={goToPrevious} 
//           className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
//         >
//           <ChevronLeft className="w-5 h-5 text-white" />
//         </button>
        
//         {/* Dot Indicators */}
//         <div className="flex gap-2">
//           {slides.map((_, index) => (
//             <button 
//               key={index} 
//               onClick={() => handleSlideChange(index)} 
//               className={`transition-all duration-300 rounded-full ${
//                 index === currentSlide ? 'w-8 bg-white' : 'w-3 h-3 bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
        
//         <button 
//           onClick={goToNext} 
//           className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
//         >
//           <ChevronRight className="w-5 h-5 text-white" />
//         </button>
//       </div>

//       {/* Pause indicator on hover */}
//       {isHovered && (
//         <motion.div 
//           className="absolute top-4 right-4 z-40 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//         >
//           <Pause className="w-4 h-4 text-white" />
//           <span className="text-white text-sm">Paused</span>
//         </motion.div>
//       )}
//     </section>
//   )
// }


'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Download, FlaskConical } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

//const PRIMARY_COLOR = '#243d80'

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null
  
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

interface HeroSlide {
  type: string
  src: string
  poster?: string | null
  title: string
  subtitle: string
  badge: string
}

interface HeroSliderProps {
  slides: HeroSlide[]
}


const PRIMARY_COLOR = '#243d80'
const PRIMARY_HOVER = '#1a2d5c'

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const youtubePlayerRef = useRef<HTMLIFrameElement>(null)

  // Auto-advance carousel
  useEffect(() => {
    if (isHovered) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [slides.length, isHovered])

  // Handle video playback
  useEffect(() => {
    if (videoRef.current && slides[currentSlide]?.type === 'video') {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked
      })
    }
  }, [currentSlide, slides])

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  if (!slides || slides.length === 0) {
    return null
  }

  const currentSlideData = slides[currentSlide]
  const isVideo = currentSlideData.type === 'video' || currentSlideData.type === 'youtube'
  const hasContent = currentSlideData.title || currentSlideData.subtitle

  return (
    <section 
      className="relative overflow-hidden h-[600px] md:h-[750px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Content */}
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
              {currentSlideData.poster && (
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${currentSlideData.poster})` }}
                />
              )}
              <iframe
                ref={youtubePlayerRef}
                className="absolute inset-0 w-full h-full object-cover z-10"
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(currentSlideData.src)}?autoplay=1&mute=1&loop=1&playlist=${getYouTubeVideoId(currentSlideData.src)}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                title={currentSlideData.title || 'YouTube Video'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ pointerEvents: 'none' }}
              />
            </>
          ) : currentSlideData.type === 'video' ? (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              poster={currentSlideData.poster}
              muted
              loop
              playsInline
              autoPlay
            >
              <source src={currentSlideData.src} type="video/mp4" />
            </video>
          ) : (
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${currentSlideData.src})` }} 
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Blue Gradient Overlay - ONLY for images */}
      {currentSlideData.type === 'image' && (
        <div 
          className="absolute inset-0 z-10" 
          style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}ee 0%, ${PRIMARY_COLOR}cc 50%, ${PRIMARY_COLOR}99 100%)` }} 
        />
      )}

      {/* Decorative elements - Only for images */}
      {currentSlideData.type === 'image' && (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
      )}

      {/* Subtle overlay for videos with content */}
      {isVideo && hasContent && (
        <div 
          className="absolute inset-0 z-10" 
          style={{ background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)` }} 
        />
      )}

      {/* Content Section */}
      {hasContent && (
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 h-full flex items-center">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -30 }} 
                transition={{ duration: 0.6 }}
              >
                {currentSlideData.badge && (
                  <motion.div 
                    className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span className="text-white text-sm font-medium">{currentSlideData.badge}</span>
                  </motion.div>
                )}
                
                {currentSlideData.title && (
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {currentSlideData.title}
                  </h1>
                )}
                
                {currentSlideData.subtitle && (
                  <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                    {currentSlideData.subtitle}
                  </p>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products">
                    <Button size="lg" className="text-gray-900 bg-white hover:bg-gray-100 font-semibold cursor-pointer">
                      <FlaskConical className="w-5 h-5 mr-2" />
                      View Products
                    </Button>
                  </Link>
                  <a href="/siflonpharma-brochure.pdf" download>
                    <Button size="lg" variant="outline" className="border-white text-primary hover:bg-PRIMARY_HOVER cursor-pointer">
                      <Download className="w-4 h-4 mr-2" />
                      Download Brochure
                    </Button>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Carousel Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        <button 
          onClick={goToPrevious} 
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button 
              key={index} 
              onClick={() => handleSlideChange(index)} 
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide ? 'w-8 h-3 bg-white' : 'w-3 h-3 bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={goToNext} 
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Pause indicator */}
      {isHovered && (
        <motion.div 
          className="absolute top-4 right-4 z-40 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <Pause className="w-4 h-4 text-white" />
          <span className="text-white text-sm">Paused</span>
        </motion.div>
      )}
    </section>
  )
}