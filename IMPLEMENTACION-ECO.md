# Demo Huella Ecológica — Configuración, datos NASA POWER/OWID y reporte PDF

Cambios entregados para el proyecto-demo de NEXUS. Sin backend.

## 1. Instalar dependencia nueva
El reporte PDF usa jsPDF:

    npm install jspdf

(Ya quedó declarada en package.json.)

## 2. Actualizar datos (MANUAL, cuando quieras)
Script de Node que descarga agua (NASA POWER) y CO₂ (Our World in Data)
y reescribe los JSON del demo. Córrelo en tu máquina:

    node scripts/update-data.mjs

- Agua  → src/pages/demo/data/aguaRegional.json  (precipitación/temperatura por departamento)
- CO₂   → src/pages/demo/data/co2Pais.json        (per cápita nacional vs. mundial, último año OWID)

Requiere Node 18+. No necesita backend ni claves. Si no lo corres, el demo
funciona igual con los valores de ejemplo (semilla) que ya vienen en los JSON.

## 3. Qué quedó hecho
- **Configuración funcional** (SettingsContext + localStorage): factores de emisión,
  metas/referencias, umbrales de clasificación, región, unidades/formato,
  valores por defecto y apariencia (tema claro/oscuro). Botón "Restaurar".
- **ecoData.ts** ahora acepta esos valores (con defaults; no rompe nada existente).
- **Sidebar del dashboard funcional**: Reportes, Geovisor y Configuración ya hacen algo.
- **Geovisor** alimentado por la región elegida (agua de POWER) + CO₂ nacional (OWID).
- **Reportes**: genera un PDF con el desglose del usuario.
- La calculadora de Carbono (HuellaCarbono) también respeta la configuración.

## 4. Archivos
Nuevos:
  src/pages/demo/settings.ts
  src/pages/demo/SettingsContext.tsx
  src/pages/demo/Configuracion.tsx
  src/pages/demo/Configuracion.module.css
  src/pages/demo/DemoLayout.tsx
  src/pages/demo/report.ts
  src/pages/demo/data/regiones.ts
  src/pages/demo/data/aguaRegional.json
  src/pages/demo/data/co2Pais.json
  scripts/update-data.mjs
Modificados:
  src/App.tsx                       (rutas demo anidadas bajo DemoLayout)
  src/pages/demo/ecoData.ts         (cálculos configurables)
  src/pages/demo/EcoDashboard.tsx   (sidebar, secciones, geovisor por región)
  src/pages/demo/EcoDashboard.module.css (estilos reportes + tema oscuro)
  src/pages/demo/HuellaCarbono.tsx  (usa configuración)
  package.json                      (+ jspdf)

## 5. Nota sobre las imágenes de «Quiénes Somos»
Resuelto: los nombres de archivo en `src/assets/Quienes/` ya coinciden con los
imports (sin tildes) y `npm run build` funciona.
