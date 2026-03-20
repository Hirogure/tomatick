'use client';
import { useTimerContext } from '@/contexts/TimerContext';
import { TimerMode } from '@/lib/types';
import { MODES } from '@/lib/constants';

const TABS: { label: string; mode: TimerMode }[] = [
  { label: 'Focus', mode: MODES.FOCUS },
  { label: 'Short Break', mode: MODES.SHORT_BREAK },
  { label: 'Long Break', mode: MODES.LONG_BREAK },
];

export default function ModeSelector() {
  const { mode, switchMode } = useTimerContext();

  return (
    <div className="flex gap-1 bg-black/20 rounded-full p-1">
      {TABS.map((tab) => (
        <button
          key={tab.mode}
          onClick={() => switchMode(tab.mode)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            mode === tab.mode ? 'bg-white/30 text-white' : 'text-white/70 hover:text-white'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
