import { MongoClient } from 'mongodb'
import * as crypto from 'crypto'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/biovet'

async function main() {
  const client = new MongoClient(MONGODB_URI)
  
  try {
    await client.connect()
    console.log('Connected to MongoDB')
    
    const db = client.db()
    
    // Create indexes
    await db.collection('admins').createIndex({ username: 1 }, { unique: true })
    await db.collection('admins').createIndex({ sessionToken: 1 })
    await db.collection('heroSlides').createIndex({ order: 1 })
    await db.collection('aboutContent').createIndex({ section: 1 }, { unique: true })
    await db.collection('milestones').createIndex({ order: 1 })
    await db.collection('products').createIndex({ order: 1 })
    await db.collection('products').createIndex({ category: 1 })
    
    console.log('Created indexes')
    
    // Create default admin user
    const hashedPassword = crypto.createHash('sha256').update('admin123').digest('hex')
    
    const existingAdmin = await db.collection('admins').findOne({ username: 'admin' })
    if (!existingAdmin) {
      await db.collection('admins').insertOne({
        _id: crypto.randomUUID(),
        username: 'admin',
        password: hashedPassword,
        sessionToken: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      console.log('Created admin user')
    } else {
      console.log('Admin user already exists')
    }

    // Create default hero slides
    const heroSlides = [
      {
        _id: crypto.randomUUID(),
        title: 'Premium Animal Healthcare Solutions',
        subtitle: 'Trusted partner for poultry, aqua, dairy, swine, equine, and pet healthcare. Delivering excellence through innovation for over 30 years.',
        badge: 'Since 1993',
        type: 'image',
        src: '/hero-bg.png',
        poster: null,
        order: 0,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: crypto.randomUUID(),
        title: 'Dairy Solutions for Better Yield',
        subtitle: 'Specialized healthcare products for dairy cattle. Enhance milk production and cattle health with our proven solutions.',
        badge: 'Dairy Focus',
        type: 'video',
        src: 'https://cdn.coverr.co/videos/coverr-milking-a-cow-on-a-farm-5764/1080p.mp4',
        poster: '/hero-bg.png',
        order: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: crypto.randomUUID(),
        title: 'Global Quality Standards',
        subtitle: 'GMP, ISO, and WHO-GMP certified manufacturing. Trusted by farmers across 50+ countries worldwide.',
        badge: 'Certified Excellence',
        type: 'image',
        src: '/hero-bg.png',
        poster: null,
        order: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    const existingSlides = await db.collection('heroSlides').countDocuments()
    if (existingSlides === 0) {
      await db.collection('heroSlides').insertMany(heroSlides)
      console.log('Created default hero slides')
    }

    // Create milestones
    const milestones = [
      { _id: crypto.randomUUID(), year: '1993', title: 'Company Founded', description: 'BioVet Labs established with a vision to transform animal healthcare', order: 0, active: true, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), year: '2000', title: 'ISO Certification', description: 'Achieved ISO 9001 certification for quality management systems', order: 1, active: true, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), year: '2008', title: 'Global Expansion', description: 'Expanded operations to 25+ countries across Asia and Africa', order: 2, active: true, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), year: '2015', title: 'WHO-GMP Certified', description: 'Received WHO-GMP certification for manufacturing excellence', order: 3, active: true, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), year: '2020', title: '50 Countries Milestone', description: 'Products now available in 50+ countries worldwide', order: 4, active: true, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), year: '2024', title: 'Innovation Center', description: 'Launched state-of-the-art R&D and innovation center', order: 5, active: true, createdAt: new Date(), updatedAt: new Date() },
    ]

    const existingMilestones = await db.collection('milestones').countDocuments()
    if (existingMilestones === 0) {
      await db.collection('milestones').insertMany(milestones)
      console.log('Created milestones')
    }

    // Create products
    const products = [
      { _id: crypto.randomUUID(), name: 'Mineral Mixtures', description: 'Balanced mineral blends for bone health and productivity', category: 'feedSupplements', sectors: '["poultry", "dairy", "swine"]', featured: false, active: true, order: 0, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), name: 'Vitamin Supplements', description: 'Essential vitamins for immune system support', category: 'feedSupplements', sectors: '["all"]', featured: true, active: true, order: 1, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), name: 'Amino Acid Blends', description: 'Optimized amino acid profiles for growth', category: 'feedSupplements', sectors: '["poultry", "aqua"]', featured: false, active: true, order: 2, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), name: 'Lactobacillus Strains', description: 'Gut health optimization with beneficial bacteria', category: 'probiotics', sectors: '["poultry", "swine", "pets"]', featured: false, active: true, order: 3, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), name: 'Bacillus Preparations', description: 'Spore-forming probiotics for water and feed', category: 'probiotics', sectors: '["aqua", "poultry"]', featured: false, active: true, order: 4, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), name: 'Broad Spectrum Antibiotics', description: 'Wide-range antibiotics for various infections', category: 'antibiotics', sectors: '["poultry", "swine", "dairy"]', featured: false, active: true, order: 5, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), name: 'Surface Disinfectants', description: 'Powerful disinfectants for farm surfaces', category: 'disinfectants', sectors: '["all"]', featured: false, active: true, order: 6, createdAt: new Date(), updatedAt: new Date() },
      { _id: crypto.randomUUID(), name: 'Stress Relievers', description: 'Anti-stress formulations for animals', category: 'specialtyProducts', sectors: '["all"]', featured: true, active: true, order: 7, createdAt: new Date(), updatedAt: new Date() },
    ]

    const existingProducts = await db.collection('products').countDocuments()
    if (existingProducts === 0) {
      await db.collection('products').insertMany(products)
      console.log('Created sample products')
    }

    // Create about content
    const aboutContent = [
      {
        _id: crypto.randomUUID(),
        section: 'hero',
        title: 'Pioneering Animal Health Since 1993',
        subtitle: 'Dedicated to delivering excellence in animal healthcare through innovation, quality, and unwavering commitment.',
        content: JSON.stringify({}),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: crypto.randomUUID(),
        section: 'story',
        title: 'Our Story',
        subtitle: null,
        content: JSON.stringify({
          paragraphs: [
            'BioVet Labs has been at the forefront of animal healthcare innovation for over three decades. Founded in 1993, we started with a simple mission: to provide high-quality, affordable healthcare solutions for animals across all sectors.',
            'Today, we serve a diverse range of sectors including poultry, aqua, dairy, swine, equine, and pets, earning a sterling reputation for excellence and innovation.',
          ],
        }),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    const existingAbout = await db.collection('aboutContent').countDocuments()
    if (existingAbout === 0) {
      await db.collection('aboutContent').insertMany(aboutContent)
      console.log('Created about content')
    }

    console.log('\n✅ Seed completed successfully!')
    console.log('Default admin credentials:')
    console.log('  Username: admin')
    console.log('  Password: admin123')
    
  } catch (error) {
    console.error('Seed error:', error)
    process.exit(1)
  } finally {
    await client.close()
  }
}

main()
