import { type Metadata, Viewport } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { Analytics } from "@/components/analytics/analytics";
import ErrorBoundary from '@/components/shared/ErrorBoundary'
import { name, headline, introduction } from '@/config/infoConfig'
import '@/styles/tailwind.css'

import { siteConfig, viewport } from './metadata'

export const metadata: Metadata = {
  ...siteConfig,
  title: {
    template: `%s - ${name}`,
    default:
      `${name} - ${headline}`,
  },
  description:
    `${introduction}`,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewportConfig: Viewport = viewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content={viewportConfig} />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className="flex h-full">
        <Providers>
          <ErrorBoundary>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
            <Analytics />
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  )
}
