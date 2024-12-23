import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    webpackBuildWorker: true,
  },
  // Cloudflare Pages configuration
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://personal-portfolio-next.pages.dev',
  },
  webpack: (config, { webpack, isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        os: false,
        fs: false,
        path: false,
        stream: false,
        buffer: false,
        crypto: false,
      }
    }
    return config
  },
  async rewrites() {
    return [
      {
        source: '/content/:path*',
        destination: '/_next/static/content/:path*',
      },
    ]
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
