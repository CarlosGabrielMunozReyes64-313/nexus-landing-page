import { SERVICES } from '../../data/siteData';
import ServiceIcon, { ICON_MAP } from '../icons/ServiceIcons';
import { useReveal } from '../../hooks/useReveal';
import './ServiceMosaic.css';

// Aplana los cuatro ejes en un único catálogo de servicios y lo pinta como un
// mosaico numerado. La información de cada servicio (título y descripción) se
// toma tal cual de los datos: no se modifica.
type FlatService = {
  ejeId: string;
  ejeIndex: number;
  itemIndex: number;
  label: string;
  text: string;
};

const FLAT: FlatService[] = SERVICES.flatMap((eje, ejeIndex) =>
  eje.list.map((item, itemIndex) => ({
    ejeId: eje.id,
    ejeIndex,
    itemIndex,
    label: item.label,
    text: item.text,
  })),
);

function MosaicCard({ svc, n }: { svc: FlatService; n: number }) {
  const { ref, shown } = useReveal();
  const iconName = ICON_MAP[svc.ejeId]?.[svc.itemIndex] ?? 'document';

  return (
    <article
      ref={ref}
      className={`svc-mosaic-card eje-${svc.ejeIndex + 1}${shown ? ' is-visible' : ''}`}
    >
      <div className="svc-mosaic-icon" aria-hidden="true">
        <ServiceIcon name={iconName} />
      </div>
      <div className="svc-mosaic-content">
        <span className="svc-mosaic-num">{String(n).padStart(2, '0')}</span>
        <h3 className="svc-mosaic-title">{svc.label}</h3>
        <p className="svc-mosaic-desc">{svc.text}</p>
      </div>
      <span className="svc-mosaic-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </article>
  );
}

export default function ServiceMosaic() {
  return (
    <div className="svc-mosaic">
      {FLAT.map((svc, i) => (
        <MosaicCard key={`${svc.ejeId}-${svc.itemIndex}`} svc={svc} n={i + 1} />
      ))}
    </div>
  );
}
