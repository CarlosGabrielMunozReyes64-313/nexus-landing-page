import './Portafolio.css';
import Hero from '../components/Hero/Hero';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { PROJECTS, CASE_STUDIES } from '../data/siteData';

// Pin de ubicación (SVG inline) para los casos de impacto.
function PinIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

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

      {/* Casos de impacto — clientes reales destacados */}
      <section>
        <div className="section-inner">
          <div className="section-tag">Casos de Impacto</div>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            Experiencia con clientes que confían en NEXUS
          </h2>
          <p className="section-body" style={{ marginBottom: '3rem' }}>
            Acompañamos a organizaciones e instituciones en proyectos de alto impacto, articulando
            ciencia, gestión territorial y estándares internacionales en resultados concretos y
            medibles.
          </p>

          <div className="case-list">
            {CASE_STUDIES.map((cs, i) => (
              <article className="case-card" key={cs.client + cs.title}>
                <div className="case-aside">
                  <div className="case-index">CASO {String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div className="case-client-label">Cliente</div>
                    <div className="case-client">{cs.client}</div>
                  </div>
                  <span className="case-year">{cs.year}</span>
                  <div className="case-locations">
                    <div className="case-loc-title">Territorios</div>
                    {cs.locations.map((loc) => (
                      <div className="case-loc-item" key={loc}>
                        <PinIcon />
                        <span>{loc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="case-body">
                  <span className="case-type">{cs.type}</span>
                  <h3 className="case-title">{cs.title}</h3>
                  <p className="case-desc">{cs.desc}</p>
                  <div className="case-tags">
                    {cs.tags.map((tag) => (
                      <span className="case-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Más del portafolio — proyectos por línea de trabajo */}
      <section className="alt">
        <div className="section-inner">
          <div className="section-tag">Más del Portafolio</div>
          <h2 className="section-title">Evidencia de impacto en campo</h2>
          <p className="section-body" style={{ marginBottom: '3rem' }}>
            Una muestra de proyectos por línea de trabajo, donde articulamos ciencia, gestión
            territorial y alianzas estratégicas en resultados medibles.
          </p>
          <div className="grid-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
