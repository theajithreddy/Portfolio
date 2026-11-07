import { useState } from 'react'
import ProjectCard from '../ui/ProjectCard'
import { clientIndustries, clientProjects } from '../../data/projects'
import type { Industry } from '../../data/projects'
import { testimonials } from '../../data/testimonials'

type Filter = 'All' | Industry

export default function CaseStudies() {
  const [filter, setFilter] = useState<Filter>('All')
  const shown = filter === 'All' ? clientProjects : clientProjects.filter((p) => p.industry === filter)
  const filters: Filter[] = ['All', ...clientIndustries]

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-5">
      <p data-reveal className="text-xs tracking-[0.25em] text-emerald-400 uppercase">Client Case Studies</p>
      <h2 data-reveal className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Live client platforms</h2>

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
          <ProjectCard key={p.id} p={p} />
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
