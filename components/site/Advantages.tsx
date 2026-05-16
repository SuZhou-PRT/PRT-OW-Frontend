"use client"

import {
  IconIndustry, IconQuality, IconGlobal, IconTech, IconSecure,
} from "@/components/icons"
import { CoreCube } from "@/components/visuals"

const ADV_LEFT = [
  { icon: <IconIndustry size={26} />, title: "丰富的行业经验", desc: "服务于自动驾驶、智慧城市、智能制造、互联网等多个行业，深刻理解AI数据需求" },
  { icon: <IconQuality size={26} />, title: "高质量数据交付", desc: "严格的质量管理体系，结合多层质检机制，确保数据的高准确率与一致性" },
  { icon: <IconGlobal size={26} />, title: "全球化能力", desc: "全球化采集与交付能力，支持多语言、多地区数据采集与标注" },
]

const ADV_RIGHT = [
  { icon: <IconTech size={26} />, title: "先进的技术能力", desc: "自研数据处理与标注平台，结合AI技术提升生产效率与数据质量" },
  { icon: <IconSecure size={26} />, title: "安全与合规", desc: "完善的数据安全体系与合规流程，保障客户数据安全" },
]

export function Advantages() {
  return (
    <section className="section advantages">
      <div className="container">
        <div className="section-title">
          <h2>核心优势</h2>
          <div className="underline" />
        </div>
        <div className="advantages-grid">
          <div className="advantage-list">
            {ADV_LEFT.map((a, i) => (
              <div className="advantage-item" key={i}>
                <div className="advantage-icon">{a.icon}</div>
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
            {ADV_RIGHT.map((a, i) => (
              <div className="advantage-item" key={i}>
                <div className="advantage-icon">{a.icon}</div>
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
