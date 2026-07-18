'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Simplified Loader Component with Logo
const ModalLoader = () => {
  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 1.5,
              delay: Math.random() * 1,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Pulsing Background Circle */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-blue-100 to-blue-50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Logo Container */}
      <motion.div
        className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-gray-100"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/siflonlogo.png"
          alt="Siflon Logo"
          width={100}
          height={100}
          className="w-24 h-24 object-contain"
          priority
        />
      </motion.div>
    </div>
  )
}

export default function SiflonBrandModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const hasShownBefore = window.sessionStorage.getItem('siflonBrandModalShown')

    if (!hasShownBefore) {
      setIsOpen(true)
      setHasShown(true)
      window.sessionStorage.setItem('siflonBrandModalShown', 'true')
    }
  }, [])

  useEffect(() => {
    // Auto-close the modal after 1 minute (30000ms) only if it's open
    if (isOpen && hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, 30000)

      return () => clearTimeout(timer)
    }
  }, [isOpen, hasShown])

  const handleDrugsClick = () => {
    // Redirect to Siflon Drugs website
    window.location.href = 'https://siflondrugs.com/'
  }

  const handlePharmaClick = () => {
    // Close the popup and stay on the site
    setIsOpen(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-12 w-full max-w-5xl min-h-[500px] flex flex-col justify-center"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              aria-label="Close"
            >
              <X size={28} className="text-gray-600" />
            </button>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
              {/* Siflon Drugs Section - Blue */}
              <motion.button
                onClick={handleDrugsClick}
                className="flex-1 w-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-center cursor-pointer hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="text-white">
                  <h2 className="text-5xl lg:text-6xl font-bold mb-4">SIFLON</h2>
                  <p className="text-3xl lg:text-4xl font-semibold mb-6">DRUGS</p>
                  <p className="text-base lg:text-lg opacity-90">Click to visit our drugs website</p>
                </div>
              </motion.button>

              {/* Loader in Center */}
              <div className="flex flex-col items-center gap-6">
                <ModalLoader />
                <div className="text-center">
                  <p className="text-gray-600 font-semibold text-lg">SIFLON</p>
                </div>
              </div>

              {/* Siflon Pharma Section - Green */}
              <motion.button
                onClick={handlePharmaClick}
                className="flex-1 w-full bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-12 text-center cursor-pointer hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="text-white">
                  <h2 className="text-5xl lg:text-6xl font-bold mb-4">SIFLON</h2>
                  <p className="text-3xl lg:text-4xl font-semibold mb-6">PHARMA</p>
                  <p className="text-base lg:text-lg opacity-90">Click to continue on this site</p>
                </div>
              </motion.button>
            </div>

            {/* Auto-close Info */}
            <p className="text-center text-gray-500 text-sm mt-8">This popup will auto-close in 30 sec</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
