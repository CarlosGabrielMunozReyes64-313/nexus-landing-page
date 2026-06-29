import { useSettings } from './SettingsContext';
import { REGIONES } from './data/regiones';
import type {
  EcoSettings,
  FactoresEmision,
  Metas,
  Umbrales,
  Unidades,
  Defaults,
  Apariencia,
} from './settings';
import styles from './Configuracion.module.css';

const numero = (v: string) => (v === '' ? 0 : parseFloat(v));

export default function Configuracion() {
  const { settings, update, reset } = useSettings();

  // helpers tipados para actualizar sub-secciones
  const setFactor = <K extends keyof FactoresEmision>(k: K, v: number) =>
    update('factores', { ...settings.factores, [k]: v });
  const setMeta = <K extends keyof Metas>(k: K, v: number) =>
    update('metas', { ...settings.metas, [k]: v });
  const setUmbral = <K extends keyof Umbrales>(k: K, v: number) =>
    update('umbrales', { ...settings.umbrales, [k]: v });
  const setUnidad = <K extends keyof Unidades>(k: K, v: Unidades[K]) =>
    update('unidades', { ...settings.unidades, [k]: v });
  const setDefault = <K extends keyof Defaults>(k: K, v: number) =>
    update('defaults', { ...settings.defaults, [k]: v });
  const setApariencia = <K extends keyof Apariencia>(k: K, v: Apariencia[K]) =>
    update('apariencia', { ...settings.apariencia, [k]: v });

  return (
    <div className={styles.config} data-eco-tema={settings.apariencia.tema}>
      <div className={styles.head}>
        <h2>⚙️ Configuración</h2>
        <button className={styles.reset} onClick={reset}>
          ↺ Restaurar valores por defecto
        </button>
      </div>

      {/* 1 · Factores de emisión */}
      <Card title="🏭 Factores de emisión" hint="kg CO₂ por unidad de consumo. Referencia: Colombia.">
        <div className={styles.grid}>
          <Field label="Gasolina (kg/L)">
            <NumIn value={settings.factores.gasolina} onChange={(v) => setFactor('gasolina', v)} step={0.01} />
          </Field>
          <Field label="Diésel (kg/L)">
            <NumIn value={settings.factores.diesel} onChange={(v) => setFactor('diesel', v)} step={0.01} />
          </Field>
          <Field label="GNV (kg/m³)">
            <NumIn value={settings.factores.gnv} onChange={(v) => setFactor('gnv', v)} step={0.01} />
          </Field>
          <Field label="Electricidad (kg/kWh)">
            <NumIn value={settings.factores.electricidad} onChange={(v) => setFactor('electricidad', v)} step={0.001} />
          </Field>
          <Field label="Gas natural (kg/m³)">
            <NumIn value={settings.factores.gasNatural} onChange={(v) => setFactor('gasNatural', v)} step={0.01} />
          </Field>
          <Field label="GLP (kg/kg)">
            <NumIn value={settings.factores.glp} onChange={(v) => setFactor('glp', v)} step={0.01} />
          </Field>
        </div>
      </Card>

      {/* 2 · Metas y referencias */}
      <Card title="🎯 Metas y referencias" hint="Valores que alimentan las comparativas del dashboard (kg CO₂/año).">
        <div className={styles.grid}>
          <Field label="Meta 2030">
            <NumIn value={settings.metas.meta2030} onChange={(v) => setMeta('meta2030', v)} step={50} />
          </Field>
          <Field label="Promedio nacional">
            <NumIn value={settings.metas.promedioNacional} onChange={(v) => setMeta('promedioNacional', v)} step={50} />
          </Field>
          <Field label="Promedio mundial">
            <NumIn value={settings.metas.promedioMundial} onChange={(v) => setMeta('promedioMundial', v)} step={50} />
          </Field>
        </div>
      </Card>

      {/* 3 · Umbrales de clasificación */}
      <Card title="📊 Umbrales de clasificación" hint="Cortes en kg CO₂/año. Por debajo de cada valor cambia el nivel.">
        <div className={styles.grid}>
          <Field label="« Excelente (por debajo de)">
            <NumIn value={settings.umbrales.excelente} onChange={(v) => setUmbral('excelente', v)} step={100} />
          </Field>
          <Field label="« Buena (por debajo de)">
            <NumIn value={settings.umbrales.buena} onChange={(v) => setUmbral('buena', v)} step={100} />
          </Field>
          <Field label="« Regular (por debajo de)">
            <NumIn value={settings.umbrales.regular} onChange={(v) => setUmbral('regular', v)} step={100} />
          </Field>
        </div>
        <p className={styles.note}>El resto se clasifica como «Alta».</p>
      </Card>

      {/* 4 · Región / ubicación */}
      <Card title="🗺️ Región / ubicación" hint="Define el departamento que muestra el Geovisor.">
        <Field label="Departamento">
          <select
            className={styles.select}
            value={settings.region}
            onChange={(e) => update('region', e.target.value)}
          >
            {REGIONES.map((r) => (
              <option key={r.key} value={r.key}>
                {r.nombre}
              </option>
            ))}
          </select>
        </Field>
      </Card>

      {/* 5 · Unidades y formato */}
      <Card title="📐 Unidades y formato">
        <div className={styles.grid}>
          <Field label="Masa">
            <Toggle
              options={[
                { v: 'kg', t: 'kg CO₂' },
                { v: 'ton', t: 'toneladas' },
              ]}
              value={settings.unidades.masa}
              onChange={(v) => setUnidad('masa', v as Unidades['masa'])}
            />
          </Field>
          <Field label="Distancia">
            <Toggle
              options={[
                { v: 'km', t: 'km' },
                { v: 'mi', t: 'millas' },
              ]}
              value={settings.unidades.distancia}
              onChange={(v) => setUnidad('distancia', v as Unidades['distancia'])}
            />
          </Field>
          <Field label="Periodo mostrado">
            <Toggle
              options={[
                { v: 'mensual', t: 'Mensual' },
                { v: 'anual', t: 'Anual' },
              ]}
              value={settings.unidades.periodo}
              onChange={(v) => setUnidad('periodo', v as Unidades['periodo'])}
            />
          </Field>
        </div>
      </Card>

      {/* 6 · Valores por defecto */}
      <Card title="🔧 Valores por defecto" hint="Se precargan en el formulario de la calculadora.">
        <div className={styles.grid}>
          <Field label="Personas en el hogar">
            <NumIn value={settings.defaults.personasHogar} onChange={(v) => setDefault('personasHogar', v)} step={1} min={1} />
          </Field>
          <Field label="Ocupantes del vehículo">
            <NumIn value={settings.defaults.ocupantes} onChange={(v) => setDefault('ocupantes', v)} step={1} min={1} />
          </Field>
        </div>
      </Card>

      {/* 7 · Apariencia */}
      <Card title="🎨 Apariencia">
        <div className={styles.grid}>
          <Field label="Tema">
            <Toggle
              options={[
                { v: 'claro', t: '☀️ Claro' },
                { v: 'oscuro', t: '🌙 Oscuro' },
              ]}
              value={settings.apariencia.tema}
              onChange={(v) => setApariencia('tema', v as Apariencia['tema'])}
            />
          </Field>
          <Field label="Idioma">
            <Toggle
              options={[
                { v: 'es', t: 'Español' },
                { v: 'en', t: 'English' },
              ]}
              value={settings.apariencia.idioma}
              onChange={(v) => setApariencia('idioma', v as Apariencia['idioma'])}
            />
          </Field>
        </div>
      </Card>
    </div>
  );
}

/* ---------- subcomponentes ---------- */

function Card({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      {hint && <p className={styles.hint}>{hint}</p>}
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      {children}
    </label>
  );
}

function NumIn({
  value,
  onChange,
  step = 1,
  min = 0,
}: {
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
}) {
  return (
    <input
      className={styles.input}
      type="number"
      step={step}
      min={min}
      value={Number.isFinite(value) ? value : ''}
      onChange={(e) => onChange(numero(e.target.value))}
    />
  );
}

function Toggle({
  options,
  value,
  onChange,
}: {
  options: { v: string; t: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className={styles.toggle}>
      {options.map((o) => (
        <button
          key={o.v}
          type="button"
          className={`${styles.toggleBtn} ${value === o.v ? styles.toggleActive : ''}`}
          onClick={() => onChange(o.v)}
        >
          {o.t}
        </button>
      ))}
    </div>
  );
}
