// 'use client'

// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { 
//   Droplets, Package, Beaker, Pill, Syringe, FlaskConical, Shield
// } from 'lucide-react'


// const PRIMARY_COLOR = '#243d80'

// // Product categories data with background colors
// const productCategories = [
//   { 
//     icon: Droplets, 
//     title: 'Oral Liquids', 
//     count: '120+',
//     description: 'High-quality liquid formulations for easy administration and rapid absorption',
//     items: ['Oral Suspensions', 'Liquid Medicines', 'Electrolytes', 'Vitamin Solutions'],
//     bgColor: '#e0f7fa'
//   },
//   { 
//     icon: Package, 
//     title: 'Dry Powders', 
//     count: '80+',
//     description: 'Stable powder formulations with extended shelf life for water soluble applications',
//     items: ['Water Soluble Powders', 'Premixes', 'Concentrates', 'Feed Additives'],
//     bgColor: '#fff8e1'
//   },
//   { 
//     icon: Beaker, 
//     title: 'Feed Supplements', 
//     count: '150+',
//     description: 'Nutritional supplements for optimal animal health and productivity',
//     items: ['Mineral Mixtures', 'Vitamins', 'Amino Acids', 'Enzymes'],
//     bgColor: '#e8f5e9'
//   },
//   { 
//     icon: Pill, 
//     title: 'Tablets', 
//     count: '60+',
//     description: 'Precise dosage solid formulations for accurate treatment protocols',
//     items: ['Anthelmintics', 'Antibiotics', 'Nutritional', 'Combination Tablets'],
//     bgColor: '#f3e5f5'
//   },
//   { 
//     icon: Syringe, 
//     title: 'Injectables', 
//     count: '50+',
//     description: 'Sterile injectable formulations for rapid and effective treatment',
//     items: ['Antibiotics', 'Anti-inflammatory', 'Vitamins', 'Hormones'],
//     bgColor: '#ffebee'
//   },
//   { 
//     icon: FlaskConical, 
//     title: 'Disinfectants', 
//     count: '40+',
//     description: 'Powerful biosecurity solutions for farm hygiene and disease prevention',
//     items: ['Surface Cleaners', 'Water Sanitizers', 'Aerial Disinfectants', 'Equipment'],
//     bgColor: '#e0f2f1'
//   },
//   { 
//     icon: Shield, 
//     title: 'Ectoparasites', 
//     count: '35+',
//     description: 'Effective external parasite control for all animal species',
//     items: ['Tick Control', 'Mite Treatment', 'Fly Repellents', 'Lice Control'],
//     bgColor: '#fce4ec'
//   },
// ]

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.1
//     }
//   }
// }

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.5, ease: 'easeOut' }
//   }
// }

// export default function ProductsAtGlance() {
//   return (
//     <section className="relative py-16 md:py-24 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fb] via-white to-[#f8fafc]" />
      
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div 
//           className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30"
//           style={{ background: `radial-gradient(circle, ${PRIMARY_COLOR}15 0%, transparent 70%)` }}
//         />
//         <div 
//           className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-30"
//           style={{ background: `radial-gradient(circle, ${PRIMARY_COLOR}15 0%, transparent 70%)` }}
//         />
//         {/* Subtle grid pattern */}
//         <div 
//           className="absolute inset-0 opacity-[0.03]"
//           style={{ 
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23243d80' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
//           }}
//         />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//         {/* Header */}
//         <motion.div 
//           className="text-center mb-14"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <span
//             className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full"
//             style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}
//           >
//             Product Range
//           </span>

//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Products at a Glance
//           </h2>

//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Comprehensive range of GMP certified veterinary medicines and
//             healthcare products for all animal sectors.
//           </p>
//         </motion.div>

//         {/* Product Grid */}
//         <motion.div 
//           className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {productCategories.map((product, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="relative overflow-hidden border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-[#243d80]/20 cursor-pointer group"
//               style={{ backgroundColor: product.bgColor }}
//             >
//               {/* Content */}
//               <div className="relative z-10">
//                 {/* Icon + Count */}
//                 <div className="flex items-center justify-between mb-5">
//                   <div
//                     className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-white shadow-sm"
//                   >
//                     <product.icon
//                       className="w-6 h-6"
//                       style={{ color: PRIMARY_COLOR }}
//                     />
//                   </div>

