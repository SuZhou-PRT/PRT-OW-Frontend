export function Globe() {
  return (
    <div className="globe-wrap">
      <div className="globe-pagination" style={{ opacity: 0 }}>
        <span />
        <span className="active" />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export function CoreCube() {
  return (
    <svg viewBox="-200 -200 400 400" width="380" height="380">
      <defs>
        <linearGradient id="cube-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7fb6ff" />
          <stop offset="100%" stopColor="#3a7ae0" />
        </linearGradient>
        <linearGradient id="cube-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d6cff" />
          <stop offset="100%" stopColor="#0e2a78" />
        </linearGradient>
        <linearGradient id="cube-right" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a4cb0" />
          <stop offset="100%" stopColor="#082056" />
        </linearGradient>
        <linearGradient id="base-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a3a8a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0a1a4a" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="ground-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4a8eff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4a8eff" stopOpacity="0" />
        </radialGradient>
        <filter id="cube-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <ellipse cx="0" cy="120" rx="180" ry="36" fill="url(#ground-glow)" />

      <ellipse cx="0" cy="60" rx="170" ry="42" fill="none" stroke="rgba(74,142,255,0.4)" strokeWidth="1.2" />
      <ellipse cx="0" cy="60" rx="170" ry="42" fill="none" stroke="rgba(127,182,255,0.15)" strokeWidth="6" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x = +(170 * Math.cos(rad)).toFixed(3)
        const y = +(60 + 42 * Math.sin(rad)).toFixed(3)
        return <circle key={deg} cx={x} cy={y} r="3" fill="#7fb6ff" />
      })}

      <g opacity="0.75">
        <polygon points="-100,90 0,140 100,90 0,40" fill="url(#base-grad)" stroke="rgba(127,182,255,0.4)" strokeWidth="1" />
        <polygon points="-100,90 -100,110 0,160 0,140" fill="#0a1a4a" />
        <polygon points="100,90 100,110 0,160 0,140" fill="#061232" />
      </g>

      <ellipse cx="0" cy="20" rx="80" ry="20" fill="#4a8eff" opacity="0.35" filter="url(#cube-glow)" />

      <g>
        <polygon points="-70,-30 0,-65 70,-30 0,5" fill="url(#cube-top)" stroke="rgba(180,210,255,0.7)" strokeWidth="0.6" />
        <polygon points="-70,-30 -70,40 0,75 0,5" fill="url(#cube-left)" stroke="rgba(127,182,255,0.5)" strokeWidth="0.6" />
        <polygon points="70,-30 70,40 0,75 0,5" fill="url(#cube-right)" stroke="rgba(127,182,255,0.4)" strokeWidth="0.6" />
        <polygon points="-50,-22 0,-47 50,-22 0,2" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.6" />
        <circle cx="0" cy="-30" r="14" fill="#cfe2ff" opacity="0.6" filter="url(#cube-glow)" />
        <circle cx="0" cy="-30" r="5" fill="#ffffff" opacity="0.9" />
      </g>

      <circle cx="-70" cy="-30" r="2.5" fill="#ffffff" />
      <circle cx="70" cy="-30" r="2.5" fill="#ffffff" />
      <circle cx="0" cy="-65" r="2.5" fill="#ffffff" />

      {[{ x: -120, y: -80 }, { x: 130, y: -40 }, { x: -140, y: 30 }, { x: 120, y: 90 }].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="1.5" fill="#7fb6ff" opacity="0.7">
          <animate attributeName="cy" values={`${p.y};${p.y - 8};${p.y}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
        </circle>
      ))}
    </svg>
  )
}
