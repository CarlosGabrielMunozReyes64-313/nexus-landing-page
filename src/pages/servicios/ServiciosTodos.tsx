import EjesList from '../../components/EjesList/EjesList';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Carousel from '../../components/Carousel/Carousel';
import { PROJECTS } from '../../data/siteData';

// Vista "Todos los Servicios": visión general con los cuatro ejes y el
// catálogo de servicios por línea de trabajo.
export default function ServiciosTodos() {
  return (
    <>
      <EjesList />

      {/* Servicios por línea de trabajo */}
      <section className="alt">
        <div className="section-inner">
          <div className="section-tag">Nuestros Servicios</div>
          <h2 className="section-title">Soluciones especializadas por línea de trabajo</h2>
          <p className="section-body" style={{ marginBottom: '2rem' }}>
            Articulamos ciencia, gestión territorial y alianzas estratégicas en resultados
            medibles para cada desafío.
          </p>
          <Carousel minSlide={280} ariaLabel="Servicios de NEXUS">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}
