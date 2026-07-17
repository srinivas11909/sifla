import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

// Supported file types
const ALLOWED_VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/ogg']
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
const MAX_FILE_SIZE = 100 * 1024 * 1024 // 100MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const fileEntry = formData.get('file')
    const typeEntry = formData.get('type')
    const type = typeof typeEntry === 'string' ? typeEntry : 'image'

    if (!fileEntry || !(fileEntry instanceof File)) {
      return NextResponse.json(
        { error: 'No valid file provided' },
        { status: 400 }
      )
    }

    const file = fileEntry as File

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds 100MB limit' },
        { status: 400 }
      )
    }

    const allowedTypes = type === 'video' ? ALLOWED_VIDEO_TYPES : ALLOWED_IMAGE_TYPES
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: `Invalid file type. Allowed: ${allowedTypes.join(', ')}` },
        { status: 400 }
      )
    }

    const timestamp = Date.now()
    const randomStr = Math.random().toString(36).substring(2, 8)
    const originalName = typeof file.name === 'string' ? file.name : 'upload'
    const extension = originalName.split('.').pop() || (type === 'video' ? 'mp4' : 'jpg')
    const fileName = `${timestamp}-${randomStr}.${extension}`

    let url: string

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(fileName, file, {
        access: 'public',
        contentType: file.type,
        addRandomSuffix: false,
      })
      url = blob.url
    } else {
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', type === 'video' ? 'videos' : 'images')
      await mkdir(uploadDir, { recursive: true })

      const filePath = path.join(uploadDir, fileName)
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      await writeFile(filePath, buffer)

      url = `/uploads/${type === 'video' ? 'videos' : 'images'}/${fileName}`
    }

    return NextResponse.json({
      success: true,
      url,
      fileName,
      size: file.size,
      type: file.type,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to upload file' },
      { status: 500 }
    )
  }
}
