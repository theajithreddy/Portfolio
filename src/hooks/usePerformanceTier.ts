import { useEffect, useState } from 'react'

export type Tier = 'low' | 'mid' | 'high'

interface NavigatorHints extends Navigator {
  deviceMemory?: number
  connection?: { saveData?: boolean }
}

export function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

export function detectTier(): Tier {
  if (typeof window === 'undefined') return 'low'
  const nav = navigator as NavigatorHints
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'low'
  if (nav.connection?.saveData) return 'low'
  if (!hasWebGL()) return 'low'

  const cores = nav.hardwareConcurrency ?? 4
  const mem = nav.deviceMemory ?? 4
  const small = window.innerWidth < 768

  if (cores <= 2 || mem <= 2) return 'low'
  if (small || cores <= 4 || mem <= 4) return 'mid'
  return 'high'
}

/** Resolves once on mount so SSR/first paint never touches WebGL. */
export function usePerformanceTier(): Tier | null {
  const [tier, setTier] = useState<Tier | null>(null)
  useEffect(() => setTier(detectTier()), [])
  return tier
}
