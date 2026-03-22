import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Tomatick',
  description: 'Privacy Policy for Tomatick - Online Pomodoro Timer. Learn how we collect, use, and protect your information.',
  openGraph: {
    title: 'Privacy Policy | Tomatick',
    description: 'Privacy Policy for Tomatick - Online Pomodoro Timer.',
    url: 'https://tomatick.app/privacy',
    siteName: 'Tomatick',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
          ← Back to Timer
        </Link>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: March 23, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="text-white/70 leading-relaxed">
            Welcome to Tomatick (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Tomatick is a free online Pomodoro timer application designed to help you stay focused and productive. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our service at tomatick.app.
          </p>
          <p className="text-white/70 leading-relaxed">
            By using Tomatick, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p className="text-white/70 leading-relaxed">We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2 text-white/70 leading-relaxed ml-2">
            <li><strong className="text-white">Usage Data:</strong> Information about how you interact with the app, including session duration, timer completions, and feature usage.</li>
            <li><strong className="text-white">Device Information:</strong> Browser type, operating system, and IP address for analytics purposes.</li>
            <li><strong className="text-white">Local Storage Data:</strong> Your tasks, settings, and preferences are stored locally in your browser. We do not transmit this data to our servers.</li>
            <li><strong className="text-white">Account Information (Pro users):</strong> If you sign up for a Pro subscription, we collect your email address and billing information through our payment processor.</li>
            <li><strong className="text-white">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience and serve relevant advertisements.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <p className="text-white/70 leading-relaxed">We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 text-white/70 leading-relaxed ml-2">
            <li>Provide, maintain, and improve the Tomatick service</li>
            <li>Process Pro subscription payments and manage your account</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Display relevant advertisements via Google AdSense</li>
            <li>Send service-related communications (account updates, policy changes)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">4. Google AdSense and Advertising</h2>
          <p className="text-white/70 leading-relaxed">
            We use Google AdSense to display advertisements on Tomatick. Google AdSense uses cookies to serve ads based on your prior visits to this website or other websites. These cookies allow Google and its partners to serve ads based on your visits to our site and/or other sites on the Internet.
          </p>
          <p className="text-white/70 leading-relaxed">
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to Tomatick and/or other sites on the Internet. You may opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline">
              Google&apos;s Ads Settings
            </a>.
          </p>
          <p className="text-white/70 leading-relaxed">
            Google AdSense also uses DoubleClick cookies to measure conversions and serve ads based on previous visits. You can learn more about how Google uses data at{' '}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline">
              How Google uses data when you use our partners&apos; sites or apps
            </a>.
          </p>
          <p className="text-white/70 leading-relaxed">
            Pro subscribers enjoy an ad-free experience and are not served advertisements through Google AdSense.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">5. Third-Party Services</h2>
          <p className="text-white/70 leading-relaxed">We may use the following third-party services:</p>
          <ul className="list-disc list-inside space-y-2 text-white/70 leading-relaxed ml-2">
            <li><strong className="text-white">Google AdSense:</strong> Advertising. Subject to Google&apos;s Privacy Policy.</li>
            <li><strong className="text-white">Google Analytics:</strong> Website analytics to understand user behavior. Subject to Google&apos;s Privacy Policy.</li>
            <li><strong className="text-white">Stripe:</strong> Payment processing for Pro subscriptions. Subject to Stripe&apos;s Privacy Policy. We do not store your payment card details.</li>
            <li><strong className="text-white">Vercel:</strong> Hosting and infrastructure. Subject to Vercel&apos;s Privacy Policy.</li>
          </ul>
          <p className="text-white/70 leading-relaxed">
            These third parties have their own privacy policies governing their use of your information. We encourage you to review them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">6. Data Retention</h2>
          <p className="text-white/70 leading-relaxed">
            Data stored in your browser (tasks, settings) persists until you clear your browser data. For Pro accounts, we retain your account information for as long as your account is active. Upon account deletion, we will remove your personal data within 30 days, except where retention is required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">7. Your Rights</h2>
          <p className="text-white/70 leading-relaxed">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside space-y-2 text-white/70 leading-relaxed ml-2">
            <li><strong className="text-white">Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong className="text-white">Correction:</strong> Request correction of inaccurate personal data.</li>
            <li><strong className="text-white">Deletion:</strong> Request deletion of your personal data.</li>
            <li><strong className="text-white">Opt-out:</strong> Opt out of personalized advertising at any time.</li>
            <li><strong className="text-white">Portability:</strong> Request transfer of your data in a machine-readable format.</li>
          </ul>
          <p className="text-white/70 leading-relaxed">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:support@tomatick.app" className="text-red-400 hover:text-red-300 underline">support@tomatick.app</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">8. Cookies</h2>
          <p className="text-white/70 leading-relaxed">
            Tomatick uses the following types of cookies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 leading-relaxed ml-2">
            <li><strong className="text-white">Essential Cookies:</strong> Required for the app to function properly.</li>
            <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how users interact with our service (Google Analytics).</li>
            <li><strong className="text-white">Advertising Cookies:</strong> Used by Google AdSense to deliver relevant advertisements.</li>
          </ul>
          <p className="text-white/70 leading-relaxed">
            You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of the service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">9. Children&apos;s Privacy</h2>
          <p className="text-white/70 leading-relaxed">
            Tomatick is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at{' '}
            <a href="mailto:support@tomatick.app" className="text-red-400 hover:text-red-300 underline">support@tomatick.app</a>{' '}
            and we will take steps to remove that information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">10. Changes to This Policy</h2>
          <p className="text-white/70 leading-relaxed">
            We may update this Privacy Policy from time to time. When we make changes, we will update the &quot;Last updated&quot; date at the top of this page. For significant changes, we may notify Pro users via email. Your continued use of Tomatick after any changes constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">11. Contact Us</h2>
          <p className="text-white/70 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us:
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
