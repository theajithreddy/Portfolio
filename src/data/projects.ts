export type Industry = 'Healthcare & Aesthetics' | 'Retail & E-Commerce' | 'B2B & Advisory'
export type Variant = 'Live Site' | 'Interactive 3D Demo'

export interface Project {
  id: string
  industry: Industry
  business: string // business category, level 2 of the taxonomy
  name: string
  description: string
  variant: Variant
  url: string
  features: string[]
  tags: string[]
  accent: 'emerald' | 'cyan'
}

export const industries: Industry[] = ['Healthcare & Aesthetics', 'Retail & E-Commerce', 'B2B & Advisory']

export const projects: Project[] = [
  {
    id: 'neoskin',
    industry: 'Healthcare & Aesthetics',
    business: 'Aesthetic Dermatology',
    name: 'NeoSkin Kokapet',
    description: 'Clinic platform rebuilt for speed, with local SEO for Kokapet & Financial District.',
    variant: 'Live Site',
    url: 'https://neoskinkokapet.com/',
    features: [
      'DPDP & NMC aligned lead capture, no unverified medical claims',
      'Direct WhatsApp appointment routing',
      'Local SEO for Kokapet & Financial District',
    ],
    tags: ['Local Lead Funnel', 'Local SEO', 'WhatsApp Booking'],
    accent: 'emerald',
  },
  {
    id: 'christhu',
    industry: 'Healthcare & Aesthetics',
    business: 'Multi-Specialty Hospital',
    name: 'Christhu Jyothi Hospitals',
    description: 'Multi-specialty healthcare platform built around patient trust and speed.',
    variant: 'Live Site',
    url: 'https://christhujyothihospitals.com/',
    features: ['Patient trust architecture', 'Rapid specialist appointment booking', 'Emergency call routing'],
    tags: ['Healthcare', 'Conversion Architecture', 'Speed'],
    accent: 'emerald',
  },
  {
    id: 'bhargavi',
    industry: 'Retail & E-Commerce',
    business: 'Fashion E-Commerce',
    name: 'Bhargavi Store',
    description: 'Interactive 3D e-commerce concept with a hands-on product visualizer.',
    variant: 'Interactive 3D Demo',
    url: 'https://bhargavi-store.onrender.com/',
    features: [
      'Interactive 3D product visualizer',
      'Instant slide-out bag drawer',
      'Fast-loading storefront',
    ],
    tags: ['E-Commerce', '3D Product View', 'Smooth Motion'],
    accent: 'cyan',
  },
  {
    id: 'mn',
    industry: 'B2B & Advisory',
    business: 'Corporate Advisory',
    name: 'MN Consultants',
    description: 'Enterprise advisory and corporate services site focused on authority.',
    variant: 'Live Site',
    url: 'https://mnconsultants.in/',
    features: ['Authority positioning', 'Clear service taxonomy', 'Structured B2B inquiry funnels'],
    tags: ['B2B', 'Corporate Web', 'Lead Generation'],
    accent: 'cyan',
  },
]

export const clientProjects = projects.filter((p) => p.variant === 'Live Site')
export const demoProjects = projects.filter((p) => p.variant === 'Interactive 3D Demo')
export const clientIndustries = industries.filter((i) => clientProjects.some((p) => p.industry === i))

// Empty slots for upcoming 3D concept demos.
export const demoSlots = [
  { id: 'slot-1', title: 'Next concept demo', note: '3D concept in progress' },
  { id: 'slot-2', title: 'Next concept demo', note: 'Coming soon' },
]
