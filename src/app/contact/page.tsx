// 'use client'

// import { useState, useRef } from 'react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
// import { motion, useInView } from 'framer-motion'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'
// import FloatingSocialLinks from '@/components/FloatingSocialLinks'

// const PRIMARY_COLOR = '#243d80'
// const PRIMARY_HOVER = '#1a2d5c'

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// }

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -30 },
//   visible: { 
//     opacity: 1, 
//     x: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// }

// const fadeInRight = {
//   hidden: { opacity: 0, x: 30 },
//   visible: { 
//     opacity: 1, 
//     x: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// }

// // Animated section wrapper
// function AnimatedSection({ 
//   children, 
//   className = '', 
//   variant = fadeInUp 
// }: { 
//   children: React.ReactNode
//   className?: string
//   variant?: typeof fadeInUp 
// }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-100px' })
  
//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={isInView ? 'visible' : 'hidden'}
//       variants={variant}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   )
// }

// const contactInfo = [
//   { 
//     icon: MapPin, 
//     title: 'Head Office', 
//     lines: ['123 Industrial Area, Phase-II', 'Hyderabad, Telangana 500018, India'],
//     link: null
//   },
//   { 
//     icon: Phone, 
//     title: 'Phone', 
//     lines: ['+91 40 1234 5678', '+91 98765 43210'],
//     link: 'tel:+914012345678'
//   },
//   { 
//     icon: Mail, 
//     title: 'Email', 
//     lines: ['info@biovetslabs.com', 'support@biovetslabs.com'],
//     link: 'mailto:info@biovetslabs.com'
//   },
//   { 
//     icon: Clock, 
//     title: 'Business Hours', 
//     lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
//     link: null
//   },
// ]

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     subject: '',
//     message: ''
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Simulate form submission
//     setIsSubmitted(true)
//     setTimeout(() => {
//       setIsSubmitted(false)
//       setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
//     }, 3000)
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Floating Social Links */}
//       <FloatingSocialLinks />

//       {/* Header */}
//       <Header />

//       {/* Hero Section */}
//       <section 
//         className="relative py-20 md:py-28"
//         style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Badge className="mb-4 bg-white/20 text-white border-white/30">
//               Contact Us
//             </Badge>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Get In Touch
//             </h1>
//             <p className="text-lg text-blue-100 max-w-2xl">
//               Have questions about our products or need technical support? Our team is here to help you.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-16 md:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Info */}
//             <AnimatedSection variant={fadeInLeft}>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Contact Information
//               </h2>
//               <p className="text-gray-600 mb-8 leading-relaxed">
//                 Reach out to us through any of the channels below. Our dedicated team is available 
//                 to answer your questions and provide support for all your animal healthcare needs.
//               </p>
              
//               <div className="space-y-6">
//                 {contactInfo.map((item, i) => (
//                   <motion.div 
//                     key={i}
//                     className="flex items-start gap-4"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <div 
//                       className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
//                       style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
//                     >
//                       <item.icon className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
//                       {item.link ? (
//                         <a href={item.link} className="text-gray-600 hover:underline">
//                           {item.lines.map((line, idx) => (
//                             <span key={idx}>
//                               {line}
//                               {idx < item.lines.length - 1 && <br />}
//                             </span>
//                           ))}
//                         </a>
//                       ) : (
//                         <p className="text-gray-600">
//                           {item.lines.map((line, idx) => (
//                             <span key={idx}>
//                               {line}
//                               {idx < item.lines.length - 1 && <br />}
//                             </span>
//                           ))}
//                         </p>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Map placeholder */}
//               <motion.div 
//                 className="mt-8 rounded-xl overflow-hidden border"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 <div 
//                   className="w-full h-64 flex items-center justify-center text-gray-500"
//                   style={{ backgroundColor: `${PRIMARY_COLOR}10` }}
//                 >
//                   <div className="text-center">
//                     <MapPin className="w-12 h-12 mx-auto mb-2" style={{ color: PRIMARY_COLOR }} />
//                     <p className="font-medium" style={{ color: PRIMARY_COLOR }}>Find Us on Map</p>
//                     <p className="text-sm text-gray-500">Hyderabad, Telangana, India</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatedSection>

