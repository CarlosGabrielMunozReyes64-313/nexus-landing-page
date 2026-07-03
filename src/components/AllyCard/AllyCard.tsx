import './AllyCard.css';

// Ícono de enlace externo (SVG inline, hereda el color del texto).
function LinkIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// Tarjeta de un aliado (página Red de Aliados). Recibe `ally`.
export default function AllyCard({ ally }) {
  return (
    <div className="ally-card">
      <div className="ally-logo">
        <img src={ally.logo} alt={`Logo ${ally.name}`} loading="lazy" />
      </div>
      <div className="ally-name">{ally.name}</div>
      {ally.type && <div className="ally-type">{ally.type}</div>}
      {ally.desc && <p className="ally-desc">{ally.desc}</p>}
      {ally.url && (
        <a
          className="ally-link"
          href={ally.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon />
          <span>Visitar sitio</span>
        </a>
      )}
    </div>
  );
}
