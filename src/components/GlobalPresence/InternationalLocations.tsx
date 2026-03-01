'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Globe2, MapPin, Users, Building } from 'lucide-react'
import dynamic from 'next/dynamic'

const PRIMARY_COLOR = '#243d80'

// Import location data
import { internationalLocations, CountryData } from './locationData'

// Color palette for countries
const COUNTRY_COLORS = [
  '#243d80', // Primary blue
  '#ef4444', // Red
  '#f97316', // Orange
  '#eab308', // Yellow
  '#22c55e', // Green
  '#06b6d4', // Cyan
  '#8b5cf6', // Purple
  '#ec4899', // Pink
  '#14b8a6', // Teal
  '#f43f5e', // Rose
  '#a855f7', // Violet
  '#0ea5e9', // Sky
  '#10b981', // Emerald
  '#f59e0b', // Amber
]

// Dynamic import for map component (SSR disabled)
const LocationMap = dynamic(() => import('./LocationMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-100 rounded-xl">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: PRIMARY_COLOR }} />
        <p className="text-gray-500">Loading map...</p>
      </div>
    </div>
  ),
})

export default function InternationalLocations() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null)

  // Convert countries to map locations with color mapping
  const mapLocations = internationalLocations.map((country, index) => ({
    name: country.country,
    lat: country.coordinates.lat,
    lng: country.coordinates.lng,
    color: COUNTRY_COLORS[index % COUNTRY_COLORS.length],
  }))

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="p-4 text-center">
            <Globe2 className="w-8 h-8 mx-auto mb-2" style={{ color: PRIMARY_COLOR }} />
            <p className="text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
              {internationalLocations.length}
            </p>
            <p className="text-sm text-gray-500">Countries</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-white">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold text-green-600">50+</p>
            <p className="text-sm text-gray-500">Global Partners</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-white">
          <CardContent className="p-4 text-center">
            <Building className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold text-purple-600">4</p>
            <p className="text-sm text-gray-500">Continents</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md bg-gradient-to-br from-orange-50 to-white">
          <CardContent className="p-4 text-center">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-orange-600" />
            <p className="text-2xl font-bold text-orange-600">100+</p>
            <p className="text-sm text-gray-500">Distributors</p>
          </CardContent>
        </Card>
      </div>

      {/* Map and Countries Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="h-[400px] md:h-[500px]">
                <LocationMap 
                  locations={mapLocations}
                  key="international"
                  isGlobal={true}
                  countryColors={true}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Countries List */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg h-[400px] md:h-[500px] overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 border-b bg-gradient-to-r from-gray-50 to-white">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <Globe2 className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                  International Presence
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Click on a country to view details
                </p>
              </div>
              <div className="overflow-y-auto h-[calc(100%-80px)] p-2">
                <div className="space-y-1">
                  {internationalLocations.map((country, index) => (
                    <motion.div
                      key={country.country}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => setSelectedCountry(
                        selectedCountry?.country === country.country ? null : country
                      )}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                        selectedCountry?.country === country.country 
                          ? 'bg-blue-50 shadow-sm' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-2xl">{country.flag}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm">
                          {country.country}
                        </p>
                        {selectedCountry?.country === country.country && country.description && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {country.description}
                          </p>
                        )}
                      </div>
                      {selectedCountry?.country === country.country && (
                        <Badge 
                          variant="outline"
                          style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}
                        >
                          Active
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Globe2 className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
          Our Global Network
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {internationalLocations.map((country, index) => (
            <motion.div
              key={country.country}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedCountry(country)}
              className="cursor-pointer"
            >
              <Card className="border-0 shadow-md hover:shadow-lg transition-all bg-white">
                <CardContent className="p-4 text-center">
                  <span className="text-3xl mb-2 block">{country.flag}</span>
                  <p className="text-xs font-medium text-gray-700 line-clamp-1">
                    {country.country}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected Country Details */}
      {selectedCountry && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          <Card className="border-0 shadow-lg overflow-hidden" style={{ borderLeft: `4px solid ${PRIMARY_COLOR}` }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <span className="text-5xl">{selectedCountry.flag}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {selectedCountry.country}
                  </h3>
                  <Badge className="mb-3" style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
                    <MapPin className="w-3 h-3 mr-1" />
                    Active Market
                  </Badge>
                  {selectedCountry.description && (
                    <p className="text-gray-600">{selectedCountry.description}</p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-3">
                    <div className="text-sm">
                      <span className="text-gray-500">Country Code:</span>{' '}
                      <span className="font-medium">{selectedCountry.code}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Latitude:</span>{' '}
                      <span className="font-medium">{selectedCountry.coordinates.lat.toFixed(2)}°</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Longitude:</span>{' '}
                      <span className="font-medium">{selectedCountry.coordinates.lng.toFixed(2)}°</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
