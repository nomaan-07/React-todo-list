import Button from './Button';
import FilterSelect from './FilterSelect';

export default function Buttons({
  onToggleForm,
  isFormOpen,
  sortBy,
  onSortTasks,
}) {
  return (
    <div className="buttons">
      <Button
        bgColorClass={isFormOpen ? 'pink' : 'green'}
        onClick={onToggleForm}
      >
        {isFormOpen ? 'Close Form' : 'Add New'}
      </Button>
      <Button bgColorClass="pink">Clear List</Button>
      <FilterSelect sortBy={sortBy} onSortTasks={onSortTasks} />
    </div>
  );
}
