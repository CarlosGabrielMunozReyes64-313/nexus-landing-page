import { useState } from 'react';
import { type ChartConfiguration } from 'chart.js/auto';
import DemoNav from './DemoNav';
import ChartCanvas from './ChartCanvas';
import { interpretarHidrica, type Clasificacion, type HidricaTipo } from './ecoData';
import styles from './HuellaHidrica.module.css';

type Tab = HidricaTipo;

interface ResultState {
  valor: number;
  interpretacion: Clasificacion;
}

function doughnutConfig(valor: number): ChartConfiguration {
  return {
    type: 'doughnut',
    data: {
      labels: ['Consumo hídrico', 'Agua disponible estimada'],
      datasets: [
        {
          data: [valor, Math.max(1000 - valor, 100)],
          backgroundColor: ['#667eea', '#e9ecef'],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 20, font: { size: 14 } },
        },
      },
    },
  };
}

export default function HuellaHidrica() {
  const [tab, setTab] = useState<Tab>('agricultura');

  // Agricultura
  const [aguaPlantula, setAguaPlantula] = useState('');
  const [numPlantas, setNumPlantas] = useState('');
  const [cicloProductivo, setCicloProductivo] = useState('');

  // Pecuaria
  const [numAnimales, setNumAnimales] = useState('');
  const [aguaDiaria, setAguaDiaria] = useState('');
  const [diasProduccion, setDiasProduccion] = useState('');

  const [resAgricultura, setResAgricultura] = useState<ResultState | null>(null);
  const [resPecuaria, setResPecuaria] = useState<ResultState | null>(null);

  const [errAgricultura, setErrAgricultura] = useState('');
  const [errPecuaria, setErrPecuaria] = useState('');
  const [loadingAg, setLoadingAg] = useState(false);
  const [loadingPe, setLoadingPe] = useState(false);

  const positivos = (...vals: string[]) =>
    vals.every((v) => v !== '' && parseFloat(v) > 0);

  function calcularAgricultura() {
    if (!positivos(aguaPlantula, numPlantas, cicloProductivo)) {
      setErrAgricultura('Por favor, complete todos los campos con valores válidos mayores a 0');
      setResAgricultura(null);
      window.setTimeout(() => setErrAgricultura(''), 5000);
      return;
    }
    setErrAgricultura('');
    setLoadingAg(true);
    window.setTimeout(() => {
      const total =
        (parseFloat(aguaPlantula) * parseFloat(numPlantas) * parseFloat(cicloProductivo)) / 1000;
      setResAgricultura({ valor: total, interpretacion: interpretarHidrica(total, 'agricultura') });
      setLoadingAg(false);
    }, 800);
  }

  function calcularPecuaria() {
    if (!positivos(numAnimales, aguaDiaria, diasProduccion)) {
      setErrPecuaria('Por favor, complete todos los campos con valores válidos mayores a 0');
      setResPecuaria(null);
      window.setTimeout(() => setErrPecuaria(''), 5000);
      return;
    }
    setErrPecuaria('');
    setLoadingPe(true);
    window.setTimeout(() => {
      const total =
        (parseFloat(numAnimales) * parseFloat(aguaDiaria) * parseFloat(diasProduccion)) / 1000;
      setResPecuaria({ valor: total, interpretacion: interpretarHidrica(total, 'pecuaria') });
      setLoadingPe(false);
    }, 800);
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.shell}>
        <DemoNav />

        <div className={styles.container}>
          <div className={styles.header}>
            <h1>💧 Calculadora de Huella Hídrica</h1>
            <p>Evalúa el impacto hídrico de tus actividades agrícolas y pecuarias</p>
          </div>

          <div className={styles.tabs}>
            <div
              className={`${styles.tab} ${tab === 'agricultura' ? styles.tabActive : ''}`}
              onClick={() => setTab('agricultura')}
            >
              🌱 Agricultura
            </div>
            <div
              className={`${styles.tab} ${tab === 'pecuaria' ? styles.tabActive : ''}`}
              onClick={() => setTab('pecuaria')}
            >
              🐄 Producción Pecuaria
            </div>
          </div>

          {tab === 'agricultura' && (
            <div className={styles.pane}>
              <h3 className={styles.paneTitle}>🌱 Huella Hídrica en Agricultura</h3>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>💧 Consumo de Agua por Plántula (litros):</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={aguaPlantula}
                    onChange={(e) => setAguaPlantula(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>🌿 Número de Plantas Sembradas:</label>
                  <input
                    type="number"
                    min="1"
                    value={numPlantas}
                    onChange={(e) => setNumPlantas(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>📅 Duración del Ciclo Productivo (días):</label>
                  <input
                    type="number"
                    min="1"
                    value={cicloProductivo}
                    onChange={(e) => setCicloProductivo(e.target.value)}
                  />
                </div>
              </div>

              <button className={styles.calcBtn} onClick={calcularAgricultura}>
                Calcular Huella Hídrica
              </button>

              {loadingAg && (
                <div className={styles.loading}>
                  <div className={styles.spinner} />
                  <p>Calculando...</p>
                </div>
              )}
              {errAgricultura && <div className={styles.error}>{errAgricultura}</div>}
              {resAgricultura && !loadingAg && (
                <ResultBlock res={resAgricultura} />
              )}
            </div>
          )}

          {tab === 'pecuaria' && (
            <div className={styles.pane}>
              <h3 className={styles.paneTitle}>🐄 Huella Hídrica en Producción Pecuaria</h3>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>🐮 Número de Animales:</label>
                  <input
                    type="number"
                    min="1"
                    value={numAnimales}
                    onChange={(e) => setNumAnimales(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>💧 Consumo Diario de Agua (litros/día):</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={aguaDiaria}
                    onChange={(e) => setAguaDiaria(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>📅 Días de Producción:</label>
                  <input
                    type="number"
                    min="1"
                    value={diasProduccion}
                    onChange={(e) => setDiasProduccion(e.target.value)}
                  />
                </div>
              </div>

              <button className={styles.calcBtn} onClick={calcularPecuaria}>
                Calcular Huella Hídrica
              </button>

              {loadingPe && (
                <div className={styles.loading}>
                  <div className={styles.spinner} />
                  <p>Calculando...</p>
                </div>
              )}
              {errPecuaria && <div className={styles.error}>{errPecuaria}</div>}
              {resPecuaria && !loadingPe && <ResultBlock res={resPecuaria} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ResultBlock({ res }: { res: ResultState }) {
  return (
    <div className={styles.result}>
      <div className={styles.resultValue} style={{ color: res.interpretacion.color }}>
        {res.valor.toFixed(2)} m³
      </div>
      <div className={styles.interpretation}>
        <h4>📊 Interpretación: {res.interpretacion.nivel}</h4>
        <p>
          <strong>💡 Recomendaciones:</strong> {res.interpretacion.mensaje}
        </p>
      </div>
      <div className={styles.chartContainer}>
        <ChartCanvas
          config={doughnutConfig(res.valor)}
          ariaLabel="Distribución del consumo hídrico"
        />
      </div>
    </div>
  );
}
