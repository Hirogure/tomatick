import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use | Tomatick',
  description: 'Terms of Use for Tomatick - Online Pomodoro Timer. Read our terms and conditions for using the service.',
  openGraph: {
    title: 'Terms of Use | Tomatick',
    description: 'Terms of Use for Tomatick - Online Pomodoro Timer.',
    url: 'https://tomatick.app/terms',
    siteName: 'Tomatick',
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
          ← Back to Timer
        </Link>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Terms of Use</h1>
          <p className="text-white/50 text-sm">Last updated: March 23, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-white/70 leading-relaxed">
            By accessing or using Tomatick at tomatick.app (&quot;the Service&quot;), you agree to be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">2. Description of Service</h2>
          <p className="text-white/70 leading-relaxed">
            Tomatick is a free online Pomodoro timer web application designed to help individuals improve focus and productivity. The Service allows users to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 leading-relaxed ml-2">
            <li>Use a customizable Pomodoro-style timer (work and break intervals)</li>
            <li>Manage tasks and track completed Pomodoro sessions</li>
            <li>Customize timer settings (durations, sounds, themes)</li>
            <li>Access an ad-free experience with a Pro subscription</li>
          </ul>
          <p className="text-white/70 leading-relaxed">
            The Service is provided &quot;as is&quot; and may be updated, modified, or discontinued at any time without notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">3. User Accounts</h2>
          <p className="text-white/70 leading-relaxed">
            The basic features of Tomatick require no account. If you create an account for a Pro subscription, you are responsible for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 leading-relaxed ml-2">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Providing accurate and current information</li>
            <li>Notifying us immediately of any unauthorized use of your account</li>
          </ul>
          <p className="text-white/70 leading-relaxed">
            We reserve the right to terminate accounts that violate these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">4. Pro Subscription</h2>
          <p className="text-white/70 leading-relaxed">
            Tomatick offers a Pro subscription with the following terms:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 leading-relaxed ml-2">
            <li><strong className="text-white">Price:</strong> $1.99/month (USD), billed monthly</li>
            <li><strong className="text-white">Benefits:</strong> Ad-free experience and access to Pro features</li>
            <li><strong className="text-white">Payment:</strong> Processed securely via Stripe. We do not store your payment card details.</li>
            <li><strong className="text-white">Cancellation:</strong> You may cancel your Pro subscription at any time. Upon cancellation, your Pro access will continue until the end of the current billing period. No refunds are provided for partial months.</li>
            <li><strong className="text-white">Price Changes:</strong> We reserve the right to change subscription pricing with 30 days notice to active subscribers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">5. Prohibited Uses</h2>
          <p className="text-white/70 leading-relaxed">You agree not to use the Service to:</p>
          <ul className="list-disc list-inside space-y-2 text-white/70 leading-relaxed ml-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Attempt to reverse engineer, decompile, or disassemble any part of the Service</li>
            <li>Use automated scripts or bots to access the Service</li>
            <li>Interfere with or disrupt the integrity or performance of the Service</li>
            <li>Attempt to gain unauthorized access to the Service or its related systems</li>
            <li>Use the Service for any commercial purpose without our prior written consent</li>
            <li>Transmit any malware, viruses, or other harmful code</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
          <p className="text-white/70 leading-relaxed">
            The Service and its original content, features, and functionality are and will remain the exclusive property of Tomatick and its operators. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
          </p>
          <p className="text-white/70 leading-relaxed">
            The Pomodoro Technique® is a registered trademark of Francesco Cirillo. Tomatick is not affiliated with or endorsed by Francesco Cirillo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">7. Disclaimer of Warranties</h2>
          <p className="text-white/70 leading-relaxed">
            THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
          <p className="text-white/70 leading-relaxed">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TOMATICK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE SERVICE.
          </p>
          <p className="text-white/70 leading-relaxed">
            OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">9. Governing Law</h2>
          <p className="text-white/70 leading-relaxed">
            These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising under these Terms shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration or in a court of competent jurisdiction.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">10. Changes to Terms</h2>
          <p className="text-white/70 leading-relaxed">
            We reserve the right to modify these Terms at any time. When we make changes, we will update the &quot;Last updated&quot; date at the top of this page. For significant changes, we may notify Pro users via email. Your continued use of the Service after any changes constitutes your acceptance of the updated Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">11. Contact</h2>
          <p className="text-white/70 leading-relaxed">
            If you have any questions about these Terms, please contact us:
          </p>
          <p className="text-white/70">
            Email:{' '}
            <a href="mailto:support@tomatick.app" className="text-red-400 hover:text-red-300 underline">
              support@tomatick.app
            </a>
          </p>
          <p className="text-white/70">Website: <a href="https://tomatick.app" className="text-red-400 hover:text-red-300 underline">https://tomatick.app</a></p>
        </section>
      </div>
    </div>
  )
}
