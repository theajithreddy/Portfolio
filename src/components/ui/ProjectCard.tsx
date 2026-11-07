import { ArrowUpRight, Check } from 'lucide-react'
import TiltCard from './TiltCard'
import type { Project } from '../../data/projects'

export default function ProjectCard({ p }: { p: Project }) {
  return (
        <TiltCard className="glass group h-full">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col p-6">
            <img
              src={`${import.meta.env.BASE_URL}assets/previews/${p.id}.jpg`}
              alt={`${p.name} website preview`}
              width={800}
              height={327}
              loading="lazy"
              decoding="async"
              className="aspect-[800/327] w-full rounded-xl border border-zinc-800 bg-zinc-900 object-cover object-top"
            />
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
              {p.tags.map((t) => (
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
  )
}
