import { useState } from 'react';
import { SERVICES, ARS_METHODOLOGY } from '../../data/siteData';
import './ServiceTabs.css';

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

export default function ServiceTabs() {
  const [active, setActive] = useState(SERVICES[0].id);
  const current = SERVICES.find((s) => s.id === active);
  const imgSrc = EJE_IMAGES[current.id];

  return (
    <>
      {/* Cabecera + pestañas (ancho contenido) */}
      <div className="ejes-head">
        <div className="section-tag">Ejes Estratégicos</div>
        <h2 className="section-title" style={{ marginBottom: '1.75rem' }}>
          Explora cada eje de trabajo
        </h2>
        <div className="services-tabs">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              className={`stab${service.id === active ? ' active' : ''}`}
              onClick={() => setActive(service.id)}
            >
              {service.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Banner a todo el ancho. key={active} reinicia el fade al cambiar de pestaña */}
      <div className="eje-banner" key={active}>
        {imgSrc && <img className="eje-banner-img" src={imgSrc} alt={current.svcTitle} />}
        <div className="eje-banner-overlay" />
        <div className="eje-banner-content">
          <div className="eje-name">{current.name}</div>
          <h3 className="eje-title">{current.svcTitle}</h3>
          <p className="eje-desc">{current.desc}</p>
          <ul className="eje-list">
            {current.list.map((item) => (
              <li key={item.label}>
                <span className="eje-list-label">{item.label}.</span> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Metodología transversal: Análisis de Redes Sociales (ARS) */}
      <div className="ars-band">
        <div className="ars-inner">
          <div className="ars-tag">{ARS_METHODOLOGY.tag}</div>
          <h3 className="ars-title">{ARS_METHODOLOGY.title}</h3>
          <p className="ars-text">{ARS_METHODOLOGY.text}</p>
        </div>
      </div>
    </>
  );
}
