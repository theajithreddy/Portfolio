import { pillars } from '../../data/services'

export default function Pillars() {
  return (
    <section id="strategy" className="mx-auto max-w-6xl px-5 py-24">
      <h2 data-reveal className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Most business websites are static digital brochures that leak revenue. I design interactive customer
        journeys built for one thing:{' '}
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          conversions.
        </span>
      </h2>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div key={p.title} data-reveal className="glass p-6">
            <span className="text-sm font-mono text-emerald-400">0{i + 1}</span>
            <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-zinc-400">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
