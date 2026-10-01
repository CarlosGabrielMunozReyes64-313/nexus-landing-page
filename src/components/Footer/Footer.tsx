import { Link } from 'react-router-dom'
import { FOOTER_NAV, FOOTER_TOPICS } from '../../data/siteData'
import { SITE, whatsappLink, WHATSAPP_MESSAGES } from '../../config/site'
import { WhatsAppIcon } from '../WhatsAppButton/WhatsAppButton'
import './Footer.css';

const SOCIAL_LABELS: Record<string, string> = {
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  facebook: 'Facebook',
  youtube: 'YouTube',
};

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function Footer() {
  const socials = Object.entries(SITE.social).filter(([, url]) => Boolean(url))
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              ne<span>x</span>us
            </div>
            <p className="footer-tagline">
              {SITE.description}
              <br />
              Innovación y Alianzas para el Desarrollo Sostenible.
            </p>

            <ul className="footer-contact">
              <li>
                <a className="footer-phone" href={whatsappLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" data-track="footer">
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp {SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a className="footer-phone" href={`tel:${SITE.phoneE164}`} data-track="footer">
                  <PhoneIcon />
                  <span>{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a className="footer-phone" href={`mailto:${SITE.email}`} data-track="footer">
                  <MailIcon />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                {SITE.googleBusinessUrl ? (
                  <a className="footer-phone" href={SITE.googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                    <PinIcon />
                    <span>{SITE.address.locality}, {SITE.address.region} · Cómo llegar</span>
                  </a>
                ) : (
                  <span className="footer-phone footer-phone--static">
                    <PinIcon />
                    <span>{SITE.address.locality}, {SITE.address.region}</span>
                  </span>
                )}
              </li>
            </ul>

            {socials.length > 0 && (
              <div className="footer-social" aria-label="Redes sociales">
                {socials.map(([key, url]) => (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer">
                    {SOCIAL_LABELS[key] || key}
                  </a>
                ))}
              </div>
            )}

            <div className="sdg-badges" style={{ marginTop: '1.25rem' }}>
              <span className="sdg-dark">ODS 11</span>
              <span className="sdg-dark">ODS 13</span>
              <span className="sdg-dark">ODS 15</span>
              <span className="sdg-dark">MGB 2030</span>
            </div>
          </div>

          <div>
            <div className="footer-heading">Navegación</div>
            <div className="footer-links">
              {FOOTER_NAV.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-heading">Ejes Temáticos</div>
            <div className="footer-links">
              {FOOTER_TOPICS.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
              <Link to="/contacto" style={{ marginTop: '8px', color: 'var(--nx-mid)' }}>
                Contáctenos
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom" suppressHydrationWarning>
          © {year} {SITE.legalName} &nbsp;·&nbsp; {SITE.address.locality}, {SITE.address.region}, Colombia
        </div>
      </div>
    </footer>
  )
}
