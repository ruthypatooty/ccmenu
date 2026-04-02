import { MetadataRoute } from 'next'

const BASE = 'https://chelles.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '/cakes',
    '/desserts',
    '/mains',
    '/pasta',
  ]

  return pages.map(page => ({
    url: `${BASE}${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: page === '/' ? 1 : 0.8,
  }))
}