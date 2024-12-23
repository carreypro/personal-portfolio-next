/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'carreypro.com',
      },
    ],
  },
  output: 'standalone',
  distDir: '.next',
  experimental: {
    serverActions: false,
  },
}

module.exports = nextConfig
