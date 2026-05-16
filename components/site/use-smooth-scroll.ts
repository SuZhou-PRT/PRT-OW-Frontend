"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(max-width: 1024px)").matches) return

    let target = window.scrollY
    let current = target
    let rafId = 0
    let running = false
    const LERP = 0.08
    const MULTIPLIER = 1

    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight)

    const tick = () => {
      const diff = target - current
      if (Math.abs(diff) < 0.4) {
        current = target
        window.scrollTo(0, current)
        running = false
        return
      }
      current += diff * LERP
      window.scrollTo(0, current)
      rafId = requestAnimationFrame(tick)
    }

    const start = () => {
      if (running) return
      running = true
      rafId = requestAnimationFrame(tick)
    }

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return
      e.preventDefault()
      target = Math.max(0, Math.min(maxScroll(), target + e.deltaY * MULTIPLIER))
      start()
    }

    const onScroll = () => {
      if (!running) {
        target = window.scrollY
        current = target
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])
}
