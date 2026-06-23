import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/siteData';
import Logo from '../icons/Logo';
import LetrasLogo from '../icons/LetrasLogo';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  // Detecta el scroll para volver la barra translúcida y ocultar el tagline
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
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
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={close}
            className={({ isActive }) =>
              [item.cta ? 'nav-cta' : '', isActive ? 'active' : ''].filter(Boolean).join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
