import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getBlogBySlug } from '@/lib/blogs'
import { BlogLayout } from '@/components/layout/BlogLayout'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return [{ slug: 'example' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug)
  if (!blog) {
    return {
      title: 'Blog not found',
    }
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

export default async function BlogPage({ params }: Props) {
  const blog = await getBlogBySlug(params.slug)
  
  if (!blog) {
    notFound()
  }

  // 直接返回示例内容
  const content = `
# Welcome to My Blog

This is my first blog post. I'm excited to share my thoughts with you!

## What to Expect

In this blog, I'll be sharing:

1. Coding tips and tricks
2. Project updates
3. Tech insights
4. Personal experiences

Stay tuned for more content!
`

  return (
    <BlogLayout blog={blog}>
      <article className="prose prose-neutral dark:prose-invert">
        {content}
      </article>
    </BlogLayout>
  )
}