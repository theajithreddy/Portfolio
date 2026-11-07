import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Header from "./components/ui/Header"
import Hero from './components/sections/Hero'
import Pillars from './components/sections/Pillars'
import CaseStudies from './components/sections/CaseStudies'
import Services from './components/sections/Services'
import ProjectEstimator from './components/sections/ProjectEstimator'
import Footer from './components/sections/Footer'

gsap.registerPlugin(ScrollTrigger, useGSAP)

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
      <Header />
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
