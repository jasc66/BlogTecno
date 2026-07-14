import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'
import { SplashScreen } from '@/components/splash-screen'
import { CustomCursor } from '@/components/custom-cursor'
import { ThemeToggle } from '@/components/theme-toggle'
import { Footer } from '@/components/footer'
import { ClientLayoutWrapper } from '@/components/client-layout-wrapper'

import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechInsight - Blog Informativo',
  description: 'Noticias, boletines y discusiones sobre tecnología y ciencia',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground flex flex-col min-h-screen transition-colors duration-300`}
      >
        <Providers>
          <SplashScreen />
          <ClientLayoutWrapper>
            <main className="flex-grow">{children}</main>
          </ClientLayoutWrapper>
          <Footer />
        </Providers>
        <CustomCursor />
      </body>
    </html>
  )
}
