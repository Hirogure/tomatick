'use client';
import { useState } from 'react';
import { useTimerContext } from '@/contexts/TimerContext';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks, addTask } = useTimerContext();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input.trim());
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-md space-y-3">
      <h2 className="text-white/80 text-sm font-semibold uppercase tracking-widest">Tasks</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Add a task..."
          className="flex-1 bg-white/10 text-white placeholder-white/40 rounded-lg px-4 py-2 text-sm outline-none focus:bg-white/20 transition-all"
        />
        <button
          onClick={handleAdd}
          className="bg-white/20 hover:bg-white/30 text-white rounded-lg px-4 py-2 text-sm font-medium transition-all"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {tasks.length === 0 && (
          <p className="text-white/40 text-sm text-center py-4">No tasks yet. Add one above!</p>
        )}
        {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </div>
    </div>
  );
}
