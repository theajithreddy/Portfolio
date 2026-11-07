// Everything in the site reads contact details from this file.
export const contact = {
  name: 'Ajith Reddy',
  // Digits only, with country code, no "+".
  whatsappNumber: '919182330659',
  phoneDisplay: '+91 91823 30659',
  phoneTel: '+919182330659',
  github: 'https://github.com/theajithreddy',
  instagram: 'https://instagram.com/theajithreddy',
  facebook: 'https://facebook.com/theajithreddy',
  x: 'https://x.com/theajithreddy_',
  location: 'Warangal & Hyderabad',
} as const

export const isContactConfigured = !contact.whatsappNumber.includes('X')

export const waLink = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`

export const telLink = `tel:${contact.phoneTel}`
