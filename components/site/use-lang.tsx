"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"
import { DICT, type DictShape, type Lang } from "./dict"

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: DictShape }

const LangCtx = createContext<Ctx | null>(null)
const STORAGE_KEY = "prt-lang"

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh")

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem(STORAGE_KEY) as Lang | null)) || "zh"
    setLangState(saved)
    document.documentElement.setAttribute("lang", saved === "zh" ? "zh-CN" : "en")
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    document.documentElement.setAttribute("lang", l === "zh" ? "zh-CN" : "en")
    try { localStorage.setItem(STORAGE_KEY, l) } catch {}
  }, [])

  return <LangCtx.Provider value={{ lang, setLang, t: DICT[lang] }}>{children}</LangCtx.Provider>
}

export function useLang() {
  const ctx = useContext(LangCtx)
  if (!ctx) throw new Error("useLang must be used within LangProvider")
  return ctx
}
