import type { APIRoute } from 'astro';
import { services, areas } from '../config/site';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://www.solarhuntington.com').replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { loc: '/',             priority: '1.0', changefreq: 'weekly'  },
    { loc: '/about/',       priority: '0.7', changefreq: 'monthly' },
    { loc: '/incentives/',  priority: '0.8', changefreq: 'monthly' },
    { loc: '/financing/',   priority: '0.7', changefreq: 'monthly' },
    { loc: '/process/',     priority: '0.6', changefreq: 'monthly' },
    { loc: '/warranty/',    priority: '0.6', changefreq: 'monthly' },
    { loc: '/case-studies/', priority: '0.7', changefreq: 'monthly' },
    { loc: '/insights/',    priority: '0.7', changefreq: 'weekly'  },
  ];

  const servicePages = services.map(s => ({
    loc: `/services/${s.slug}/`, priority: '0.9', changefreq: 'monthly',
  }));

  const areaPages = areas.map(a => ({
    loc: `/locations/${a.slug}/`, priority: '0.9', changefreq: 'monthly',
  }));

  const all = [...staticPages, ...servicePages, ...areaPages];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...all.map(p =>
      `  <url>\n    <loc>${base}${p.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
    ),
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
