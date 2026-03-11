import { MetadataRoute } from 'next'

const BASE = 'https://crumbandcraft.net'
const LAST_MODIFIED = new Date('2026-03-11')

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '/menu',
    '/cakes',
    '/desserts',
    '/pasta',
  ]

  return pages.map(page => ({
    url: `${BASE}${page}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'weekly',
    priority: page === '/menu' ? 1 : 0.8,
  }))
}