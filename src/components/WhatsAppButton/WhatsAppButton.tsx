import { useLocation } from 'react-router-dom';
import { SITE, whatsappLink, WHATSAPP_MESSAGES } from '../../config/site';
import { PhoneIcon, MailIcon } from '../icons/ContactIcons';
import './WhatsAppButton.css';

// Ícono de WhatsApp (trazo simplificado, hereda el color).
export function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.04 3C9.02 3 3.3 8.7 3.3 15.72c0 2.24.59 4.43 1.7 6.36L3.2 28.8l6.9-1.8a12.7 12.7 0 0 0 5.94 1.5h.01c7.02 0 12.74-5.7 12.74-12.72 0-3.4-1.33-6.6-3.73-9A12.66 12.66 0 0 0 16.04 3Zm0 23.3h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.1 1.07 1.1-3.99-.25-.41a10.5 10.5 0 0 1-1.62-5.6c0-5.83 4.75-10.57 10.6-10.57 2.83 0 5.49 1.1 7.49 3.1a10.5 10.5 0 0 1 3.1 7.48c0 5.84-4.75 10.58-10.52 10.58Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.2 2 .12.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z"
      />
    </svg>
  );
}

/*
  Botones flotantes de contacto: WhatsApp (principal), llamada y correo.
  Siempre a mano, en todas las páginas, para entrar en contacto con un clic.
  · WhatsApp: el mensaje prellenado cambia según la página (en la de
    MiPymes y en el blog menciona el piloto).
  · Llamar / correo: botones redondos; al pasar el cursor muestran el
    número o el correo (útil en computador, donde `tel:` no siempre abre).
  Los clics se miden solos como whatsapp_click, phone_click y email_click
  (ver src/lib/analytics.ts).
*/
export default function WhatsAppButton() {
  const { pathname } = useLocation();
  const isPilot = pathname.startsWith('/rse-mipymes') || pathname.startsWith('/blog/');
  const href = whatsappLink(isPilot ? WHATSAPP_MESSAGES.pilot : WHATSAPP_MESSAGES.general);
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent('Consulta desde el sitio web')}`;

  return (
    <div className="contact-dock" role="group" aria-label="Contacto directo con NEXUS">
      <a className="dock-btn" href={mailto} data-track="boton-flotante" aria-label={`Enviar un correo a ${SITE.email}`}>
        <MailIcon size={22} />
        <span className="dock-tip" aria-hidden="true">{SITE.email}</span>
      </a>
      <a className="dock-btn" href={`tel:${SITE.phoneE164}`} data-track="boton-flotante" aria-label={`Llamar al ${SITE.phoneDisplay}`}>
        <PhoneIcon size={22} />
        <span className="dock-tip" aria-hidden="true">Llamar al {SITE.phoneDisplay}</span>
      </a>
      <a
        className="wa-float"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a NEXUS por WhatsApp"
        data-track="boton-flotante"
      >
        <WhatsAppIcon />
        <span className="wa-float-label">Escríbanos</span>
      </a>
    </div>
  );
}
