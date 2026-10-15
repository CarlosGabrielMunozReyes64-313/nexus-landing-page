import { SITE } from '../../config/site';
import './SocialLinks.css';

// =====================================================
//  Enlaces a las redes de NEXUS
//  Lee las direcciones de src/config/site.ts (SITE.social y
//  SITE.googleBusinessUrl). Solo muestra las que tengan URL,
//  así que para agregar o quitar una red basta con editar ese archivo.
// =====================================================

const NETWORKS = [
  { key: 'facebook', label: 'Facebook' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'youtube', label: 'YouTube' },
] as const;

type SocialLinksProps = {
  /** `dark`: sobre fondo oscuro (pie de página). `light`: sobre fondo claro. */
  variant?: 'dark' | 'light';
  /** Agrega el perfil de Google Business (Google Maps) al final. */
  includeMaps?: boolean;
  /** Texto opcional encima de los enlaces, p. ej. «Síganos». */
  title?: string;
  /** Lugar desde donde se hace clic, para la medición (GA4). */
  track?: string;
  className?: string;
};

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function SocialLinks({
  variant = 'dark',
  includeMaps = false,
  title,
  track,
  className,
}: SocialLinksProps) {
  const links: { label: string; url: string }[] = NETWORKS.filter(
    (n) => Boolean(SITE.social[n.key]),
  ).map((n) => ({ label: n.label, url: SITE.social[n.key] }));

  if (includeMaps && SITE.googleBusinessUrl) {
    links.push({ label: 'Google Maps', url: SITE.googleBusinessUrl });
  }
  if (links.length === 0) return null;

  return (
    // <div> y no <nav>: los estilos del menú principal se aplican a todo <nav>.
    <div className={['social-links', `social-links--${variant}`, className].filter(Boolean).join(' ')}>
      {title && <div className="social-links-title">{title}</div>}
      <ul className="social-links-list" aria-label="Redes sociales de NEXUS">
        {links.map((link) => (
          <li key={link.label}>
            <a
              className="social-links-item"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={`NEXUS en ${link.label} (se abre en una pestaña nueva)`}
              data-track={track}
            >
              <span>{link.label}</span>
              <ExternalIcon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
