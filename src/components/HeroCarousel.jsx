import { useState, useEffect } from 'react'

// Toma automáticamente TODAS las imágenes de src/assets/carrusel.
// Solo arrastra archivos a esa carpeta; se ordenan por nombre (usa 01, 02, 03…).
const modules = import.meta.glob('../assets/carrusel/*.{jpg,jpeg,png,webp,avif,gif}', {
  eager: true,
})
const images = Object.keys(modules)
  .sort()
  .map((key) => modules[key].default)

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)

  // Cambia de imagen cada 5 segundos.
  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => setIndex((i) => i + 1), 5000)
    return () => clearInterval(id)
  }, [])

  // Al llegar al clon (posición extra al final), salta al inicio SIN animación
  // para que el desplazamiento a la izquierda sea un bucle infinito y fluido.
  useEffect(() => {
    if (images.length <= 1) return
    if (index === images.length) {
      const t = setTimeout(() => {
        setAnimate(false)
        setIndex(0)
      }, 1000) // debe coincidir con la duración de la transición (1s)
      return () => clearTimeout(t)
    }
  }, [index])

  // Reactiva la animación justo después del salto instantáneo.
  useEffect(() => {
    if (animate) return
    const t = setTimeout(() => setAnimate(true), 50)
    return () => clearTimeout(t)
  }, [animate])

  if (images.length === 0) return null

  // Clonamos la primera imagen al final para el loop sin saltos.
  const slides = [...images, images[0]]

  return (
    <div className="hero-carousel" aria-hidden="true">
      <div
        className="hero-carousel-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: animate ? 'transform 1s ease-in-out' : 'none',
        }}
      >
        {slides.map((src, i) => (
          <div
            className="hero-carousel-slide"
            key={i}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <div className="hero-carousel-overlay" />
    </div>
  )
}
