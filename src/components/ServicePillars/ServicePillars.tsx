import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../../data/siteData';
import ServiceIcon, { ICON_MAP } from '../icons/ServiceIcons';
import { useReveal } from '../../hooks/useReveal';
import './ServicePillars.css';

// Tarjetas-resumen por eje (vista general de Servicios). Toman el diseño de la
// referencia: borde superior de color, icono grande con distintivo, título,
// descripción, checklist de servicios destacados y botón "Conocer soluciones".
const EJE_ROUTES = [
  '/servicios/eje-1',
  '/servicios/eje-2',
  '/servicios/eje-3',
  '/servicios/eje-4',
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

function PillarServiceCard({ eje, index }) {
  const { ref, shown } = useReveal();
  const navigate = useNavigate();
  const iconName = ICON_MAP[eje.id]?.[0] ?? 'document';
  const highlights = eje.list.slice(0, 5);

  return (
    <article
      ref={ref}
      className={`svc-pillar eje-${index + 1}${shown ? ' is-visible' : ''}`}
    >
      <div className="svc-pillar-iconwrap">
        <div className="svc-pillar-icon" aria-hidden="true">
          <ServiceIcon name={iconName} />
        </div>
        <span className="svc-pillar-badge" aria-hidden="true">
          <CheckIcon />
        </span>
      </div>

      <h3 className="svc-pillar-title">{eje.svcTitle}</h3>
      <p className="svc-pillar-desc">{eje.desc}</p>

      <ul className="svc-pillar-list">
        {highlights.map((item) => (
          <li key={item.label}>
            <span className="svc-pillar-tick" aria-hidden="true">
              <CheckIcon />
            </span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="svc-pillar-btn"
        onClick={() => navigate(EJE_ROUTES[index])}
      >
        Conocer soluciones <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}

export default function ServicePillars() {
  return (
    <div className="svc-pillars-grid">
      {SERVICES.map((eje, i) => (
        <PillarServiceCard key={eje.id} eje={eje} index={i} />
      ))}
    </div>
  );
}
