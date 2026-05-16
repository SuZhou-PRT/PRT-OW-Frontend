"use client"

import Image from "next/image"
import PRTLOGO from "@/public/PRT_logo.svg"

export function Footer() {
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
