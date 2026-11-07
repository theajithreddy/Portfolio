export interface Project {
  id: string
  name: string
  url: string
  type: string
  focus: string
  tags: string[]
  accent: 'emerald' | 'cyan'
}

export const projects: Project[] = [
  {
    id: 'neoskin',
    name: 'NeoSkin Kokapet',
    url: 'https://neoskinkokapet.com/',
    type: 'Aesthetic Dermatology & Clinic Platform',
    focus:
      'Full Next.js rebuild with local SEO for Kokapet & Financial District, compliant lead capture (DPDP & NMC aligned, no unverified medical claims) and direct WhatsApp appointment routing.',
    tags: ['Next.js', 'Tailwind CSS', 'Local Lead Funnel'],
    accent: 'emerald',
  },
  {
    id: 'bhargavi',
    name: 'Bhargavi Store Concept',
    url: 'https://bhargavi-store.onrender.com/',
    type: '3D Modern E-Commerce Demo',
    focus:
      'Three.js / WebGL interactive product visualizer, fluid GSAP motion, an instant slide-out bag drawer and an optimized 272 kB initial JS bundle.',
    tags: ['React', 'Three.js', 'GSAP', 'E-Commerce'],
    accent: 'cyan',
  },
  {
    id: 'christhu',
    name: 'Christhu Jyothi Hospitals',
    url: 'https://christhujyothihospitals.com/',
    type: 'Multi-Specialty Healthcare Platform',
    focus:
      'Patient trust architecture, rapid specialist appointment booking and emergency call routing.',
    tags: ['Healthcare', 'Conversion Architecture', 'Speed'],
    accent: 'emerald',
  },
  {
    id: 'mn',
    name: 'MN Consultants',
    url: 'https://mnconsultants.in/',
    type: 'Enterprise Advisory & Corporate Services',
    focus:
      'Authority positioning, clear service taxonomy and structured B2B inquiry funnels.',
    tags: ['B2B', 'Corporate Web', 'Lead Generation'],
    accent: 'cyan',
  },
]
