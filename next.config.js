/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  env: {
    PASSWORD_PROTECT:
      process.env.NODE_ENV !== 'development' &&
      process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production',
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    // Unsplash added for SliceMachines mocks
    domains: [
      'images.prismic.io',
      '{{prismicRepo}}.cdn.prismic.io',
      'images.unsplash.com',
    ],
  },
})
