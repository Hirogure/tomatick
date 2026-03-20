'use client';
import { useState } from 'react';
import { useTimerContext } from '@/contexts/TimerContext';
import { TimerSettings } from '@/lib/types';

export default function Settings({ onClose }: { onClose: () => void }) {
  const { settings, updateSettings } = useTimerContext();
  const [form, setForm] = useState<TimerSettings>(settings);

  const handleSave = () => {
    updateSettings(form);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-white/10 rounded-3xl p-8 w-full max-w-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-white font-bold text-xl">Settings</h2>
            <p className="text-white/40 text-xs mt-0.5">Customize your timer</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all flex items-center justify-center text-lg"
          >
            ×
          </button>
        </div>

        {/* タイマー設定 */}
        <div className="mb-7">
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
            Timer Duration
          </p>
          <div className="space-y-2">
            {[
              { label: 'Focus', key: 'focusDuration', icon: '🍅' },
              { label: 'Short Break', key: 'shortBreakDuration', icon: '☕' },
              { label: 'Long Break', key: 'longBreakDuration', icon: '🌿' },
            ].map(({ label, key, icon }) => (
              <div
                key={key}
                className="flex items-center justify-between bg-white/5 hover:bg-white/8 rounded-2xl px-4 py-3 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{icon}</span>
                  <span className="text-white/80 text-sm font-medium">{label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const current = (form[key as keyof TimerSettings] as number) / 60;
                      if (current > 1) setForm({ ...form, [key]: (current - 1) * 60 });
                    }}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all flex items-center justify-center text-sm font-bold"
                  >
                    −
                  </button>
                  <span className="text-white font-bold text-sm w-8 text-center tabular-nums">
                    {(form[key as keyof TimerSettings] as number) / 60}
                  </span>
                  <button
                    onClick={() => {
                      const current = (form[key as keyof TimerSettings] as number) / 60;
                      if (current < 60) setForm({ ...form, [key]: (current + 1) * 60 });
                    }}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all flex items-center justify-center text-sm font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* オートスタート設定 */}
        <div className="mb-8">
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
            Auto Start
          </p>
          <div className="space-y-2">
            {[
              { label: 'Auto start breaks', sub: 'Start break timer automatically', key: 'autoStartBreaks' },
              { label: 'Auto start pomodoros', sub: 'Start focus timer automatically', key: 'autoStartPomodoros' },
            ].map(({ label, sub, key }) => {
              const isOn = form[key as keyof TimerSettings] as boolean;
              return (
                <div
                  key={key}
                  className="flex items-center justify-between bg-white/5 hover:bg-white/8 rounded-2xl px-4 py-3 transition-colors cursor-pointer"
                  onClick={() => setForm({ ...form, [key]: !isOn })}
                >
                  <div>
                    <p className="text-white/80 text-sm font-medium">{label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{sub}</p>
                  </div>
                  <div
                    className={`w-11 h-6 rounded-full transition-all duration-300 flex-shrink-0 ml-4 relative ${
                      isOn ? 'bg-white' : 'bg-white/20'
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-4 h-4 bg-gray-900 rounded-full transition-all duration-300 ${
                        isOn ? 'left-6' : 'left-1'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ボタン */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-2xl bg-white/8 text-white/60 hover:bg-white/15 hover:text-white text-sm font-medium transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 rounded-2xl bg-white text-gray-900 font-bold text-sm hover:bg-white/90 active:scale-95 transition-all"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
