'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

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

  return (
    <div
      className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(slug)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6">
            <p className="text-white text-center line-clamp-3">{excerpt}</p>
          </div>
        )}
      </div>
      <div className="p-6">
        <Link href={slug} onClick={e => e.stopPropagation()}>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <Button asChild className="w-full">
          <Link href={slug} onClick={e => e.stopPropagation()}>
            Leer más
          </Link>
        </Button>
      </div>
    </div>
  )
}
