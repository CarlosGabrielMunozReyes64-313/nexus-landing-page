import { useState, useEffect } from "react";
import { CONTACT_ORG_TYPES, CONTACT_INTEREST_AREAS } from "../../data/siteData";
import { loadRecaptchaScript, submitToBackend } from "../../lib/recaptcha";
import { getUtm, trackLead } from "../../lib/analytics";
import { SITE, whatsappLink, WHATSAPP_MESSAGES } from "../../config/site";
import Toast from "../Toast/Toast";
import "./ContactForm.css";

const INITIAL = {
  nombre: "",
  org: "",
  email: "",
  telefono: "",
  tipo: "",
  eje: "",
  mensaje: "",
};

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
        "No se pudo cargar el sistema de verificación. Recargue la página.",
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

    const result = await submitToBackend({
      ...form,
      origen: "contacto",
      pagina: window.location.pathname,
      ...getUtm(),
    });

    if (result.ok) {
      setStatus("success");
      trackLead("contacto", { org_type: form.tipo, interest: form.eje });
      setForm(INITIAL);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    } else {
      setStatus("error");
      setErrorMsg(result.message);
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
            autoComplete="name"
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
            autoComplete="organization"
            value={form.org}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="correo@organizacion.com"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">WhatsApp (opcional)</label>
            <input
              type="tel"
              id="telefono"
              placeholder="300 000 0000"
              autoComplete="tel"
              value={form.telefono}
              onChange={handleChange}
            />
          </div>
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
          <p className="form-error" role="alert">
            {errorMsg}{" "}
            <a href={whatsappLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
          </p>
        )}

        <button type="submit" className="form-submit" disabled={sending}>
          {sending ? "Enviando…" : "Enviar mensaje"}
        </button>

        {/* reCAPTCHA v3 exige mostrar este aviso cuando se oculta el badge. */}
        <p className="form-legal">
          Este sitio está protegido por reCAPTCHA y aplican la{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Política de Privacidad
          </a>{" "}
          y los{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">
            Términos de Servicio
          </a>{" "}
          de Google. ¿Prefiere hablar directamente? Llámenos al{" "}
          <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>.
        </p>
      </form>

      <Toast
        show={showToast}
        message="✓ Mensaje enviado. Le contactaremos pronto."
      />
    </>
  );
}
