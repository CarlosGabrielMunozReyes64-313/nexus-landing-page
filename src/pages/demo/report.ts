// =====================================================
//  Reporte PDF del cálculo del usuario (cliente, sin backend)
//  Requiere la dependencia `jspdf` (npm i jspdf).
// =====================================================

import { jsPDF } from 'jspdf';
import type { CarbonResult } from './ecoData';
import { clasificarCarbono } from './ecoData';
import type { EcoSettings } from './settings';
import { regionPorKey } from './data/regiones';

export interface ReporteData {
  resultado: CarbonResult;
  settings: EcoSettings;
  /** dato hídrico de la región seleccionada (mm/año), opcional */
  precipitacionRegional?: number;
}

const VERDE = [16, 185, 129] as const;
const GRIS = [100, 116, 139] as const;
const OSCURO = [15, 23, 42] as const;

export function generarReportePDF({ resultado, settings, precipitacionRegional }: ReporteData) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const W = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = 56;

  const cls = clasificarCarbono(resultado.totalAnual, settings.umbrales);
  const region = regionPorKey(settings.region);
  const esTon = settings.unidades.masa === 'ton';
  const factor = esTon ? 1 / 1000 : 1;
  const u = esTon ? 't CO₂' : 'kg CO₂';
  const fmt = (kg: number) => `${(kg * factor).toLocaleString('es-CO', { maximumFractionDigits: 2 })} ${u}`;

  // Encabezado
  doc.setFillColor(VERDE[0], VERDE[1], VERDE[2]);
  doc.rect(0, 0, W, 8, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(OSCURO[0], OSCURO[1], OSCURO[2]);
  doc.text('Reporte de Huella de Carbono', margin, y);
  y += 22;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(GRIS[0], GRIS[1], GRIS[2]);
  doc.text(`NEXUS · EcoAnalytics — generado el ${new Date().toLocaleDateString('es-CO')}`, margin, y);
  doc.text(`Región: ${region.nombre}`, margin, y + 14);
  y += 44;

  // Clasificación destacada
  const rgb = hexToRgb(cls.color);
  doc.setFillColor(rgb[0], rgb[1], rgb[2]);
  doc.roundedRect(margin, y, W - margin * 2, 56, 6, 6, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text(`Clasificación: ${cls.nivel}`, margin + 16, y + 24);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(doc.splitTextToSize(cls.mensaje, W - margin * 2 - 32), margin + 16, y + 42);
  y += 80;

  // Desglose
  doc.setTextColor(OSCURO[0], OSCURO[1], OSCURO[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('Desglose de emisiones', margin, y);
  y += 8;

  const filas: [string, string][] = [
    ['Transporte (mensual)', fmt(resultado.transporte)],
    ['Energía eléctrica (mensual)', fmt(resultado.electricidad)],
    ['Gas natural (mensual)', fmt(resultado.gasNatural)],
    ['GLP (mensual)', fmt(resultado.glp)],
    ['Total mensual', fmt(resultado.totalMensual)],
    ['Proyección anual', fmt(resultado.totalAnual)],
  ];

  doc.setFontSize(11);
  filas.forEach(([k, v], i) => {
    y += 22;
    const total = i >= 4;
    if (i % 2 === 0) {
      doc.setFillColor(245, 247, 250);
      doc.rect(margin, y - 14, W - margin * 2, 22, 'F');
    }
    doc.setFont('helvetica', total ? 'bold' : 'normal');
    doc.setTextColor(total ? OSCURO[0] : GRIS[0], total ? OSCURO[1] : GRIS[1], total ? OSCURO[2] : GRIS[2]);
    doc.text(k, margin + 8, y);
    doc.text(v, W - margin - 8, y, { align: 'right' });
  });
  y += 40;

  // Contexto / comparativas
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(OSCURO[0], OSCURO[1], OSCURO[2]);
  doc.text('Contexto', margin, y);
  y += 20;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(GRIS[0], GRIS[1], GRIS[2]);
  const ctx = [
    `Meta 2030: ${settings.metas.meta2030.toLocaleString('es-CO')} kg CO₂/año`,
    `Promedio nacional: ${settings.metas.promedioNacional.toLocaleString('es-CO')} kg CO₂/año`,
    `Promedio mundial: ${settings.metas.promedioMundial.toLocaleString('es-CO')} kg CO₂/año`,
    `Tu huella vs. mundial: ${((resultado.totalAnual / settings.metas.promedioMundial) * 100).toFixed(0)}%`,
  ];
  if (precipitacionRegional) {
    ctx.push(`Precipitación regional (${region.nombre}): ${precipitacionRegional.toLocaleString('es-CO')} mm/año`);
  }
  ctx.forEach((line) => {
    doc.text(`•  ${line}`, margin + 4, y);
    y += 16;
  });

  // Pie
  doc.setFontSize(8);
  doc.setTextColor(GRIS[0], GRIS[1], GRIS[2]);
  doc.text(
    'Fuentes: NASA POWER (agua) · Our World in Data (CO₂). Reporte demostrativo NEXUS.',
    margin,
    doc.internal.pageSize.getHeight() - 32,
  );

  doc.save(`reporte-huella-${region.key}.pdf`);
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}
