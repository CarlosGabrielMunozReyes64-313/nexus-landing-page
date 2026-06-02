import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/siteData'

export default function Portafolio() {
  return (
    <>
      <Hero
        small
        tag="Resultados Medibles"
        title={
          <>
            Proyectos que <span>transforman realidades</span>
          </>
        }
      />

      <section>
        <div className="section-inner">
          <div className="section-tag">Portafolio de Experiencia</div>
          <h2 className="section-title">Evidencia de impacto en campo</h2>
          <p className="section-body" style={{ marginBottom: '3rem' }}>
            Cada proyecto es una demostración de nuestra capacidad para articular ciencia, gestión
            territorial y alianzas estratégicas en resultados concretos y medibles.
          </p>
          <div className="grid-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
