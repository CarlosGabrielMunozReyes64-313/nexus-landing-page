# Desplegar el FRONTEND (React + Vite) en Vercel

## Cómo funciona ahora

`npm run build` hace tres cosas:

1. Compila el sitio para el navegador (`dist/`).
2. Compila una versión para el servidor (`dist-ssr/`, temporal).
3. Ejecuta `scripts/prerender.mjs`, que escribe cada página como HTML completo
   (`dist/<ruta>/index.html`) y genera `404.html`, `sitemap.xml` y `robots.txt`.

Por eso `vercel.json` **ya no redirige todo a `index.html`**: cada ruta tiene su
propio archivo, y las direcciones que no existen responden con un 404 real.

## Pasos

1. Sube esta carpeta al repositorio del frontend.
   > `.env` NO se sube (`.gitignore`). Las variables se configuran en Vercel.

2. En Vercel (proyecto existente o **Add New… → Project**):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   (`vercel.json` ya los fija; no hace falta cambiar nada.)

3. En **Settings → Environment Variables** añade:

   | Variable                        | Valor                                              |
   |---------------------------------|----------------------------------------------------|
   | `VITE_RECAPTCHA_SITE_KEY`       | Site key real de reCAPTCHA **v3**                  |
   | `VITE_API_URL`                  | URL del backend, p. ej. `https://tu-backend.vercel.app` |
   | `VITE_SITE_URL`                 | `https://www.nexusinnovacion.com`                  |
   | `VITE_GA4_ID`                   | `G-XXXXXXXXXX` (cuando exista)                     |
   | `VITE_META_PIXEL_ID`            | ID del píxel (cuando exista)                       |
   | `VITE_GTM_ID`                   | Opcional                                           |
   | `VITE_GOOGLE_SITE_VERIFICATION` | Código de Search Console (cuando exista)           |

   > Estas variables son **públicas** (llegan al navegador): es normal y seguro.

4. **Deploy** (o **Redeploy** si cambiaste variables: las `VITE_*` se
   «hornean» en el build).

## Comprobar después del despliegue

- `https://www.nexusinnovacion.com/sitemap.xml` → lista de páginas.
- `https://www.nexusinnovacion.com/robots.txt` → incluye la línea `Sitemap:`.
- `https://www.nexusinnovacion.com/pagina-que-no-existe` → página 404.
- Ver código fuente (Ctrl+U) de cualquier página → el texto aparece completo y
  el `<title>` es propio de esa página.

## Cómo encaja todo

```
Frontend (este repo)  ──POST /api/contact──►  Backend (FastAPI)  ──►  Google + correo
   Vite en Vercel        VITE_API_URL           en Vercel
```

En el **backend**, `ALLOWED_ORIGINS` debe incluir `https://www.nexusinnovacion.com`
y `https://nexusinnovacion.com` (sin barra final).
