// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Image, FileText, Package, TrendingUp, Plus } from 'lucide-react'

// const PRIMARY_COLOR = '#243d80'

// interface Stats {
//   heroSlides: number
//   products: number
//   milestones: number
//   aboutSections: number
// }

// export default function AdminDashboard() {
//   const [stats, setStats] = useState<Stats>({
//     heroSlides: 0,
//     products: 0,
//     milestones: 0,
//     aboutSections: 0,
//   })

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const [slidesRes, productsRes, milestonesRes, aboutRes] = await Promise.all([
//           fetch('/api/hero-slides'),
//           fetch('/api/products'),
//           fetch('/api/milestones'),
//           fetch('/api/about-content'),
//         ])

//         const slides = await slidesRes.json()
//         const products = await productsRes.json()
//         const milestones = await milestonesRes.json()
//         const about = await aboutRes.json()

//         setStats({
//           heroSlides: slides.length,
//           products: products.length,
//           milestones: milestones.length,
//           aboutSections: about.length,
//         })
//       } catch (error) {
//         console.error('Error fetching stats:', error)
//       }
//     }

//     fetchStats()
//   }, [])

//   const quickActions = [
//     { name: 'Add Hero Slide', href: '/admin/hero-slides', icon: Image, color: '#3b82f6' },
//     { name: 'Edit About Page', href: '/admin/about', icon: FileText, color: '#10b981' },
//     { name: 'Add Product', href: '/admin/products', icon: Package, color: '#f59e0b' },
//   ]

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//         <p className="text-gray-600 mt-1">Welcome to the Siflon Drugs & Pharmaceuticals admin panel</p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <Card className="hover:shadow-lg transition-shadow">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Hero Slides</p>
//                 <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
//                   {stats.heroSlides}
//                 </p>
//               </div>
//               <div 
//                 className="w-12 h-12 rounded-lg flex items-center justify-center"
//                 style={{ backgroundColor: '#dbeafe' }}
//               >
//                 <Image className="w-6 h-6 text-blue-600" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-lg transition-shadow">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Products</p>
//                 <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
//                   {stats.products}
//                 </p>
//               </div>
//               <div 
//                 className="w-12 h-12 rounded-lg flex items-center justify-center"
//                 style={{ backgroundColor: '#fef3c7' }}
//               >
//                 <Package className="w-6 h-6 text-amber-600" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-lg transition-shadow">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Milestones</p>
//                 <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
//                   {stats.milestones}
//                 </p>
//               </div>
//               <div 
//                 className="w-12 h-12 rounded-lg flex items-center justify-center"
//                 style={{ backgroundColor: '#dcfce7' }}
//               >
//                 <TrendingUp className="w-6 h-6 text-green-600" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-lg transition-shadow">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">About Sections</p>
//                 <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
//                   {stats.aboutSections}
//                 </p>
//               </div>
//               <div 
//                 className="w-12 h-12 rounded-lg flex items-center justify-center"
//                 style={{ backgroundColor: '#e0e7ff' }}
//               >
//                 <FileText className="w-6 h-6 text-indigo-600" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Quick Actions */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Quick Actions</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {quickActions.map((action) => (
//               <Link key={action.name} href={action.href}>
//                 <Card className="hover:shadow-md transition-all cursor-pointer border-0 bg-gray-50 hover:bg-gray-100">
//                   <CardContent className="p-4 flex items-center gap-3">
//                     <div 
//                       className="w-10 h-10 rounded-lg flex items-center justify-center"
//                       style={{ backgroundColor: `${action.color}20` }}
//                     >
//                       <action.icon className="w-5 h-5" style={{ color: action.color }} />
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Plus className="w-4 h-4 text-gray-400" />
//                       <span className="font-medium text-gray-700">{action.name}</span>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Recent Activity */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Getting Started</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <p className="text-gray-600">
//               Use the sidebar navigation to manage your website content:
//             </p>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-center gap-2">
//                 <Image className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
//                 <span><strong>Hero Slides:</strong> Manage the homepage carousel slides</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <FileText className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
//                 <span><strong>About Content:</strong> Edit the about page content and milestones</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Package className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
//                 <span><strong>Products:</strong> Add, edit, or remove products</span>
//               </li>
//             </ul>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Badge } from '@/components/ui/badge'
// import { 
//   Image, FileText, Package, TrendingUp, Plus, Eye, Users, Monitor, 
//   Smartphone, Tablet, Globe, Clock, ChevronRight, BarChart3, Activity
// } from 'lucide-react'
// import { motion } from 'framer-motion'

// const PRIMARY_COLOR = '#243d80'

// interface Stats {
//   heroSlides: number
//   products: number
//   milestones: number
//   aboutSections: number
// }

// interface AnalyticsData {
//   summary: {
//     totalViews: number
//     uniqueVisitors: number
//     avgViewsPerVisitor: string
//   }
//   topPages: Array<{ page: string; views: number }>
//   dailyStats: Array<{ date: string; views: number; uniqueVisitors: number }>
//   devices: Array<{ type: string; count: number }>
//   referrers: Array<{ referrer: string; count: number }>
//   recentVisits: Array<{
//     page: string
//     title: string
//     deviceType: string
//     timestamp: string
//   }>
// }

// export default function AdminDashboard() {
//   const [stats, setStats] = useState<Stats>({
//     heroSlides: 0,
//     products: 0,
//     milestones: 0,
//     aboutSections: 0,
//   })
//   const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
//   const [analyticsLoading, setAnalyticsLoading] = useState(true)
//   const [selectedPeriod, setSelectedPeriod] = useState(7)

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const [slidesRes, productsRes, milestonesRes, aboutRes] = await Promise.all([
//           fetch('/api/hero-slides'),
//           fetch('/api/products'),
//           fetch('/api/milestones'),
//           fetch('/api/about-content'),
//         ])

//         const slides = await slidesRes.json()
//         const products = await productsRes.json()
//         const milestones = await milestonesRes.json()
//         const about = await aboutRes.json()

//         setStats({
//           heroSlides: slides.length,
//           products: products.length,
//           milestones: milestones.length,
//           aboutSections: about.length,
//         })
//       } catch (error) {
//         console.error('Error fetching stats:', error)
//       }
//     }

//     const fetchAnalytics = async () => {
//       try {
//         const res = await fetch(`/api/analytics?days=${selectedPeriod}`)
//         const data = await res.json()
//         setAnalytics(data)
//       } catch (error) {
//         console.error('Error fetching analytics:', error)
//       } finally {
//         setAnalyticsLoading(false)
//       }
//     }

//     fetchStats()
//     fetchAnalytics()
//   }, [selectedPeriod])

//   const quickActions = [
//     { name: 'Add Hero Slide', href: '/admin/hero-slides', icon: Image, color: '#3b82f6' },
//     { name: 'Edit About Page', href: '/admin/about', icon: FileText, color: '#10b981' },
//     { name: 'Add Product', href: '/admin/products', icon: Package, color: '#f59e0b' },
//   ]

//   const getDeviceIcon = (type: string) => {
//     switch (type.toLowerCase()) {
//       case 'mobile': return Smartphone
//       case 'tablet': return Tablet
//       default: return Monitor
//     }
//   }

//   const formatTime = (timestamp: string) => {
//     const date = new Date(timestamp)
//     const now = new Date()
//     const diff = now.getTime() - date.getTime()
//     const minutes = Math.floor(diff / 60000)
//     const hours = Math.floor(diff / 3600000)
//     const days = Math.floor(diff / 86400000)
    
//     if (minutes < 1) return 'Just now'
//     if (minutes < 60) return `${minutes}m ago`
//     if (hours < 24) return `${hours}h ago`
//     return `${days}d ago`
//   }

//   const getPageLabel = (page: string) => {
//     const labels: Record<string, string> = {
//       '/': 'Home',
//       '/products': 'Products',
//       '/about': 'About',
//       '/contact': 'Contact',
//       '/quality': 'Quality',
//     }
//     return labels[page] || page
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//         <p className="text-gray-600 mt-1">Welcome to the Siflon Drugs & Pharmaceuticals admin panel</p>
//       </div>

//       {/* Content Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//         >
//           <Card className="hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-600">Hero Slides</p>
//                   <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
//                     {stats.heroSlides}
//                   </p>
//                 </div>
//                 <div 
//                   className="w-12 h-12 rounded-lg flex items-center justify-center"
//                   style={{ backgroundColor: '#dbeafe' }}
//                 >
//                   <Image className="w-6 h-6 text-blue-600" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <Card className="hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-600">Products</p>
//                   <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
//                     {stats.products}
//                   </p>
//                 </div>
//                 <div 
//                   className="w-12 h-12 rounded-lg flex items-center justify-center"
//                   style={{ backgroundColor: '#fef3c7' }}
//                 >
//                   <Package className="w-6 h-6 text-amber-600" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           <Card className="hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-600">Milestones</p>
//                   <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
//                     {stats.milestones}
//                   </p>
//                 </div>
//                 <div 
//                   className="w-12 h-12 rounded-lg flex items-center justify-center"
//                   style={{ backgroundColor: '#dcfce7' }}
//                 >
//                   <TrendingUp className="w-6 h-6 text-green-600" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           <Card className="hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-600">About Sections</p>
//                   <p className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>
//                     {stats.aboutSections}
//                   </p>
//                 </div>
//                 <div 
//                   className="w-12 h-12 rounded-lg flex items-center justify-center"
//                   style={{ backgroundColor: '#e0e7ff' }}
//                 >
//                   <FileText className="w-6 h-6 text-indigo-600" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>

//       {/* Analytics Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Analytics Overview */}
//         <motion.div
//           className="lg:col-span-2"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between pb-2">
//               <CardTitle className="flex items-center gap-2">
//                 <BarChart3 className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
//                 Website Analytics
//               </CardTitle>
//               <div className="flex gap-2">
//                 {[7, 14, 30].map((days) => (
//                   <Button
//                     key={days}
//                     variant={selectedPeriod === days ? 'default' : 'outline'}
//                     size="sm"
//                     onClick={() => setSelectedPeriod(days)}
//                     style={selectedPeriod === days ? { backgroundColor: PRIMARY_COLOR } : {}}
//                   >
//                     {days}d
//                   </Button>
//                 ))}
//               </div>
//             </CardHeader>
//             <CardContent>
//               {analyticsLoading ? (
//                 <div className="flex items-center justify-center h-40">
//                   <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: PRIMARY_COLOR }} />
//                 </div>
//               ) : analytics ? (
//                 <div className="space-y-6">
//                   {/* Summary Stats */}
//                   <div className="grid grid-cols-3 gap-4">
//                     <div className="text-center p-4 bg-blue-50 rounded-xl">
//                       <Eye className="w-6 h-6 mx-auto mb-2 text-blue-600" />
//                       <div className="text-2xl font-bold text-gray-900">{analytics.summary.totalViews}</div>
//                       <div className="text-xs text-gray-500">Total Views</div>
//                     </div>
//                     <div className="text-center p-4 bg-green-50 rounded-xl">
//                       <Users className="w-6 h-6 mx-auto mb-2 text-green-600" />
//                       <div className="text-2xl font-bold text-gray-900">{analytics.summary.uniqueVisitors}</div>
//                       <div className="text-xs text-gray-500">Unique Visitors</div>
//                     </div>
//                     <div className="text-center p-4 bg-purple-50 rounded-xl">
//                       <Activity className="w-6 h-6 mx-auto mb-2 text-purple-600" />
//                       <div className="text-2xl font-bold text-gray-900">{analytics.summary.avgViewsPerVisitor}</div>
//                       <div className="text-xs text-gray-500">Avg Views/Visitor</div>
//                     </div>
//                   </div>

//                   {/* Top Pages */}
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-700 mb-3">Top Pages</h4>
//                     <div className="space-y-2">
//                       {analytics.topPages.slice(0, 5).map((page, index) => (
//                         <div key={page.page} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
//                           <div className="flex items-center gap-3">
//                             <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-medium text-gray-600">
//                               {index + 1}
//                             </span>
//                             <span className="text-sm font-medium">{getPageLabel(page.page)}</span>
//                           </div>
//                           <Badge variant="secondary">{page.views} views</Badge>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Device Distribution */}
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-700 mb-3">Device Types</h4>
//                     <div className="flex gap-4">
//                       {analytics.devices.map((device) => {
//                         const Icon = getDeviceIcon(device.type)
//                         const percentage = analytics.summary.totalViews > 0 
//                           ? Math.round((device.count / analytics.summary.totalViews) * 100) 
//                           : 0
//                         return (
//                           <div key={device.type} className="flex-1 text-center p-3 bg-gray-50 rounded-lg">
//                             <Icon className="w-5 h-5 mx-auto mb-1 text-gray-600" />
//                             <div className="text-lg font-semibold">{percentage}%</div>
//                             <div className="text-xs text-gray-500 capitalize">{device.type}</div>
//                           </div>
//                         )
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center py-8 text-gray-500">
//                   <BarChart3 className="w-12 h-12 mx-auto mb-3 opacity-50" />
//                   <p>No analytics data available yet</p>
//                   <p className="text-xs mt-1">Data will appear as visitors browse your site</p>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* Recent Activity */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//         >
//           <Card className="h-full">
//             <CardHeader className="pb-2">
//               <CardTitle className="flex items-center gap-2">
//                 <Clock className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
//                 Recent Visits
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               {analyticsLoading ? (
//                 <div className="flex items-center justify-center h-40">
//                   <div className="animate-spin rounded-full h-6 w-6 border-b-2" style={{ borderColor: PRIMARY_COLOR }} />
//                 </div>
//               ) : analytics?.recentVisits ? (
//                 <div className="space-y-3 max-h-80 overflow-y-auto">
//                   {analytics.recentVisits.slice(0, 10).map((visit, index) => {
//                     const DeviceIcon = getDeviceIcon(visit.deviceType)
//                     return (
//                       <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
//                         <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
//                           <DeviceIcon className="w-4 h-4 text-gray-500" />
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <div className="text-sm font-medium truncate">{getPageLabel(visit.page)}</div>
//                           <div className="text-xs text-gray-500">{formatTime(visit.timestamp)}</div>
//                         </div>
//                       </div>
//                     )
//                   })}
//                 </div>
//               ) : (
//                 <div className="text-center py-8 text-gray-500">
//                   <Clock className="w-10 h-10 mx-auto mb-2 opacity-50" />
//                   <p className="text-sm">No recent visits</p>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>

//       {/* Quick Actions */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Quick Actions</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {quickActions.map((action) => (
//               <Link key={action.name} href={action.href}>
//                 <Card className="hover:shadow-md transition-all cursor-pointer border-0 bg-gray-50 hover:bg-gray-100">
//                   <CardContent className="p-4 flex items-center gap-3">
//                     <div 
//                       className="w-10 h-10 rounded-lg flex items-center justify-center"
//                       style={{ backgroundColor: `${action.color}20` }}
//                     >
//                       <action.icon className="w-5 h-5" style={{ color: action.color }} />
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Plus className="w-4 h-4 text-gray-400" />
//                       <span className="font-medium text-gray-700">{action.name}</span>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Getting Started */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Getting Started</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <p className="text-gray-600">
//               Use the sidebar navigation to manage your website content:
//             </p>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-center gap-2">
//                 <Image className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
//                 <span><strong>Hero Slides:</strong> Manage the homepage carousel slides with drag & drop reordering</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <FileText className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
//                 <span><strong>About Content:</strong> Edit the about page content and milestones</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Package className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
//                 <span><strong>Products:</strong> Add, edit, or remove veterinary products</span>
//               </li>
//             </ul>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Image, FileText, Package, TrendingUp, Plus, Eye, Users, Monitor, 
  Smartphone, Tablet, Globe, Clock, MapPin, ChevronRight, BarChart3, Activity
} from 'lucide-react'
import { motion } from 'framer-motion'

const PRIMARY_COLOR = '#243d80'

interface Stats {
  heroSlides: number
  products: number
  milestones: number
  aboutSections: number
}

interface AnalyticsData {
  summary: {
    totalViews: number
    uniqueVisitors: number
    avgViewsPerVisitor: string
  }
  topPages: Array<{ page: string; views: number }>
  dailyStats: Array<{ date: string; views: number; uniqueVisitors: number }>
  devices: Array<{ type: string; count: number }>
  referrers: Array<{ referrer: string; count: number }>
  countries: Array<{ country: string; count: number }>
  cities: Array<{ city: string; country: string; count: number }>
  recentVisits: Array<{
    page: string
    title: string
    deviceType: string
    country: string
    city: string
    timestamp: string
  }>
}

// Country code to flag emoji mapping
const countryFlags: Record<string, string> = {
  'India': '🇮🇳',
  'United States': '🇺🇸',
  'United Kingdom': '🇬🇧',
  'Germany': '🇩🇪',
  'France': '🇫🇷',
  'Japan': '🇯🇵',
  'China': '🇨🇳',
  'Brazil': '🇧🇷',
  'Australia': '🇦🇺',
  'Canada': '🇨🇦',
  'United Arab Emirates': '🇦🇪',
  'Saudi Arabia': '🇸🇦',
  'Singapore': '🇸🇬',
  'Malaysia': '🇲🇾',
  'Thailand': '🇹🇭',
  'Vietnam': '🇻🇳',
  'Indonesia': '🇮🇩',
  'Philippines': '🇵🇭',
  'South Korea': '🇰🇷',
  'Netherlands': '🇳🇱',
  'Spain': '🇪🇸',
  'Italy': '🇮🇹',
  'Mexico': '🇲🇽',
  'Russia': '🇷🇺',
  'South Africa': '🇿🇦',
  'Nigeria': '🇳🇬',
  'Egypt': '🇪🇬',
  'Kenya': '🇰🇪',
  'Bangladesh': '🇧🇩',
  'Pakistan': '🇵🇰',
  'Sri Lanka': '🇱🇰',
  'Nepal': '🇳🇵',
  'Local': '🏠',
  'Unknown': '🌐',
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    heroSlides: 0,
    products: 0,
    milestones: 0,
    aboutSections: 0,
  })
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [analyticsLoading, setAnalyticsLoading] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState(7)

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

    const fetchAnalytics = async () => {
      try {
        const res = await fetch(`/api/analytics?days=${selectedPeriod}`)
        const data = await res.json()
        setAnalytics(data)
      } catch (error) {
        console.error('Error fetching analytics:', error)
      } finally {
        setAnalyticsLoading(false)
      }
    }

    fetchStats()
    fetchAnalytics()
  }, [selectedPeriod])

  const quickActions = [
    { name: 'Add Hero Slide', href: '/admin/hero-slides', icon: Image, color: '#3b82f6' },
    { name: 'Edit About Page', href: '/admin/about', icon: FileText, color: '#10b981' },
    { name: 'Add Product', href: '/admin/products', icon: Package, color: '#f59e0b' },
  ]

  const getDeviceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'mobile': return Smartphone
      case 'tablet': return Tablet
      default: return Monitor
    }
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)
    
    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  const getPageLabel = (page: string) => {
    const labels: Record<string, string> = {
      '/': 'Home',
      '/products': 'Products',
      '/about': 'About',
      '/contact': 'Contact',
      '/quality': 'Quality',
    }
    return labels[page] || page
  }

  const getCountryFlag = (country: string) => {
    return countryFlags[country] || '🌐'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to the Siflon Drugs & Pharmaceuticals admin panel</p>
      </div>

      {/* Content Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
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
        </motion.div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Analytics Overview */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                Website Analytics
              </CardTitle>
              <div className="flex gap-2">
                {[7, 14, 30].map((days) => (
                  <Button
                    key={days}
                    variant={selectedPeriod === days ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedPeriod(days)}
                    style={selectedPeriod === days ? { backgroundColor: PRIMARY_COLOR } : {}}
                  >
                    {days}d
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              {analyticsLoading ? (
                <div className="flex items-center justify-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: PRIMARY_COLOR }} />
                </div>
              ) : analytics ? (
                <div className="space-y-6">
                  {/* Summary Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <Eye className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <div className="text-2xl font-bold text-gray-900">{analytics.summary.totalViews}</div>
                      <div className="text-xs text-gray-500">Total Views</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <Users className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <div className="text-2xl font-bold text-gray-900">{analytics.summary.uniqueVisitors}</div>
                      <div className="text-xs text-gray-500">Unique Visitors</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <Activity className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                      <div className="text-2xl font-bold text-gray-900">{analytics.summary.avgViewsPerVisitor}</div>
                      <div className="text-xs text-gray-500">Avg Views/Visitor</div>
                    </div>
                  </div>

                  {/* Top Pages */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Top Pages</h4>
                    <div className="space-y-2">
                      {analytics.topPages.slice(0, 5).map((page, index) => (
                        <div key={page.page} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-medium text-gray-600">
                              {index + 1}
                            </span>
                            <span className="text-sm font-medium">{getPageLabel(page.page)}</span>
                          </div>
                          <Badge variant="secondary">{page.views} views</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Device Distribution */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Device Types</h4>
                    <div className="flex gap-4">
                      {analytics.devices.map((device) => {
                        const Icon = getDeviceIcon(device.type)
                        const percentage = analytics.summary.totalViews > 0 
                          ? Math.round((device.count / analytics.summary.totalViews) * 100) 
                          : 0
                        return (
                          <div key={device.type} className="flex-1 text-center p-3 bg-gray-50 rounded-lg">
                            <Icon className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                            <div className="text-lg font-semibold">{percentage}%</div>
                            <div className="text-xs text-gray-500 capitalize">{device.type}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Countries */}
                  {analytics.countries && analytics.countries.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Top Countries
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {analytics.countries.slice(0, 6).map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{getCountryFlag(item.country)}</span>
                              <span className="text-sm font-medium truncate">{item.country}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">{item.count}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Cities */}
                  {analytics.cities && analytics.cities.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Top Cities
                      </h4>
                      <div className="space-y-2">
                        {analytics.cities.slice(0, 5).map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">{getCountryFlag(item.country)}</span>
                              <span className="text-sm font-medium">{item.city}</span>
                              <span className="text-xs text-gray-400">{item.country}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">{item.count}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <BarChart3 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No analytics data available yet</p>
                  <p className="text-xs mt-1">Data will appear as visitors browse your site</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                Recent Visits
              </CardTitle>
            </CardHeader>
            <CardContent>
              {analyticsLoading ? (
                <div className="flex items-center justify-center h-40">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2" style={{ borderColor: PRIMARY_COLOR }} />
                </div>
              ) : analytics?.recentVisits ? (
                <div className="space-y-3 max-h-[500px] overflow-y-auto">
                  {analytics.recentVisits.slice(0, 15).map((visit, index) => {
                    const DeviceIcon = getDeviceIcon(visit.deviceType)
                    return (
                      <div key={index} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <DeviceIcon className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium truncate">{getPageLabel(visit.page)}</span>
                            <span className="text-sm">{getCountryFlag(visit.country)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            {visit.city && visit.city !== 'Unknown' && visit.city !== 'Local' && (
                              <>
                                <span>{visit.city}</span>
                                <span>•</span>
                              </>
                            )}
                            <span>{formatTime(visit.timestamp)}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Clock className="w-10 h-10 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No recent visits</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
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

      {/* Getting Started */}
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
                <span><strong>Hero Slides:</strong> Manage the homepage carousel slides with drag & drop reordering</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
                <span><strong>About Content:</strong> Edit the about page content and milestones</span>
              </li>
              <li className="flex items-center gap-2">
                <Package className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
                <span><strong>Products:</strong> Add, edit, or remove veterinary products</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
