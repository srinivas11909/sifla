import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'
import { randomUUID } from 'crypto'

// GET all milestones
export async function GET() {
  try {
    const collection = await getCollection('milestones')
    const milestones = await collection
      .find({})
      .sort({ order: 1 })
      .toArray()
    
    const formattedMilestones = milestones.map(item => ({
      id: item._id,
      year: item.year,
      title: item.title,
      description: item.description,
      order: item.order,
      active: item.active,
    }))
    
    return NextResponse.json(formattedMilestones)
  } catch (error) {
    console.error('Error fetching milestones:', error)
    return NextResponse.json(
      { error: 'Failed to fetch milestones' },
      { status: 500 }
    )
  }
}

// POST create new milestone
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const collection = await getCollection('milestones')
    
    // Get max order
    const maxOrderItem = await collection
      .find({})
      .sort({ order: -1 })
      .limit(1)
      .toArray()
    
    const maxOrder = maxOrderItem.length > 0 ? maxOrderItem[0].order : 0
    
    const newMilestone = {
      _id: randomUUID(),
      year: data.year,
      title: data.title,
      description: data.description,
      order: maxOrder + 1,
      active: data.active ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    await collection.insertOne(newMilestone)
    
    return NextResponse.json({
      id: newMilestone._id,
      ...newMilestone,
    })
  } catch (error) {
    console.error('Error creating milestone:', error)
    return NextResponse.json(
      { error: 'Failed to create milestone' },
      { status: 500 }
    )
  }
}
