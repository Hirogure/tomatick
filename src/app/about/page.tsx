import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is the Pomodoro Technique? | Tomatick",
  description: "Learn how the Pomodoro Technique works and how Tomatick helps you stay focused. A simple 25/5 minute time management method used by millions.",
  openGraph: {
    title: "What is the Pomodoro Technique? | Tomatick",
    description: "Learn how the Pomodoro Technique works and how to use it to boost focus and productivity.",
    url: "https://tomatick.app/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is the Pomodoro Technique?",
  description: "A guide to the Pomodoro Technique time management method and how to use it effectively.",
  url: "https://tomatick.app/about",
  author: { "@type": "Organization", name: "Tomatick" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-2xl mx-auto px-6 py-12 space-y-10">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
          ← Back to Timer
        </Link>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🍅</span>
            <h1 className="text-4xl font-bold">What is the Pomodoro Technique?</h1>
          </div>
          <p className="text-white/60 text-lg leading-relaxed">
            The Pomodoro Technique is a proven time management method that helps you work with your
            brain instead of against it — breaking work into focused intervals separated by short breaks.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="space-y-3">
            {[
              { step: "1", title: "Pick a task", desc: "Choose one task you want to work on. Add it to your task list." },
              { step: "2", title: "Set the timer for 25 minutes", desc: "One 25-minute block is called a 'Pomodoro'. Click Start and focus until the bell rings." },
              { step: "3", title: "Work until the timer goes off", desc: "Avoid all distractions. If something comes up, write it down and get back to work." },
              { step: "4", title: "Take a 5-minute break", desc: "Step away from your screen. Stretch, breathe, grab water — rest your brain." },
              { step: "5", title: "Repeat — every 4 rounds, take a longer break", desc: "After 4 Pomodoros, reward yourself with a 15–30 minute break." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-colors">
                <span className="text-2xl font-bold text-white/30 w-8 flex-shrink-0">{step}</span>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-white/60 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🧠", title: "Fights procrastination", desc: "Starting is easier when you only commit to 25 minutes." },
              { icon: "⚡", title: "Reduces mental fatigue", desc: "Regular breaks keep your brain fresh and sharp." },
              { icon: "📊", title: "Makes progress visible", desc: "Counting Pomodoros gives you a sense of accomplishment." },
              { icon: "🎯", title: "Improves focus", desc: "Single-tasking beats multitasking every time." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-4 rounded-xl bg-white/5">
                <p className="text-2xl mb-2">{icon}</p>
                <p className="font-semibold text-white">{title}</p>
                <p className="text-white/60 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          {[
            {
              q: "Can I change the timer durations?",
              a: "Yes! Click the ⚙ settings icon on the timer to customize focus, short break, and long break durations.",
            },
            {
              q: "Do I need to create an account?",
              a: "No. Tomatick is completely free and requires no sign-up. Your tasks and settings are saved locally in your browser.",
            },
            {
              q: "What if I get interrupted during a Pomodoro?",
              a: "If an unavoidable interruption occurs, pause the timer. If it's minor, note it down and stay focused. Short interruptions are okay — long ones mean you should restart the Pomodoro.",
            },
            {
              q: "How many Pomodoros should I do per day?",
              a: "Most people aim for 8–12 Pomodoros per day. Start with what feels sustainable and adjust from there.",
            },
          ].map(({ q, a }) => (
            <details key={q} className="group p-4 rounded-xl bg-white/5 cursor-pointer">
              <summary className="font-medium text-white list-none flex justify-between items-center">
                {q}
                <span className="text-white/40 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="text-white/60 text-sm mt-3 leading-relaxed">{a}</p>
            </details>
          ))}
        </section>

        <div className="pt-4 text-center">
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-full transition-colors text-lg"
          >
            Start Your First Pomodoro →
          </Link>
        </div>

        <footer className="pt-6 border-t border-white/10 text-center text-white/30 text-xs">
          © 2026 Tomatick · Free online Pomodoro timer
        </footer>
      </div>
    </div>
  );
}
