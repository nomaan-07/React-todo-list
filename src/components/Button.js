export default function Button({ bgColorClass, onClick, children }) {
  return (
    <button onClick={onClick} className={`btn ${bgColorClass}`}>
      {children}
    </button>
  );
}
