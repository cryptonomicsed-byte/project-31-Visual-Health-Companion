/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.readyplayer.me', 'cdn.readyplayer.me'],
  },
  swcMinify: false,
  webpack: (config) => {
    config.ignoreWarnings = [
      { module: /node_modules\/@swc/ }
    ]
    return config
  }
}

module.exports = nextConfig
