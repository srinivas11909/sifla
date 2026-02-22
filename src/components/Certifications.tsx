'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Award, FileCheck, ShieldCheck, Globe, Activity, X, ExternalLink, Download
} from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

// Certificate Data
const certificates = [
  { 
    title: 'Good Manufacturing Practice', 
    subtitle: 'GMP Certificate',
    icon: ShieldCheck, 
    url: 'https://pujya.com/siflon/wp-content/uploads/2026/02/GMP.pdf',
    tag: 'Quality'
  },
  { 
    title: 'ISO 9001:2015', 
    subtitle: 'Quality Management System',
    icon: Award, 
    url: 'https://pujya.com/siflon/wp-content/uploads/2026/02/ISO_9001-2015.pdf',
    tag: 'Standard'
  },
  { 
    title: 'WHO - GMP Compliance', 
    subtitle: 'World Health Organization',
    icon: Activity, 
    url: 'https://pujya.com/siflon/wp-content/uploads/2026/02/WHO-GMP.pdf',
    tag: 'Global'
  },
  { 
    title: 'Ethiopia GMP Certificate', 
    subtitle: 'Manufacturing Site Approval',
    icon: Globe, 
    url: 'https://pujya.com/siflon/wp-content/uploads/2026/02/Ethiopia-GMP.pdf',
    tag: 'Africa'
  },
  { 
    title: 'Iraq Approval Certificate', 
    subtitle: 'Gharb-AL-Rafidein',
    icon: FileCheck, 
    url: 'https://pujya.com/siflon/wp-content/uploads/2026/02/Gharb-AL-Rafidein_Iraq-Approval-Certificate-of-Manufacturing-Site.pdf',
    tag: 'Middle East'
  },
]

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
}

export default function CertificatesSection() {
  const [selectedPdf, setSelectedPdf] = useState(null)

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#f4f6fb] to-white" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20"
          style={{ background: `radial-gradient(circle, ${PRIMARY_COLOR}20 0%, transparent 70%)` }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: `radial-gradient(circle, ${PRIMARY_COLOR}20 0%, transparent 70%)` }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold rounded-full uppercase tracking-wider"
            style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}
          >
            Accreditation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Approvals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to maintaining the highest standards of quality and compliance across global markets.
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedPdf(cert)}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-2xl overflow-hidden"
            >
              {/* Decorative Top Accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}, #3b5998)` }}
              />

              {/* Content */}
              <div className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-md"
                  style={{ backgroundColor: `${PRIMARY_COLOR}10` }}
                >
                  <cert.icon className="w-8 h-8" style={{ color: PRIMARY_COLOR }} />
                </div>

                {/* Tag */}
                <span 
                  className="absolute top-5 right-5 text-xs font-bold px-2 py-1 rounded"
                  style={{ backgroundColor: `${PRIMARY_COLOR}10`, color: PRIMARY_COLOR }}
                >
                  {cert.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {cert.subtitle}
                </p>

                {/* Action Button */}
                <div 
                  className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
                  style={{ color: PRIMARY_COLOR }}
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Hover Background Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{ background: `radial-gradient(circle at center, ${PRIMARY_COLOR}08 0%, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* PDF Modal Viewer */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div 
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Modal Header */}
              <div 
                className="flex items-center justify-between p-4 border-b"
                style={{ borderColor: '#e5e7eb', backgroundColor: PRIMARY_COLOR }}
              >
                <div className="flex items-center gap-3 text-white">
                  <FileCheck className="w-5 h-5" />
                  <h3 className="font-bold text-lg">{selectedPdf.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={selectedPdf.url} 
                    download 
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                    title="Download"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={() => setSelectedPdf(null)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 bg-gray-100">
                {/* 
                   Using iframe for PDF embedding. 
                   This provides a clean viewer within the browser.
                */}
                <iframe 
                  src={`${selectedPdf.url}#view=FitH`} 
                  className="w-full h-full border-0"
                  title={selectedPdf.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}