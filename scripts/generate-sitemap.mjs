/**
 * Regenerate public/sitemap.xml from known routes (keep in sync with src/config/site.ts).
 * Usage: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const base = (process.env.PUBLIC_SITE_URL || 'https://solarhuntington.com').replace(/\/$/, '');

const serviceSlugs = [
  'residential-solar-installation',
  'commercial-solar',
  'battery-storage',
  'solar-repair-maintenance',
  'free-solar-quote',
];
const areaSlugs = [
  'huntington',
  'huntington-station',
  'greenlawn',
  'northport',
  'cold-spring-harbor',
  'centerport',
];

const topLevelPages = [
  '/',
  '/about/',
  '/financing/',
  '/case-studies/',
  '/insights/',
];

const insightSlugs = [
  'how-much-does-solar-cost-in-huntington-ny-2026',
  'solar-permits-town-of-huntington-2026-walkthrough',
];

const urls = [
  ...topLevelPages.map((p) => `${base}${p}`),
  ...serviceSlugs.map((s) => `${base}/services/${s}/`),
  ...areaSlugs.map((a) => `${base}/locations/${a}/`),
  ...insightSlugs.map((i) => `${base}/insights/${i}/`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')}
</urlset>
`;

const out = join(__dirname, '../dist/sitemap.xml');
writeFileSync(out, xml, 'utf8');
console.log('Wrote dist/sitemap.xml with', urls.length, 'URLs');
