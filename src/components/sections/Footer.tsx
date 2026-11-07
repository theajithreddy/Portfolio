import { Mail, Phone } from 'lucide-react'
import { contact, telLink } from '../../data/contact'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">{contact.name}</p>
          <p className="text-sm text-zinc-500">{contact.location}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-zinc-300">
          <a href={telLink} className="inline-flex items-center gap-2 hover:text-emerald-400">
            <Phone size={16} /> {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-emerald-400">
            <Mail size={16} /> {contact.email}
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
            GitHub
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-zinc-600">© {new Date().getFullYear()} {contact.name}</p>
    </footer>
  )
}
