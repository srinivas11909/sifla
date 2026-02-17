import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'

// GET all about content
export async function GET() {
  try {
    const collection = await getCollection('aboutContent')
    const content = await collection.find({}).toArray()
    
    const formattedContent = content.map(item => ({
      id: item._id,
      section: item.section,
      title: item.title,
      subtitle: item.subtitle,
      content: item.content,
      active: item.active,
    }))
    
    return NextResponse.json(formattedContent)
  } catch (error) {
    console.error('Error fetching about content:', error)
    return NextResponse.json(
      { error: 'Failed to fetch about content' },
      { status: 500 }
    )
  }
}

// POST create or update about content
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const collection = await getCollection('aboutContent')
    
    const updateData = {
      title: data.title,
      subtitle: data.subtitle || null,
      content: data.content,
      active: data.active ?? true,
      updatedAt: new Date(),
    }
    
    await collection.updateOne(
      { section: data.section },
      { 
        $set: updateData,
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    )
    
    const updated = await collection.findOne({ section: data.section })
    
    return NextResponse.json({
      id: updated?._id,
      section: updated?.section,
      ...updated,
    })
  } catch (error) {
    console.error('Error saving about content:', error)
    return NextResponse.json(
      { error: 'Failed to save about content' },
      { status: 500 }
    )
  }
}
