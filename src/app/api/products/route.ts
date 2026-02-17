// import { NextRequest, NextResponse } from 'next/server'
// import { getCollection } from '@/lib/mongodb'
// import { randomUUID } from 'crypto'

// // GET all products
// export async function GET(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url)
//     const category = searchParams.get('category')
    
//     const collection = await getCollection('products')
    
//     const query = category ? { category } : {}
//     const products = await collection
//       .find(query)
//       .sort({ order: 1 })
//       .toArray()
    
//     const formattedProducts = products.map(item => ({
//       id: item._id,
//       name: item.name,
//       description: item.description,
//       category: item.category,
//       sectors: item.sectors,
//       featured: item.featured,
//       active: item.active,
//       order: item.order,
//     }))
    
//     return NextResponse.json(formattedProducts)
//   } catch (error) {
//     console.error('Error fetching products:', error)
//     return NextResponse.json(
//       { error: 'Failed to fetch products' },
//       { status: 500 }
//     )
//   }
// }

// // POST create new product
// export async function POST(request: NextRequest) {
//   try {
//     const data = await request.json()
//     const collection = await getCollection('products')
    
//     // Get max order
//     const maxOrderItem = await collection
//       .find({})
//       .sort({ order: -1 })
//       .limit(1)
//       .toArray()
    
//     const maxOrder = maxOrderItem.length > 0 ? maxOrderItem[0].order : 0
    
//     const newProduct = {
//       _id: randomUUID(),
//       name: data.name,
//       description: data.description,
//       category: data.category,
//       sectors: data.sectors,
//       featured: data.featured ?? false,
//       active: data.active ?? true,
//       order: maxOrder + 1,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     }
    
//     await collection.insertOne(newProduct)
    
//     return NextResponse.json({
//       id: newProduct._id,
//       ...newProduct,
//     })
//   } catch (error) {
//     console.error('Error creating product:', error)
//     return NextResponse.json(
//       { error: 'Failed to create product' },
//       { status: 500 }
//     )
//   }
// }


import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'
import { randomUUID } from 'crypto'

// GET all products
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    
    const collection = await getCollection('products')
    
    const query = category ? { category } : {}
    const products = await collection
      .find(query)
      .sort({ order: 1 })
      .toArray()
    
    const formattedProducts = products.map(item => ({
      id: item._id,
      name: item.name,
      brandName: item.brandName || '',
      composition: item.composition || '',
      packSize: item.packSize || '[]',
      image: item.image || '',
      description: item.description,
      category: item.category,
      sectors: item.sectors,
      featured: item.featured,
      active: item.active,
      order: item.order,
    }))
    
    return NextResponse.json(formattedProducts)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

// POST create new product
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const collection = await getCollection('products')
    
    // Get max order
    const maxOrderItem = await collection
      .find({})
      .sort({ order: -1 })
      .limit(1)
      .toArray()
    
    const maxOrder = maxOrderItem.length > 0 ? maxOrderItem[0].order : 0
    
    const newProduct = {
      _id: randomUUID(),
      name: data.name,
      brandName: data.brandName || '',
      composition: data.composition || '',
      packSize: data.packSize || '[]',
      image: data.image || '',
      description: data.description,
      category: data.category,
      sectors: data.sectors,
      featured: data.featured ?? false,
      active: data.active ?? true,
      order: maxOrder + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    await collection.insertOne(newProduct)
    
    return NextResponse.json({
      id: newProduct._id,
      ...newProduct,
    })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}
