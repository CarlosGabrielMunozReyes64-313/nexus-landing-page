import { Fragment, type ReactNode } from 'react';

// Convierte **negrita** en <strong>, sin usar HTML crudo.
function inline(text: string, keyBase: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={`${keyBase}-${i}`}>{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={`${keyBase}-${i}`}>{part}</Fragment>
    ),
  );
}

export type Heading = { id: string; text: string };

export function headingId(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Extrae los subtítulos (## ...) para un índice del artículo. */
export function extractHeadings(body = ''): Heading[] {
  return body
    .split('\n')
    .filter((l) => l.startsWith('## '))
    .map((l) => ({ text: l.slice(3).trim(), id: headingId(l.slice(3).trim()) }));
}

/**
 * Texto sencillo → elementos React.
 *  · Bloques separados por línea en blanco.
 *  · "## " subtítulo · "- " viñetas · "1. " lista numerada · **negrita**.
 */
export function renderRichText(body = ''): ReactNode[] {
  const blocks = body.replace(/\r\n/g, '\n').split(/\n{2,}/);
  const out: ReactNode[] = [];

  blocks.forEach((block, bi) => {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (!lines.length) return;

    // Un bloque puede empezar con subtítulo y seguir con texto.
    let i = 0;
    while (i < lines.length && lines[i].startsWith('## ')) {
      const text = lines[i].slice(3).trim();
      out.push(
        <h2 key={`h-${bi}-${i}`} id={headingId(text)}>
          {text}
        </h2>,
      );
      i++;
    }
    const rest = lines.slice(i);
    if (!rest.length) return;

    if (rest.every((l) => l.startsWith('- '))) {
      out.push(
        <ul key={`ul-${bi}`}>
          {rest.map((l, li) => (
            <li key={li}>{inline(l.slice(2), `ul-${bi}-${li}`)}</li>
          ))}
        </ul>,
      );
    } else if (rest.every((l) => /^\d+\.\s/.test(l))) {
      out.push(
        <ol key={`ol-${bi}`}>
          {rest.map((l, li) => (
            <li key={li}>{inline(l.replace(/^\d+\.\s/, ''), `ol-${bi}-${li}`)}</li>
          ))}
        </ol>,
      );
    } else {
      out.push(<p key={`p-${bi}`}>{inline(rest.join(' '), `p-${bi}`)}</p>);
    }
  });

  return out;
}
