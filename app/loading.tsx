import { Skeleton } from '@/components/skeleton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cargando... | TechInsight',
}

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="text-muted-foreground">Cargando contenido...</p>
      </div>
    </div>
  )
}