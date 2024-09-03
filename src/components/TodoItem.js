export default function TodoItem({ task, onDeleteTask, onCompleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        value={task.completed}
        onChange={() => onCompleteTask(task.id)}
      />
      <p className={task.completed ? 'completed' : ''}>{task.task}</p>
      <span onClick={() => onDeleteTask(task.id)}>❌</span>
    </li>
  );
}
