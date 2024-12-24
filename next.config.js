const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },
  trailingSlash: true,
  webpack: (config, { dev, isServer }) => {
    // 生产环境优化
    if (!dev) {
      config.optimization.minimize = true;
      config.optimization.minimizer.push(
        new (require('terser-webpack-plugin'))({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        })
      );
    }
    
    // 处理 SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // 静态资源配置
  assetPrefix: process.env.NODE_ENV === 'production' ? '/static' : '',
  // 生成唯一的构建ID
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = withMDX(nextConfig)
