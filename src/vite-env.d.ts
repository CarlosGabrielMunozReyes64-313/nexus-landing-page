/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** SITE KEY pública de Google reCAPTCHA v3. */
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
  /** URL base del backend FastAPI (p. ej. http://localhost:8000). */
  readonly VITE_API_URL?: string;
  /** Dominio canónico del sitio (por defecto https://www.nexusinnovacion.com). */
  readonly VITE_SITE_URL?: string;
  /** Medición (opcionales). */
  readonly VITE_GA4_ID?: string;
  readonly VITE_GTM_ID?: string;
  readonly VITE_META_PIXEL_ID?: string;
  /** Código de verificación de Google Search Console (meta google-site-verification). */
  readonly VITE_GOOGLE_SITE_VERIFICATION?: string;
  /** Contacto (opcionales; por defecto los de src/config/site.ts). */
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_CONTACT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/** Fecha del build (AAAA-MM-DD), definida en vite.config.ts. */
declare const __BUILD_DATE__: string;
