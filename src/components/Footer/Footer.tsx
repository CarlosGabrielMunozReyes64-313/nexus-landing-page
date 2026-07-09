import { Link } from 'react-router-dom'
import { FOOTER_NAV, FOOTER_TOPICS } from '../../data/siteData'
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              ne<span>x</span>us
            </div>
            <p className="footer-tagline">
              Innovación y Alianzas para el Desarrollo Sostenible.
              <br />
              Conectando conocimiento, ciencia y territorio para
              <br />
              transformar Colombia y América Latina.
            </p>
            <a className="footer-phone" href="tel:+573148607435">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+57 314 860 7435</span>
            </a>
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
                → Contáctenos
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 NEXUS – Innovación y Alianzas para el Desarrollo Sostenible &nbsp;·&nbsp; Colombia
        </div>
      </div>
    </footer>
  )
}
