"use client"

import {
  IconIndustry, IconQuality, IconGlobal, IconTech, IconSecure,
} from "@/components/icons"
import { CoreCube } from "@/components/visuals"
import { useLang } from "./use-lang"

const LEFT_ICONS = [
  <IconIndustry size={26} key="industry" />,
  <IconQuality size={26} key="quality" />,
  <IconGlobal size={26} key="global" />,
]
const RIGHT_ICONS = [
  <IconTech size={26} key="tech" />,
  <IconSecure size={26} key="secure" />,
]

export function Advantages() {
  const { t } = useLang()
  return (
    <section className="section advantages">
      <div className="container">
        <div className="section-title">
          <h2>{t.advantages.sectionTitle}</h2>
          <div className="underline" />
        </div>
        <div className="advantages-grid">
          <div className="advantage-list">
            {t.advantages.left.map((a, i) => (
              <div className="advantage-item" key={i}>
                <div className="advantage-icon">{LEFT_ICONS[i]}</div>
                <div className="advantage-text">
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="advantage-center">
            <CoreCube />
          </div>
          <div className="advantage-list right">
            {t.advantages.right.map((a, i) => (
              <div className="advantage-item" key={i}>
                <div className="advantage-icon">{RIGHT_ICONS[i]}</div>
                <div className="advantage-text">
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
