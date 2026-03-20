'use client';
import { Task } from '@/lib/types';
import { useTimerContext } from '@/contexts/TimerContext';

export default function TaskItem({ task }: { task: Task }) {
  const { toggleTask, deleteTask } = useTimerContext();

  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg bg-white/10 group ${task.completed ? 'opacity-60' : ''}`}>
      <button
        onClick={() => toggleTask(task.id)}
        className={`w-5 h-5 rounded-full border-2 border-white/60 flex items-center justify-center flex-shrink-0 transition-all ${
          task.completed ? 'bg-white border-white' : 'hover:border-white'
        }`}
      >
        {task.completed && <span className="text-current text-xs">✓</span>}
      </button>
      <span className={`flex-1 text-sm text-white ${task.completed ? 'line-through' : ''}`}>
        {task.title}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="opacity-0 group-hover:opacity-100 text-white/50 hover:text-white text-lg transition-all"
        aria-label="Delete task"
      >
        ×
      </button>
    </div>
  );
}
