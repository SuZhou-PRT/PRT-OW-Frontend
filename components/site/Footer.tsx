"use client"

import Image from "next/image"
import PRTLOGO from "@/public/PRT_logo.svg"
import { useLang } from "./use-lang"

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#">
              <Image src={PRTLOGO} alt="PRT" width={120} height={42} />
              <span className="brand-sub">{t.brandSub}</span>
            </a>
            <p>{t.footer.desc}</p>
            <div className="socials">
              <a className="s" href="#"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 4.5C5.5 4.5 2.7 7.2 2.7 10.7c0 1.8.8 3.4 2 4.6L4 18l2.9-1.4c.7.2 1.5.3 2.3.3 3.5 0 6.3-2.7 6.3-6 0-3.4-2.9-6.4-6.5-6.4Zm-2.3 5.7c0-.5.4-.9.9-.9s.9.4.9.9-.4.9-.9.9-.9-.4-.9-.9Zm4.8 0c0-.5.4-.9.9-.9s.9.4.9.9-.4.9-.9.9-.9-.4-.9-.9Z" /><path d="M16.5 9.5c-.2 0-.4 0-.6.1.4 1 .6 2 .6 3 0 3.5-3 6.4-6.7 6.7.7 2.7 3.3 4.7 6.4 4.7.7 0 1.4-.1 2-.3l2.5 1.2-.6-2.3c1.1-1 1.8-2.4 1.8-3.9 0-3.3-2.5-6-5.4-6.2Z" /></svg></a>
              <a className="s" href="#"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M8 12 L11 15 L16 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              <a className="s" href="#"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><rect x="3" y="6" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M3 8 L12 14 L21 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></a>
            </div>
          </div>
          <div>
            <h5>{t.footer.headings.services}</h5>
            <ul>{t.footer.services.map((s) => <li key={s}><a href="#">{s}</a></li>)}</ul>
          </div>
          <div>
            <h5>{t.footer.headings.solutions}</h5>
            <ul>{t.footer.solutions.map((s) => <li key={s}><a href="#">{s}</a></li>)}</ul>
          </div>
          <div>
            <h5>{t.footer.headings.about}</h5>
            <ul>{t.footer.about.map((s) => <li key={s}><a href="#">{s}</a></li>)}</ul>
          </div>
          <div>
            <h5>{t.footer.headings.contact}</h5>
            <div className="contact-item"><strong>{t.footer.contact.phoneLabel}</strong>{t.footer.contact.phone}</div>
            <div className="contact-item"><strong>{t.footer.contact.emailLabel}</strong>{t.footer.contact.email}</div>
            <div className="contact-item"><strong>{t.footer.contact.addressLabel}</strong>{t.footer.contact.address}</div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>{t.footer.copyright}</div>
          <div className="links">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
