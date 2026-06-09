import PillarIcons from '../icons/PillarIcons'
import './PillarCard.css';

// Tarjeta de un pilar estratégico. Recibe un objeto `pillar` de los datos.
export default function PillarCard({ pillar }) {
  const Icon = PillarIcons[pillar.icon]
  return (
    <div className="pillar-card">
      <div className="pillar-icon">{Icon && <Icon />}</div>
      <div className="pillar-title">{pillar.title}</div>
      <p className="pillar-text">{pillar.text}</p>
    </div>
  )
}
