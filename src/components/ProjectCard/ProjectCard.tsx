import './ProjectCard.css';
// Tarjeta de un proyecto del portafolio. Recibe un objeto `project`.
export default function ProjectCard({ project }) {
  return (
    <div className="proj-card">
      <span className={`proj-cat ${project.cat}`}>{project.catLabel}</span>
      <div className="proj-title">{project.title}</div>
      <p className="proj-desc">{project.desc}</p>
    </div>
  )
}
