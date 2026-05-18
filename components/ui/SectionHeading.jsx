export default function SectionHeading({ title, highlight, label }) {
  return (
    <div>
      <p className="orange-text">{label}</p>

      <h2 className="section-title">
        {title} <span className="orange-text">{highlight}</span>
      </h2>
    </div>
  );
}