import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#BA4949] flex flex-col items-center justify-center text-white gap-6 px-4">
      <span className="text-8xl select-none">🍅</span>
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="text-white/70 text-lg">Looks like this Pomodoro got lost.</p>
      <Link
        href="/"
        className="bg-white text-[#BA4949] font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
      >
        Back to Timer
      </Link>
    </div>
  );
}
