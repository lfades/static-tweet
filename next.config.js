module.exports = {
  transpilePackages: ['next-tweet'],
  images: {
    domains: ['pbs.twimg.com', 'abs.twimg.com'],
  },
  experimental: {
    appDir: true,
    fetchCache: true,
  },
}
