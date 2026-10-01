// =====================================================
//  Prerenderizado · se ejecuta al final de `npm run build`
//
//  1. Toma dist/index.html (build del navegador) como plantilla.
//  2. Por cada ruta pública genera dist/<ruta>/index.html con el contenido
//     ya escrito y su propio <head> (título, descripción, canonical,
//     Open Graph y datos estructurados).
//  3. Genera dist/404.html, dist/sitemap.xml y dist/robots.txt.
//
//  Así Google, ChatGPT, Gemini y las vistas previas de WhatsApp/LinkedIn
//  leen todo el contenido sin ejecutar JavaScript.
// =====================================================
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { loadEnv } from 'vite'

const root = process.cwd()
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

// Variables de entorno (.env locales y las del hosting, p. ej. Vercel).
const env = { ...loadEnv('production', root, 'VITE_'), ...process.env }
const buildDate = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10)

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--seo:start-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html no tiene los marcadores esperados (<!--seo:start--> y <div id="root">).')
}

const entry = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
const { render, getSeo, headHtml, PRERENDER_ROUTES, sitemapEntries, SITE } = await import(entry)

const verification = (env.VITE_GOOGLE_SITE_VERIFICATION || '').trim()
const extraHead = verification
  ? `\n    <meta name="google-site-verification" content="${verification.replace(/"/g, '')}">`
  : ''

async function writePage(route, file) {
  const appHtml = await render(route)
  const seo = getSeo(route)
  const html = template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headHtml(seo) + extraHead)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  const out = path.join(dist, file)
  await fs.mkdir(path.dirname(out), { recursive: true })
  await fs.writeFile(out, html)
  return { route, file, title: seo.title, bytes: html.length }
}

const results = []
for (const route of PRERENDER_ROUTES) {
  const file = route === '/' ? 'index.html' : `${route.replace(/^\//, '')}/index.html`
  results.push(await writePage(route, file))
}
// Página 404 (el hosting la sirve con estado 404 para rutas inexistentes).
results.push(await writePage('/404-pagina-no-encontrada', '404.html'))

// sitemap.xml
const urls = sitemapEntries(buildDate)
  .map(
    (e) =>
      `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority.toFixed(1)}</priority>\n  </url>`,
  )
  .join('\n')
await fs.writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

// robots.txt
await fs.writeFile(
  path.join(dist, 'robots.txt'),
  [
    '# NEXUS · nexusinnovacion.com',
    '# Todo el sitio es público. Se permiten los rastreadores de buscadores y de IA',
    '# (Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, Google-Extended,',
    '# PerplexityBot, ClaudeBot…) para que NEXUS aparezca en sus respuestas.',
    'User-agent: *',
    'Allow: /',
    'Disallow: /proyecto-demo/dashboard',
    '',
    `Sitemap: ${SITE.url}/sitemap.xml`,
    '',
  ].join('\n'),
)

await fs.rm(ssrDir, { recursive: true, force: true })

console.log(`\n✓ Prerenderizadas ${results.length} páginas:`)
for (const r of results) console.log(`  ${r.route.padEnd(58)} → ${r.file}`)
console.log(`✓ sitemap.xml (${urls.split('<url>').length - 1} URLs) y robots.txt para ${SITE.url}`)
