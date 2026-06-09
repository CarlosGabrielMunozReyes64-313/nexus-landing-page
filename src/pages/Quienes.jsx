import './Quienes.css';
import Hero from '../components/Hero/Hero';
import TeamCard from '../components/TeamCard/TeamCard';
import ImgPrincipios from '../assets/Quienes/Los-principios-que-guían-cada-decisión.jpg';
import ImgRetos from '../assets/Quienes/Los-retos-que-nos-definen.jpg';
import ImgCapacidades from '../assets/Quienes/Capacidades-integradas-en-una-sola-plataforma.jpg';

import {
  TEAM,
  ABOUT_INTRO,
  MISSION,
  VISION,
  CORPORATE_VALUES,
  STRATEGIC_CHALLENGES,
  VALUE_PROPOSITION,
  COMPANY_INFO,
} from '../data/siteData';

export default function Quienes() {
  return (
    <>
      <Hero
        small
        tag="El NEXUS de Expertos"
        title={
          <>
            Solvencia técnica al servicio <span>del territorio</span>
          </>
        }
      />

      <section>
        <div className="section-inner">
          <div className="section-tag">Quiénes Somos</div>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            {COMPANY_INFO.legalName}
          </h2>
          {ABOUT_INTRO.map((paragraph, i) => (
            <p
              className="section-body"
              style={{ marginBottom: i < ABOUT_INTRO.length - 1 ? '1.25rem' : 0 }}
              key={i}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="alt">
        <div className="section-inner">
          <div className="grid-2" style={{ marginBottom: '0' }}>
            <div>
              <div className="section-tag">Nuestro Modelo</div>
              <h2 className="section-title">
                Ciencia, territorio, innovación y gobernanza: un sistema integrado
              </h2>
              <p className="section-body">
                En NEXUS la sostenibilidad no es una línea más de trabajo: es el eje transversal que
                da coherencia y sentido a toda nuestra gestión. Articulamos rigor científico con
                comprensión profunda de los contextos territoriales, produciendo intervenciones que
                son simultáneamente técnicamente sólidas y social y políticamente viables.
              </p>
            </div>
            <div>
              <div className="mv-card mv-card-border-green">
                <div className="mv-title">{MISSION.heading}</div>
                <p className="mv-text">{MISSION.text}</p>
              </div>
              <div className="mv-card mv-card-border-teal">
                <div className="mv-title">{VISION.heading}</div>
                <p className="mv-text">{VISION.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-inner">
          <div className="identity-block">
            <div className="identity-media">
              <img src={ImgPrincipios} alt="Equipo de NEXUS colaborando con la comunidad" />
            </div>
            <div className="identity-content">
              <div className="section-tag">Valores Corporativos</div>
              <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
                Los principios que guían cada decisión
              </h2>
              <p className="section-body" style={{ marginBottom: '2.5rem' }}>
                Seis valores definen nuestra forma de operar y son el criterio con el que evaluamos
                cada proyecto, alianza y resultado.
              </p>
              <div className="identity-stack">
                {CORPORATE_VALUES.map((value) => (
                  <div className="identity-card" key={value.title}>
                    <div className="identity-card-title">{value.title}</div>
                    <p className="identity-card-text">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="section-inner">
          <div className="identity-block reverse">
            <div className="identity-media">
              <img src={ImgRetos} alt="Paisaje con energía renovable y territorio sostenible" />
            </div>
            <div className="identity-content">
              <div className="section-tag">Desafíos Estratégicos</div>
              <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
                Los retos que nos definen
              </h2>
              <p className="section-body" style={{ marginBottom: '2.5rem' }}>
                NEXUS orienta su crecimiento y propuesta de valor en torno a los grandes desafíos
                que marcarán las próximas décadas en Colombia y la región.
              </p>
              <div className="identity-stack">
                {STRATEGIC_CHALLENGES.map((challenge) => (
                  <div className="identity-card" key={challenge.title}>
                    <div className="identity-card-title">{challenge.title}</div>
                    <p className="identity-card-text">{challenge.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-inner">
          <div className="identity-block">
            <div className="identity-media">
              <img
                src={ImgCapacidades}
                alt="Profesionales de NEXUS analizando datos y mapas técnicos"
              />
            </div>
            <div className="identity-content">
              <div className="section-tag">Nuestra Propuesta de Valor</div>
              <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
                Capacidades integradas en una sola plataforma
              </h2>
              <p className="section-body" style={{ marginBottom: '2.5rem' }}>
                NEXUS reúne las capacidades que los actores del territorio necesitan para
                transformar sus proyectos en realidades sostenibles.
              </p>
              <div className="identity-stack">
                {VALUE_PROPOSITION.map((item) => (
                  <div className="identity-card" key={item.title}>
                    <div className="identity-card-title">{item.title}</div>
                    <p className="identity-card-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Senior */}
      <section className="alt">
        <div className="section-inner">
          <div className="section-tag">Equipo Senior</div>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            El talento detrás de cada solución
          </h2>
          <div className="grid-3">
            {TEAM.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
