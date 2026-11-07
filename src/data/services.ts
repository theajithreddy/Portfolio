export interface Tier {
  id: string
  name: string
  blurb: string
}

export const tiers: Tier[] = [
  {
    id: 'landing',
    name: 'High-Converting Landing Page',
    blurb: 'Fast-turnaround ad landing page + Meta Pixel / GA4 + WhatsApp lead capture.',
  },
  {
    id: 'business',
    name: 'Interactive Business Website',
    blurb: 'Multi-page custom design + 3D interactive touches + SEO structure.',
  },
  {
    id: 'funnel',
    name: 'E-Commerce & Full Lead Funnel',
    blurb: 'Custom shop / lead engine + payment integration + CRM / automation.',
  },
]

export const addons = [
  { id: 'gbp', name: 'Google Business Profile / Local SEO' },
  { id: 'wa', name: 'WhatsApp Lead Automation' },
  { id: 'ads', name: 'Meta / Google Ad Setup' },
  { id: 'copy', name: 'Copywriting' },
]

export const pillars = [
  {
    title: 'Strategy first',
    text: 'Offer, audience and the one action a visitor should take, decided before a pixel is drawn.',
  },
  {
    title: 'Engineering that is fast',
    text: 'React, Next.js and WebGL tuned for mid-range phones, with graceful 2D fallbacks.',
  },
  {
    title: 'Lead capture that closes',
    text: 'WhatsApp, calls and forms wired to tracking, so every enquiry is counted and followed up.',
  },
]
