import { useState } from 'react';
import Buttons from './Buttons';
import Form from './Form';
import TodoList from './TodoList';

export default function Main({ tasks, onSetTasks, sortBy, onSortTasks }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleToggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  function handleAddTask(newTask) {
    onSetTasks((tasks) => [...tasks, newTask]);
    setIsFormOpen(false);
  }

  function handleDeleteTask(id) {
    onSetTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleCompleteTask(id) {
    onSetTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <main>
      <Buttons
        onToggleForm={handleToggleForm}
        isFormOpen={isFormOpen}
        sortBy={sortBy}
        onSortTasks={onSortTasks}
      />
      {isFormOpen && <Form onAddTask={handleAddTask} />}
      {tasks.length > 0 ? (
        <TodoList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onCompleteTask={handleCompleteTask}
          sortBy={sortBy}
        />
      ) : (
        <div></div>
      )}
    </main>
  );
}
