"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import {
  IconCollect, IconLabel, IconProcess, IconAnalysis, IconSynth, IconPlatform,
  IconIndustry, IconQuality, IconGlobal, IconTech, IconSecure,
  IconCar, IconCity, IconRobot, IconAI, IconHealth,
  IconArrowRight, IconChevron, IconUp,
} from "@/components/icons"
import { Globe, CoreCube } from "@/components/visuals"

import {
  ScenarioDriving, ScenarioCity, ScenarioManufacture, ScenarioAI, ScenarioHealth,
} from "@/components/scenarios-visuals"

import PRTLOGO from "@/public/PRT_logo.svg"

const NAV = [
  {
    title: "数据产品",
    items: ["大模型数据集", "真实物理世界数据集", "真机数据"]
  },
  {
    title: "解决方案",
    items: ["定制化数据生产", "Agent部署", "具身设备二次开发"]
  },
  {
    title: "测评研究",
    items: ["大模型能力测评"]
  },
  {
    title: "资源能力",
    items: ["大模型专家资源", "标注基地资源", "具身工程师资源"]
  },
  {
    title: "联系我们",
    items: []
  },
]

const SERVICES = [
  { icon: <IconCollect size={64} />, title: "数据采集", desc: "全渠道数据采集方案\n覆盖全球多种场景" },
  { icon: <IconLabel size={64} />, title: "数据标注", desc: "高质量数据标注服务\n支持多种数据类型" },
  { icon: <IconProcess size={64} />, title: "数据处理", desc: "数据清洗、脱敏、结构化\n提升数据可用性" },
  { icon: <IconAnalysis size={64} />, title: "数据分析", desc: "数据分析与挖掘\n洞察数据价值" },
  { icon: <IconSynth size={64} />, title: "数据合成", desc: "基于算法的数据合成\n扩充数据多样性" },
  { icon: <IconPlatform size={64} />, title: "数据平台", desc: "智能化数据管理平台\n提升作业效率" },
]

const ADV_LEFT = [
  { icon: <IconIndustry size={26} />, title: "丰富的行业经验", desc: "服务于自动驾驶、智慧城市、智能制造、互联网等多个行业，深刻理解AI数据需求" },
  { icon: <IconQuality size={26} />, title: "高质量数据交付", desc: "严格的质量管理体系，结合多层质检机制，确保数据的高准确率与一致性" },
  { icon: <IconGlobal size={26} />, title: "全球化能力", desc: "全球化采集与交付能力，支持多语言、多地区数据采集与标注" },
]

const ADV_RIGHT = [
  { icon: <IconTech size={26} />, title: "先进的技术能力", desc: "自研数据处理与标注平台，结合AI技术提升生产效率与数据质量" },
  { icon: <IconSecure size={26} />, title: "安全与合规", desc: "完善的数据安全体系与合规流程，保障客户数据安全" },
]

const SCENARIOS = [
  { bg: <ScenarioDriving />, icon: <IconCar size={28} />, title: "自动驾驶", desc: "提供高质量的道路场景数据，目标识别与障碍数据等" },
  { bg: <ScenarioManufacture />, icon: <IconRobot size={28} />, title: "具身智能", desc: "基于具身机器人基础架构开展深度定制化研发，适配多场景，完成部署地" },
  { bg: <ScenarioAI />, icon: <IconAI size={28} />, title: "互联网与AI应用", desc: "提供图像、语音、文本等多模态数据，支持AI模型训练" },
]

const PARTNER_LOGOS: string[] = [
  ...Array.from({ length: 6 }, (_, i) => `/sanfnag_logos/autonomous_driving/${i}.png`),
  ...Array.from({ length: 5 }, (_, i) => `/sanfnag_logos/embodied_intelligence/${i}.png`),
  ...Array.from({ length: 7 }, (_, i) => `/sanfnag_logos/large_models/${i}.png`),
]

