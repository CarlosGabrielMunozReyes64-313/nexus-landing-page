import { useState, useRef, useEffect } from 'react';
import { CONTACT_ORG_TYPES, CONTACT_INTEREST_AREAS } from '../../data/siteData';
import Toast from '../Toast/Toast';
import './ContactForm.css';

const INITIAL = {
  nombre: '',
  org: '',
  email: '',
  tipo: '',
  eje: '',
  mensaje: '',
};

// ── Configuración leída desde variables de entorno (Vite) ──────────────
// La SITE KEY de reCAPTCHA es PÚBLICA (se muestra en el navegador). La
// clave SECRETA vive SOLO en el backend FastAPI y nunca llega aquí.
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;
const API_URL = (import.meta.env.VITE_API_URL as string) || 'http://localhost:8000';
const RECAPTCHA_SRC =
  'https://www.google.com/recaptcha/api.js?render=explicit&hl=es';

// Carga el script de reCAPTCHA una sola vez y resuelve cuando está listo.
let recaptchaScriptPromise: Promise<void> | null = null;
function loadRecaptchaScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if ((window as any).grecaptcha?.render) return Promise.resolve();
  if (recaptchaScriptPromise) return recaptchaScriptPromise;

  recaptchaScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = RECAPTCHA_SRC;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error('No se pudo cargar reCAPTCHA'));
    document.head.appendChild(script);

    // grecaptcha puede tardar un poco tras cargar el script: esperamos a
    // que la función render esté disponible.
    const start = Date.now();
    const check = () => {
      if ((window as any).grecaptcha?.render) return resolve();
      if (Date.now() - start > 10000)
        return reject(new Error('reCAPTCHA no respondió a tiempo'));
      setTimeout(check, 100);
    };
    check();
  });
  return recaptchaScriptPromise;
}

// Formulario de contacto con CAPTCHA (Google reCAPTCHA v2 "no soy un robot",
// que puede escalar a la selección de imágenes) + envío real.
// El token del captcha se verifica en el backend FastAPI, que también
// reenvía el mensaje. Ninguna clave secreta se expone en el navegador.
// Estados: 'idle' | 'sending' | 'success' | 'error'.
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const [showToast, setShowToast] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Monta el widget de reCAPTCHA una vez que el script está disponible.
  useEffect(() => {
    let cancelled = false;

    loadRecaptchaScript()
      .then(() => {
        if (cancelled || !widgetRef.current) return;
        const grecaptcha = (window as any).grecaptcha;
        if (!grecaptcha || widgetIdRef.current !== null) return;

        widgetIdRef.current = grecaptcha.render(widgetRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: 'light',
          callback: (token: string) => setCaptchaToken(token),
          'expired-callback': () => setCaptchaToken(''),
          'error-callback': () => setCaptchaToken(''),
        });
      })
      .catch(() => {
        setErrorMsg('No se pudo cargar el captcha. Recarga la página.');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Reinicia el widget para exigir un nuevo token en el próximo envío.
  const resetCaptcha = () => {
    const grecaptcha = (window as any).grecaptcha;
    if (grecaptcha && widgetIdRef.current !== null)
      grecaptcha.reset(widgetIdRef.current);
    setCaptchaToken('');
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMsg('');

    // Sin token de captcha resuelto no dejamos enviar.
    if (!captchaToken) {
      setStatus('error');
      setErrorMsg('Por favor completa la verificación "No soy un robot".');
      return;
    }

    setStatus('sending');

    try {
      // Enviamos los datos del formulario + el token del captcha al backend.
      // El backend verifica el token con Google (usando la clave SECRETA)
      // y solo entonces procesa/reenvía el mensaje.
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          org: form.org,
          email: form.email,
          tipo: form.tipo,
          eje: form.eje,
          mensaje: form.mensaje,
          captcha_token: captchaToken,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus('success');
        setForm(INITIAL);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        resetCaptcha();
      } else {
        setStatus('error');
        setErrorMsg(
          data.detail ||
            'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.'
        );
        resetCaptcha();
      }
    } catch (err) {
      console.error('Error al enviar el formulario:', err);
      setStatus('error');
      setErrorMsg(
        'No se pudo contactar el servidor. Verifica que el backend esté en marcha.'
      );
      resetCaptcha();
    }
  };

  const sending = status === 'sending';

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            placeholder="Su nombre y apellido"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="org">Organización / Institución</label>
          <input
            type="text"
            id="org"
            placeholder="Entidad o empresa que representa"
            value={form.org}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="correo@organizacion.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipo">Tipo de organización</label>
          <select id="tipo" value={form.tipo} onChange={handleChange}>
            <option value="">Seleccione...</option>
            {CONTACT_ORG_TYPES.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="eje">Área de interés</label>
          <select id="eje" value={form.eje} onChange={handleChange}>
            <option value="">Seleccione un eje temático...</option>
            {CONTACT_INTEREST_AREAS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Cuéntenos sobre su proyecto o desafío</label>
          <textarea
            id="mensaje"
            placeholder="Describa brevemente el contexto, el alcance y los objetivos de su iniciativa. Entre más detalle nos comparta, mejor podremos orientarle desde el primer contacto."
            value={form.mensaje}
            onChange={handleChange}
          />
        </div>

        {/* Widget de CAPTCHA (Google reCAPTCHA v2). Puede mostrar la
            selección de imágenes cuando Google escala la verificación. */}
        <div className="form-group">
          <div className="captcha-wrap" ref={widgetRef} />
        </div>

        {status === 'error' && errorMsg && (
          <p style={{ color: '#c0392b', fontSize: '20.8px', margin: 0 }}>
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          className="form-submit"
          disabled={sending || !captchaToken}
        >
          {sending ? 'Enviando…' : 'Enviar mensaje →'}
        </button>
      </form>

      <Toast show={showToast} message="✓ Mensaje enviado. Le contactaremos pronto." />
    </>
  );
}
