import './PillarCard.css';

// Tarjeta de un pilar estratégico. Recibe un objeto `pillar` de los datos.
// Muestra el ícono (imagen) arriba y el título debajo, estilo "feature".
export default function PillarCard({ pillar }) {
  return (
    <article className="pillar-card">
      <div className="pillar-icon">
        <img src={pillar.icon} alt="" />
      </div>
      <h3 className="pillar-title">{pillar.title}</h3>
    </article>
  );
}
