// 'use client'

// import { useState } from 'react'
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from '@/components/ui/dialog'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { Label } from '@/components/ui/label'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import { Send, CheckCircle, User, Mail, Phone, Building, MessageSquare, Package } from 'lucide-react'

// const PRIMARY_COLOR = '#243d80'

// const PRODUCT_CATEGORIES = [
//   'Oral Liquids',
//   'Dry Powders',
//   'Feed Supplements',
//   'Tablets',
//   'Injectables',
//   'Disinfectants',
//   'Probiotics',
//   'Other',
// ]

// interface EnquiryDialogProps {
//   open: boolean
//   onOpenChange: (open: boolean) => void
// }

// export default function EnquiryDialog({ open, onOpenChange }: EnquiryDialogProps) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     productCategory: '',
//     message: '',
//   })
//   const [submitting, setSubmitting] = useState(false)
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setSubmitting(true)

//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1500))

//     setSubmitting(false)
//     setSubmitted(true)

//     // Reset after 3 seconds and close dialog
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         productCategory: '',
//         message: '',
//       })
//       onOpenChange(false)
//     }, 2500)
//   }

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }))
//   }

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
//             <Package className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
//             Get a Quote
//           </DialogTitle>
//           <DialogDescription>
//             Fill out the form below and our team will get back to you within 24 hours.
//           </DialogDescription>
//         </DialogHeader>

//         {submitted ? (
//           <div className="py-8 text-center">
//             <div 
//               className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//               style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
//             >
//               <CheckCircle className="w-8 h-8 text-green-600" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
//             <p className="text-gray-600">
//               Your enquiry has been submitted successfully. We&apos;ll contact you soon.
//             </p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//             {/* Name */}
//             <div className="space-y-2">
//               <Label htmlFor="enquiry-name" className="flex items-center gap-1">
//                 <User className="w-3.5 h-3.5 text-gray-400" />
//                 Full Name *
//               </Label>
//               <Input
//                 id="enquiry-name"
//                 value={formData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//                 placeholder="Your name"
//                 required
//                 className="border-gray-200 focus:border-gray-300"
//               />
//             </div>

//             {/* Email & Phone */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="enquiry-email" className="flex items-center gap-1">
//                   <Mail className="w-3.5 h-3.5 text-gray-400" />
//                   Email *
//                 </Label>
//                 <Input
//                   id="enquiry-email"
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange('email', e.target.value)}
//                   placeholder="your@email.com"
//                   required
//                   className="border-gray-200 focus:border-gray-300"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="enquiry-phone" className="flex items-center gap-1">
//                   <Phone className="w-3.5 h-3.5 text-gray-400" />
//                   Phone *
//                 </Label>
//                 <Input
//                   id="enquiry-phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => handleInputChange('phone', e.target.value)}
//                   placeholder="+91..."
//                   required
//                   className="border-gray-200 focus:border-gray-300"
//                 />
//               </div>
//             </div>

//             {/* Company */}
//             <div className="space-y-2">
//               <Label htmlFor="enquiry-company" className="flex items-center gap-1">
//                 <Building className="w-3.5 h-3.5 text-gray-400" />
//                 Company Name
//               </Label>
//               <Input
//                 id="enquiry-company"
//                 value={formData.company}
//                 onChange={(e) => handleInputChange('company', e.target.value)}
//                 placeholder="Your company"
//                 className="border-gray-200 focus:border-gray-300"
//               />
//             </div>

