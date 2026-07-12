# Desplegar el FRONTEND (React + Vite) en Vercel

Este proyecto ya incluye `vercel.json` con el *fallback* de SPA para que las
rutas de React Router (`/contacto`, `/alianzas`, …) funcionen al recargar.

## Pasos

1. Sube esta carpeta a un repositorio de GitHub (uno solo para el frontend).
   > `.env` NO se sube (`.gitignore`). Las variables se configuran en Vercel.

2. En https://vercel.com → **Add New… → Project** → importa el repo.

3. Vercel detecta **Vite** automáticamente:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   (No hace falta cambiar nada.)

4. En **Settings → Environment Variables** añade:

   | Variable                   | Valor                                              |
   |----------------------------|----------------------------------------------------|
   | `VITE_RECAPTCHA_SITE_KEY`  | *(tu **Site key** real de reCAPTCHA v2)*           |
   | `VITE_API_URL`             | `https://tu-backend.vercel.app`                    |

   > Estas variables son **públicas** (llegan al navegador): es normal y seguro.
   > La clave SECRETA vive solo en el backend.

5. **Deploy**. Tu sitio quedará en `https://tu-frontend.vercel.app`.

## Muy importante para que el captcha funcione online

- La **Site key de prueba** solo funciona en `localhost`. En producción usa una
  **clave real** (créala en https://www.google.com/recaptcha/admin, tipo
  reCAPTCHA v2 “No soy un robot”) y añade `tu-frontend.vercel.app` a sus dominios.
- En el **backend** pon la **Secret key** correspondiente y añade la URL de este
  frontend a `ALLOWED_ORIGINS` (si no, el navegador bloqueará las peticiones por CORS).

## Cómo encaja todo

```
Frontend (este repo)  ──POST /api/contact──►  Backend (FastAPI)  ──►  Google + correo
   Vite en Vercel        VITE_API_URL           en Vercel
```

Tras cambiar cualquier variable de entorno en Vercel, haz **Redeploy** para que
tome efecto (las `VITE_*` se “hornean” en el build).
