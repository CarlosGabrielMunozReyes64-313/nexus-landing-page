import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Al cambiar de ruta, sube al inicio de la página con scroll suave.
// Si la URL incluye un anclaje (#seccion), hace scroll a esa sección en
// lugar de subir al inicio (usado por el submenú de "Quiénes Somos").
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Esperamos un frame para asegurar que la sección ya esté montada.
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}
