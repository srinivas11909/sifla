import { NextRequest, NextResponse } from 'next/server'
import { sendQuoteEmail, sendConfirmationEmail, QuoteFormData } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, phone, company, country, products, quantity, message } = body

    if (!name || !email || !phone || !company || !country || !message) {
      return NextResponse.json(
        { error: 'Missing required fields', message: 'Name, email, phone, company, country, and message are required' },
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

    const quoteData: QuoteFormData = {
      name,
      email,
      phone,
      company,
      country,
      products,
      quantity,
      message,
    }

    // Send email to marketing team
    await sendQuoteEmail(quoteData)

    // Send confirmation email to user
    try {
      await sendConfirmationEmail(email, 'quote')
    } catch {
      // Log but don't fail if confirmation email fails
      console.error('Failed to send confirmation email')
    }

    return NextResponse.json({
      success: true,
      message: 'Your quote request has been submitted successfully. Our sales team will prepare a quote and get back to you shortly.',
    })
  } catch (error) {
    console.error('Quote request error:', error)
    return NextResponse.json(
      { error: 'Server error', message: 'Failed to submit your quote request. Please try again later.' },
      { status: 500 }
    )
  }
}
