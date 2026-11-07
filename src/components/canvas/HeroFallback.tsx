/** Lightweight 2D hero backdrop for low-tier GPUs, reduced motion and no-WebGL browsers. */
export default function HeroFallback() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="grid-floor" />
    </div>
  )
}
