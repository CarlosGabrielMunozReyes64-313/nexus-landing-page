// =====================================================
//  Huella Ecológica · Datos y lógica (TypeScript)
//  Migrado desde los HTML originales (Carbono / Hídrica / Dashboard).
//  Factores de emisión de referencia para Colombia.
// =====================================================

import type { FactoresEmision, Umbrales } from './settings';

export type FuelType = 'gasolina' | 'diesel' | 'gnv' | 'electrico' | 'hibrido';

export interface VehicleOption {
  value: string;
  text: string;
  /** L/km, m³/km o kWh/km según el combustible. */
  efficiency: number;
}

export const vehicleOptions: Record<FuelType, VehicleOption[]> = {
  gasolina: [
    { value: 'auto_compacto', text: '🚗 Automóvil Compacto', efficiency: 0.07 },
    { value: 'auto_sedan', text: '🚙 Sedán', efficiency: 0.08 },
    { value: 'suv_pequeno', text: '🚐 SUV Pequeño', efficiency: 0.1 },
    { value: 'suv_grande', text: '🚛 SUV Grande', efficiency: 0.14 },
    { value: 'pickup', text: '🛻 Pick-up', efficiency: 0.15 },
    { value: 'moto_pequena', text: '🏍️ Motocicleta < 125cc', efficiency: 0.025 },
    { value: 'moto_grande', text: '🏍️ Motocicleta > 125cc', efficiency: 0.045 },
  ],
  diesel: [
    { value: 'bus_urbano', text: '🚌 Bus Urbano', efficiency: 0.35 },
    { value: 'buseta', text: '🚐 Buseta', efficiency: 0.25 },
    { value: 'camion_pequeno', text: '🚚 Camión Pequeño', efficiency: 0.18 },
    { value: 'camion_grande', text: '🚛 Camión Grande', efficiency: 0.45 },
    { value: 'taxi', text: '🚕 Taxi', efficiency: 0.09 },
  ],
  gnv: [
    { value: 'taxi_gnv', text: '🚕 Taxi GNV', efficiency: 0.06 },
    { value: 'bus_gnv', text: '🚌 Bus GNV', efficiency: 0.28 },
    { value: 'auto_gnv', text: '🚗 Automóvil GNV', efficiency: 0.065 },
  ],
  electrico: [
    { value: 'auto_electrico', text: '🔋 Automóvil Eléctrico', efficiency: 0.15 }, // kWh/km
    { value: 'moto_electrica', text: '🛵 Motocicleta Eléctrica', efficiency: 0.08 },
  ],
  hibrido: [
    { value: 'auto_hibrido', text: '🔋⛽ Automóvil Híbrido', efficiency: 0.05 },
    { value: 'suv_hibrido', text: '🚐 SUV Híbrido', efficiency: 0.07 },
  ],
};

export const emissionFactors = {
  gasolina: 2.31, // kg CO₂/litro
  diesel: 2.68, // kg CO₂/litro
  gnv: 1.64, // kg CO₂/m³
  electricidad: 0.367, // kg CO₂/kWh (Colombia)
  gasNatural: 1.96, // kg CO₂/m³
  glp: 3.0, // kg CO₂/kg
} as const;

export interface CarbonInput {
  tipoCombustible: FuelType | '';
  /** Eficiencia del vehículo seleccionado (0 si no aplica). */
  efficiency: number;
  distanciaRecorrida: number;
  ocupantes: number;
  electricidadConsumo: number;
  gasNaturalConsumo: number;
  glpConsumo: number;
  personasHogar: number;
}

export interface CarbonResult {
  transporte: number;
  electricidad: number;
  gasNatural: number;
  glp: number;
  energia: number;
  totalMensual: number;
  totalAnual: number;
}

/** Calcula las emisiones mensuales y anuales de CO₂.
 *  `factores` permite sobreescribir los valores por defecto desde Configuración. */
