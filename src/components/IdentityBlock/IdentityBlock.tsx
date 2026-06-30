import Carousel from '../Carousel/Carousel';
import Reveal from '../Reveal/Reveal';

// Bloque reutilizable: imagen amplia (≈500px) + contenido con tarjetas.
// `reverse` alterna el lado de la imagen. Las imágenes y el texto aparecen
// con una animación sutil al entrar en pantalla.
export default function IdentityBlock({ image, alt, tag, title, intro, items, reverse = false }) {
  return (
    <div className={`identity-block${reverse ? ' reverse' : ''}`}>
      <div className="identity-top">
        <Reveal as="div" variant={reverse ? 'right' : 'left'} className="identity-media">
          <img src={image} alt={alt} loading="lazy" />
        </Reveal>

        <Reveal as="div" variant={reverse ? 'left' : 'right'} className="identity-intro">
          <div className="section-tag">{tag}</div>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            {title}
          </h2>
          <p className="section-body">{intro}</p>
        </Reveal>
      </div>

      <div className="identity-stack">
        <Carousel minSlide={250} ariaLabel={`${title} — tarjetas`}>
          {items.map((item) => (
            <div className="identity-card" key={item.title}>
              <div className="identity-card-title">{item.title}</div>
              <p className="identity-card-text">{item.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
