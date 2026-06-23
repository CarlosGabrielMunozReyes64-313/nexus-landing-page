import './ProjectCard.css';
// Tarjeta de un proyecto del portafolio. Recibe un objeto `project`.
export default function ProjectCard({ project }) {
  return (
    <div className="proj-card">
      {project.image && (
        <div className={`proj-media ${project.cat}`}>
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>
      )}
      <div className="proj-body">
        <span className={`proj-cat ${project.cat}`}>{project.catLabel}</span>
        <div className="proj-title">{project.title}</div>
        <p className="proj-desc">{project.desc}</p>
      </div>
    </div>
  );
}
