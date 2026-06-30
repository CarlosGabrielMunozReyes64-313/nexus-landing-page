import { SERVICES } from '../../data/siteData';
import { EjeRow } from '../../components/EjesList/EjesList';
import '../../components/EjesList/EjesList.css';

// Vista de un único eje de trabajo. Recibe el `id` del eje (tab1..tab4) y
// muestra solo ese eje en detalle, con su imagen, descripción y componentes.
export default function ServicioEje({ id }) {
  const index = SERVICES.findIndex((s) => s.id === id);
  const service = SERVICES[index];

  if (!service) {
    return (
      <section>
        <div className="section-inner">
          <p className="section-body">Eje no encontrado.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="ejes-list-section">
      <div className="ejes-list-head">
        <div className="section-tag">{service.name}</div>
        <h2 className="section-title">{service.svcTitle}</h2>
        {service.svcSub && <p className="ejes-list-intro">{service.svcSub}</p>}
      </div>

      <div className="ejes-list">
        <EjeRow service={service} index={index} />
      </div>
    </section>
  );
}
