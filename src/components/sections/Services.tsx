import { tiers } from '../../data/services'

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-16 px-4 sm:px-5 py-24">
      <p data-reveal className="text-xs tracking-[0.25em] text-emerald-400 uppercase">Services</p>
      <h2 data-reveal className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Pick your starting point</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.id} data-reveal className="glass flex flex-col p-6">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="mt-2 flex-1 text-zinc-400">{t.blurb}</p>
            <p className="mt-5 font-semibold text-emerald-400">{t.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
