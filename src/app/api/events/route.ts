import { NextRequest, NextResponse } from 'next/server'
import { getCollection, Event } from '@/lib/mongodb'
import { randomUUID } from 'crypto'

// GET all events
export async function GET() {
  try {
    const collection = await getCollection<Event>('events')
    const events = await collection
      .find({})
      .sort({ order: 1 })
      .toArray()
    
    const formattedEvents = events.map(item => ({
      id: item._id,
      title: item.title,
      description: item.description,
      date: item.date,
      location: item.location,
      images: item.images || [],
      eventType: item.eventType || 'general',
      featured: item.featured || false,
      active: item.active ?? true,
      order: item.order,
    }))
    
    return NextResponse.json(formattedEvents)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}

// POST create new event
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const collection = await getCollection<Event>('events')
    
    // Get max order
    const maxOrderItem = await collection
      .find({})
      .sort({ order: -1 })
      .limit(1)
      .toArray()
    
    const maxOrder = maxOrderItem.length > 0 ? maxOrderItem[0].order : 0
    
    const newEvent = {
      _id: randomUUID(),
      title: data.title,
      description: data.description,
      date: data.date,
      location: data.location,
      images: data.images || [],
      eventType: data.eventType || 'general',
      featured: data.featured || false,
      active: data.active ?? true,
      order: maxOrder + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    await collection.insertOne(newEvent)
    
    return NextResponse.json({
      id: newEvent._id,
      ...newEvent,
    })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    )
  }
}
