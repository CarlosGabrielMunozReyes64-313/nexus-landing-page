import { useState } from 'react'
import { SERVICES } from '../data/siteData'

// Pestañas de los ejes estratégicos. El estado de la pestaña activa
// se maneja con useState, reemplazando el showTab() manual del original.
export default function ServiceTabs() {
  const [active, setActive] = useState(SERVICES[0].id)
  const current = SERVICES.find((s) => s.id === active)

  return (
    <>
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

      <div className="service-panel active">
        <div className="service-layout">
          <div className="service-visual">
            <div className="svc-icon">{current.icon}</div>
            <div className="svc-title">{current.svcTitle}</div>
            <div className="svc-sub">{current.svcSub}</div>
          </div>
          <div>
            <div className="service-name">{current.name}</div>
            <p className="service-desc">{current.desc}</p>
            <ul className="service-list">
              {current.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
