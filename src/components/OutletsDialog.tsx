'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  MapPin, Phone, Mail, Clock, Building2, Users, Globe, ChevronRight,
  Instagram, Facebook, Linkedin, Youtube, Twitter
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const PRIMARY_COLOR = '#243d80'

// Outlet locations data
const outlets = {
  headOffice: {
    name: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
    type: 'Head Office',
    address: 'Plot No. 24, Phase-III, IDA, Jeedimetla, Hyderabad - 500 055, Telangana, India',
    phone: '+91 40 2304 5678',
    email: 'info@siflonpharma.com',
    timing: 'Mon - Sat: 9:00 AM - 6:00 PM',
    mapEmbed: 'https://maps.google.com/?q=Jeedimetla+Hyderabad+India'
  },
  manufacturing: [
    {
      name: 'Manufacturing Unit - Hyderabad',
      type: 'Manufacturing',
      address: 'Survey No. 125, Pashamylaram, Patancheru, Hyderabad - 502 319, Telangana',
      phone: '+91 40 2304 5679',
      email: 'manufacturing@siflonpharma.com',
      timing: 'Mon - Sat: 8:00 AM - 5:00 PM',
      certifications: ['GMP', 'WHO-GMP', 'ISO 9001:2015']
    },
    {
      name: 'R&D Center',
      type: 'Research',
      address: 'Plot No. 24, Phase-III, IDA, Jeedimetla, Hyderabad - 500 055',
      phone: '+91 40 2304 5680',
      email: 'rnd@siflonpharma.com',
      timing: 'Mon - Sat: 9:00 AM - 6:00 PM',
      certifications: ['DSIR Recognized']
    }
  ],
  domestic: [
    {
      name: 'Siflon Distributor - Mumbai',
      region: 'Maharashtra',
      address: 'Andheri East, Mumbai - 400 069',
      phone: '+91 22 2834 5678',
      email: 'mumbai@siflonpharma.com'
    },
    {
      name: 'Siflon Distributor - Chennai',
      region: 'Tamil Nadu',
      address: 'T. Nagar, Chennai - 600 017',
      phone: '+91 44 2815 6789',
      email: 'chennai@siflonpharma.com'
    },
    {
      name: 'Siflon Distributor - Bangalore',
      region: 'Karnataka',
      address: 'Jayanagar, Bangalore - 560 041',
      phone: '+91 80 2654 7890',
      email: 'bangalore@siflonpharma.com'
    },
    {
      name: 'Siflon Distributor - Kolkata',
      region: 'West Bengal',
      address: 'Park Street, Kolkata - 700 016',
      phone: '+91 33 2287 8901',
      email: 'kolkata@siflonpharma.com'
    },
    {
      name: 'Siflon Distributor - Delhi NCR',
      region: 'Delhi',
      address: 'Nehru Place, New Delhi - 110 019',
      phone: '+91 11 2642 3456',
      email: 'delhi@siflonpharma.com'
    }
  ],
  international: [
    {
      name: 'Siflon Vietnam',
      country: 'Vietnam',
      flag: '🇻🇳',
      address: 'District 7, Ho Chi Minh City',
      phone: '+84 28 1234 5678',
      email: 'vietnam@siflonpharma.com'
    },
    {
      name: 'Siflon Thailand',
      country: 'Thailand',
      flag: '🇹🇭',
      address: 'Bangkok',
      phone: '+66 2 123 4567',
      email: 'thailand@siflonpharma.com'
    },
    {
      name: 'Siflon Nigeria',
      country: 'Nigeria',
      flag: '🇳🇬',
      address: 'Lagos',
      phone: '+234 1 234 5678',
      email: 'nigeria@siflonpharma.com'
    },
    {
      name: 'Siflon Bangladesh',
      country: 'Bangladesh',
      flag: '🇧🇩',
      address: 'Dhaka',
      phone: '+880 2 1234 5678',
      email: 'bangladesh@siflonpharma.com'
    },
    {
      name: 'Siflon Nepal',
      country: 'Nepal',
      flag: '🇳🇵',
      address: 'Kathmandu',
      phone: '+977 1 1234 567',
      email: 'nepal@siflonpharma.com'
    }
  ]
}

