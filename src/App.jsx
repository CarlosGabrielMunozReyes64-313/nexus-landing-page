import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import Inicio from './pages/Inicio'
import Quienes from './pages/Quienes'
import Ejes from './pages/Ejes'
import Portafolio from './pages/Portafolio'
import Alianzas from './pages/Alianzas'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quienes" element={<Quienes />} />
          <Route path="/ejes" element={<Ejes />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/alianzas" element={<Alianzas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Cualquier ruta desconocida vuelve al inicio */}
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
