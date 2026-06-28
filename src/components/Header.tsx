'use client'

import { useState } from 'react'
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
import { Menu, X, Download, Globe, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import OutletsDialog from '@/components/OutletsDialog'
import EnquiryDialog from '@/components/EnquiryDialog'

const PRIMARY_COLOR = '#243d80'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
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
  const pathname = usePathname()
  const [enquiryDialogOpen, setEnquiryDialogOpen] = useState(false)


  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
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
              <Image
                src="/Siflon.svg"
                alt="Siflon Logo"
                width={45}
                height={45}
                className="h-[79px] w-auto object-contain"
              />
              {/* <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <Beaker className="w-6 h-6 text-white" />
            </div> */}
              {/* <div>
              <span className="text-xl font-bold text-gray-900">Siflon </span>
              <p className="text-xs text-gray-500 -mt-1">Drugs & Pharmaceuticals Pvt Ltd</p>
            </div> */}
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
              {/* <Link href="/contact">
              <Button
                style={{ backgroundColor: PRIMARY_COLOR }}
                className="hover:opacity-90"
              >
                Get Quote
              </Button>
            </Link> */}
              {/* Action Buttons */}
              <div className="ml-4 flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-[#243d80] hover:text-[#243d80]"
                    >
                      <Globe className="h-4 w-4" />
                      Our Networks
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Our Companies</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {networkLinks.map((link) => (
                      <DropdownMenuItem key={link.href} asChild>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm transition hover:bg-slate-100"
                        >
                          <span>{link.name}</span>
                          <span className="text-xs text-slate-400">↗</span>
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <OutletsDialog />

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
                  <div className="rounded-lg border border-slate-200 p-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Globe className="h-4 w-4" style={{ color: PRIMARY_COLOR }} />
                      <span>Our Networks</span>
                    </div>
                    <div className="mt-2 flex flex-col gap-2">
                      {networkLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:border-[#243d80] hover:text-[#243d80]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
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
