import matter from 'gray-matter'

export type BlogType = {
  title: string
  description: string
  author: string
  date: string
  slug: string
}

const exampleBlog: BlogType = {
  slug: 'example',
  title: 'Welcome to My Blog',
  description: 'This is my first blog post',
  author: 'Your Name',
  date: '2024-12-23',
}

async function importBlog(
  blogFilename: string,
): Promise<BlogType> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/content/blog/${blogFilename}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch blog: ${blogFilename}`)
  }
  const source = await response.text()
  const { data } = matter(source)
  
  if (!data.title || !data.description || !data.author || !data.date) {
    throw new Error(`Invalid blog frontmatter in ${blogFilename}`)
  }

  return {
    slug: blogFilename.replace(/\.mdx$/, ''),
    title: data.title,
    description: data.description,
    author: data.author,
    date: data.date,
  }
}

export async function getAllBlogs(): Promise<BlogType[]> {
  return [exampleBlog]
}

export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
  if (slug === 'example') {
    return exampleBlog
  }
  return null
}