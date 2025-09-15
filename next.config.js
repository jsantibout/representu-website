/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.youtube.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
        port: '',
        pathname: '/embed/**',
      },
    ],
  },
}

module.exports = nextConfig
