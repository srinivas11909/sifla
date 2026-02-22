// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { ArrowRight, Box, Loader2 } from 'lucide-react'

// const PRIMARY_COLOR = '#243d80'

// // Define Product Interface based on typical usage
// interface Product {
//   _id: string
//   name: string
//   category?: string
//   type?: string
//   image?: string
//   active?: boolean
// }

// export default function FeaturedProductsCarousel() {
//   const [products, setProducts] = useState<Product[]>([])
//   const [loading, setLoading] = useState(true)
//   const carouselRef = useRef<HTMLDivElement>(null)
//   const [carouselWidth, setCarouselWidth] = useState(0)

//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   // Calculate width of the carousel track for infinite loop logic
//   useEffect(() => {
//     if (products.length > 0 && carouselRef.current) {
//       // We calculate the width of the first set of items to know when to loop
//       // Card width is 300px + 24px gap = 324px
//       const cardWidth = 324 
//       setCarouselWidth(cardWidth * products.length)
//     }
//   }, [products])

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('/api/products')
//       const data = await res.json()
//       // Filter active products and take first 10
//       const activeProducts = data.filter((p: Product) => p.active).slice(0, 10)
//       setProducts(activeProducts)
//     } catch (error) {
//       console.error('Error fetching products:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Animation logic for infinite scroll
//   const infiniteScrollVariants = {
//     animate: {
//       x: [0, -carouselWidth],
//       transition: {
//         x: {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 20, // Adjust speed here (seconds)
//           ease: "linear",
//         },
//       },
//     },
//   }

//   return (
//     <section className="py-20 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-12">
//           <div>
//             <span 
//               className="inline-block mb-3 px-4 py-1.5 text-sm font-semibold rounded-full uppercase tracking-wider"
//               style={{ backgroundColor: `${PRIMARY_COLOR}10`, color: PRIMARY_COLOR }}
//             >
//               Featured Selection
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Top Products
//             </h2>
//           </div>
//           <Link 
//             href="/products" 
//             className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300"
//             style={{ color: PRIMARY_COLOR }}
//           >
//             View All Products <ArrowRight className="w-4 h-4" />
//           </Link>
//         </div>

//         {/* Carousel Container */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <Loader2 className="w-10 h-10 animate-spin text-gray-400" />
//           </div>
//         ) : products.length === 0 ? (
//           <div className="text-center py-12 text-gray-500">
//             No active products found.
//           </div>
//         ) : (
//           <div className="relative overflow-hidden" ref={carouselRef}>
//             {/* Gradient Overlays for smooth edges */}
//             <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
//             <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

//             {/* Scrolling Track */}
//             <motion.div 
//               className="flex gap-6"
//               variants={infiniteScrollVariants}
//               animate="animate"
//             >
//               {/* Original Set */}
//               {products.map((product) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
              
//               {/* Duplicate Set for Infinite Illusion */}
//               {products.map((product) => (
//                 <ProductCard key={`dup-${product._id}`} product={product} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// // --- Product Card Sub-Component ---
// const ProductCard = ({ product }: { product: Product }) => (
//   <Link href={`/products/${product._id}`} className="flex-shrink-0 w-[280px] md:w-[300px] group">
//     <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
      
//       {/* Image Area */}
//       <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
//         {product.image ? (
//           <img 
//             src={product.image} 
//             alt={product.name}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center bg-gray-50">
//             <Box className="w-16 h-16 text-gray-200" />
//           </div>
//         )}
        
//         {/* Category Tag */}
//         {product.category && (
//           <span 
//             className="absolute top-3 right-3 px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg"
//             style={{ backgroundColor: PRIMARY_COLOR }}
//           >
//             {product.category}
//           </span>
//         )}
//       </div>

//       {/* Content Area */}
//       <div className="p-5 flex flex-col flex-grow">
//         <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#243d80] transition-colors">
//           {product.name}
//         </h3>
        
//         {product.type && (
//           <p className="text-sm text-gray-500 mb-4">{product.type}</p>
//         )}

