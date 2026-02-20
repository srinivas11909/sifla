'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Generate or get visitor ID from localStorage
function getVisitorId(): string {
  if (typeof window === 'undefined') return ''
  
  const stored = localStorage.getItem('siflon_visitor_id')
  if (stored) return stored
  
  const newId = 'visitor_' + Math.random().toString(36).substring(2) + Date.now().toString(36)
  localStorage.setItem('siflon_visitor_id', newId)
  return newId
}

// Generate or get session ID from sessionStorage
function getSessionId(): string {
  if (typeof window === 'undefined') return ''
  
  const stored = sessionStorage.getItem('siflon_session_id')
  if (stored) return stored
  
  const newId = 'session_' + Math.random().toString(36).substring(2) + Date.now().toString(36)
  sessionStorage.setItem('siflon_session_id', newId)
  return newId
}

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const lastTrackedPath = useRef<string>('')
  const visitorId = useRef<string>('')
  const sessionId = useRef<string>('')

  useEffect(() => {
    // Skip admin pages
    if (pathname.startsWith('/admin')) return
    
    // Initialize IDs
    if (!visitorId.current) {
      visitorId.current = getVisitorId()
    }
    if (!sessionId.current) {
      sessionId.current = getSessionId()
    }
    
    // Only track if path changed
    if (lastTrackedPath.current === pathname) return
    lastTrackedPath.current = pathname
    
    // Track page view
    const trackPageView = async () => {
      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            page: pathname,
            title: document.title,
            visitorId: visitorId.current,
            sessionId: sessionId.current,
            referrer: document.referrer || '',
          }),
        })
      } catch (error) {
        // Silently fail - analytics should not affect user experience
        console.debug('Analytics tracking failed:', error)
      }
    }
    
    // Delay to ensure page is loaded
    const timeoutId = setTimeout(trackPageView, 100)
    
    return () => clearTimeout(timeoutId)
  }, [pathname])

  return null // This component doesn't render anything
}
