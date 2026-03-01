import { NextRequest, NextResponse } from 'next/server'
import { getCollection, Event } from '@/lib/mongodb'

// GET single event
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const collection = await getCollection<Event>('events')
    
    const event = await collection.findOne<Event>({ _id: id })
    
    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      id: event._id,
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
      images: event.images || [],
      eventType: event.eventType || 'general',
      featured: event.featured || false,
      active: event.active,
      order: event.order,
    })
  } catch (error) {
    console.error('Error fetching event:', error)
    return NextResponse.json(
      { error: 'Failed to fetch event' },
      { status: 500 }
    )
  }
}

// PUT update event
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const data = await request.json()
    const collection = await getCollection<Event>('events')
    
    const updateData = {
      title: data.title,
      description: data.description,
      date: data.date,
      location: data.location,
      images: data.images || [],
      eventType: data.eventType || 'general',
      featured: data.featured || false,
      active: data.active ?? true,
      updatedAt: new Date(),
    }
    
    const result = await collection.updateOne(
      { _id: id },
      { $set: updateData }
    )
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      id,
      ...updateData,
    })
  } catch (error) {
    console.error('Error updating event:', error)
    return NextResponse.json(
      { error: 'Failed to update event' },
      { status: 500 }
    )
  }
}

// DELETE event
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const collection = await getCollection<Event>('events')
    
    const result = await collection.deleteOne({ _id: id })
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting event:', error)
    return NextResponse.json(
      { error: 'Failed to delete event' },
      { status: 500 }
    )
  }
}
