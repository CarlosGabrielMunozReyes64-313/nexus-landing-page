// Tarjeta de un aliado (página de alianzas). Recibe `ally`.
export default function AllyCard({ ally }) {
  return (
    <div className="ally-card">
      <div className="ally-logo">{ally.logo}</div>
      <div className="ally-name">{ally.name}</div>
      <div className="ally-type">{ally.type}</div>
    </div>
  )
}