//                   <span
//                     className="text-sm font-bold px-3 py-1 rounded-full bg-white shadow-sm"
//                     style={{ color: PRIMARY_COLOR }}
//                   >
//                     {product.count}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#243d80] transition-colors">
//                   {product.title}
//                 </h3>

//                 {/* Divider */}
//                 <div className="h-[2px] w-10 mb-4 rounded-full transition-all duration-300 group-hover:w-16" style={{ backgroundColor: PRIMARY_COLOR }}></div>

//                 {/* Description */}
//                 <p className="text-sm text-gray-600 mb-5 leading-relaxed line-clamp-2">
//                   {product.description}
//                 </p>

//                 {/* Items */}
//                 <ul className="space-y-2">
//                   {product.items.slice(0, 3).map((item, i) => (
//                     <li key={i} className="text-sm text-gray-700 flex items-center">
//                       <span 
//                         className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" 
//                         style={{ backgroundColor: PRIMARY_COLOR }}
//                       ></span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Hover accent line */}
//               <div 
//                 className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl"
//                 style={{ backgroundColor: PRIMARY_COLOR }}
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA */}
//         <motion.div 
//           className="text-center mt-14"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <Link href="/products">
//             <button
//               className="px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105"
//               style={{ backgroundColor: PRIMARY_COLOR }}
//               onMouseOver={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#1b2f66")
//               }
//               onMouseOut={(e) =>
//                 (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)
//               }
//             >
//               View All Products
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// 'use client'

// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { 
//   Droplets, Package, Beaker, Pill, Syringe, FlaskConical, Shield
// } from 'lucide-react'

// const PRIMARY_COLOR = '#243d80'

// // Product categories data with background colors
// const productCategories = [
//   { 
//     icon: Droplets, 
//     title: 'Oral Liquids', 
//     count: '120+',
//     description: 'High-quality liquid formulations for easy administration and rapid absorption',
//     items: ['Oral Suspensions', 'Liquid Medicines', 'Electrolytes', 'Vitamin Solutions'],
//     bgColor: '#e0f7fa'
//   },
//   { 
//     icon: Package, 
//     title: 'Dry Powders', 
//     count: '80+',
//     description: 'Stable powder formulations with extended shelf life for water soluble applications',
//     items: ['Water Soluble Powders', 'Premixes', 'Concentrates', 'Feed Additives'],
//     bgColor: '#fff8e1'
//   },
//   { 
//     icon: Beaker, 
//     title: 'Feed Supplements', 
//     count: '150+',
//     description: 'Nutritional supplements for optimal animal health and productivity',
//     items: ['Mineral Mixtures', 'Vitamins', 'Amino Acids', 'Enzymes'],
//     bgColor: '#e8f5e9'
//   },
//   { 
//     icon: Pill, 
//     title: 'Tablets', 
//     count: '60+',
//     description: 'Precise dosage solid formulations for accurate treatment protocols',
//     items: ['Anthelmintics', 'Antibiotics', 'Nutritional', 'Combination Tablets'],
//     bgColor: '#f3e5f5'
//   },
//   { 
//     icon: Syringe, 
//     title: 'Injectables', 
//     count: '50+',
//     description: 'Sterile injectable formulations for rapid and effective treatment',
//     items: ['Antibiotics', 'Anti-inflammatory', 'Vitamins', 'Hormones'],
//     bgColor: '#ffebee'
//   },
//   { 
//     icon: FlaskConical, 
//     title: 'Disinfectants', 
//     count: '40+',
//     description: 'Powerful biosecurity solutions for farm hygiene and disease prevention',
//     items: ['Surface Cleaners', 'Water Sanitizers', 'Aerial Disinfectants', 'Equipment'],
//     bgColor: '#e0f2f1'
//   },
//   { 
//     icon: Shield, 
//     title: 'Ectoparasites', 
//     count: '35+',
//     description: 'Effective external parasite control for all animal species',
//     items: ['Tick Control', 'Mite Treatment', 'Fly Repellents', 'Lice Control'],
//     bgColor: '#fce4ec'
//   },
// ]

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.1
//     }
//   }
// }

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.5, ease: 'easeOut' }
//   }
// }

