import { useState } from 'react';
import Buttons from './Buttons';
import Form from './Form';
import TodoList from './TodoList';

export default function Main() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  function handleToggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  function handleAddTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
    setIsFormOpen(false);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleCompleteTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <main>
      <Buttons onToggleForm={handleToggleForm} isFormOpen={isFormOpen} />
      {isFormOpen && <Form onAddTask={handleAddTask} />}
      {tasks.length > 0 && (
        <TodoList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onCompleteTask={handleCompleteTask}
        />
      )}
    </main>
  );
}
