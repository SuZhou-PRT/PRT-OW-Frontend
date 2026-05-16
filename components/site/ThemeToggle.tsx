"use client"

import { useTheme } from "./use-theme"
import { useLang } from "./use-lang"

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useLang()
  const isLight = theme === "light"
  const label = isLight ? t.themeToggle.toDark : t.themeToggle.toLight
  return (
    <button className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      {isLight ? (
        <svg viewBox="0 0 1024 1024" width="18" height="18" fill="currentColor" aria-hidden>
          <path d="M439 224a289 289 0 0 0-89 39c-28 18-51 40-71 65a288 288 0 0 0-46 85 290 290 0 0 0-17 99 290 290 0 0 0 23 115 295 295 0 0 0 63 95 295 295 0 0 0 95 63 290 290 0 0 0 115 23c34 0 67-6 99-17 32-11 60-27 85-47 25-20 46-43 64-71a290 290 0 0 0 40-89c-8 1-18 1-28 1-45 0-88-9-129-26a290 290 0 0 1-107-72 290 290 0 0 1-71-107 290 290 0 0 1-26-129c0-10 0-19 1-28z" />
        </svg>
      ) : (
        <svg viewBox="0 0 1024 1024" width="18" height="18" fill="currentColor" aria-hidden>
          <path d="M512 326a186 186 0 1 0 0 372 186 186 0 0 0 0-372zM512 141a31 31 0 0 1 31 31v62a31 31 0 0 1-62 0v-62a31 31 0 0 1 31-31zm0 618a31 31 0 0 1 31 31v62a31 31 0 0 1-62 0v-62a31 31 0 0 1 31-31zM172 481h62a31 31 0 0 1 0 62h-62a31 31 0 0 1 0-62zm618 0h62a31 31 0 0 1 0 62h-62a31 31 0 0 1 0-62zM251 251a31 31 0 0 1 44 0l43 43a31 31 0 0 1-44 44l-43-43a31 31 0 0 1 0-44zm437 437a31 31 0 0 1 44 0l43 43a31 31 0 0 1-44 44l-43-43a31 31 0 0 1 0-44zM251 773a31 31 0 0 1 0-44l43-43a31 31 0 0 1 44 44l-43 43a31 31 0 0 1-44 0zm437-437a31 31 0 0 1 0-44l43-43a31 31 0 0 1 44 44l-43 43a31 31 0 0 1-44 0z" />
        </svg>
      )}
    </button>
  )
}
