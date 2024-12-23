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
  output: 'export',
}

module.exports = nextConfig
