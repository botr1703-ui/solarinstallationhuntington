/**
 * Regenerate public/sitemap.xml from known routes (keep in sync with src/config/site.ts).
 * Usage: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const base = (process.env.PUBLIC_SITE_URL || 'https://example.com').replace(/\/$/, '');

const serviceSlugs = ['junk-removal', 'furniture-removal'];
const areaSlugs = ['north-austin', 'south-austin'];

const urls = [
  `${base}/`,
  ...serviceSlugs.map((s) => `${base}/services/${s}/`),
  ...areaSlugs.map((a) => `${base}/locations/${a}/`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')}
</urlset>
`;

const out = join(__dirname, '../dist/sitemap.xml');
writeFileSync(out, xml, 'utf8');
console.log('Wrote dist/sitemap.xml with', urls.length, 'URLs');
