import { useEffect, useRef } from 'react';
import Chart, { type ChartConfiguration } from 'chart.js/auto';

interface Props {
  config: ChartConfiguration;
  className?: string;
  ariaLabel?: string;
}

/**
 * Envoltorio de Chart.js para React.
 * Crea el gráfico al montar y lo reconstruye cuando cambia la configuración,
 * destruyendo siempre la instancia previa para evitar fugas de memoria.
 */
export default function ChartCanvas({ config, className, ariaLabel }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    chartRef.current = new Chart(canvasRef.current, config);
    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
    // Se recrea cuando cambia la configuración (datos nuevos).
  }, [config]);

  return <canvas ref={canvasRef} className={className} role="img" aria-label={ariaLabel} />;
}
