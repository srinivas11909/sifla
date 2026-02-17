import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'

// GET single about content by section
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ section: string }> }
) {
  try {
    const { section } = await params
    const collection = await getCollection('aboutContent')
    const content = await collection.findOne({ section })
    
    if (!content) {
      return NextResponse.json(
        { error: 'About content not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      id: content._id,
      section: content.section,
      title: content.title,
      subtitle: content.subtitle,
      content: content.content,
      active: content.active,
    })
  } catch (error) {
    console.error('Error fetching about content:', error)
    return NextResponse.json(
      { error: 'Failed to fetch about content' },
      { status: 500 }
    )
  }
}

// DELETE about content
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ section: string }> }
) {
  try {
    const { section } = await params
    const collection = await getCollection('aboutContent')
    await collection.deleteOne({ section })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting about content:', error)
    return NextResponse.json(
      { error: 'Failed to delete about content' },
      { status: 500 }
    )
  }
}
