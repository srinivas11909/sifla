import { NextRequest, NextResponse } from 'next/server'
import { getCollection, Leadership } from '@/lib/mongodb'

// GET single leadership member
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const collection = await getCollection<Leadership>('leadership')
    
    const leader = await collection.findOne<Leadership>({ _id: id })
    
    if (!leader) {
      return NextResponse.json(
        { error: 'Leadership member not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      id: leader._id,
      name: leader.name,
      designation: leader.designation,
      image: leader.image,
      bio: leader.bio,
      achievements: leader.achievements || [],
      linkedin: leader.linkedin || '',
      twitter: leader.twitter || '',
      email: leader.email || '',
      order: leader.order,
      active: leader.active,
    })
  } catch (error) {
    console.error('Error fetching leadership:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leadership' },
      { status: 500 }
    )
  }
}

// PUT update leadership member
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const data = await request.json()
    const collection = await getCollection<Leadership>('leadership')
    
    const updateData = {
      name: data.name,
      designation: data.designation,
      image: data.image || '',
      bio: data.bio || '',
      achievements: data.achievements || [],
      linkedin: data.linkedin || '',
      twitter: data.twitter || '',
      email: data.email || '',
      active: data.active ?? true,
      updatedAt: new Date(),
    }
    
    const result = await collection.updateOne(
      { _id: id },
      { $set: updateData }
    )
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Leadership member not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      id,
      ...updateData,
    })
  } catch (error) {
    console.error('Error updating leadership:', error)
    return NextResponse.json(
      { error: 'Failed to update leadership' },
      { status: 500 }
    )
  }
}

// DELETE leadership member
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const collection = await getCollection<Leadership>('leadership')
    
    const result = await collection.deleteOne({ _id: id })
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Leadership member not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting leadership:', error)
    return NextResponse.json(
      { error: 'Failed to delete leadership' },
      { status: 500 }
    )
  }
}