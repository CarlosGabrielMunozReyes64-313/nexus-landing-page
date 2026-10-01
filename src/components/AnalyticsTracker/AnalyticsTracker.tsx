import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../../lib/analytics';

// Envía una «página vista» en cada cambio de ruta (el sitio es una SPA,
// así que GA4 y Meta no lo detectan solos).
export default function AnalyticsTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);
  return null;
}
