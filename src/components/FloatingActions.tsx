'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, MapPin, MessageCircle } from 'lucide-react'
import OutletsDialog from './OutletsDialog'

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const PRIMARY_COLOR = '#243d80'

interface FloatingActionsProps {
  phoneNumber?: string
  message?: string
}

export default function FloatingActions({ 
  phoneNumber = '914027139090',
  message = 'Hello! I would like to know more about your veterinary products.'
}: FloatingActionsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showOutlets, setShowOutlets] = useState(false)
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const menuItems = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: WhatsAppIcon,
      href: whatsappUrl,
      color: '#25D366',
      external: true
    },
    {
      id: 'brochure',
      label: 'Brochure',
      icon: Download,
      href: '/siflonpharma-brochure.pdf',
      color: PRIMARY_COLOR,
      download: true
    },
    {
      id: 'outlets',
      label: 'Outlets',
      icon: MapPin,
      color: '#ef4444',
      onClick: () => setShowOutlets(true)
    }
  ]

  return (
    <>
      {/* Desktop - Right side floating menu */}
      <div className="fixed right-6 bottom-24 z-50 hidden md:flex flex-col items-end gap-3">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="flex flex-col gap-2 mb-2"
            >
              {menuItems.map((item, index) => {
                const content = (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-sm font-medium text-gray-700 bg-white px-3 py-1.5 rounded-lg shadow-md">
                      {item.label}
                    </span>
                    <motion.button
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: item.color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={item.onClick}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </motion.button>
                  </motion.div>
                )

                if (item.onClick) {
                  return content
                }

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    download={item.download}
                  >
                    {content}
                  </a>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main toggle button */}
        <motion.button
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: isMenuOpen ? '#64748b' : PRIMARY_COLOR }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile - Floating buttons */}
      <div className="fixed right-4 bottom-20 z-50 md:hidden flex items-center gap-3">
        {/* Brochure Download */}
        <motion.a
          href="/siflonpharma-brochure.pdf"
          download
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: PRIMARY_COLOR }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 200 }}
          whileTap={{ scale: 0.9 }}
        >
          <Download className="w-5 h-5 text-white" />
        </motion.a>

        {/* Outlets Button */}
        <motion.button
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-red-500"
          onClick={() => setShowOutlets(true)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5, type: 'spring', stiffness: 200 }}
          whileTap={{ scale: 0.9 }}
        >
          <MapPin className="w-5 h-5 text-white" />
        </motion.button>

        {/* WhatsApp */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-[#25D366]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200 }}
          whileTap={{ scale: 0.9 }}
        >
          <WhatsAppIcon className="w-7 h-7 text-white" />
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        </motion.a>
      </div>

      {/* Outlets Dialog */}
      <OutletsDialog />
    </>
  )
}