//             {/* Product Category */}
//             <div className="space-y-2">
//               <Label htmlFor="enquiry-category" className="flex items-center gap-1">
//                 <Package className="w-3.5 h-3.5 text-gray-400" />
//                 Product Category
//               </Label>
//               <Select
//                 value={formData.productCategory}
//                 onValueChange={(value) => handleInputChange('productCategory', value)}
//               >
//                 <SelectTrigger className="border-gray-200 focus:border-gray-300">
//                   <SelectValue placeholder="Select a category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {PRODUCT_CATEGORIES.map((category) => (
//                     <SelectItem key={category} value={category}>
//                       {category}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Message */}
//             <div className="space-y-2">
//               <Label htmlFor="enquiry-message" className="flex items-center gap-1">
//                 <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
//                 Message
//               </Label>
//               <Textarea
//                 id="enquiry-message"
//                 value={formData.message}
//                 onChange={(e) => handleInputChange('message', e.target.value)}
//                 placeholder="Tell us about your requirements..."
//                 rows={3}
//                 className="border-gray-200 focus:border-gray-300 resize-none"
//               />
//             </div>

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               className="w-full font-semibold"
//               style={{ backgroundColor: PRIMARY_COLOR }}
//               disabled={submitting}
//             >
//               {submitting ? (
//                 <>
//                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
//                   Submitting...
//                 </>
//               ) : (
//                 <>
//                   <Send className="w-4 h-4 mr-2" />
//                   Submit Enquiry
//                 </>
//               )}
//             </Button>

//             <p className="text-xs text-gray-500 text-center">
//               By submitting this form, you agree to our privacy policy.
//             </p>
//           </form>
//         )}
//       </DialogContent>
//     </Dialog>
//   )
// }


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
import {
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  Package,
  ChevronDown,
} from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

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

interface Country {
  code: string
  dial_code: string
  name: string
  flag: string
  max_length: number
}

const COUNTRIES: Country[] = [
  { code: 'IN', dial_code: '+91', name: 'India', flag: '🇮🇳', max_length: 10 },
  { code: 'US', dial_code: '+1', name: 'United States', flag: '🇺🇸', max_length: 10 },
  { code: 'GB', dial_code: '+44', name: 'United Kingdom', flag: '🇬🇧', max_length: 10 },
  { code: 'AE', dial_code: '+971', name: 'UAE', flag: '🇦🇪', max_length: 9 },
  { code: 'SA', dial_code: '+966', name: 'Saudi Arabia', flag: '🇸🇦', max_length: 9 },
  { code: 'AU', dial_code: '+61', name: 'Australia', flag: '🇦🇺', max_length: 9 },
  { code: 'CA', dial_code: '+1', name: 'Canada', flag: '🇨🇦', max_length: 10 },
  { code: 'DE', dial_code: '+49', name: 'Germany', flag: '🇩🇪', max_length: 11 },
  { code: 'FR', dial_code: '+33', name: 'France', flag: '🇫🇷', max_length: 9 },
  { code: 'JP', dial_code: '+81', name: 'Japan', flag: '🇯🇵', max_length: 10 },
  { code: 'CN', dial_code: '+86', name: 'China', flag: '🇨🇳', max_length: 11 },
  { code: 'KR', dial_code: '+82', name: 'South Korea', flag: '🇰🇷', max_length: 10 },
  { code: 'BR', dial_code: '+55', name: 'Brazil', flag: '🇧🇷', max_length: 11 },
  { code: 'ZA', dial_code: '+27', name: 'South Africa', flag: '🇿🇦', max_length: 9 },
  { code: 'NG', dial_code: '+234', name: 'Nigeria', flag: '🇳🇬', max_length: 10 },
  { code: 'KE', dial_code: '+254', name: 'Kenya', flag: '🇰🇪', max_length: 9 },
  { code: 'BD', dial_code: '+880', name: 'Bangladesh', flag: '🇧🇩', max_length: 10 },
  { code: 'PK', dial_code: '+92', name: 'Pakistan', flag: '🇵🇰', max_length: 10 },
  { code: 'NP', dial_code: '+977', name: 'Nepal', flag: '🇳🇵', max_length: 10 },
  { code: 'LK', dial_code: '+94', name: 'Sri Lanka', flag: '🇱🇰', max_length: 9 },
  { code: 'MY', dial_code: '+60', name: 'Malaysia', flag: '🇲🇾', max_length: 10 },
  { code: 'TH', dial_code: '+66', name: 'Thailand', flag: '🇹🇭', max_length: 9 },
  { code: 'ID', dial_code: '+62', name: 'Indonesia', flag: '🇮🇩', max_length: 12 },
  { code: 'PH', dial_code: '+63', name: 'Philippines', flag: '🇵🇭', max_length: 10 },
  { code: 'VN', dial_code: '+84', name: 'Vietnam', flag: '🇻🇳', max_length: 10 },
  { code: 'MX', dial_code: '+52', name: 'Mexico', flag: '🇲🇽', max_length: 10 },
  { code: 'EG', dial_code: '+20', name: 'Egypt', flag: '🇪🇬', max_length: 10 },
  { code: 'TR', dial_code: '+90', name: 'Turkey', flag: '🇹🇷', max_length: 10 },
  { code: 'RU', dial_code: '+7', name: 'Russia', flag: '🇷🇺', max_length: 10 },
  { code: 'IT', dial_code: '+39', name: 'Italy', flag: '🇮🇹', max_length: 10 },
  { code: 'ES', dial_code: '+34', name: 'Spain', flag: '🇪🇸', max_length: 9 },
  { code: 'NL', dial_code: '+31', name: 'Netherlands', flag: '🇳🇱', max_length: 9 },
  { code: 'SG', dial_code: '+65', name: 'Singapore', flag: '🇸🇬', max_length: 8 },
  { code: 'NZ', dial_code: '+64', name: 'New Zealand', flag: '🇳🇿', max_length: 9 },
  { code: 'IL', dial_code: '+972', name: 'Israel', flag: '🇮🇱', max_length: 9 },
  { code: 'QA', dial_code: '+974', name: 'Qatar', flag: '🇶🇦', max_length: 8 },
  { code: 'KW', dial_code: '+965', name: 'Kuwait', flag: '🇰🇼', max_length: 8 },
  { code: 'BH', dial_code: '+973', name: 'Bahrain', flag: '🇧🇭', max_length: 8 },
  { code: 'OM', dial_code: '+968', name: 'Oman', flag: '🇴🇲', max_length: 8 },
  { code: 'GH', dial_code: '+233', name: 'Ghana', flag: '🇬🇭', max_length: 10 },
  { code: 'TZ', dial_code: '+255', name: 'Tanzania', flag: '🇹🇿', max_length: 9 },
  { code: 'UG', dial_code: '+256', name: 'Uganda', flag: '🇺🇬', max_length: 9 },
]

