import { useState } from 'react';
import Buttons from './Buttons';
import Form from './Form';
import TodoList from './TodoList';

export default function Main() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleToggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  return (
    <main>
      <Buttons onToggleForm={handleToggleForm} isFormOpen={isFormOpen} />
      {isFormOpen && <Form />}
      <TodoList />
    </main>
  );
}
