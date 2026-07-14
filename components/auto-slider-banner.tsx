'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  id: number
  title: string
  excerpt: string
  image: string
  link: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'La Inteligencia Artificial Transformando Industrias',
    excerpt: 'Descubre cómo la IA está revolucionando sectores desde la salud hasta las finanzas.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    link: '/noticias/ia-transformando-industrias',
  },
  {
    id: 2,
    title: 'El Futuro de la Computación Cuántica',
    excerpt: 'Los últimos avances en computación cuántica prometen resolver problemas imposibles hoy.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    link: '/noticias/computacion-cuantica',
  },
  {
    id: 3,
    title: 'Blockchain Más Allá de las Criptomonedas',
    excerpt: 'Explora las aplicaciones prácticas de blockchain enSupply Chain y más.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    link: '/boletines/blockchain',
  },
]

export function AutoSliderBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const current = slides[currentSlide]

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-dark-900">
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src={current.image}
          alt={current.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/60 to-transparent" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-4xl font-bold text-light-100 mb-4 leading-tight">
            {current.title}
          </h2>
          <p className="text-base md:text-lg text-light-300 mb-6">
            {current.excerpt}
          </p>
          <Link
            href={current.link}
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
          >
            Leer más
          </Link>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dark-900/50 hover:bg-dark-900/80 text-light-100 transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dark-900/50 hover:bg-dark-900/80 text-light-100 transition-colors"
        aria-label="Slide siguiente"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary scale-125'
                : 'bg-light-100/50 hover:bg-light-100/80'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
