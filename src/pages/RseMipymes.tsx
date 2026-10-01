import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import PilotForm from "../components/PilotForm/PilotForm";
import { PILOT, SITE, whatsappLink, WHATSAPP_MESSAGES } from "../config/site";
import {
  RSE_MIPYMES_HERO,
  RSE_REASONS,
  RSE_OFFER,
  RSE_STEPS,
  RSE_FAQ,
} from "../data/rseMipymes";
import { ARTICLES, articlePath } from "../lib/blog";
import camaraLogo from "../assets/aliados/camara-comercio-palmira.png";
import "./RseMipymes.css";

/*
  RSE para MiPymes · landing del piloto «5 cupos».
  Un solo destino para la pauta, el correo y los referidos. Cuando termine la
  convocatoria, basta con PILOT.active = false (src/config/site.ts) y la
  página sigue como página de servicio.
*/
export default function RseMipymes() {
  const pilotArticles = ARTICLES.filter(
    (a) => a.related === "/rse-mipymes",
  ).slice(0, 4);

  return (
    <>
      <Hero
        small
        tag={RSE_MIPYMES_HERO.tag}
        title={RSE_MIPYMES_HERO.title}
        subtitle={RSE_MIPYMES_HERO.subtitle}
      >
        <a className="btn-primary" href="#postular">
          {PILOT.active ? "Postular mi empresa" : "Hablemos de su empresa"}
        </a>
        <a
          className="btn-outline"
          href={whatsappLink(WHATSAPP_MESSAGES.pilot)}
          target="_blank"
          rel="noopener noreferrer"
          data-track="rse-hero"
        >
          Escribir por WhatsApp
        </a>
      </Hero>

      {PILOT.active && (
        <section className="rse-pilot" aria-labelledby="rse-pilot-title">
          <div className="section-inner rse-pilot-inner">
            <div className="rse-pilot-count" aria-hidden="true">
              <span className="rse-pilot-num">{PILOT.slots}</span>
              <span className="rse-pilot-unit">cupos</span>
            </div>
            <div className="rse-pilot-text">
              <h2 id="rse-pilot-title">
                Piloto {PILOT.year} para MiPymes de{" "}
                {PILOT.municipalities.join(" y ")}
              </h2>
              <p>
                {PILOT.slots} empresas recibirán el diagnóstico RSE Express y el
                acompañamiento de RSE por Retos. El piloto está financiado por
                el programa «{PILOT.program}» de la {PILOT.funder}.
              </p>
            </div>
            <a
              className="rse-pilot-funder"
              href={PILOT.funderUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${PILOT.funder} (se abre en una pestaña nueva)`}
            >
              <img
                src={camaraLogo}
                alt={`Logo de la ${PILOT.funder}`}
                width="160"
                height="80"
              />
            </a>
          </div>
        </section>
      )}

      <section>
        <div className="section-inner">
          <div className="section-tag">Por qué ahora</div>
          <h2 className="section-title">
            La RSE también es para empresas pequeñas
          </h2>
          <p className="section-body">
            Una MiPyme ya tiene impactos sobre su equipo, sus clientes, sus
            proveedores y su comunidad. La RSE consiste en gestionarlos a
            propósito, con pasos que caben en su tamaño y en su presupuesto.
          </p>
          <div className="rse-reasons">
            {RSE_REASONS.map((r) => (
              <div className="rse-reason" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="section-inner">
          <div className="section-tag">Qué ofrecemos</div>
          <h2 className="section-title">Dos formas de empezar</h2>
          <div className="rse-offer">
            {RSE_OFFER.map((o) => (
              <article className="rse-offer-card" key={o.name}>
                <h3>{o.name}</h3>
                <p className="rse-offer-summary">{o.summary}</p>
                <ul>
                  {o.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h3 className="rse-steps-title">Cómo funciona</h3>
          <ol className="rse-steps">
            {RSE_STEPS.map((s) => (
              <li key={s.title}>
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="postular" className="rse-apply">
        <div className="section-inner rse-apply-grid">
          <div className="rse-apply-info">
            <div className="section-tag">
              {PILOT.active ? "Postulación" : "Contacto"}
            </div>
            <h2 className="section-title">
              {PILOT.active ? "Postule su empresa" : "Hablemos de su empresa"}
            </h2>
            <p className="section-body">
              {PILOT.active
                ? `Complete el formulario y le contactamos para revisar si su empresa puede ser una de las ${PILOT.slots} del piloto. Toma menos de dos minutos.`
                : "Cuéntenos sobre su empresa y le proponemos por dónde empezar."}
            </p>
            <div className="rse-channels">
              <a
                className="rse-channel rse-channel--wa"
                href={whatsappLink(WHATSAPP_MESSAGES.pilot)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="rse-postular"
              >
                <span className="rse-channel-label">WhatsApp</span>
                <span className="rse-channel-val">{SITE.phoneDisplay}</span>
              </a>
              <a
                className="rse-channel"
                href={`mailto:${SITE.email}?subject=Piloto RSE MiPymes`}
              >
                <span className="rse-channel-label">Correo</span>
                <span className="rse-channel-val">{SITE.email}</span>
              </a>
              <div className="rse-channel">
                <span className="rse-channel-label">Sede</span>
                <span className="rse-channel-val">
                  {SITE.address.locality}, {SITE.address.region}
                </span>
              </div>
            </div>
          </div>
          <PilotForm />
        </div>
      </section>

      <section className="alt">
        <div className="section-inner rse-faq-wrap">
          <div className="section-tag">Preguntas frecuentes</div>
          <h2 className="section-title">Lo que suelen preguntarnos</h2>
          <div className="rse-faq">
            {RSE_FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {pilotArticles.length > 0 && (
        <section>
          <div className="section-inner">
            <div className="section-tag">Para leer</div>
            <h2 className="section-title">Guías cortas para empezar</h2>
            <ul className="rse-reading">
              {pilotArticles.map((a) => (
                <li key={a.slug}>
                  <Link to={articlePath(a)} draggable={false}>
                    <span className="rse-reading-topic">{a.topic}</span>
                    <span className="rse-reading-title">{a.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
