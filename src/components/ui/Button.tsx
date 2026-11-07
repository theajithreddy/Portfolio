import type { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
  className?: string
}

export default function Button({ href, children, variant = 'primary', external, className = '' }: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400'
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 shadow-[0_0_30px_-6px_rgba(16,185,129,.7)] hover:shadow-[0_0_40px_-4px_rgba(6,182,212,.9)] hover:-translate-y-0.5'
      : 'border border-zinc-700 bg-white/5 text-zinc-100 backdrop-blur hover:border-emerald-500/60'
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
