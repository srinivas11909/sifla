'use client'

import { useState } from 'react'
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: '#', color: '#1877F2' },
  { name: 'Twitter', icon: Twitter, url: '#', color: '#1DA1F2' },
  { name: 'LinkedIn', icon: Linkedin, url: '#', color: '#0A66C2' },
  { name: 'YouTube', icon: Youtube, url: '#', color: '#FF0000' },
  { name: 'Instagram', icon: Instagram, url: '#', color: '#E4405F' },
]

export default function FloatingSocialLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          className="relative flex items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
        >
          <div
            className="w-12 h-12 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ 
              backgroundColor: hoveredIndex === index ? social.color : '#243d80',
              borderRadius: '0 8px 8px 0'
            }}
          >
            <social.icon className="w-6 h-6 text-white" />
          </div>
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="text-white text-sm font-medium whitespace-nowrap overflow-hidden py-2 pr-4"
                style={{ backgroundColor: social.color }}
              >
                {social.name}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      ))}
    </div>
  )
}
