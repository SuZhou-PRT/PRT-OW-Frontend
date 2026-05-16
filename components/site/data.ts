import type { ReactNode } from "react"

export type NavSection = { title: string; items: string[] }
export type CardItem = { icon: ReactNode; title: string; desc: string }
export type ScenarioItem = { bg: ReactNode; icon: ReactNode; title: string; desc: string }

export const NAV: NavSection[] = [
  { title: "数据产品", items: ["大模型数据集", "真实物理世界数据集", "真机数据"] },
  { title: "解决方案", items: ["定制化数据生产", "Agent部署", "具身设备二次开发"] },
  { title: "测评研究", items: ["大模型能力测评"] },
  { title: "资源能力", items: ["大模型专家资源", "标注基地资源", "具身工程师资源"] },
  { title: "联系我们", items: [] },
]

export const PARTNER_LOGOS: string[] = [
  ...Array.from({ length: 6 }, (_, i) => `/sanfnag_logos/autonomous_driving/${i}.png`),
  ...Array.from({ length: 5 }, (_, i) => `/sanfnag_logos/embodied_intelligence/${i}.png`),
  ...Array.from({ length: 7 }, (_, i) => `/sanfnag_logos/large_models/${i}.png`),
]
