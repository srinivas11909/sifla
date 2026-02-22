// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

// const PRIMARY_COLOR = '#243d80'

// const sectors = [
//   {
//     id: 1,
//     name: 'Camel',
//     image: 'https://images.openai.com/static-rsc-3/wgTPAYHiydV2tdYRFoHygfchXqkh55kotZWw1lS6cqN2-WRXfFvR5JRv7HsTBTDSKZxXZwhWwtvKaqSf7UJ0zjXNfsCOKAMdRJfrsnfZCaY?purpose=fullsize&v=1',
//     description: 'Specialized healthcare solutions for camels',
//     products: ['Vaccines', 'Supplements', 'Antibiotics']
//   },
//   {
//     id: 2,
//     name: 'Sheep',
//     image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=600&h=400&fit=crop',
//     description: 'Comprehensive sheep health products',
//     products: ['Dewormers', 'Nutrition', 'Vaccines']
//   },
//   {
//     id: 3,
//     name: 'Goat',
//     image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=600&h=400&fit=crop',
//     description: 'Quality medicines for goat farming',
//     products: ['Supplements', 'Antibiotics', 'Minerals']
//   },
//   {
//     id: 4,
//     name: 'Cow',
//     image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop',
//     description: 'Dairy cattle healthcare solutions',
//     products: ['Mastitis Care', 'Nutrition', 'Reproduction']
//   },
//   {
//     id: 5,
//     name: 'Buffalo',
//     image: 'https://static4.depositphotos.com/1007572/329/i/450/depositphotos_3294853-stock-photo-african-buffalo-cow.jpg?auto=format&fit=crop&w=200&q=80',
//     description: 'Complete buffalo health products',
//     products: ['Immunity', 'Milk Enhancers', 'Healthcare']
//   },
//   {
//     id: 6,
//     name: 'Horse',
//     image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&h=400&fit=crop',
//     description: 'Premium equine health products',
//     products: ['Performance', 'Joint Care', 'Wound Care']
//   },
//   {
//     id: 7,
//     name: 'Fish',
//     image: 'https://images.openai.com/static-rsc-3/ePZ2jqJGd2dXI1SW0K7MvUv-JAoMnVNUO3NG_XZFSEtZh7bViN64v-MAkqoeW06Gv1-ifuq_tuJgiBVyhX1uXCpb5BhwXhoZ0b-RweYSlIM?purpose=fullsize&v=1',
//     description: 'Aquaculture health solutions',
//     products: ['Probiotics', 'Water Treatment', 'Feed']
//   },
//   {
//     id: 8,
//     name: 'Cat',
//     image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop',
//     description: 'Companion cat pharmaceuticals',
//     products: ['Deworming', 'Supplements', 'Skin Care']
//   },
//   {
//     id: 9,
//     name: 'Dog',
//     image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
//     description: 'Dog healthcare products',
//     products: ['Vaccines', 'Nutrition', 'Dental Care']
//   }
// ]

// // Desktop Carousel Component
// const DesktopCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
//   const [isDragging, setIsDragging] = useState(false)
//   const [startX, setStartX] = useState(0)
//   const [dragOffset, setDragOffset] = useState(0)
//   const containerRef = useRef<HTMLDivElement>(null)

//   const visibleCards = 4
//   const cardWidth = 280
//   const gap = 24

//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % sectors.length)
//     }, 3000)

//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length)
//   }

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % sectors.length)
//   }

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true)
//     setStartX(e.clientX)
//   }

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return
//     const diff = e.clientX - startX
//     setDragOffset(diff)
//   }

//   const handleMouseUp = () => {
//     if (Math.abs(dragOffset) > 100) {
//       if (dragOffset > 0) {
//         goToPrevious()
//       } else {
//         goToNext()
//       }
//     }
//     setIsDragging(false)
//     setDragOffset(0)
//   }

//   const getVisibleItems = () => {
//     const items = []
//     for (let i = 0; i < visibleCards + 1; i++) {
//       const index = (currentIndex + i) % sectors.length
//       items.push({ ...sectors[index], position: i })
//     }
//     return items
//   }

