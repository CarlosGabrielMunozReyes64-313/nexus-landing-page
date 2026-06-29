// =====================================================
//  Configuración del demo · Huella Ecológica
//  Estado persistente (localStorage) que alimenta los cálculos.
//  Sin backend: todo vive en el navegador del usuario.
// =====================================================

export type Tema = 'claro' | 'oscuro';
export type Idioma = 'es' | 'en';
export type UnidadMasa = 'kg' | 'ton';
export type UnidadDistancia = 'km' | 'mi';
export type Periodo = 'mensual' | 'anual';

/** Factores de emisión editables (antes hardcodeados en ecoData.ts). */
export interface FactoresEmision {
  gasolina: number; // kg CO₂/litro
  diesel: number; // kg CO₂/litro
  gnv: number; // kg CO₂/m³
  electricidad: number; // kg CO₂/kWh
  gasNatural: number; // kg CO₂/m³
  glp: number; // kg CO₂/kg
}

/** Valores de referencia que mueven el dashboard. */
export interface Metas {
  meta2030: number; // kg CO₂/año
  promedioNacional: number; // kg CO₂/año
  promedioMundial: number; // kg CO₂/año
}

/** Cortes de la clasificación de carbono (kg CO₂/año). */
export interface Umbrales {
  excelente: number; // < excelente  → "Excelente"
  buena: number; //     < buena      → "Buena"
  regular: number; //   < regular    → "Regular"  | resto → "Alta"
}

export interface Unidades {
  masa: UnidadMasa;
  distancia: UnidadDistancia;
  periodo: Periodo;
}

export interface Defaults {
  personasHogar: number;
  ocupantes: number;
}

export interface Apariencia {
  tema: Tema;
  idioma: Idioma;
}

export interface EcoSettings {
  factores: FactoresEmision;
  metas: Metas;
  umbrales: Umbrales;
  /** Clave del departamento seleccionado (ver data/regiones.ts). */
  region: string;
  unidades: Unidades;
  defaults: Defaults;
  apariencia: Apariencia;
}

export const DEFAULT_SETTINGS: EcoSettings = {
  factores: {
    gasolina: 2.31,
    diesel: 2.68,
    gnv: 1.64,
    electricidad: 0.367,
    gasNatural: 1.96,
    glp: 3.0,
  },
  metas: {
    meta2030: 2300,
    promedioNacional: 3200,
    promedioMundial: 4800,
  },
  umbrales: {
    excelente: 2000,
    buena: 4000,
    regular: 8000,
  },
  region: 'narino',
  unidades: {
    masa: 'kg',
    distancia: 'km',
    periodo: 'mensual',
  },
  defaults: {
    personasHogar: 4,
    ocupantes: 1,
  },
  apariencia: {
    tema: 'claro',
    idioma: 'es',
  },
};

const STORAGE_KEY = 'nexus-eco-settings-v1';

/** Une recursivamente lo guardado con los defaults (tolerante a versiones viejas). */
function merge(base: EcoSettings, saved: Partial<EcoSettings> | null): EcoSettings {
  if (!saved) return base;
  return {
    factores: { ...base.factores, ...saved.factores },
    metas: { ...base.metas, ...saved.metas },
    umbrales: { ...base.umbrales, ...saved.umbrales },
    region: saved.region ?? base.region,
    unidades: { ...base.unidades, ...saved.unidades },
    defaults: { ...base.defaults, ...saved.defaults },
    apariencia: { ...base.apariencia, ...saved.apariencia },
  };
}

export function loadSettings(): EcoSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return merge(DEFAULT_SETTINGS, raw ? (JSON.parse(raw) as Partial<EcoSettings>) : null);
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(s: EcoSettings): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* almacenamiento lleno o bloqueado: se ignora silenciosamente */
  }
}

export function resetSettings(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* noop */
  }
}
