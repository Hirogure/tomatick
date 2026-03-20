'use client';
import { useEffect } from 'react';
import { useTimerContext } from '@/contexts/TimerContext';

export default function Controls() {
  const { isRunning, start, pause, reset } = useTimerContext();

  // キーボードショートカット: Space = Start/Pause
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        isRunning ? pause() : start();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isRunning, start, pause]);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={reset}
        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg transition-all"
        aria-label="Reset"
      >
        ↺
      </button>
      <button
        onClick={isRunning ? pause : start}
        className="w-20 h-20 rounded-full bg-white text-current text-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all"
      >
        {isRunning ? '⏸' : '▶'}
      </button>
      <div className="w-12 h-12" />
    </div>
  );
}
