// =====================================================
//  Medición · GA4 + Google Tag Manager + Píxel de Meta
//  Se activa solo con las variables de entorno:
//    VITE_GA4_ID          (ej. G-XXXXXXXXXX)
//    VITE_GTM_ID          (ej. GTM-XXXXXXX)        opcional
//    VITE_META_PIXEL_ID   (ej. 123456789012345)
//  Sin variables no se carga nada (útil en desarrollo).
//
//  Eventos que se envían:
//    page_view        cada cambio de página (el sitio es una SPA)
//    generate_lead    formulario enviado con éxito  → Meta: Lead
//    whatsapp_click   clic en cualquier enlace de WhatsApp → Meta: Contact
//    phone_click      clic en un enlace tel:        → Meta: Contact
//    email_click      clic en un enlace mailto:     → Meta: Contact
// =====================================================

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    fbq?: any;
    _fbq?: any;
  }
}

const env = import.meta.env;
const GA4_ID = (env.VITE_GA4_ID || '').trim();
const GTM_ID = (env.VITE_GTM_ID || '').trim();
const PIXEL_ID = (env.VITE_META_PIXEL_ID || '').trim();

let started = false;
const isBrowser = () => typeof window !== 'undefined';

function loadScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

// ── UTM: se guardan al llegar y se adjuntan a los formularios ──
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];
const UTM_STORAGE = 'nexus_utm';

function captureUtm() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) found[k] = v.slice(0, 200);
    });
    if (Object.keys(found).length) sessionStorage.setItem(UTM_STORAGE, JSON.stringify(found));
  } catch {
    /* almacenamiento bloqueado: se ignora */
  }
}

export function getUtm(): Record<string, string> {
  if (!isBrowser()) return {};
  try {
    return JSON.parse(sessionStorage.getItem(UTM_STORAGE) || '{}');
  } catch {
    return {};
  }
}

// ── Inicialización ──
export function initAnalytics() {
  if (!isBrowser() || started) return;
  started = true;
  window.dataLayer = window.dataLayer || [];
  captureUtm();

  if (GTM_ID) {
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`);
  }

  if (GA4_ID) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`);
    window.gtag = function gtag() {
      // gtag exige pasar el objeto `arguments` tal cual.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    // Las páginas vistas se envían a mano en cada cambio de ruta.
    window.gtag('config', GA4_ID, { send_page_view: false });
  }

  if (PIXEL_ID) {
    // Fragmento oficial del Píxel de Meta, sin minificar.
    const fbq: any = function (...args: any[]) {
      fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
    };
    if (!window.fbq) {
      window.fbq = fbq;
      window._fbq = fbq;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
      loadScript('https://connect.facebook.net/en_US/fbevents.js');
    }
    window.fbq('init', PIXEL_ID);
  }

  // Clics en WhatsApp / teléfono / correo en cualquier parte del sitio.
  document.addEventListener('click', onDocumentClick, true);
}

function onDocumentClick(e: MouseEvent) {
  const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
  if (!a) return;
  const href = a.getAttribute('href') || '';
  const where = a.dataset.track || window.location.pathname;
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(href)) {
    trackEvent('whatsapp_click', { link_location: where });
    trackMeta('Contact', { method: 'whatsapp' });
  } else if (href.startsWith('tel:')) {
    trackEvent('phone_click', { link_location: where });
    trackMeta('Contact', { method: 'phone' });
  } else if (href.startsWith('mailto:')) {
    trackEvent('email_click', { link_location: where });
    trackMeta('Contact', { method: 'email' });
  }
}

// ── API pública ──
export function trackEvent(name: string, params: Record<string, any> = {}) {
  if (!isBrowser()) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  if (GA4_ID && window.gtag) window.gtag('event', name, params);
}

function trackMeta(event: string, params: Record<string, any> = {}) {
  if (PIXEL_ID && window.fbq) window.fbq('track', event, params);
}

export function trackPageView(path: string) {
  if (!isBrowser()) return;
  const params = {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'page_view_spa', ...params });
  if (GA4_ID && window.gtag) window.gtag('event', 'page_view', params);
  trackMeta('PageView');
}

/** Formulario enviado con éxito. `form` identifica cuál (contacto / piloto). */
export function trackLead(form: string, params: Record<string, any> = {}) {
  trackEvent('generate_lead', { form_name: form, ...params });
  trackMeta('Lead', { content_name: form });
}
