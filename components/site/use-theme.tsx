"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "dark" | "light"
type Ctx = { theme: Theme; toggle: () => void }

const ThemeCtx = createContext<Ctx | null>(null)
const STORAGE_KEY = "prt-theme"

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem(STORAGE_KEY) as Theme | null)) || "dark"
    setTheme(saved)
    document.documentElement.setAttribute("data-theme", saved)
  }, [])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark"
      document.documentElement.setAttribute("data-theme", next)
      try { localStorage.setItem(STORAGE_KEY, next) } catch {}
      return next
    })
  }, [])

  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeCtx)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
