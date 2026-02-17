// 'use client'

// import Link from 'next/link'
// import { Separator } from '@/components/ui/separator'
// import { Beaker, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react'
// import { motion } from 'framer-motion'

// const PRIMARY_COLOR = '#243d80'

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Products', href: '/products' },
//   { name: 'Contact', href: '/contact' },
// ]

// const products = [
//   { name: 'Feed Supplements', href: '/products' },
//   { name: 'Probiotics', href: '/products' },
//   { name: 'Antibiotics', href: '/products' },
//   { name: 'Disinfectants', href: '/products' },
// ]

// const socialLinks = [
//   { name: 'Facebook', icon: Facebook, url: '#', color: '#1877F2' },
//   { name: 'Twitter', icon: Twitter, url: '#', color: '#1DA1F2' },
//   { name: 'LinkedIn', icon: Linkedin, url: '#', color: '#0A66C2' },
//   { name: 'YouTube', icon: Youtube, url: '#', color: '#FF0000' },
//   { name: 'Instagram', icon: Instagram, url: '#', color: '#E4405F' },
// ]

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 mt-auto">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 py-12">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center gap-2 mb-4">
//               <div 
//                 className="w-10 h-10 rounded-lg flex items-center justify-center"
//                 style={{ backgroundColor: PRIMARY_COLOR }}
//               >
//                 <Beaker className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <span className="text-xl font-bold text-white">Siflon</span>
//                 <p className="text-xs text-gray-400 -mt-1">Drugs & Pharmaceuticals Pvt Ltd</p>
//               </div>
//             </div>
//             <p className="text-sm text-gray-400 mb-4">
//               Leading manufacturer of animal healthcare products since 1993. Trusted partner for farmers worldwide.
//             </p>
//             <div className="flex gap-3">
//               {socialLinks.map((social, i) => (
//                 <a 
//                   key={social.name}
//                   href={social.url}
//                   className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border-2 border-gray-600 hover:border-transparent transition-all duration-300 hover:scale-110"
//                   style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = social.color}
//                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
//                 >
//                   <social.icon className="w-5 h-5 text-white" />
//                 </a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-white font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {navigation.map((item) => (
//                 <li key={item.name}>
//                   <Link href={item.href} className="text-sm hover:text-blue-400 transition-colors">
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Products */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-white font-semibold mb-4">Products</h4>
//             <ul className="space-y-2">
//               {products.map((product, i) => (
//                 <li key={i}>
//                   <Link href={product.href} className="text-sm hover:text-blue-400 transition-colors">
//                     {product.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-white font-semibold mb-4">Contact</h4>
//             <ul className="space-y-2 text-sm">
//               <li className="flex items-center gap-2">
//                 <MapPin className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
//                 Hyderabad, India
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
//                 +91 40 1234 5678
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />
//                 info@siflonpharma.com
//               </li>
//             </ul>
//           </motion.div>
//         </div>

//         <Separator className="my-8 bg-gray-800" />

//         <motion.div 
//           className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//         >
//           <p>&copy; {new Date().getFullYear()} Siflon Drugs & Pharmaceuticals Pvt Ltd. All rights reserved.</p>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
//             <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }

'use client'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Beaker, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const PRIMARY_COLOR = '#243d80'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
]

const products = [
  { name: 'Feed Supplements', href: '/products' },
  { name: 'Probiotics', href: '/products' },
  { name: 'Antibiotics', href: '/products' },
  { name: 'Disinfectants', href: '/products' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: '#', color: '#1877F2' },
  { name: 'Twitter', icon: Twitter, url: '#', color: '#1DA1F2' },
  { name: 'LinkedIn', icon: Linkedin, url: '#', color: '#0A66C2' },
  { name: 'YouTube', icon: Youtube, url: '#', color: '#FF0000' },
  { name: 'Instagram', icon: Instagram, url: '#', color: '#E4405F' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                <Beaker className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Siflon</span>
                <p className="text-xs text-gray-400 -mt-1">Drugs & Pharmaceuticals Pvt Ltd</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Leading manufacturer of animal healthcare products since 1993. Trusted partner for farmers worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border-2 border-gray-600 hover:border-transparent transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = social.color}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {products.map((product, i) => (
                <li key={i}>
                  <Link href={product.href} className="text-sm hover:text-blue-400 transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                <span>Phase-1, Manu Residency, Plot No. 76 & 77, Hafeezpet, Hyderabad - 500049</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                <span>+91 6366798465 / 9281162784</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                <span>marketing@siflonpolymers.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Siflon Drugs & Pharmaceuticals Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
