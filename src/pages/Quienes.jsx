import Hero from '../components/Hero';
import TeamCard from '../components/TeamCard';
import { TEAM } from '../data/siteData';

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
          <div className="grid-2" style={{ marginBottom: '4.5rem' }}>
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
                <div className="mv-title">Misión</div>
                <p className="mv-text">
                  Articular conocimiento científico, innovación y alianzas estratégicas para
                  co-diseñar soluciones territoriales que promuevan un desarrollo regenerativo,
                  justo y basado en evidencia.
                </p>
              </div>
              <div className="mv-card mv-card-border-teal">
                <div className="mv-title">Visión</div>
                <p className="mv-text">
                  Ser el referente latinoamericano en innovación para el desarrollo territorial
                  sostenible, contribuyendo a la construcción de territorios resilientes,
                  biodiversos e inclusivos en los que ninguna comunidad quede atrás.
                </p>
              </div>
            </div>
          </div>

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
