import "./Contacto.css";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import ContactForm from "../components/ContactForm/ContactForm";
import { WhatsAppIcon } from "../components/WhatsAppButton/WhatsAppButton";
import { CONTACT_TARGETS } from "../data/siteData";
import { SITE, PILOT, whatsappLink, WHATSAPP_MESSAGES } from "../config/site";

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
              <h2>
                Cada territorio tiene su propia oportunidad de transformación
              </h2>
              <p>
                Trabajamos con gobiernos locales, empresas comprometidas con la
                sostenibilidad, MiPymes, organizaciones de cooperación
                internacional y comunidades que quieren ser protagonistas de su
                propio desarrollo. Si tienes un desafío territorial, ambiental o
                de innovación, queremos conocerlo.
              </p>

              {/* Canales directos: el que prefiera cada persona. */}
              <div className="contact-channels">
                <a
                  className="contact-wa"
                  href={whatsappLink(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="contacto"
                >
                  <WhatsAppIcon size={24} />
                  <span>Escribir por WhatsApp</span>
                </a>
                <dl className="contact-data">
                  <div>
                    <dt className="contact-data-label">Teléfono</dt>
                    <dd className="contact-data-val">
                      <a href={`tel:${SITE.phoneE164}`} data-track="contacto">{SITE.phoneDisplay}</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="contact-data-label">Correo</dt>
                    <dd className="contact-data-val">
                      <a href={`mailto:${SITE.email}`} data-track="contacto">{SITE.email}</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="contact-data-label">Sede</dt>
                    <dd className="contact-data-val">
                      {SITE.address.streetAddress ? `${SITE.address.streetAddress}, ` : ""}
                      {SITE.address.locality}, {SITE.address.region}
                      {SITE.googleBusinessUrl && (
                        <>
                          {" · "}
                          <a href={SITE.googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                            Cómo llegar
                          </a>
                        </>
                      )}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="contact-targets">
                {CONTACT_TARGETS.map((target) => (
                  <div className="ct-item" key={target}>
                    <div className="ct-dot" />
                    {target}
                  </div>
                ))}
              </div>

              {PILOT.active && (
                <p className="contact-pilot">
                  ¿Tiene una MiPyme en {PILOT.municipalities.join(" o ")}?{" "}
                  <Link to="/rse-mipymes">Conozca el piloto de RSE con {PILOT.slots} cupos</Link>.
                </p>
              )}
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
