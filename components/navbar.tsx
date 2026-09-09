'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/boletines', label: 'Boletines' },
    { href: '/foro', label: 'Foro' },
    { href: '/investigaciones', label: 'Investigaciones' },
  ]

  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background h-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <Link href="/" aria-label="Ir al inicio — TechInsight" className="flex-shrink-0">
            <Logo />
          </Link>
        </div>
      </nav>
    )
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50'
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" aria-label="Ir al inicio — TechInsight" className="flex-shrink-0 relative z-50">
              <Logo />
            </Link>
            
      <div className="flex items-center space-x-1">
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <ThemeToggle />

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden relative z-50 p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-background border-l border-border z-40 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 pb-6">
                <div className="px-6 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-auto px-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    TechInsight © 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}