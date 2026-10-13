import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Al cambiar de ruta, sube al inicio de la página con scroll suave.
// Si la URL incluye un anclaje (#seccion), hace scroll a esa sección en
// lugar de subir al inicio (usado por el submenú de "Quiénes Somos" y por
// los botones «Llenar el formulario» → /contacto#formulario).
//
// Las páginas se descargan por partes: si se llega desde otra página, la
// sección puede tardar un momento en existir. Por eso se reintenta hasta
// ~2,5 s antes de rendirse y subir al inicio.
const MAX_WAIT_MS = 2500

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = decodeURIComponent(hash.replace('#', ''))
    const start = performance.now()
    let frame = 0

    const find = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (performance.now() - start < MAX_WAIT_MS) {
        frame = requestAnimationFrame(find)
        return
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    frame = requestAnimationFrame(find)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
