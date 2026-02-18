'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility)

    // Clean up
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop - Right side above WhatsApp */}
          <motion.button
            onClick={scrollToTop}
            className="fixed right-6 bottom-20 z-50 hidden md:flex items-center justify-center w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ backgroundColor: PRIMARY_COLOR }}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1, backgroundColor: '#1a2d5c' }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </motion.button>

          {/* Mobile - Right side above WhatsApp */}
          <motion.button
            onClick={scrollToTop}
            className="fixed right-4 bottom-20 z-50 md:hidden flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
            style={{ backgroundColor: PRIMARY_COLOR }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  )
}
