import Header from './Header';
import Main from './Main';
import Stats from './Stats';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [sortBy, setSortBy] = useState('default');

  let sortedTasks;

  if (sortBy === 'default') sortedTasks = tasks;

  if (sortBy === 'completed')
    sortedTasks = tasks.slice().sort((a, b) => b.completed - a.completed);

  if (sortBy === 'todo')
    sortedTasks = tasks.slice().sort((a, b) => a.completed - b.completed);

  return (
    <>
      <Header />
      <Main
        tasks={sortedTasks}
        onSetTasks={setTasks}
        sortBy={sortBy}
        onSortTasks={setSortBy}
      />
      <Stats tasks={tasks} />
    </>
  );
}
