import { Hero } from '@/components/hero'
import { ArticleCard } from '@/components/article-card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investigaciones - TechInsight',
  description: 'Investigaciones sobre tecnología, ciencia y sostenibilidad.',
}

const investigacionesArticles = [
  {
    id: 1,
    title: 'Avances en Computación Cuántica',
    excerpt: 'Nuevas técnicas para mejorar la estabilidad de qubits en sistemas cuánticos.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-01-20',
    author: 'Dr. Quantum',
    slug: 'avances-computacion-cuantica',
  },
  {
    id: 2,
    title: 'Innovaciones en Telecomunicaciones',
    excerpt: 'Satélites de última generación para conectividad global.',
    image: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-02-15',
    author: 'Astro Tech',
    slug: 'innovaciones-telecomunicaciones',
  },
]

export default function InvestigacionesPage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Investigaciones"
        description="Descubre nuestros últimos avances en investigación tecnológica y científica."
        badge="Ciencia"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investigacionesArticles.map(article => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                date={article.date}
                author={article.author}
                slug={`/investigaciones/${article.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
