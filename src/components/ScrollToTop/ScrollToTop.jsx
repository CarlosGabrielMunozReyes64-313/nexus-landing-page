import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Al cambiar de ruta, sube al inicio de la página con scroll suave,
// replicando el window.scrollTo del showPage() original.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}
