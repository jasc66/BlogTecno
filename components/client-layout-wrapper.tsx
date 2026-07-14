'use client'

import type React from 'react'
import { Navbar } from '@/components/navbar'

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
