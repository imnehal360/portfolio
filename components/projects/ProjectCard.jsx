export default function ProjectCard({
  title,
  description,
  techStack,
  github,
  live
}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={github}>GitHub</a>
        <a href={live}>Live</a>
      </div>
    </div>
  );
}