// export default function ProductsAtGlance() {
//   return (
//     <section className="relative py-16 md:py-24 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fb] via-white to-[#f8fafc]" />
      
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div 
//           className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30"
//           style={{ background: `radial-gradient(circle, ${PRIMARY_COLOR}15 0%, transparent 70%)` }}
//         />
//         <div 
//           className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-30"
//           style={{ background: `radial-gradient(circle, ${PRIMARY_COLOR}15 0%, transparent 70%)` }}
//         />
//         {/* Subtle grid pattern */}
//         <div 
//           className="absolute inset-0 opacity-[0.03]"
//           style={{ 
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23243d80' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
//           }}
//         />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//         {/* Header */}
//         <motion.div 
//           className="text-center mb-14"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <span
//             className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full"
//             style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}
//           >
//             Product Range
//           </span>

//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Products at a Glance
//           </h2>

//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Comprehensive range of GMP certified veterinary medicines and
//             healthcare products for all animal sectors.
//           </p>
//         </motion.div>

//         {/* Product Grid */}
//         <motion.div 
//           className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {productCategories.map((product, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="relative overflow-hidden border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-[#243d80]/20 cursor-pointer group"
//               style={{ backgroundColor: product.bgColor }}
//             >
//               {/* Content */}
//               <div className="relative z-10">
//                 {/* Icon + Count */}
//                 <div className="flex items-center justify-between mb-5">
//                   <div
//                     className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-white shadow-sm"
//                   >
//                     <product.icon
//                       className="w-6 h-6"
//                       style={{ color: PRIMARY_COLOR }}
//                     />
//                   </div>

//                   <span
//                     className="text-sm font-bold px-3 py-1 rounded-full bg-white shadow-sm"
//                     style={{ color: PRIMARY_COLOR }}
//                   >
//                     {product.count}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#243d80] transition-colors">
//                   {product.title}
//                 </h3>

//                 {/* Divider */}
//                 <div className="h-[2px] w-10 mb-4 rounded-full transition-all duration-300 group-hover:w-16" style={{ backgroundColor: PRIMARY_COLOR }}></div>

//                 {/* Description */}
//                 <p className="text-sm text-gray-600 mb-5 leading-relaxed line-clamp-2">
//                   {product.description}
//                 </p>

//                 {/* Items */}
//                 <ul className="space-y-2">
//                   {product.items.slice(0, 3).map((item, i) => (
//                     <li key={i} className="text-sm text-gray-700 flex items-center">
//                       <span 
//                         className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" 
//                         style={{ backgroundColor: PRIMARY_COLOR }}
//                       ></span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Hover accent line */}
//               <div 
//                 className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl"
//                 style={{ backgroundColor: PRIMARY_COLOR }}
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA */}
//         <motion.div 
//           className="text-center mt-14"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <Link href="/products">
//             <button
//               className="px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105"
//               style={{ backgroundColor: PRIMARY_COLOR }}
//               onMouseOver={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#1b2f66")
//               }
//               onMouseOut={(e) =>
//                 (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)
//               }
//             >
//               View All Products
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// 'use client'

// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { 
//   Droplets, Package, Beaker, Pill, Syringe, FlaskConical, Shield
// } from 'lucide-react'

// const PRIMARY_COLOR = '#243d80'

