import ServiceMosaic from '../../components/ServiceMosaic/ServiceMosaic';
import ServiceValues from '../../components/ServiceValues/ServiceValues';

// Subpestaña "Catálogo": todos los servicios en un mosaico numerado, tal como
// en la referencia, seguido de la franja de valores diferenciales.
export default function ServiciosCatalogo() {
  return (
    <section className="alt">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <div className="section-tag">Nuestros Servicios</div>
        <h2 className="section-title">Soluciones técnicas que transforman territorios</h2>
        <p className="section-body" style={{ maxWidth: '680px', margin: '0 auto' }}>
          Servicios especializados para acompañar a entidades públicas, empresas y
          organizaciones en cada etapa de sus proyectos de desarrollo sostenible.
        </p>

        <ServiceMosaic />
        <ServiceValues />
      </div>
    </section>
  );
}
