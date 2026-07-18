'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu, X, Download, Globe, ChevronDown, ChevronRight, Droplets, Package, Wheat, Pill, Syringe } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import OutletsDialog from '@/components/OutletsDialog'
import EnquiryDialog from '@/components/EnquiryDialog'

const PRIMARY_COLOR = '#243d80'

const productCategories = [
  { id: 'oralLiquids', name: 'Oral Liquids', icon: Droplets },
  { id: 'dryPowders', name: 'Dry Powders', icon: Package },
  { id: 'feedSupplements', name: 'Feed Supplements', icon: Wheat },
  { id: 'tabletsBolus', name: 'Tablets / Bolus', icon: Pill },
  { id: 'injectables', name: 'Injectables', icon: Syringe },
]

const productTypesByCategory: Record<string, Array<{ id: string; name: string }>> = {
  oralLiquids: [
    { id: 'anthelmintics', name: 'Anthelmintics' },
    { id: 'antibiotics', name: 'Antibiotics' },
  ],
  dryPowders: [
    { id: 'anthelmintics', name: 'Anthelmintics' },
    { id: 'antibiotics', name: 'Antibiotics' },
  ],
  feedSupplements: [{ id: 'anthelmintics', name: 'Anthelmintics' }],
  injectables: [{ id: 'anthelmintics', name: 'Anthelmintics' }],
  tabletsBolus: [],
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Quality', href: '/quality' },
  { name: 'Global Presence', href: '/global-presence' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

const networkLinks = [
  { name: 'Siflon Polymers', href: 'https://siflonpolymers.com' },
  { name: 'Siflon Drugs', href: 'https://siflondrugs.com' },
  { name: 'Siflon Pipes', href: 'https://siflonpipes.com' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [hoveredProductCategory, setHoveredProductCategory] = useState<string | null>(null)
  const pathname = usePathname()
  const [enquiryDialogOpen, setEnquiryDialogOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setProductsDropdownOpen(false)
    setHoveredProductCategory(null)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const handleProductsMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setProductsDropdownOpen(true)
  }

  const handleProductsMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false)
      setHoveredProductCategory(null)
    }, 150)
  }

  const closeProductsMenu = () => {
    setProductsDropdownOpen(false)
    setHoveredProductCategory(null)
  }


  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm"
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Siflon.svg"
                alt="Siflon Logo"
                width={45}
                height={45}
                className="h-[79px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
              {/* Home */}
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${isActive('/')
                  ? 'font-semibold'
                  : 'text-gray-600 hover:opacity-80'
                  }`}
                style={{ color: isActive('/') ? PRIMARY_COLOR : undefined }}
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors ${isActive('/about')
                  ? 'font-semibold'
                  : 'text-gray-600 hover:opacity-80'
                  }`}
                style={{ color: isActive('/about') ? PRIMARY_COLOR : undefined }}
              >
                About
              </Link>

              {/* Products Dropdown - Opens on Hover */}
              <div
                className="relative"
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                <button className={`text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${isActive('/products')
                  ? 'font-semibold'
                  : 'text-gray-600 hover:opacity-80'
                  }`}
                  style={{ color: isActive('/products') ? PRIMARY_COLOR : undefined }}
                >
                  Products
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {productsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-0 z-50"
                  >
                    <div className="w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                      {productCategories.map((category) => {
                        const IconComponent = category.icon
                        const isHovered = hoveredProductCategory === category.id
                        const categoryProductTypes = productTypesByCategory[category.id] || []

                        if (categoryProductTypes.length === 0) {
                          return (
                            <Link key={category.id} href={`/products?category=${category.id}`}  onClick={closeProductsMenu}>
                              <div
                                onMouseEnter={() => setHoveredProductCategory(category.id)}
                                onMouseLeave={() => setHoveredProductCategory(null)}
                                className={`relative flex items-center gap-3 cursor-pointer py-2.5 px-4 transition-colors ${isHovered ? 'bg-[#243d80] text-white' : 'text-gray-700 hover:bg-[#243d80] hover:text-white'
                                  }`}
                              >
                                <IconComponent className="h-4 w-4" style={{ color: isHovered ? '#fff' : PRIMARY_COLOR }} />
                                <span className="text-sm flex-1">{category.name}</span>
                              </div>
                            </Link>
                          )
                        }

                        return (
                          <div
                            key={category.id}
                            onMouseEnter={() => setHoveredProductCategory(category.id)}
                            onMouseLeave={() => setHoveredProductCategory(null)}
                            className={`relative flex items-center gap-3 cursor-pointer py-2.5 px-4 transition-colors ${isHovered ? 'bg-[#243d80] text-white' : 'text-gray-700 hover:bg-[#243d80] hover:text-white'
                              }`}
                          >
                            <IconComponent className="h-4 w-4" style={{ color: isHovered ? '#fff' : PRIMARY_COLOR }} />
                            <span className="text-sm flex-1">{category.name}</span>
                            <ChevronRight className={`h-4 w-4 ${isHovered ? 'text-white' : 'text-gray-400'}`} />

                            {isHovered && (
                              <div className="absolute left-full top-0 w-48 bg-white rounded-r-lg shadow-xl border border-l-0 border-gray-100 py-0 text-gray-700">
                                {categoryProductTypes.map((type) => (
                                  <Link
                                    key={type.id}
                                    href={`/products?category=${category.id}&type=${type.id}`}
                                    onClick={closeProductsMenu}
                                  >
                                    <div className="cursor-pointer py-2.5 px-4 hover:bg-[#243d80] hover:text-white transition-colors text-sm">
                                      {type.name}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      })}
                      <div className="border-t border-gray-100 my-2" />
                      <Link href="/products">
                        <div className="cursor-pointer py-2.5 px-4 hover:bg-[#243d80] hover:text-white transition-colors font-medium text-sm text-gray-700">
                          View All Products
                        </div>
                      </Link>
                    </div>

                  </motion.div>
                )}
              </div>

              {/* Quality */}
              <Link
                href="/quality"
                className={`text-sm font-medium transition-colors ${isActive('/quality')
                  ? 'font-semibold'
                  : 'text-gray-600 hover:opacity-80'
                  }`}
                style={{ color: isActive('/quality') ? PRIMARY_COLOR : undefined }}
              >
                Quality
              </Link>

              {/* Global Presence */}
              <Link
                href="/global-presence"
                className={`text-sm font-medium transition-colors ${isActive('/global-presence')
                  ? 'font-semibold'
                  : 'text-gray-600 hover:opacity-80'
                  }`}
                style={{ color: isActive('/global-presence') ? PRIMARY_COLOR : undefined }}
              >
                Global Presence
              </Link>

              {/* Careers */}
              <Link
                href="/careers"
                className={`text-sm font-medium transition-colors ${isActive('/careers')
                  ? 'font-semibold'
                  : 'text-gray-600 hover:opacity-80'
                  }`}
                style={{ color: isActive('/careers') ? PRIMARY_COLOR : undefined }}
              >
                Careers
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors ${isActive('/contact')
                  ? 'font-semibold'
                  : 'text-gray-600 hover:opacity-80'
                  }`}
                style={{ color: isActive('/contact') ? PRIMARY_COLOR : undefined }}
              >
                Contact
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <a href="/siflonpharma-brochure.pdf" download>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}
                >
                  <Download className="w-4 h-4" />
                  Brochure
                </Button>
              </a>

              <Button
                size="sm"
                style={{ backgroundColor: PRIMARY_COLOR }}
                className="hover:opacity-90"
                onClick={() => setEnquiryDialogOpen(true)}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-4">
                {/* Home */}
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors ${isActive('/')
                    ? 'font-semibold'
                    : 'text-gray-600 hover:opacity-80'
                    }`}
                  style={{ color: isActive('/') ? PRIMARY_COLOR : undefined }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* About */}
                <Link
                  href="/about"
                  className={`text-sm font-medium transition-colors ${isActive('/about')
                    ? 'font-semibold'
                    : 'text-gray-600 hover:opacity-80'
                    }`}
                  style={{ color: isActive('/about') ? PRIMARY_COLOR : undefined }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>

                {/* Mobile Products Submenu */}
                <div className="border-t pt-3 mt-2">
                  <span className="text-sm font-medium text-gray-700 block mb-2">Products</span>
                  <div className="flex flex-col gap-2 ml-3">
                    {productCategories.map((category) => {
                      const IconComponent = category.icon
                      const categoryProductTypes = productTypesByCategory[category.id] || []
                      return (
                        <div key={category.id} className="flex flex-col gap-2">
                          <Link
                            href={`/products?category=${category.id}`}
                            className="text-sm text-gray-600 hover:opacity-80 flex items-center gap-2 transition-colors"
                            style={{ color: isActive('/products') ? PRIMARY_COLOR : undefined }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <IconComponent className="h-4 w-4" />
                            {category.name}
                          </Link>
                          {categoryProductTypes.length > 0 && (
                            <div className="ml-6 flex flex-col gap-1.5">
                              {categoryProductTypes.map((type) => (
                                <Link
                                  key={type.id}
                                  href={`/products?category=${category.id}&type=${type.id}`}
                                  className="text-xs text-gray-500 hover:opacity-80 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {type.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                    <Link
                      href="/products"
                      className="text-sm font-medium mt-2 transition-colors"
                      style={{ color: PRIMARY_COLOR }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All Products
                    </Link>
                  </div>
                </div>

                {/* Quality */}
                <Link
                  href="/quality"
                  className={`text-sm font-medium transition-colors ${isActive('/quality')
                    ? 'font-semibold'
                    : 'text-gray-600 hover:opacity-80'
                    }`}
                  style={{ color: isActive('/quality') ? PRIMARY_COLOR : undefined }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Quality
                </Link>

                {/* Global Presence */}
                <Link
                  href="/global-presence"
                  className={`text-sm font-medium transition-colors ${isActive('/global-presence')
                    ? 'font-semibold'
                    : 'text-gray-600 hover:opacity-80'
                    }`}
                  style={{ color: isActive('/global-presence') ? PRIMARY_COLOR : undefined }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Global Presence
                </Link>

                {/* Careers */}
                <Link
                  href="/careers"
                  className={`text-sm font-medium transition-colors ${isActive('/careers')
                    ? 'font-semibold'
                    : 'text-gray-600 hover:opacity-80'
                    }`}
                  style={{ color: isActive('/careers') ? PRIMARY_COLOR : undefined }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  className={`text-sm font-medium transition-colors ${isActive('/contact')
                    ? 'font-semibold'
                    : 'text-gray-600 hover:opacity-80'
                    }`}
                  style={{ color: isActive('/contact') ? PRIMARY_COLOR : undefined }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                {/* <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  className="w-full"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  Get Quote
                </Button>
              </Link> */}
                {/* Mobile Action Buttons */}
                <div className="mt-2 flex flex-col gap-2 border-t pt-3">
                  <div className="rounded-3xl bg-gradient-to-r from-red-500 via-lime-500 to-blue-500 p-[1px]">
                    <div className="rounded-3xl bg-white/95 p-3">
                      <div className="mt-3 flex flex-col gap-2">
                        {networkLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-gradient-to-r from-red-500 via-lime-500 to-blue-500 p-[1px] animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="flex w-full items-center justify-center rounded-full bg-white/95 px-4 py-2 text-sm text-slate-700 transition hover:text-[#243d80]">
                              {link.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
                    <span className="text-sm text-gray-600">Our Outlets</span>
                    <span className="text-xs text-gray-400">(see below)</span>
                  </div>

                  <Button
                    className="w-full"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setEnquiryDialogOpen(true)
                    }}
                  >
                    Get Quote
                  </Button>

                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      className="w-full"
                      style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>
      {/* Enquiry Dialog */}
      <EnquiryDialog open={enquiryDialogOpen} onOpenChange={setEnquiryDialogOpen} />
    </>
  )
}
