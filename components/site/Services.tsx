"use client"

import {
  IconCollect, IconLabel, IconProcess, IconAnalysis, IconSynth, IconPlatform,
} from "@/components/icons"
import type { CardItem } from "./data"

const SERVICES: CardItem[] = [
  { icon: <IconCollect size={64} />, title: "数据采集", desc: "全渠道数据采集方案\n覆盖全球多种场景" },
  { icon: <IconLabel size={64} />, title: "数据标注", desc: "高质量数据标注服务\n支持多种数据类型" },
  { icon: <IconProcess size={64} />, title: "数据处理", desc: "数据清洗、脱敏、结构化\n提升数据可用性" },
  { icon: <IconAnalysis size={64} />, title: "数据分析", desc: "数据分析与挖掘\n洞察数据价值" },
  { icon: <IconSynth size={64} />, title: "数据合成", desc: "基于算法的数据合成\n扩充数据多样性" },
  { icon: <IconPlatform size={64} />, title: "数据平台", desc: "智能化数据管理平台\n提升作业效率" },
]

export function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>数据业务范围</h2>
          <div className="underline" />
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc.split("\n").map((l, k) => <span key={k}>{l}<br /></span>)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
