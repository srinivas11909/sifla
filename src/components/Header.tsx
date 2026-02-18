'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, Beaker } from 'lucide-react'
import { motion } from 'framer-motion'
// import sifilonlogo from "@public/sifilonlogo"
//import Image from 'next/image'

const PRIMARY_COLOR = '#243d80'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Quality', href: '/quality' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
          {/* <Image 
              src="/siflonlogo.png" 
              alt="Siflon Logo" 
              width={45} 
              height={45}
              className="h-10 w-auto object-contain"
            /> */}
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <Beaker className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Siflon </span>
              <p className="text-xs text-gray-500 -mt-1">Drugs & Pharmaceuticals Pvt Ltd</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${isActive(item.href)
                    ? 'font-semibold'
                    : 'text-gray-600 hover:opacity-80'
                  }`}
                style={{ color: isActive(item.href) ? PRIMARY_COLOR : undefined }}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button
                style={{ backgroundColor: PRIMARY_COLOR }}
                className="hover:opacity-90"
              >
                Get Quote
              </Button>
            </Link>
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${isActive(item.href)
                      ? 'font-semibold'
                      : 'text-gray-600 hover:opacity-80'
                    }`}
                  style={{ color: isActive(item.href) ? PRIMARY_COLOR : undefined }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  className="w-full"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
