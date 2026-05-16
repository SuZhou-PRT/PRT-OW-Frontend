"use client"

import { IconCar, IconRobot, IconAI } from "@/components/icons"
import {
  ScenarioDriving, ScenarioManufacture, ScenarioAI,
} from "@/components/scenarios-visuals"
import type { ScenarioItem } from "./data"

const SCENARIOS: ScenarioItem[] = [
  { bg: <ScenarioDriving />, icon: <IconCar size={28} />, title: "自动驾驶", desc: "提供高质量的道路场景数据，目标识别与障碍数据等" },
  { bg: <ScenarioManufacture />, icon: <IconRobot size={28} />, title: "具身智能", desc: "基于具身机器人基础架构开展深度定制化研发，适配多场景，完成部署地" },
  { bg: <ScenarioAI />, icon: <IconAI size={28} />, title: "互联网与AI应用", desc: "提供图像、语音、文本等多模态数据，支持AI模型训练" },
]

export function Scenarios() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>典型应用场景</h2>
          <div className="underline" />
        </div>
        <div className="scenarios-row">
          {SCENARIOS.map((s, i) => (
            <div className="scenario-card" key={i}>
              <div className="scenario-bg">{s.bg}</div>
              <div className="scenario-content">
                <div className="ico">{s.icon}</div>
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
