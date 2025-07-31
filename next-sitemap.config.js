/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yoforex.co.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/dashboard', '/verify-otp', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/verify-otp', '/admin'],
      },
    ],
    additionalSitemaps: [
      'https://yoforex.co.in/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on page type
    const customConfig = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }

    // High priority pages
    if (path === '/' || path === '/features' || path === '/pricing') {
      customConfig.priority = 1.0
      customConfig.changefreq = 'daily'
    }

    // Medium priority pages
    if (path.includes('/resources') || path.includes('/blog')) {
      customConfig.priority = 0.8
      customConfig.changefreq = 'weekly'
    }

    return customConfig
  },
}