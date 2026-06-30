import { NavLink } from 'react-router-dom';
import './SubNav.css';

// Barra de subpestañas (pills) que se muestra bajo el hero en las secciones
// con varias vistas (Quiénes Somos y Servicios). Cada pill navega a una ruta
// real, de modo que cada subpestaña es una vista independiente.
//
// items: [{ label, to, end? }]
export default function SubNav({ items, ariaLabel = 'Subsecciones' }) {
  return (
    <nav className="subnav" aria-label={ariaLabel}>
      <div className="subnav-inner">
        {items.map((item) => (
          <NavLink
            key={item.to + item.label}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `subnav-link${isActive ? ' active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
