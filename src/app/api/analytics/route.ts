// import { NextRequest, NextResponse } from 'next/server'
// import { getCollection } from '@/lib/mongodb'
// import { randomUUID } from 'crypto'

// // GET - Fetch analytics data
// export async function GET(request: NextRequest) {
//   try {
//     const collection = await getCollection('analytics')
    
//     const { searchParams } = new URL(request.url)
//     const days = parseInt(searchParams.get('days') || '7')
//     const page = searchParams.get('page')
    
//     // Calculate date range
//     const startDate = new Date()
//     startDate.setDate(startDate.getDate() - days)
//     startDate.setHours(0, 0, 0, 0)
    
//     // Build query
//     const query: Record<string, unknown> = {
//       timestamp: { $gte: startDate }
//     }
//     if (page) {
//       query.page = page
//     }
    
//     // Get page views
//     const pageViews = await collection
//       .find(query)
//       .sort({ timestamp: -1 })
//       .limit(1000)
//       .toArray()
    
//     // Get unique visitors
//     const uniqueVisitors = await collection.distinct('visitorId', query)
    
//     // Get top pages
//     const topPagesAggregation = await collection.aggregate([
//       { $match: query },
//       { $group: { _id: '$page', count: { $sum: 1 } } },
//       { $sort: { count: -1 } },
//       { $limit: 10 }
//     ]).toArray()
    
//     // Get daily stats
//     const dailyStatsAggregation = await collection.aggregate([
//       { $match: query },
//       {
//         $group: {
//           _id: {
//             $dateToString: { format: '%Y-%m-%d', date: '$timestamp' }
//           },
//           views: { $sum: 1 },
//           visitors: { $addToSet: '$visitorId' }
//         }
//       },
//       { $sort: { _id: 1 } },
//       {
//         $project: {
//           date: '$_id',
//           views: 1,
//           uniqueVisitors: { $size: '$visitors' }
//         }
//       }
//     ]).toArray()
    
//     // Get device types
//     const deviceAggregation = await collection.aggregate([
//       { $match: query },
//       { $group: { _id: '$deviceType', count: { $sum: 1 } } },
//       { $sort: { count: -1 } }
//     ]).toArray()
    
//     // Get referrers
//     const referrerAggregation = await collection.aggregate([
//       { $match: { ...query, referrer: { $exists: true, $ne: '', $ne: null } } },
//       { $group: { _id: '$referrer', count: { $sum: 1 } } },
//       { $sort: { count: -1 } },
//       { $limit: 10 }
//     ]).toArray()
    
//     // Get recent visits
//     const recentVisits = await collection
//       .find(query)
//       .sort({ timestamp: -1 })
//       .limit(50)
//       .project({ visitorId: 0, _id: 0 })
//       .toArray()
    
//     return NextResponse.json({
//       summary: {
//         totalViews: pageViews.length,
//         uniqueVisitors: uniqueVisitors.length,
//         avgViewsPerVisitor: uniqueVisitors.length > 0 
//           ? (pageViews.length / uniqueVisitors.length).toFixed(2)
//           : 0
//       },
//       topPages: topPagesAggregation.map(p => ({
//         page: p._id,
//         views: p.count
//       })),
//       dailyStats: dailyStatsAggregation,
//       devices: deviceAggregation.map(d => ({
//         type: d._id || 'unknown',
//         count: d.count
//       })),
//       referrers: referrerAggregation.map(r => ({
//         referrer: r._id || 'Direct',
//         count: r.count
//       })),
//       recentVisits
//     })
//   } catch (error) {
//     console.error('Error fetching analytics:', error)
//     return NextResponse.json(
//       { error: 'Failed to fetch analytics' },
//       { status: 500 }
//     )
//   }
// }

// // POST - Track a page view
// export async function POST(request: NextRequest) {
//   try {
//     const data = await request.json()
//     const collection = await getCollection('analytics')
    
//     // Get visitor identifier (from IP + User Agent hash or provided ID)
//     const ip = request.headers.get('x-forwarded-for') || 
//                request.headers.get('x-real-ip') || 
//                'unknown'
//     const userAgent = request.headers.get('user-agent') || 'unknown'
    
//     // Detect device type
//     let deviceType = 'desktop'
//     if (/mobile/i.test(userAgent)) {
//       deviceType = 'mobile'
//     } else if (/tablet/i.test(userAgent)) {
//       deviceType = 'tablet'
//     }
    
//     // Parse referrer
//     let referrer = data.referrer || ''
//     if (referrer) {
//       try {
//         const referrerUrl = new URL(referrer)
//         referrer = referrerUrl.hostname
//       } catch {
//         referrer = ''
//       }
//     }
    
//     const analyticsEntry = {
//       _id: randomUUID(),
//       visitorId: data.visitorId || randomUUID(),
//       page: data.page || '/',
//       title: data.title || '',
//       referrer: referrer,
//       deviceType,
//       userAgent,
//       ip: ip.toString().split(',')[0].trim(),
//       country: data.country || '',
//       city: data.city || '',
//       timestamp: new Date(),
//       sessionId: data.sessionId || randomUUID()
//     }
    
//     await collection.insertOne(analyticsEntry)
    
//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error('Error tracking page view:', error)
//     return NextResponse.json(
//       { error: 'Failed to track page view' },
//       { status: 500 }
//     )
//   }
// }



import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'
import { randomUUID } from 'crypto'

