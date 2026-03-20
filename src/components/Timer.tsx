'use client';
import { useState } from 'react';
import { useTimerContext } from '@/contexts/TimerContext';
import { MODE_COLORS, MODES } from '@/lib/constants';
import ModeSelector from './ModeSelector';
import TimerDisplay from './TimerDisplay';
import Controls from './Controls';
import TaskList from './TaskList';
import Settings from './Settings';

export default function Timer() {
  const { mode, pomodoroCount, settings } = useTimerContext();
  const [showSettings, setShowSettings] = useState(false);
  const bgColor = MODE_COLORS[mode];
  const sessionInCycle = pomodoroCount % settings.longBreakInterval;

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-700"
      style={{ backgroundColor: bgColor }}
    >
      {/* ヘッダー */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl select-none">🍅</span>
          <span className="text-xl font-bold text-white tracking-tight">tomatick</span>
        </div>
        <button
          onClick={() => setShowSettings(true)}
          className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white text-lg transition-all flex items-center justify-center"
          aria-label="Settings"
        >
          ⚙
        </button>
      </header>

      {/* メインコンテンツ */}
      <main className="flex flex-col items-center gap-8 px-4 pt-6 pb-16 w-full max-w-md mx-auto flex-1">
        <ModeSelector />
        <TimerDisplay />
        <Controls />

        {/* セッションカウンター */}
        <div className="flex items-center gap-2">
          {Array.from({ length: settings.longBreakInterval }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i < sessionInCycle ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
          <span className="text-white/60 text-sm ml-2">
            {mode === MODES.FOCUS
              ? `${sessionInCycle + 1} / ${settings.longBreakInterval}`
              : 'Break time'}
          </span>
        </div>

        <p className="text-white/50 text-xs">
          Press <kbd className="bg-white/20 px-1.5 py-0.5 rounded font-mono text-white/70">Space</kbd> to start / pause
        </p>

        <div className="w-full border-t border-white/20 pt-6">
          <TaskList />
        </div>
      </main>

      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </div>
  );
}
