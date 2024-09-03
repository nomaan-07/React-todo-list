export default function FilterSelect() {
  return (
    <div className="select-wrapper">
      <label>Filter: </label>
      <select>
        <option value="default">default</option>
        <option value="default">todo</option>
        <option value="default">completed</option>
      </select>
    </div>
  );
}
