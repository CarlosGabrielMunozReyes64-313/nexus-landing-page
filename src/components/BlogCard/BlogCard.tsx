import { Link } from 'react-router-dom';
import './BlogCard.css';

// Tarjeta de un artículo del blog. Recibe un objeto `post`.
// Si `post.image` tiene una ruta, muestra la imagen; si está vacío,
// usa el emoji sobre un fondo verde suave como respaldo.
// Si el artículo tiene texto completo (`body`), la tarjeta enlaza a su página.
export default function BlogCard({ post }) {
  const href = post.body && post.slug ? `/blog/${post.slug}` : null;

  const content = (
    <>
      <div className="blog-img" style={post.image ? undefined : { background: post.bg }}>
        {post.image ? (
          <img src={post.image} alt={post.title} loading="lazy" />
        ) : (
          <span className="blog-img-emoji" aria-hidden="true">{post.emoji}</span>
        )}
        <span className="blog-topic">{post.topic}</span>
      </div>

      <div className="blog-body">
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-preview">{post.preview}</p>

        <div className="blog-meta">
          <span className="blog-author">{post.author}</span>
          <span className="blog-dot" aria-hidden="true">·</span>
          <span>{post.date}</span>
          <span className="blog-dot" aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        {href && <span className="blog-readmore">Leer artículo</span>}
      </div>
    </>
  );

  return (
    <article className={`blog-card${href ? ' blog-card--link' : ''}`}>
      {href ? (
        <Link className="blog-card-link" to={href}>
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}
