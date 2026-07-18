'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ChevronRight, Droplets, Package, Wheat, Pill, Syringe,
  Shield, Award, Star, ArrowRight,
  Beaker, TestTube, Microscope, Zap,
  Search, Image as ImageIcon, ChevronLeft, X,
  CheckCircle
} from 'lucide-react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingSocialLinks from '@/components/FloatingSocialLinks'

const PRIMARY_COLOR = '#243d80'
const PRIMARY_HOVER = '#1a2d5c'
const ITEMS_PER_PAGE = 12
const DEFAULT_PRODUCT_TYPE = 'anthelmintics'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
    transition: { duration: 0.4, ease: 'easeOut' }
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

// Category configuration
const CATEGORIES = [
  {
    id: 'oralLiquids',
    name: 'Oral Liquids',
    icon: Droplets,
    color: '#3B82F6',
    description: 'Premium liquid formulations for easy administration and rapid absorption'
  },
  {
    id: 'dryPowders',
    name: 'Dry Powders',
    icon: Package,
    color: '#8B5CF6',
    description: 'Stable powder formulations for convenient storage and mixing'
  },
  {
    id: 'feedSupplements',
    name: 'Feed Supplements',
    icon: Wheat,
    color: '#22C55E',
    description: 'Nutritional supplements to enhance feed quality and animal health'
  },
  {
    id: 'tabletsBolus',
    name: 'Tablets / Bolus',
    icon: Pill,
    color: '#EC4899',
    description: 'Precise dosing with convenient tablet and bolus formulations'
  },
  {
    id: 'injectables',
    name: 'Injectables',
    icon: Syringe,
    color: '#EF4444',
    description: 'Professional-grade injectable solutions for veterinary use'
  },
]

// Map category display names to IDs for filtering
const getCategoryId = (categoryName: string): string => {
  const categoryLower = categoryName?.toLowerCase().trim() || ''
  
  // Remove extra spaces and normalize
  const normalized = categoryLower.replace(/\s+/g, ' ').replace(/\s*\/\s*/g, '/')
  
  const mapping: Record<string, string> = {
    // Direct matches
    'oralliquids': 'oralLiquids',
    'oral liquids': 'oralLiquids',
    'drypowders': 'dryPowders',
    'dry powders': 'dryPowders',
    'feedsupplements': 'feedSupplements',
    'feed supplements': 'feedSupplements',
    'tablets/bolus': 'tabletsBolus',
    'tablets / bolus': 'tabletsBolus',
    'tablets bolus': 'tabletsBolus',
    'tabletbolus': 'tabletsBolus',
    'injectables': 'injectables',
    
    // Additional variations
    'oral': 'oralLiquids',
    'powder': 'dryPowders',
    'powders': 'dryPowders',
    'feed': 'feedSupplements',
    'supplements': 'feedSupplements',
    'tablets': 'tabletsBolus',
    'bolus': 'tabletsBolus',
    'injection': 'injectables',
  }
  
  // Try exact matches first
  if (mapping[normalized]) {
    return mapping[normalized]
  }
  
  // Try direct mapping with normalized input
  if (mapping[categoryLower]) {
    return mapping[categoryLower]
  }
  
  // Fallback: return as-is (might be already a valid ID)
  return categoryLower
}

interface Product {
  id: string
  name: string
  productType: string
  composition: string
  packSize: string
  image: string
  indications: string
  dosage: string
  category: string
  sectors: string
  featured: boolean
  active: boolean
}

// Globe icon component
const Globe = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)

// Target icon component
const Target = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

// Stats data
const stats = [
  { icon: Beaker, value: '500+', label: 'Products', color: PRIMARY_COLOR },
  { icon: Award, value: '30+', label: 'Years Experience', color: '#22C55E' },
  { icon: Globe, value: '50+', label: 'Countries', color: '#8B5CF6' },
  { icon: Shield, value: '6', label: 'Certifications', color: '#EF4444' },
]

// Product Skeleton Loader
function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-56 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-5 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg w-4/5">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{
                x: ['100%', '-100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg w-2/3">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{
                x: ['100%', '-100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
                delay: 0.2,
              }}
            />
          </div>
        </div>

        {/* Type Badge Skeleton */}
        <div className="h-6 w-20 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />

        {/* Description Skeleton */}
        <div className="space-y-2 pt-2">
          <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded w-full">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{
                x: ['100%', '-100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
                delay: 0.1,
              }}
            />
          </div>
          <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded w-5/6" />
        </div>
      </div>
    </div>
  )
}

