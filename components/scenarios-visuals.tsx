// Deterministic PRNG so SSR and client render match.
function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export const ScenarioDriving = () => {
  const r = mulberry32(1)
  return (
    <svg viewBox="0 0 320 360" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <linearGradient id="sd-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#102554" />
          <stop offset="100%" stopColor="#050b22" />
        </linearGradient>
        <linearGradient id="sd-road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2a55" />
          <stop offset="100%" stopColor="#0a132e" />
        </linearGradient>
        <linearGradient id="sd-car" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbe6ff" />
          <stop offset="100%" stopColor="#3a6bd6" />
        </linearGradient>
        <radialGradient id="sd-light" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="#4a8eff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4a8eff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="360" fill="url(#sd-bg)" />
      {Array.from({ length: 50 }).map((_, i) => (
        <circle key={i} cx={r() * 320} cy={r() * 180} r={r() * 0.8 + 0.3} fill="#7fb6ff" opacity={r() * 0.6 + 0.2} />
      ))}
      <ellipse cx="160" cy="190" rx="180" ry="60" fill="url(#sd-light)" />
      <polygon points="0,360 120,180 200,180 320,360" fill="url(#sd-road)" />
      {[0, 1, 2, 3].map((i) => {
        const t = 0.2 + i * 0.2
        const xL = 120 + (0 - 120) * t
        const xR = 200 + (320 - 200) * t
        const y = 180 + (360 - 180) * t
        return <line key={i} x1={(xL + xR) / 2 - 2} y1={y} x2={(xL + xR) / 2 + 2} y2={y + 10} stroke="#7fb6ff" strokeWidth="2" opacity="0.7" />
      })}
      {[0.3, 0.5, 0.7, 0.9].map((t, i) => {
        const xL = 120 + (0 - 120) * t
        const xR = 200 + (320 - 200) * t
        const y = 180 + (360 - 180) * t
        return <line key={i} x1={xL} y1={y} x2={xR} y2={y} stroke="#4a8eff" strokeWidth="0.6" opacity={0.5 - i * 0.1} />
      })}
      <g transform="translate(110 200)">
        <path d="M5 35 L15 18 Q50 10 85 18 L95 35 L95 50 L5 50 Z" fill="url(#sd-car)" opacity="0.95" />
        <path d="M22 22 Q50 16 78 22 L82 32 L18 32 Z" fill="#4a8eff" opacity="0.4" />
        <ellipse cx="20" cy="50" rx="8" ry="3" fill="#0a1530" />
        <ellipse cx="80" cy="50" rx="8" ry="3" fill="#0a1530" />
        <circle cx="14" cy="38" r="3" fill="#fff" opacity="0.9" />
        <circle cx="86" cy="38" r="3" fill="#fff" opacity="0.9" />
      </g>
      <g stroke="#7fb6ff" strokeWidth="1" fill="none" opacity="0.7">
        <rect x="100" y="195" width="120" height="62" />
        <line x1="100" y1="195" x2="108" y2="195" strokeWidth="2" />
        <line x1="100" y1="195" x2="100" y2="203" strokeWidth="2" />
        <line x1="212" y1="195" x2="220" y2="195" strokeWidth="2" />
        <line x1="220" y1="195" x2="220" y2="203" strokeWidth="2" />
        <line x1="100" y1="249" x2="100" y2="257" strokeWidth="2" />
        <line x1="100" y1="257" x2="108" y2="257" strokeWidth="2" />
        <line x1="212" y1="257" x2="220" y2="257" strokeWidth="2" />
        <line x1="220" y1="249" x2="220" y2="257" strokeWidth="2" />
      </g>
    </svg>
  )
}

export const ScenarioCity = () => {
  const r = mulberry32(2)
  return (
    <svg viewBox="0 0 320 360" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <linearGradient id="sc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e1e4e" />
          <stop offset="100%" stopColor="#040a1c" />
        </linearGradient>
        <linearGradient id="sc-b1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c4a8e" />
          <stop offset="100%" stopColor="#0a1330" />
        </linearGradient>
        <linearGradient id="sc-b2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c3470" />
          <stop offset="100%" stopColor="#070d24" />
        </linearGradient>
      </defs>
      <rect width="320" height="360" fill="url(#sc-bg)" />
      <circle cx="240" cy="80" r="60" fill="#4a8eff" opacity="0.18" />
      <circle cx="240" cy="80" r="28" fill="#7fb6ff" opacity="0.25" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="0" y1={280 + i * 16} x2="320" y2={280 + i * 16} stroke="#4a8eff" strokeWidth="0.5" opacity={0.3 - i * 0.05} />
      ))}
      {([
        [10, 180, 40, 180], [55, 160, 30, 200], [90, 140, 35, 220], [130, 150, 45, 210],
        [180, 130, 38, 230], [225, 145, 40, 215], [270, 170, 40, 190],
      ] as const).map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} fill="url(#sc-b2)" />
          {Array.from({ length: Math.floor(h / 14) }).map((_, rr) =>
            Array.from({ length: Math.floor(w / 8) }).map((_, c) =>
              r() > 0.4 ? <rect key={`${rr}-${c}`} x={x + 3 + c * 8} y={y + 6 + rr * 14} width="3" height="6" fill="#7fb6ff" opacity={r() * 0.7 + 0.2} /> : null
            )
          )}
        </g>
      ))}
      {([[30, 200, 50, 160], [100, 180, 55, 180], [170, 170, 60, 190], [245, 200, 55, 160]] as const).map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} fill="url(#sc-b1)" stroke="rgba(127,182,255,0.25)" strokeWidth="0.6" />
          {Array.from({ length: Math.floor(h / 12) }).map((_, rr) =>
            Array.from({ length: Math.floor(w / 10) }).map((_, c) => (
              <rect key={`${rr}-${c}`} x={x + 3 + c * 10} y={y + 5 + rr * 12} width="5" height="6" fill="#7fb6ff" opacity={r() * 0.8 + 0.15} />
            ))
          )}
        </g>
      ))}
      {([[60, 170], [150, 140], [210, 160], [280, 180]] as const).map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="3" fill="#fff" />
          <circle cx={cx} cy={cy} r="8" fill="none" stroke="#7fb6ff" strokeWidth="0.6" opacity="0.6">
            <animate attributeName="r" values="4;16;4" dur="3s" repeatCount="indefinite" begin={`${i * 0.6}s`} />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" begin={`${i * 0.6}s`} />
          </circle>
        </g>
      ))}
      <path d="M60 170 L150 140 L210 160 L280 180" fill="none" stroke="#7fb6ff" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
    </svg>
  )
}

