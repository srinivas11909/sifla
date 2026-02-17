import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'

// GET single hero slide
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const collection = await getCollection('heroSlides')
    const slide = await collection.findOne({ _id: id })
    
    if (!slide) {
      return NextResponse.json(
        { error: 'Hero slide not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      id: slide._id,
      title: slide.title,
      subtitle: slide.subtitle,
      badge: slide.badge,
      type: slide.type,
      src: slide.src,
      poster: slide.poster,
      order: slide.order,
      active: slide.active,
    })
  } catch (error) {
    console.error('Error fetching hero slide:', error)
    return NextResponse.json(
      { error: 'Failed to fetch hero slide' },
      { status: 500 }
    )
  }
}

// PUT update hero slide
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const data = await request.json()
    const collection = await getCollection('heroSlides')
    
    const updateData = {
      ...data,
      updatedAt: new Date(),
    }
    
    await collection.updateOne(
      { _id: id },
      { $set: updateData }
    )
    
    const updatedSlide = await collection.findOne({ _id: id })
    
    return NextResponse.json({
      id: updatedSlide?._id,
      ...updatedSlide,
    })
  } catch (error) {
    console.error('Error updating hero slide:', error)
    return NextResponse.json(
      { error: 'Failed to update hero slide' },
      { status: 500 }
    )
  }
}

// DELETE hero slide
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const collection = await getCollection('heroSlides')
    await collection.deleteOne({ _id: id })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting hero slide:', error)
    return NextResponse.json(
      { error: 'Failed to delete hero slide' },
      { status: 500 }
    )
  }
}
