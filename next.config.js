module.exports = {
  env: {
    TYPE: process.env.TYPE,
  },
  compiler: {
    removeConsole: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.travelxp.com'

      },
    ],
    deviceSizes: [340, 640, 768, 1024, 1200, 1920],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  poweredByHeader: false
}