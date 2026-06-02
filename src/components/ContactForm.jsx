import { useState } from 'react'
import { CONTACT_ORG_TYPES, CONTACT_INTEREST_AREAS } from '../data/siteData'
import Toast from './Toast'

const INITIAL = {
  nombre: '',
  org: '',
  email: '',
  tipo: '',
  eje: '',
  mensaje: '',
}

// Formulario de contacto con estado controlado.
// Al enviar muestra un toast durante 4 segundos y limpia los campos,
// replicando el comportamiento de handleForm() del original.
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL)
  const [showToast, setShowToast] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría el envío real (fetch a tu API o servicio de correo).
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
    setForm(INITIAL)
  }

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

        <button type="submit" className="form-submit">
          Enviar mensaje →
        </button>
      </form>

      <Toast show={showToast} message="✓ Mensaje enviado. Le contactaremos pronto." />
    </>
  )
}
