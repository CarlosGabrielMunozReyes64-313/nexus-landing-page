import { Link } from 'react-router-dom';
import './Portafolio.css';
import Hero from '../components/Hero/Hero';
import { CASE_STUDIES, REFERENCE_PROJECTS } from '../data/siteData';

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
                  {cs.logo && (
                    <div className="case-logo">
                      <img src={cs.logo} alt={`Logo ${cs.client}`} />
                    </div>
                  )}
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

      {/* Proyectos de referencia — ejecutados por NEXUS */}
      <section className="alt">
        <div className="section-inner">
          <div className="section-tag">Proyectos de Referencia</div>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            Experiencia que evidencia nuestra capacidad
          </h2>
          <p className="section-body" style={{ marginBottom: '3rem' }}>
            Una selección de proyectos ejecutados que muestran el alcance técnico, la diversidad
            sectorial y la escala financiera del trabajo de NEXUS en el territorio.
          </p>

          <div className="ref-grid">
            {REFERENCE_PROJECTS.map((proj) => (
              <article className="ref-card" key={proj.n}>
                <div className="ref-card-top">
                  <span className={`ref-eje ${proj.cat}`}>{proj.eje}</span>
                  <span className="ref-num">
                    N.º {String(proj.n).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="ref-title">{proj.title}</h3>
                <p className="ref-desc">{proj.desc}</p>
                <div className="ref-foot">
                  <span className="ref-monto">{proj.monto}</span>
                  <span className="ref-estado">{proj.estado}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proyecto demo · Calculadora de Huella Ecológica */}
      <section className="demo-cta">
        <div className="section-inner">
          <div className="demo-cta-card">
            <div className="demo-cta-badge">Proyecto demo</div>
            <h2 className="demo-cta-title">
              Calculadora de <span>Huella Ecológica</span>
            </h2>
            <p className="demo-cta-desc">
              Una aplicación interactiva para estimar la huella de carbono e hídrica, con
              calculadoras dinámicas, recomendaciones personalizadas y un dashboard analítico.
              Desarrollada como prueba técnica e integrada dentro de NEXUS.
            </p>
            <div className="demo-cta-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Chart.js</span>
              <span>Vite</span>
            </div>
            <Link to="/proyecto-demo" className="btn-primary demo-cta-btn">
              Ver demo del proyecto →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
