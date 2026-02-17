import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('admin_session')?.value

    if (sessionToken) {
      // Clear session token in database
      const admins = await getCollection('admins')
      await admins.updateOne(
        { sessionToken },
        { $set: { sessionToken: null, updatedAt: new Date() } }
      )
    }

    // Create response and clear cookie
    const response = NextResponse.json({ success: true })
    response.cookies.delete('admin_session')

    return response
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
