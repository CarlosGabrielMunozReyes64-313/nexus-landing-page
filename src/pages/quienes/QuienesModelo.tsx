import { ABOUT_INTRO, MISSION, VISION, VALUE_PROPOSITION, COMPANY_INFO } from '../../data/siteData';
import IdentityBlock from '../../components/IdentityBlock/IdentityBlock';
import ImgCapacidades from '../../assets/Quienes/Capacidades-integradas-en-una-sola-plataforma.jpg';
import "../QuienesModelo.css";
// Vista "Nuestro Modelo": quiénes somos + el modelo de trabajo + misión/visión
// + propuesta de valor. Todo el contenido sobre la organización y su forma de
// operar, sin mezclarse con Principios, Desafíos ni Equipo.
//
// El texto de las dos primeras secciones se centra y justifica mediante la
// clase `.modelo-centered` (ver QuienesModelo.css). El bloque "Nuestra
// Propuesta de Valor" queda FUERA de esa clase y conserva su estilo original.
export default function QuienesModelo() {
  return (
    <>
      <section className="modelo-centered">
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

      <section className="alt modelo-centered">
        <div className="section-inner">
          <div className="section-tag">Nuestro Modelo</div>
          <h2 className="section-title">
            Ciencia, territorio, innovación y gobernanza: un sistema integrado
          </h2>
          <p className="section-body">
            En NEXUS la sostenibilidad no es una línea más de trabajo: es el eje transversal que da
            coherencia y sentido a toda nuestra gestión. Articulamos rigor científico con
            comprensión profunda de los contextos territoriales, produciendo intervenciones que son
            simultáneamente técnicamente sólidas y social y políticamente viables.
          </p>

          <div className="modelo-mv">
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
    </>
  );
}