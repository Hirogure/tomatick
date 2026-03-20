'use client';
import { useState } from 'react';
import { useTimerContext } from '@/contexts/TimerContext';
import { useTheme } from '@/contexts/ThemeContext';
import { MODE_COLORS, MODES } from '@/lib/constants';
import ModeSelector from './ModeSelector';
import TimerDisplay from './TimerDisplay';
import Controls from './Controls';
import TaskList from './TaskList';
import Settings from './Settings';

// ライトモード時の明るい背景色
const LIGHT_COLORS = {
  focus: '#d4605e',
  shortBreak: '#4a9fa5',
  longBreak: '#4e87b8',
};

export default function Timer() {
  const { mode, pomodoroCount, settings } = useTimerContext();
  const { theme, toggleTheme } = useTheme();
  const [showSettings, setShowSettings] = useState(false);

  const colors = theme === 'dark' ? MODE_COLORS : LIGHT_COLORS;
  const bgColor = colors[mode];
  const sessionInCycle = pomodoroCount % settings.longBreakInterval;

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-700"
      style={{ backgroundColor: bgColor }}
    >
      {/* ヘッダー */}
      <header className="flex items-center justify-between px-5 py-4 max-w-md mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="text-2xl select-none">🍅</span>
          <span className="text-xl font-bold text-white tracking-tight">tomatick</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all flex items-center justify-center text-base"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all flex items-center justify-center text-base"
            aria-label="Settings"
          >
            ⚙
          </button>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex flex-col items-center gap-6 px-4 pt-4 pb-12 w-full max-w-md mx-auto flex-1">
        <ModeSelector />
        <TimerDisplay />
        <Controls />

        {/* セッションドットインジケーター */}
        <div className="flex items-center gap-2">
          {Array.from({ length: settings.longBreakInterval }).map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-500 ${
                i < sessionInCycle
                  ? 'w-3 h-3 bg-white'
                  : 'w-2.5 h-2.5 bg-white/30'
              }`}
            />
          ))}
          <span className="text-white/60 text-xs ml-1">
            {mode === MODES.FOCUS
              ? `Session ${sessionInCycle + 1} of ${settings.longBreakInterval}`
              : 'Break time 😌'}
          </span>
        </div>

        <p className="text-white/40 text-xs tracking-wide">
          <kbd className="bg-white/15 px-1.5 py-0.5 rounded font-mono">Space</kbd> to start / pause
        </p>

        {/* タスクリスト */}
        <div className="w-full border-t border-white/20 pt-5 mt-1">
          <TaskList />
        </div>
      </main>

      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </div>
  );
}
