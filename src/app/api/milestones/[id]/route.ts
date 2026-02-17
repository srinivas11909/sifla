import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'

// PUT update milestone
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const data = await request.json()
    const collection = await getCollection('milestones')
    
    await collection.updateOne(
      { _id: id },
      { 
        $set: {
          year: data.year,
          title: data.title,
          description: data.description,
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
    console.error('Error updating milestone:', error)
    return NextResponse.json(
      { error: 'Failed to update milestone' },
      { status: 500 }
    )
  }
}

// DELETE milestone
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const collection = await getCollection('milestones')
    await collection.deleteOne({ _id: id })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting milestone:', error)
    return NextResponse.json(
      { error: 'Failed to delete milestone' },
      { status: 500 }
    )
  }
}
