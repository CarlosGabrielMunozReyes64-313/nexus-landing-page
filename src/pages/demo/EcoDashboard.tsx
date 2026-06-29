import { useMemo, useState } from 'react';
import { type ChartConfiguration } from 'chart.js/auto';
import DemoNav from './DemoNav';
import ChartCanvas from './ChartCanvas';
import Configuracion from './Configuracion';
import { useSettings } from './SettingsContext';
import { generarReportePDF } from './report';
import { regionPorKey } from './data/regiones';
import aguaRegional from './data/aguaRegional.json';
import co2Pais from './data/co2Pais.json';
import {
  vehicleOptions,
  calcularCarbono,
  clasificarCarbono,
  type CarbonResult,
  type FuelType,
} from './ecoData';
import styles from './EcoDashboard.module.css';

type Section = 'dashboard' | 'calculator' | 'reportes' | 'geovisor' | 'configuracion';

const RING_RADIUS = 54;
const RING_CIRC = 2 * Math.PI * RING_RADIUS;

type AguaData = {
  nacional: { precipitacionAnual: number; temperaturaMedia: number };
  regiones: Record<string, { precipitacionAnual: number; temperaturaMedia: number }>;
};
const agua = aguaRegional as unknown as AguaData;

const ZERO: CarbonResult = {
  transporte: 0,
  electricidad: 0,
  gasNatural: 0,
  glp: 0,
  energia: 0,
  totalMensual: 0,
  totalAnual: 0,
};

