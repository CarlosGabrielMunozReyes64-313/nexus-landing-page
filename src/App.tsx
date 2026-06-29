import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Leaves from './components/Leaves/Leaves'

import Inicio from './pages/Inicio'
import Quienes from './pages/Quienes'
import Ejes from './pages/Ejes'
import Portafolio from './pages/Portafolio'
import Alianzas from './pages/Alianzas'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'

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
          <Route path="/quienes" element={<Quienes />} />
          <Route path="/ejes" element={<Ejes />} />
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
