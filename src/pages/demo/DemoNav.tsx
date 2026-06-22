import { NavLink, Link } from 'react-router-dom';
import styles from './DemoNav.module.css';

/**
 * Barra de navegación que vive dentro del demo de Huella Ecológica.
 * Permite moverse entre las calculadoras y volver al portafolio de NEXUS.
 */
export default function DemoNav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.bar}>
      <Link to="/portafolio" className={styles.back}>
        ← Volver al portafolio
      </Link>
      <NavLink to="/proyecto-demo" end className={linkClass}>
        🌍 Inicio
      </NavLink>
      <NavLink to="/proyecto-demo/carbono" className={linkClass}>
        🌱 Carbono
      </NavLink>
      <NavLink to="/proyecto-demo/hidrica" className={linkClass}>
        💧 Hídrica
      </NavLink>
      <NavLink to="/proyecto-demo/dashboard" className={linkClass}>
        📊 Dashboard
      </NavLink>
    </nav>
  );
}
