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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4" onClick={onClose}>
      <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-sm space-y-5" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-white font-bold text-lg">Settings</h2>

        <div className="space-y-3">
          <p className="text-white/50 text-xs uppercase tracking-widest">Timer (minutes)</p>
          {[
            { label: 'Focus', key: 'focusDuration' },
            { label: 'Short Break', key: 'shortBreakDuration' },
            { label: 'Long Break', key: 'longBreakDuration' },
          ].map(({ label, key }) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-white/70 text-sm">{label}</span>
              <input
                type="number" min={1} max={60}
                value={(form[key as keyof TimerSettings] as number) / 60}
                onChange={(e) => setForm({ ...form, [key]: Number(e.target.value) * 60 })}
                className="w-16 bg-white/10 text-white text-center rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:bg-white/20"
              />
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-white/50 text-xs uppercase tracking-widest">Auto Start</p>
          {[
            { label: 'Auto start breaks', key: 'autoStartBreaks' },
            { label: 'Auto start pomodoros', key: 'autoStartPomodoros' },
          ].map(({ label, key }) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-white/70 text-sm">{label}</span>
              <button
                onClick={() => setForm({ ...form, [key]: !form[key as keyof TimerSettings] })}
                className={`w-10 h-6 rounded-full transition-all ${
                  form[key as keyof TimerSettings] ? 'bg-white' : 'bg-white/20'
                }`}
              >
                <span className={`block w-4 h-4 bg-gray-800 rounded-full transition-transform mx-auto ${
                  form[key as keyof TimerSettings] ? 'translate-x-2' : '-translate-x-2'
                }`} />
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-2 pt-1">
          <button onClick={onClose} className="flex-1 py-2 rounded-lg bg-white/10 text-white/70 text-sm hover:bg-white/20 transition-all">Cancel</button>
          <button onClick={handleSave} className="flex-1 py-2 rounded-lg bg-white text-gray-900 font-semibold text-sm hover:bg-white/90 transition-all">Save</button>
        </div>
      </div>
    </div>
  );
}