//   return (
//     <div className="relative">
//       {/* Main Carousel Container */}
//       <div 
//         ref={containerRef}
//         className="overflow-hidden rounded-2xl"
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseUp}
//         style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
//       >
//         <motion.div
//           className="flex gap-6"
//           animate={{
//             x: -currentIndex * (cardWidth + gap) + dragOffset
//           }}
//           transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//         >
//           {sectors.map((sector, index) => (
//             <motion.div
//               key={sector.id}
//               className="flex-shrink-0"
//               style={{ width: cardWidth }}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ 
//                 opacity: Math.abs(index - currentIndex) < visibleCards ? 1 : 0.3,
//                 scale: Math.abs(index - currentIndex) < visibleCards ? 1 : 0.9
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all py-0 duration-500 overflow-hidden bg-white">
//                 <CardContent className="p-0">
//                   {/* Image Container */}
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={sector.image}
//                       alt={sector.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//                     {/* Name Badge */}
//                     <div className="absolute bottom-3 left-3 right-3">
//                       <h3 className="text-lg font-bold text-white">{sector.name}</h3>
//                       <p className="text-xs text-white/80 line-clamp-1">{sector.description}</p>
//                     </div>

//                     {/* Hover Overlay */}
//                     <motion.div 
//                       className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       style={{ backgroundColor: `${PRIMARY_COLOR}cc` }}
//                     >
//                       <div className="text-center p-4">
//                         <p className="text-white text-sm mb-2">Products:</p>
//                         <div className="flex flex-wrap justify-center gap-1">
//                           {sector.products.map((product, i) => (
//                             <span key={i} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
//                               {product}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Navigation Controls */}
//       <div className="flex items-center justify-center gap-4 mt-8">
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={goToPrevious}
//           className="rounded-full border-2 hover:bg-gray-100"
//           style={{ borderColor: PRIMARY_COLOR }}
//         >
//           <ChevronLeft className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
//         </Button>

//         {/* Dot Indicators */}
//         <div className="flex items-center gap-2">
//           {sectors.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`transition-all duration-300 rounded-full ${
//                 index === currentIndex 
//                   ? 'w-8 h-2.5' 
//                   : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
//               }`}
//               style={index === currentIndex ? { backgroundColor: PRIMARY_COLOR } : {}}
//             />
//           ))}
//         </div>

//         <Button
//           variant="outline"
//           size="icon"
//           onClick={goToNext}
//           className="rounded-full border-2 hover:bg-gray-100"
//           style={{ borderColor: PRIMARY_COLOR }}
//         >
//           <ChevronRight className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
//         </Button>

//         {/* Auto-play Toggle */}
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//           className="ml-2 rounded-full hover:bg-gray-100"
//         >
//           {isAutoPlaying ? (
//             <Pause className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
//           ) : (
//             <Play className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
//           )}
//         </Button>
//       </div>
//     </div>
//   )
// }

// // Tablet Carousel Component
// const TabletCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % sectors.length)
//     }, 3500)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="relative">
//       <div className="overflow-hidden">
//         <motion.div
//           className="flex"
//           animate={{ x: `-${currentIndex * 50}%` }}
//           transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//         >
//           {sectors.map((sector, index) => (
//             <motion.div
//               key={sector.id}
//               className="w-1/2 flex-shrink-0 px-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.05 }}
//             >
//               <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 py-0 overflow-hidden bg-white">
//                 <CardContent className="p-0">
//                   <div className="relative h-40 overflow-hidden">
//                     <img
//                       src={sector.image}
//                       alt={sector.name}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                     <div className="absolute bottom-2 left-2">
//                       <h3 className="text-base font-bold text-white">{sector.name}</h3>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Indicators */}
//       <div className="flex justify-center gap-1.5 mt-6">
//         {sectors.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`transition-all duration-300 rounded-full ${
//               index === currentIndex ? 'w-6 h-2' : 'w-2 h-2 bg-gray-300'
//             }`}
//             style={index === currentIndex ? { backgroundColor: PRIMARY_COLOR } : {}}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// // Mobile Carousel Component
// const MobileCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [touchStart, setTouchStart] = useState(0)
//   const [touchEnd, setTouchEnd] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % sectors.length)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [])

//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.targetTouches[0].clientX)
//   }

