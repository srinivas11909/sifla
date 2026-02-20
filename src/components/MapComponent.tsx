'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, ExternalLink, Navigation } from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

// Fix for default marker icons in Leaflet with Next.js
const createCustomIcon = (color: string = PRIMARY_COLOR) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 36px;
          height: 36px;
          background: ${color};
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 12px;
            height: 12px;
            background: white;
            border-radius: 50%;
            transform: rotate(45deg);
          "></div>
        </div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  })
}

// Custom icon for different location types
const createLocationIcon = (type: 'headoffice' | 'manufacturing' | 'domestic' | 'international') => {
  const colors = {
    headoffice: '#243d80',
    manufacturing: '#22c55e',
    domestic: '#f59e0b',
    international: '#ef4444'
  }
  return createCustomIcon(colors[type])
}

export interface MapLocation {
  id: string
  name: string
  type: 'headoffice' | 'manufacturing' | 'domestic' | 'international'
  address: string
  phone?: string
  email?: string
  lat: number
  lng: number
  country?: string
  flag?: string
  certifications?: string[]
}

interface MapComponentProps {
  locations: MapLocation[]
  center?: [number, number]
  zoom?: number
  height?: string
  showAllMarkers?: boolean
  activeLocationId?: string | null
  onLocationClick?: (location: MapLocation) => void
}

// Component to handle map view changes
function MapController({ center, zoom, activeLocationId }: { 
  center?: [number, number]
  zoom?: number
  activeLocationId?: string | null 
}) {
  const map = useMap()
  
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom || 13, {
        duration: 1.5
      })
    }
  }, [center, zoom, map, activeLocationId])

  return null
}

// Animated marker component
function AnimatedMarker({ 
  location, 
  isActive,
  onLocationClick 
}: { 
  location: MapLocation
  isActive: boolean
  onLocationClick?: (location: MapLocation) => void
}) {
  const icon = createLocationIcon(location.type)
  
  return (
    <Marker 
      position={[location.lat, location.lng]} 
      icon={icon}
      eventHandlers={{
        click: () => onLocationClick?.(location)
      }}
    >
      <Popup className="custom-popup">
        <div className="p-1 min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            {location.flag && <span className="text-xl">{location.flag}</span>}
            <h3 className="font-bold text-gray-900 text-sm">{location.name}</h3>
          </div>
          
          <Badge 
            variant="outline" 
            className="mb-2 text-[10px]"
            style={{ 
              borderColor: PRIMARY_COLOR, 
              color: PRIMARY_COLOR,
              backgroundColor: `${PRIMARY_COLOR}10`
            }}
          >
            {location.type === 'headoffice' ? 'Head Office' : 
             location.type === 'manufacturing' ? 'Manufacturing' : 
             location.type === 'domestic' ? 'Domestic' : 'International'}
          </Badge>
          
          <div className="space-y-1.5 text-xs text-gray-600">
            <div className="flex items-start gap-2">
              <MapPin className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: PRIMARY_COLOR }} />
              <span>{location.address}</span>
            </div>
            {location.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                <a href={`tel:${location.phone}`} className="hover:underline">{location.phone}</a>
              </div>
            )}
            {location.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                <a href={`mailto:${location.email}`} className="hover:underline truncate">{location.email}</a>
              </div>
            )}
          </div>

          {location.certifications && location.certifications.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {location.certifications.map((cert, i) => (
                <Badge key={i} variant="secondary" className="text-[9px] px-1.5 py-0">
                  {cert}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex gap-2 mt-3">
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="h-7 text-xs" style={{ backgroundColor: PRIMARY_COLOR }}>
                <Navigation className="w-3 h-3 mr-1" />
                Directions
              </Button>
            </a>
            <a 
              href={`https://www.google.com/maps/?q=${location.lat},${location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline" className="h-7 text-xs">
                <ExternalLink className="w-3 h-3 mr-1" />
                View
              </Button>
            </a>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default function MapComponent({ 
  locations, 
  center,
  zoom = 5,
  height = '400px',
  showAllMarkers = true,
  activeLocationId,
  onLocationClick
}: MapComponentProps) {
  const [isMounted, setIsMounted] = useState(false)

  // Calculate center based on active location or provided center or all locations
  const mapCenter: [number, number] = (() => {
    if (activeLocationId) {
      const activeLocation = locations.find(loc => loc.id === activeLocationId)
      if (activeLocation) return [activeLocation.lat, activeLocation.lng]
    }
    if (center) return center
    if (locations.length > 0) {
      const lats = locations.map(loc => loc.lat)
      const lngs = locations.map(loc => loc.lng)
      const avgLat = lats.reduce((a, b) => a + b, 0) / lats.length
      const avgLng = lngs.reduce((a, b) => a + b, 0) / lngs.length
      return [avgLat, avgLng]
    }
    return [20.5937, 78.9629] // Default: India center
  })()

  const mapZoom = activeLocationId ? 15 : zoom

  // Handle mount on client side
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) {
    return (
      <div 
        className="w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
        style={{ height }}
      >
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full mx-auto mb-2"></div>
          <p className="text-gray-500 text-sm">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div 
        className="w-full rounded-xl overflow-hidden shadow-lg border"
        style={{ height }}
      >
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          className="w-full h-full"
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <MapController 
            center={mapCenter} 
            zoom={mapZoom} 
            activeLocationId={activeLocationId} 
          />
          
          {locations.map((location) => (
            <AnimatedMarker
              key={location.id}
              location={location}
              isActive={activeLocationId === location.id}
              onLocationClick={onLocationClick}
            />
          ))}
        </MapContainer>
      </div>

      {/* Map Legend */}
      {showAllMarkers && locations.length > 1 && (
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border z-[1000]">
          <p className="text-xs font-semibold text-gray-700 mb-2">Locations</p>
          <div className="flex flex-wrap gap-2">
            {[
              { type: 'headoffice', label: 'Head Office', color: '#243d80' },
              { type: 'manufacturing', label: 'Manufacturing', color: '#22c55e' },
              { type: 'domestic', label: 'Domestic', color: '#f59e0b' },
              { type: 'international', label: 'International', color: '#ef4444' }
            ].map((item) => (
              locations.some(loc => loc.type === item.type) && (
                <div key={item.type} className="flex items-center gap-1.5">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[10px] text-gray-600">{item.label}</span>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }
        .custom-popup .leaflet-popup-tip {
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }
        .custom-popup .leaflet-popup-content {
          margin: 12px 16px;
        }
        .leaflet-container {
          font-family: inherit;
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
        }
        .leaflet-control-zoom a {
          background-color: white !important;
          color: #374151 !important;
          border: none !important;
        }
        .leaflet-control-zoom a:hover {
          background-color: #f3f4f6 !important;
        }
      `}</style>
    </div>
  )
}
