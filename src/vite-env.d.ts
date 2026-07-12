/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** SITE KEY pública de Google reCAPTCHA v2. */
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
  /** URL base del backend FastAPI (p. ej. http://localhost:8000). */
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
