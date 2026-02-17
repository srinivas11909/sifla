import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'

// GET single product
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const collection = await getCollection('products')
    const product = await collection.findOne({ _id: id })
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      id: product._id,
      name: product.name,
      description: product.description,
      category: product.category,
      sectors: product.sectors,
      featured: product.featured,
      active: product.active,
      order: product.order,
    })
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}

// PUT update product
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const data = await request.json()
    const collection = await getCollection('products')
    
    await collection.updateOne(
      { _id: id },
      { 
        $set: {
          name: data.name,
          description: data.description,
          category: data.category,
          sectors: data.sectors,
          featured: data.featured,
          active: data.active,
          updatedAt: new Date(),
        }
      }
    )
    
    const updated = await collection.findOne({ _id: id })
    
    return NextResponse.json({
      id: updated?._id,
      ...updated,
    })
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

// DELETE product
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const collection = await getCollection('products')
    await collection.deleteOne({ _id: id })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    )
  }
}
