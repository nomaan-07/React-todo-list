import { useState } from 'react';
import Button from './Button';

export default function Form({ onAddTask }) {
  const [task, setTask] = useState('');

  function handleAddTask(e) {
    e.preventDefault();

    if (!task.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      task,
      completed: false,
    };

    setTask('');
    onAddTask(newTask);
  }

  return (
    <form>
      <label>Task</label>
      <input
        autoFocus
        type="text"
        placeholder="Your task ..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <Button onClick={handleAddTask} bgColorClass="green">
        Add task
      </Button>
    </form>
  );
}
