import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Fecha del build (AAAA-MM-DD). La usa el calendario ambiental para que el
// HTML prerenderizado y el navegador arranquen en el mismo punto.
const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10)

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  define: {
    __BUILD_DATE__: JSON.stringify(BUILD_DATE),
  },
  build: {
    // Un solo archivo CSS enlazado en el <head>: el HTML prerenderizado se ve
    // con estilos desde el primer instante (sin «parpadeo» sin estilos).
    cssCodeSplit: false,
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            // React y el router en su propio archivo (se cachea entre páginas).
            manualChunks(id) {
              if (/node_modules\/(react|react-dom|scheduler|react-router|react-router-dom)\//.test(id)) {
                return 'vendor-react'
              }
            },
          },
        },
  },
}))
