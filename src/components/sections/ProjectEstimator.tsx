import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { addons, tiers } from '../../data/services'
import { contact, isContactConfigured, waLink } from '../../data/contact'

export default function ProjectEstimator() {
  const [tierId, setTierId] = useState(tiers[0].id)
  const [picked, setPicked] = useState<string[]>([])
  const [name, setName] = useState('')

  const tier = tiers.find((t) => t.id === tierId) ?? tiers[0]
  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  const message = [
    `Hi ${contact.name}, ${name ? `I'm ${name}. ` : ''}I'd like a quote.`,
    '',
    `Package: ${tier.name} (${tier.price})`,
    `Add-ons: ${picked.length ? addons.filter((a) => picked.includes(a.id)).map((a) => a.name).join(', ') : 'None'}`,
    '',
    'Please share the next steps.',
  ].join('\n')

  return (
    <section id="estimator" className="mx-auto max-w-4xl scroll-mt-16 px-4 sm:px-5 py-24">
      <p data-reveal className="text-xs tracking-[0.25em] text-emerald-400 uppercase">Project estimator</p>
      <h2 data-reveal className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Get a ballpark in 30 seconds</h2>

      <div data-reveal className="glass mt-10 p-6 sm:p-8">
        <fieldset>
          <legend className="text-sm font-medium text-zinc-300">1. Choose a package</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {tiers.map((t) => (
              <label
                key={t.id}
                className={`cursor-pointer rounded-xl border p-4 transition ${
                  tierId === t.id ? 'border-emerald-500 bg-emerald-500/10' : 'border-zinc-700 hover:border-zinc-500'
                }`}
              >
                <input
                  type="radio"
                  name="tier"
                  className="sr-only"
                  checked={tierId === t.id}
                  onChange={() => setTierId(t.id)}
                />
                <span className="block text-sm font-semibold">{t.name}</span>
                <span className="mt-1 block text-xs text-emerald-400">{t.price}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-8">
          <legend className="text-sm font-medium text-zinc-300">2. Add-ons</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {addons.map((a) => (
              <label key={a.id} className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-700 p-3">
                <input
                  type="checkbox"
                  className="accent-emerald-500"
                  checked={picked.includes(a.id)}
                  onChange={() => toggle(a.id)}
                />
                <span className="text-sm">{a.name}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="mt-8 block text-sm font-medium text-zinc-300">
          3. Your name / business (optional)
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 text-zinc-100 outline-none focus:border-cyan-500"
          />
        </label>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">
            Estimate: <span className="font-semibold text-emerald-400">{tier.price}</span>
            {picked.length > 0 && ' + add-ons quoted on scope'}
          </p>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_30px_-6px_rgba(16,185,129,.7)]"
          >
            <MessageCircle size={18} /> Get Quote &amp; Connect
          </a>
        </div>
        {!isContactConfigured && (
          <p className="mt-3 text-xs text-amber-400">Set your WhatsApp number in src/data/contact.ts.</p>
        )}
      </div>
    </section>
  )
}
