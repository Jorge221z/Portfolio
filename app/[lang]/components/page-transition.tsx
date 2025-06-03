"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Pequeño delay para asegurar que la página se renderice correctamente
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  return (
    <div 
      className={`transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        backgroundColor: isDark ? 'rgb(9 9 11)' : 'rgb(248 250 252)',
      }}
    >
      <div className="dark:bg-zinc-950 bg-slate-50 min-h-screen">
        {children}
      </div>
    </div>
  )
}
