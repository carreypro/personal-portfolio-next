import { NextResponse } from 'next/server'
import { name, email } from '@/config/infoConfig'

export const runtime = 'edge'

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const currentDate = new Date().toISOString()

  // 生成一个简单的 RSS feed XML
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${name}'s Blog</title>
    <link>${siteUrl}</link>
    <description>${name}'s blog</description>
    <language>en</language>
    <item>
      <title>Welcome to My Blog</title>
      <link>${siteUrl}/blogs/example</link>
      <description>This is my first blog post</description>
      <author>${email} (${name})</author>
      <pubDate>${currentDate}</pubDate>
      <guid>${siteUrl}/blogs/example</guid>
    </item>
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
