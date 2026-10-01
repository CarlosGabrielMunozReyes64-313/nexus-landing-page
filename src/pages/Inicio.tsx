import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import StatsBar from '../components/StatsBar/StatsBar';
import ValorBox from '../components/ValorBox/ValorBox';
import PillarCard from '../components/PillarCard/PillarCard';
import SDGCake from '../components/SDGCake/SDGCake';
import PilotBand from '../components/PilotBand/PilotBand';
import { SDG_BADGES, PILLARS, PGAU_FRAMEWORK, PGAU_ALIGNMENT } from '../data/siteData';
import './Inicio.css';

export default function Inicio() {
  return (
    <>
      <Hero
        carousel
        brand
        tag="Innovación · Alianzas · Desarrollo Sostenible"
        title={
          <>
            Conectamos conocimiento,
            <br />
            alianzas e innovación para
            <br />
            <span>transformar territorios</span>
          </>
        }
        subtitle="Somos un aliado que articula actores, saberes y estrategias para acelerar la transición hacia territorios resilientes, biodiversos e inclusivos."
      >
        <Link className="btn-primary" to="/contacto">
          Conversemos sobre tu proyecto
        </Link>
        <Link className="btn-outline" to="/portafolio">
          Ver portafolio de experiencia
        </Link>
      </Hero>

      <StatsBar />

      {/* Puerta de entrada para MiPymes (piloto RSE) */}
      <PilotBand />

      {/* Propuesta de valor */}
      <section>
        <div className="section-inner">
          <div className="propuesta">
            <div className="propuesta-text">
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

          {/* ODS — gráfico "pastel de bodas" (modelo de Rockström) */}
          <div className="ods-cake-block">
            <div className="feature-heading">
              <h2>ODS's</h2>
            </div>
            <p
              className="section-body"
              style={{ textAlign: 'justify', margin: '0 auto 0.5rem', maxWidth: '680px' }}
            >
              Los Objetivos de Desarrollo Sostenible con los que NEXUS contribuye, organizados según
              el modelo de "pastel de bodas": la economía se sustenta en la sociedad y la sociedad,
              en la biosfera. Pasa el cursor sobre cada ODS para ver su aplicación.
            </p>
            <SDGCake />
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
            style={{ textAlign: 'justify', margin: '0 auto', maxWidth: '640px' }}
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

      {/* Marco de política nacional — PGAU 2025-2035 */}
      <section className="alt home-pgau">
        <div className="section-inner">
          <div className="section-tag">{PGAU_FRAMEWORK.tag}</div>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            Alineados con la <span>PGAU 2025-2035</span>
          </h2>
          <p className="section-body home-pgau-intro">
            La Política de Gestión Ambiental Urbana del Ministerio de Ambiente define la hoja de
            ruta ambiental de las ciudades colombianas hasta 2035. Sus cuatro componentes coinciden
            con nuestros cuatro ejes de trabajo.
          </p>

          <div className="home-pgau-grid">
            {PGAU_ALIGNMENT.map((row) => (
              <div className="home-pgau-item" key={row.code}>
                <span className={`home-pgau-code ${row.cat}`}>{row.code}</span>
                <div className="home-pgau-body">
                  <h3 className="home-pgau-component">{row.component}</h3>
                  <p className="home-pgau-eje">{row.eje}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/portafolio" className="btn-outline home-pgau-btn">
            Ver el cruce completo con nuestros proyectos →
          </Link>
        </div>
      </section>
    </>
  );
}
