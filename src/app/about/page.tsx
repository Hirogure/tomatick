import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is the Pomodoro Technique? | Tomatick",
  description: "Learn how the Pomodoro Technique can boost your focus and productivity. A simple time management method using 25-minute work sessions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <Link href="/" className="text-white/50 hover:text-white text-sm">← Back to Timer</Link>
        <h1 className="text-4xl font-bold">What is the Pomodoro Technique?</h1>
        <p className="text-white/70 leading-relaxed">
          The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
          It uses a timer to break work into intervals — traditionally 25 minutes in length — separated by short breaks.
        </p>
        <h2 className="text-2xl font-semibold">How it works</h2>
        <ol className="space-y-3 text-white/70">
          <li className="flex gap-3"><span className="text-white font-bold">1.</span> Choose a task you want to work on.</li>
          <li className="flex gap-3"><span className="text-white font-bold">2.</span> Set the timer for 25 minutes (one Pomodoro).</li>
          <li className="flex gap-3"><span className="text-white font-bold">3.</span> Work on the task until the timer rings.</li>
          <li className="flex gap-3"><span className="text-white font-bold">4.</span> Take a 5-minute short break.</li>
          <li className="flex gap-3"><span className="text-white font-bold">5.</span> After 4 Pomodoros, take a longer 15–30 minute break.</li>
        </ol>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Start Focusing Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
