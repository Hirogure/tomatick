'use client';
import { useTimerContext } from '@/contexts/TimerContext';

const SIZE = 280;
const STROKE = 10;
const R = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * R;

export default function TimerDisplay() {
  const { timeLeft, progress } = useTimerContext();
  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');
  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <div className="relative flex items-center justify-center" style={{ width: SIZE, height: SIZE }}>
      <svg width={SIZE} height={SIZE} className="absolute -rotate-90">
        <circle cx={SIZE / 2} cy={SIZE / 2} r={R} stroke="rgba(255,255,255,0.2)" strokeWidth={STROKE} fill="none" />
        <circle
          cx={SIZE / 2} cy={SIZE / 2} r={R}
          stroke="white" strokeWidth={STROKE} fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
      <span className="text-7xl font-mono font-bold text-white tracking-tight">
        {mins}:{secs}
      </span>
    </div>
  );
}
