'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const PRIMARY_COLOR = '#243d80'

// Data structure with REAL photo URLs from Unsplash
const nodes = [
  { id: 1, x: 50, y: 18, type: 'med', label: 'Capsules', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&q=80', delay: 0 },
  { id: 2, x: 25, y: 38, type: 'animal', label: 'Chicken', img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=200&q=80', delay: 0.5 },
  { id: 3, x: 50, y: 43, type: 'animal', label: 'Sheep', img: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=200&q=80', delay: 0.2 },
  { id: 4, x: 75, y: 38, type: 'animal', label: 'Horse', img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=200&q=80', delay: 0.8 },
  { id: 5, x: 15, y: 68, type: 'animal', label: 'Cat', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&q=80', delay: 1.1 },
  { id: 6, x: 45, y: 68, type: 'animal', label: 'Dog', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=200&q=80', delay: 1.4 },
  { id: 7, x: 65, y: 63, type: 'med', label: 'Vial', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=200&q=80', delay: 1.7 },
  { id: 8, x: 85, y: 63, type: 'animal', label: 'Cow', img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=200&q=80', delay: 2.0 },
  { id: 9, x: 35, y: 88, type: 'med', label: 'Syrup', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=200&q=80', delay: 2.3 },
  { id: 10, x: 65, y: 88, type: 'animal', label: 'Buffalo', img: 'https://static4.depositphotos.com/1007572/329/i/450/depositphotos_3294853-stock-photo-african-buffalo-cow.jpg?auto=format&fit=crop&w=200&q=80', delay: 2.6 },
  { id: 11, x: 90, y: 88, type: 'animal', label: 'Pig', img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=200&q=80', delay: 2.9 },
]

const connections = [
  { from: 1, to: 3 },
  { from: 3, to: 2 },
  { from: 3, to: 4 },
  { from: 3, to: 5 },
  { from: 3, to: 7 },
  { from: 6, to: 7 },
  { from: 7, to: 8 },
  { from: 6, to: 10 },
  { from: 10, to: 9 },
  { from: 10, to: 11 },
]

// Network Diagram Component for Desktop/Tablet
const NetworkDiagram = () => {
  return (
    <div className="relative w-full aspect-[16/10] md:aspect-[16/9] bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${PRIMARY_COLOR}15 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="drop-shadow-mobile" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0.5" stdDeviation="0.5" floodColor="#0ea5e9" floodOpacity="0.4"/>
          </filter>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>

        {/* Animated Connection Lines */}
        {connections.map((conn, idx) => {
          const start = nodes.find(n => n.id === conn.from)
          const end = nodes.find(n => n.id === conn.to)
          if (!start || !end) return null

          return (
            <motion.line
              key={`line-${idx}`}
              x1={start.x} y1={start.y}
              x2={end.x} y2={end.y}
              stroke="url(#line-gradient)"
              strokeWidth="0.4"
              strokeDasharray="3 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.2, delay: Math.min(start.delay, end.delay) + 0.3 }}
            />
          )
        })}

        {/* Animated Nodes */}
        {nodes.map((node) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: node.delay }}
            whileHover={{ scale: 1.15 }}
            style={{ cursor: 'pointer' }}
          >
            <defs>
              <clipPath id={`clip-${node.id}`}>
                <circle cx={node.x} cy={node.y} r="5.5" />
              </clipPath>
            </defs>

            {/* Outer Glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r="7"
              fill="transparent"
              stroke={node.type === 'med' ? '#22c55e' : '#0ea5e9'}
              strokeWidth="0.3"
              opacity="0.3"
            />
            
            {/* White Border Circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="white"
              stroke={node.type === 'med' ? '#22c55e' : '#0ea5e9'}
              strokeWidth="0.6"
              filter="url(#drop-shadow-mobile)"
            />
            
            {/* Real Image */}
            <image
              href={node.img}
              x={node.x - 5.5}
              y={node.y - 5.5}
              width="11"
              height="11"
              clipPath={`url(#clip-${node.id})`}
              preserveAspectRatio="xMidYMid slice"
            />
            
            {/* Label Text */}
            <text 
              x={node.x} 
              y={node.y + 9} 
              textAnchor="middle" 
              fontSize="2" 
              fontWeight="600"
              className="pointer-events-none"
              fill="#475569"
              style={{ fontFamily: 'system-ui' }}
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 flex gap-3 text-xs">
        <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
          <div className="w-2 h-2 rounded-full bg-sky-500" />
          <span className="text-gray-600">Animals</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-gray-600">Medicines</span>
        </div>
      </div>
    </div>
  )
}

// Mobile Card Grid Component
const MobileCardGrid = () => {
  const animals = nodes.filter(n => n.type === 'animal')
  const medicines = nodes.filter(n => n.type === 'med')

  return (
    <div className="space-y-6">
      {/* Animals Section */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-sky-500" />
          <h3 className="font-semibold text-gray-700 text-sm">Animals</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {animals.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="border-0 shadow-sm bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <img 
                      src={node.img} 
                      alt={node.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-1.5 pt-4">
                      <p className="text-white text-[10px] font-medium text-center truncate">{node.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Medicines Section */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <h3 className="font-semibold text-gray-700 text-sm">Medicines</h3>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {medicines.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="border-0 shadow-sm bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <img 
                      src={node.img} 
                      alt={node.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-900/70 to-transparent p-1.5 pt-4">
                      <p className="text-white text-[10px] font-medium text-center truncate">{node.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Tablet Card View with Horizontal Scroll
const TabletCardView = () => {
  return (
    <div className="relative">
      <div className="flex overflow-x-auto pb-4 gap-3 snap-x snap-mandatory scrollbar-hide">
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex-shrink-0 snap-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="border-0 shadow-md bg-white overflow-hidden w-24">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <img 
                    src={node.img} 
                    alt={node.label}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className={`absolute inset-x-0 bottom-0 bg-gradient-to-t p-2 pt-6`}
                    style={{
                      background: `linear-gradient(to top, ${node.type === 'med' ? 'rgba(22, 163, 74, 0.8)' : 'rgba(14, 165, 233, 0.8)'}, transparent)`
                    }}
                  >
                    <p className="text-white text-xs font-medium text-center">{node.label}</p>
                  </div>
                  {/* Type Badge */}
                  <div 
                    className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                    style={{ backgroundColor: node.type === 'med' ? '#22c55e' : '#0ea5e9' }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="flex justify-center gap-1 mt-2">
        {nodes.map((_, idx) => (
          <div key={idx} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        ))}
      </div>
    </div>
  )
}

const AnimalLoader = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <Card className="relative w-full overflow-hidden border-none shadow-xl rounded-xl bg-white">
      {/* Section Title */}
      <motion.div
        className="text-center pt-6 pb-4 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge 
          className="mb-2 px-3 py-1" 
          style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
        >
          Our Sectors
        </Badge>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
          Sectors we Serve
        </h2>
        <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
          Connecting animals with quality pharmaceuticals
        </p>
      </motion.div>

      {/* Content Area */}
      <div className="px-3 pb-4 md:px-6 md:pb-6">
        <AnimatePresence mode="wait">
          {isMobile ? (
            <motion.div
              key="mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MobileCardGrid />
            </motion.div>
          ) : isTablet ? (
            <motion.div
              key="tablet"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TabletCardView />
            </motion.div>
          ) : (
            <motion.div
              key="desktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <NetworkDiagram />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  )
}

export default AnimalLoader