// Default to India
const DEFAULT_COUNTRY = COUNTRIES.find(c => c.code === 'IN')!

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
    fullPhone: '',
    countryCode: '',
    message: '',
  })
  const [selectedCountry, setSelectedCountry] = useState<Country>(DEFAULT_COUNTRY)
  const [countrySearch, setCountrySearch] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)


  const filteredCountries = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.dial_code.includes(countrySearch) ||
    c.code.toLowerCase().includes(countrySearch.toLowerCase())
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)


    // Full phone with country code
    const fullPhone = `${selectedCountry.dial_code}${formData.phone}`

    // Simulate form submission
    // await new Promise(resolve => setTimeout(resolve, 1500))
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          products: formData.productCategory,
          message: formData.message,
          fullPhone: fullPhone,
          countryCode: selectedCountry.code,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit enquiry')
      }

      setSubmitted(true)

      // Reset after 3 seconds and close dialog
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
         ...formData,
         fullPhone: fullPhone,
         countryCode: selectedCountry.code,
        })
        onOpenChange(false)
      }, 2500)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit enquiry. Please try again.')
    } finally {
      setSubmitting(false)
    }

    // console.log('Submitted:', {
    //   ...formData,
    //   fullPhone,
    //   countryCode: selectedCountry.code,
    // })

    // setSubmitting(false)
    // setSubmitted(true)

    // // Reset after 3 seconds and close dialog
    // setTimeout(() => {
    //   setSubmitted(false)
    //   setFormData({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     company: '',
    //     productCategory: '',
    //     message: '',
    //   })
    //   setSelectedCountry(DEFAULT_COUNTRY)
    //   onOpenChange(false)
    // }, 2500)
  }

  const handleInputChange = (field: string, value: string) => {
    if (field === 'phone') {
      // Only allow digits
      const digitsOnly = value.replace(/\D/g, '')
      // Enforce max length based on country
      const trimmed = digitsOnly.slice(0, selectedCountry.max_length)
      setFormData(prev => ({ ...prev, phone: trimmed }))
    } else {
      setFormData(prev => ({ ...prev, [field]: value }))
    }
  }

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country)
    // If current phone is longer than new country's max, truncate
    const trimmed = formData.phone.slice(0, country.max_length)
    setFormData(prev => ({ ...prev, phone: trimmed }))
    setCountrySearch('')
  }

  const isPhoneValid = formData.phone.length >= selectedCountry.max_length - 2

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
                autoComplete="name"
              />
            </div>

            {/* Email */}
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
                autoComplete="email"
                inputMode="email"
              />
            </div>

            {/* Phone with Country Code */}
            <div className="space-y-2">
              <Label htmlFor="enquiry-phone" className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-gray-400" />
                Phone Number *
              </Label>
              <div className="flex gap-0">
                {/* Country Code Selector */}
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-1.5 h-10 px-3 border border-r-0 border-gray-200 rounded-l-md bg-gray-50/50 text-sm font-medium text-gray-700 transition-colors shrink-0",
                        "hover:bg-gray-100 active:bg-gray-200",
                        "min-w-[100px]"
                      )}
                    >
                      <span className="text-base leading-none">{selectedCountry.flag}</span>
                      <span className="text-gray-600">{selectedCountry.dial_code}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 ml-auto" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[280px] p-0" align="start">
                    <div className="p-2 border-b">
                      <Input
                        placeholder="Search country or code..."
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        className="h-9 text-sm border-gray-200"
                        autoFocus
                      />
                    </div>
                    <div className="max-h-[240px] overflow-y-auto">
                      {filteredCountries.length === 0 ? (
                        <div className="py-6 text-center text-sm text-gray-500">
                          No country found
                        </div>
                      ) : (
                        filteredCountries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            className={cn(
                              "flex items-center gap-2.5 w-full px-3 py-2.5 text-sm text-left transition-colors hover:bg-gray-50 active:bg-gray-100",
                              selectedCountry.code === country.code && "bg-blue-50/70"
                            )}
                            onClick={() => handleCountryChange(country)}
                          >
                            <span className="text-lg leading-none">{country.flag}</span>
                            <span className="flex-1 text-gray-700">{country.name}</span>
                            <span className="text-gray-400 text-xs font-mono">
                              {country.dial_code}
                            </span>
                            {selectedCountry.code === country.code && (
                              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                            )}
                          </button>
                        ))
                      )}
                    </div>
                  </PopoverContent>
                </Popover>

                {/* Phone Input */}
                <Input
                  id="enquiry-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder={selectedCountry.code === 'IN' ? '9876543210' : 'Phone number'}
                  required
                  className="border-gray-200 focus:border-gray-300 rounded-l-none flex-1 min-w-0"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={selectedCountry.max_length}
                />
              </div>
              <p className="text-xs text-gray-400">
                {selectedCountry.flag} {selectedCountry.name} — up to {selectedCountry.max_length} digits
                {!isPhoneValid && formData.phone.length > 0 && (
                  <span className="text-amber-500 ml-1">
                    (enter at least {selectedCountry.max_length - 2} digits)
                  </span>
                )}
              </p>
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
                autoComplete="organization"
              />
            </div>

            {/* Product Category */}
            <div className="space-y-2">
              <Label className="flex items-center gap-1">
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
              className="w-full font-semibold h-11"
              style={{ backgroundColor: PRIMARY_COLOR }}
              disabled={submitting || !isPhoneValid}
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