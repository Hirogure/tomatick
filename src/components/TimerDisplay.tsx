'use client';
import { useTimerContext } from '@/contexts/TimerContext';

const SIZE = 280;
const STROKE = 12;
const R = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * R;

export default function TimerDisplay() {
  const { timeLeft, progress, isRunning } = useTimerContext();
  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');
  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: SIZE, height: SIZE }}
    >
      {/* 外側のグロー */}
      {isRunning && (
        <div
          className="absolute rounded-full animate-pulse"
          style={{
            width: SIZE + 20,
            height: SIZE + 20,
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          }}
        />
      )}

      <svg width={SIZE} height={SIZE} className="absolute -rotate-90">
        {/* 背景リング */}
        <circle
          cx={SIZE / 2} cy={SIZE / 2} r={R}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={STROKE}
          fill="none"
        />
        {/* プログレスリング */}
        <circle
          cx={SIZE / 2} cy={SIZE / 2} r={R}
          stroke="rgba(255,255,255,0.9)"
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>

      {/* タイム表示 */}
      <div className="flex flex-col items-center gap-1">
        <span
          className="font-bold text-white tabular-nums"
          style={{ fontSize: 72, lineHeight: 1, letterSpacing: '-0.03em', fontFamily: 'monospace' }}
        >
          {mins}:{secs}
        </span>
      </div>
    </div>
  );
}
