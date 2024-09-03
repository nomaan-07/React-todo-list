import Button from './Button';
import SortSelect from './SortSelect';

export default function Buttons({
  tasks,
  onToggleForm,
  isFormOpen,
  sortBy,
  onClearList,
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
      {tasks.length > 0 && (
        <>
          <Button bgColorClass="pink" onClick={onClearList}>
            Clear List
          </Button>
          <SortSelect sortBy={sortBy} onSortTasks={onSortTasks} />
        </>
      )}
    </div>
  );
}
