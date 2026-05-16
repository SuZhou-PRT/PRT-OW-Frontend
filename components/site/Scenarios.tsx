"use client"

import { IconCar, IconRobot, IconAI } from "@/components/icons"
import {
  ScenarioDriving, ScenarioManufacture, ScenarioAI,
} from "@/components/scenarios-visuals"
import { useLang } from "./use-lang"

const BG = [<ScenarioDriving key="d" />, <ScenarioManufacture key="m" />, <ScenarioAI key="a" />]
const ICONS = [
  <IconCar size={28} key="car" />,
  <IconRobot size={28} key="robot" />,
  <IconAI size={28} key="ai" />,
]

export function Scenarios() {
  const { t } = useLang()
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>{t.scenarios.sectionTitle}</h2>
          <div className="underline" />
        </div>
        <div className="scenarios-row">
          {t.scenarios.items.map((s, i) => (
            <div className="scenario-card" key={i}>
              <div className="scenario-bg">{BG[i]}</div>
              <div className="scenario-content">
                <div className="ico">{ICONS[i]}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
