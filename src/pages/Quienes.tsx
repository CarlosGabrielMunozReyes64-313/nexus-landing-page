import './Quienes.css';
import Hero from '../components/Hero/Hero';
import TeamCard from '../components/TeamCard/TeamCard';
import Carousel from '../components/Carousel/Carousel';
import Reveal from '../components/Reveal/Reveal';
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

// Bloque reutilizable: imagen amplia (≈500px) + contenido con tarjetas.
// `reverse` alterna el lado de la imagen. Las imágenes y el texto aparecen
// con una animación sutil al entrar en pantalla.
function IdentityBlock({ image, alt, tag, title, intro, items, reverse = false }) {
  return (
    <div className={`identity-block${reverse ? ' reverse' : ''}`}>
      <div className="identity-top">
        <Reveal as="div" variant={reverse ? 'right' : 'left'} className="identity-media">
          <img src={image} alt={alt} loading="lazy" />
        </Reveal>

        <Reveal as="div" variant={reverse ? 'left' : 'right'} className="identity-intro">
          <div className="section-tag">{tag}</div>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            {title}
          </h2>
          <p className="section-body">{intro}</p>
        </Reveal>
      </div>

      <div className="identity-stack">
        <Carousel minSlide={250} ariaLabel={`${title} — tarjetas`}>
          {items.map((item) => (
            <div className="identity-card" key={item.title}>
              <div className="identity-card-title">{item.title}</div>
              <p className="identity-card-text">{item.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

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
          <IdentityBlock
            image={ImgPrincipios}
            alt="Equipo de NEXUS colaborando con la comunidad"
            tag="Valores Corporativos"
            title="Los principios que guían cada decisión"
            intro="Seis valores definen nuestra forma de operar y son el criterio con el que evaluamos cada proyecto, alianza y resultado."
            items={CORPORATE_VALUES}
          />
        </div>
      </section>

      <section className="alt">
        <div className="section-inner">
          <IdentityBlock
            reverse
            image={ImgRetos}
            alt="Paisaje con energía renovable y territorio sostenible"
            tag="Desafíos Estratégicos"
            title="Los retos que nos definen"
            intro="NEXUS orienta su crecimiento y propuesta de valor en torno a los grandes desafíos que marcarán las próximas décadas en Colombia y la región."
            items={STRATEGIC_CHALLENGES}
          />
        </div>
      </section>

      <section>
        <div className="section-inner">
          <IdentityBlock
            image={ImgCapacidades}
            alt="Profesionales de NEXUS analizando datos y mapas técnicos"
            tag="Nuestra Propuesta de Valor"
            title="Capacidades integradas en una sola plataforma"
            intro="NEXUS reúne las capacidades que los actores del territorio necesitan para transformar sus proyectos en realidades sostenibles."
            items={VALUE_PROPOSITION}
          />
        </div>
      </section>

      {/* Equipo Senior */}
      <section className="alt">
        <div className="section-inner">
          <div className="section-tag">Equipo Senior</div>

          {/* Miembros fundadores (Guillermo, Jaime, Viviana) */}
          <h3 className="team-group-title">Miembros Fundadores</h3>
          <div className="grid-3">
            {TEAM.slice(0, 3).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* Separación con el resto del equipo */}
          <div className="team-divider" aria-hidden="true" />

          <h3 className="team-group-title team-group-title--sub">Equipo de Especialistas</h3>
          <div className="grid-3">
            {TEAM.slice(3).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* Título trasladado al final, debajo del resto de las tarjetas */}
          <h2 className="section-title team-closing-title">El talento detrás de cada solución</h2>
        </div>
      </section>
    </>
  );
}