//             {/* Contact Form */}
//             <AnimatedSection variant={fadeInRight}>
//               <Card className="bg-white">
//                 <CardHeader>
//                   <CardTitle>Send us a Message</CardTitle>
//                   <CardDescription>
//                     Fill out the form below and we will get back to you within 24 hours.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {isSubmitted ? (
//                     <motion.div 
//                       className="text-center py-12"
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                     >
//                       <div 
//                         className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
//                         style={{ backgroundColor: `${PRIMARY_COLOR}20` }}
//                       >
//                         <CheckCircle className="w-8 h-8" style={{ color: PRIMARY_COLOR }} />
//                       </div>
//                       <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
//                       <p className="text-gray-600">
//                         Your message has been sent successfully. We will get back to you soon.
//                       </p>
//                     </motion.div>
//                   ) : (
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div className="grid md:grid-cols-2 gap-4">
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                         >
//                           <label className="text-sm font-medium text-gray-700 mb-1 block">Name *</label>
//                           <Input
//                             placeholder="Your name"
//                             value={formData.name}
//                             onChange={(e) => setFormData({...formData, name: e.target.value})}
//                             required
//                           />
//                         </motion.div>
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.05 }}
//                           viewport={{ once: true }}
//                         >
//                           <label className="text-sm font-medium text-gray-700 mb-1 block">Email *</label>
//                           <Input
//                             type="email"
//                             placeholder="your@email.com"
//                             value={formData.email}
//                             onChange={(e) => setFormData({...formData, email: e.target.value})}
//                             required
//                           />
//                         </motion.div>
//                       </div>
//                       <div className="grid md:grid-cols-2 gap-4">
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.1 }}
//                           viewport={{ once: true }}
//                         >
//                           <label className="text-sm font-medium text-gray-700 mb-1 block">Phone</label>
//                           <Input
//                             type="tel"
//                             placeholder="+91 98765 43210"
//                             value={formData.phone}
//                             onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                           />
//                         </motion.div>
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.15 }}
//                           viewport={{ once: true }}
//                         >
//                           <label className="text-sm font-medium text-gray-700 mb-1 block">Company</label>
//                           <Input
//                             placeholder="Company name"
//                             value={formData.company}
//                             onChange={(e) => setFormData({...formData, company: e.target.value})}
//                           />
//                         </motion.div>
//                       </div>
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                         viewport={{ once: true }}
//                       >
//                         <label className="text-sm font-medium text-gray-700 mb-1 block">Subject</label>
//                         <Input
//                           placeholder="How can we help?"
//                           value={formData.subject}
//                           onChange={(e) => setFormData({...formData, subject: e.target.value})}
//                         />
//                       </motion.div>
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.25 }}
//                         viewport={{ once: true }}
//                       >
//                         <label className="text-sm font-medium text-gray-700 mb-1 block">Message *</label>
//                         <Textarea
//                           placeholder="Tell us about your requirements..."
//                           rows={5}
//                           value={formData.message}
//                           onChange={(e) => setFormData({...formData, message: e.target.value})}
//                           required
//                         />
//                       </motion.div>
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                         viewport={{ once: true }}
//                       >
//                         <Button 
//                           type="submit" 
//                           className="w-full"
//                           style={{ backgroundColor: PRIMARY_COLOR }}
//                         >
//                           <Send className="w-4 h-4 mr-2" />
//                           Send Message
//                         </Button>
//                       </motion.div>
//                     </form>
//                   )}
//                 </CardContent>
//               </Card>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Global Presence */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
//           <AnimatedSection className="text-center mb-12">
//             <Badge 
//               className="mb-4"
//               style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
//             >
//               Global Presence
//             </Badge>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Serving 50+ Countries Worldwide
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Our products are trusted by farmers and businesses across the globe
//             </p>
//           </AnimatedSection>

