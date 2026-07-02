'use client'

import { useEffect, useRef } from 'react'

const APP_STORE = 'https://apps.apple.com/app/id6781146505'
const INSTAGRAM = 'https://instagram.com/hibble.app'
const EMAIL = 'mailto:Hibble.app@gmail.com'

export default function Home() {
  const glowRef = useRef(null)

  // 커서를 따라오는 은은한 빛
  useEffect(() => {
    const glow = glowRef.current
    if (!glow || window.matchMedia('(hover:none)').matches) return
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y, on = false, raf = 0
    const move = (e) => { x = e.clientX; y = e.clientY; if (!on) { on = true; glow.style.opacity = '1' } }
    window.addEventListener('pointermove', move, { passive: true })
    const loop = () => { cx += (x - cx) * 0.12; cy += (y - cy) * 0.12; glow.style.transform = `translate(${cx}px,${cy}px)`; raf = requestAnimationFrame(loop) }
    loop()
    return () => { window.removeEventListener('pointermove', move); cancelAnimationFrame(raf) }
  }, [])

  // 스크롤 등장
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    document.querySelectorAll('.rise').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="aurora"><span className="b1" /><span className="b2" /><span className="b3" /></div>
      <div className="veil" />
      <div className="glow" ref={glowRef} />

      <div className="wrap">
        <header>
          <p className="eyebrow rise">iOS Developer &amp; Designer — Seoul</p>
          <h1 className="name rise">Sabeen<em>.</em></h1>
          <p className="line1 rise d1">앱을 디자인하고 개발합니다.</p>
          <p className="line2 rise d2">2026년 iOS 앱 Hibble을 출시해 운영하고 있습니다.</p>
          <div className="cue rise d3"><span className="rail" /> scroll</div>
        </header>

        <section>
          <p className="kick rise">01 — 소개</p>
          <p className="lead rise d1">디자인과 개발을 함께 합니다.</p>
          <p className="p rise d2">UI 디자인, iOS 앱 개발, 백엔드 구축을 직접 합니다. 개인 개발자로 앱을 만들고 운영합니다.</p>
        </section>

        <section>
          <p className="kick rise">02 — 작업</p>
          <div className="work">
            <a className="card rise d1" href={APP_STORE} target="_blank" rel="noopener noreferrer">
              <span className="n">2026</span>
              <h3>Hibble</h3>
              <p>취미를 기록하고 주간 페이스를 관리하는 iOS 앱. 디자인과 개발을 전담했습니다.</p>
              <div className="meta"><span className="tag">iOS</span><span className="tag">Design</span><span className="tag">Development</span></div>
              <div className="go">App Store <span>→</span></div>
            </a>
          </div>
        </section>

        <section>
          <p className="kick rise">03 — 연락</p>
          <div className="links rise d1">
            <a className="row" href={APP_STORE} target="_blank" rel="noopener noreferrer"><span className="l">Hibble</span><span className="r">App Store ↗</span></a>
            <a className="row" href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><span className="l">Instagram</span><span className="r">@hibble.app ↗</span></a>
            <a className="row" href={EMAIL}><span className="l">Email</span><span className="r">Hibble.app@gmail.com</span></a>
          </div>
        </section>

        <footer className="rise">© 2026 Sabeen</footer>
      </div>
    </>
  )
}
