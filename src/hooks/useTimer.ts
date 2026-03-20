'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { TimerMode, TimerSettings } from '@/lib/types';
import { DEFAULT_SETTINGS, MODES } from '@/lib/constants';

function playBeep() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(660, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.6);
  } catch {
    // 非対応環境では無視
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

  // stale closure を避けるためにrefで最新値を保持
  const modeRef = useRef(mode);
  const pomodoroCountRef = useRef(pomodoroCount);
  const settingsRef = useRef(settings);
  const isRunningRef = useRef(isRunning);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => { modeRef.current = mode; }, [mode]);
  useEffect(() => { pomodoroCountRef.current = pomodoroCount; }, [pomodoroCount]);
  useEffect(() => { settingsRef.current = settings; }, [settings]);
  useEffect(() => { isRunningRef.current = isRunning; }, [isRunning]);

  const getDuration = useCallback((m: TimerMode) => {
    const s = settingsRef.current;
    if (m === MODES.FOCUS) return s.focusDuration;
    if (m === MODES.SHORT_BREAK) return s.shortBreakDuration;
    return s.longBreakDuration;
  }, []);

  // モード切替時にリセット
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeLeft(getDuration(mode));
    setIsRunning(false);
  }, [mode, getDuration]);

  // セッション終了処理（refで最新値を参照するので stale 問題なし）
  const handleSessionEnd = useCallback(() => {
    playBeep();
    const currentMode = modeRef.current;
    const count = pomodoroCountRef.current;
    const s = settingsRef.current;

    if (currentMode === MODES.FOCUS) {
      const newCount = count + 1;
      setPomodoroCount(newCount);
      pomodoroCountRef.current = newCount;
      const nextMode = newCount % s.longBreakInterval === 0 ? MODES.LONG_BREAK : MODES.SHORT_BREAK;
      sendNotification('Focus session complete! 🍅', `Time for a ${nextMode === MODES.LONG_BREAK ? 'Long Break' : 'Short Break'}.`);
      setTimeout(() => {
        setMode(nextMode);
        if (s.autoStartBreaks) setTimeout(() => setIsRunning(true), 300);
      }, 500);
    } else {
      sendNotification('Break time over! ⏰', 'Ready to focus again?');
      setTimeout(() => {
        setMode(MODES.FOCUS);
        if (s.autoStartPomodoros) setTimeout(() => setIsRunning(true), 300);
      }, 500);
    }
  }, []);

  // タイマーのカウントダウン
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
          handleSessionEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning, handleSessionEnd]);

  // ブラウザタブにタイム表示
  useEffect(() => {
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');
    const label = mode === MODES.FOCUS ? 'Focus' : mode === MODES.SHORT_BREAK ? 'Short Break' : 'Long Break';
    document.title = isRunning
      ? `${mins}:${secs} - ${label} | Tomatick`
      : 'Tomatick - Pomodoro Timer';
  }, [timeLeft, isRunning, mode]);

  // 通知許可リクエスト
  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(getDuration(modeRef.current));
  }, [getDuration]);
  const switchMode = useCallback((m: TimerMode) => setMode(m), []);
  const progress = 1 - timeLeft / getDuration(mode);

  return { mode, timeLeft, isRunning, pomodoroCount, progress, start, pause, reset, switchMode };
}
