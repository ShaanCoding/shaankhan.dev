import Redis from 'ioredis'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const url = request.nextUrl
    const slug = url.searchParams.get('slug')

    if (!slug) {
        return new NextResponse(JSON.stringify({ error: 'Slug is required' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    try {
        const redis = new Redis(process.env.REDIS_URL!, {
            lazyConnect: true,
        })

        redis.connect()

        const key = ['pageviews', 'projects', slug].join(':')
        const pageViewCount = (await redis.get(key)) ?? 0

        return new NextResponse(JSON.stringify({ slug, pageViewCount }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    } catch (error) {
        console.error('Redis error:', error)
        return new NextResponse(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}
