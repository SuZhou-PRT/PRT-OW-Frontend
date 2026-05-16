"use client"

import { IconArrowRight } from "@/components/icons"
import { Globe } from "@/components/visuals"

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-copy">
          <h1>AI驱动数据价值<br />赋能智能未来</h1>
          <p className="lede">珀瑞缇PRT，一家专注于高质量数据采集、处理与标注的<br />人工智能数据公司</p>
          <button className="btn-primary">
            探索数据服务 <IconArrowRight size={14} />
          </button>
        </div>
        <div className="hero-visual">
          <Globe />
        </div>
      </div>
    </section>
  )
}
