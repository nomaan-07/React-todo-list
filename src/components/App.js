import Header from './Header';
import Main from './Main';
import Stats from './Stats';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <Header />
      <Main tasks={tasks} onSetTasks={setTasks} />
      <Stats tasks={tasks} />
    </>
  );
}
