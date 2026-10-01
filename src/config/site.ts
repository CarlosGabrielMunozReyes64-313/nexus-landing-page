// =====================================================
//  NEXUS · Configuración central del sitio
//  Un solo lugar para los datos de contacto, la descripción
//  oficial y los enlaces a redes. Todo el sitio (pie de página,
//  botón de WhatsApp, metadatos para Google e IA) lee de aquí.
// =====================================================

const env = import.meta.env;

/** Descripción oficial. Úsela IGUAL en Google Business, LinkedIn, redes y
 *  directorios: así Google, ChatGPT y Gemini ubican a NEXUS en su mercado real. */
export const OFFICIAL_DESCRIPTION =
  "Consultora de sostenibilidad, RSE y desarrollo territorial con sede en Candelaria, Valle del Cauca.";

export const SITE = {
  name: "NEXUS",
  brandName: "NEXUS – Innovación y Alianzas para el Desarrollo Sostenible",
  legalName: "NEXUS Innovación y Alianzas para un Futuro Sostenible S.A.S.",
  // Dominio canónico (con www, que es el que responde el sitio).
  url: (env.VITE_SITE_URL || "https://www.nexusinnovacion.com").replace(
    /\/+$/,
    "",
  ),
  description: OFFICIAL_DESCRIPTION,
  longDescription:
    "NEXUS es una consultora de sostenibilidad, RSE y desarrollo territorial con sede en Candelaria, Valle del Cauca. Acompaña a gobiernos, empresas, MiPymes, cooperación internacional y comunidades en proyectos de ciudades sostenibles, biodiversidad y soluciones basadas en la naturaleza, innovación social y ciencia, tecnología e innovación.",
  locale: "es_CO",
  language: "es-CO",

  // ── Contacto ──
  phoneDisplay: "+57 314 860 7435",
  phoneE164: "+573148607435",
  // Número de WhatsApp en formato internacional, sin «+» ni espacios.
  whatsapp: env.VITE_WHATSAPP_NUMBER || "573148607435",
  // Correo visible. Si cambia, actualícelo aquí o con la variable
  // VITE_CONTACT_EMAIL.
  email: env.VITE_CONTACT_EMAIL || "proyectos@nexusinnovacion.com",

  address: {
    streetAddress: "", // Complete con la dirección exacta cuando la tenga.
    locality: "Candelaria",
    region: "Valle del Cauca",
    country: "CO",
    countryName: "Colombia",
  },
  areaServed: ["Candelaria", "Palmira", "Valle del Cauca", "Cauca", "Colombia"],

  // ── Redes y perfiles (déjelos vacíos si aún no existen) ──
  // Solo se muestran los que tengan URL.
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    youtube: "",
  },
  // Enlace al perfil de Google Business (se muestra como «Cómo llegar»).
  googleBusinessUrl: "",
};

// ── Piloto «5 cupos · RSE para MiPymes» ───────────────
// Cuando termine la convocatoria, ponga `active: false`: la página
// /rse-mipymes seguirá funcionando como página de servicio.
export const PILOT = {
  active: true,
  slots: 5,
  year: 2026,
  program: "Tu Ciudad Innova y se Reinventa a la Acción",
  funder: "Cámara de Comercio de Palmira",
  funderUrl: "https://www.ccpalmira.org.co/",
  municipalities: ["Palmira", "Candelaria"],
};

/** Enlace de WhatsApp con mensaje prellenado. */
export function whatsappLink(
  message = "Hola NEXUS, quiero más información.",
): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general: "Hola NEXUS, quiero más información sobre sus servicios.",
  pilot:
    "Hola NEXUS, tengo una MiPyme y quiero información sobre el piloto de RSE para MiPymes.",
  referral:
    "Hola NEXUS, quiero recomendar una empresa para el piloto de RSE para MiPymes. Su nombre es: ",
};
