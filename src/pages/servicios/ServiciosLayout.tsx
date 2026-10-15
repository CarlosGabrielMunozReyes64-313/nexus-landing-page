import { Outlet, useLocation } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import SubNav from '../../components/SubNav/SubNav';
import { SERVICES } from '../../data/siteData';

// Subpestañas de Servicios: una vista general + una vista por cada eje.
// Mismo patrón que "Quiénes Somos": cada subpestaña es una ruta real.
const SERVICIOS_SUBNAV = [
  { to: '/servicios', label: 'Todos los Servicios', end: true },
  { to: '/servicios/eje-1', label: 'Ciudades y Territorios' },
  { to: '/servicios/eje-2', label: 'Biodiversidad y SbN' },
  { to: '/servicios/eje-3', label: 'Innovación Social' },
  { to: '/servicios/eje-4', label: 'Proyectos CTI' },
];

export default function ServiciosLayout() {
  const { pathname } = useLocation();
  // Cada eje tiene su propio H1 (antes las cinco páginas compartían
  // «Nuestro portafolio de servicios»), para que Google sepa de qué trata.
  const m = pathname.match(/\/servicios\/eje-(\d)/);
  const eje = m ? (SERVICES as any[])[Number(m[1]) - 1] : undefined;

  return (
    <>
      {eje ? (
        <Hero
          small
          longTitle
          tag={`Eje ${m![1]} · Nuestros servicios`}
          title={
            <>
              Consultoría en <span>{eje.svcTitle}</span>
            </>
          }
        />
      ) : (
        <Hero
          small
          tag="Nuestro portafolio de servicios"
          title={
            <>
              Servicios de sostenibilidad, RSE y <span>desarrollo territorial</span>
            </>
          }
        />
      )}
      <SubNav items={SERVICIOS_SUBNAV} ariaLabel="Servicios de NEXUS" />
      <Outlet />
    </>
  );
}
