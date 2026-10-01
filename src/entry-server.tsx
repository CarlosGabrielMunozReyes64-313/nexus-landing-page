import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { preloadAll } from './routes'

// Punto de entrada del prerenderizado (se ejecuta en Node durante el build).
export async function render(url: string): Promise<string> {
  await preloadAll()
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  )
}

export { getSeo, headHtml, PRERENDER_ROUTES, sitemapEntries, SITE } from './seo/seo'
