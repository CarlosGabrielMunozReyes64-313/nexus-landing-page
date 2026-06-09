import HeroCarousel from '../HeroCarousel/HeroCarousel';
import './Hero.css';

// Encabezado (hero) reutilizable.
// - `tag`: etiqueta pequeña superior.
// - `title`: contenido del h1 (puede incluir <span> para resaltar).
// - `subtitle`: párrafo opcional (solo en el hero grande de inicio).
// - `small`: usa la variante compacta (.hero-sm).
// - `carousel`: muestra el carrusel de imágenes de fondo (solo Inicio).
// - `children`: botones u otros elementos bajo el subtítulo.
export default function Hero({ tag, title, subtitle, small = false, carousel = false, children }) {
  return (
    <div className={small ? 'hero hero-sm' : 'hero'}>
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
