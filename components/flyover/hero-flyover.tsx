'use client'

/**
 * Hero 3D scroll-scrubbed de TechInsight.
 *
 * El scroll conduce una cámara real por un "corredor de datos" continuo: no hay
 * vídeo, no hay imágenes generadas — la GPU del visitante renderiza el mundo en
 * vivo desde código, así que el payload es JS y no decenas de MB de .mp4.
 *
 * Motor: paquete npm `scroll-flyover`. Aquí sólo va la configuración del build
 * (paleta, copy, layout) y el ciclo de vida React (mount/dispose).
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

const SCENES = [
  {
    build: buildSignal,
    eyebrow: 'TechInsight',
    title: 'Tu ventana al futuro tecnológico',
    body: 'Noticias, análisis y debates sobre las tecnologías que están transformando nuestro mundo. Desplázate para recorrerlo.',
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

export function HeroFlyover() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

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

    // El loader no puede esperar a un render que quizá nunca se pida (sin WebGL2
    // el motor pinta su fallback y jamás llama a renderer.render). Un frame de
    // margen y se retira: el contenido de debajo nunca queda bloqueado.
    const readyTimer = window.setTimeout(() => setReady(true), 600)

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
      window.clearTimeout(readyTimer)
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
