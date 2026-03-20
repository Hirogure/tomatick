'use client';
import { useState } from 'react';
import { useTimerContext } from '@/contexts/TimerContext';
import { MODE_COLORS } from '@/lib/constants';
import ModeSelector from './ModeSelector';
import TimerDisplay from './TimerDisplay';
import Controls from './Controls';
import TaskList from './TaskList';
import Settings from './Settings';

export default function Timer() {
  const { mode, pomodoroCount } = useTimerContext();
  const [showSettings, setShowSettings] = useState(false);
  const bgColor = MODE_COLORS[mode];

  return (
    <div
      className="min-h-screen flex flex-col items-center transition-colors duration-700"
      style={{ backgroundColor: bgColor }}
    >
      {/* ヘッダー */}
      <div className="w-full flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍅</span>
          <span className="text-xl font-bold text-white tracking-tight">tomatick</span>
        </div>
        <button
          onClick={() => setShowSettings(true)}
          className="text-white/70 hover:text-white transition-colors text-xl"
          aria-label="Settings"
        >
          ⚙
        </button>
      </div>

      {/* メインコンテンツ */}
      <div className="flex flex-col items-center gap-8 pt-8 pb-16 px-4 w-full max-w-md">
        <ModeSelector />
        <TimerDisplay />
        <Controls />
        <p className="text-white/60 text-sm">
          #{pomodoroCount + 1} Pomodoro — Press <kbd className="bg-white/20 px-1.5 py-0.5 rounded text-xs">Space</kbd> to start
        </p>
        <TaskList />
      </div>

      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </div>
  );
}
