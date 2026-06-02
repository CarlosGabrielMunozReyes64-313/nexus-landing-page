import Hero from '../components/Hero'
import AgendaCard from '../components/AgendaCard'
import AllyCard from '../components/AllyCard'
import { AGENDAS, ALLIES } from '../data/siteData'

export default function Alianzas() {
  return (
    <>
      <Hero
        small
        tag="Cooperación Internacional"
        title={
          <>
            Construimos puentes entre <span>actores y agendas globales</span>
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
            <div className="section-tag">Red de Aliados</div>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>
              Capacidad institucional para proyectos de gran escala
            </h2>
            <div className="grid-4">
              {ALLIES.map((ally) => (
                <AllyCard key={ally.name} ally={ally} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
