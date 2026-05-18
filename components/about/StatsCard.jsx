export default function StatsCard({ number, label }) {
  return (
    <div className="stats-card">
      <h3>{number}</h3>
      <p>{label}</p>
    </div>
  );
}