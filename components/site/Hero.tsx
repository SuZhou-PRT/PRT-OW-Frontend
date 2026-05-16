"use client"

import { IconArrowRight } from "@/components/icons"
import { Globe } from "@/components/visuals"
import { useLang } from "./use-lang"

export function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-copy">
          <h1>{t.hero.titleA}<br />{t.hero.titleB}</h1>
          <p className="lede">{t.hero.ledeA}<br />{t.hero.ledeB}</p>
          <button className="btn-primary">
            {t.hero.cta} <IconArrowRight size={14} />
          </button>
        </div>
        <div className="hero-visual">
          <Globe />
        </div>
      </div>
    </section>
  )
}
