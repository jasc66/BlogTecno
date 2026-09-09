'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

// Duración nominal de la barra. Es sólo cosmética: el montaje del hero 3D
// (compilación de shaders, PMREM, geometría de 5 escenas) bloquea el hilo
// principal varios segundos, y un setInterval que suma +3% por tick se queda
// literalmente congelado durante ese bloqueo y no se recupera después, porque
// el propio requestAnimationFrame del motor sigue acaparando el hilo — el
// splash se quedaba pegado en pantalla mucho más allá de que el hero ya
// estuviera listo. Anclar el progreso al reloj real (Date.now) en vez de
// contar ticks hace que, aunque el hilo se congele, en el primer tick que
// logra ejecutarse tras el bloqueo el progreso salte directo al % que le
// toca por tiempo transcurrido, así que nunca se queda atrás esperando.
const DURATION_MS = 1200

export function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const start = Date.now()
    let raf = 0

    const tick = () => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100))
      setProgress(pct)
      if (pct >= 100) {
        setTimeout(() => setIsComplete(true), 300)
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#0a0a0a] transition-all duration-500',
        isComplete ? 'opacity-0 pointer-events-none translate-y-0' : 'opacity-100',
      )}
    >
      <div className="mb-8">
        <Logo />
      </div>

      <div className="text-2xl font-bold mb-8 text-white tracking-tight">
        Tech<span className="text-primary">Insight</span>
      </div>

      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-100 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 font-mono text-sm text-white/60">{progress}%</div>
    </div>
  )
}
