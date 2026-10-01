// reCAPTCHA v3 (invisible): el token se genera al enviar y el backend
// verifica el score con la clave SECRETA. Nada secreto vive aquí.

export const RECAPTCHA_SITE_KEY = (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string) || '';
export const API_URL = (import.meta.env.VITE_API_URL as string) || 'http://localhost:8000';

// La acción debe coincidir con RECAPTCHA_EXPECTED_ACTION del backend.
export const RECAPTCHA_ACTION = 'contacto';

let scriptPromise: Promise<void> | null = null;

/** Carga el script de reCAPTCHA una sola vez. */
export function loadRecaptchaScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if ((window as any).grecaptcha?.execute) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    if (!document.querySelector('script[data-recaptcha="1"]')) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.dataset.recaptcha = '1';
      script.onerror = () => {
        scriptPromise = null;
        reject(new Error('No se pudo cargar reCAPTCHA'));
      };
      document.head.appendChild(script);
    }
    const start = Date.now();
    const check = () => {
      if ((window as any).grecaptcha?.execute) return resolve();
      if (Date.now() - start > 10000) {
        scriptPromise = null;
        return reject(new Error('reCAPTCHA no respondió a tiempo'));
      }
      setTimeout(check, 100);
    };
    check();
  });
  return scriptPromise;
}

/** Token fresco (caduca a los 2 minutos, por eso se pide al enviar). */
export function getRecaptchaToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    const grecaptcha = (window as any).grecaptcha;
    if (!grecaptcha?.ready) return reject(new Error('reCAPTCHA no disponible'));
    grecaptcha.ready(() => {
      grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: RECAPTCHA_ACTION }).then(resolve).catch(reject);
    });
  });
}

export type SubmitResult = { ok: boolean; message?: string };

/** Envía un formulario al backend con token de reCAPTCHA. */
export async function submitToBackend(payload: Record<string, any>): Promise<SubmitResult> {
  try {
    await loadRecaptchaScript();
    const captcha_token = await getRecaptchaToken();
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, captcha_token }),
    });
    const data = await response.json().catch(() => ({}));
    if (response.ok && data.success) return { ok: true };
    return {
      ok: false,
      message: data.detail || 'No se pudo enviar el mensaje. Inténtelo de nuevo o escríbanos por WhatsApp.',
    };
  } catch (err) {
    console.error('Error al enviar el formulario:', err);
    return {
      ok: false,
      message: 'No se pudo conectar con el servidor. Inténtelo de nuevo o escríbanos por WhatsApp.',
    };
  }
}
