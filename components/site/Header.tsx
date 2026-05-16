"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import PRTLOGO from "@/public/PRT_logo.svg"
import { IconChevron } from "@/components/icons"
import { NAV } from "./data"
import { LangSelector } from "./LangSelector"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  const [expandedNav, setExpandedNav] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setExpandedNav(title)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setExpandedNav(null), 150)
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
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav-item">
                {n.title}
                {n.items.length > 0 && <span className="nav-chevron"><IconChevron size={12} /></span>}
              </button>
              {n.items.length > 0 && expandedNav === n.title && (
                <div className="nav-dropdown">
                  {n.items.map((item) => (
                    <a key={item} href="#" onClick={(e) => e.preventDefault()}>{item}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="header-actions">
            <ThemeToggle />
            <LangSelector />
          </div>
        </nav>
      </div>
    </header>
  )
}
