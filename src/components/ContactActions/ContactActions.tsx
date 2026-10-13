import { Link } from 'react-router-dom';
import { SITE, whatsappLink, WHATSAPP_MESSAGES } from '../../config/site';
import { WhatsAppIcon } from '../WhatsAppButton/WhatsAppButton';
import { PhoneIcon, MailIcon, FormIcon } from '../icons/ContactIcons';
import './ContactActions.css';

/*
  ContactActions — botones de contacto directo.
  Un clic y la persona queda conectada con NEXUS por el canal que prefiera:
  WhatsApp, llamada (tel:), correo (mailto:) o el formulario de contacto.

  Los clics se miden solos (src/lib/analytics.ts): whatsapp_click,
  phone_click y email_click, con `data-track` como ubicación del botón.

  Uso:
    <ContactActions track="banda-contacto" />
    <ContactActions tone="dark" track="articulo" intro="O escríbanos directamente:" />
*/
type Props = {
  /** 'light' sobre fondos claros, 'dark' sobre fondos verde oscuro. */
  tone?: 'light' | 'dark';
  /** Ubicación del botón para la medición (data-track). */
  track: string;
  /** Mensaje prellenado de WhatsApp. */
  whatsappMessage?: string;
  /** Asunto prellenado del correo. */
  emailSubject?: string;
  /** Muestra el botón que lleva al formulario de /contacto. */
  showForm?: boolean;
  /** Frase corta antes de los botones (opcional). */
  intro?: string;
};

export default function ContactActions({
  tone = 'light',
  track,
  whatsappMessage = WHATSAPP_MESSAGES.general,
  emailSubject = 'Consulta desde el sitio web',
  showForm = true,
  intro,
}: Props) {
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(emailSubject)}`;
  // El correo se puede partir en dos líneas justo después de la «@».
  const [emailUser, emailDomain = ''] = SITE.email.split('@');

  return (
    <div className={`ca ca--${tone}`}>
      {intro && <p className="ca-intro">{intro}</p>}
      <ul className="ca-list">
        <li>
          <a
            className="ca-btn ca-btn--wa"
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            data-track={track}
          >
            <WhatsAppIcon size={24} />
            <span className="ca-text">
              <span className="ca-label">Escribir por WhatsApp</span>
              <span className="ca-detail">Chat directo con el equipo</span>
            </span>
          </a>
        </li>
        <li>
          <a className="ca-btn" href={`tel:${SITE.phoneE164}`} data-track={track}>
            <PhoneIcon />
            <span className="ca-text">
              <span className="ca-label">Llamar</span>
              <span className="ca-detail">{SITE.phoneDisplay}</span>
            </span>
          </a>
        </li>
        <li>
          <a className="ca-btn" href={mailto} data-track={track}>
            <MailIcon />
            <span className="ca-text">
              <span className="ca-label">Enviar un correo</span>
              <span className="ca-detail ca-detail--email">
                {emailUser}@<wbr />
                {emailDomain}
              </span>
            </span>
          </a>
        </li>
        {showForm && (
          <li>
            <Link className="ca-btn" to="/contacto#formulario" data-track={track}>
              <FormIcon />
              <span className="ca-text">
                <span className="ca-label">Llenar el formulario</span>
                <span className="ca-detail">Cuéntenos su proyecto</span>
              </span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
