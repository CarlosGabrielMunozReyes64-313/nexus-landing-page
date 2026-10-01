import Hero from '../components/Hero/Hero'
import BlogCard from '../components/BlogCard/BlogCard'
import EnviroCalendar from '../components/EnviroCalendar/EnviroCalendar'
import Reveal from '../components/Reveal/Reveal'
import { POSTS } from '../lib/blog'

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
          {/* Carrusel del calendario ambiental al inicio del apartado de blog */}
          <EnviroCalendar />

          <div className="section-tag">Blog de Innovación</div>
          <h2 className="section-title">Análisis técnico con perspectiva territorial</h2>
          <p className="section-body" style={{ marginBottom: '3rem' }}>
            Compartimos conocimiento riguroso sobre los temas que definen la agenda de
            sostenibilidad: desde soluciones basadas en la naturaleza hasta innovación en
            gobernanza ambiental y biotecnología territorial.
          </p>
          <div className="grid-3">
            {POSTS.map((post, i) => (
              <Reveal key={post.slug} variant="up" delay={Math.min(i, 5) * 90}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
