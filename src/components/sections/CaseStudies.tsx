import { ArrowUpRight } from 'lucide-react'
import TiltCard from '../ui/TiltCard'
import { projects } from '../../data/projects'
import { testimonials } from '../../data/testimonials'

export default function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24">
      <p data-reveal className="text-xs tracking-[0.25em] text-emerald-400 uppercase">Selected work</p>
      <h2 data-reveal className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Live deliverables</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.id} data-reveal>
            <TiltCard className="glass group h-full">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col p-6"
              >
                <div className={`card-visual card-visual-${p.accent}`} aria-hidden />
                <p className="mt-5 text-xs tracking-wider text-zinc-500 uppercase">{p.type}</p>
                <h3 className="mt-1 flex items-center justify-between gap-3 text-2xl font-semibold">
                  {p.name}
                  <ArrowUpRight className="shrink-0 text-emerald-400 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="mt-3 flex-1 text-sm text-zinc-400">{p.focus}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 text-sm font-semibold text-cyan-400">Visit live site →</span>
              </a>
            </TiltCard>
          </div>
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
