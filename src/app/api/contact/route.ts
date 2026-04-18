import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, sendConfirmationEmail, ContactFormData } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, phone, company, country, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields', message: 'Name, email, subject, and message are required' },
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

    const contactData: ContactFormData = {
      name,
      email,
      phone,
      company,
      country,
      subject,
      message,
    }

    // Send email to marketing team
    await sendContactEmail(contactData)

    // Send confirmation email to user
    try {
      await sendConfirmationEmail(email, 'contact')
    } catch {
      // Log but don't fail if confirmation email fails
      console.error('Failed to send confirmation email')
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you shortly.',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Server error', message: 'Failed to send your message. Please try again later.' },
      { status: 500 }
    )
  }
}
