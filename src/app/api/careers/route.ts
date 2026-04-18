import { NextRequest, NextResponse } from 'next/server'
import { sendCareerEmail, sendConfirmationEmail, CareerFormData } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, phone, position, experience, location, coverLetter, resumeUrl } = body

    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Missing required fields', message: 'Name, email, phone, and position are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email', message: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    const careerData: CareerFormData = {
      name,
      email,
      phone,
      position,
      experience,
      location,
      coverLetter,
      resumeUrl,
    }

    // Send email to career team
    await sendCareerEmail(careerData)

    // Send confirmation email to applicant
    try {
      await sendConfirmationEmail(email, 'career')
    } catch {
      // Log but don't fail if confirmation email fails
      console.error('Failed to send confirmation email')
    }

    return NextResponse.json({
      success: true,
      message: 'Your application has been submitted successfully. Our HR team will review it and get back to you.',
    })
  } catch (error) {
    console.error('Career application error:', error)
    return NextResponse.json(
      { error: 'Server error', message: 'Failed to submit your application. Please try again later.' },
      { status: 500 }
    )
  }
}
