import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="relative mx-auto w-32 h-32">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
          <div className="relative flex items-center justify-center w-full h-full">
            <span className="text-6xl md:text-8xl font-bold text-primary/40">404</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold text-foreground">
            Página no encontrada
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              Volver al inicio
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/noticias">
              Ver noticias
            </Link>
          </Button>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            ¿Buscas algo específico? Prueba con la barra de búsqueda.
          </p>
        </div>
      </div>
    </div>
  )
}