// Fetch location data from IP using free geolocation API
async function getLocationFromIP(ip: string): Promise<{ country: string; city: string; region: string }> {
  try {
    // Skip localhost and private IPs
    if (!ip || ip === 'unknown' || ip.startsWith('127.') || ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('172.')) {
      return { country: 'Local', city: 'Local', region: 'Local' }
    }

    // Use free IP geolocation API
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,regionName,city`, {
      signal: AbortSignal.timeout(3000) // 3 second timeout
    })
    
    if (!response.ok) {
      return { country: 'Unknown', city: 'Unknown', region: 'Unknown' }
    }
    
    const data = await response.json()
    
    if (data.status === 'success') {
      return {
        country: data.country || 'Unknown',
        city: data.city || 'Unknown',
        region: data.regionName || 'Unknown'
      }
    }
    
    return { country: 'Unknown', city: 'Unknown', region: 'Unknown' }
  } catch (error) {
    console.debug('Geolocation lookup failed:', error)
    return { country: 'Unknown', city: 'Unknown', region: 'Unknown' }
  }
}

// GET - Fetch analytics data
export async function GET(request: NextRequest) {
  try {
    const collection = await getCollection('analytics')
    
    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '7')
    const page = searchParams.get('page')
    
    // Calculate date range
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)
    startDate.setHours(0, 0, 0, 0)
    
    // Build query
    const query: Record<string, unknown> = {
      timestamp: { $gte: startDate }
    }
    if (page) {
      query.page = page
    }
    
    // Get page views
    const pageViews = await collection
      .find(query)
      .sort({ timestamp: -1 })
      .limit(1000)
      .toArray()
    
    // Get unique visitors
    const uniqueVisitors = await collection.distinct('visitorId', query)
    
    // Get top pages
    const topPagesAggregation = await collection.aggregate([
      { $match: query },
      { $group: { _id: '$page', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]).toArray()
    
    // Get daily stats
    const dailyStatsAggregation = await collection.aggregate([
      { $match: query },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$timestamp' }
          },
          views: { $sum: 1 },
          visitors: { $addToSet: '$visitorId' }
        }
      },
      { $sort: { _id: 1 } },
      {
        $project: {
          date: '$_id',
          views: 1,
          uniqueVisitors: { $size: '$visitors' }
        }
      }
    ]).toArray()
    
    // Get device types
    const deviceAggregation = await collection.aggregate([
      { $match: query },
      { $group: { _id: '$deviceType', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]).toArray()
    
    // Get referrers
    const referrerAggregation = await collection.aggregate([
      { $match: { ...query, referrer: { $exists: true, $ne: '', $ne: null } } },
      { $group: { _id: '$referrer', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]).toArray()
    
    // Get country distribution
    const countryAggregation = await collection.aggregate([
      { $match: { ...query, country: { $exists: true, $ne: 'Unknown', $ne: 'Local' } } },
      { $group: { _id: '$country', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]).toArray()
    
    // Get city distribution
    const cityAggregation = await collection.aggregate([
      { $match: { ...query, city: { $exists: true, $ne: 'Unknown', $ne: 'Local' } } },
      { $group: { _id: { city: '$city', country: '$country' }, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]).toArray()
    
    // Get recent visits
    const recentVisits = await collection
      .find(query)
      .sort({ timestamp: -1 })
      .limit(50)
      .project({ visitorId: 0, _id: 0 })
      .toArray()
    
    return NextResponse.json({
      summary: {
        totalViews: pageViews.length,
        uniqueVisitors: uniqueVisitors.length,
        avgViewsPerVisitor: uniqueVisitors.length > 0 
          ? (pageViews.length / uniqueVisitors.length).toFixed(2)
          : 0
      },
      topPages: topPagesAggregation.map(p => ({
        page: p._id,
        views: p.count
      })),
      dailyStats: dailyStatsAggregation,
      devices: deviceAggregation.map(d => ({
        type: d._id || 'unknown',
        count: d.count
      })),
      referrers: referrerAggregation.map(r => ({
        referrer: r._id || 'Direct',
        count: r.count
      })),
      countries: countryAggregation.map(c => ({
        country: c._id,
        count: c.count
      })),
      cities: cityAggregation.map(c => ({
        city: c._id?.city || 'Unknown',
        country: c._id?.country || '',
        count: c.count
      })),
      recentVisits
    })
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}

// POST - Track a page view
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const collection = await getCollection('analytics')
    
    // Get visitor identifier (from IP + User Agent hash or provided ID)
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    const cleanIp = ip.toString().split(',')[0].trim()
    const userAgent = request.headers.get('user-agent') || 'unknown'
    
    // Detect device type
    let deviceType = 'desktop'
    if (/mobile/i.test(userAgent)) {
      deviceType = 'mobile'
    } else if (/tablet/i.test(userAgent)) {
      deviceType = 'tablet'
    }
    
    // Parse referrer
    let referrer = data.referrer || ''
    if (referrer) {
      try {
        const referrerUrl = new URL(referrer)
        referrer = referrerUrl.hostname
      } catch {
        referrer = ''
      }
    }
    
    // Get location from IP (only if not provided)
    let location = { country: data.country || '', city: data.city || '', region: '' }
    if (!location.country && cleanIp && cleanIp !== 'unknown') {
      location = await getLocationFromIP(cleanIp)
    }
    
    const analyticsEntry = {
      _id: randomUUID(),
      visitorId: data.visitorId || randomUUID(),
      page: data.page || '/',
      title: data.title || '',
      referrer: referrer,
      deviceType,
      userAgent,
      ip: cleanIp,
      country: location.country,
      city: location.city,
      region: location.region,
      timestamp: new Date(),
      sessionId: data.sessionId || randomUUID()
    }
    
    await collection.insertOne(analyticsEntry)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking page view:', error)
    return NextResponse.json(
      { error: 'Failed to track page view' },
      { status: 500 }
    )
  }
}
