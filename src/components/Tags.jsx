export default function Tags({ items, keyStyle = false }) {
  return (
    <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0 mt-2">
      {items.map((t) => <li key={t} className={`tag ${keyStyle ? "key" : ""}`}>{t}</li>)}
    </ul>
  );
}
