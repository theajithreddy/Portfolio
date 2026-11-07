import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import TiltCard from '../ui/TiltCard'
import { industries, projects } from '../../data/projects'
import type { Industry } from '../../data/projects'
import { testimonials } from '../../data/testimonials'

type Filter = 'All' | Industry

export default function CaseStudies() {
  const [filter, setFilter] = useState<Filter>('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.industry === filter)
  const filters: Filter[] = ['All', ...industries]

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-5">
      <p data-reveal className="text-xs tracking-[0.25em] text-emerald-400 uppercase">Selected work</p>
      <h2 data-reveal className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Live deliverables</h2>

      <div role="group" aria-label="Filter by industry" className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              filter === f
                ? 'border-emerald-500 bg-emerald-500/15 text-emerald-300'
                : 'border-zinc-700 text-zinc-300 hover:border-zinc-500'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid min-h-[34rem] content-start gap-6 md:grid-cols-2">
        {shown.map((p) => (
          <TiltCard key={p.id} className="glass group h-full">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col p-6">
              <div className={`card-visual card-visual-${p.accent}`} aria-hidden />
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-white/5 px-3 py-1 text-zinc-300">{p.industry}</span>
                <span
                  className={`rounded-full px-3 py-1 font-medium ${
                    p.variant === 'Live Site' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-cyan-500/15 text-cyan-300'
                  }`}
                >
                  {p.variant}
                </span>
              </div>
              <p className="mt-3 text-xs tracking-wider text-zinc-500 uppercase">{p.business}</p>
              <h3 className="mt-1 flex items-center justify-between gap-3 text-2xl font-semibold">
                {p.name}
                <ArrowUpRight className="shrink-0 text-emerald-400 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{p.description}</p>
              <ul className="mt-4 flex-1 space-y-1.5 text-sm text-zinc-300">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li key={t} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                    {t}
                  </li>
                ))}
              </ul>
              <span className="mt-5 text-sm font-semibold text-cyan-400">
                {p.variant === 'Live Site' ? 'Visit live site →' : 'Open 3D demo →'}
              </span>
            </a>
          </TiltCard>
        ))}
      </div>

      {testimonials.length > 0 && (
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.author} data-reveal className="glass p-6">
              <blockquote className="text-zinc-200">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-zinc-500">
                {t.author}, {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  )
}
