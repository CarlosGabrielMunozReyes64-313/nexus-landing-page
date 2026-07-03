import { SERVICES } from '../../data/siteData';
import { useReveal } from '../../hooks/useReveal';
import './EjesList.css';

import Eje1 from '../../assets/ejes/Eje1.jpg';
import Eje2 from '../../assets/ejes/Eje2.jpg';
import Eje3 from '../../assets/ejes/Eje3.jpg';
import Eje4 from '../../assets/ejes/Eje4.jpg';

const EJE_IMAGES = {
  tab1: Eje1,
  tab2: Eje2,
  tab3: Eje3,
  tab4: Eje4,
};

// Una fila por eje. Alterna el lado de la imagen y revela su contenido al
// hacer scroll. La altura es automática: el texto nunca se recorta.
export function EjeRow({ service, index }) {
  const { ref, shown } = useReveal();
  const imgSrc = EJE_IMAGES[service.id];
  const flipped = index % 2 === 1; // alterna imagen izquierda/derecha

  return (
    <article
      ref={ref}
      className={`eje-row${flipped ? ' is-flipped' : ''}${shown ? ' is-visible' : ''}`}
    >
      <div className="eje-row-media">
        {imgSrc && <img src={imgSrc} alt={service.svcTitle} loading="lazy" />}
        <span className="eje-row-num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="eje-row-content">
        <div className="eje-row-name">{service.name}</div>
        <h3 className="eje-row-title">{service.svcTitle}</h3>
        {service.svcSub && <div className="eje-row-sub">{service.svcSub}</div>}
        <p className="eje-row-desc">{service.desc}</p>

        <ul className="eje-row-list">
          {service.list.map((item, i) => (
            <li key={item.label} style={{ transitionDelay: `${0.08 * i}s` }}>
              <span className="eje-row-bullet" aria-hidden="true" />
              <span>
                <span className="eje-row-label">{item.label}.</span> {item.text}
              </span>
            </li>
          ))}
        </ul>

        {(service.tools?.length || service.deliverables?.length) && (
          <div className="eje-row-meta">
            {service.tools?.length ? (
              <div className="eje-meta-col">
                <div className="eje-meta-title">Herramientas y metodologías</div>
                <ul className="eje-meta-list">
                  {service.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {service.deliverables?.length ? (
              <div className="eje-meta-col">
                <div className="eje-meta-title">Principales entregables</div>
                <ul className="eje-meta-list eje-meta-list--check">
                  {service.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}

export default function EjesList() {
  return (
    <section className="ejes-list-section">
      <div className="ejes-list-head">
        <div className="section-tag">Ejes Estratégicos</div>
        <h2 className="section-title">Explora cada eje de trabajo</h2>
        <p className="ejes-list-intro">
          Cuatro líneas de acción complementarias que articulan el trabajo de NEXUS en el
          territorio. Recórrelas de principio a fin.
        </p>
      </div>

      <div className="ejes-list">
        {SERVICES.map((service, index) => (
          <EjeRow key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
