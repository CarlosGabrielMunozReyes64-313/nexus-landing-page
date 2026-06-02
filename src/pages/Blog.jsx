import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'
import { BLOG_POSTS } from '../data/siteData'

export default function Blog() {
  return (
    <>
      <Hero
        small
        tag="Apropiación del Conocimiento"
        title={
          <>
            Ideas que impulsan <span>la transformación</span>
          </>
        }
      />

      <section>
        <div className="section-inner">
          <div className="section-tag">Blog de Innovación</div>
          <h2 className="section-title">Análisis técnico con perspectiva territorial</h2>
          <p className="section-body" style={{ marginBottom: '3rem' }}>
            Compartimos conocimiento riguroso sobre los temas que definen la agenda de
            sostenibilidad: desde soluciones basadas en la naturaleza hasta innovación en
            gobernanza ambiental y biotecnología territorial.
          </p>
          <div className="grid-3">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
