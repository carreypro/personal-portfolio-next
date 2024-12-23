import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { blogHeadLine, blogIntro } from '@/config/infoConfig'
import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'


export default async function BlogsIndex() {
  // 在构建时，我们只显示示例博客
  const blogs = [{
    slug: 'example',
    title: 'Welcome to My Blog',
    description: 'This is my first blog post',
    author: 'Your Name',
    date: '2024-12-23',
  }]

  return (
    <SimpleLayout
      title={blogHeadLine}
      intro={blogIntro}
    >
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <article key={blog.slug} className="space-y-2">
              <Link href={`/blogs/${blog.slug}`}>
                <h2 className="text-xl font-semibold hover:underline">{blog.title}</h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400">{blog.description}</p>
              <time className="text-sm text-gray-500">{formatDate(blog.date)}</time>
            </article>
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

export const metadata: Metadata = {
  title: 'Blogs',
  description: blogIntro
}