export const ScenarioManufacture = () => (
  <svg viewBox="0 0 320 360" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
    <defs>
      <linearGradient id="sm-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0e1a44" />
        <stop offset="100%" stopColor="#040a1c" />
      </linearGradient>
      <linearGradient id="sm-arm" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#dbe6ff" />
        <stop offset="100%" stopColor="#3a6bd6" />
      </linearGradient>
      <radialGradient id="sm-spark" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="40%" stopColor="#7fb6ff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#4a8eff" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="360" fill="url(#sm-bg)" />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <line key={i} x1="0" y1={250 + i * 20} x2="320" y2={250 + i * 20} stroke="#4a8eff" strokeWidth="0.4" opacity={0.4 - i * 0.05} />
    ))}
    {[0, 1, 2, 3, 4].map((i) => {
      const t = i / 4
      const x1 = t * 320
      return <line key={i} x1={x1} y1="250" x2={160 + (x1 - 160) * 1.6} y2="360" stroke="#4a8eff" strokeWidth="0.4" opacity="0.3" />
    })}
    <rect x="120" y="240" width="80" height="30" rx="3" fill="#1a2c5e" stroke="rgba(127,182,255,0.3)" />
    <rect x="135" y="225" width="50" height="20" rx="2" fill="#243874" />
    <g stroke="#7fb6ff" strokeWidth="0.8" fill="url(#sm-arm)">
      <circle cx="160" cy="225" r="10" />
      <path d="M155 218 L155 100 L165 100 L165 218 Z" />
      <circle cx="160" cy="100" r="9" />
      <path d="M155 95 L250 75 L252 85 L157 105 Z" />
      <circle cx="250" cy="80" r="7" />
      <path d="M250 86 L246 100 L254 100 L258 86 Z" />
      <line x1="246" y1="100" x2="244" y2="108" strokeWidth="2" />
      <line x1="254" y1="100" x2="256" y2="108" strokeWidth="2" />
    </g>
    <circle cx="250" cy="115" r="14" fill="url(#sm-spark)">
      <animate attributeName="r" values="10;18;10" dur="0.8s" repeatCount="indefinite" />
    </circle>
    <circle cx="250" cy="115" r="3" fill="#fff" />
    <rect x="220" y="120" width="60" height="14" rx="2" fill="#1a2c5e" stroke="rgba(127,182,255,0.4)" />
    {([[238, 108], [262, 110], [246, 128], [260, 124]] as const).map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="1.5" fill="#ffd47f" opacity="0.8">
        <animate attributeName="opacity" values="0;1;0" dur="0.6s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
      </circle>
    ))}
  </svg>
)

