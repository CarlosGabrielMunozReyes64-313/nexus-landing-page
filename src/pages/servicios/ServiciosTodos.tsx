import ServicePillars from '../../components/ServicePillars/ServicePillars';
import ServiceValues from '../../components/ServiceValues/ServiceValues';

// Vista general de Servicios: una tarjeta-resumen por eje (diseño de la
// referencia) y, debajo, la franja de valores diferenciales. Cada tarjeta
// enlaza a su subpestaña para ver todos sus servicios en detalle.
export default function ServiciosTodos() {
  return (
    <section className="alt">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <div className="section-tag">Nuestros Servicios</div>
        <h2 className="section-title">Soluciones integrales para un desarrollo sostenible</h2>
        <p className="section-body" style={{ maxWidth: '680px', margin: '0 auto' }}>
          Acompañamos a entidades públicas, privadas y comunidades en la planificación,
          gestión e implementación de soluciones sostenibles con impacto real.
        </p>

        <ServicePillars />
        <ServiceValues />
      </div>
    </section>
  );
}
