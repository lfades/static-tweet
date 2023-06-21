/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['react-tweet'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
    ],
  },
}
