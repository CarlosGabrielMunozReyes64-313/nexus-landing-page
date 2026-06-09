import { useState } from 'react';
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

// Clave pública de Web3Forms. Es segura de exponer: solo permite ENVIAR
// al correo que registraste en web3forms.com; no da acceso a leer nada.
// Aun así la leemos desde .env para no dejarla escrita en el código.
const WEB3FORMS_KEY = 'ae6e52e2-e971-4289-9699-25c4e8015ea3';

// Formulario de contacto con envío real vía Web3Forms.
// Estados: 'idle' (inicial) | 'sending' (enviando) | 'success' | 'error'.
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          // Asunto y remitente que verás en tu bandeja de entrada.
          subject: `Nuevo mensaje de ${form.nombre || 'contacto'} — Sitio NEXUS`,
          from_name: 'Sitio web NEXUS',
          // 'replyto' permite que al responder el correo le llegue a quien escribió.
          replyto: form.email,
          // Campos del formulario (los nombres son los que verás en el correo).
          Nombre: form.nombre,
          Organizacion: form.org,
          Correo: form.email,
          'Tipo de organizacion': form.tipo,
          'Area de interes': form.eje,
          Mensaje: form.mensaje,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setForm(INITIAL);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
      } else {
        // Web3Forms respondió pero marcó un fallo (p. ej. clave inválida).
        setStatus('error');
      }
    } catch (err) {
      // Error de red u otro problema inesperado.
      console.error('Error al enviar el formulario:', err);
      setStatus('error');
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

        {status === 'error' && (
          <p style={{ color: '#c0392b', fontSize: '13px', margin: 0 }}>
            Hubo un problema al enviar el mensaje. Inténtelo de nuevo o escríbanos directamente a
            info@nexus-sostenible.co
          </p>
        )}

        <button type="submit" className="form-submit" disabled={sending}>
          {sending ? 'Enviando…' : 'Enviar mensaje →'}
        </button>
      </form>

      <Toast show={showToast} message="✓ Mensaje enviado. Le contactaremos pronto." />
    </>
  );
}
