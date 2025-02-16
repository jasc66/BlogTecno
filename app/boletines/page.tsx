import { ArticleCard } from "@/components/article-card"
import { Hero } from "@/components/hero"

const newsletters = [
  {
    title: "Resumen Semanal de Tecnología",
    excerpt: "Las noticias más importantes de la semana en el mundo tecnología, resumidas para ti.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2023-06-18",
    author: "Tech Weekly",
    slug: "resumen-semanal-tecnologia",
  },
  {
    title: "Innovaciones en Inteligencia Artificial",
    excerpt: "Descubre los últimos avances en IA y cómo están cambiando nuestro mundo.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2023-06-15",
    author: "AI Insider",
    slug: "innovaciones-inteligencia-artificial",
  },
  {
    title: "Ciberseguridad: Protégete en la Era Digital",
    excerpt: "Consejos y noticias sobre cómo mantenerte seguro en línea proteger tus datos.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2023-06-12",
    author: "Cyber Guardian",
    slug: "ciberseguridad-era-digital",
  },
]

export default function NewslettersPage() {
  return (
    <div className="min-h-screen bg-light-100 dark:bg-dark-900">
      <Hero
        title="Boletines Informativos"
        description="Suscríbete a nuestros boletines para recibir análisis en profundidad y resúmenes semanales."
        backgroundImage={{
          light:
            "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
          dark: "https://images.unsplash.com/photo-1557426272-3d6b3d0648e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsletters.map((newsletter, index) => (
            <ArticleCard key={index} {...newsletter} />
          ))}
        </div>
      </div>
    </div>
  )
}

