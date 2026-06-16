import HeroCarousel from '../HeroCarousel/HeroCarousel';
// Imagen de fondo para los hero compactos (Quiénes, Ejes, Portafolio, Alianzas, Blog).
import cienagaBg from '../../assets/hero-pages/WhatsApp Image 2026-06-16 at 3.25.19 PM.jpeg';
import './Hero.css';

// Encabezado (hero) reutilizable.
// - `small`: variante compacta. Lleva la imagen de Ciénaga como fondo.
// - `carousel`: carrusel de imágenes de fondo (solo Inicio, sin Ciénaga).
export default function Hero({ tag, title, subtitle, small = false, carousel = false, children }) {
  const bgStyle = small ? { backgroundImage: `url(${cienagaBg})` } : undefined;

  return (
    <div className={small ? 'hero hero-sm hero-bg' : 'hero'} style={bgStyle}>
      {carousel && <HeroCarousel />}
      <div className="hero-inner">
        {tag && <div className="hero-tag">{tag}</div>}
        <h1>{title}</h1>
        {subtitle && <p className="hero-sub">{subtitle}</p>}
        {children && <div className="hero-btns">{children}</div>}
      </div>
    </div>
  );
}
