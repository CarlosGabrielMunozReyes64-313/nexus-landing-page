import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import StatsBar from '../components/StatsBar/StatsBar';
import ValorBox from '../components/ValorBox/ValorBox';
import PillarCard from '../components/PillarCard/PillarCard';
import { SDG_BADGES, PILLARS } from '../data/siteData';

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <>
      <Hero
        carousel
        tag="Innovación · Alianzas · Desarrollo Sostenible"
        title={
          <>
            Conectamos conocimiento,
            <br />
            innovación y alianzas para
            <br />
            <span>transformar territorios</span>
          </>
        }
        subtitle="Somos un aliado que articula actores, saberes y estrategias para acelerar la transición hacia territorios resilientes, biodiversos e inclusivos."
      >
        <button className="btn-primary" onClick={() => navigate('/contacto')}>
          Conversemos sobre tu proyecto
        </button>
        <button className="btn-outline" onClick={() => navigate('/portafolio')}>
          Ver portafolio de experiencia
        </button>
      </Hero>

      <StatsBar />

      {/* Propuesta de valor */}
      <section>
        <div className="section-inner">
          <div className="grid-2">
            <div>
              <div className="section-tag">Propuesta de Valor</div>
              <h2 className="section-title">
                Somos tu aliado de innovación para el desarrollo territorial sostenible.
              </h2>
              <p className="section-body" style={{ marginBottom: '1.25rem' }}>
                NEXUS no es una consultora convencional. Somos un nodo de articulación que conecta
                la ciencia, la gestión pública, la innovación social y el conocimiento del
                territorio para diseñar e implementar soluciones de alto impacto.
              </p>
              <p className="section-body">
                Trabajamos con gobiernos, organizaciones de cooperación internacional, sector
                privado y comunidades en la formulación y ejecución de proyectos que integran
                biodiversidad, resiliencia climática, tecnología e innovación social desde una
                perspectiva sistémica.
              </p>
            </div>
            <ValorBox />
          </div>
        </div>
      </section>

      {/* Estándares y agendas (ODS) — estilo grilla de features */}
      <section className="alt">
        <div className="section-inner">
          <div className="feature-heading">
            <h2>Estándares y Agendas</h2>
          </div>
          <div className="ods-grid">
            {SDG_BADGES.map((badge) => (
              <div className="ods-item" key={badge.label}>
                <img src={badge.icon} alt={badge.label} />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares estratégicos — estilo grilla de features */}
      <section>
        <div className="section-inner">
          <div className="feature-heading">
            <h2>Pilares Estratégicos</h2>
          </div>
          <p
            className="section-body"
            style={{ textAlign: 'center', margin: '0 auto', maxWidth: '640px' }}
          >
            Cada eje temático responde a una dimensión crítica de la sostenibilidad territorial. Su
            articulación es lo que nos permite ofrecer soluciones sistémicas, no parches aislados.
          </p>
          <div className="pillars-grid">
            {PILLARS.map((pillar) => (
              <PillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
