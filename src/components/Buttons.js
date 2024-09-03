import Button from './Button';
import FilterSelect from './FilterSelect';

export default function Buttons() {
  return (
    <div className="buttons">
      <Button bgColorClass="green">Add new</Button>
      <Button bgColorClass="pink">Clear List</Button>
      <FilterSelect />
    </div>
  );
}