//   const handleTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX)
//   }

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 75) {
//       setCurrentIndex((prev) => (prev + 1) % sectors.length)
//     }
//     if (touchStart - touchEnd < -75) {
//       setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length)
//     }
//   }

//   const sector = sectors[currentIndex]

//   return (
//     <div 
//       className="relative touch-pan-y"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.4 }}
//         >
//           <Card className="border-0 shadow-xl overflow-hidden bg-white py-0">
//             <CardContent className="p-0">
//               {/* Full Width Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={sector.image}
//                   alt={sector.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div 
//                   className="absolute inset-0"
//                   style={{ background: `linear-gradient(to top, ${PRIMARY_COLOR}ee 0%, ${PRIMARY_COLOR}80 40%, transparent 100%)` }}
//                 />

//                 {/* Content Overlay */}
//                 <div className="absolute bottom-0 inset-x-0 p-6 text-white">
//                   <motion.h3 
//                     className="text-2xl font-bold mb-1"
//                     initial={{ y: 10, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.1 }}
//                   >
//                     {sector.name}
//                   </motion.h3>
//                   <motion.p 
//                     className="text-sm text-white/80 mb-3"
//                     initial={{ y: 10, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     {sector.description}
//                   </motion.p>
//                   <motion.div 
//                     className="flex flex-wrap gap-2"
//                     initial={{ y: 10, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     {sector.products.map((product, i) => (
//                       <span 
//                         key={i} 
//                         className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full"
//                       >
//                         {product}
//                       </span>
//                     ))}
//                   </motion.div>
//                 </div>

//                 {/* Counter Badge */}
//                 <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
//                   <span className="text-white text-sm font-medium">{currentIndex + 1} / {sectors.length}</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </AnimatePresence>

//       {/* Swipe Indicators */}
//       <div className="flex justify-center gap-2 mt-4">
//         {sectors.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`transition-all duration-300 rounded-full ${
//               index === currentIndex ? 'w-8 h-2.5' : 'w-2.5 h-2.5 bg-gray-300'
//             }`}
//             style={index === currentIndex ? { backgroundColor: PRIMARY_COLOR } : {}}
//           />
//         ))}
//       </div>

//       {/* Swipe Hint */}
//       <p className="text-center text-xs text-gray-400 mt-3">
//         Swipe to explore more sectors
//       </p>
//     </div>
//   )
// }

// // Main Component
// const SectorsCarousel = () => {
//   const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

//   useEffect(() => {
//     const checkScreenSize = () => {
//       const width = window.innerWidth
//       if (width < 640) {
//         setScreenSize('mobile')
//       } else if (width < 1024) {
//         setScreenSize('tablet')
//       } else {
//         setScreenSize('desktop')
//       }
//     }

//     checkScreenSize()
//     window.addEventListener('resize', checkScreenSize)
//     return () => window.removeEventListener('resize', checkScreenSize)
//   }, [])

//   return (
//     <section className="py-16 md:py-24 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />

//       {/* Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div 
//           className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl"
//           style={{ backgroundColor: `${PRIMARY_COLOR}08` }}
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />
//         <motion.div 
//           className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl"
//           style={{ backgroundColor: `${PRIMARY_COLOR}06` }}
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Badge 
//             className="mb-4 px-4 py-1.5"
//             style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}
//           >
//             Our Sectors
//           </Badge>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             We Are Into <span style={{ color: PRIMARY_COLOR }}>Sectors</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Providing quality veterinary pharmaceutical products for all animal sectors with dedicated healthcare solutions
//           </p>
//         </motion.div>

//         {/* Responsive Carousel */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <AnimatePresence mode="wait">
//             {screenSize === 'mobile' && (
//               <motion.div key="mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//                 <MobileCarousel />
//               </motion.div>
//             )}
//             {screenSize === 'tablet' && (
//               <motion.div key="tablet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//                 <TabletCarousel />
//               </motion.div>
//             )}
//             {screenSize === 'desktop' && (
//               <motion.div key="desktop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//                 <DesktopCarousel />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>

//         {/* Stats */}
//         <motion.div 
//           className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           {[
//             { value: '9+', label: 'Animal Sectors' },
//             { value: '500+', label: 'Products' },
//             { value: '50+', label: 'Countries' }
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
//               whileHover={{ y: -5 }}
//             >
//               <div className="text-2xl md:text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>{stat.value}</div>
//               <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default SectorsCarousel


'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

const sectors = [
  {
    id: 1,
    name: 'Cow',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop',
    description: 'Dairy cattle healthcare solutions',
    products: ['Mastitis Care', 'Nutrition', 'Reproduction']
  },
  {
    id: 2,
    name: 'Buffalo',
    image: 'https://static4.depositphotos.com/1007572/329/i/450/depositphotos_3294853-stock-photo-african-buffalo-cow.jpg?auto=format&fit=crop&w=200&q=80',
    description: 'Complete buffalo health products',
    products: ['Immunity', 'Milk Enhancers', 'Healthcare']
  },
  {
    id: 3,
    name: 'Sheep',
    image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=600&h=400&fit=crop',
    description: 'Comprehensive sheep health products',
    products: ['Dewormers', 'Nutrition', 'Vaccines']
  },
  {
    id: 4,
    name: 'Goat',
    image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=600&h=400&fit=crop',
    description: 'Quality medicines for goat farming',
    products: ['Supplements', 'Antibiotics', 'Minerals']
  },
  {
    id: 5,
    name: "pig",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=200&q=80",
    description: 'Quality medicines for pig farming',
    products: ['Supplements', 'Antibiotics', 'Minerals']

  },

  {
    id: 6,
    name: 'Camel',
    image: 'https://images.openai.com/static-rsc-3/wgTPAYHiydV2tdYRFoHygfchXqkh55kotZWw1lS6cqN2-WRXfFvR5JRv7HsTBTDSKZxXZwhWwtvKaqSf7UJ0zjXNfsCOKAMdRJfrsnfZCaY?purpose=fullsize&v=1',
    description: 'Specialized healthcare solutions for camels',
    products: ['Vaccines', 'Supplements', 'Antibiotics']
  },
  {
    id: 7,
    name: 'Horse',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&h=400&fit=crop',
    description: 'Premium equine health products',
    products: ['Performance', 'Joint Care', 'Wound Care']
  },
  {
    id: 8,
    name: 'Fish',
    image: 'https://images.openai.com/static-rsc-3/ePZ2jqJGd2dXI1SW0K7MvUv-JAoMnVNUO3NG_XZFSEtZh7bViN64v-MAkqoeW06Gv1-ifuq_tuJgiBVyhX1uXCpb5BhwXhoZ0b-RweYSlIM?purpose=fullsize&v=1',
    description: 'Aquaculture health solutions',
    products: ['Probiotics', 'Water Treatment', 'Feed']
  },
  {
    id: 9,
    name: 'Cat',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop',
    description: 'Companion cat pharmaceuticals',
    products: ['Deworming', 'Supplements', 'Skin Care']
  },
  {
    id: 10,
    name: 'Dog',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
    description: 'Dog healthcare products',
    products: ['Vaccines', 'Nutrition', 'Dental Care']
  }
]

// Desktop Carousel Component - Infinite Smooth Scrolling
const DesktopCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const cardWidth = 280
  const gap = 24
  const itemWidth = cardWidth + gap

  // Create tripled array for infinite scroll effect
  const tripledSectors = [...sectors, ...sectors, ...sectors]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        // Reset to beginning seamlessly when reaching end of first set
        if (next >= sectors.length) {
          return 0
        }
        return next
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sectors.length)
  }

  return (
    <div className="relative">
      {/* Gradient Overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r  to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l  to-transparent pointer-events-none" />

      {/* Main Carousel Container */}
      <div
        ref={containerRef}
        className="overflow-hidden py-4"
      >
        <motion.div
          className="flex gap-6"
          animate={{
            x: -currentIndex * itemWidth
          }}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.5
          }}
        >
          {tripledSectors.map((sector, index) => {
            const actualIndex = index % sectors.length
            const isActive = actualIndex === currentIndex

            return (
              <motion.div
                key={`${sector.id}-${index}`}
                className="flex-shrink-0"
                style={{ width: cardWidth }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden py-0 bg-white ${isActive ? 'ring-2 ring-blue-400' : ''}`}>
                  <CardContent className="p-0">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Name Badge */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-lg font-bold text-white">{sector.name}</h3>
                        <p className="text-xs text-white/80 line-clamp-1">{sector.description}</p>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: `${PRIMARY_COLOR}cc` }}
                      >
                        <div className="text-center p-4">
                          <p className="text-white text-sm mb-2">Products:</p>
                          <div className="flex flex-wrap justify-center gap-1">
                            {sector.products.map((product, i) => (
                              <span key={i} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full border-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
          style={{ borderColor: PRIMARY_COLOR }}
        >
          <ChevronLeft className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
        </Button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
          {sectors.map((sector, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? 'w-8 h-2.5 bg-white'
                  : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/70'
                }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full border-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
          style={{ borderColor: PRIMARY_COLOR }}
        >
          <ChevronRight className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
        </Button>

        {/* Auto-play Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="ml-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
        >
          {isAutoPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  )
}

// Tablet Carousel Component - Infinite Smooth Scrolling
const TabletCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Create tripled array for infinite scroll effect
  const tripledSectors = [...sectors, ...sectors, ...sectors]
  const itemWidth = 50 // 50% width for 2 columns

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sectors.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l  to-transparent pointer-events-none" />

      <div className="overflow-hidden py-2">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * itemWidth}%` }}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.5
          }}
        >
          {tripledSectors.map((sector, index) => {
            const actualIndex = index % sectors.length
            const isActive = actualIndex === currentIndex

            return (
              <motion.div
                key={`tablet-${sector.id}-${index}`}
                className="w-1/2 flex-shrink-0 px-2"
                whileHover={{ scale: 1.02 }}
              >
                <Card className={`group border-0 shadow-md hover:shadow-xl transition-all duration-300 py-0 overflow-hidden bg-white ${isActive ? 'ring-2 ring-blue-400' : ''}`}>
                  <CardContent className="p-0">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <h3 className="text-base font-bold text-white">{sector.name}</h3>
                        <p className="text-xs text-white/70">{sector.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1.5 mt-6">
        {sectors.map((sector, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${index === currentIndex ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

// Mobile Carousel Component
const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sectors.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentIndex((prev) => (prev + 1) % sectors.length)
    }
    if (touchStart - touchEnd < -75) {
      setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length)
    }
  }

  const sector = sectors[currentIndex]

  return (
    <div
      className="relative touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="border-0 shadow-xl overflow-hidden py-0 bg-white">
            <CardContent className="p-0">
              {/* Full Width Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${PRIMARY_COLOR}ee 0%, ${PRIMARY_COLOR}80 40%, transparent 100%)` }}
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <motion.h3
                    className="text-2xl font-bold mb-1"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {sector.name}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-white/80 mb-3"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {sector.description}
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {sector.products.map((product, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Counter Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">{currentIndex + 1} / {sectors.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Swipe Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {sectors.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${index === currentIndex ? 'w-8 h-2.5' : 'w-2.5 h-2.5 bg-gray-300'
              }`}
            style={index === currentIndex ? { backgroundColor: PRIMARY_COLOR } : {}}
          />
        ))}
      </div>

      {/* Swipe Hint */}
      <p className="text-center text-xs text-gray-400 mt-3">
        Swipe to explore more sectors
      </p>
    </div>
  )
}

// Main Component
const SectorsCarousel = () => {
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_COLOR}dd 50%, #1e3a5f 100%)` }} />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sectorGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sectorGrid)" />
        </svg>
      </div>

      {/* Animated Wave Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 left-0 right-0 h-[200%] opacity-20"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 50%, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`
          }}
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glowing orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(96,165,250,0.3) 0%, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(147,197,253,0.2) 0%, transparent 70%)`
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/30"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${20 + (i % 5) * 15}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Animal silhouettes pattern */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 opacity-5"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <svg viewBox="0 0 100 100" fill="white">
            <path d="M50 20c-5 0-10 5-10 10v5c0 3 2 5 5 5h10c3 0 5-2 5-5v-5c0-5-5-10-10-10zm-20 25c-3 0-5 2-5 5v20c0 3 2 5 5 5h5l5 15h20l5-15h5c3 0 5-2 5-5v-20c0-3-2-5-5-5h-40z" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 opacity-5"
          animate={{ rotate: [0, -10, 0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <svg viewBox="0 0 100 100" fill="white">
            <ellipse cx="50" cy="60" rx="35" ry="25" />
            <circle cx="30" cy="40" r="15" />
            <ellipse cx="70" cy="35" rx="12" ry="20" />
          </svg>
        </motion.div>
      </div>

      {/* Curved Lines Decoration */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,200 Q400,100 800,200 T1600,200"
          fill="none"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
        <motion.path
          d="M0,400 Q400,300 800,400 T1600,400"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 3, delay: 0.3, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
        <motion.path
          d="M0,600 Q400,500 800,600 T1600,600"
          fill="none"
          stroke="white"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.15 }}
          transition={{ duration: 3, delay: 0.6, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge
            className="mb-4 px-4 py-1.5 bg-white/20 text-white border-white/30 backdrop-blur-sm"
          >
            Our Sectors
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            We Are Into <span className="text-blue-200">Sectors</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Providing quality veterinary pharmaceutical products for all animal sectors with dedicated healthcare solutions
          </p>
        </motion.div>

        {/* Responsive Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {screenSize === 'mobile' && (
              <motion.div key="mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MobileCarousel />
              </motion.div>
            )}
            {screenSize === 'tablet' && (
              <motion.div key="tablet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <TabletCarousel />
              </motion.div>
            )}
            {screenSize === 'desktop' && (
              <motion.div key="desktop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <DesktopCarousel />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { value: '9+', label: 'Animal Sectors' },
            { value: '500+', label: 'Products' },
            { value: '50+', label: 'Countries' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl md:text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SectorsCarousel
