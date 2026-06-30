import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Leaves from './components/Leaves/Leaves'

import Inicio from './pages/Inicio'
import Portafolio from './pages/Portafolio'
import Alianzas from './pages/Alianzas'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'

// Quiénes Somos · cada subpestaña es una vista independiente
import QuienesLayout from './pages/quienes/QuienesLayout'
import QuienesModelo from './pages/quienes/QuienesModelo'
import QuienesPrincipios from './pages/quienes/QuienesPrincipios'
import QuienesDesafios from './pages/quienes/QuienesDesafios'
import QuienesEquipo from './pages/quienes/QuienesEquipo'

// Servicios · vista general + una vista por cada eje
import ServiciosLayout from './pages/servicios/ServiciosLayout'
import ServiciosTodos from './pages/servicios/ServiciosTodos'
import ServicioEje from './pages/servicios/ServicioEje'

// Proyecto demo: Calculadora de Huella Ecológica (migrado a React TS)
import DemoLayout from './pages/demo/DemoLayout'
import EcoHome from './pages/demo/EcoHome'
import HuellaCarbono from './pages/demo/HuellaCarbono'
import HuellaHidrica from './pages/demo/HuellaHidrica'
import EcoDashboard from './pages/demo/EcoDashboard'

export default function App() {
  const { pathname } = useLocation()
  // El proyecto demo es una experiencia autocontenida (tiene su propia
  // navegación interna y footer), por eso ocultamos el chrome global de NEXUS.
  const isDemo = pathname.startsWith('/proyecto-demo')

  return (
    <>
      <ScrollToTop />
      {!isDemo && <Leaves />}
      {!isDemo && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />

          {/* Quiénes Somos · vistas independientes por subpestaña */}
          <Route path="/quienes" element={<QuienesLayout />}>
            <Route index element={<Navigate to="modelo" replace />} />
            <Route path="modelo" element={<QuienesModelo />} />
            <Route path="principios" element={<QuienesPrincipios />} />
            <Route path="desafios" element={<QuienesDesafios />} />
            <Route path="equipo" element={<QuienesEquipo />} />
          </Route>

          {/* Servicios · vista general + una vista por eje */}
          <Route path="/servicios" element={<ServiciosLayout />}>
            <Route index element={<ServiciosTodos />} />
            <Route path="eje-1" element={<ServicioEje id="tab1" />} />
            <Route path="eje-2" element={<ServicioEje id="tab2" />} />
            <Route path="eje-3" element={<ServicioEje id="tab3" />} />
            <Route path="eje-4" element={<ServicioEje id="tab4" />} />
          </Route>

          {/* Redirecciones de compatibilidad con rutas anteriores */}
          <Route path="/ejes" element={<Navigate to="/servicios" replace />} />

          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/alianzas" element={<Alianzas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Proyecto demo · Calculadora de Huella Ecológica */}
          <Route path="/proyecto-demo" element={<DemoLayout />}>
            <Route index element={<EcoHome />} />
            <Route path="carbono" element={<HuellaCarbono />} />
            <Route path="hidrica" element={<HuellaHidrica />} />
            <Route path="dashboard" element={<EcoDashboard />} />
          </Route>
          {/* Cualquier ruta desconocida vuelve al inicio */}
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>

      {!isDemo && <Footer />}
    </>
  )
}
