"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Logo } from "@/components/logo"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-light-100 dark:bg-dark-900 text-dark-900 dark:text-light-100 shadow-md"
          : "bg-light-200 dark:bg-dark-800 text-dark-900 dark:text-light-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-dark-900 dark:text-light-100 hover:text-gray-900 dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium dark:hover:text-gray-50"
                >
                  Inicio
                </Link>
                <Link
                  href="/noticias"
                  className="text-dark-900 dark:text-light-100 hover:text-gray-900 dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium dark:hover:text-gray-50"
                >
                  Noticias
                </Link>
                <Link
                  href="/boletines"
                  className="text-dark-900 dark:text-light-100 hover:text-gray-900 dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium dark:hover:text-gray-50"
                >
                  Boletines
                </Link>
                <Link
                  href="/foro"
                  className="text-dark-900 dark:text-light-100 hover:text-gray-900 dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium dark:hover:text-gray-50"
                >
                  Foro
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-900 dark:text-light-100 hover:text-gray-900 dark:hover:text-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-200 dark:focus:ring-offset-dark-800 focus:ring-white dark:focus:ring-dark-900 dark:hover:text-gray-50"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-light-200 dark:bg-dark-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-dark-900 dark:text-light-100 hover:text-gray-900 dark:hover:text-primary-light block px-3 py-2 rounded-md text-base font-medium dark:hover:text-gray-50"
            >
              Inicio
            </Link>
            <Link
              href="/noticias"
              className="text-dark-900 dark:text-light-100 hover:text-gray-900 dark:hover:text-primary-light block px-3 py-2 rounded-md text-base font-medium dark:hover:text-gray-50"
            >
              Noticias
            </Link>
            <Link
              href="/boletines"
              className="text-dark-900 dark:text-light-100 hover:text-gray-900 dark:hover:text-primary-light block px-3 py-2 rounded-md text-base font-medium dark:hover:text-gray-50"
            >
              Boletines
            </Link>
            <Link
              href="/foro"
              className="text-dark-900 dark:text-light-100 hover:text-gray-900 dark:hover:text-primary-light block px-3 py-2 rounded-md text-base font-medium dark:hover:text-gray-50"
            >
              Foro
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

