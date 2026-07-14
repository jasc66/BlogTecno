import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TechInsight - Blog Informativo',
  description: 'Noticias, boletines y discusiones sobre tecnología y ciencia',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        </div>
        
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(34, 197, 94, 0.15)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary-foreground/80">Innovación y Tecnología</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-white">Tu ventana al</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                futuro tecnológico
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-xl leading-relaxed">
              Noticias, análisis y debates sobre las tecnologías que están transformando nuestro mundo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/noticias"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:gap-4"
              >
                <span>Explorar Noticias</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/foro"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Unirse al Foro</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-sm">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      <section id="destacados" className="w-full py-20 md:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-sm font-medium text-primary mb-2 block">Destacados</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Artículos Recientes</h2>
            </div>
            <Link href="/noticias" className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Ver todos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-52 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
                  <span className="text-xs font-semibold text-blue-700">Tecnología</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">El Futuro de la Inteligencia Artificial</h3>
                <p className="text-muted-foreground text-sm mb-4">Cómo la IA está transformando industrias desde la salud hasta las finanzas.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Dr. Quantum • Hace 2 días</span>
                  <Link href="/noticias" className="text-primary font-medium text-sm hover:underline">Leer →</Link>
                </div>
              </div>
            </article>
            <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-52 bg-gradient-to-br from-green-500 via-green-600 to-green-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
                  <span className="text-xs font-semibold text-green-700">Innovación</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Avances en Computación Cuántica</h3>
                <p className="text-muted-foreground text-sm mb-4">Los últimos hallazgos que prometen revolucionar el procesamiento de datos.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Tech Labs • Hace 5 días</span>
                  <Link href="/noticias" className="text-primary font-medium text-sm hover:underline">Leer →</Link>
                </div>
              </div>
            </article>
            <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-52 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
                  <span className="text-xs font-semibold text-purple-700">Espacio</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Nueva Era de Exploración Espacial</h3>
                <p className="text-muted-foreground text-sm mb-4">Misiones que expanden nuestros límites en el cosmos.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Astro News • Hace 1 semana</span>
                  <Link href="/noticias" className="text-primary font-medium text-sm hover:underline">Leer →</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="explore-sections" className="w-full py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-2 block">Nuestras Secciones</span>
            <h2 className="text-3xl md:text-4xl font-bold">Explora el Contenido</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Noticias</h3>
              <p className="text-muted-foreground mb-4">Mantente informado con las últimas novedades en tecnología y ciencia.</p>
              <Link href="/noticias" className="inline-flex items-center gap-2 text-primary font-medium">
                Explorar <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Boletines</h3>
              <p className="text-muted-foreground mb-4">Recibe análisis profundos directamente en tu correo cada semana.</p>
              <Link href="/boletines" className="inline-flex items-center gap-2 text-primary font-medium">
                Suscribirse <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Foro</h3>
              <p className="text-muted-foreground mb-4">Únete a debates fascinantes con nuestra comunidad de expertos.</p>
              <Link href="/foro" className="inline-flex items-center gap-2 text-primary font-medium">
                Participar <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
