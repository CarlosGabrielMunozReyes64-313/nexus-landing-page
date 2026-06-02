import { NavLink, Link } from 'react-router-dom'
import { NAV_ITEMS } from '../data/siteData'
import Logo from './icons/Logo'

// Barra de navegación. NavLink aplica la clase 'active' automáticamente
// según la ruta actual, reemplazando el showPage() manual del original.
export default function Navbar() {
  return (
    <nav>
      <Link className="nav-logo" to="/">
        <Logo />
        <span className="nav-brand">
          ne<span>x</span>us
        </span>
      </Link>

      <div className="nav-links">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              [item.cta ? 'nav-cta' : '', isActive ? 'active' : ''].filter(Boolean).join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
