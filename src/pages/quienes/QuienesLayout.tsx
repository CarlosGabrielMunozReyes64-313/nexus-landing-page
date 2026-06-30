import { Outlet } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import SubNav from '../../components/SubNav/SubNav';
import '../Quienes.css';

const QUIENES_SUBNAV = [
  { to: '/quienes/modelo', label: 'Nuestro Modelo' },
  { to: '/quienes/principios', label: 'Nuestros Principios' },
  { to: '/quienes/desafios', label: 'Desafíos Estratégicos' },
  { to: '/quienes/equipo', label: 'Nuestro Equipo' },
];

// Estructura común de la sección "Quiénes Somos": hero + subpestañas.
// Cada subpestaña (Outlet) es una vista independiente con su propia
// información (Nuestro Modelo, Principios, Desafíos, Equipo).
export default function QuienesLayout() {
  return (
    <>
      <Hero
        small
        tag="El NEXUS de Expertos"
        title={
          <>
            Solvencia técnica al servicio <span>del territorio</span>
          </>
        }
      />
      <SubNav items={QUIENES_SUBNAV} ariaLabel="Secciones de Quiénes Somos" />
      <Outlet />
    </>
  );
}
