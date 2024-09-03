export default function FilterSelect({ sortBy, onSortTasks }) {
  return (
    <div className="select-wrapper">
      <label>Filter: </label>
      <select value={sortBy} onChange={(e) => onSortTasks(e.target.value)}>
        <option value="default">all</option>
        <option value="todo">todo</option>
        <option value="completed">completed</option>
      </select>
    </div>
  );
}
