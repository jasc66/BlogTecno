'use client'

/**
 * Hero 3D scroll-scrubbed de TechInsight.
 *
 * El scroll conduce una cámara real por un "corredor de datos" continuo: no hay
 * vídeo, no hay imágenes generadas — la GPU del visitante renderiza el mundo en
 * vivo desde código, así que el payload es JS y no decenas de MB de .mp4.
 *
 * Motor: paquete npm `scroll-flyover`. Aquí sólo va la configuración del build
 * (paleta, copy, layout), el banner de marca y el ciclo de vida React.
 */
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { mountScrollFlyover } from 'scroll-flyover'
import {
  buildSignal,
  buildNoticias,
  buildInvestigacion,
  buildNucleo,
  buildComunidad,
} from './scenes'

/**
 * Paleta derivada del tema del blog: negro #0a0a0a del hero, verde de marca
 * (--primary: 142 76% 36% => #16a34a) como acento.
 *
 * Ojo: estos hex están afinados para verse como material 3D iluminado, NO
 * validados como color plano de HTML. Cualquier texto del overlay va sobre el
 * scrim del motor, que garantiza contraste independientemente de la escena.
 */
const PALETTE = {
  colors: ['#0a0a0a', '#111827', '#1f2937', '#4ade80', '#16a34a'],
  accent: '#16a34a',
}

/** Semilla fija: el mundo debe renderizarse idéntico en cada recarga. */
const SEED = 20260909

/**
 * Arquetipo corredor (camera-archetypes.md §4): las escenas son cámaras a lo
 * largo de un vuelo hacia adelante, con una curva suave en Z para que el túnel
 * no se lea como un tubo recto. Elegido sobre el island-hop por defecto porque
 * el blog es un recorrido por un ecosistema, no islas separadas — y porque el
 * island-hop es el look reconocible del género.
 *
 * Nota: el corredor exige cameraFeel 'glide'; con 'swoop' el alabeo se lee como
 * si la cámara diera tumbos dentro del tubo.
 */
function layoutCorridor(count: number) {
  const spacing = 26
  const curve = 8
  return Array.from(
    { length: count },
    (_, i) => new THREE.Vector3(i * spacing, 0, Math.sin(i * 0.5) * curve),
  )
}

/**
 * El motor sólo muestra el copy de una escena dentro de su ventana de dwell:
 * con 5 escenas, la primera no aparece hasta t≈0.01 y su centro está en t=0.1.
 * En t=0 — que es justo donde aterriza el visitante — no hay NADA de texto en
 * pantalla, sólo el túnel y el rail de puntos. Por eso el banner de abajo es
 * DOM propio y no una escena más: tiene que estar pintado en el primer frame,
 * antes de que el scroll exista, o el home se lee como un fondo sin identidad.
 */
const SCENES = [
  {
    build: buildSignal,
    // El banner de arriba ya dice "TechInsight / Tu ventana al futuro
    // tecnológico". Esta escena entra justo después, así que repetir ese copy
    // se leería como un salto atrás; en su lugar continúa la frase.
    eyebrow: 'El recorrido',
    title: 'Entra al corredor de datos',
    body: 'Cinco paradas por el ecosistema que cubrimos: la actualidad, las investigaciones a fondo, el boletín semanal y la comunidad que discute todo lo demás.',
    tags: ['Tecnología', 'Ciencia'],
  },
  {
    build: buildNoticias,
    eyebrow: 'Noticias',
    title: 'Lo último, sin ruido',
    body: 'Cobertura diaria de lo que de verdad mueve la industria: IA, chips, energía y el software que sostiene todo lo demás.',
    tags: ['Actualidad', 'Análisis'],
  },
  {
    build: buildInvestigacion,
    eyebrow: 'Investigaciones',
    title: 'Más allá del titular',
    body: 'Reportajes largos y datos verificados sobre computación cuántica, exploración espacial y los límites de la ciencia aplicada.',
    tags: ['Profundidad', 'Datos'],
  },
  {
    build: buildNucleo,
    eyebrow: 'Boletines',
    title: 'El núcleo, cada semana',
    body: 'Un resumen editorial directo a tu correo: lo esencial de la semana, destilado y sin relleno.',
    tags: ['Semanal', 'Suscripción'],
  },
  {
    build: buildComunidad,
    eyebrow: 'Foro',
    title: 'La conversación sigue aquí',
    body: 'Únete a debates con lectores, investigadores y desarrolladores que construyen lo que cubrimos.',
    tags: ['Comunidad'],
    cta: 'Unirse al foro',
  },
]

