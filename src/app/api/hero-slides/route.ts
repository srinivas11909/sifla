import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'
import { randomUUID } from 'crypto'

// GET all hero slides
export async function GET() {
  try {
    const collection = await getCollection('heroSlides')
    const slides = await collection
      .find({})
      .sort({ order: 1 })
      .toArray()
    
    // Convert _id to id for frontend compatibility
    const formattedSlides = slides.map(slide => ({
      id: slide._id,
      title: slide.title,
      subtitle: slide.subtitle,
      badge: slide.badge,
      type: slide.type,
      src: slide.src,
      poster: slide.poster,
      order: slide.order,
      active: slide.active,
    }))
    
    return NextResponse.json(formattedSlides)
  } catch (error) {
    console.error('Error fetching hero slides:', error)
    return NextResponse.json(
      { error: 'Failed to fetch hero slides' },
      { status: 500 }
    )
  }
}

// POST create new hero slide
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const collection = await getCollection('heroSlides')
    
    // Get max order
    const maxOrderSlide = await collection
      .find({})
      .sort({ order: -1 })
      .limit(1)
      .toArray()
    
    const maxOrder = maxOrderSlide.length > 0 ? maxOrderSlide[0].order : 0
    
    const newSlide = {
      _id: randomUUID(),
      title: data.title,
      subtitle: data.subtitle,
      badge: data.badge || null,
      type: data.type || 'image',
      src: data.src,
      poster: data.poster || null,
      order: maxOrder + 1,
      active: data.active ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    await collection.insertOne(newSlide)
    
    return NextResponse.json({
      id: newSlide._id,
      ...newSlide,
    })
  } catch (error) {
    console.error('Error creating hero slide:', error)
    return NextResponse.json(
      { error: 'Failed to create hero slide' },
      { status: 500 }
    )
  }
}
