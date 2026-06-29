// =====================================================
//  Departamentos de Colombia · catálogo para el Geovisor
//  Los centroides (lat/lon) los usa scripts/update-data.mjs
//  para consultar NASA POWER por región.
// =====================================================

export interface Region {
  key: string;
  nombre: string;
  lat: number;
  lon: number;
}

export const REGIONES: Region[] = [
  { key: 'amazonas', nombre: 'Amazonas', lat: -1.44, lon: -71.57 },
  { key: 'antioquia', nombre: 'Antioquia', lat: 6.55, lon: -75.83 },
  { key: 'arauca', nombre: 'Arauca', lat: 6.55, lon: -71.0 },
  { key: 'atlantico', nombre: 'Atlántico', lat: 10.67, lon: -74.97 },
  { key: 'bolivar', nombre: 'Bolívar', lat: 8.67, lon: -74.03 },
  { key: 'boyaca', nombre: 'Boyacá', lat: 5.45, lon: -73.36 },
  { key: 'caldas', nombre: 'Caldas', lat: 5.3, lon: -75.27 },
  { key: 'caqueta', nombre: 'Caquetá', lat: 0.87, lon: -73.84 },
  { key: 'casanare', nombre: 'Casanare', lat: 5.34, lon: -71.39 },
  { key: 'cauca', nombre: 'Cauca', lat: 2.41, lon: -76.83 },
  { key: 'cesar', nombre: 'Cesar', lat: 9.34, lon: -73.65 },
  { key: 'choco', nombre: 'Chocó', lat: 5.71, lon: -76.65 },
  { key: 'cordoba', nombre: 'Córdoba', lat: 8.35, lon: -75.79 },
  { key: 'cundinamarca', nombre: 'Cundinamarca', lat: 4.86, lon: -74.03 },
  { key: 'guainia', nombre: 'Guainía', lat: 2.58, lon: -68.52 },
  { key: 'guaviare', nombre: 'Guaviare', lat: 1.92, lon: -72.12 },
  { key: 'huila', nombre: 'Huila', lat: 2.54, lon: -75.53 },
  { key: 'guajira', nombre: 'La Guajira', lat: 11.35, lon: -72.52 },
  { key: 'magdalena', nombre: 'Magdalena', lat: 10.41, lon: -74.4 },
  { key: 'meta', nombre: 'Meta', lat: 3.27, lon: -73.04 },
  { key: 'narino', nombre: 'Nariño', lat: 1.29, lon: -77.36 },
  { key: 'nortesantander', nombre: 'Norte de Santander', lat: 7.95, lon: -72.9 },
  { key: 'putumayo', nombre: 'Putumayo', lat: 0.44, lon: -75.98 },
  { key: 'quindio', nombre: 'Quindío', lat: 4.46, lon: -75.67 },
  { key: 'risaralda', nombre: 'Risaralda', lat: 5.13, lon: -75.86 },
  { key: 'sanandres', nombre: 'San Andrés y Providencia', lat: 12.58, lon: -81.71 },
  { key: 'santander', nombre: 'Santander', lat: 6.64, lon: -73.65 },
  { key: 'sucre', nombre: 'Sucre', lat: 9.06, lon: -75.11 },
  { key: 'tolima', nombre: 'Tolima', lat: 4.09, lon: -75.15 },
  { key: 'valle', nombre: 'Valle del Cauca', lat: 3.8, lon: -76.55 },
  { key: 'vaupes', nombre: 'Vaupés', lat: 0.85, lon: -70.81 },
  { key: 'vichada', nombre: 'Vichada', lat: 4.71, lon: -69.41 },
];

export function regionPorKey(key: string): Region {
  return REGIONES.find((r) => r.key === key) ?? REGIONES[0];
}
