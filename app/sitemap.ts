import { MetadataRoute } from 'next'

const BASE = 'https://crumbandcraft.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '/',
    '/menu',
    '/cakes',
    '/desserts',
    '/pasta',
  ]

  return pages.map(page => ({
    url: `${BASE}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '/' ? 1 : 0.8,
  }))
}