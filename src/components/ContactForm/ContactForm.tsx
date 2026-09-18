import { useState, useEffect } from "react";
import { CONTACT_ORG_TYPES, CONTACT_INTEREST_AREAS } from "../../data/siteData";
import Toast from "../Toast/Toast";
import "./ContactForm.css";

const INITIAL = {
  nombre: "",
  org: "",
  email: "",
  tipo: "",
  eje: "",
  mensaje: "",
};

// ── Configuración leída desde variables de entorno (Vite) ──────────────
// La SITE KEY de reCAPTCHA es PÚBLICA (se muestra en el navegador). La clave
// SECRETA vive SOLO en el backend FastAPI y nunca llega aquí.
//
// ESTA VERSIÓN USA reCAPTCHA v3: no hay casilla que marcar. El token se genera
// de forma invisible en el momento del envío y el backend evalúa el "score"
// que Google asigna (0 = casi seguro un bot, 1 = casi seguro humano).
const RECAPTCHA_SITE_KEY =
  (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string) || "";
const API_URL =
  (import.meta.env.VITE_API_URL as string) || "http://localhost:8000";

// La acción identifica este formulario en las estadísticas de Google y el
// backend la verifica para que un token de otra página no sirva aquí.
const RECAPTCHA_ACTION = "contacto";

const RECAPTCHA_SRC = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;

// Carga el script de reCAPTCHA una sola vez y resuelve cuando está listo.
let recaptchaScriptPromise: Promise<void> | null = null;
function loadRecaptchaScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if ((window as any).grecaptcha?.execute) return Promise.resolve();
  if (recaptchaScriptPromise) return recaptchaScriptPromise;

  recaptchaScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-recaptcha="1"]',
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = RECAPTCHA_SRC;
      script.async = true;
      script.defer = true;
      script.dataset.recaptcha = "1";
      script.onerror = () => reject(new Error("No se pudo cargar reCAPTCHA"));
      document.head.appendChild(script);
    }

    const start = Date.now();
    const check = () => {
      if ((window as any).grecaptcha?.execute) return resolve();
      if (Date.now() - start > 10000)
        return reject(new Error("reCAPTCHA no respondió a tiempo"));
      setTimeout(check, 100);
    };
    check();
  });
  return recaptchaScriptPromise;
}

// Pide un token fresco a Google. Los tokens de v3 caducan a los 2 minutos,
// por eso se genera justo al enviar y no al cargar la página.
function getRecaptchaToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    const grecaptcha = (window as any).grecaptcha;
    if (!grecaptcha?.ready) return reject(new Error("reCAPTCHA no disponible"));
    grecaptcha.ready(() => {
      grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: RECAPTCHA_ACTION })
        .then(resolve)
        .catch(reject);
    });
  });
}

// Formulario de contacto con reCAPTCHA v3 (invisible) + envío real.
// El token se verifica en el backend FastAPI, que comprueba el score y reenvía
// el mensaje. Ninguna clave secreta se expone en el navegador.
// Estados: 'idle' | 'sending' | 'success' | 'error'.
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle");
  const [showToast, setShowToast] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Precargamos el script al montar para que el envío sea instantáneo.
  useEffect(() => {
    loadRecaptchaScript().catch(() => {
      setErrorMsg(
        "No se pudo cargar el sistema de verificación. Recarga la página.",
      );
    });
  }, []);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMsg("");
    setStatus("sending");

    try {
      // 1) Token invisible de reCAPTCHA v3, generado en este instante.
      await loadRecaptchaScript();
      const captchaToken = await getRecaptchaToken();

      // 2) Datos del formulario + token al backend, que verifica con Google
      //    usando la clave SECRETA y solo entonces reenvía el mensaje.
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        setStatus("success");
        setForm(INITIAL);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
      } else {
        setStatus("error");
        setErrorMsg(
          data.detail ||
            "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
        );
      }
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
      setStatus("error");
      setErrorMsg(
        "No se pudo contactar el servidor. Verifica que el backend esté en marcha.",
      );
    }
  };

  const sending = status === "sending";

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

        {status === "error" && errorMsg && (
          <p style={{ color: "#c0392b", fontSize: "20.8px", margin: 0 }}>
            {errorMsg}
          </p>
        )}

        <button type="submit" className="form-submit" disabled={sending}>
          {sending ? "Enviando…" : "Enviar mensaje →"}
        </button>

        {/* reCAPTCHA v3 exige mostrar este aviso si se oculta el badge. */}
        <p style={{ fontSize: "13px", opacity: 0.7, margin: 0 }}>
          Este sitio está protegido por reCAPTCHA y aplican la{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Política de Privacidad
          </a>{" "}
          y los{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noreferrer"
          >
            Términos de Servicio
          </a>{" "}
          de Google.
        </p>
      </form>

      <Toast
        show={showToast}
        message="✓ Mensaje enviado. Le contactaremos pronto."
      />
    </>
  );
}
