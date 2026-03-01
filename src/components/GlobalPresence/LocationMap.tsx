'use client'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect, useRef } from 'react'

// Color palette for markers
const MARKER_COLORS = [
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
]

// Fix for default marker icon in react-leaflet
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

// Create colored marker icons with country background
const createColoredMarker = (color: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        position: absolute;
        width: 80px;
        height: 80px;
        background-color: ${color};
        border-radius: 50%;
        opacity: 0.15;
      "></div>
      <div style="
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: ${color};
        border-radius: 50%;
        opacity: 0.25;
      "></div>
      <div style="
        width: 24px;
        height: 24px;
        background-color: ${color};
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      "></div>
    </div>`,
    iconSize: [80, 80],
    iconAnchor: [40, 80],
    popupAnchor: [0, -80],
  })
}

L.Marker.prototype.options.icon = defaultIcon

interface Location {
  name: string
  lat: number
  lng: number
  color?: string
}

interface LocationMapProps {
  locations: Location[]
  center?: [number, number]
  zoom?: number
  isGlobal?: boolean
  countryColors?: boolean
}

// Component to handle map view changes
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap()
  
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 0.8 })
  }, [center, zoom, map])
  
  return null
}

export default function LocationMap({ locations, center = [20.5937, 78.9629], zoom = 5, isGlobal = false, countryColors = false }: LocationMapProps) {
  // Calculate bounds if locations exist
  const getMapCenter = (): [number, number] => {
    if (locations.length === 0) return center
    const avgLat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length
    const avgLng = locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length
    return [avgLat, avgLng]
  }

  const getMapZoom = (): number => {
    if (isGlobal) return 2
    if (locations.length === 0) return zoom
    if (locations.length === 1) return 10
    return 7
  }

  const mapCenter = getMapCenter()
  const mapZoom = getMapZoom()

  return (
    <MapContainer
      // @ts-ignore
      center={mapCenter}
      zoom={mapZoom}
      style={{ height: '100%', width: '100%', borderRadius: '12px' }}
      scrollWheelZoom={true}
    >
      <MapController center={mapCenter} zoom={mapZoom} />
      <TileLayer
        // @ts-ignore
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // @ts-ignore
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {locations.map((location, index) => {
        const markerRef = useRef<any>(null)
        const markerColor = countryColors && location.color 
          ? location.color 
          : MARKER_COLORS[index % MARKER_COLORS.length]
        
        return (
          <Marker 
            key={`${location.name}-${index}`} 
            position={[location.lat, location.lng] as any}
            ref={markerRef}
            // @ts-ignore
            icon={createColoredMarker(markerColor)}
            eventHandlers={{
              mouseover: () => {
                if (markerRef.current) {
                  markerRef.current.openPopup()
                }
              },
              mouseout: () => {
                if (markerRef.current) {
                  markerRef.current.closePopup()
                }
              }
            }}
          >
            <Popup>
              <div className="text-center p-1">
                <strong className="text-sm">{location.name}</strong>
              </div>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}
