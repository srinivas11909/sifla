'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Image, FileText, Package, TrendingUp, Plus } from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

interface Stats {
  heroSlides: number
  products: number
  milestones: number
  aboutSections: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    heroSlides: 0,
    products: 0,
    milestones: 0,
    aboutSections: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [slidesRes, productsRes, milestonesRes, aboutRes] = await Promise.all([
          fetch('/api/hero-slides'),
          fetch('/api/products'),
          fetch('/api/milestones'),
          fetch('/api/about-content'),
        ])

        const slides = await slidesRes.json()
        const products = await productsRes.json()
        const milestones = await milestonesRes.json()
        const about = await aboutRes.json()

        setStats({
          heroSlides: slides.length,
          products: products.length,
          milestones: milestones.length,
          aboutSections: about.length,
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }

    fetchStats()
  }, [])

  const quickActions = [
    { name: 'Add Hero Slide', href: '/admin/hero-slides', icon: Image, color: '#3b82f6' },
    { name: 'Edit About Page', href: '/admin/about', icon: FileText, color: '#10b981' },
    { name: 'Add Product', href: '/admin/products', icon: Package, color: '#f59e0b' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to the Siflon Drugs & Pharmaceuticals admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Hero Slides</p>
                <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
                  {stats.heroSlides}
                </p>
              </div>
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#dbeafe' }}
              >
                <Image className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Products</p>
                <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
                  {stats.products}
                </p>
              </div>
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#fef3c7' }}
              >
                <Package className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Milestones</p>
                <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
                  {stats.milestones}
                </p>
              </div>
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#dcfce7' }}
              >
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">About Sections</p>
                <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
                  {stats.aboutSections}
                </p>
              </div>
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#e0e7ff' }}
              >
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action) => (
              <Link key={action.name} href={action.href}>
                <Card className="hover:shadow-md transition-all cursor-pointer border-0 bg-gray-50 hover:bg-gray-100">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${action.color}20` }}
                    >
                      <action.icon className="w-5 h-5" style={{ color: action.color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Plus className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-700">{action.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-600">
              Use the sidebar navigation to manage your website content:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Image className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
                <span><strong>Hero Slides:</strong> Manage the homepage carousel slides</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
                <span><strong>About Content:</strong> Edit the about page content and milestones</span>
              </li>
              <li className="flex items-center gap-2">
                <Package className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
                <span><strong>Products:</strong> Add, edit, or remove products</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