export default function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  const productTypeFromUrl = searchParams.get('type')
  
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl || 'all')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedProductType, setSelectedProductType] = useState<string>(productTypeFromUrl || 'all')

  // Update active filters when URL changes
  useEffect(() => {
    setActiveCategory(categoryFromUrl || 'all')
    setSelectedProductType(productTypeFromUrl || 'all')
    setCurrentPage(1)
  }, [categoryFromUrl, productTypeFromUrl])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      const activeProducts = data.filter((p: Product) => p.active)
      
      // Debug logging
      console.log('Fetched products:', activeProducts.length)
      if (activeProducts.length > 0) {
        console.log('Sample product:', {
          name: activeProducts[0].name,
          category: activeProducts[0].category,
          productType: activeProducts[0].productType,
          categoryId: getCategoryId(activeProducts[0].category)
        })
        console.log('All categories in DB:', [...new Set(activeProducts.map(p => p.category))])
      }
      
      setProducts(activeProducts)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  // Filter products by category and search
  const filteredProducts = products.filter(product => {
    // Category matching - more flexible
    let matchesCategory = false
    if (activeCategory === 'all') {
      matchesCategory = true
    } else {
      const productCategoryId = getCategoryId(product.category)
      const activeCategoryLower = activeCategory.toLowerCase()
      const productCategoryLower = productCategoryId.toLowerCase()
      
      // Debug log
      if (products.length > 0 && Math.random() < 0.01) {
        console.log('Category match check:', {
          activeCategory,
          productCategory: product.category,
          productCategoryId,
          match: productCategoryLower === activeCategoryLower
        })
      }
      
      matchesCategory = productCategoryLower === activeCategoryLower
    }
    
    const matchesProductType = activeCategory === 'all' || selectedProductType === 'all' || product.productType === selectedProductType

    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.productType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesProductType && matchesSearch
  })

  // Get unique product types for the selected category
  const productTypesInCategory = activeCategory !== 'all'
    ? [...new Set(products.filter(p => getCategoryId(p.category) === activeCategory).map(p => p.productType))].filter(Boolean)
    : []
  const productTypesKey = productTypesInCategory.join('|')

  useEffect(() => {
    if (activeCategory === 'all' || productTypeFromUrl) return

    if (productTypesInCategory.length === 0) {
      if (selectedProductType !== 'all') {
        setSelectedProductType('all')
      }
      return
    }

    if (productTypesInCategory.includes(selectedProductType)) return

    setSelectedProductType(
      productTypesInCategory.includes(DEFAULT_PRODUCT_TYPE)
        ? DEFAULT_PRODUCT_TYPE
        : productTypesInCategory[0]
    )
  }, [activeCategory, productTypeFromUrl, productTypesKey, selectedProductType])

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, selectedProductType, searchQuery])

  // Get current category info
  const currentCategory = CATEGORIES.find(c => c.id === activeCategory)

  // Pagination controls
  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
    window.scrollTo({ top: document.getElementById('products')?.offsetTop || 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating Social Links */}
      <FloatingSocialLinks />

      {/* Header */}
      <Header />

      {/* Products Catalog Section */}
      <section id="products" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-gray-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            <motion.button
              onClick={() => {
                setActiveCategory('all')
                setSelectedProductType('all')
              }}
              className={`flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === 'all'
                ? 'text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                }`}
              style={{
                backgroundColor: activeCategory === 'all' ? PRIMARY_COLOR : undefined,
                boxShadow: activeCategory === 'all' ? `0 10px 30px ${PRIMARY_COLOR}40` : undefined
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Package className="w-4 h-4 md:w-5 md:h-5" />
              <span>All Products</span>
            </motion.button>
            {CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setSelectedProductType('all')
                }}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                  }`}
                style={{
                  backgroundColor: activeCategory === category.id ? category.color : undefined,
                  boxShadow: activeCategory === category.id ? `0 10px 30px ${category.color}40` : undefined
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <category.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>

          {/* Product Type Sub-Tabs - Show when category is selected */}
          {activeCategory !== 'all' && productTypesInCategory.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-2 mb-6 py-3 px-4 bg-gray-50 rounded-xl mx-auto max-w-3xl"
            >
              {productTypesInCategory.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedProductType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 uppercase ${selectedProductType === type
                    ? 'text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                    }`}
                  style={{
                    backgroundColor: selectedProductType === type ? currentCategory?.color : undefined,
                  }}
                >
                  {type}
                </button>
              ))}
            </motion.div>
          )}

          {/* Category Description */}
          {currentCategory && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-gray-500 mb-8"
            >
              {currentCategory.description}
            </motion.p>
          )}

          {/* Products Count */}
          <div className="text-center mb-6">
            <span className="text-sm text-gray-500">
              Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              {activeCategory !== 'all' && ` in ${CATEGORIES.find(c => c.id === activeCategory)?.name}`}
            </span>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <Card className="max-w-lg mx-auto">
              <CardContent className="p-8 text-center">
                <Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No Products Found</h3>
                <p className="text-gray-500">
                  {searchQuery
                    ? 'Try adjusting your search query'
                    : 'No products available in this category yet'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              <motion.div
                key={`${activeCategory}-${currentPage}`}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence mode="popLayout">
                  {paginatedProducts.map((product) => {
                    const category = CATEGORIES.find(c => c.id === product.category)
                    const packSizes = product.packSize ? JSON.parse(product.packSize) : []

                    return (
                      <motion.div
                        key={product.id}
                        layout
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ y: -5 }}
                        className="h-full cursor-pointer"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group rounded-xl py-0">
                          {/* Product Image */}
                          <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden p-6">
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <ImageIcon className="w-16 h-16 text-gray-300" />
                              </div>
                            )}

                            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                            <div className="pointer-events-none absolute inset-x-5 bottom-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-md">
                                <div className="flex items-start gap-3">
                                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                                    {category?.icon ? (
                                      <category.icon className="h-5 w-5" />
                                    ) : (
                                      <ImageIcon className="h-5 w-5" />
                                    )}
                                  </div>

                                  <div className="min-w-0">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300">
                                      {category?.name || 'Category'}
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-white line-clamp-1">
                                      {product.productType}
                                    </p>
                                    {category?.description && (
                                      <p className="mt-2 text-xs leading-5 text-slate-300 line-clamp-2">
                                        {category.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {product.featured && (
                              <div className="absolute top-3 left-3">
                                <Badge className="bg-yellow-500 text-white border-0 shadow-md">
                                  <Star className="w-3 h-3 mr-1 fill-current" />
                                  Featured
                                </Badge>
                              </div>
                            )}
                            {category && (
                              <div className="absolute top-3 right-3">
                                <Badge
                                  variant="secondary"
                                  className="shadow-md text-white border-0 uppercase"
                                  style={{ backgroundColor: category.color }}
                                >
                                  {category.name.split(' ')[0]}
                                </Badge>
                              </div>
                            )}
                          </div>

                          <CardContent className="p-5">
                            {/* Product Name */}
                            <h3 className="text-base font-bold text-gray-900 mb-1.5 line-clamp-2">
                              {product.name}
                            </h3>

                            {/* Product Type (Category) */}
                            <p className="text-xs text-gray-500 mb-3 line-clamp-1 uppercase">{product.productType}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  className="flex items-center justify-center gap-2 mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Previous Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="h-10 w-10"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {/* First page */}
                    {currentPage > 3 && (
                      <>
                        <Button
                          variant={currentPage === 1 ? 'default' : 'outline'}
                          size="icon"
                          onClick={() => goToPage(1)}
                          className="h-10 w-10"
                          style={currentPage === 1 ? { backgroundColor: PRIMARY_COLOR } : {}}
                        >
                          1
                        </Button>
                        {currentPage > 4 && (
                          <span className="px-2 text-gray-400">...</span>
                        )}
                      </>
                    )}

                    {/* Pages around current */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(page => {
                        if (totalPages <= 5) return true
                        if (page === 1 || page === totalPages) return false
                        return Math.abs(page - currentPage) <= 1
                      })
                      .map(page => (
                        <Button
                          key={page}
                          variant={currentPage === page ? 'default' : 'outline'}
                          size="icon"
                          onClick={() => goToPage(page)}
                          className="h-10 w-10"
                          style={currentPage === page ? { backgroundColor: PRIMARY_COLOR } : {}}
                        >
                          {page}
                        </Button>
                      ))}

                    {/* Last page */}
                    {currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && (
                          <span className="px-2 text-gray-400">...</span>
                        )}
                        <Button
                          variant={currentPage === totalPages ? 'default' : 'outline'}
                          size="icon"
                          onClick={() => goToPage(totalPages)}
                          className="h-10 w-10"
                          style={currentPage === totalPages ? { backgroundColor: PRIMARY_COLOR } : {}}
                        >
                          {totalPages}
                        </Button>
                      </>
                    )}
                  </div>

                  {/* Next Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="h-10 w-10"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Product Detail Dialog */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="flex flex-col md:flex-row h-full max-h-[92vh] overflow-hidden">
                {/* Image Section */}
                <div className="md:w-2/5 relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 md:p-12 overflow-y-auto">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {selectedProduct.image ? (
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <ImageIcon className="w-24 h-24 text-gray-300" />
                    )}
                  </div>
                  {/* Featured Badge */}
                  {selectedProduct.featured && (
                    <div className="absolute top-8 left-8">
                      <Badge className="bg-yellow-500 text-white border-0 shadow-lg">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 flex flex-col overflow-y-auto">
                  {/* Header with Category */}
                  <div className="px-8 md:px-10 pt-8 md:pt-10 pb-6 border-b border-gray-100">
                    {(() => {
                      const category = CATEGORIES.find(c => c.id === selectedProduct.category)
                      return category ? (
                        <Badge
                          className="mb-4 text-white font-medium "
                          style={{ backgroundColor: category.color }}
                        >
                          {category.name}
                        </Badge>
                      ) : null
                    })()}

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-sm text-gray-500 uppercase">{selectedProduct.productType}</p>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 px-8 md:px-10 py-8 space-y-8 overflow-y-auto">
                    {/* Composition */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                        Composition
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {selectedProduct.composition}
                      </p>
                    </div>

                    {/* Pack Sizes */}
                    {selectedProduct.packSize && JSON.parse(selectedProduct.packSize).length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                          Available Pack Sizes
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {JSON.parse(selectedProduct.packSize).map((size: string) => {
                            const category = CATEGORIES.find(c => c.id === selectedProduct.category)
                            return (
                              <Badge
                                key={size}
                                className="px-4 py-2 text-sm font-semibold"
                                style={{
                                  borderColor: category?.color || PRIMARY_COLOR,
                                  color: category?.color || PRIMARY_COLOR,
                                  backgroundColor: `${category?.color || PRIMARY_COLOR}10`,
                                  border: `1.5px solid ${category?.color || PRIMARY_COLOR}`
                                }}
                                variant="outline"
                              >
                                {size}
                              </Badge>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Indications */}
                    {selectedProduct.indications && (
                      <div>
                        <h4 className="text-xs font-bold text-black uppercase tracking-widest mb-3">
                          Indications
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-base">
                          {selectedProduct.indications}
                        </p>
                      </div>
                    )}

                    {/* Dosage */}
                    {selectedProduct.dosage && (
                      <div>
                        <h4 className="text-xs font-bold text-black uppercase tracking-widest mb-3">
                          Dosage
                        </h4>
                        <div className="text-gray-700 leading-relaxed text-base space-y-2">
                          {selectedProduct.dosage.split('\n').map((line: string, idx: number) => {
                            const colonIndex = line.indexOf(':')
                            if (colonIndex === -1) {
                              return <p key={idx}>{line}</p>
                            }
                            const boldPart = line.substring(0, colonIndex)
                            const normalPart = line.substring(colonIndex)
                            return (
                              <p key={idx}>
                                <span className="font-bold">{boldPart}</span>
                                {normalPart}
                              </p>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Sectors */}
                    {selectedProduct.sectors && JSON.parse(selectedProduct.sectors).length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                          Suitable For
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {JSON.parse(selectedProduct.sectors).map((sector: string) => (
                            <Badge key={sector} variant="secondary" className="text-xs">
                              {sector}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer CTA */}
                  <div className="px-8 md:px-10 py-6 border-t border-gray-100 bg-gray-50 flex gap-3">
                    <Link href="/contact" className="flex-1">
                      <Button size="lg" className="w-full text-white" style={{ backgroundColor: PRIMARY_COLOR }}>
                        Request Quote
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="flex-1" onClick={() => setSelectedProduct(null)}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
