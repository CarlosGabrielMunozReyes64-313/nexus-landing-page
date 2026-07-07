import { SERVICES } from '../../data/siteData';
import ServiceIcon, { ICON_MAP } from '../icons/ServiceIcons';
import { useReveal } from '../../hooks/useReveal';
import './ServiceMosaic.css';

// Catálogo de servicios en tarjetas grandes. Puede mostrar:
//  · todos los ejes agrupados (sin prop), o
//  · un único eje (prop `ejeId`), para las subpestañas por eje.
// La información de cada servicio (título y descripción) se toma tal cual de
// los datos: no se modifica.

const CheckBadge = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

function ServiceCard({ ejeId, ejeIndex, itemIndex, label, text }) {
  const { ref, shown } = useReveal();
  const iconName = ICON_MAP[ejeId]?.[itemIndex] ?? 'document';

  return (
    <article
      ref={ref}
      className={`svc-card eje-${ejeIndex + 1}${shown ? ' is-visible' : ''}`}
    >
      <div className="svc-card-iconwrap">
        <div className="svc-card-icon" aria-hidden="true">
          <ServiceIcon name={iconName} />
        </div>
        <span className="svc-card-badge" aria-hidden="true">
          <CheckBadge />
        </span>
      </div>

      <h4 className="svc-card-title">{label}</h4>
      {text && <p className="svc-card-text">{text}</p>}

      <span className="svc-card-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </article>
  );
}

function EjeCards({ eje, ejeIndex }) {
  return (
    <div className="svc-cards">
      {eje.list.map((item, itemIndex) => (
        <ServiceCard
          key={item.label}
          ejeId={eje.id}
          ejeIndex={ejeIndex}
          itemIndex={itemIndex}
          label={item.label}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default function ServiceMosaic({ ejeId }: { ejeId?: string }) {
  // Vista de un solo eje (subpestaña): solo sus tarjetas, sin cabecera de grupo.
  if (ejeId) {
    const ejeIndex = SERVICES.findIndex((e) => e.id === ejeId);
    const eje = SERVICES[ejeIndex];
    if (!eje) return null;
    return <EjeCards eje={eje} ejeIndex={ejeIndex} />;
  }

  // Vista general: todos los ejes agrupados con su cabecera.
  return (
    <div className="svc-mosaic-groups">
      {SERVICES.map((eje, ejeIndex) => (
        <section className={`svc-group eje-${ejeIndex + 1}`} key={eje.id}>
          <header className="svc-group-head">
            <span className="svc-group-badge">EJE {ejeIndex + 1}</span>
            <h3 className="svc-group-title">{eje.svcTitle}</h3>
          </header>
          <EjeCards eje={eje} ejeIndex={ejeIndex} />
        </section>
      ))}
    </div>
  );
}
