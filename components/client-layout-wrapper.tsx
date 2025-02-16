"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { Navbar } from "@/components/navbar"

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <>
      {isHomePage ? (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <Logo />
        </div>
      ) : (
        <Navbar />
      )}
      {children}
    </>
  )
}

