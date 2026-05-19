"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import PRTLOGO from "@/public/PRT_logo.svg"
import { IconChevron, IconMenu, IconClose } from "@/components/icons"
import { useLang } from "./use-lang"
import { LangSelector } from "./LangSelector"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  const { t } = useLang()
  const [expandedNav, setExpandedNav] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
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

  useEffect(() => {
    if (drawerOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => { document.body.style.overflow = prev }
    }
  }, [drawerOpen])

  const closeDrawer = () => {
    setDrawerOpen(false)
    setMobileExpanded(null)
  }

  return (
    <header className="header">
      <div className="container">
        <a className="brand" href="#">
          <Image src={PRTLOGO} alt="PRT" width={120} height={42} priority />
          <span className="brand-sub">{t.brandSub}</span>
        </a>
        <nav className="nav">
          {t.nav.map((n) => (
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

        <button
          className="mobile-menu-toggle"
          aria-label="Menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          {drawerOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {drawerOpen && (
        <>
          <div className="mobile-drawer-backdrop" onClick={closeDrawer} />
          <aside className="mobile-drawer" role="dialog" aria-modal="true">
            <div className="mobile-drawer-actions">
              <ThemeToggle />
              <LangSelector />
            </div>
            <ul className="mobile-nav">
              {t.nav.map((n) => {
                const hasChildren = n.items.length > 0
                const expanded = mobileExpanded === n.title
                return (
                  <li key={n.title} className="mobile-nav-item">
                    <button
                      className="mobile-nav-title"
                      onClick={() => {
                        if (hasChildren) setMobileExpanded(expanded ? null : n.title)
                        else closeDrawer()
                      }}
                      aria-expanded={hasChildren ? expanded : undefined}
                    >
                      <span>{n.title}</span>
                      {hasChildren && (
                        <span className={`mobile-nav-chevron${expanded ? " open" : ""}`}>
                          <IconChevron size={14} />
                        </span>
                      )}
                    </button>
                    {hasChildren && expanded && (
                      <div className="mobile-nav-sub">
                        {n.items.map((item) => (
                          <a key={item} href="#" onClick={(e) => { e.preventDefault(); closeDrawer() }}>
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </aside>
        </>
      )}
    </header>
  )
}
