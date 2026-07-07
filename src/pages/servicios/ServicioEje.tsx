import { SERVICES } from '../../data/siteData';
import ServiceMosaic from '../../components/ServiceMosaic/ServiceMosaic';

// Vista de un único eje (subpestaña). Muestra la cabecera del eje (título y
// descripción) y todas sus tarjetas de servicio en grande.
export default function ServicioEje({ id }) {
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return (
      <section className="alt">
        <div className="section-inner">
          <p className="section-body">Eje no encontrado.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="alt">
      <div className="section-inner">
        <div className="section-tag">{service.name}</div>
        <h2 className="section-title">{service.svcTitle}</h2>
        <p className="section-body">{service.desc}</p>

        <ServiceMosaic ejeId={id} />
      </div>
    </section>
  );
}