export const ScenarioAI = () => {
  const r = mulberry32(4)
  return (
    <svg viewBox="0 0 320 360" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <linearGradient id="sa-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#102554" />
          <stop offset="100%" stopColor="#040a1c" />
        </linearGradient>
        <linearGradient id="sa-face" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7fb6ff" />
          <stop offset="100%" stopColor="#2d6cff" />
        </linearGradient>
      </defs>
      <rect width="320" height="360" fill="url(#sa-bg)" />
      <circle cx="160" cy="170" r="140" fill="#4a8eff" opacity="0.12" />
      <circle cx="160" cy="170" r="80" fill="#4a8eff" opacity="0.15" />
      <g opacity="0.9">
        <path d="M100 90 Q90 130 95 170 Q95 210 110 240 Q120 260 140 270 L165 270 Q175 270 175 260 Q175 250 168 245 L168 230 Q190 220 195 195 Q205 195 210 185 Q215 175 205 165 Q210 145 200 125 Q195 100 175 85 Q150 70 125 75 Q105 80 100 90 Z" fill="url(#sa-face)" opacity="0.85" stroke="rgba(180,210,255,0.7)" strokeWidth="0.6" />
      </g>
      {([
        [120, 110], [140, 105], [160, 108], [175, 115], [185, 130], [190, 150],
        [115, 135], [125, 150], [155, 135], [170, 140], [180, 155],
        [125, 180], [140, 175], [160, 178], [175, 180],
        [130, 210], [150, 215], [165, 212], [125, 235], [150, 240], [160, 250],
      ] as const).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#fff" opacity="0.95" />
      ))}
      <g stroke="#ffffff" strokeWidth="0.5" opacity="0.5" fill="none">
        <path d="M120 110 L140 105 L160 108 L175 115 L185 130 L190 150" />
        <path d="M115 135 L125 150 L155 135 L170 140 L180 155" />
        <path d="M125 180 L140 175 L160 178 L175 180" />
        <path d="M120 110 L115 135 L125 180 L130 210 L150 240" />
        <path d="M185 130 L180 155 L175 180 L165 212 L160 250" />
      </g>
      {Array.from({ length: 30 }).map((_, i) => {
        const angle = (i / 30) * Math.PI * 2
        const rad = 120 + r() * 50
        const x = +(160 + Math.cos(angle) * rad).toFixed(3)
        const y = +(170 + Math.sin(angle) * rad * 0.9).toFixed(3)
        return <circle key={i} cx={x} cy={y} r="0.8" fill="#7fb6ff" opacity={+(r() * 0.6 + 0.2).toFixed(4)} />
      })}
      <circle cx="160" cy="170" r="120" fill="none" stroke="#7fb6ff" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" from="0 160 170" to="360 160 170" dur="40s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export const ScenarioHealth = () => {
  const r = mulberry32(5)
  return (
    <svg viewBox="0 0 320 360" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <linearGradient id="sh-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1f4e" />
          <stop offset="100%" stopColor="#040a1c" />
        </linearGradient>
        <linearGradient id="sh-finger" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbe6ff" />
          <stop offset="100%" stopColor="#5a7fc4" />
        </linearGradient>
        <radialGradient id="sh-touch" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7fb6ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4a8eff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="360" fill="url(#sh-bg)" />
      {Array.from({ length: 30 }).map((_, i) => {
        const x = (i * 30) % 320
        const y = Math.floor(i / 11) * 50 + 20
        return (
          <text key={i} x={x} y={y} fill="#4a8eff" opacity="0.15" fontSize="10" fontFamily="monospace">
            {r() > 0.5 ? "01" : "10"}
          </text>
        )
      })}
      <path d="M0 240 L60 240 L75 220 L90 260 L105 200 L120 240 L320 240" fill="none" stroke="#7fb6ff" strokeWidth="1.2" opacity="0.6" />
      <circle cx="180" cy="160" r="60" fill="url(#sh-touch)" />
      <circle cx="180" cy="160" r="30" fill="none" stroke="#7fb6ff" strokeWidth="0.8" opacity="0.6">
        <animate attributeName="r" values="20;60;20" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="160" r="45" fill="none" stroke="#7fb6ff" strokeWidth="0.6" opacity="0.4">
        <animate attributeName="r" values="30;75;30" dur="3s" repeatCount="indefinite" begin="1s" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" begin="1s" />
      </circle>
      <g>
        <path d="M150 280 Q140 220 160 170 Q170 150 180 155 Q190 162 188 180 L188 220 Q200 215 210 225 Q220 240 215 265 Q210 290 195 300 L150 305 Z" fill="url(#sh-finger)" stroke="rgba(180,210,255,0.5)" strokeWidth="0.6" />
        <circle cx="180" cy="160" r="6" fill="#fff" opacity="0.9" />
        <circle cx="180" cy="160" r="3" fill="#fff" />
      </g>
      <g transform="translate(230 50)" opacity="0.5">
        <path d="M20 30 C8 22 0 15 0 8 C0 3 4 0 8 0 C12 0 16 3 20 8 C24 3 28 0 32 0 C36 0 40 3 40 8 C40 15 32 22 20 30 Z" fill="none" stroke="#7fb6ff" strokeWidth="1" />
      </g>
    </svg>
  )
}
