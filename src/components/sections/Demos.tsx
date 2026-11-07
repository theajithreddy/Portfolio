import { Sparkles } from 'lucide-react'
import ProjectCard from '../ui/ProjectCard'
import { demoProjects, demoSlots } from '../../data/projects'

export default function Demos() {
  return (
    <section id="demos" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-5">
      <p data-reveal className="text-xs tracking-[0.25em] text-cyan-400 uppercase">Prototypes</p>
      <h2 data-reveal className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Interactive Demos &amp; Prototypes
      </h2>
      <p data-reveal className="mt-3 max-w-2xl text-zinc-400">
        Concept builds that show what an interactive 3D experience can do for a brand.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {demoProjects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
        {demoSlots.map((s) => (
          <div
            key={s.id}
            className="glass grid min-h-64 place-items-center border-dashed p-6 text-center"
          >
            <div>
              <Sparkles className="mx-auto text-cyan-400" />
              <p className="mt-3 font-semibold">{s.title}</p>
              <p className="mt-1 text-sm text-zinc-500">{s.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