/**
 * A partir de este scroll (en px) el banner ya se ha desvanecido del todo.
 * Se mide en px y no en fracción del recorrido porque el banner sólo compite
 * con la PRIMERA escena: en cuanto el motor empieza a mostrar su propio panel
 * (t≈0.01 del total, que con 5 escenas son cientos de px) el banner debe haber
 * desaparecido ya, o los dos textos se solapan.
 */
const BANNER_FADE_PX = 420

export function HeroFlyover() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const [bannerOpacity, setBannerOpacity] = useState(1)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handle = mountScrollFlyover(container, {
      palette: PALETTE,
      shapeLanguage: 'geometric',
      cameraFeel: 'glide', // obligatorio en corredor: 'swoop' se lee como tumbos
      performance: 'rich', // el motor degrada solo a 'light' en móvil / puntero grueso
      seed: SEED,
      layout: layoutCorridor,
      scenes: SCENES,
      // Los strings propios del motor son inglés por defecto; el sitio es es-ES.
      labels: {
        goToScene: (index: number, total: number) => `Ir a la escena ${index} de ${total}`,
      },
    })

    // Retirada del loader. El motor no expone un callback de "primer frame", y
    // un temporizador fijo se equivoca en las dos direcciones: en un portátil
    // rápido tapa un hero que ya estaba listo, y en un móvil lento descubre un
    // lienzo todavía negro. La señal real es el <canvas>: existe cuando el
    // motor ya compiló shaders y montó la escena. Dos rAF después de verlo, el
    // primer render ya se ha pintado.
    //
    // El timeout sigue ahí como red de seguridad: sin WebGL2 el motor pinta su
    // tarjeta de fallback y no crea ningún canvas, así que esperar al canvas
    // sin más dejaría el loader encima para siempre.
    let raf1 = 0
    let raf2 = 0
    const reveal = () => {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setReady(true))
      })
    }

    const canvas = container.querySelector('canvas')
    let observer: MutationObserver | null = null
    if (canvas) {
      reveal()
    } else {
      observer = new MutationObserver(() => {
        if (container.querySelector('canvas')) {
          observer?.disconnect()
          reveal()
        }
      })
      observer.observe(container, { childList: true, subtree: true })
    }
    const safetyTimer = window.setTimeout(() => setReady(true), 4000)

    // El banner se desvanece con el scroll para dejarle el sitio al panel del
    // motor. Se lee en rAF y no directamente en el handler porque 'scroll' se
    // dispara muy por encima de la tasa de refresco y cada setState provocaría
    // un render de React de más.
    let scrollRaf = 0
    const onScroll = () => {
      if (scrollRaf) return
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0
        const y = window.scrollY
        setBannerOpacity(y >= BANNER_FADE_PX ? 0 : 1 - y / BANNER_FADE_PX)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // el navegador puede restaurar el scroll a media página al recargar

    // El CTA de la última escena lo escribe el motor en su propio DOM, así que
    // se le engancha la navegación aquí en vez de duplicar el overlay.
    const goToForo = () => {
      window.location.href = '/foro'
    }
    const ctaButtons = Array.from(container.querySelectorAll('button')).filter(
      (b) => b.textContent?.trim() === 'Unirse al foro',
    )
    ctaButtons.forEach((b) => b.addEventListener('click', goToForo))

    return () => {
      window.clearTimeout(safetyTimer)
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      cancelAnimationFrame(scrollRaf)
      observer?.disconnect()
      window.removeEventListener('scroll', onScroll)
      ctaButtons.forEach((b) => b.removeEventListener('click', goToForo))
      handle.dispose()
    }
  }, [])

  return (
    <div className="relative">
      {/* Pantalla de carga: la compilación de shaders y el PMREM tardan un
          instante, y un flash negro se lee como página rota. */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-700 ${
          ready ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
          <span className="text-sm text-white/50">Construyendo el corredor…</span>
        </div>
      </div>

      {/* Banner de marca. Vive FUERA del contenedor del motor a propósito: el
          motor reescribe el DOM que hay dentro de su host y dispose() lo vacía,
          así que cualquier hijo nuestro ahí sería frágil. `fixed` lo alinea con
          el canvas, que también está pineado a la ventana durante todo el hero.

          Es puramente decorativo para la accesibilidad: el <h1> real y el resto
          del copy ya existen como HTML semántico en el bloque SEO del motor y
          en las secciones de debajo, así que anunciarlo otra vez sólo duplicaría
          el título para un lector de pantalla. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
        style={{
          opacity: bannerOpacity,
          // Sin transición: la opacidad ya la conduce el scroll cuadro a cuadro,
          // y una transición encima la haría ir por detrás del dedo.
          visibility: bannerOpacity <= 0.01 ? 'hidden' : 'visible',
        }}
      >
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4ade80]/40 bg-[#0a0a0a]/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#4ade80] backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
          Blog de tecnología y ciencia
        </span>

        <p className="text-[clamp(2.6rem,9vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)]">
          Tech<span className="text-[#4ade80]">Insight</span>
        </p>

        <p className="mt-5 max-w-xl text-[clamp(1rem,2.4vw,1.25rem)] leading-relaxed text-white/75 drop-shadow-[0_1px_12px_rgba(0,0,0,0.9)]">
          Noticias, análisis y debates sobre las tecnologías que están
          transformando nuestro mundo.
        </p>

        {/* pointer-events-auto puntual: el contenedor los desactiva para no
            robarle el scroll al motor, pero estos dos sí deben ser clicables. */}
        <div className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/noticias"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#16a34a] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#15803d]"
          >
            Explorar noticias
          </a>
          <a
            href="#destacados"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/25 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
          >
            Ver destacados
          </a>
        </div>

        <span className="mt-12 flex flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-white/45">
          Desplázate para recorrerlo
          <span className="flex h-9 w-5 justify-center rounded-full border border-white/25 pt-1.5">
            <span className="h-1.5 w-1 animate-bounce rounded-full bg-white/60" />
          </span>
        </span>
      </div>

      <div
        ref={containerRef}
        className="sf-host bg-[#0a0a0a]"
        // Los tokens del motor se apuntan a la identidad del blog: el panel de
        // copy y el rail dejan de ser genéricos y pasan a ser TechInsight.
        style={
          {
            '--sf-overlay-bg': 'rgba(10,10,10,0.72)',
            '--sf-overlay-blur': '10px',
            '--sf-overlay-radius': '16px',
            '--sf-overlay-padding': '1.4em 1.6em',
            '--sf-cta-bg': '#16a34a',
            '--sf-cta-text-color': '#ffffff',
            '--sf-cta-radius': '8px',
            '--sf-tag-border': 'rgba(74,222,128,0.55)',
            '--sf-rail-dot': 'rgba(255,255,255,0.3)',
            '--sf-rail-dot-active': '#4ade80',
            '--sf-title-size': 'clamp(1.6rem, 5.4vw, 2.6rem)',
            '--sf-panel-max-width': '520px',
          } as React.CSSProperties
        }
      />
    </div>
  )
}
