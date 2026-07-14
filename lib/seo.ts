import type { Metadata } from 'next'
import type { NewsArticle } from '@/types/news'

// Builds rich metadata for article pages
export function articleMetadata(article: NewsArticle): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const url = `${siteUrl}/noticias/${article.slug}`
  const image = article.image
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: image ? [{ url: image }] : undefined,
    },
    alternates: {
      canonical: url,
    },
  }
}
