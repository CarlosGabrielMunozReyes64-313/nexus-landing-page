import { useEffect, useState } from 'react';
import { loadRecaptchaScript, submitToBackend } from '../../lib/recaptcha';
import { getUtm, trackLead } from '../../lib/analytics';
import { PILOT, whatsappLink, WHATSAPP_MESSAGES } from '../../config/site';
import { PILOT_FORM_OPTIONS } from '../../data/rseMipymes';
import '../ContactForm/ContactForm.css';
import './PilotForm.css';

const INITIAL = {
  nombre: '',
  cargo: '',
  org: '',
  email: '',
  telefono: '',
  municipio: '',
  sector: '',
  empleados: '',
  mensaje: '',
  autoriza: false,
};

/*
  PilotForm — Postulación al piloto «5 cupos · RSE para MiPymes».
  Usa el mismo backend que el formulario de contacto (/api/contact) con
  origen = "piloto-rse-mipymes", para que el correo llegue identificado.
*/
export default function PilotForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    loadRecaptchaScript().catch(() => {
      /* si falla, el envío mostrará el error y la opción de WhatsApp */
    });
  }, []);

  const onChange = (e: any) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [id]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMsg('');
    setStatus('sending');

    const result = await submitToBackend({
      nombre: form.nombre,
      cargo: form.cargo,
      org: form.org,
      email: form.email,
      telefono: form.telefono,
      municipio: form.municipio,
      sector: form.sector,
      empleados: form.empleados,
      tipo: 'MiPyme (micro, pequeña o mediana empresa)',
      eje: `RSE para MiPymes (piloto ${PILOT.year})`,
      mensaje: form.mensaje,
      autoriza_datos: form.autoriza,
      origen: 'piloto-rse-mipymes',
      pagina: window.location.pathname,
      ...getUtm(),
    });

    if (result.ok) {
      setStatus('success');
      trackLead('piloto-rse-mipymes', { municipio: form.municipio, sector: form.sector });
      setForm(INITIAL);
    } else {
      setStatus('error');
      setErrorMsg(result.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="pilot-success" role="status">
        <h3>Recibimos su postulación</h3>
        <p>
          Le escribiremos en los próximos días para contarle cómo sigue el proceso. Si quiere
          adelantar la conversación, escríbanos por WhatsApp.
        </p>
        <a
          className="btn-primary"
          href={whatsappLink(WHATSAPP_MESSAGES.pilot)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribir por WhatsApp
        </a>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form className="contact-form pilot-form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input id="nombre" type="text" autoComplete="name" required value={form.nombre} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="cargo">Cargo</label>
          <input id="cargo" type="text" autoComplete="organization-title" placeholder="Gerente, propietario…" value={form.cargo} onChange={onChange} />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="org">Nombre de la empresa</label>
        <input id="org" type="text" autoComplete="organization" required value={form.org} onChange={onChange} />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" autoComplete="email" required value={form.email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">WhatsApp o celular</label>
          <input id="telefono" type="tel" autoComplete="tel" required placeholder="300 000 0000" value={form.telefono} onChange={onChange} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="municipio">Municipio</label>
          <select id="municipio" required value={form.municipio} onChange={onChange}>
            <option value="">Seleccione…</option>
            {PILOT_FORM_OPTIONS.municipios.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="empleados">Tamaño del equipo</label>
          <select id="empleados" value={form.empleados} onChange={onChange}>
            <option value="">Seleccione…</option>
            {PILOT_FORM_OPTIONS.empleados.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="sector">Sector</label>
        <select id="sector" value={form.sector} onChange={onChange}>
          <option value="">Seleccione…</option>
          {PILOT_FORM_OPTIONS.sectores.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="mensaje">¿Qué le gustaría mejorar en su empresa? (opcional)</label>
        <textarea
          id="mensaje"
          placeholder="Por ejemplo: manejo de residuos, bienestar del equipo, relación con la comunidad, proveedores…"
          value={form.mensaje}
          onChange={onChange}
        />
      </div>

      <label className="form-check" htmlFor="autoriza">
        <input id="autoriza" type="checkbox" required checked={form.autoriza} onChange={onChange} />
        <span>
          Autorizo a NEXUS a usar estos datos para contactarme sobre el piloto, de acuerdo con la
          Ley 1581 de 2012 de protección de datos personales.
        </span>
      </label>

      {status === 'error' && errorMsg && (
        <p className="form-error" role="alert">
          {errorMsg}{' '}
          <a href={whatsappLink(WHATSAPP_MESSAGES.pilot)} target="_blank" rel="noopener noreferrer">
            Escribir por WhatsApp
          </a>
        </p>
      )}

      <button type="submit" className="form-submit" disabled={sending}>
        {sending ? 'Enviando…' : 'Postular mi empresa'}
      </button>

      <p className="form-legal">
        Este sitio está protegido por reCAPTCHA y aplican la{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
          Política de Privacidad
        </a>{' '}
        y los{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">
          Términos de Servicio
        </a>{' '}
        de Google.
      </p>
    </form>
  );
}
