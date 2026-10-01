import Hero from '../components/Hero/Hero';
import AgendaCard from '../components/AgendaCard/AgendaCard';
import AllyCard from '../components/AllyCard/AllyCard';
import { Link } from 'react-router-dom';
import { AGENDAS, ALLIES } from '../data/siteData';
import { PILOT, whatsappLink, WHATSAPP_MESSAGES } from '../config/site';
import './Alianzas.css';

export default function Alianzas() {
  return (
    <>
      <Hero
        small
        tag="Cooperación Internacional"
        title={
          <>
            Construimos puentes entre <span>actores locales y agendas globales</span>
          </>
        }
      />

      <section>
        <div className="section-inner">
          <div className="section-tag">Alineación Global</div>
          <h2 className="section-title">
            Nuestros proyectos hablan el lenguaje de la cooperación internacional
          </h2>
          <p className="section-body" style={{ marginBottom: '3rem' }}>
            Diseñamos e implementamos iniciativas que se articulan con los marcos normativos y
            estratégicos más relevantes de la agenda global de sostenibilidad, lo que nos permite
            acceder a fondos internacionales y posicionar los territorios colombianos en redes de
            cooperación de alto nivel.
          </p>
          <div className="grid-2-auto">
            {AGENDAS.map((agenda) => (
              <AgendaCard key={agenda.title} agenda={agenda} />
            ))}
          </div>

          <div style={{ marginTop: '4.5rem' }}>
            <div className="section-tag">Aliados Estratégicos</div>
            <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
              Organizaciones que fortalecen nuestra red
            </h2>
            <p className="section-body" style={{ marginBottom: '3rem' }}>
              Trabajamos de la mano con empresas especializadas que complementan nuestras
              capacidades técnicas, de instrumentación y de laboratorio.
            </p>
            <div className="ally-grid">
              {ALLIES.map((ally) => (
                <AllyCard key={ally.name} ally={ally} />
              ))}
            </div>
          </div>

          {/* La red también es una fuente de referidos. */}
          <div className="ally-referral">
            <div className="ally-referral-text">
              <h2>¿Conoce una empresa que debería estar aquí?</h2>
              <p>
                {PILOT.active
                  ? `Si conoce una MiPyme de ${PILOT.municipalities.join(' o ')} que quiera empezar en RSE, recomiéndela para el piloto de ${PILOT.slots} cupos. Y si su organización quiere sumarse a la red de aliados, escríbanos.`
                  : 'Si conoce una empresa que quiera empezar en RSE, o una organización que quiera sumarse a la red de aliados, escríbanos.'}
              </p>
            </div>
            <div className="ally-referral-actions">
              <a
                className="btn-primary"
                href={whatsappLink(WHATSAPP_MESSAGES.referral)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="aliados-referido"
              >
                Recomendar una empresa
              </a>
              <Link className="ally-referral-link" to="/contacto">
                Quiero ser aliado
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
