import { Outlet } from 'react-router-dom';
import { SettingsProvider } from './SettingsContext';

/** Envuelve todas las rutas /proyecto-demo con la configuración compartida. */
export default function DemoLayout() {
  return (
    <SettingsProvider>
      <Outlet />
    </SettingsProvider>
  );
}
