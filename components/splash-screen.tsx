'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

export function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsComplete(true), 300)
          return 100
        }
        return prev + 3
      })
    }, 15)

    return () => clearInterval(interval)
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
