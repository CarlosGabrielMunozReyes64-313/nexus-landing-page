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
