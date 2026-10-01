import { Link, useParams } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import BlogCard from '../components/BlogCard/BlogCard';
import NotFound from './NotFound';
import { getArticle, ARTICLES } from '../lib/blog';
import { renderRichText } from '../lib/richText';
import { PILOT } from '../config/site';
import './BlogPost.css';

// Página de un artículo del blog (/blog/:slug). Solo existen para los
// artículos con texto completo (campo `body`).
export default function BlogPost() {
  const { slug } = useParams();
  const post = getArticle(slug);
  if (!post) return <NotFound />;

  const more = ARTICLES.filter((a) => a.slug !== post.slug).slice(0, 3);
  const toPilot = post.related === '/rse-mipymes';

  return (
    <>
      <Hero small tag={post.topic} title={post.title} />

      <section className="post-section">
        <article className="post">
          <p className="post-meta">
            <span>{post.author}</span>
            <span aria-hidden="true"> · </span>
            <time dateTime={post.isoDate}>{post.date}</time>
            <span aria-hidden="true"> · </span>
            <span>{post.readTime} de lectura</span>
          </p>
          <p className="post-lead">{post.preview}</p>
          <div className="post-body">{renderRichText(post.body)}</div>

          <aside className="post-cta">
            {toPilot ? (
              <>
                <h2>¿Tiene una MiPyme en el Valle del Cauca?</h2>
                <p>
                  {PILOT.active
                    ? `Postule su empresa al piloto de RSE para MiPymes: ${PILOT.slots} cupos para Palmira y Candelaria.`
                    : 'Le ayudamos a dar los primeros pasos en RSE con un diagnóstico y un reto concreto.'}
                </p>
                <Link className="btn-primary" to="/rse-mipymes">
                  {PILOT.active ? 'Conocer el piloto' : 'Ver RSE para MiPymes'}
                </Link>
              </>
            ) : (
              <>
                <h2>¿Quiere aplicar esto en su territorio o empresa?</h2>
                <p>Cuéntenos su reto y le proponemos cómo abordarlo.</p>
                <Link className="btn-primary" to="/contacto">
                  Hablar con NEXUS
                </Link>
              </>
            )}
          </aside>

          <p className="post-back">
            <Link to="/blog">Volver al blog</Link>
          </p>
        </article>
      </section>

      {more.length > 0 && (
        <section className="alt">
          <div className="section-inner">
            <h2 className="section-title">Siga leyendo</h2>
            <div className="grid-3">
              {more.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
