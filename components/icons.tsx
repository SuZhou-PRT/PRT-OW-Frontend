import type { ReactNode } from "react"

type IconProps = { size?: number }

const IconWrap = ({ children, size = 32 }: { children: ReactNode; size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

export const IconCollect = (p: IconProps) => (
  <IconWrap {...p}>
    <ellipse cx="16" cy="8" rx="9" ry="3" />
    <path d="M7 8v8c0 1.7 4 3 9 3s9-1.3 9-3V8" />
    <path d="M7 16v8c0 1.7 4 3 9 3s9-1.3 9-3v-8" />
  </IconWrap>
)
export const IconLabel = (p: IconProps) => (
  <IconWrap {...p}>
    <path d="M16 4 L26 9 L26 21 L16 26 L6 21 L6 9 Z" />
    <path d="M16 4 L16 16 M6 9 L16 16 L26 9" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
  </IconWrap>
)
export const IconProcess = (p: IconProps) => (
  <IconWrap {...p}>
    <circle cx="16" cy="16" r="3" />
    <path d="M16 6 V9 M16 23 V26 M6 16 H9 M23 16 H26 M9 9 L11 11 M21 21 L23 23 M9 23 L11 21 M21 11 L23 9" />
    <circle cx="16" cy="16" r="9" strokeDasharray="2 2" />
  </IconWrap>
)
export const IconAnalysis = (p: IconProps) => (
  <IconWrap {...p}>
    <path d="M5 26 H27" />
    <path d="M8 22 L13 16 L17 19 L24 10" />
    <circle cx="8" cy="22" r="1.2" fill="currentColor" />
    <circle cx="13" cy="16" r="1.2" fill="currentColor" />
    <circle cx="17" cy="19" r="1.2" fill="currentColor" />
    <circle cx="24" cy="10" r="1.2" fill="currentColor" />
    <path d="M24 10 L27 10 L24 7 Z" fill="currentColor" stroke="none" />
  </IconWrap>
)
export const IconSynth = (p: IconProps) => (
  <IconWrap {...p}>
    <rect x="5" y="5" width="22" height="22" rx="3" />
    <path d="M11 16 L14 19 L21 12" />
    <path d="M5 11 H27 M11 5 V27" opacity="0.4" />
  </IconWrap>
)
export const IconPlatform = (p: IconProps) => (
  <IconWrap {...p}>
    <path d="M16 4 L27 10 L16 16 L5 10 Z" />
    <path d="M5 16 L16 22 L27 16" />
    <path d="M5 22 L16 28 L27 22" />
  </IconWrap>
)

export const IconIndustry = (p: IconProps) => (
  <IconWrap {...p}>
    <rect x="5" y="13" width="22" height="14" rx="1" />
    <path d="M5 13 L11 6 L11 13" />
    <path d="M11 13 L17 6 L17 13" />
    <path d="M17 13 L23 6 L23 13" />
    <path d="M10 22 H14 M18 22 H22" />
  </IconWrap>
)
export const IconQuality = (p: IconProps) => (
  <IconWrap {...p}>
    <path d="M16 4 L26 9 V17 C26 22 21 26 16 28 C11 26 6 22 6 17 V9 Z" />
    <path d="M11 16 L15 20 L22 12" />
  </IconWrap>
)
export const IconGlobal = (p: IconProps) => (
  <IconWrap {...p}>
    <circle cx="16" cy="16" r="11" />
    <path d="M5 16 H27" />
    <path d="M16 5 C20 9 20 23 16 27 C12 23 12 9 16 5 Z" />
  </IconWrap>
)
export const IconTech = (p: IconProps) => (
  <IconWrap {...p}>
    <rect x="9" y="9" width="14" height="14" rx="1.5" />
    <path d="M13 13 H19 M13 16 H17 M13 19 H19" />
    <path d="M9 12 H6 M9 16 H6 M9 20 H6 M23 12 H26 M23 16 H26 M23 20 H26" />
    <path d="M12 9 V6 M16 9 V6 M20 9 V6 M12 23 V26 M16 23 V26 M20 23 V26" />
  </IconWrap>
)
export const IconSecure = (p: IconProps) => (
  <IconWrap {...p}>
    <path d="M16 4 L25 8 V16 C25 21 21 26 16 28 C11 26 7 21 7 16 V8 Z" />
    <rect x="12" y="14" width="8" height="7" rx="1" />
    <path d="M13.5 14 V12 C13.5 10.5 14.5 9 16 9 C17.5 9 18.5 10.5 18.5 12 V14" />
  </IconWrap>
)

export const IconCar = (p: IconProps) => (
  <IconWrap {...p}>
    <path d="M6 18 L8 12 H24 L26 18 V23 H6 Z" />
    <circle cx="11" cy="23" r="2" />
    <circle cx="21" cy="23" r="2" />
    <path d="M10 18 H22" />
  </IconWrap>
)
export const IconCity = (p: IconProps) => (
  <IconWrap {...p}>
    <rect x="6" y="14" width="6" height="13" />
    <rect x="13" y="8" width="6" height="19" />
    <rect x="20" y="11" width="6" height="16" />
    <path d="M8 18 H10 M8 22 H10 M15 12 H17 M15 16 H17 M15 20 H17 M22 15 H24 M22 19 H24 M22 23 H24" />
  </IconWrap>
)
export const IconRobot = (p: IconProps) => (
  <IconWrap {...p}>
    <rect x="9" y="11" width="14" height="13" rx="2" />
    <circle cx="13" cy="16" r="1.2" fill="currentColor" />
    <circle cx="19" cy="16" r="1.2" fill="currentColor" />
    <path d="M13 20 H19" />
    <path d="M16 11 V7 M16 7 L13 5 M16 7 L19 5" />
    <path d="M9 15 H6 M23 15 H26" />
  </IconWrap>
)
export const IconAI = (p: IconProps) => (
  <IconWrap {...p}>
    <circle cx="16" cy="16" r="10" />
    <path d="M11 13 L11 19 M11 13 L13 13 C14 13 14.5 13.5 14.5 14.5 C14.5 15.5 14 16 13 16 H11" />
    <path d="M17 13 V19 M19 13 V19 M17 13 H19 M17 19 H19 M17 16 H19" />
  </IconWrap>
)
export const IconHealth = (p: IconProps) => (
  <IconWrap {...p}>
    <path d="M5 16 H10 L12 12 L14 20 L16 14 L18 18 L20 16 H27" />
    <path d="M16 26 C10 22 5 18 5 13 C5 9 8 7 11 7 C13 7 14.5 8 16 10 C17.5 8 19 7 21 7 C24 7 27 9 27 13" opacity="0.5" />
  </IconWrap>
)

export const IconArrowRight = ({ size = 12 }: IconProps) => (
  <svg viewBox="0 0 12 12" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6 H10 M6 2 L10 6 L6 10" />
  </svg>
)
export const IconChevron = ({ size = 14, dir = "right" }: { size?: number; dir?: "left" | "right" }) => (
  <svg viewBox="0 0 14 14" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dir === "left" ? "rotate(180deg)" : "none" }}>
    <path d="M5 3 L9 7 L5 11" />
  </svg>
)
export const IconMenu = ({ size = 22 }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
  </svg>
)
export const IconClose = ({ size = 22 }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6 L18 18 M18 6 L6 18" />
  </svg>
)
export const IconUp = ({ size = 16 }: IconProps) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10 L8 6 L12 10" />
  </svg>
)
