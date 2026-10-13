import { useLocation } from 'react-router-dom';
import ContactActions from '../ContactActions/ContactActions';
import { ARTICLES, articlePath } from '../../lib/blog';
import './ContactBand.css';

/*
  ContactBand — franja «¿Conversamos?» antes del pie de página.
  Pone WhatsApp, llamada, correo y formulario al alcance de un clic en
  todas las páginas.

  No se muestra donde la página ya tiene sus propios canales completos:
  /contacto, /rse-mipymes y cada artículo del blog (que los trae en su
  cierre). Una dirección inexistente (404) sí la muestra, igual que el
  404.html prerenderizado, para que la hidratación coincida.
*/
const OWN_CHANNELS = new Set<string>([
  '/contacto',
  '/rse-mipymes',
  ...ARTICLES.map((a) => articlePath(a)),
]);

export default function ContactBand() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  if (OWN_CHANNELS.has(path)) return null;

  return (
    <section className="contact-band" aria-labelledby="contact-band-title">
      <div className="section-inner contact-band-inner">
        <div className="contact-band-text">
          <h2 id="contact-band-title" className="contact-band-title">
            ¿Conversamos sobre su proyecto?
          </h2>
          <p className="contact-band-body">
            Elija el canal que le quede más cómodo. Le responde directamente el equipo de NEXUS.
          </p>
        </div>
        <ContactActions track="banda-contacto" />
      </div>
    </section>
  );
}
