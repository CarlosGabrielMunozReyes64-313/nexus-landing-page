import './Contacto.css';
import Hero from '../components/Hero/Hero'
import ContactForm from '../components/ContactForm/ContactForm'
import { CONTACT_TARGETS } from '../data/siteData'

export default function Contacto() {
  return (
    <>
      <Hero
        small
        tag="Consultoría Estratégica"
        title={
          <>
            Hablemos de tu <span>proyecto</span>
          </>
        }
      />

      <section>
        <div className="section-inner">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>Cada territorio tiene su propia oportunidad de transformación</h2>
              <p>
                Trabajamos con gobiernos locales, empresas comprometidas con la sostenibilidad,
                organizaciones de cooperación internacional y comunidades que quieren ser
                protagonistas de su propio desarrollo. Si tienes un desafío territorial, ambiental o
                de innovación, queremos conocerlo.
              </p>
              <div className="contact-targets">
                {CONTACT_TARGETS.map((target) => (
                  <div className="ct-item" key={target}>
                    <div className="ct-dot" />
                    {target}
                  </div>
                ))}
              </div>
              <div className="contact-data">
                <div className="contact-data-label">Colombia · América Latina</div>
                <div className="contact-data-val">info@nexus-sostenible.co</div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
