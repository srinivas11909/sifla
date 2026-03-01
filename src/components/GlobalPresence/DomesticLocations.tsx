'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { MapPin, Building2, ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const PRIMARY_COLOR = '#243d80'

// Import location data
import { domesticLocations, StateData } from './locationData'

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

export default function DomesticLocations() {
    const [selectedState, setSelectedState] = useState<string>('Andhra Pradesh')
    const [searchQuery, setSearchQuery] = useState('')

    // Derive state data from selected state
    const selectedStateData: StateData | null = useMemo(() => {
        if (!selectedState) return null
        return domesticLocations.find(s => s.state === selectedState) || null
    }, [selectedState])

    // Derive visible locations based on search
    const visibleLocations = useMemo(() => {
        if (!selectedStateData) return []
        if (searchQuery.trim() === '') {
            return selectedStateData.locations
        }
        return selectedStateData.locations.filter(loc =>
            loc.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [selectedStateData, searchQuery])

    // Handle state change
    const handleStateChange = (value: string) => {
        setSelectedState(value)
        setSearchQuery('')
    }

    return (
        <div className="space-y-6">
            {/* Header Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-white">
                    <CardContent className="p-4 text-center">
                        <MapPin className="w-8 h-8 mx-auto mb-2" style={{ color: PRIMARY_COLOR }} />
                        <p className="text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
                            {domesticLocations.reduce((sum, state) => sum + state.locations.length, 0)}
                        </p>
                        <p className="text-sm text-gray-500">Total Locations</p>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-white">
                    <CardContent className="p-4 text-center">
                        <Building2 className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        <p className="text-2xl font-bold text-green-600">{domesticLocations.length}</p>
                        <p className="text-sm text-gray-500">States</p>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-white">
                    <CardContent className="p-4 text-center">
                        <ChevronRight className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                        <p className="text-2xl font-bold text-purple-600">Pan India</p>
                        <p className="text-sm text-gray-500">Coverage</p>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-md bg-gradient-to-br from-orange-50 to-white">
                    <CardContent className="p-4 text-center">
                        <div className="w-8 h-8 mx-auto mb-2 text-orange-600 text-xl">🚚</div>
                        <p className="text-2xl font-bold text-orange-600">24/7</p>
                        <p className="text-sm text-gray-500">Service</p>
                    </CardContent>
                </Card>
            </div>

            {/* State Selector */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="w-full md:w-80">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Select State
                    </label>
                    <Select value={selectedState} onValueChange={handleStateChange}>
                        <SelectTrigger className="w-full bg-white border-gray-200 shadow-sm">
                            <SelectValue placeholder="Choose a state..." />
                        </SelectTrigger>
                        <SelectContent>
                            {domesticLocations.map((state) => (
                                <SelectItem key={state.state} value={state.state}>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        {state.state}
                                        <Badge variant="secondary" className="ml-auto">
                                            {state.locations.length}
                                        </Badge>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {selectedStateData && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-gray-600"
                    >
                        <Badge style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}>
                            {visibleLocations.length} locations
                        </Badge>
                    </motion.div>
                )}
            </div>

            {/* Search Location */}
            {selectedState && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full md:w-80"
                >
                    <input
                        type="text"
                        placeholder="Search location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                </motion.div>
            )}

            {/* Map and Locations Grid */}
            {selectedStateData ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid lg:grid-cols-3 gap-6"
                >
                    {/* Map */}
                    <div className="lg:col-span-2">
                        <Card className="border-0 shadow-lg overflow-hidden">
                            <CardContent className="p-0">
                                <div className="h-[400px] md:h-[500px]">
                                    <LocationMap
                                        locations={visibleLocations}
                                        key={`${selectedState}-${searchQuery}`}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Locations List */}
                    <div className="lg:col-span-1">
                        <Card className="border-0 shadow-lg h-[400px] md:h-[500px] overflow-hidden">
                            <CardContent className="p-0">
                                <div className="p-4 border-b bg-gradient-to-r from-gray-50 to-white">
                                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                        <Building2 className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                                        {selectedStateData.state}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {visibleLocations.length} locations found
                                    </p>
                                </div>
                                <div className="overflow-y-auto h-[calc(100%-80px)] p-2">
                                    <AnimatePresence>
                                        {visibleLocations.length > 0 ? (
                                            <div className="space-y-1">
                                                {visibleLocations.map((location, index) => (
                                                    <motion.div
                                                        key={`${location.name}-${index}`}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 10 }}
                                                        transition={{ delay: index * 0.02 }}
                                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                                                    >
                                                        <div
                                                            className="w-2 h-2 rounded-full flex-shrink-0"
                                                            style={{ backgroundColor: PRIMARY_COLOR }}
                                                        />
                                                        <span className="text-sm text-gray-700 group-hover:text-gray-900">
                                                            {location.name}
                                                        </span>
                                                        <ChevronRight className="w-4 h-4 text-gray-300 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-gray-500">
                                                <p>No locations found</p>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            ) : (
                /* Empty State */
                <Card className="border-0 shadow-lg">
                    <CardContent className="p-12">
                        <div className="text-center">
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                                style={{ backgroundColor: `${PRIMARY_COLOR}10` }}
                            >
                                <MapPin className="w-10 h-10" style={{ color: PRIMARY_COLOR }} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Select a State
                            </h3>
                            <p className="text-gray-500 max-w-md mx-auto">
                                Choose a state from the dropdown above to view all our distributor locations and see them on the map.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {domesticLocations.slice(0, 4).map((state) => (
                    <motion.div
                        key={state.state}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleStateChange(state.state)}
                        className={`cursor-pointer ${selectedState === state.state ? 'ring-2 ring-offset-2' : ''}`}
                        style={selectedState === state.state ? { outlineColor: PRIMARY_COLOR } : {}}
                    >
                        <Card className={`border-0 shadow-md hover:shadow-lg transition-all ${selectedState === state.state ? 'bg-blue-50' : 'bg-white'}`}>
                            <CardContent className="p-4 text-center">
                                <p className="font-semibold text-gray-900 text-sm truncate">{state.state}</p>
                                <p className="text-2xl font-bold mt-1" style={{ color: PRIMARY_COLOR }}>
                                    {state.locations.length}
                                </p>
                                <p className="text-xs text-gray-500">Locations</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
