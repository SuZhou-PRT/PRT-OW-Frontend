"use client"

import {
  IconCollect, IconLabel, IconProcess, IconAnalysis, IconSynth, IconPlatform,
} from "@/components/icons"
import { useLang } from "./use-lang"

const ICONS = [
  <IconCollect size={64} key="collect" />,
  <IconLabel size={64} key="label" />,
  <IconProcess size={64} key="process" />,
  <IconAnalysis size={64} key="analysis" />,
  <IconSynth size={64} key="synth" />,
  <IconPlatform size={64} key="platform" />,
]

export function Services() {
  const { t } = useLang()
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>{t.services.sectionTitle}</h2>
          <div className="underline" />
        </div>
        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <div key={i} className="service-card">
              <div className="icon">{ICONS[i]}</div>
              <h3>{s.title}</h3>
              <p>{s.desc.split("\n").map((l, k) => <span key={k}>{l}<br /></span>)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
