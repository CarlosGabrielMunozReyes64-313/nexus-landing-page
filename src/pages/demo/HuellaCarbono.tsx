import { useMemo, useState } from 'react';
import DemoNav from './DemoNav';
import {
  vehicleOptions,
  calcularCarbono,
  clasificarCarbono,
  type FuelType,
  type CarbonResult,
} from './ecoData';
import styles from './HuellaCarbono.module.css';

type Tab = 'transporte' | 'energia' | 'resultados';

const PROMEDIO_MUNDIAL = 4800; // kg CO₂/año per cápita

export default function HuellaCarbono() {
  const [tab, setTab] = useState<Tab>('transporte');

  // Transporte
  const [tipoCombustible, setTipoCombustible] = useState<FuelType | ''>('');
  const [tipoVehiculo, setTipoVehiculo] = useState('');
  const [distanciaRecorrida, setDistanciaRecorrida] = useState('');
  const [ocupantes, setOcupantes] = useState('1');

  // Energía
  const [electricidadConsumo, setElectricidadConsumo] = useState('');
  const [gasNaturalConsumo, setGasNaturalConsumo] = useState('');
  const [glpConsumo, setGlpConsumo] = useState('');
  const [personasHogar, setPersonasHogar] = useState('4');

  const [resultado, setResultado] = useState<CarbonResult | null>(null);

  const vehiculosDisponibles = tipoCombustible ? vehicleOptions[tipoCombustible] : [];

  const efficiency = useMemo(() => {
    const v = vehiculosDisponibles.find((o) => o.value === tipoVehiculo);
    return v?.efficiency ?? 0;
  }, [vehiculosDisponibles, tipoVehiculo]);

  const num = (v: string) => parseFloat(v) || 0;
  const int = (v: string) => parseInt(v, 10) || 0;

  function calcular() {
    const r = calcularCarbono({
      tipoCombustible,
      efficiency,
      distanciaRecorrida: num(distanciaRecorrida),
      ocupantes: int(ocupantes),
      electricidadConsumo: num(electricidadConsumo),
      gasNaturalConsumo: num(gasNaturalConsumo),
      glpConsumo: num(glpConsumo),
      personasHogar: int(personasHogar),
    });
    setResultado(r);
    setTab('resultados');
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.shell}>
        <DemoNav />

        <div className={styles.container}>
          <div className={styles.header}>
            <h1>🌍 EcoCalc</h1>
            <p>Calculadora Inteligente de Huella de Carbono</p>
          </div>

          <div className={styles.content}>
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${tab === 'transporte' ? styles.tabActive : ''}`}
                onClick={() => setTab('transporte')}
              >
                🚗 Transporte
              </button>
              <button
                className={`${styles.tab} ${tab === 'energia' ? styles.tabActive : ''}`}
                onClick={() => setTab('energia')}
              >
                ⚡ Energía
              </button>
              <button
                className={`${styles.tab} ${tab === 'resultados' ? styles.tabActive : ''}`}
                onClick={() => setTab('resultados')}
              >
                📊 Resultados
              </button>
            </div>

            {tab === 'transporte' && (
              <div className={styles.pane}>
                <div className={styles.sectionHeader}>
                  <span className={styles.icon}>🚗</span>
                  <h2>Transporte</h2>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="tipoCombustible">Tipo de Combustible</label>
                    <select
                      id="tipoCombustible"
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
                    <label htmlFor="tipoVehiculo">Tipo de Vehículo</label>
                    <select
                      id="tipoVehiculo"
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
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="distanciaRecorrida">Distancia Recorrida (km/mes)</label>
                    <input
                      id="distanciaRecorrida"
                      type="number"
                      min="0"
                      placeholder="Ej: 1000"
                      value={distanciaRecorrida}
                      onChange={(e) => setDistanciaRecorrida(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="ocupantes">Número de Ocupantes</label>
                    <input
                      id="ocupantes"
                      type="number"
                      min="1"
                      placeholder="1"
                      value={ocupantes}
                      onChange={(e) => setOcupantes(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {tab === 'energia' && (
              <div className={styles.pane}>
                <div className={styles.sectionHeader}>
                  <span className={styles.icon}>⚡</span>
                  <h2>Consumo de Energía en el Hogar</h2>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="electricidadConsumo">Electricidad Consumida (kWh/mes)</label>
                    <input
                      id="electricidadConsumo"
                      type="number"
                      min="0"
                      placeholder="Ej: 300"
                      value={electricidadConsumo}
                      onChange={(e) => setElectricidadConsumo(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="gasNaturalConsumo">Gas Natural (m³/mes)</label>
                    <input
                      id="gasNaturalConsumo"
                      type="number"
                      min="0"
                      placeholder="Ej: 50"
                      value={gasNaturalConsumo}
                      onChange={(e) => setGasNaturalConsumo(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="glpConsumo">GLP Consumido (kg/mes)</label>
                    <input
                      id="glpConsumo"
                      type="number"
                      min="0"
                      placeholder="Ej: 15"
                      value={glpConsumo}
                      onChange={(e) => setGlpConsumo(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="personasHogar">Personas en el Hogar</label>
                    <input
                      id="personasHogar"
                      type="number"
                      min="1"
                      placeholder="4"
                      value={personasHogar}
                      onChange={(e) => setPersonasHogar(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {tab === 'resultados' && (
              <div className={styles.pane}>
                <div className={styles.sectionHeader}>
                  <span className={styles.icon}>📊</span>
                  <h2>Resultados y Recomendaciones</h2>
                </div>
                {resultado ? (
                  <Resultados r={resultado} />
                ) : (
                  <p className={styles.empty}>
                    Completa los datos de transporte y energía, luego presiona{' '}
                    <strong>“Calcular”</strong> para ver tus resultados.
                  </p>
                )}
              </div>
            )}

            <button className={styles.calcBtn} onClick={calcular}>
              🧮 Calcular Mi Huella de Carbono
            </button>

            <div className={styles.tips}>
              <h3>💡 Consejos para Reducir tu Huella de Carbono</h3>
              <ul>
                <li>Usa transporte público, bicicleta o camina cuando sea posible</li>
                <li>Considera vehículos eléctricos o híbridos para tu próxima compra</li>
                <li>Optimiza el uso de electrodomésticos y cambia a LED</li>
                <li>Aprovecha la energía solar si es viable en tu zona</li>
                <li>Reduce, reutiliza y recicla materiales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Resultados({ r }: { r: CarbonResult }) {
  const cls = clasificarCarbono(r.totalAnual);
  const pctTransporte = r.totalMensual ? (r.transporte / r.totalMensual) * 100 : 0;
  const pctEnergia = r.totalMensual ? (r.energia / r.totalMensual) * 100 : 0;
  const pctMundial = ((r.totalAnual / PROMEDIO_MUNDIAL) * 100).toFixed(0);

  return (
    <div className={styles.results}>
      <h3 style={{ color: cls.color }}>📊 Tu Huella de Carbono: {cls.nivel}</h3>
      <p className={styles.resultsLead}>{cls.mensaje}</p>

      <div className={styles.resultItem}>
        <span className={styles.resultLabel}>🚗 Emisiones por Transporte (mensual)</span>
        <span className={styles.resultValue}>{r.transporte.toFixed(2)} kg CO₂</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${pctTransporte}%`, background: '#3498DB' }}
        />
      </div>

      <div className={styles.resultItem}>
        <span className={styles.resultLabel}>⚡ Emisiones por Energía (mensual)</span>
        <span className={styles.resultValue}>{r.energia.toFixed(2)} kg CO₂</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${pctEnergia}%`, background: '#E74C3C' }}
        />
      </div>

      <div className={styles.resultItem}>
        <span className={styles.resultLabel}>📅 Total Mensual</span>
        <span className={styles.resultValue}>{r.totalMensual.toFixed(2)} kg CO₂</span>
      </div>

      <div className={`${styles.resultItem} ${styles.resultTotal}`}>
        <span className={styles.resultLabel}>📈 Proyección Anual</span>
        <span className={styles.resultValue} style={{ color: cls.color }}>
          {r.totalAnual.toFixed(2)} kg CO₂
        </span>
      </div>

      <div className={styles.context}>
        <h4>🌍 Contexto</h4>
        <p>
          • Promedio mundial per cápita: ~4,800 kg CO₂/año
          <br />• Meta climática recomendada: &lt;2,300 kg CO₂/año
          <br />• Tu huella representa: {pctMundial}% del promedio mundial
        </p>
      </div>
    </div>
  );
}
