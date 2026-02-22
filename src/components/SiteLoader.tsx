'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const SiteLoader = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    // Hide loader after page loads
    const handleLoad = () => {
      setProgress(100)
      setTimeout(() => setLoading(false), 500)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Fallback timeout
    const fallbackTimeout = setTimeout(() => {
      setProgress(100)
      setTimeout(() => setLoading(false), 500)
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      window.removeEventListener('load', handleLoad)
      clearTimeout(fallbackTimeout)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#243d80' }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated circles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-white/10"
                style={{
                  width: `${(i + 1) * 200}px`,
                  height: `${(i + 1) * 200}px`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  scale: [0.5, 1.2, 1.5],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'easeOut'
                }}
              />
            ))}
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>

          {/* Main Loader Content */}
          <div className="relative flex flex-col items-center">
            {/* Outer Spinning Ring */}
            <motion.div
              className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full"
              style={{ border: '3px solid transparent' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  border: '3px solid transparent',
                  borderTopColor: '#60a5fa',
                  borderRightColor: '#60a5fa',
                }}
              />
            </motion.div>

            {/* Inner Counter-Spinning Ring */}
            <motion.div
              className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full"
              style={{ border: '2px solid transparent' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  border: '2px solid transparent',
                  borderBottomColor: '#93c5fd',
                  borderLeftColor: '#93c5fd',
                }}
              />
            </motion.div>

            {/* Pulsing Glow Behind Logo */}
            <motion.div
              className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full"
              style={{ backgroundColor: '#fff' }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(96,165,250,0.3)',
                  '0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(96,165,250,0.5)',
                  '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(96,165,250,0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Logo Container */}
            <motion.div
              className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Image
                src="/siflonlogo.png"
                alt="Siflon Pharmaceuticals"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                priority
              />
            </motion.div>

            {/* Company Name */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                SIFLON
              </h1>
              <p className="text-xs md:text-sm text-blue-200 tracking-widest uppercase mt-1">
                Pharmaceuticals
              </p>
            </motion.div>

            {/* Tagline with typing effect */}
            <motion.p
              className="mt-4 text-sm text-blue-100 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Quality is our Strength
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              className="mt-8 w-48 md:w-64"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-300 via-white to-blue-300 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                className="mt-2 text-center text-xs text-blue-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {Math.min(Math.round(progress), 100)}%
              </motion.p>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="mt-4 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white/60 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom Branding */}
          <motion.div
            className="absolute bottom-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-xs text-blue-200/60">
              © 2024 Siflon Drugs & Pharmaceuticals Pvt. Ltd.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SiteLoader
