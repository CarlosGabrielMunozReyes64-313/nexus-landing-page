import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/siteData';
import Logo from '../icons/Logo';
import LetrasLogo from '../icons/LetrasLogo';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Submenú abierto actualmente (por etiqueta). null = ninguno.
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const close = () => {
    setOpen(false);
    setOpenMenu(null);
  };

  // Cambia el tema del navbar (claro sobre el hero / oscuro al bajar).
  // rAF + listener pasivo para no bloquear el scroll en móvil.
  // Histéresis (60px al activar, 30px al desactivar) para evitar parpadeos
  // cuando el usuario se queda justo en el umbral.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > 30 : y > 60));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    onScroll(); // estado correcto si se recarga a mitad de página
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cierra el submenú al hacer clic fuera del navbar.
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  // Cierra el menú móvil con Escape (accesibilidad).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav
      ref={navRef}
      className={[scrolled ? 'is-scrolled' : 'is-top', open ? 'is-open' : '']
        .filter(Boolean)
        .join(' ')}
    >
      <Link className="nav-logo" to="/" onClick={close}>
        <Logo />
        <span className="nav-logo-text">
          <LetrasLogo />
        </span>
      </Link>

      <button
        className={`nav-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links${open ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) =>
          item.children ? (
            <div
              key={item.to}
              className={`nav-dropdown${openMenu === item.label ? ' open' : ''}`}
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="nav-dropdown-head">
                <NavLink
                  to={item.to}
                  onClick={close}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
                <button
                  type="button"
                  className="nav-dropdown-caret"
                  aria-label={`Mostrar opciones de ${item.label}`}
                  aria-expanded={openMenu === item.label}
                  onClick={() =>
                    setOpenMenu((v) => (v === item.label ? null : item.label))
                  }
                >
                  <svg viewBox="0 0 12 8" width="11" height="8" aria-hidden="true">
                    <path
                      d="M1 1l5 5 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="nav-submenu" role="menu">
                {item.children.map((child) => (
                  <NavLink
                    key={child.to + child.label}
                    to={child.to}
                    end={child.end}
                    role="menuitem"
                    className={({ isActive }) =>
                      `nav-submenu-item${isActive ? ' active' : ''}`
                    }
                    onClick={close}
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={close}
              className={({ isActive }) =>
                [item.cta ? 'nav-cta' : '', isActive ? 'active' : '']
                  .filter(Boolean)
                  .join(' ')
              }
            >
              {item.label}
            </NavLink>
          )
        )}
      </div>
    </nav>
  );
}