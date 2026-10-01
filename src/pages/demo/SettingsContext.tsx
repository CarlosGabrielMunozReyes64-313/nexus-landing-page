import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  DEFAULT_SETTINGS,
  loadSettings,
  resetSettings as clearStored,
  saveSettings,
  type EcoSettings,
} from './settings';

interface SettingsCtx {
  settings: EcoSettings;
  /** Actualiza una parte del estado (merge superficial por sección). */
  update: <K extends keyof EcoSettings>(key: K, value: EcoSettings[K]) => void;
  /** Reemplaza el estado completo. */
  setAll: (s: EcoSettings) => void;
  reset: () => void;
}

const Ctx = createContext<SettingsCtx | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  // Se arranca con los valores por defecto (igual que el HTML prerenderizado)
  // y la configuración guardada se carga al montar, para no romper la hidratación.
  const [settings, setSettings] = useState<EcoSettings>(DEFAULT_SETTINGS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSettings(loadSettings());
    setReady(true);
  }, []);

  // Persistir en cada cambio (solo después de haber leído lo guardado).
  useEffect(() => {
    if (ready) saveSettings(settings);
  }, [settings, ready]);

  // Aplicar tema e idioma al contenedor del demo (atributos en <html>).
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.ecoTema = settings.apariencia.tema;
    root.dataset.ecoIdioma = settings.apariencia.idioma;
    return () => {
      delete root.dataset.ecoTema;
      delete root.dataset.ecoIdioma;
    };
  }, [settings.apariencia.tema, settings.apariencia.idioma]);

  const update = useCallback(
    <K extends keyof EcoSettings>(key: K, value: EcoSettings[K]) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const setAll = useCallback((s: EcoSettings) => setSettings(s), []);

  const reset = useCallback(() => {
    clearStored();
    setSettings(DEFAULT_SETTINGS);
  }, []);

  const value = useMemo<SettingsCtx>(
    () => ({ settings, update, setAll, reset }),
    [settings, update, setAll, reset],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSettings(): SettingsCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useSettings debe usarse dentro de <SettingsProvider>');
  return ctx;
}
