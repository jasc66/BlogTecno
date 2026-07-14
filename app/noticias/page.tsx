import { ArticleCard } from '@/components/article-card'
import { newsArticles } from '@/data/news'
import { Hero } from '@/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Noticias - TechInsight',
  description: 'Mantente al día con las últimas noticias en tecnología y ciencia.',
}

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Noticias Tecnológicas"
        description="Mantente al día con las últimas novedades en el mundo de la tecnología y ciencia."
        badge="Actualidad"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map(article => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                date={article.date}
                author={article.author}
                slug={`/noticias/${article.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
