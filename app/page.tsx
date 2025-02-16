import { AutoSliderBanner } from "@/components/auto-slider-banner"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Full-screen Auto-sliding Banner */}
      <AutoSliderBanner />

      {/* Sections Links */}
      <section id="explore-sections" className="w-full py-12 md:py-24 dark:bg-black bg-gray-400">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-dark-900 dark:text-gray-100">
            Explora Nuestras Secciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-700 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Noticias"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Noticias</h3>
                <p className="text-gray-900 dark:text-white mb-4">
                  Mantente al día con las últimas novedades en tecnología y ciencia.
                </p>
                <Button asChild className="w-full">
                  <Link href="/noticias">Ver Noticias</Link>
                </Button>
              </div>
            </div>
            <div className="bg-dark-700 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                alt="Boletines"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Boletines</h3>
                <p className="text-gray-900 dark:text-white  mb-4">
                  Suscríbete a nuestros boletines para recibir análisis en profundidad.
                </p>
                <Button asChild className="w-full">
                  <Link href="/boletines">Ver Boletines</Link>
                </Button>
              </div>
            </div>
            <div className="bg-dark-700 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Foro"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Foro</h3>
                <p className="text-gray-900 dark:text-white mb-4">
                  Únete a las discusiones y comparte tus ideas con nuestra comunidad.
                </p>
                <Button asChild className="w-full">
                  <Link href="/foro">Ir al Foro</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

