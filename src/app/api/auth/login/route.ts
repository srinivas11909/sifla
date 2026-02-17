import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'
import * as crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')
    
    const admins = await getCollection('admins')
    const admin = await admins.findOne({ username })

    if (!admin || admin.password !== hashedPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate session token
    const sessionToken = crypto.randomBytes(32).toString('hex')

    // Update admin with session token
    await admins.updateOne(
      { _id: admin._id },
      { $set: { sessionToken, updatedAt: new Date() } }
    )

    // Create response with cookie
    const response = NextResponse.json({
      success: true,
      admin: { id: admin._id, username: admin.username },
    })

    // Set HTTP-only cookie
    response.cookies.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
