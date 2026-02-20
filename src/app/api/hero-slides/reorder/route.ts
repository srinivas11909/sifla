import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'

// POST - Reorder hero slides
export async function POST(request: NextRequest) {
  try {
    const { orders } = await request.json()
    
    if (!Array.isArray(orders)) {
      return NextResponse.json(
        { error: 'Invalid orders data' },
        { status: 400 }
      )
    }

    const collection = await getCollection('heroSlides')
    
    // Update each slide's order
    const updatePromises = orders.map((item: { id: string; order: number }) =>
      collection.updateOne(
        { _id: item.id },
        { $set: { order: item.order, updatedAt: new Date() } }
      )
    )
    
    await Promise.all(updatePromises)
    
    return NextResponse.json({ success: true, message: 'Order updated successfully' })
  } catch (error) {
    console.error('Error reordering hero slides:', error)
    return NextResponse.json(
      { error: 'Failed to reorder hero slides' },
      { status: 500 }
    )
  }
}
