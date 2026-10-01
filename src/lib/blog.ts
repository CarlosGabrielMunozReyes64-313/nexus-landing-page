import { BLOG_POSTS } from '../data/siteData';

export type BlogPost = {
  slug: string;
  title: string;
  preview: string;
  topic: string;
  date: string;
  isoDate: string;
  author: string;
  readTime: string;
  image?: string;
  emoji?: string;
  bg?: string;
  body?: string;
  related?: string;
};

const MONTHS: Record<string, string> = {
  ene: '01', feb: '02', mar: '03', abr: '04', may: '05', jun: '06',
  jul: '07', ago: '08', sep: '09', oct: '10', nov: '11', dic: '12',
};

/** "04 jun 2026" → "2026-06-04". Devuelve '' si no se puede interpretar. */
export function parseSpanishDate(text = ''): string {
  const m = text.trim().toLowerCase().match(/^(\d{1,2})\s+([a-zá]{3})[a-zá]*\.?\s+(\d{4})$/);
  if (!m) return '';
  const month = MONTHS[m[2]];
  return month ? `${m[3]}-${month}-${m[1].padStart(2, '0')}` : '';
}

export function slugify(text = ''): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');
}

function readingTime(body = ''): string {
  const words = body.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min`;
}

export const POSTS: BlogPost[] = (BLOG_POSTS as any[]).map((p) => ({
  ...p,
  slug: p.slug || slugify(p.title),
  isoDate: p.isoDate || parseSpanishDate(p.date),
  readTime: p.readTime || readingTime(p.body),
}));

/** Solo los artículos con texto completo tienen página propia. */
export const ARTICLES: BlogPost[] = POSTS.filter((p) => Boolean(p.body));

export function getArticle(slug?: string): BlogPost | undefined {
  return ARTICLES.find((p) => p.slug === slug);
}

export function articlePath(post: BlogPost): string {
  return `/blog/${post.slug}`;
}
