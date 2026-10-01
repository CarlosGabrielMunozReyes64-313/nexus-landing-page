import { Link } from "react-router-dom";
import "./PillarCard.css";

// Tarjeta de un pilar estratégico. Recibe un objeto `pillar` de los datos.
// Muestra el ícono (imagen) arriba y el título debajo, estilo "feature".
// Si el pilar tiene `to`, la tarjeta enlaza a la página de ese eje.
export default function PillarCard({ pillar }) {
  const inner = (
    <>
      <div className="pillar-icon">
        <img src={pillar.icon} alt="" aria-hidden="true" />
      </div>
      <h3 className="pillar-title">{pillar.title}</h3>
    </>
  );
  return pillar.to ? (
    <Link
      className="pillar-card pillar-card--link"
      to={pillar.to}
      draggable={false}
    >
      {inner}
    </Link>
  ) : (
    <article className="pillar-card">{inner}</article>
  );
}
