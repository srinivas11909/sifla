'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Send, CheckCircle, User, Mail, Phone, Building, MessageSquare, Package } from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

const PRODUCT_CATEGORIES = [
  'Oral Liquids',
  'Dry Powders',
  'Feed Supplements',
  'Tablets',
  'Injectables',
  'Disinfectants',
  'Probiotics',
  'Other',
]

interface EnquiryDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function EnquiryDialog({ open, onOpenChange }: EnquiryDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productCategory: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setSubmitting(false)
    setSubmitted(true)

    // Reset after 3 seconds and close dialog
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        productCategory: '',
        message: '',
      })
      onOpenChange(false)
    }, 2500)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Package className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
            Get a Quote
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
            >
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              Your enquiry has been submitted successfully. We&apos;ll contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="enquiry-name" className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-gray-400" />
                Full Name *
              </Label>
              <Input
                id="enquiry-name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Your name"
                required
                className="border-gray-200 focus:border-gray-300"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="enquiry-email" className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  Email *
                </Label>
                <Input
                  id="enquiry-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="border-gray-200 focus:border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="enquiry-phone" className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  Phone *
                </Label>
                <Input
                  id="enquiry-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+91..."
                  required
                  className="border-gray-200 focus:border-gray-300"
                />
              </div>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="enquiry-company" className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-gray-400" />
                Company Name
              </Label>
              <Input
                id="enquiry-company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Your company"
                className="border-gray-200 focus:border-gray-300"
              />
            </div>

            {/* Product Category */}
            <div className="space-y-2">
              <Label htmlFor="enquiry-category" className="flex items-center gap-1">
                <Package className="w-3.5 h-3.5 text-gray-400" />
                Product Category
              </Label>
              <Select
                value={formData.productCategory}
                onValueChange={(value) => handleInputChange('productCategory', value)}
              >
                <SelectTrigger className="border-gray-200 focus:border-gray-300">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {PRODUCT_CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="enquiry-message" className="flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
                Message
              </Label>
              <Textarea
                id="enquiry-message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us about your requirements..."
                rows={3}
                className="border-gray-200 focus:border-gray-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full font-semibold"
              style={{ backgroundColor: PRIMARY_COLOR }}
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Enquiry
                </>
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our privacy policy.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
