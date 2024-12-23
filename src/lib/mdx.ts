import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '@/components/shared/MdxComponents'
import { createElement } from 'react'

export async function getMDXContent(slug: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/content/blog/${slug}.mdx`)
  if (!response.ok) {
    throw new Error(`Failed to fetch MDX content for: ${slug}`)
  }
  const source = await response.text()

  // 简单地返回原始文本内容
  return source
}