'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
    Mail,
    Briefcase,
    Users,
    Globe,
    GraduationCap,
    Heart,
    Target,
    Award,
    Send,
    CheckCircle,
    ArrowRight,
    Building2,
    Sparkles,
    BookOpen
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingSocialLinks from '@/components/FloatingSocialLinks'

const PRIMARY_COLOR = '#243d80'

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' as const }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' as const }
    }
}

// Why join us features
const whyJoinUs = [
    {
        icon: Users,
        title: 'Diverse Workforce',
        description: 'Our culturally diverse workforce is one of our biggest strengths, bringing rich experience across varied skill-sets and backgrounds.'
    },
    {
        icon: GraduationCap,
        title: 'Professional Growth',
        description: 'Continuous training and development programmes to enhance technical and soft skills throughout your career.'
    },
    {
        icon: Target,
        title: 'Challenging Roles',
        description: 'Multi-dimensional work environment with high growth opportunities through challenging roles with clear responsibilities.'
    },
    {
        icon: Heart,
        title: 'Great Culture',
        description: 'Open, enabling and trust-based culture offering an exciting environment to work and grow with inspiring leadership.'
    }
]

// Benefits
const benefits = [
    { icon: Award, text: 'Global Exposure' },
    { icon: BookOpen, text: 'Learning Programs' },
    { icon: Building2, text: 'Modern Facilities' },
    { icon: Sparkles, text: 'Innovation Focus' },
]