function Header() {
  const [expandedNav, setExpandedNav] = useState<string | null>(null)
  const [language, setLanguage] = useState<"zh" | "en">("zh")
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setExpandedNav(title)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setExpandedNav(null)
    }, 150)
  }

  const handleLangClick = () => {
    setLangMenuOpen(!langMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <a className="brand" href="#">
          <Image src={PRTLOGO} alt="PRT" width={120} height={42} priority />
          <span className="brand-sub">苏州珀瑞缇信息科技有限公司</span>
        </a>
        <nav className="nav">
          {NAV.map((n) => (
            <div
              key={n.title}
              className="nav-item-wrapper"
              onMouseEnter={() => handleMouseEnter(n.title)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <button className="nav-item">
                {n.title}
                {n.items.length > 0 && <span className="nav-chevron"><IconChevron size={12} /></span>}
              </button>
              {n.items.length > 0 && expandedNav === n.title && (
                <div className="nav-dropdown">
                  {n.items.map((item) => (
                    <a key={item} href="#" onClick={(e) => e.preventDefault()}>
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="lang-selector">
            <button className="lang-button" onClick={handleLangClick}>
              <svg viewBox="0 0 1024 1024" width="18" height="18" fill="currentColor">
                <path d="M512 0c282.773333 0 512 229.226667 512 512S794.773333 1024 512 1024 0 794.773333 0 512 229.226667 0 512 0z m169.749333 554.666667H342.250667c9.429333 217.792 89.813333 384 169.749333 384 79.914667 0 160.32-166.208 169.749333-384z m-424.917333 0l-169.386667 0.021333c15.658667 157.568 117.034667 289.92 256.853334 349.76-50.282667-85.738667-82.069333-210.346667-87.466667-349.76z m679.722667 0.021333h-169.386667c-5.397333 139.434667-37.184 264.021333-87.466667 349.738667 139.818667-59.797333 241.194667-192.170667 256.853334-349.738667zM344.32 119.573333l-4.736 2.048C202.176 182.378667 102.912 313.536 87.466667 469.333333h169.386666c5.397333-139.434667 37.184-264.042667 87.466667-349.76zM512 85.333333l-3.2 0.085334c-78.848 4.352-157.226667 169.045333-166.549333 383.914666h339.498666C672.32 251.562667 591.936 85.333333 512 85.333333z m167.701333 34.218667l3.136 5.44C731.306667 210.496 761.877333 332.8 767.146667 469.333333h169.386666c-15.637333-157.589333-117.034667-289.941333-256.853333-349.781333z" />
              </svg>
            </button>
            {langMenuOpen && (
              <div className="lang-dropdown">
                <button
                  onClick={() => {
                    setLanguage("zh")
                    setLangMenuOpen(false)
                  }}
                  className={language === "zh" ? "active" : ""}
                >
                  简体中文
                </button>
                <button
                  onClick={() => {
                    setLanguage("en")
                    setLangMenuOpen(false)
                  }}
                  className={language === "en" ? "active" : ""}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
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

      <div className="container">
        <div className="stats">
          {[
            { num: "1000+", label: "全球专业数据团队" },
            { num: "5000万+", label: "累计数据采集量" },
            { num: "98.5%", label: "数据准确率" },
            { num: "200+", label: "服务客户数量" },
          ].map((s, i) => (
            <div className="stat" key={i}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
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
              <a className="more" href="#">了解更多 <IconArrowRight size={10} /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Advantages() {
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

function Scenarios() {
  const [page, setPage] = useState(0)
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

function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <div className="section-title">
          <h2>合作伙伴</h2>
          <div className="underline" />
        </div>
        <div className="partners-marquee">
          <div className="partners-track-anim">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
              <div className="partner" key={i}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#">
              <Image src={PRTLOGO} alt="PRT" width={120} height={42} />
              <span className="brand-sub">苏州珀瑞缇信息科技有限公司</span>
            </a>
            <p>珀瑞缇PRT，专注于高质量数据的采集、处理与标注，致力为全球客户提供专业、可靠、安全的AI数据服务，加速智能时代的到来。</p>
            <div className="socials">
              <a className="s" href="#"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 4.5C5.5 4.5 2.7 7.2 2.7 10.7c0 1.8.8 3.4 2 4.6L4 18l2.9-1.4c.7.2 1.5.3 2.3.3 3.5 0 6.3-2.7 6.3-6 0-3.4-2.9-6.4-6.5-6.4Zm-2.3 5.7c0-.5.4-.9.9-.9s.9.4.9.9-.4.9-.9.9-.9-.4-.9-.9Zm4.8 0c0-.5.4-.9.9-.9s.9.4.9.9-.4.9-.9.9-.9-.4-.9-.9Z" /><path d="M16.5 9.5c-.2 0-.4 0-.6.1.4 1 .6 2 .6 3 0 3.5-3 6.4-6.7 6.7.7 2.7 3.3 4.7 6.4 4.7.7 0 1.4-.1 2-.3l2.5 1.2-.6-2.3c1.1-1 1.8-2.4 1.8-3.9 0-3.3-2.5-6-5.4-6.2Z" /></svg></a>
              <a className="s" href="#"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M8 12 L11 15 L16 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              <a className="s" href="#"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><rect x="3" y="6" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M3 8 L12 14 L21 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></a>
            </div>
          </div>
          <div>
            <h5>数据服务</h5>
            <ul>
              <li><a href="#">数据采集</a></li>
              <li><a href="#">数据标注</a></li>
              <li><a href="#">数据处理</a></li>
              <li><a href="#">数据分析</a></li>
              <li><a href="#">数据合成</a></li>
              <li><a href="#">数据平台</a></li>
            </ul>
          </div>
          <div>
            <h5>解决方案</h5>
            <ul>
              <li><a href="#">自动驾驶</a></li>
              <li><a href="#">具身智能</a></li>
              <li><a href="#">互联网与AI应用</a></li>
            </ul>
          </div>
          <div>
            <h5>关于我们</h5>
            <ul>
              <li><a href="#">公司介绍</a></li>
              <li><a href="#">核心优势</a></li>
              <li><a href="#">新闻资讯</a></li>
              <li><a href="#">联系我们</a></li>
            </ul>
          </div>
          <div>
            <h5>联系我们</h5>
            <div className="contact-item"><strong>电话:</strong>+86 21-5888 XXXX</div>
            <div className="contact-item"><strong>邮箱:</strong>info@prtdata.com</div>
            <div className="contact-item"><strong>地址:</strong>上海市浦东新区张江高科 XX路XXX号 (示例)</div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2024 珀瑞缇PRT 人工智能数据公司. 保留所有权利.</div>
          <div className="links">
            <a href="#">隐私政策</a>
            <a href="#">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(max-width: 1024px)").matches) return // 触摸设备保留原生

    let target = window.scrollY
    let current = target
    let rafId = 0
    let running = false
    const LERP = 0.08          // 越小越绵长（缓冲越久）
    const MULTIPLIER = 1       // wheel delta 放大倍数，1 = 原始速度

    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight)

    const tick = () => {
      const diff = target - current
      if (Math.abs(diff) < 0.4) {
        current = target
        window.scrollTo(0, current)
        running = false
        return
      }
      current += diff * LERP
      window.scrollTo(0, current)
      rafId = requestAnimationFrame(tick)
    }

    const start = () => {
      if (running) return
      running = true
      rafId = requestAnimationFrame(tick)
    }

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return // 让缩放手势走原生
      e.preventDefault()
      target = Math.max(0, Math.min(maxScroll(), target + e.deltaY * MULTIPLIER))
      start()
    }

    // 用户手动用键盘/锚点/JS 滚动时，同步 target，避免动画把页面拉回去
    const onScroll = () => {
      if (!running) {
        target = window.scrollY
        current = target
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])
}

export default function Site() {
  const [showTop, setShowTop] = useState(false)
  useSmoothScroll()
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <Scenarios />
      <Footer />
      {showTop && (
        <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <IconUp />
        </button>
      )}
    </>
  )
}
