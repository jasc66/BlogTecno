import { ArticleCard } from '@/components/article-card'
import { Hero } from '@/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boletines - TechInsight',
  description: 'Suscríbete a nuestros boletines para recibir análisis en profundidad y resúmenes semanales.',
}

const newsletters = [
  {
    title: 'Resumen Semanal de Tecnología',
    excerpt: 'Las noticias más importantes de la semana en el mundo tecnología, resumidas para ti.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-01-20',
    author: 'Tech Weekly',
    slug: 'resumen-semanal-tecnologia',
  },
  {
    title: 'Innovaciones en Inteligencia Artificial',
    excerpt: 'Descubre los últimos avances en IA y cómo están cambiando nuestro mundo.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-01-15',
    author: 'AI Insider',
    slug: 'innovaciones-inteligencia-artificial',
  },
  {
    title: 'Ciberseguridad: Protégete en la Era Digital',
    excerpt: 'Consejos y noticias sobre cómo mantenerte seguro en línea.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-01-10',
    author: 'Cyber Guardian',
    slug: 'ciberseguridad-era-digital',
  },
]

export default function NewslettersPage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Boletines Informativos"
        description="Suscríbete a nuestros boletines para recibir análisis en profundidad y resúmenes semanales."
        badge="Newsletter"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletters.map((newsletter, index) => (
              <ArticleCard key={index} {...newsletter} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
