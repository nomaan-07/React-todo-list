export default function Stats({ tasks }) {
  const tasksCount = tasks?.length ? tasks.length : null;
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <footer>
      {tasksCount ? (
        <p>
          You Added {tasks.length} tasks and{' '}
          {completedCount > 0
            ? `${completedCount} (${Math.round(
                (completedCount / tasks.length) * 100
              )}%)`
            : 'none'}{' '}
          of them are completed.
        </p>
      ) : (
        <p>↖️ Try to add a new task 😉</p>
      )}
    </footer>
  );
}
