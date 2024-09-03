import Button from './Button';

export default function Form() {
  return (
    <form>
      <label>Task</label>
      <input type="text" placeholder="Your task ..." />

      <Button bgColorClass="green">Add task</Button>
    </form>
  );
}
