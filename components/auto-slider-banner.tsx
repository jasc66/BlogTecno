"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function AutoSliderBanner() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = document.querySelector("video")
    if (video) {
      video.addEventListener("loadeddata", () => setIsVideoLoaded(true))
      video.addEventListener("error", (e) => console.error("Error loading video:", e))
    }
    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => setIsVideoLoaded(true))
        video.removeEventListener("error", (e) => console.error("Error loading video:", e))
      }
    }
  }, [])

  const handleExploreClick = () => {
    const exploreSection = document.getElementById("explore-sections")
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute top-0 left-0 min-w-full min-h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-100 text-center mb-4">
          TechInsight
        </h1>
        <p className="text-xl text-gray-300 text-center mb-8">Tu fuente de información tecnológica</p>
        <Button onClick={handleExploreClick} size="lg" variant="outline">
          Explorar
        </Button>
      </div>
    </div>
  )
}

