import { NextRequest, NextResponse } from 'next/server'
import { getCollection, Leadership } from '@/lib/mongodb'
import { randomUUID } from 'crypto'

// GET all leadership members
export async function GET() {
  try {
    const collection = await getCollection<Leadership>('leadership')
    const leaders = await collection
      .find({})
      .sort({ order: 1 })
      .toArray()
    
    const formattedLeaders = leaders.map(item => ({
      id: item._id,
      name: item.name,
      designation: item.designation,
      image: item.image,
      bio: item.bio,
      achievements: item.achievements || [],
      linkedin: item.linkedin || '',
      twitter: item.twitter || '',
      email: item.email || '',
      order: item.order,
      active: item.active ?? true,
    }))
    
    return NextResponse.json(formattedLeaders)
  } catch (error) {
    console.error('Error fetching leadership:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leadership' },
      { status: 500 }
    )
  }
}

// POST create new leadership member
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const collection = await getCollection<Leadership>('leadership')
    
    // Get max order
    const maxOrderItem = await collection
      .find({})
      .sort({ order: -1 })
      .limit(1)
      .toArray()
    
    const maxOrder = maxOrderItem.length > 0 ? maxOrderItem[0].order : 0
    
    const newLeader = {
      _id: randomUUID(),
      name: data.name,
      designation: data.designation,
      image: data.image || '',
      bio: data.bio || '',
      achievements: data.achievements || [],
      linkedin: data.linkedin || '',
      twitter: data.twitter || '',
      email: data.email || '',
      order: maxOrder + 1,
      active: data.active ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    await collection.insertOne(newLeader)
    
    return NextResponse.json({
      id: newLeader._id,
      ...newLeader,
    })
  } catch (error) {
    console.error('Error creating leadership:', error)
    return NextResponse.json(
      { error: 'Failed to create leadership' },
      { status: 500 }
    )
  }
}
