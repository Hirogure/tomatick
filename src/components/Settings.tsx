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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-gray-900 rounded-2xl p-6 w-80 space-y-4" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-white font-bold text-lg">Settings</h2>
        {[
          { label: 'Focus (min)', key: 'focusDuration' },
          { label: 'Short Break (min)', key: 'shortBreakDuration' },
          { label: 'Long Break (min)', key: 'longBreakDuration' },
        ].map(({ label, key }) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-white/70 text-sm">{label}</span>
            <input
              type="number"
              min={1} max={60}
              value={form[key as keyof TimerSettings] as number / 60}
              onChange={(e) => setForm({ ...form, [key]: Number(e.target.value) * 60 })}
              className="w-16 bg-white/10 text-white text-center rounded-lg px-2 py-1 text-sm"
            />
          </div>
        ))}
        <div className="flex gap-2 pt-2">
          <button onClick={onClose} className="flex-1 py-2 rounded-lg bg-white/10 text-white/70 text-sm">Cancel</button>
          <button onClick={handleSave} className="flex-1 py-2 rounded-lg bg-white text-gray-900 font-semibold text-sm">Save</button>
        </div>
      </div>
    </div>
  );
}
