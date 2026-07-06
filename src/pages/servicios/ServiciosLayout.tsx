import { Outlet } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import SubNav from '../../components/SubNav/SubNav';

const SERVICIOS_SUBNAV = [
  { to: '/servicios', label: 'Todos los Servicios', end: true },
  { to: '/servicios/catalogo', label: 'Catálogo de Servicios' },
  { to: '/servicios/eje-1', label: 'Gobernanza' },
  { to: '/servicios/eje-2', label: 'Ambiente y Riesgo' },
  { to: '/servicios/eje-3', label: 'Economía Circular' },
  { to: '/servicios/eje-4', label: 'TIG y Datos' },
];

// Estructura común de "Servicios": hero + subpestañas. Cada subpestaña es una
// vista independiente: "Todos los Servicios" (visión general) y una vista por
// cada eje de trabajo.
export default function ServiciosLayout() {
  return (
    <>
      <Hero
        small
        tag="Soluciones de Vanguardia"
        title={
          <>
            Cuatro ejes que definen <span>nuestro alcance</span>
          </>
        }
      />
      <SubNav items={SERVICIOS_SUBNAV} ariaLabel="Servicios de NEXUS" />
      <Outlet />
    </>
  );
}