export function calcularCarbono(
  input: CarbonInput,
  factores: FactoresEmision = emissionFactors,
): CarbonResult {
  const {
    tipoCombustible,
    efficiency,
    distanciaRecorrida,
    ocupantes,
    electricidadConsumo,
    gasNaturalConsumo,
    glpConsumo,
    personasHogar,
  } = input;

  const personas = personasHogar > 0 ? personasHogar : 1;
  const ocup = ocupantes > 0 ? ocupantes : 1;

  let transporte = 0;
  if (tipoCombustible && efficiency > 0 && distanciaRecorrida > 0) {
    if (tipoCombustible === 'electrico') {
      transporte = (distanciaRecorrida * efficiency * factores.electricidad) / ocup;
    } else if (tipoCombustible === 'gnv') {
      transporte = (distanciaRecorrida * efficiency * factores.gnv) / ocup;
    } else if (tipoCombustible === 'diesel') {
      transporte = (distanciaRecorrida * efficiency * factores.diesel) / ocup;
    } else {
      // gasolina e híbrido usan el factor de gasolina
      transporte = (distanciaRecorrida * efficiency * factores.gasolina) / ocup;
    }
  }

  const electricidad = (electricidadConsumo * factores.electricidad) / personas;
  const gasNatural = (gasNaturalConsumo * factores.gasNatural) / personas;
  const glp = (glpConsumo * factores.glp) / personas;

  const energia = electricidad + gasNatural + glp;
  const totalMensual = transporte + energia;
  const totalAnual = totalMensual * 12;

  return { transporte, electricidad, gasNatural, glp, energia, totalMensual, totalAnual };
}

export interface Clasificacion {
  nivel: string;
  color: string;
  mensaje: string;
}

export const DEFAULT_UMBRALES: Umbrales = { excelente: 2000, buena: 4000, regular: 8000 };

/** Clasifica la huella de carbono anual (kg CO₂/año).
 *  `umbrales` permite ajustar los cortes desde Configuración. */
export function clasificarCarbono(
  anual: number,
  umbrales: Umbrales = DEFAULT_UMBRALES,
): Clasificacion {
  if (anual < umbrales.excelente) {
    return {
      nivel: 'Excelente',
      color: '#27AE60',
      mensaje: '¡Felicitaciones! Tu huella de carbono está muy por debajo del promedio.',
    };
  }
  if (anual < umbrales.buena) {
    return {
      nivel: 'Buena',
      color: '#F39C12',
      mensaje: 'Tu huella está en un rango aceptable, pero hay oportunidades de mejora.',
    };
  }
  if (anual < umbrales.regular) {
    return {
      nivel: 'Regular',
      color: '#E67E22',
      mensaje: 'Tu huella está por encima del promedio. Considera hacer cambios.',
    };
  }
  return {
    nivel: 'Alta',
    color: '#E74C3C',
    mensaje: 'Tu huella es significativamente alta. Es importante tomar acción.',
  };
}

export type HidricaTipo = 'agricultura' | 'pecuaria';

/** Interpretación del consumo hídrico (m³) según el tipo de actividad. */
export function interpretarHidrica(valor: number, tipo: HidricaTipo): Clasificacion {
  if (tipo === 'agricultura') {
    if (valor < 100) {
      return {
        nivel: 'Consumo Bajo',
        color: '#27ae60',
        mensaje:
          'Excelente gestión del agua. Mantén estas prácticas sostenibles y considera compartir tus métodos con otros agricultores.',
      };
    }
    if (valor < 500) {
      return {
        nivel: 'Consumo Moderado',
        color: '#f39c12',
        mensaje:
          'Buen uso del agua. Puedes optimizar con riego por goteo, mulching y selección de variedades resistentes a la sequía.',
      };
    }
    return {
      nivel: 'Consumo Alto',
      color: '#e74c3c',
      mensaje:
        'Se recomienda implementar sistemas de riego eficientes, recolección de agua lluvia y técnicas de conservación del suelo.',
    };
  }

  if (valor < 200) {
    return {
      nivel: 'Consumo Bajo',
      color: '#27ae60',
      mensaje:
        'Excelente manejo hídrico. Continúa con estas prácticas y considera sistemas de reciclaje de agua.',
    };
  }
  if (valor < 1000) {
    return {
      nivel: 'Consumo Moderado',
      color: '#f39c12',
      mensaje:
        'Uso adecuado del agua. Optimiza con bebederos automáticos y sistemas de recolección de agua lluvia.',
    };
  }
  return {
    nivel: 'Consumo Alto',
    color: '#e74c3c',
    mensaje:
      'Se sugiere revisar la eficiencia de los sistemas de suministro de agua y implementar tecnologías de ahorro.',
  };
}
