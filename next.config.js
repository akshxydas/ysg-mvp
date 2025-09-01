/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove appDir as it's no longer needed in Next.js 14
  },
  images: {
    domains: ['unsplash.com', 'picsum.photos', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig 