import TodoItem from './TodoItem';

export default function TodoList({ tasks, onDeleteTask, onCompleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          task={task}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
          key={task.id}
        />
      ))}
    </ul>
  );
}
