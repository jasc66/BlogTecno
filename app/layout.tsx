import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { SplashScreen } from "@/components/splash-screen"
import { CustomCursor } from "@/components/custom-cursor"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"
import { ClientLayoutWrapper } from "@/components/client-layout-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechInsight - Blog Informativo",
  description: "Noticias, boletines y discusiones sobre tecnología ciencia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.className} bg-light-100 text-dark-900 dark:bg-dark-900 dark:text-light-100 flex flex-col min-h-screen transition-colors duration-300`}
      >
        <SplashScreen />
        <ClientLayoutWrapper>
          <ThemeToggle />
          <main className="flex-grow">{children}</main>
        </ClientLayoutWrapper>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  )
}

