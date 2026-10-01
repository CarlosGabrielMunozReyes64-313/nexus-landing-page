import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { preloadForPath } from "./routes";
import { initAnalytics } from "./lib/analytics";
import { enableSelectableLinks } from "./lib/selectableLinks";
import "./styles/global.css";

// Punto de entrada del navegador.
// · En producción el HTML ya viene prerenderizado: se «hidrata» (React toma
//   el control del HTML existente sin volver a pintarlo).
// · En desarrollo (npm run dev) el contenedor está vacío: se renderiza normal.
const container = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

initAnalytics();
enableSelectableLinks();

preloadForPath(window.location.pathname)
  .catch(() => undefined)
  .finally(() => {
    if (container.hasChildNodes()) hydrateRoot(container, app);
    else createRoot(container).render(app);
  });
