'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { TimerMode, TimerSettings } from '@/lib/types';
import { DEFAULT_SETTINGS, MODES } from '@/lib/constants';

export function useTimer(settings: TimerSettings = DEFAULT_SETTINGS) {
  const [mode, setMode] = useState<TimerMode>(MODES.FOCUS);
  const [timeLeft, setTimeLeft] = useState(settings.focusDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [pomodoroCount, setPomodorCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getDuration = useCallback((m: TimerMode) => {
    if (m === MODES.FOCUS) return settings.focusDuration;
    if (m === MODES.SHORT_BREAK) return settings.shortBreakDuration;
    return settings.longBreakDuration;
  }, [settings]);

  useEffect(() => {
    setTimeLeft(getDuration(mode));
    setIsRunning(false);
  }, [mode, getDuration]);

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          if (mode === MODES.FOCUS) {
            setPomodorCount((c) => c + 1);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning, mode]);

  // ブラウザタブにタイム表示
  useEffect(() => {
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');
    const label = mode === MODES.FOCUS ? 'Focus' : mode === MODES.SHORT_BREAK ? 'Short Break' : 'Long Break';
    document.title = isRunning ? `${mins}:${secs} - ${label} | Tomatick` : 'Tomatick - Pomodoro Timer';
  }, [timeLeft, isRunning, mode]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => { setIsRunning(false); setTimeLeft(getDuration(mode)); };
  const switchMode = (m: TimerMode) => setMode(m);

  const progress = 1 - timeLeft / getDuration(mode);

  return { mode, timeLeft, isRunning, pomodoroCount, progress, start, pause, reset, switchMode };
}
