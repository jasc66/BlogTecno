import { Hero } from "@/components/hero"
import { ArticleCard } from "@/components/article-card"

// Asume que tienes un array de artículos de investigación
const investigacionesArticles = [
  // ... tus artículos aquí
  {
    id: 1,
    title: "Artículo 1",
    excerpt: "Resumen del artículo 1",
    image: "url_imagen_1",
    date: "2024-01-20",
    author: "Autor 1",
    slug: "articulo-1",
  },
  {
    id: 2,
    title: "Artículo 2",
    excerpt: "Resumen del artículo 2",
    image: "url_imagen_2",
    date: "2024-02-15",
    author: "Autor 2",
    slug: "articulo-2",
  },
]

export default function InvestigacionesPage() {
  return (
    <div className="bg-light-100 dark:bg-dark-900 min-h-screen">
      <Hero
        title="Investigaciones en Ganadería Sostenible"
        description="Descubre nuestros últimos avances en sistemas silvopastoriles, manejo de pasturas y mejoramiento la producción ganadera."
        backgroundImage={{
          light:
            "https://res.cloudinary.com/dkjjcpwkc/image/upload/v1686925321/investigacion_ganadera_hero_image_rmzxc4.jpg",
          dark: "https://res.cloudinary.com/dkjjcpwkc/image/upload/v1686925321/investigacion_ganadera_hero_image_dark_rmzxc4.jpg",
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investigacionesArticles.map((article) => (
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
    </div>
  )
}

