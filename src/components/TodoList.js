import TodoItem from './TodoItem';

export default function TodoList({
  tasks,
  onDeleteTask,
  onCompleteTask,
  sortBy,
}) {
  return (
    <>
      <ul className="todo-list">
        <h2>{sortBy} order</h2>
        {tasks.map((task) => (
          <TodoItem
            task={task}
            onDeleteTask={onDeleteTask}
            onCompleteTask={onCompleteTask}
            key={task.id}
          />
        ))}
      </ul>
    </>
  );
}
