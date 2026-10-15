import { Outlet, useLocation } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import SubNav from '../../components/SubNav/SubNav';
import '../Quienes.css';

const QUIENES_SUBNAV = [
  { to: '/quienes/modelo', label: 'Nuestro Modelo' },
  { to: '/quienes/principios', label: 'Nuestros Principios' },
  { to: '/quienes/desafios', label: 'Desafíos Estratégicos' },
  { to: '/quienes/equipo', label: 'Nuestro Equipo' },
];

// Título (H1) propio de cada subpestaña. Google entiende mejor cada página
// cuando su H1 es único y describe lo que hay en ella; antes las cuatro
// compartían el mismo H1.
const QUIENES_H1: Record<string, { lead: string; accent: string }> = {
  '/quienes/modelo': { lead: 'Quiénes somos:', accent: 'nuestro modelo' },
  '/quienes/principios': { lead: 'Nuestros', accent: 'principios' },
  '/quienes/desafios': { lead: 'Desafíos', accent: 'estratégicos' },
  '/quienes/equipo': { lead: 'Nuestro equipo', accent: 'de trabajo' },
};

// Estructura común de la sección "Quiénes Somos": hero + subpestañas.
// Cada subpestaña (Outlet) es una vista independiente con su propia
// información (Nuestro Modelo, Principios, Desafíos, Equipo).
export default function QuienesLayout() {
  const { pathname } = useLocation();
  const h1 = QUIENES_H1[pathname.replace(/\/+$/, '')] ?? QUIENES_H1['/quienes/modelo'];

  return (
    <>
      <Hero
        small
        tag="El NEXUS de Expertos"
        title={
          <>
            {h1.lead} <span>{h1.accent}</span>
          </>
        }
        subtitle="Solvencia técnica al servicio del territorio."
      />
      <SubNav items={QUIENES_SUBNAV} ariaLabel="Secciones de Quiénes Somos" />
      <Outlet />
    </>
  );
}
