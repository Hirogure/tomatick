'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { TimerMode, TimerSettings } from '@/lib/types';
import { DEFAULT_SETTINGS, MODES } from '@/lib/constants';

function playBeep() {
  try {
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, ctx.currentTime);
    oscillator.frequency.setValueAtTime(660, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.6);
  } catch {
    // AudioContext非対応環境では無視
  }
}

function sendNotification(title: string, body: string) {
  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body, icon: '/favicon.ico' });
  }
}

export function useTimer(settings: TimerSettings = DEFAULT_SETTINGS) {
  const [mode, setMode] = useState<TimerMode>(MODES.FOCUS);
  const [timeLeft, setTimeLeft] = useState(settings.focusDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sessionEndedRef = useRef(false);

  const getDuration = useCallback((m: TimerMode) => {
    if (m === MODES.FOCUS) return settings.focusDuration;
    if (m === MODES.SHORT_BREAK) return settings.shortBreakDuration;
    return settings.longBreakDuration;
  }, [settings]);

  // モード切替時にタイマーリセット
  useEffect(() => {
    setTimeLeft(getDuration(mode));
    setIsRunning(false);
    sessionEndedRef.current = false;
  }, [mode, getDuration]);

  // セッション終了後の自動モード切替
  const handleSessionEnd = useCallback((currentMode: TimerMode, count: number) => {
    playBeep();

    if (currentMode === MODES.FOCUS) {
      const newCount = count + 1;
      setPomodoroCount(newCount);
      const nextMode = newCount % settings.longBreakInterval === 0
        ? MODES.LONG_BREAK
        : MODES.SHORT_BREAK;
      const label = nextMode === MODES.LONG_BREAK ? 'Long Break' : 'Short Break';
      sendNotification('Focus session complete! 🍅', `Time for a ${label}.`);
      setTimeout(() => {
        setMode(nextMode);
        if (settings.autoStartBreaks) setTimeout(() => setIsRunning(true), 300);
      }, 500);
    } else {
      sendNotification('Break time over! ⏰', 'Ready to focus again?');
      setTimeout(() => {
        setMode(MODES.FOCUS);
        if (settings.autoStartPomodoros) setTimeout(() => setIsRunning(true), 300);
      }, 500);
    }
  }, [settings]);

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    sessionEndedRef.current = false;
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          if (!sessionEndedRef.current) {
            sessionEndedRef.current = true;
            setPomodoroCount((c) => {
              handleSessionEnd(mode, c);
              return c;
            });
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning, mode, handleSessionEnd]);

  // ブラウザタブにタイム表示
  useEffect(() => {
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');
    const label = mode === MODES.FOCUS ? 'Focus' : mode === MODES.SHORT_BREAK ? 'Short Break' : 'Long Break';
    document.title = isRunning ? `${mins}:${secs} - ${label} | Tomatick` : 'Tomatick - Pomodoro Timer';
  }, [timeLeft, isRunning, mode]);

  // 通知許可のリクエスト
  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => { setIsRunning(false); setTimeLeft(getDuration(mode)); sessionEndedRef.current = false; };
  const switchMode = (m: TimerMode) => setMode(m);
  const progress = 1 - timeLeft / getDuration(mode);

  return { mode, timeLeft, isRunning, pomodoroCount, progress, start, pause, reset, switchMode };
}
