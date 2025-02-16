import { getArticleBySlug, getAllArticleSlugs } from "@/data/news"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 bg-green-50 dark:bg-green-900">
      <h1 className="text-4xl font-bold mb-4 text-green-800 dark:text-green-100">{article.title}</h1>
      <div className="mb-4 text-green-600 dark:text-green-300">
        <span>Por {article.author} | </span>
        <span>Publicado el {article.date}</span>
      </div>
      <div className="relative w-full h-96 mb-8">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover rounded-lg" />
      </div>
      <div
        className="prose prose-green dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2 text-green-800 dark:text-green-100">Etiquetas:</h2>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