interface OutletCardProps {
  outlet: typeof outlets.domestic[0] | typeof outlets.international[0] | typeof outlets.manufacturing[0]
  showRegion?: boolean
  showCertifications?: boolean
}

function OutletCard({ outlet, showRegion, showCertifications }: OutletCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-white rounded-xl border shadow-sm p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
        >
          {'flag' in outlet ? (
            <span className="text-xl">{outlet.flag}</span>
          ) : (
            <Building2 className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900">{outlet.name}</h4>
          {showRegion && 'region' in outlet && (
            <p className="text-xs text-gray-500 mb-1">{outlet.region}</p>
          )}
          {'country' in outlet && (
            <p className="text-xs text-gray-500 mb-1">{outlet.country}</p>
          )}
          <div className="space-y-1 mt-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
              <span className="text-xs">{outlet.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
              <span className="text-xs">{outlet.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
              <span className="text-xs">{outlet.email}</span>
            </div>
          </div>
          {showCertifications && 'certifications' in outlet && outlet.certifications && (
            <div className="flex flex-wrap gap-1 mt-2">
              {outlet.certifications.map((cert, i) => (
                <Badge key={i} variant="outline" className="text-[10px] px-2">
                  {cert}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function OutletsDialog({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  // If children are provided, use them as the trigger, otherwise use default button
  const trigger = children ? (
    <DialogTrigger asChild>
      {children}
    </DialogTrigger>
  ) : (
    <DialogTrigger asChild>
      <Button
        variant="ghost"
        size="sm"
        className="gap-2 text-gray-600 hover:text-gray-900"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">Our Outlets</span>
      </Button>
    </DialogTrigger>
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger}
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <MapPin className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
            Our Outlets
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="headoffice" className="flex-1 overflow-hidden flex flex-col">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="headoffice" className="text-xs sm:text-sm">Head Office</TabsTrigger>
            <TabsTrigger value="manufacturing" className="text-xs sm:text-sm">Manufacturing</TabsTrigger>
            <TabsTrigger value="domestic" className="text-xs sm:text-sm">Domestic</TabsTrigger>
            <TabsTrigger value="international" className="text-xs sm:text-sm">International</TabsTrigger>
          </TabsList>
          
          <div className="flex-1 overflow-y-auto mt-4 pr-2">
            <AnimatePresence mode="wait">
              <TabsContent value="headoffice" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl border p-6"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-gray-900">{outlets.headOffice.name}</h3>
                        <Badge style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
                          {outlets.headOffice.type}
                        </Badge>
                      </div>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-3 text-gray-600">
                          <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                          <span className="text-sm">{outlets.headOffice.address}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Phone className="w-4 h-4 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                          <span className="text-sm">{outlets.headOffice.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Mail className="w-4 h-4 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                          <span className="text-sm">{outlets.headOffice.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Clock className="w-4 h-4 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                          <span className="text-sm">{outlets.headOffice.timing}</span>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <a 
                          href={outlets.headOffice.mapEmbed}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" style={{ backgroundColor: PRIMARY_COLOR }}>
                            <MapPin className="w-4 h-4 mr-2" />
                            View on Map
                          </Button>
                        </a>
                        <a href={`tel:${outlets.headOffice.phone}`}>
                          <Button size="sm" variant="outline" style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}>
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="manufacturing" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  {outlets.manufacturing.map((outlet, i) => (
                    <OutletCard key={i} outlet={outlet} showCertifications />
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="domestic" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {outlets.domestic.map((outlet, i) => (
                    <OutletCard key={i} outlet={outlet} showRegion />
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="international" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {outlets.international.map((outlet, i) => (
                    <OutletCard key={i} outlet={outlet} />
                  ))}
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </div>
        </Tabs>
        
        <div className="border-t pt-4 mt-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>Serving 50+ countries worldwide</span>
            </div>
            <div className="flex gap-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
