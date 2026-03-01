'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Globe2, MapPin, Building2, Plane } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingSocialLinks from '@/components/FloatingSocialLinks'
import DomesticLocations from '@/components/GlobalPresence/DomesticLocations'
import InternationalLocations from '@/components/GlobalPresence/InternationalLocations'

const PRIMARY_COLOR = '#243d80'

const tabs = [
    {
        id: 'domestic',
        label: 'Domestic Locations',
        icon: Building2,
        description: 'Explore our presence across India'
    },
    {
        id: 'international',
        label: 'International Locations',
        icon: Plane,
        description: 'Discover our global footprint'
    },
]

export default function GlobalPresencePage() {
    const [activeTab, setActiveTab] = useState('domestic')
    const heroRef = useRef(null)
    const isHeroInView = useInView(heroRef, { once: true })

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <FloatingSocialLinks />
            <Header />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
                style={{ backgroundColor: PRIMARY_COLOR }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                {/* Decorative circles */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            <Globe2 className="w-3.5 h-3.5 mr-1.5" />
                            Global Network
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Our Global <span className="text-blue-200">Presence</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                            Trusted partner for veterinary pharmaceuticals across 50+ countries with 200+ locations worldwide
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { value: '200+', label: 'Total Locations' },
                                { value: '50+', label: 'Countries' },
                                { value: '7', label: 'Indian States' },
                                { value: '14', label: 'International Markets' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-blue-200">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="py-8 bg-white border-b sticky top-16 z-40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative w-full sm:w-auto px-8 py-4 rounded-xl font-semibold transition-all ${activeTab === tab.id
                                        ? 'text-white shadow-lg'
                                        : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
                                    }`}
                                style={activeTab === tab.id ? { backgroundColor: PRIMARY_COLOR } : {}}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="relative z-10 flex items-center justify-center gap-3">
                                    <tab.icon className="w-5 h-5" />
                                    <span>{tab.label}</span>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-8 md:py-12 relative z-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
                    {/* Tab Description */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                            <span>
                                {activeTab === 'domestic'
                                    ? 'Explore our distributor network across India'
                                    : 'Discover our international presence in 14 countries'}
                            </span>
                        </div>
                    </motion.div>

                    {/* Tab Content */}
                    <motion.div
                        key={`content-${activeTab}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeTab === 'domestic' ? (
                            <DomesticLocations />
                        ) : (
                            <InternationalLocations />
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-12 bg-white border-t">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
                    <Card className="border-0 shadow-lg overflow-hidden" style={{ backgroundColor: `${PRIMARY_COLOR}05` }}>
                        <CardContent className="p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Want to Become a Distributor?
                            </h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Join our growing network of distributors and be part of the Siflon family.
                                We offer comprehensive support and quality products.
                            </p>
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all"
                                style={{ backgroundColor: PRIMARY_COLOR }}
                            >
                                <MapPin className="w-5 h-5" />
                                Contact Us
                            </motion.a>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Footer />
        </div>
    )
}
