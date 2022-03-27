/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false
}

module.exports = nextConfig

const withPWA = require('next-pwa')
const isProd = (process.env.NODE_ENV = 'production')
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
