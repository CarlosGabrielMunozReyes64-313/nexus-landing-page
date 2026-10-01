import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';

// Página 404. El hosting la sirve con estado 404 real (dist/404.html), para
// que Google no indexe direcciones inexistentes como si fueran el inicio.
export default function NotFound() {
  return (
    <>
      <Hero small tag="Error 404" title="No encontramos esta página" />
      <section>
        <div className="section-inner">
          <p className="section-body" style={{ marginBottom: '2rem' }}>
            La dirección no existe o cambió. Estas páginas pueden servirle:
          </p>
          <ul className="notfound-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/rse-mipymes">RSE para MiPymes</Link></li>
            <li><Link to="/portafolio">Proyectos</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
