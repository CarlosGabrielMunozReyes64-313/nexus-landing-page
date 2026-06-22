# NEXUS · Landing page + Proyecto demo (Huella Ecológica)

Proyecto React + TypeScript + Vite.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre la URL que muestra la consola (normalmente http://localhost:5173).

Scripts disponibles:
- `npm run dev`     → servidor de desarrollo
- `npm run build`   → build de producción (carpeta `dist/`)
- `npm run preview` → previsualiza el build de producción

## Qué se integró en esta versión

La **Calculadora de Huella Ecológica** (los HTML originales: inicio, huella de
carbono, huella hídrica y dashboard) fue migrada a **React + TypeScript** y vive
dentro del sitio como un proyecto demo autocontenido.

Rutas del demo:
- `/proyecto-demo`            → Inicio de la calculadora
- `/proyecto-demo/carbono`    → Calculadora de Huella de Carbono
- `/proyecto-demo/hidrica`    → Calculadora de Huella Hídrica
- `/proyecto-demo/dashboard`  → Dashboard analítico (Chart.js)

Archivos del demo: `src/pages/demo/`

### Cómo se llega al demo
En la página **Portafolio** (`/portafolio`), al final de la sección se agregó
una tarjeta destacada con el botón **"Ver demo del proyecto →"** que lleva a la
calculadora. Dentro del demo, el enlace **"← Volver al portafolio"** regresa al sitio.
