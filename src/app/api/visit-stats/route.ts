import { NextResponse } from 'next/server'
import { cacheInstance } from '@/lib/cache'

export const runtime = 'edge'

const OPENPANEL_API_URL = 'https://api.openpanel.dev';
const OPENPANEL_CLIENT_ID = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;
const OPENPANEL_SECRET_ID = process.env.OPENPANEL_API_SECRET_ID;
const OPENPANEL_PROJECT_ID = process.env.OPENPANEL_PROJECT_ID;

const CACHE_KEY = 'visit_stats';
const CACHE_TTL = 300; // 5 minutes

export async function GET() {
  try {
    // Check cache first
    const cachedData = cacheInstance.get(CACHE_KEY);
    if (cachedData) {
      return NextResponse.json(cachedData);
    }

    if (!OPENPANEL_PROJECT_ID || !OPENPANEL_CLIENT_ID || !OPENPANEL_SECRET_ID) {
      throw new Error('Missing OpenPanel configuration');
    }

    // 获取总访问数据
    const response = await fetch(`${OPENPANEL_API_URL}/export/events?projectId=${OPENPANEL_PROJECT_ID}&event=screen_view`, {
      headers: {
        'openpanel-client-id': OPENPANEL_CLIENT_ID,
        'openpanel-client-secret': OPENPANEL_SECRET_ID,
      },
      next: { revalidate: CACHE_TTL },
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to fetch visit stats: ${error}`);
    }

    const data = await response.json();
    
    // Cache the response
    cacheInstance.set(CACHE_KEY, data, CACHE_TTL);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching visit stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visit statistics' },
      { status: 500 }
    );
  }
}

export async function POST() {
  // 在这里实现访问计数逻辑
  return NextResponse.json({ success: true })
}