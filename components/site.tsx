"use client"

import { useEffect, useState } from "react"
import { IconUp } from "@/components/icons"
import { ThemeProvider } from "./site/use-theme"
import { LangProvider } from "./site/use-lang"
import { useSmoothScroll } from "./site/use-smooth-scroll"
import { Header } from "./site/Header"
import { Hero } from "./site/Hero"
import { Services } from "./site/Services"
import { Advantages } from "./site/Advantages"
import { Scenarios } from "./site/Scenarios"
import { Footer } from "./site/Footer"

function ScrollTopButton() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  if (!show) return null
  return (
    <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <IconUp />
    </button>
  )
}

export default function Site() {
  useSmoothScroll()
  return (
    <ThemeProvider>
      <LangProvider>
        <Header />
        <Hero />
        <Services />
        <Advantages />
        <Scenarios />
        <Footer />
        <ScrollTopButton />
      </LangProvider>
    </ThemeProvider>
  )
}
