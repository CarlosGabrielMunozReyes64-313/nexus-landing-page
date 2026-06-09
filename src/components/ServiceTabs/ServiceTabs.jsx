import { useState } from 'react';
import { SERVICES } from '../../data/siteData';
import './ServiceTabs.css';

// Imágenes de fondo de cada eje. Arrastra los archivos a src/assets/ejes/
// con EXACTAMENTE estos nombres. import.meta.glob los empaqueta solo.
const EJE_IMAGES = {
  tab1: 'territorios.jpg',
  tab2: 'biodiversidad.jpg',
  tab3: 'innovacion.jpg',
  tab4: 'cti.jpg',
};
const modules = import.meta.glob('../../assets/ejes/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const imgMap = {};
for (const path in modules) {
  imgMap[path.split('/').pop()] = modules[path].default;
}

export default function ServiceTabs() {
  const [active, setActive] = useState(SERVICES[0].id);
  const current = SERVICES.find((s) => s.id === active);
  const imgSrc = imgMap[EJE_IMAGES[current.id]];

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
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
