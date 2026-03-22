import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact | Tomatick',
  description: 'Contact the Tomatick team. We\'d love to hear from you.',
  openGraph: {
    title: 'Contact | Tomatick',
    description: 'Get in touch with the Tomatick team.',
    url: 'https://tomatick.app/contact',
    siteName: 'Tomatick',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-10">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
          ← Back to Timer
        </Link>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Have a question, feedback, or need help? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✉️</span>
              <h2 className="text-xl font-semibold">Email</h2>
            </div>
            <p className="text-white/60 text-sm">For general inquiries, support, or feedback:</p>
            <a
              href="mailto:support@tomatick.app"
              className="text-red-400 hover:text-red-300 underline text-lg transition-colors"
            >
              support@tomatick.app
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🐛</span>
              <h2 className="text-xl font-semibold">Bug Reports & Feature Requests</h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Found a bug or have an idea for a new feature? Please email us with a detailed description and we&apos;ll look into it as soon as possible.
            </p>
            <a
              href="mailto:support@tomatick.app?subject=Bug%20Report"
              className="text-red-400 hover:text-red-300 underline transition-colors"
            >
              support@tomatick.app
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <h2 className="text-xl font-semibold">Billing & Pro Subscription</h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              For questions about your Pro subscription, billing, or cancellation, please email us with your account email address.
            </p>
            <a
              href="mailto:support@tomatick.app?subject=Billing%20Inquiry"
              className="text-red-400 hover:text-red-300 underline transition-colors"
            >
              support@tomatick.app
            </a>
          </div>
        </div>

        <div className="pt-4 space-y-2 text-white/40 text-sm">
          <p>We aim to respond to all inquiries within 2 business days.</p>
          <p>
            Operated by: Tomatick &mdash;{' '}
            <a href="https://tomatick.app" className="underline hover:text-white/60 transition-colors">
              tomatick.app
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
