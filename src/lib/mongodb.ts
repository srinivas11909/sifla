import { MongoClient, Db, Collection, ObjectId } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'


// MongoDB connection with in-memory fallback
// This file handles both local MongoDB and in-memory MongoDB connections
//const db_url = process.env.MONGODB_URI
interface GlobalMongo {
  client: MongoClient | null
  db: Db | null
  promise: Promise<{ client: MongoClient; db: Db }> | null
  memoryServer: MongoMemoryServer | null
}

declare global {
  // eslint-disable-next-line no-var
  var mongo: GlobalMongo | undefined
}

let cached: GlobalMongo = global.mongo || {
  client: null,
  db: null,
  promise: null,
  memoryServer: null,
}

if (!global.mongo) {
  global.mongo = cached
}

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cached.client && cached.db) {
    return { client: cached.client, db: cached.db }
  }

  if (!cached.promise) {
    cached.promise = (async () => {
      let uri = process.env.MONGODB_URI
      
      // If no MongoDB URI or connection fails, use in-memory MongoDB
      if (!uri || uri.includes('localhost:27017')) {
        try {
          // Try to connect to local MongoDB first
          const testClient = new MongoClient(uri || 'mongodb://localhost:27017/biovet', {
            serverSelectionTimeoutMS: 2000,
          })
          await testClient.connect()
          await testClient.close()
        } catch {
          // If local MongoDB fails, use in-memory MongoDB
          console.log('Local MongoDB not available, starting in-memory MongoDB...')
          const memoryServer = await MongoMemoryServer.create()
          uri = memoryServer.getUri()
          cached.memoryServer = memoryServer
          console.log('In-memory MongoDB started')
        }
      }

      const opts = {
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000,
      }
      
      const client = await MongoClient.connect(uri!, opts)
      const db = client.db()
      
      // Seed initial data if using memory server
      if (cached.memoryServer) {
        await seedDatabase(db)
      }
      
      return { client, db }
    })()
  }

  try {
    const { client, db } = await cached.promise
    cached.client = client
    cached.db = db
    return { client, db }
  } catch (error) {
    cached.promise = null
    throw error
  }
}

// Seed initial data
async function seedDatabase(db: Db) {
  const crypto = await import('crypto')
  
  // Create indexes
  await db.collection('admins').createIndex({ username: 1 }, { unique: true })
  await db.collection('admins').createIndex({ sessionToken: 1 })
  await db.collection('heroSlides').createIndex({ order: 1 })
  await db.collection('aboutContent').createIndex({ section: 1 }, { unique: true })
  await db.collection('milestones').createIndex({ order: 1 })
  await db.collection('products').createIndex({ order: 1 })
  await db.collection('products').createIndex({ category: 1 })
  
  // Create default admin
  const hashedPassword = crypto.createHash('sha256').update('admin123').digest('hex')
  await db.collection('admins').insertOne({
    // _id: crypto.randomUUID(),
    username: 'admin',
    password: hashedPassword,
    sessionToken: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  
  // Create hero slides
  await db.collection('heroSlides').insertMany([
    {
      // _id: string,
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
      // _id: crypto.randomUUID(),
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
      // _id: crypto.randomUUID(),
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
  ])
  
  // Create milestones
  await db.collection('milestones').insertMany([
    {  year: '1993', title: 'Company Founded', description: 'Siflon established with a vision to transform animal healthcare', order: 0, active: true, createdAt: new Date(), updatedAt: new Date() },
    {  year: '2000', title: 'ISO Certification', description: 'Achieved ISO 9001 certification for quality management systems', order: 1, active: true, createdAt: new Date(), updatedAt: new Date() },
    {  year: '2008', title: 'Global Expansion', description: 'Expanded operations to 25+ countries across Asia and Africa', order: 2, active: true, createdAt: new Date(), updatedAt: new Date() },
    {  year: '2015', title: 'WHO-GMP Certified', description: 'Received WHO-GMP certification for manufacturing excellence', order: 3, active: true, createdAt: new Date(), updatedAt: new Date() },
    {  year: '2020', title: '50 Countries Milestone', description: 'Products now available in 50+ countries worldwide', order: 4, active: true, createdAt: new Date(), updatedAt: new Date() },
    {  year: '2024', title: 'Innovation Center', description: 'Launched state-of-the-art R&D and innovation center', order: 5, active: true, createdAt: new Date(), updatedAt: new Date() },
  ])
  
  // Create products
  await db.collection('products').insertMany([
    { name: 'Mineral Mixtures', description: 'Balanced mineral blends for bone health and productivity', category: 'feedSupplements', sectors: '["poultry", "dairy", "swine"]', featured: false, active: true, order: 0, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Vitamin Supplements', description: 'Essential vitamins for immune system support', category: 'feedSupplements', sectors: '["all"]', featured: true, active: true, order: 1, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Amino Acid Blends', description: 'Optimized amino acid profiles for growth', category: 'feedSupplements', sectors: '["poultry", "aqua"]', featured: false, active: true, order: 2, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Lactobacillus Strains', description: 'Gut health optimization with beneficial bacteria', category: 'probiotics', sectors: '["poultry", "swine", "pets"]', featured: false, active: true, order: 3, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Bacillus Preparations', description: 'Spore-forming probiotics for water and feed', category: 'probiotics', sectors: '["aqua", "poultry"]', featured: false, active: true, order: 4, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Broad Spectrum Antibiotics', description: 'Wide-range antibiotics for various infections', category: 'antibiotics', sectors: '["poultry", "swine", "dairy"]', featured: false, active: true, order: 5, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Surface Disinfectants', description: 'Powerful disinfectants for farm surfaces', category: 'disinfectants', sectors: '["all"]', featured: false, active: true, order: 6, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Stress Relievers', description: 'Anti-stress formulations for animals', category: 'specialtyProducts', sectors: '["all"]', featured: true, active: true, order: 7, createdAt: new Date(), updatedAt: new Date() },
  ])
  
  // Create about content
  await db.collection('aboutContent').insertMany([
    {
      // _id: crypto.randomUUID(),
      section: 'hero',
      title: 'Pioneering Animal Health Since 1993',
      subtitle: 'Dedicated to delivering excellence in animal healthcare through innovation, quality, and unwavering commitment.',
      content: JSON.stringify({}),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      // _id: crypto.randomUUID(),
      section: 'story',
      title: 'Our Story',
      subtitle: null,
      content: JSON.stringify({
        paragraphs: [
          'Siflon Drugs & Pharmaceuticals Pvt Ltd has been at the forefront of animal healthcare innovation for over three decades.',
          'Today, we serve a diverse range of sectors including poultry, aqua, dairy, swine, equine, and pets.',
        ],
      }),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])
  
  console.log('Database seeded successfully')
}

// Collection helpers
export async function getCollection<T extends Document>(name: string): Promise<Collection<T>> {
  const { db } = await connectToDatabase()
  return db.collection<T>(name)
}

// Types for our collections
export interface Admin {
  _id: string
  username: string
  password: string
  sessionToken: string | null
  createdAt: Date
  updatedAt: Date
}

export interface HeroSlide {
  _id: string
  title: string
  subtitle: string
  badge: string | null
  type: string
  src: string
  poster: string | null
  order: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export interface AboutContent {
  _id: string
  section: string
  title: string
  subtitle: string | null
  content: string
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Milestone {
  _id: string
  year: string
  title: string
  description: string
  order: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  _id: string
  name: string
  description: string
  category: string
  sectors: string
  featured: boolean
  active: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}

export interface ProductCategory {
  _id: string
  slug: string
  title: string
  description: string
  order: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}
