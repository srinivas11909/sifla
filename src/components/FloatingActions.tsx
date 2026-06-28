'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, MapPin, MessageCircle, Globe } from 'lucide-react'
import OutletsDialog from './OutletsDialog'

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const PRIMARY_COLOR = '#243d80'

const networkListVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      when: 'beforeChildren',
    },
  },
}

const networkItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
}

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
  const [showNetworks, setShowNetworks] = useState(false)
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const networkLinks = [
    { name: 'Siflon Polymers', href: 'https://siflonpolymers.com' },
    { name: 'Siflon Drugs', href: 'https://siflondrugs.com' },
    { name: 'Siflon Pipes', href: 'https://siflonpipes.com' },
  ]

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
          {showNetworks && (
            <motion.div
              variants={networkListVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mb-2 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur"
            >
              {networkLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={networkItemVariants}
                  whileHover={{ x: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#243d80]"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-sm">
                    <Globe className="h-4 w-4" />
                  </span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 shadow-lg"
          onClick={() => {
            setShowNetworks((prev) => !prev)
            setIsMenuOpen(false)
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe className="h-5 w-5 text-white" />
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="mb-2 flex flex-col gap-2"
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
                    <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-md">
                      {item.label}
                    </span>
                    <motion.button
                      className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg"
                      style={{ backgroundColor: item.color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={item.onClick}
                    >
                      <item.icon className="h-5 w-5 text-white" />
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
          className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
          style={{ backgroundColor: isMenuOpen ? '#64748b' : PRIMARY_COLOR }}
          onClick={() => {
            setIsMenuOpen((prev) => !prev)
            setShowNetworks(false)
          }}
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
                <X className="h-6 w-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile - Floating buttons */}
      <div className="fixed right-4 bottom-20 z-50 flex flex-col items-end gap-2 md:hidden">
        <AnimatePresence>
          {showNetworks && (
            <motion.div
              variants={networkListVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur"
            >
              {networkLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={networkItemVariants}
                  whileHover={{ x: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#243d80]"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-sm">
                    <Globe className="h-4 w-4" />
                  </span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col items-end gap-3">
          <motion.button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 shadow-lg"
            onClick={() => {
              setShowNetworks((prev) => !prev)
              setIsMenuOpen(false)
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 200 }}
            whileTap={{ scale: 0.9 }}
          >
            <Globe className="h-5 w-5 text-white" />
          </motion.button>

          {/* Brochure Download */}
          <motion.a
            href="/siflonpharma-brochure.pdf"
            download
            className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg"
            style={{ backgroundColor: PRIMARY_COLOR }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 200 }}
            whileTap={{ scale: 0.9 }}
          >
            <Download className="h-5 w-5 text-white" />
          </motion.a>

          {/* Outlets Button */}
          <motion.button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 shadow-lg"
            onClick={() => setShowOutlets(true)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5, type: 'spring', stiffness: 200 }}
            whileTap={{ scale: 0.9 }}
          >
            <MapPin className="h-5 w-5 text-white" />
          </motion.button>

          {/* WhatsApp */}
          <div className="relative">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200 }}
              whileTap={{ scale: 0.9 }}
            >
              <WhatsAppIcon className="h-5 w-5 text-white" />
            </motion.a>
            {/* Pulse animation - outside button */}
            <span className="absolute inset-0 z-0 rounded-full bg-[#25D366] animate-pulse opacity-20" />
          </div>
        </div>
      </div>

      {/* Outlets Dialog */}
      {/* <OutletsDialog /> */}
    </>
  )
}
