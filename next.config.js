/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  // Ensure content directory is included in the build
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'canvas', 'jsdom']
    }
    return config
  },
}

module.exports = nextConfig