// // Product categories data
// const productCategories = [
//   { 
//     icon: Droplets, 
//     title: 'Oral Liquids', 
//     count: '120+',
//     description: 'High-quality liquid formulations for easy administration and rapid absorption',
//     items: ['Oral Suspensions', 'Liquid Medicines', 'Electrolytes', 'Vitamin Solutions'],
//     bgColor: '#e0f7fa',
//     bgImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop'
//   },
//   { 
//     icon: Package, 
//     title: 'Dry Powders', 
//     count: '80+',
//     description: 'Stable powder formulations with extended shelf life for water soluble applications',
//     items: ['Water Soluble Powders', 'Premixes', 'Concentrates', 'Feed Additives'],
//     bgColor: '#fff8e1',
//     bgImage: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=600&auto=format&fit=crop'
//   },
//   { 
//     icon: Beaker, 
//     title: 'Feed Supplements', 
//     count: '150+',
//     description: 'Nutritional supplements for optimal animal health and productivity',
//     items: ['Mineral Mixtures', 'Vitamins', 'Amino Acids', 'Enzymes'],
//     bgColor: '#e8f5e9',
//     bgImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop'
//   },
//   { 
//     icon: Pill, 
//     title: 'Tablets', 
//     count: '60+',
//     description: 'Precise dosage solid formulations for accurate treatment protocols',
//     items: ['Anthelmintics', 'Antibiotics', 'Nutritional', 'Combination Tablets'],
//     bgColor: '#f3e5f5',
//     bgImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=600&auto=format&fit=crop'
//   },
//   { 
//     icon: Syringe, 
//     title: 'Injectables', 
//     count: '50+',
//     description: 'Sterile injectable formulations for rapid and effective treatment',
//     items: ['Antibiotics', 'Anti-inflammatory', 'Vitamins', 'Hormones'],
//     bgColor: '#ffebee',
//     bgImage: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=600&auto=format&fit=crop'
//   },
//   { 
//     icon: FlaskConical, 
//     title: 'Disinfectants', 
//     count: '40+',
//     description: 'Powerful biosecurity solutions for farm hygiene and disease prevention',
//     items: ['Surface Cleaners', 'Water Sanitizers', 'Aerial Disinfectants', 'Equipment'],
//     bgColor: '#e0f2f1',
//     bgImage: 'https://images.unsplash.com/photo-1584362917165-526a968a8e8b?q=80&w=600&auto=format&fit=crop'
//   },
//   { 
//     icon: Shield, 
//     title: 'Ectoparasites', 
//     count: '35+',
//     description: 'Effective external parasite control for all animal species',
//     items: ['Tick Control', 'Mite Treatment', 'Fly Repellents', 'Lice Control'],
//     bgColor: '#fce4ec',
//     bgImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600&auto=format&fit=crop'
//   },
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.1 }
//   }
// }

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.5, ease: 'easeOut' }
//   }
// }

// const ProductCard = ({ product, index }) => (
//   <motion.div
//     variants={cardVariants}
//     whileHover={{ y: -8, scale: 1.01 }}
//     className="relative overflow-hidden border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl cursor-pointer group w-[320px] md:w-auto flex-shrink-0"
//   >
//     {/* 1. Background Image Layer */}
//     <div 
//       className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//       style={{ backgroundImage: `url(${product.bgImage})` }}
//     />

//     {/* 2. Glassmorphism Overlay Layer */}
//     {/* We use the category color with high opacity and blur for texture + readability */}
//     <div 
//       className="absolute inset-0 backdrop-blur-sm transition-all duration-300"
//       style={{ backgroundColor: product.bgColor, opacity: 0.85 }}
//     />

//     {/* 3. Readability Safety Gradient (Bottom) */}
//     {/* Adds a fade at the bottom to guarantee text legibility */}
//     <div 
//       className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"
//     />

//     {/* Content Layer */}
//     <div className="relative z-10 h-full flex flex-col">
//       {/* Icon + Count */}
//       <div className="flex items-center justify-between mb-5">
//         <div
//           className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
//           // Glass effect for the icon badge
//           style={{ backgroundColor: `rgba(255, 255, 255, 0.6)`, backdropFilter: 'blur(4px)' }}
//         >
//           <product.icon
//             className="w-6 h-6"
//             style={{ color: PRIMARY_COLOR }}
//           />
//         </div>

//         <span
//           className="text-sm font-bold px-3 py-1 rounded-full shadow-sm"
//           style={{ color: PRIMARY_COLOR, backgroundColor: `rgba(255, 255, 255, 0.7)` }}
//         >
//           {product.count}
//         </span>
//       </div>

//       <div className="mt-auto"> {/* Pushes text content to bottom if needed, or standard flow */}
//         {/* Title */}
//         <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#243d80] transition-colors drop-shadow-sm">
//           {product.title}
//         </h3>

//         {/* Divider */}
//         <div className="h-[2px] w-10 mb-4 rounded-full transition-all duration-300 group-hover:w-16" style={{ backgroundColor: PRIMARY_COLOR }} />

//         {/* Description */}
//         <p className="text-sm text-gray-700 mb-5 leading-relaxed line-clamp-2 font-medium">
//           {product.description}
//         </p>

//         {/* Items */}
//         <ul className="space-y-2">
//           {product.items.slice(0, 3).map((item, i) => (
//             <li key={i} className="text-sm text-gray-800 flex items-center font-medium">
//               <span 
//                 className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" 
//                 style={{ backgroundColor: PRIMARY_COLOR }}
//               />
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       {/* Hover accent line */}
//       <div 
//         className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl"
//         style={{ backgroundColor: PRIMARY_COLOR }}
//       />
//     </div>
//   </motion.div>
// )

// export default function ProductsAtGlance() {
//   // Duplicating categories for infinite scroll illusion
//   const scrollingCategories = [...productCategories, ...productCategories]

//   return (
//     <section className="relative py-16 md:py-24 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fb] via-white to-[#f8fafc]" />
      
//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//         {/* Header */}
//         <motion.div 
//           className="text-center mb-14"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <span
//             className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full"
//             style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}
//           >
//             Product Range
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Products at a Glance
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Comprehensive range of GMP certified veterinary medicines and
//             healthcare products for all animal sectors.
//           </p>
//         </motion.div>

//         {/* Mobile Infinite Carousel */}
//         <div className="md:hidden overflow-hidden relative -mx-4 px-4">
//           {/* Gradient Overlays for smooth edges */}
//           <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

//           <motion.div 
//             className="flex gap-6"
//             animate={{
//               x: [0, -1120], // Width of 1 set of cards (7 cards * 320px + gaps)
//               transition: {
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 20,
//                   ease: "linear",
//                 },
//               }
//             }}
//           >
//             {scrollingCategories.map((product, index) => (
//               <ProductCard key={`mobile-${index}`} product={product} index={index} />
//             ))}
//           </motion.div>
//         </div>

//         {/* Desktop Grid */}
//         <motion.div 
//           className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {productCategories.map((product, index) => (
//             <ProductCard key={`desktop-${index}`} product={product} index={index} />
//           ))}
//         </motion.div>

//         {/* CTA */}
//         <motion.div 
//           className="text-center mt-14"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <Link href="/products">
//             <button
//               className="px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105"
//               style={{ backgroundColor: PRIMARY_COLOR }}
//               onMouseOver={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#1b2f66")
//               }
//               onMouseOut={(e) =>
//                 (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)
//               }
//             >
//               View All Products
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
//}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Droplets, Package, Beaker, Pill, Syringe, FlaskConical, Shield, ArrowRight
} from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

