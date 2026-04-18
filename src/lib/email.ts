import nodemailer from 'nodemailer'

// Email transporter configurations
const createCareerTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.siflonpharma.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.SMTP_USER || 'career@siflonpharma.com',
      pass: process.env.SMTP_PASS,
    },
  })
}

const createMarketingTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.siflonpharma.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.SMTP_MARKETING_USER || 'marketing1@siflonpharma.com',
      pass: process.env.SMTP_MARKETING_PASS,
    },
  })
}

// Contact form email interface
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  country?: string
  subject: string
  message: string
}

// Career form email interface
export interface CareerFormData {
  name: string
  email: string
  phone: string
  position: string
  experience?: string
  location?: string
  coverLetter?: string
  resumeUrl?: string
}

// Quote form email interface
export interface QuoteFormData {
  name: string
  email: string
  phone: string
  company: string
  country: string
  products?: string
  quantity?: string
  message: string
}

// Send contact form email
export async function sendContactEmail(data: ContactFormData) {
  const transporter = createMarketingTransporter()

  const mailOptions = {
    from: process.env.SMTP_MARKETING_USER || 'marketing1@siflonpharma.com',
    to: 'marketing1@siflonpharma.com',
    subject: `New Contact Form Submission: ${data.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #243d80; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #243d80; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            ${data.phone ? `<div class="field"><div class="label">Phone:</div><div class="value">${data.phone}</div></div>` : ''}
            ${data.company ? `<div class="field"><div class="label">Company:</div><div class="value">${data.company}</div></div>` : ''}
            ${data.country ? `<div class="field"><div class="label">Country:</div><div class="value">${data.country}</div></div>` : ''}
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${data.subject}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    replyTo: data.email,
  }

  return transporter.sendMail(mailOptions)
}

// Send career application email
export async function sendCareerEmail(data: CareerFormData) {
  const transporter = createCareerTransporter()

  const mailOptions = {
    from: process.env.SMTP_USER || 'career@siflonpharma.com',
    to: 'career@siflonpharma.com',
    subject: `New Job Application: ${data.position}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #243d80; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #243d80; }
          .value { margin-top: 5px; }
          .resume-link { display: inline-block; background: #243d80; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Job Application</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Applicant Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            <div class="field">
              <div class="label">Position Applied For:</div>
              <div class="value">${data.position}</div>
            </div>
            ${data.experience ? `<div class="field"><div class="label">Experience:</div><div class="value">${data.experience}</div></div>` : ''}
            ${data.location ? `<div class="field"><div class="label">Location:</div><div class="value">${data.location}</div></div>` : ''}
            ${data.coverLetter ? `<div class="field"><div class="label">Cover Letter:</div><div class="value">${data.coverLetter}</div></div>` : ''}
            ${data.resumeUrl ? `<div class="field"><div class="label">Resume:</div><a href="${data.resumeUrl}" class="resume-link">View Resume</a></div>` : ''}
          </div>
        </div>
      </body>
      </html>
    `,
    replyTo: data.email,
  }

  return transporter.sendMail(mailOptions)
}

// Send quote request email
export async function sendQuoteEmail(data: QuoteFormData) {
  const transporter = createMarketingTransporter()

  const mailOptions = {
    from: process.env.SMTP_MARKETING_USER || 'marketing1@siflonpharma.com',
    to: 'marketing1@siflonpharma.com',
    subject: `New Quote Request from ${data.company}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #243d80; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #243d80; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Quote Request</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
            <div class="field">
              <div class="label">Country:</div>
              <div class="value">${data.country}</div>
            </div>
            ${data.products ? `<div class="field"><div class="label">Products Interested In:</div><div class="value">${data.products}</div></div>` : ''}
            ${data.quantity ? `<div class="field"><div class="label">Quantity Required:</div><div class="value">${data.quantity}</div></div>` : ''}
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    replyTo: data.email,
  }

  return transporter.sendMail(mailOptions)
}

// Send confirmation email to user
export async function sendConfirmationEmail(
  to: string,
  type: 'contact' | 'career' | 'quote'
) {
  const transporter = createMarketingTransporter()

  const subjects = {
    contact: 'Thank you for contacting Siflon Pharma',
    career: 'Application Received - Siflon Pharma',
    quote: 'Quote Request Received - Siflon Pharma',
  }

  const contents = {
    contact: `
      <h2>Thank you for reaching out!</h2>
      <p>We have received your message and will get back to you shortly.</p>
      <p>Our team typically responds within 24-48 business hours.</p>
    `,
    career: `
      <h2>Application Received!</h2>
      <p>Thank you for your interest in joining Siflon Pharma.</p>
      <p>Our HR team will review your application and get back to you if your profile matches our requirements.</p>
    `,
    quote: `
      <h2>Quote Request Received!</h2>
      <p>Thank you for your interest in our products.</p>
      <p>Our sales team will prepare a customized quote and get back to you shortly.</p>
    `,
  }

  const mailOptions = {
    from: process.env.SMTP_MARKETING_USER || 'marketing1@siflonpharma.com',
    to,
    subject: subjects[type],
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #243d80; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Siflon Pharma</h1>
          </div>
          <div class="content">
            ${contents[type]}
            <p>Best regards,<br>The Siflon Pharma Team</p>
          </div>
          <div class="footer">
            <p>Siflon Pharma - Quality Animal Healthcare</p>
            <p>www.siflonpharma.com</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  return transporter.sendMail(mailOptions)
}
