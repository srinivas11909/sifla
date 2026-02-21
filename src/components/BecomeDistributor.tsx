'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Building2, MapPin, Phone, Mail, Globe, Truck, Shield, 
  TrendingUp, Award, Users, CheckCircle, Handshake,
  Package, Headphones, DollarSign, Send, ChevronRight,
  Clock, Target, Star
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const PRIMARY_COLOR = '#243d80'
const PRIMARY_HOVER = '#1a2d5c'

const benefits = [
  {
    icon: Award,
    title: 'Premium Brand',
    description: 'Partner with a 30+ year established veterinary pharmaceutical brand'
  },
  {
    icon: Package,
    title: 'Wide Product Range',
    description: 'Access to 500+ high-quality veterinary products across all categories'
  },
  {
    icon: DollarSign,
    title: 'Attractive Margins',
    description: 'Competitive pricing with excellent profit margins for distributors'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'WHO-GMP certified products with consistent quality standards'
  },
  {
    icon: Headphones,
    title: 'Marketing Support',
    description: 'Complete marketing and promotional material support'
  },
  {
    icon: Truck,
    title: 'Timely Delivery',
    description: 'Reliable supply chain with on-time delivery guarantee'
  }
]

const steps = [
  {
    number: '01',
    title: 'Submit Inquiry',
    description: 'Fill out the distributor inquiry form with your business details'
  },
  {
    number: '02',
    title: 'Verification',
    description: 'Our team will verify your business credentials and territory'
  },
  {
    number: '03',
    title: 'Agreement',
    description: 'Sign the distributor agreement and complete formalities'
  },
  {
    number: '04',
    title: 'Start Business',
    description: 'Begin your partnership with product training and support'
  }
]

export default function BecomeDistributor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    state: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: `${PRIMARY_COLOR}10` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${PRIMARY_COLOR}08` }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            viewport={{ once: true }}
          >
            <Badge 
              className="mb-4"
              style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}
            >
              <Handshake className="w-3.5 h-3.5 mr-1.5" />
              Partnership Opportunity
            </Badge>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Become a <span style={{ color: PRIMARY_COLOR }}>Distributor</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our growing network of trusted distributors and build a successful business partnership with Siflon Pharmaceuticals
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-5">
                      <motion.div 
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${PRIMARY_COLOR}12` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <benefit.icon className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                      </motion.div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* How it Works */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                How It Works
              </h3>
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
                
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 relative z-10"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                      >
                        {step.number}
                      </div>
                      <div className="flex-1 pb-4">
                        <h4 className="font-semibold text-gray-900">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                {/* Form Header */}
                <div 
                  className="p-6 text-center"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_HOVER})` }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4"
                  >
                    <Handshake className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-1">Distributor Inquiry</h3>
                  <p className="text-sm text-blue-100">Fill the form to start your partnership journey</p>
                </div>

                {/* Form Body */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-8"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                          className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
                        >
                          <CheckCircle className="w-10 h-10 text-green-600" />
                        </motion.div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                        <p className="text-gray-600 mb-4">
                          Your inquiry has been submitted successfully. Our team will contact you within 24-48 hours.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>Response time: 24-48 hours</span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="border-gray-200 focus:border-gray-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="border-gray-200 focus:border-gray-400"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="border-gray-200 focus:border-gray-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company / Business Name *</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                            className="border-gray-200 focus:border-gray-400"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City *</Label>
                            <Input
                              id="city"
                              name="city"
                              placeholder="Your city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              className="border-gray-200 focus:border-gray-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">State *</Label>
                            <Input
                              id="state"
                              name="state"
                              placeholder="Your state"
                              value={formData.state}
                              onChange={handleInputChange}
                              required
                              className="border-gray-200 focus:border-gray-400"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message (Optional)</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your business and distribution experience..."
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={3}
                            className="border-gray-200 focus:border-gray-400 resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 text-white font-semibold"
                          style={{ backgroundColor: PRIMARY_COLOR }}
                        >
                          {isSubmitting ? (
                            <motion.div
                              className="flex items-center gap-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <motion.div
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              />
                              Submitting...
                            </motion.div>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Submit Inquiry
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-gray-500 text-center">
                          By submitting, you agree to our terms and privacy policy
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <motion.div
              className="mt-6 p-4 rounded-xl bg-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${PRIMARY_COLOR}12` }}
                >
                  <Phone className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">For immediate assistance</p>
                  <p className="font-semibold" style={{ color: PRIMARY_COLOR }}>+91 40 2717 4444</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { value: '500+', label: 'Distributors', icon: Users },
            { value: '50+', label: 'Countries', icon: Globe },
            { value: '30+', label: 'Years Trust', icon: Award },
            { value: '4.9', label: 'Rating', icon: Star }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-xl bg-white shadow-sm"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2" style={{ color: PRIMARY_COLOR }} />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
