export default function Button({ bgColorClass, children }) {
  return <button className={`btn ${bgColorClass}`}>{children}</button>;
}
