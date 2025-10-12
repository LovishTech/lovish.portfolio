"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  attribute?: string
}

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children, defaultTheme = "dark", attribute = "class" }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      setThemeState(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      document.documentElement.classList.toggle("dark", defaultTheme === "dark")
    }
  }, [defaultTheme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
