'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  LayoutDashboard, 
  Image, 
  FileText, 
  Package, 
  LogOut, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const PRIMARY_COLOR = '#243d80'

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Hero Slides', href: '/admin/hero-slides', icon: Image },
  { name: 'About Content', href: '/admin/about', icon: FileText },
  { name: 'Products', href: '/admin/products', icon: Package },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      // Skip auth check for login page
      if (pathname === '/admin/login') {
        setLoading(false)
        return
      }

      try {
        const res = await fetch('/api/auth/check')
        const data = await res.json()
        
        if (data.authenticated) {
          setAuthenticated(true)
        } else {
          router.push('/admin/login')
        }
      } catch {
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [pathname, router])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  // Loading state
  if (loading && pathname !== '/admin/login') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: PRIMARY_COLOR }} />
      </div>
    )
  }

  // Login page - no layout
  if (pathname === '/admin/login') {
    return children
  }

  // Not authenticated
  if (!authenticated && pathname !== '/admin/login') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 256 : 80 }}
        className="hidden md:flex flex-col bg-white shadow-lg fixed left-0 top-0 h-full z-40"
      >
        {/* Logo */}
        <div 
          className="h-16 flex items-center justify-center border-b"
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          {sidebarOpen ? (
            <span className="text-xl font-bold text-white">Siflon Admin</span>
          ) : (
            <span className="text-xl font-bold text-white">SF</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/admin' && pathname.startsWith(item.href))
            
            return (
              <Link key={item.name} href={item.href}>
                <Card 
                  className={`flex items-center gap-3 p-3 cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-blue-50 border-blue-200' 
                      : 'hover:bg-gray-50'
                  }`}
                  style={isActive ? { borderColor: PRIMARY_COLOR } : {}}
                >
                  <item.icon 
                    className="w-5 h-5 flex-shrink-0" 
                    style={{ color: isActive ? PRIMARY_COLOR : '#6b7280' }} 
                  />
                  {sidebarOpen && (
                    <span 
                      className="font-medium"
                      style={{ color: isActive ? PRIMARY_COLOR : '#374151' }}
                    >
                      {item.name}
                    </span>
                  )}
                  {isActive && sidebarOpen && (
                    <ChevronRight className="w-4 h-4 ml-auto" style={{ color: PRIMARY_COLOR }} />
                  )}
                </Card>
              </Link>
            )
          })}
        </nav>

        {/* Toggle & Logout */}
        <div className="p-4 border-t space-y-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-center"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-center text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            {sidebarOpen && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </motion.aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white shadow z-50 flex items-center justify-between px-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <span className="font-bold" style={{ color: PRIMARY_COLOR }}>Siflon Admin</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-red-600"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="md:hidden fixed inset-0 top-16 z-40 bg-white"
          >
            <nav className="p-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/admin' && pathname.startsWith(item.href))
                
                return (
                  <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    <Card 
                      className={`flex items-center gap-3 p-3 cursor-pointer ${
                        isActive ? 'bg-blue-50' : ''
                      }`}
                    >
                      <item.icon 
                        className="w-5 h-5" 
                        style={{ color: isActive ? PRIMARY_COLOR : '#6b7280' }} 
                      />
                      <span style={{ color: isActive ? PRIMARY_COLOR : '#374151' }}>
                        {item.name}
                      </span>
                    </Card>
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main 
        className="flex-1 p-6 pt-20 md:pt-6 transition-all"
        style={{ marginLeft: sidebarOpen ? 256 : 80 }}
      >
        {children}
      </main>
    </div>
  )
}
