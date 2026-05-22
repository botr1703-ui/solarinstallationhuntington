import { defineConfig } from 'astro/config';

const site =
  process.env.PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
});
