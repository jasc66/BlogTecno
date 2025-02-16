"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ArticleCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  slug: string
}

export function ArticleCard({ title, excerpt, image, date, author, slug }: ArticleCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleCardClick = () => {
    router.push(slug)
  }

  return (
    <div className="bg-light-100 dark:bg-dark-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div
        className="relative aspect-square cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 1200px) 50vw, 33vw"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-light-900 dark:bg-dark-100 bg-opacity-70 flex items-center justify-center p-4">
            <p className="text-dark-900 dark:text-light-100 text-center">{excerpt}</p>
          </div>
        )}
      </div>
      <div className="p-6">
        <Link href={slug}>
          <h3 className="text-xl font-bold text-dark-900 dark:text-light-100 mb-2 hover:text-gray-900 dark:hover:text-primary-light dark:hover:text-gray-50">
            {title}
          </h3>
        </Link>
        <div className="flex items-center mb-4">
          <p className="text-sm font-medium text-dark-700 dark:text-light-300">
            {author} • <span className="text-dark-500 dark:text-light-500">{date}</span>
          </p>
        </div>
        <Button asChild className="w-full bg-gray-900 hover:bg-primary-dark text-white dark:bg-gray-50" variant="outline">
          <Link href={slug}>Leer más</Link>
        </Button>
      </div>
    </div>
  )
}