const productCategories = [
  { 
    icon: Droplets, 
    title: 'Oral Liquids', 
    count: '120+',
    description: 'High-quality liquid formulations for easy administration and rapid absorption',
    items: ['Oral Suspensions', 'Liquid Medicines', 'Electrolytes'],
    bgImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Package, 
    title: 'Dry Powders', 
    count: '80+',
    description: 'Stable powder formulations with extended shelf life for water soluble applications',
    items: ['Water Soluble Powders', 'Premixes', 'Concentrates'],
    bgImage: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Beaker, 
    title: 'Feed Supplements', 
    count: '150+',
    description: 'Nutritional supplements for optimal animal health and productivity',
    items: ['Mineral Mixtures', 'Vitamins', 'Amino Acids'],
    bgImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Pill, 
    title: 'Tablets', 
    count: '60+',
    description: 'Precise dosage solid formulations for accurate treatment protocols',
    items: ['Anthelmintics', 'Antibiotics', 'Nutritional'],
    bgImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Syringe, 
    title: 'Injectables', 
    count: '50+',
    description: 'Sterile injectable formulations for rapid and effective treatment',
    items: ['Antibiotics', 'Anti-inflammatory', 'Vitamins'],
    bgImage: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: FlaskConical, 
    title: 'Disinfectants', 
    count: '40+',
    description: 'Powerful biosecurity solutions for farm hygiene and disease prevention',
    items: ['Surface Cleaners', 'Water Sanitizers', 'Aerial Disinfectants'],
    // FIXED: Reliable image URL for disinfectants/cleaning products
    bgImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    icon: Shield, 
    title: 'Ectoparasites', 
    count: '35+',
    description: 'Effective external parasite control for all animal species',
    items: ['Tick Control', 'Mite Treatment', 'Fly Repellents'],
    bgImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600&auto=format&fit=crop'
  },
]

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// Reusable Card Component
const ProductCard = ({ product, index }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    className="relative overflow-hidden border border-gray-200/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl cursor-pointer group w-[320px] md:w-auto flex-shrink-0"
  >
    {/* 1. Background Image Layer */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url(${product.bgImage})` }}
    />

    {/* 2. Visibility Overlay Layer */}
    {/* Added a semi-transparent white overlay to ensure dark text is readable over any image */}
    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-white/75" />

    {/* Content Layer */}
    <div className="relative z-10 h-full flex flex-col">
      {/* Header: Icon & Count */}
      <div className="flex items-center justify-between mb-5">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 bg-white"
        >
          <product.icon className="w-7 h-7" style={{ color: PRIMARY_COLOR }} />
        </div>

        <span
          className="text-lg font-bold px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100"
          style={{ color: PRIMARY_COLOR }}
        >
          {product.count}
        </span>
      </div>

      {/* Title & Description */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#243d80] transition-colors">
          {product.title}
        </h3>
        <div className="h-[2px] w-12 mb-3 rounded-full transition-all duration-300 group-hover:w-20" style={{ backgroundColor: PRIMARY_COLOR }} />
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Items List */}
      <ul className="mt-auto space-y-2 pt-4 border-t border-gray-200/80">
        {product.items.map((item, i) => (
          <li key={i} className="text-sm text-gray-800 flex items-center font-medium">
            <span 
              className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" 
              style={{ backgroundColor: PRIMARY_COLOR }}
            />
            {item}
          </li>
        ))}
      </ul>
      
      {/* Bottom Accent Line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"
        style={{ backgroundColor: PRIMARY_COLOR }}
      />
    </div>
  </motion.div>
)

export default function ProductsAtGlance() {
  // Duplicate for infinite scroll illusion
  const scrollingCategories = [...productCategories, ...productCategories]

  // Calculation for infinite scroll distance
  const scrollWidth = 344 * 7; 

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-white to-[#f4f6fb]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
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
            style={{ backgroundColor: `${PRIMARY_COLOR}10`, color: PRIMARY_COLOR }}
          >
            Our Range
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Products at a Glance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of GMP certified veterinary medicines and healthcare products.
          </p>
        </motion.div>

        {/* Mobile Infinite Carousel */}
        <div className="md:hidden overflow-hidden relative -mx-4 px-4">
          {/* Gradient Overlays for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc] to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex gap-6"
            animate={{
              x: [0, -scrollWidth],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }
            }}
          >
            {scrollingCategories.map((product, index) => (
              <ProductCard key={`mobile-${index}`} product={product} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <motion.div 
          className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {productCategories.map((product, index) => (
            <ProductCard key={`desktop-${index}`} product={product} index={index} />
          ))}
        </motion.div>

        {/* View All Products Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/products">
            <button
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 group"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              View All Products
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}