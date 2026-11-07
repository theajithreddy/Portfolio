import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { CreditCard, Lock, MessageCircle, X } from 'lucide-react'
import { isPaymentConfigured, payment } from '../../data/payment'
import { waLink } from '../../data/contact'

interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  theme: { color: string }
  prefill?: { name?: string }
  handler: () => void
}
interface RazorpayWindow extends Window {
  Razorpay?: new (o: RazorpayOptions) => { open: () => void }
}

const PaymentContext = createContext<() => void>(() => {})
export const usePayment = () => useContext(PaymentContext)

function loadCheckout(): Promise<boolean> {
  return new Promise((resolve) => {
    if ((window as RazorpayWindow).Razorpay) return resolve(true)
    const s = document.createElement('script')
    s.src = 'https://checkout.razorpay.com/v1/checkout.js'
    s.onload = () => resolve(true)
    s.onerror = () => resolve(false)
    document.body.appendChild(s)
  })
}

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'paid' | 'error'>('idle')

  const openModal = useCallback(() => {
    setStatus('idle')
    setOpen(true)
  }, [])
  const value = useMemo(() => openModal, [openModal])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const rupees = Number(amount)
  const canCheckout = Number.isFinite(rupees) && rupees >= 1

  const startCheckout = async () => {
    if (!canCheckout) return
    setStatus('loading')
    if (!(await loadCheckout())) return setStatus('error')
    const Razorpay = (window as RazorpayWindow).Razorpay
    if (!Razorpay) return setStatus('error')
    new Razorpay({
      key: payment.keyId,
      amount: Math.round(rupees * 100),
      currency: 'INR',
      name: payment.businessName,
      description: payment.description,
      theme: { color: payment.themeColor },
      prefill: name ? { name } : undefined,
      handler: () => setStatus('paid'),
    }).open()
    setStatus('idle')
  }

  return (
    <PaymentContext.Provider value={value}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="pay-title"
            className="glass relative w-full max-w-md bg-[#0a0a0c] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              <X size={20} />
            </button>
            <h2 id="pay-title" className="flex items-center gap-2 text-xl font-semibold">
              <CreditCard className="text-emerald-400" size={20} /> Make a payment
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Pay advances, retainers or milestone fees securely through Razorpay with UPI, NetBanking or card.
            </p>

            {status === 'paid' ? (
              <p className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                Payment submitted. Thank you! I&apos;ll confirm it and be in touch shortly.
              </p>
            ) : payment.paymentPageUrl ? (
              <a
                href={payment.paymentPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950"
              >
                <Lock size={16} /> Continue to secure checkout
              </a>
            ) : payment.keyId ? (
              <div className="mt-6 space-y-3">
                <label className="block text-sm text-zinc-300">
                  Your name (optional)
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 outline-none focus:border-cyan-500"
                  />
                </label>
                <label className="block text-sm text-zinc-300">
                  Amount (₹)
                  <input
                    inputMode="numeric"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ''))}
                    className="mt-1 w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 outline-none focus:border-cyan-500"
                  />
                </label>
                <button
                  type="button"
                  disabled={!canCheckout || status === 'loading'}
                  onClick={startCheckout}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 disabled:opacity-50"
                >
                  <Lock size={16} /> {status === 'loading' ? 'Opening…' : 'Pay securely'}
                </button>
                {status === 'error' && (
                  <p className="text-xs text-amber-400">Couldn&apos;t load checkout. Check your connection and retry.</p>
                )}
              </div>
            ) : (
              <a
                href={waLink('Hi Ajith, please share a payment link for my project advance.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm font-semibold"
              >
                <MessageCircle size={16} /> Request a payment link
              </a>
            )}
            <p className="mt-4 flex items-center gap-1.5 text-xs text-zinc-500">
              <Lock size={12} /> Processed by Razorpay. Card and UPI details never touch this site.
              {!isPaymentConfigured && ' Online payments are being set up.'}
            </p>
          </div>
        </div>
      )}
    </PaymentContext.Provider>
  )
}