//         <div className="mt-auto pt-4 border-t border-gray-50">
//           <span 
//             className="inline-flex items-center text-sm font-semibold group-hover:gap-2 transition-all"
//             style={{ color: PRIMARY_COLOR }}
//           >
//             View Details
//             <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
//           </span>
//         </div>
//       </div>
//     </div>
//   </Link>
// )

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Box, Loader2, ChevronLeft, ChevronRight } from 'lucide-react'

const PRIMARY_COLOR = '#243d80'
const PRIMARY_HOVER = '#eaf1ff'

interface Product {
  _id: string
  name: string
  category?: string
  type?: string
  image?: string
  active?: boolean
}

export default function FeaturedProductsCarousel() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  // Measure the width of the container to calculate constraints
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [products])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      const activeProducts = data.filter((p: Product) => p.active).slice(0, 10)
      setProducts(activeProducts)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  // --- Navigation Logic ---
  
  // Calculate item width based on screen size (matches Tailwind classes)
  const getItemWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 280 + 24 : 300 + 24 // Card width + Gap
    }
    return 324 // Default desktop
  }

  const nextSlide = () => {
    if (products.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    if (products.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  // Calculate animation X position
  // We duplicate the array for infinite illusion, but for button controls, 
  // we calculate position based on currentIndex of the original set.
  // To ensure infinite feel, we map index to position seamlessly.
  
  // For smooth infinite scrolling with buttons, the standard approach is:
  // 1. Animate to index.
  // 2. If we reach the 'clone' index, instantly snap back to the 'real' index.
  
  // Simplified Approach: We render just enough items to fill screen, 
  // and loop the index mathematically. 
  
  const itemWidth = getItemWidth()
  const xPosition = -currentIndex * itemWidth

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden" style={{background: `${PRIMARY_HOVER}`}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <span 
              className="inline-block mb-3 px-4 py-1.5 text-sm font-semibold rounded-full uppercase tracking-wider"
              style={{ backgroundColor: `${PRIMARY_COLOR}10`, color: PRIMARY_COLOR }}
            >
              Featured Selection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Top Products
            </h2>
          </div>
          <Link 
            href="/products" 
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300"
            style={{ color: PRIMARY_COLOR }}
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Carousel Container */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-10 h-10 animate-spin text-gray-400" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No active products found.</div>
        ) : (
          <div className="relative">
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-4 md:ml-2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all border border-gray-100 hover:scale-110"
              aria-label="Previous Product"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-4 md:mr-2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all border border-gray-100 hover:scale-110"
              aria-label="Next Product"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden mx-2 md:mx-8" ref={carouselRef}>
              <motion.div 
                className="flex gap-6"
                animate={{ x: xPosition }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  mass: 1
                }}
                drag="x"
                dragConstraints={{ left: -((products.length) * itemWidth) + width, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  // Simple swipe detection
                  if (offset.x < -50) nextSlide()
                  if (offset.x > 50) prevSlide()
                }}
              >
                {/* Render Products + Duplicate for seamless infinite scroll illusion */}
                {[...products, ...products].map((product, i) => (
                  <ProductCard key={`${product._id}-${i}`} product={product} />
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// --- Product Card Sub-Component ---
const ProductCard = ({ product }: { product: Product }) => (
  <Link href={`/products`} className="flex-shrink-0 w-[280px] md:w-[300px] group">
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
      
      {/* Image Area */}
      <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50">
            <Box className="w-16 h-16 text-gray-200" />
          </div>
        )}
        
        {/* Category Tag */}
        {product.category && (
          <span 
            className="absolute top-3 right-3 px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg"
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            {product.category}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#243d80] transition-colors">
          {product.name}
        </h3>
        
        {product.type && (
          <p className="text-sm text-gray-500 mb-4">{product.type}</p>
        )}

        <div className="mt-auto pt-4 border-t border-gray-50">
          <span 
            className="inline-flex items-center text-sm font-semibold group-hover:gap-2 transition-all"
            style={{ color: PRIMARY_COLOR }}
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
        </div>
      </div>
    </div>
  </Link>
)