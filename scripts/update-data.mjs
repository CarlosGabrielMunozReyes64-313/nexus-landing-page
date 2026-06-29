// =====================================================
//  Actualización MANUAL de datos del demo de Huella Ecológica
//  Uso:  node scripts/update-data.mjs
//
//  - Agua: NASA POWER (climatología por departamento)
//  - CO₂ : Our World in Data (CO2 nacional per cápita)
//
//  No requiere backend ni claves. Corre en tu máquina cuando
//  quieras refrescar los datos; reescribe los .json del demo.
//  Requiere Node 18+ (fetch global).
// =====================================================

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = resolve(__dirname, '../src/pages/demo/data');

// Mantener en sincronía con src/pages/demo/data/regiones.ts
const REGIONES = [
  ['amazonas', 'Amazonas', -1.44, -71.57],
  ['antioquia', 'Antioquia', 6.55, -75.83],
  ['arauca', 'Arauca', 6.55, -71.0],
  ['atlantico', 'Atlántico', 10.67, -74.97],
  ['bolivar', 'Bolívar', 8.67, -74.03],
  ['boyaca', 'Boyacá', 5.45, -73.36],
  ['caldas', 'Caldas', 5.3, -75.27],
  ['caqueta', 'Caquetá', 0.87, -73.84],
  ['casanare', 'Casanare', 5.34, -71.39],
  ['cauca', 'Cauca', 2.41, -76.83],
  ['cesar', 'Cesar', 9.34, -73.65],
  ['choco', 'Chocó', 5.71, -76.65],
  ['cordoba', 'Córdoba', 8.35, -75.79],
  ['cundinamarca', 'Cundinamarca', 4.86, -74.03],
  ['guainia', 'Guainía', 2.58, -68.52],
  ['guaviare', 'Guaviare', 1.92, -72.12],
  ['huila', 'Huila', 2.54, -75.53],
  ['guajira', 'La Guajira', 11.35, -72.52],
  ['magdalena', 'Magdalena', 10.41, -74.4],
  ['meta', 'Meta', 3.27, -73.04],
  ['narino', 'Nariño', 1.29, -77.36],
  ['nortesantander', 'Norte de Santander', 7.95, -72.9],
  ['putumayo', 'Putumayo', 0.44, -75.98],
  ['quindio', 'Quindío', 4.46, -75.67],
  ['risaralda', 'Risaralda', 5.13, -75.86],
  ['sanandres', 'San Andrés y Providencia', 12.58, -81.71],
  ['santander', 'Santander', 6.64, -73.65],
  ['sucre', 'Sucre', 9.06, -75.11],
  ['tolima', 'Tolima', 4.09, -75.15],
  ['valle', 'Valle del Cauca', 3.8, -76.55],
  ['vaupes', 'Vaupés', 0.85, -70.81],
  ['vichada', 'Vichada', 4.71, -69.41],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const round = (n, d = 1) => Math.round(n * 10 ** d) / 10 ** d;

async function powerPoint(lat, lon) {
  const url =
    'https://power.larc.nasa.gov/api/temporal/climatology/point' +
    `?parameters=PRECTOTCORR,T2M&community=AG&latitude=${lat}&longitude=${lon}&format=JSON`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`POWER ${res.status} en ${lat},${lon}`);
  const json = await res.json();
  const p = json?.properties?.parameter ?? {};
  // PRECTOTCORR.ANN viene en mm/día → total anual ≈ × 365
  const precDia = Number(p?.PRECTOTCORR?.ANN ?? 0);
  const temp = Number(p?.T2M?.ANN ?? 0);
  return {
    precipitacionAnual: round(precDia * 365, 0),
    temperaturaMedia: round(temp, 1),
  };
}

async function actualizarAgua() {
  console.log('→ NASA POWER: descargando precipitación/temperatura por departamento...');
  const regiones = {};
  let sumaPrec = 0;
  let sumaTemp = 0;
  let n = 0;

  for (const [key, nombre, lat, lon] of REGIONES) {
    try {
      const d = await powerPoint(lat, lon);
      regiones[key] = d;
      sumaPrec += d.precipitacionAnual;
      sumaTemp += d.temperaturaMedia;
      n++;
      console.log(`   ✓ ${nombre}: ${d.precipitacionAnual} mm/año, ${d.temperaturaMedia} °C`);
    } catch (e) {
      console.warn(`   ✗ ${nombre}: ${e.message}`);
    }
    await sleep(400); // ser amable con la API
  }

  const out = {
    _meta: {
      fuente: 'NASA POWER (power.larc.nasa.gov) — climatología por región',
      parametros: ['PRECTOTCORR (mm/año)', 'T2M (°C promedio)'],
      actualizado: new Date().toISOString(),
    },
    nacional: {
      precipitacionAnual: n ? Math.round(sumaPrec / n) : 0,
      temperaturaMedia: n ? round(sumaTemp / n, 1) : 0,
    },
    regiones,
  };
  await writeFile(resolve(DATA_DIR, 'aguaRegional.json'), JSON.stringify(out, null, 2) + '\n');
  console.log('✔ aguaRegional.json actualizado.\n');
}

async function actualizarCO2() {
  console.log('→ Our World in Data: descargando CO₂ nacional...');
  const url = 'https://raw.githubusercontent.com/owid/co2-data/master/owid-co2-data.json';
  const res = await fetch(url);
  if (!res.ok) throw new Error(`OWID ${res.status}`);
  const json = await res.json();

  const ultimo = (pais) => {
    const arr = json?.[pais]?.data ?? [];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (typeof arr[i].co2_per_capita === 'number') return arr[i];
    }
    return null;
  };

  const col = ultimo('Colombia');
  const mundo = ultimo('World');
  if (!col || !mundo) throw new Error('No se encontró Colombia o World en OWID');

  const out = {
    _meta: {
      fuente: 'Our World in Data — CO2 and Greenhouse Gas Emissions',
      indicador: 'co2_per_capita (toneladas CO₂ por persona / año)',
      actualizado: new Date().toISOString(),
    },
    anio: col.year,
    colombia: { co2PerCapita: round(col.co2_per_capita, 2), co2Total: round(col.co2 ?? 0, 1) },
    mundo: { co2PerCapita: round(mundo.co2_per_capita, 2) },
  };
  await writeFile(resolve(DATA_DIR, 'co2Pais.json'), JSON.stringify(out, null, 2) + '\n');
  console.log(`✔ co2Pais.json actualizado (año ${col.year}).\n`);
}

async function main() {
  try {
    await actualizarAgua();
    await actualizarCO2();
    console.log('Listo. Datos actualizados sin backend ✨');
  } catch (e) {
    console.error('Error:', e.message);
    process.exit(1);
  }
}

main();
