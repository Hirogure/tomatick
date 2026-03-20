'use client';
import { createContext, useContext, ReactNode } from 'react';
import { useTimer } from '@/hooks/useTimer';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { TimerMode, Task, TimerSettings } from '@/lib/types';
import { DEFAULT_SETTINGS } from '@/lib/constants';

interface TimerContextType {
  mode: TimerMode;
  timeLeft: number;
  isRunning: boolean;
  pomodoroCount: number;
  progress: number;
  tasks: Task[];
  settings: TimerSettings;
  start: () => void;
  pause: () => void;
  reset: () => void;
  switchMode: (m: TimerMode) => void;
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateSettings: (s: TimerSettings) => void;
}

const TimerContext = createContext<TimerContextType | null>(null);

export function TimerProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useLocalStorage<TimerSettings>('tomatick-settings', DEFAULT_SETTINGS);
  const [tasks, setTasks] = useLocalStorage<Task[]>('tomatick-tasks', []);
  const timer = useTimer(settings);

  const addTask = (title: string) => {
    const task: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      estimatedPomodoros: 1,
      completedPomodoros: 0,
    };
    setTasks((prev) => [...prev, task]);
  };

  const toggleTask = (id: string) =>
    setTasks((prev) => prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTask = (id: string) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const updateSettings = (s: TimerSettings) => setSettings(s);

  return (
    <TimerContext.Provider value={{ ...timer, tasks, settings, addTask, toggleTask, deleteTask, updateSettings }}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimerContext() {
  const ctx = useContext(TimerContext);
  if (!ctx) throw new Error('useTimerContext must be used within TimerProvider');
  return ctx;
}