//           <motion.div 
//             className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             {[
//               'India', 'USA', 'Brazil', 'Vietnam', 'Thailand', 'Indonesia',
//               'Bangladesh', 'Nigeria', 'Egypt', 'Philippines', 'Mexico', 'Colombia'
//             ].map((country, i) => (
//               <motion.div
//                 key={country}
//                 className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 viewport={{ once: true }}
//               >
//                 <span className="text-sm font-medium text-gray-700">{country}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }

'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingSocialLinks from '@/components/FloatingSocialLinks'
import MapComponent, { MapLocation } from '@/components/MapComponent'


const PRIMARY_COLOR = '#243d80'
const PRIMARY_HOVER = '#1a2d5c'

const mapLocations: MapLocation[] = [
  {
    id: 'headoffice',
    name: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
    type: 'headoffice',
    address: 'Plot No. 24, Phase-III, IDA, Jeedimetla, Hyderabad - 500 055, Telangana, India',
    phone: '+91 40 2304 5678',
    email: 'info@siflonpharma.com',
    lat: 17.4399,
    lng: 78.4983,
    certifications: ['WHO-GMP', 'ISO 9001:2015']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing Unit - Hyderabad',
    type: 'manufacturing',
    address: 'Survey No. 125, Pashamylaram, Patancheru, Hyderabad - 502 319, Telangana',
    phone: '+91 40 2304 5679',
    email: 'manufacturing@siflonpharma.com',
    lat: 17.5298,
    lng: 78.2657,
    certifications: ['GMP', 'WHO-GMP', 'ISO 9001:2015']
  },
  {
    id: 'mumbai',
    name: 'Siflon Distributor - Mumbai',
    type: 'domestic',
    address: 'Andheri East, Mumbai - 400 069, Maharashtra',
    phone: '+91 22 2834 5678',
    email: 'mumbai@siflonpharma.com',
    lat: 19.1136,
    lng: 72.8697
  },
  {
    id: 'chennai',
    name: 'Siflon Distributor - Chennai',
    type: 'domestic',
    address: 'T. Nagar, Chennai - 600 017, Tamil Nadu',
    phone: '+91 44 2815 6789',
    email: 'chennai@siflonpharma.com',
    lat: 13.0418,
    lng: 80.2341
  },
  {
    id: 'vietnam',
    name: 'Siflon Vietnam',
    type: 'international',
    address: 'District 7, Ho Chi Minh City, Vietnam',
    phone: '+84 28 1234 5678',
    email: 'vietnam@siflonpharma.com',
    lat: 10.7756,
    lng: 106.7005,
    country: 'Vietnam',
    flag: '🇻🇳'
  },
  {
    id: 'thailand',
    name: 'Siflon Thailand',
    type: 'international',
    address: 'Bangkok, Thailand',
    phone: '+66 2 123 4567',
    email: 'thailand@siflonpharma.com',
    lat: 13.7563,
    lng: 100.5018,
    country: 'Thailand',
    flag: '🇹🇭'
  },
  {
    id: 'nigeria',
    name: 'Siflon Nigeria',
    type: 'international',
    address: 'Lagos, Nigeria',
    phone: '+234 1 234 5678',
    email: 'nigeria@siflonpharma.com',
    lat: 6.5244,
    lng: 3.3792,
    country: 'Nigeria',
    flag: '🇳🇬'
  },
  {
    id: 'bangladesh',
    name: 'Siflon Bangladesh',
    type: 'international',
    address: 'Dhaka, Bangladesh',
    phone: '+880 2 1234 5678',
    email: 'bangladesh@siflonpharma.com',
    lat: 23.8103,
    lng: 90.4125,
    country: 'Bangladesh',
    flag: '🇧🇩'
  }
]


// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Animated section wrapper
function AnimatedSection({ 
  children, 
  className = '', 
  variant = fadeInUp 
}: { 
  children: React.ReactNode
  className?: string
  variant?: typeof fadeInUp 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const contactInfo = [
  { 
    icon: MapPin, 
    title: 'Address', 
    lines: ['Phase-1, Manu Residency, Plot No. 76 & 77,', 'Behind Sri Sairam Model School, Mythri Nagar,', 'Hafeezpet, Hyderabad, Telangana 500049'],
    link: 'https://www.google.com/maps/dir//SIFLON+DRUGS+%26+PHARMACEUTICALS+PVT+LTD+Phase-1,+Manu+Residency+Plot+No.+76+%26+77,+behind+Sri+Sairam+Model+School,+Mythri+Nagar,+Indra+Reddy+Allwyn+Colony,+Hafeezpet+Madeenaguda,+Hyderabad,+Telangana+500049/@17.4912751,78.3494713,15z'
  },
  { 
    icon: Phone, 
    title: 'Phone', 
    lines: ['+91 6366798465', '+91 9281162784'],
    link: 'tel:+916366798465'
  },
  { 
    icon: Mail, 
    title: 'Email', 
    lines: ['marketing@siflonpolymers.com'],
    link: 'mailto:marketing@siflonpolymers.com'
  },
  { 
    icon: Clock, 
    title: 'Business Hours', 
    lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
    link: null
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating Social Links */}
      <FloatingSocialLinks />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28"
        style={{ background: `linear-gradient(to right, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Have questions about our products or need technical support? Our team is here to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection variant={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reach out to us through any of the channels below. Our dedicated team is available 
                to answer your questions and provide support for all your animal healthcare needs.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-gray-600 hover:underline">
                          {item.lines.map((line, idx) => (
                            <span key={idx}>
                              {line}
                              {idx < item.lines.length - 1 && <br />}
                            </span>
                          ))}
                        </a>
                      ) : (
                        <p className="text-gray-600">
                          {item.lines.map((line, idx) => (
                            <span key={idx}>
                              {line}
                              {idx < item.lines.length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Locations</h3>
                  <p className="text-sm text-gray-600">Click on markers to see location details</p>
                </div>
                <MapComponent 
                  locations={mapLocations}
                  center={[17.4399, 78.4983]}
                  zoom={5}
                  height="350px"
                />
              </motion.div> */}

              {/* Google Maps - Office Location */}
              <motion.div 
                className="mt-8 rounded-xl overflow-hidden border shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.882!2d78.3494713!3d17.4912751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9266e5555555%3A0x4a7ebb2fb2fe708f!2sSIFLON%20DRUGS%20%26%20PHARMACEUTICALS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Siflon Drugs & Pharmaceuticals Location"
                  />
                </div>
                <a 
                  href="https://www.google.com/maps/dir//SIFLON+DRUGS+%26+PHARMACEUTICALS+PVT+LTD+Phase-1,+Manu+Residency+Plot+No.+76+%26+77,+behind+Sri+Sairam+Model+School,+Mythri+Nagar,+Indra+Reddy+Allwyn+Colony,+Hafeezpet+Madeenaguda,+Hyderabad,+Telangana+500049/@17.4912751,78.3494713,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 text-center bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium" style={{ color: PRIMARY_COLOR }}>
                    Get Directions →
                  </span>
                </a>
              </motion.div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection variant={fadeInRight}>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we will get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div 
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div 
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${PRIMARY_COLOR}20` }}
                      >
                        <CheckCircle className="w-8 h-8" style={{ color: PRIMARY_COLOR }} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600">
                        Your message has been sent successfully. We will get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        >
                          <label className="text-sm font-medium text-gray-700 mb-1 block">Name *</label>
                          <Input
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 }}
                          viewport={{ once: true }}
                        >
                          <label className="text-sm font-medium text-gray-700 mb-1 block">Email *</label>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </motion.div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          <label className="text-sm font-medium text-gray-700 mb-1 block">Phone</label>
                          <Input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          viewport={{ once: true }}
                        >
                          <label className="text-sm font-medium text-gray-700 mb-1 block">Company</label>
                          <Input
                            placeholder="Company name"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                          />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Subject</label>
                        <Input
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        viewport={{ once: true }}
                      >
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Message *</label>
                        <Textarea
                          placeholder="Tell us about your requirements..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full"
                          style={{ backgroundColor: PRIMARY_COLOR }}
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Global Presence - World Map */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
          <AnimatedSection className="text-center mb-12">
            <Badge 
              className="mb-4"
              style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
            >
              Global Presence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving 50+ Countries Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our products are trusted by farmers and businesses across the globe with a strong distribution network.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* World Map Background */}
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=600&fit=crop"
                alt="World Map - Global Presence"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent" />
              
              {/* Map Pins */}
              <div className="absolute inset-0">
                {/* India */}
                <motion.div 
                  className="absolute"
                  style={{ top: '45%', left: '68%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-red-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">India</span>
                    </div>
                  </div>
                </motion.div>

                {/* USA */}
                <motion.div 
                  className="absolute"
                  style={{ top: '35%', left: '18%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">USA</span>
                    </div>
                  </div>
                </motion.div>

                {/* Brazil */}
                <motion.div 
                  className="absolute"
                  style={{ top: '60%', left: '30%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Brazil</span>
                    </div>
                  </div>
                </motion.div>

                {/* Vietnam */}
                <motion.div 
                  className="absolute"
                  style={{ top: '48%', left: '75%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-yellow-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Vietnam</span>
                    </div>
                  </div>
                </motion.div>

                {/* Thailand */}
                <motion.div 
                  className="absolute"
                  style={{ top: '50%', left: '73%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-purple-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Thailand</span>
                    </div>
                  </div>
                </motion.div>

                {/* Nigeria */}
                <motion.div 
                  className="absolute"
                  style={{ top: '52%', left: '48%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-orange-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-orange-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Nigeria</span>
                    </div>
                  </div>
                </motion.div>

                {/* Egypt */}
                <motion.div 
                  className="absolute"
                  style={{ top: '42%', left: '55%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-teal-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-teal-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Egypt</span>
                    </div>
                  </div>
                </motion.div>

                {/* Mexico */}
                <motion.div 
                  className="absolute"
                  style={{ top: '42%', left: '15%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-pink-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-pink-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Mexico</span>
                    </div>
                  </div>
                </motion.div>

                {/* Indonesia */}
                <motion.div 
                  className="absolute"
                  style={{ top: '58%', left: '78%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-indigo-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Indonesia</span>
                    </div>
                  </div>
                </motion.div>

                {/* Bangladesh */}
                <motion.div 
                  className="absolute"
                  style={{ top: '43%', left: '70%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-cyan-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-cyan-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Bangladesh</span>
                    </div>
                  </div>
                </motion.div>

                {/* Philippines */}
                <motion.div 
                  className="absolute"
                  style={{ top: '47%', left: '80%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-rose-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-rose-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Philippines</span>
                    </div>
                  </div>
                </motion.div>

                {/* Colombia */}
                <motion.div 
                  className="absolute"
                  style={{ top: '55%', left: '24%' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-amber-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-amber-500 rounded-full relative z-10 cursor-pointer" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-semibold text-gray-800">Colombia</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-8 h-8 text-white" />
                    <span className="text-white/80 text-sm uppercase tracking-wider">Global Reach</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    50+ Countries
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Our products are trusted by farmers and businesses across the globe. 
                    With a strong distribution network and local partnerships.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Asia', 'Africa', 'Americas', 'Europe'].map((region) => (
                      <span key={region} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                        {region}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
