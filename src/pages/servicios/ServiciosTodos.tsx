import EjesList from '../../components/EjesList/EjesList';
import ServiceMosaic from '../../components/ServiceMosaic/ServiceMosaic';

// Vista "Todos los Servicios": el catálogo completo como mosaico numerado y,
// a continuación, el detalle de los cuatro ejes (solo títulos).
export default function ServiciosTodos() {
  return (
    <>
      {/* Servicios en mosaico (antes carrusel) */}
      <section className="alt">
        <div className="section-inner">
          <div className="section-tag">Nuestros Servicios</div>
          <h2 className="section-title">Soluciones técnicas que transforman territorios</h2>
          <p className="section-body">
            Ciencia, gestión territorial y alianzas convertidas en resultados medibles para
            cada desafío.
          </p>
          <ServiceMosaic />
        </div>
      </section>

      {/* Detalle de los ejes de trabajo — solo títulos */}
      <EjesList titlesOnly />
    </>
  );
}
