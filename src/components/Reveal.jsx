import { useReveal } from "../hooks";

export default function Reveal({ children, className = "" }) {
  const [ref, shown] = useReveal();
  return <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`}>{children}</div>;
}