export default function CareersPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: ''
    })
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const heroRef = useRef(null)
    const isHeroInView = useInView(heroRef, { once: true })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)
        setError(null)


        // Simulate form submission
        // await new Promise(resolve => setTimeout(resolve, 1500))

        // setSubmitting(false)
        // setSubmitted(true)
        // setFormData({ name: '', email: '', phone: '', position: '', message: '' })

        // // Reset success message after 5 seconds
        // setTimeout(() => setSubmitted(false), 5000)
        try {
            const response = await fetch('/api/careers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Failed to submit application')
            }

            setSubmitted(true)
            setFormData({ name: '', email: '', phone: '', position: '', message: '' })

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to submit application. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    // JSON-LD Structured Data for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://siflonpharma.com/careers/#webpage',
                url: 'https://siflonpharma.com/careers/',
                name: 'Careers | Siflon Drugs & Pharmaceuticals Pvt Ltd',
                description: 'Join Siflon Drugs & Pharmaceuticals for exploring unending career opportunities. We are a specialty veterinary pharmaceutical company in India.',
                isPartOf: {
                    '@id': 'https://siflonpharma.com/#website'
                },
                inLanguage: 'en-IN'
            },
            {
                '@type': 'Organization',
                '@id': 'https://siflonpharma.com/#organization',
                name: 'Siflon Drugs & Pharmaceuticals Pvt Ltd',
                url: 'https://siflonpharma.com/',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://siflonpharma.com/siflonlogo.png'
                },
                description: 'Specialty veterinary pharmaceutical company in India providing high-quality, affordable medicines trusted by healthcare professionals.',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Hyderabad',
                    addressRegion: 'Telangana',
                    addressCountry: 'IN'
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'careers',
                    email: 'career@siflonpharma.com'
                },
                sameAs: [
                    'https://www.linkedin.com/company/siflon-pharma',
                    'https://www.facebook.com/siflonpharma'
                ]
            },
            {
                '@type': 'JobPosting',
                '@id': 'https://siflonpharma.com/careers/#jobposting',
                title: 'Career Opportunities at Siflon Drugs',
                description: 'Join Siflon Drugs & Pharmaceuticals for exploring unending opportunities. We offer high growth opportunities through challenging roles with clear responsibilities.',
                hiringOrganization: {
                    '@id': 'https://siflonpharma.com/#organization'
                },
                jobLocation: {
                    '@type': 'Place',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Hyderabad',
                        addressRegion: 'Telangana',
                        addressCountry: 'IN'
                    }
                },
                employmentType: ['FULL_TIME', 'PART_TIME', 'CONTRACT'],
                industry: 'Pharmaceutical Manufacturing',
                datePosted: new Date().toISOString()
            }
        ]
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <FloatingSocialLinks />
            <Header />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
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

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Join <span className="text-blue-200">Siflon Drugs</span> & Pharmaceuticals
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                            Explore unending opportunities and give your career the right direction.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#apply">
                                <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
                                    Apply Now
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </a>
                            <a href="#why-join">
                                <Button variant="outline" className="border-white text-primary hover:bg-white/10 px-8 py-6 text-lg cursor-pointer">
                                    Learn More
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                A Leading Veterinary Pharmaceutical Company
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Siflon Drugs is a <strong className="text-gray-900">specialty veterinary pharmaceutical company in India</strong>.
                                We provide high-quality, affordable medicines trusted by healthcare professionals.
                            </p>

                            <p>
                                Our people are our <strong className="text-gray-900">most valuable asset</strong>. Our culturally diverse
                                workforce is one of our biggest strengths and the rich experience they bring, across varied skill-sets
                                and backgrounds, is invaluable. We are proud that our global workforce is bound together by our common values.
                            </p>

                            <p>
                                We are committed to hiring exceptionally talented people and nurture them professionally. Our
                                multi-dimensional work environment offers <strong className="text-gray-900">high growth opportunities</strong> through
                                challenging roles with clear responsibilities and the opportunity to work on a variety of assignments.
                                At Siflon, our employees are provided with opportunities to enhance their technical and soft skills
                                through continuous training and development programmes.
                            </p>

                            <p>
                                As an employee of Siflon, you will work with an <strong className="text-gray-900">inspiring, approachable
                                    and visionary leadership</strong>. Our open, enabling and trust-based culture will offer you an exciting
                                environment to work and grow.
                            </p>
                        </div>

                        {/* Benefits Pills */}
                        {/* <motion.div
                            className="flex flex-wrap justify-center gap-4 mt-10"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    <benefit.icon className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
                                    <span className="font-medium text-gray-700">{benefit.text}</span>
                                </motion.div>
                            ))}
                        </motion.div> */}
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section id="why-join" className="py-16 md:py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Build Your Future With Us
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover why Siflon is the right place to advance your career
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {whyJoinUs.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                            >
                                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                                    <CardContent className="p-6 text-center">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                            style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                                        >
                                            <item.icon className="w-8 h-8" style={{ color: PRIMARY_COLOR }} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            {/* <section className="py-12 relative" style={{ backgroundColor: PRIMARY_COLOR }}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:ml-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '500+', label: 'Employees Worldwide' },
                            { value: '50+', label: 'Countries Presence' },
                            { value: '30+', label: 'Years of Excellence' },
                            { value: '100+', label: 'Open Positions' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-blue-200 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Apply Section */}
            <section id="apply" className="py-16 md:py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left - Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Ready to Start Your Journey?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Take the first step towards an exciting career in veterinary pharmaceuticals.
                                We&apos;re always looking for talented individuals to join our team.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4 mb-8">
                                <Card className="border-0 shadow-md">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                                            >
                                                <Mail className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Email your CV to</p>
                                                <a
                                                    href="mailto:career@siflonpharma.com"
                                                    className="text-lg font-semibold hover:underline"
                                                    style={{ color: PRIMARY_COLOR }}
                                                >
                                                    career@siflonpharma.com
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-md bg-gradient-to-r from-gray-50 to-white">
                                    <CardContent className="p-4">
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                                            >
                                                <Globe className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Application Requirements</p>
                                                <p className="text-gray-700 text-sm">
                                                    Please send your application with a <strong>detailed CV</strong> and
                                                    <strong> Cover Letter</strong> for Siflon Drugs.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Quick Apply Button */}
                            <a href="mailto:career@siflonpharma.com?subject=Job Application - Siflon Drugs">
                                <Button
                                    size="lg"
                                    className="font-semibold"
                                    style={{ backgroundColor: PRIMARY_COLOR }}
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Email Your Application
                                </Button>
                            </a>
                        </motion.div>

                        {/* Right - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card className="border-0 shadow-xl">
                                <CardContent className="p-6 md:p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                                        Quick Inquiry Form
                                    </h3>

                                    {submitted ? (
                                        <motion.div
                                            className="text-center py-8"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                        >
                                            <div
                                                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                                style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                                            >
                                                <CheckCircle className="w-8 h-8 text-green-600" />
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                                            <p className="text-gray-600">
                                                Your inquiry has been submitted. We&apos;ll get back to you soon.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name *</Label>
                                                    <Input
                                                        id="name"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        placeholder="Your name"
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email *</Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        placeholder="your@email.com"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone</Label>
                                                    <Input
                                                        id="phone"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        placeholder="+91..."
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="position">Position Interested In</Label>
                                                    <Input
                                                        id="position"
                                                        value={formData.position}
                                                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                                        placeholder="e.g., Production Manager"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">Message</Label>
                                                <Textarea
                                                    id="message"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    placeholder="Tell us about yourself..."
                                                    rows={4}
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                className="w-full font-semibold"
                                                style={{ backgroundColor: PRIMARY_COLOR }}
                                                disabled={submitting}
                                            >
                                                {submitting ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4 mr-2" />
                                                        Submit Inquiry
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
