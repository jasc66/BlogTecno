import { ArticleCard } from "@/components/article-card"
import { newsArticles } from "@/data/news"
import { Hero } from "@/components/hero"

export default function NewsPage() {
  return (
    <div className="bg-light-100 dark:bg-dark-900 min-h-screen">
      <Hero
        title="Noticias Tecnológicas"
        description="Mantente al día con las últimas novedades en el mundo de la tecnología y ciencia."
        backgroundImage={{
          light:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          dark: "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        }}
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
              slug={`/noticias/${article.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

