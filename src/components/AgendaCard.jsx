// Tarjeta de una agenda global (página de alianzas). Recibe `agenda`.
export default function AgendaCard({ agenda }) {
  return (
    <div className="agenda-card">
      <div className="agenda-icon">{agenda.icon}</div>
      <div>
        <div className="agenda-title">{agenda.title}</div>
        <p className="agenda-text">{agenda.text}</p>
      </div>
    </div>
  )
}