export default function EcoDashboard() {
  const { settings } = useSettings();
  const META_2030 = settings.metas.meta2030;
  const PROMEDIO_NACIONAL = settings.metas.promedioNacional;

  const [section, setSection] = useState<Section>('dashboard');

  const [tipoCombustible, setTipoCombustible] = useState<FuelType | ''>('');
  const [tipoVehiculo, setTipoVehiculo] = useState('');
  const [distanciaRecorrida, setDistanciaRecorrida] = useState('');
  const [ocupantes, setOcupantes] = useState(String(settings.defaults.ocupantes));
  const [electricidadConsumo, setElectricidadConsumo] = useState('');
  const [gasNaturalConsumo, setGasNaturalConsumo] = useState('');
  const [glpConsumo, setGlpConsumo] = useState('');
  const [personasHogar, setPersonasHogar] = useState(String(settings.defaults.personasHogar));

  const [result, setResult] = useState<CarbonResult>(ZERO);

  const vehiculosDisponibles = tipoCombustible ? vehicleOptions[tipoCombustible] : [];
  const efficiency = vehiculosDisponibles.find((o) => o.value === tipoVehiculo)?.efficiency ?? 0;

  const num = (v: string) => parseFloat(v) || 0;
  const int = (v: string) => parseInt(v, 10) || 0;

  const region = regionPorKey(settings.region);
  const aguaRegion = agua.regiones[settings.region] ?? agua.nacional;

  function actualizar() {
    const r = calcularCarbono(
      {
        tipoCombustible,
        efficiency,
        distanciaRecorrida: num(distanciaRecorrida),
        ocupantes: int(ocupantes),
        electricidadConsumo: num(electricidadConsumo),
        gasNaturalConsumo: num(gasNaturalConsumo),
        glpConsumo: num(glpConsumo),
        personasHogar: int(personasHogar),
      },
      settings.factores,
    );
    setResult(r);
    setSection('dashboard');
  }

  const rating = result.totalAnual > 0 ? clasificarCarbono(result.totalAnual, settings.umbrales).nivel : '-';

  const impactPct = Math.min((result.totalAnual / META_2030) * 100, 100);
  const ringDash = `${(impactPct / 100) * RING_CIRC} ${RING_CIRC}`;

  const co2 = co2Pais as {
    anio: number;
    colombia: { co2PerCapita: number; co2Total: number };
    mundo: { co2PerCapita: number };
  };

  function descargarReporte() {
    generarReportePDF({
      resultado: result,
      settings,
      precipitacionRegional: aguaRegion.precipitacionAnual,
    });
  }

  const geovisorView = (
    <div className={styles.geovisor}>
      <div className={styles.cardTitle}>🗺️ Geovisor - Impacto Regional</div>
      <div className={styles.mapPlaceholder}>
        <svg viewBox="0 0 400 400" className={styles.colombiaMap}>
          <path d="M50,200 Q100,50 200,80 Q300,60 350,120 Q380,180 350,250 Q300,320 200,340 Q100,350 50,300 Q20,250 50,200 Z" />
        </svg>
        <div className={styles.region} style={{ top: '40%', left: '45%' }} />
        <div className={styles.region} style={{ top: '60%', left: '30%' }} />
        <div className={styles.region} style={{ top: '50%', left: '60%' }} />
        <div className={styles.mapOverlay}>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>📍 Tu Ubicación</div>
          <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{region.nombre}, Colombia</div>
          <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
            💧 Precipitación regional:{' '}
            <span style={{ color: '#3b82f6', fontWeight: 600 }}>
              {aguaRegion.precipitacionAnual.toLocaleString('es-CO')} mm/año
            </span>
          </div>
          <div style={{ fontSize: '0.8rem', marginTop: '0.35rem' }}>
            🌡️ Temp. media:{' '}
            <span style={{ fontWeight: 600 }}>{aguaRegion.temperaturaMedia} °C</span>
          </div>
          <div style={{ fontSize: '0.8rem', marginTop: '0.35rem' }}>
            🏭 CO₂ nacional ({co2.anio}):{' '}
            <span style={{ color: '#10b981', fontWeight: 600 }}>
              {co2.colombia.co2PerCapita} t/persona
            </span>
          </div>
        </div>
      </div>
      <p className={styles.geoFuente}>
        Fuentes: NASA POWER (agua, por departamento) · Our World in Data (CO₂ nacional).
      </p>
    </div>
  );

  const pieConfig: ChartConfiguration = useMemo(
    () => ({
      type: 'doughnut',
      data: {
        labels: ['Transporte', 'Energía Eléctrica', 'Gas Natural', 'GLP'],
        datasets: [
          {
            data: [result.transporte, result.electricidad, result.gasNatural, result.glp],
            backgroundColor: ['#ef4444', '#3b82f6', '#10b981', '#f59e0b'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { color: '#334155', font: { size: 12 } } } },
      },
    }),
    [result],
  );

  const barConfig: ChartConfiguration = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ['Tu Huella', 'Promedio Nacional', 'Meta 2030'],
        datasets: [
          {
            label: 'kg CO₂/año',
            data: [result.totalAnual, PROMEDIO_NACIONAL, META_2030],
            backgroundColor: ['#ef4444', '#64748b', '#10b981'],
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, ticks: { color: '#64748b' }, grid: { color: '#e2e8f0' } },
          x: { ticks: { color: '#64748b' }, grid: { display: false } },
        },
      },
    }),
    [result],
  );

  const lineConfig: ChartConfiguration = useMemo(() => {
    // Proyección mensual ilustrativa alrededor del total mensual calculado.
    const t = result.totalMensual;
    const factores = [0.92, 0.96, 1.0, 1.05, 0.98, 1.0];
    return {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Emisiones Mensuales',
            data: factores.map((f) => +(t * f).toFixed(2)),
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, ticks: { color: '#64748b' }, grid: { color: '#e2e8f0' } },
          x: { ticks: { color: '#64748b' }, grid: { display: false } },
        },
      },
    };
  }, [result]);

  return (
    <div className={styles.wrap} data-eco-tema={settings.apariencia.tema}>
      <div className={styles.shell}>
        <DemoNav />

        <div className={styles.dashboard}>
          <aside className={styles.sidebar}>
            <div className={styles.logo}>🌍 EcoAnalytics</div>

            <div className={styles.navSection}>
              <div className={styles.navTitle}>Análisis</div>
              <div
                className={`${styles.navItem} ${section === 'dashboard' ? styles.navItemActive : ''}`}
                onClick={() => setSection('dashboard')}
              >
                📊 Dashboard
              </div>
              <div
                className={`${styles.navItem} ${section === 'calculator' ? styles.navItemActive : ''}`}
                onClick={() => setSection('calculator')}
              >
                🧮 Calculadora
              </div>
              <div
                className={`${styles.navItem} ${section === 'reportes' ? styles.navItemActive : ''}`}
                onClick={() => setSection('reportes')}
              >
                📈 Reportes
              </div>
            </div>

            <div className={styles.navSection}>
              <div className={styles.navTitle}>Herramientas</div>
              <div
                className={`${styles.navItem} ${section === 'geovisor' ? styles.navItemActive : ''}`}
                onClick={() => setSection('geovisor')}
              >
                🗺️ Geovisor
              </div>
              <div
                className={`${styles.navItem} ${section === 'configuracion' ? styles.navItemActive : ''}`}
                onClick={() => setSection('configuracion')}
              >
                ⚙️ Configuración
              </div>
            </div>
          </aside>

          <header className={styles.header}>
            <div className={styles.headerTitle}>Dashboard de Huella de Carbono</div>
            <button className={styles.btnPrimary} onClick={actualizar}>
              🔄 Actualizar Análisis
            </button>
          </header>

          <main className={styles.main}>
            {section === 'dashboard' && (
              <>
                <div className={styles.statsGrid}>
                  <Stat icon="🚗" value={result.transporte.toFixed(0)} label="KG CO₂ Transporte" />
                  <Stat icon="⚡" value={result.energia.toFixed(0)} label="KG CO₂ Energía" />
                  <Stat icon="📊" value={result.totalMensual.toFixed(0)} label="Total Mensual" />
                  <Stat icon="🎯" value={rating} label="Clasificación" />
                </div>

                <div className={styles.grid}>
                  <div className={styles.card}>
                    <div className={styles.cardTitle}>📈 Distribución de Emisiones</div>
                    <div className={styles.chartBox}>
                      <ChartCanvas config={pieConfig} ariaLabel="Distribución de emisiones" />
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className={styles.cardTitle}>📊 Comparativa Anual</div>
                    <div className={styles.chartBox}>
                      <ChartCanvas config={barConfig} ariaLabel="Comparativa anual" />
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className={styles.cardTitle}>🌡️ Impacto Ambiental</div>
                    <div className={styles.ringWrap}>
                      <div>
                        <svg className={styles.progressRing} viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r={RING_RADIUS} />
                          <circle
                            cx="60"
                            cy="60"
                            r={RING_RADIUS}
                            className="progress"
                            style={{ strokeDasharray: ringDash }}
                          />
                        </svg>
                        <div className={styles.ringText}>
                          <div className={styles.ringPct}>{impactPct.toFixed(0)}%</div>
                          <div className={styles.ringSub}>vs. Objetivo 2030</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className={styles.cardTitle}>📅 Tendencia Temporal</div>
                    <div className={styles.chartBox}>
                      <ChartCanvas config={lineConfig} ariaLabel="Tendencia temporal" />
                    </div>
                  </div>
                </div>

                {geovisorView}
              </>
            )}

            {section === 'calculator' && (
              <div className={styles.formContainer}>
                <div className={styles.formSection}>
                  <h3>🚗 Datos de Transporte</h3>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Tipo de Combustible</label>
                    <select
                      className={styles.formSelect}
                      value={tipoCombustible}
                      onChange={(e) => {
                        setTipoCombustible(e.target.value as FuelType | '');
                        setTipoVehiculo('');
                      }}
                    >
                      <option value="">Seleccionar combustible</option>
                      <option value="gasolina">⛽ Gasolina</option>
                      <option value="diesel">🛢️ Diésel</option>
                      <option value="gnv">🔥 Gas Natural (GNV)</option>
                      <option value="electrico">🔋 Eléctrico</option>
                      <option value="hibrido">🔋⛽ Híbrido</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Tipo de Vehículo</label>
                    <select
                      className={styles.formSelect}
                      value={tipoVehiculo}
                      onChange={(e) => setTipoVehiculo(e.target.value)}
                    >
                      <option value="">Seleccionar vehículo</option>
                      {vehiculosDisponibles.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Distancia Recorrida (km/mes)</label>
                    <input
                      className={styles.formInput}
                      type="number"
                      min="0"
                      placeholder="1000"
                      value={distanciaRecorrida}
                      onChange={(e) => setDistanciaRecorrida(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Número de Ocupantes</label>
                    <input
                      className={styles.formInput}
                      type="number"
                      min="1"
                      value={ocupantes}
                      onChange={(e) => setOcupantes(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h3>⚡ Consumo de Energía</h3>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Electricidad (kWh/mes)</label>
                    <input
                      className={styles.formInput}
                      type="number"
                      min="0"
                      placeholder="300"
                      value={electricidadConsumo}
                      onChange={(e) => setElectricidadConsumo(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Gas Natural (m³/mes)</label>
                    <input
                      className={styles.formInput}
                      type="number"
                      min="0"
                      placeholder="50"
                      value={gasNaturalConsumo}
                      onChange={(e) => setGasNaturalConsumo(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>GLP (kg/mes)</label>
                    <input
                      className={styles.formInput}
                      type="number"
                      min="0"
                      placeholder="15"
                      value={glpConsumo}
                      onChange={(e) => setGlpConsumo(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Personas en el Hogar</label>
                    <input
                      className={styles.formInput}
                      type="number"
                      min="1"
                      value={personasHogar}
                      onChange={(e) => setPersonasHogar(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {section === 'reportes' && (
              <div className={styles.reportes}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>📈 Reporte de tu Huella</div>
                  <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                    Genera un PDF con el desglose de tu última estimación, la clasificación y las
                    comparativas configuradas. Primero calcula tu huella en la Calculadora.
                  </p>
                  <div className={styles.reporteResumen}>
                    <span>Total anual estimado</span>
                    <strong>{result.totalAnual.toFixed(0)} kg CO₂</strong>
                  </div>
                  <button
                    className={styles.btnPrimary}
                    onClick={descargarReporte}
                    disabled={result.totalAnual <= 0}
                  >
                    ⬇️ Descargar PDF
                  </button>
                  {result.totalAnual <= 0 && (
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.75rem' }}>
                      Aún no hay datos. Ve a 🧮 Calculadora y pulsa «Actualizar Análisis».
                    </p>
                  )}
                </div>
              </div>
            )}

            {section === 'geovisor' && geovisorView}

            {section === 'configuracion' && <Configuracion />}
          </main>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className={styles.statItem}>
      <div className={styles.statIcon}>{icon}</div>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}
