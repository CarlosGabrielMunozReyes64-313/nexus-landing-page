import { Outlet } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import SubNav from '../../components/SubNav/SubNav';

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
  return (
    <>
      <Hero
        small
        tag="Soluciones de Vanguardia"
        title={
          <>
            Nuestro portafolio de <span>servicios</span>
          </>
        }
      />
      <SubNav items={SERVICIOS_SUBNAV} ariaLabel="Servicios de NEXUS" />
      <Outlet />
    </>
  );
}
