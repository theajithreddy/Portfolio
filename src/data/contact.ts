// Drop production values in here. Everything in the site reads from this file.
export const contact = {
  name: 'Ajith Reddy',
  // Digits only, with country code, no "+" (e.g. "919876543210").
  whatsappNumber: '91XXXXXXXXXX',
  // Shown on the page and used for tel: links.
  phoneDisplay: '+91 XXXXX XXXXX',
  phoneTel: '+91XXXXXXXXXX',
  email: 'hello@example.com',
  github: 'https://github.com/theajithreddy',
  location: 'Warangal & Hyderabad',
} as const

export const isContactConfigured = !contact.whatsappNumber.includes('X')

export const waLink = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`

export const telLink = `tel:${contact.phoneTel}`
