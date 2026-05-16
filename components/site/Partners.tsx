"use client"

import { PARTNER_LOGOS } from "./data"

export function Partners() {
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
