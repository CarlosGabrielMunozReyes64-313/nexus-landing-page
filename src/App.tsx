import { Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Leaves from './components/Leaves/Leaves'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import SeoHead from './seo/SeoHead'
import AnalyticsTracker from './components/AnalyticsTracker/AnalyticsTracker'
import {
  Inicio, Portafolio, Alianzas, Blog, BlogPost, Contacto, RseMipymes, NotFound,
  QuienesLayout, QuienesModelo, QuienesPrincipios, QuienesDesafios, QuienesEquipo,
  ServiciosLayout, ServiciosTodos, ServicioEje,
  DemoLayout, EcoHome, HuellaCarbono, HuellaHidrica, EcoDashboard,
} from './routes'

export default function App() {
  const { pathname } = useLocation()
  // El proyecto demo es una experiencia autocontenida (tiene su propia
  // navegación interna y footer), por eso ocultamos el chrome global de NEXUS.
  const isDemo = pathname.startsWith('/proyecto-demo')

  return (
    <>
      <SeoHead />
      <AnalyticsTracker />
      <ScrollToTop />
      {!isDemo && <Leaves />}
      {!isDemo && <Navbar />}

      <main>
        <Suspense fallback={<div className="route-loading" />}>
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

            {/* Servicios · vista general + una vista por eje (subpestañas) */}
            <Route path="/servicios" element={<ServiciosLayout />}>
              <Route index element={<ServiciosTodos />} />
              <Route path="eje-1" element={<ServicioEje id="tab1" />} />
              <Route path="eje-2" element={<ServicioEje id="tab2" />} />
              <Route path="eje-3" element={<ServicioEje id="tab3" />} />
              <Route path="eje-4" element={<ServicioEje id="tab4" />} />
            </Route>

            {/* RSE para MiPymes · landing del piloto «5 cupos» */}
            <Route path="/rse-mipymes" element={<RseMipymes />} />

            {/* Redirecciones de compatibilidad con rutas anteriores */}
            <Route path="/ejes" element={<Navigate to="/servicios" replace />} />
            <Route path="/servicios/catalogo" element={<Navigate to="/servicios" replace />} />

            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/alianzas" element={<Alianzas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Proyecto demo · Calculadora de Huella Ecológica */}
            <Route path="/proyecto-demo" element={<DemoLayout />}>
              <Route index element={<EcoHome />} />
              <Route path="carbono" element={<HuellaCarbono />} />
              <Route path="hidrica" element={<HuellaHidrica />} />
              <Route path="dashboard" element={<EcoDashboard />} />
            </Route>

            {/* Página 404 real (antes cualquier ruta mostraba el inicio) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {!isDemo && <Footer />}
      {!isDemo && <WhatsAppButton />}
    </>
  )
}
