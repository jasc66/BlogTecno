import { ArticleCard } from "@/components/article-card"
import { newsArticles } from "@/data/news"
import { Hero } from "@/components/hero"

export default function InvestigacionesPage() {
  return (
    <div className="bg-green-50 dark:bg-green-900 min-h-screen">
      <Hero
        title="Investigaciones en Ganadería Sostenible"
        description="Descubre nuestros últimos avances en sistemas silvopastoriles, manejo de pasturas y mejoramiento la producción ganadera."
        backgroundImage="https://res.cloudinary.com/dkjjcpwkc/image/upload/v1686925321/investigacion_ganadera_hero_image_rmzxc4.jpg"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
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

