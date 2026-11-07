import { useEffect, useState } from 'react'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import { contact, telLink, waLink } from '../../data/contact'

const links = [
  ['Overview', '#overview'],
  ['Work', '#work'],
  ['Services', '#services'],
  ['Estimator', '#estimator'],
] as const

const avatar = `${import.meta.env.BASE_URL}assets/ajith-reddy.jpeg`
const waHref = waLink('Hi Ajith, I found your portfolio and would like to talk about a project.')

function PulseDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
    </span>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0c]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-5" aria-label="Primary">
        <a href="#overview" className="flex min-w-0 items-center gap-3">
          <img
            src={avatar}
            alt="Ajith Reddy"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full border border-white/20 object-cover ring-2 ring-emerald-500/30"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-semibold tracking-tight">Ajith Reddy</span>
            <span className="truncate text-xs text-zinc-400">Digital Strategist</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition hover:text-emerald-400">{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-6px_rgba(16,185,129,.7)] transition hover:-translate-y-0.5 sm:inline-flex"
          >
            <PulseDot /> Message on WhatsApp
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/5 bg-[#0a0a0c]/95 px-4 pb-5 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col py-2">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} className="block py-3 text-zinc-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-zinc-950"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-white/5 px-4 py-3 text-sm font-semibold"
            >
              <Phone size={16} /> Call {contact.phoneDisplay.slice(-5)}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
