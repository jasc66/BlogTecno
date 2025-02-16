"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsComplete(true), 500) // Delay before hiding splash screen
          return 100
        }
        return prev + 2
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark-900 transition-opacity duration-500",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      <div className="relative w-48 h-48 mb-8">
        <Image src="/logo.svg" alt="TechInsight Logo" fill className="object-contain" priority />
      </div>

      <div className="text-2xl font-bold mb-4 text-white">TechInsight</div>

      <div className="w-64 h-1 bg-dark-400 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-2 font-mono text-sm text-white">{`${progress}%`}</div>
    </div>
  )
}

