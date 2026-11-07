import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Hero from './components/sections/Hero'
import Pillars from './components/sections/Pillars'
import CaseStudies from './components/sections/CaseStudies'
import Services from './components/sections/Services'
import ProjectEstimator from './components/sections/ProjectEstimator'
import Footer from './components/sections/Footer'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const links = [
  ['Strategy', '#strategy'],
  ['Work', '#work'],
  ['Services', '#services'],
  ['Estimate', '#estimate'],
]

export default function App() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          gsap.from(el, {
            y: 32,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          })
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <div ref={root}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-semibold tracking-tight">Ajith Reddy</a>
          <ul className="hidden gap-6 text-sm text-zinc-300 sm:flex">
            {links.map(([label, href]) => (
              <li key={href}><a href={href} className="hover:text-emerald-400">{label}</a></li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Hero />
        <Pillars />
        <CaseStudies />
        <Services />
        <ProjectEstimator />
      </main>
      <Footer />
    </div>
  )
}
