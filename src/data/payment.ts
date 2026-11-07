// Razorpay configuration. Only PUBLIC values go here, never the Key Secret.
//
// Option A (recommended): a hosted Payment Page / Payment Link, e.g. https://pages.razorpay.com/your-page
//   Clients pay by UPI, NetBanking or card on Razorpay's own page.
// Option B: a Razorpay Key ID (rzp_live_... or rzp_test_...). The modal then opens Razorpay Checkout
//   for an amount the client enters. Without a backend, payments are not signature-verified,
//   so confirm each one in your Razorpay dashboard.
//
// If both are set, the Payment Page link wins.
export const payment: {
  paymentPageUrl: string
  keyId: string
  qrImage: string
  businessName: string
  description: string
  themeColor: string
} = {
  paymentPageUrl: 'https://razorpay.me/@ajithreddy',
  keyId: '',
  // Razorpay UPI QR, served from public/assets. Empty string hides it.
  qrImage: 'assets/payment-qr.png',
  businessName: 'Ajith Reddy',
  description: 'Project advance / milestone payment',
  themeColor: '#10b981',
}

export const isPaymentConfigured = payment.paymentPageUrl !== '' || payment.keyId !== ''
