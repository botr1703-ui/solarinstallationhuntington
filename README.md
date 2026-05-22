# Forge lead-gen site template (Astro)

Static **service + location** marketing site with SEO meta, JSON-LD, mobile-first CSS, optional GA4, and a form endpoint for GoHighLevel (or any `POST` URL).

## Quick start

```bash
cd templates/leadgen-site
cp .env.example .env
# Edit .env — at minimum set PUBLIC_SITE_URL and brand fields
npm install
npm run dev
```

## Customize content

- **`src/config/site.ts`** — Service and area slugs (drives `/services/[slug]/` and `/locations/[slug]/`).
- **`scripts/generate-sitemap.mjs`** — Keep `serviceSlugs` / `areaSlugs` in sync with `site.ts` (postbuild writes `dist/sitemap.xml`).
- **`.env`** — Business name, phone, city/state, `PUBLIC_FORM_ACTION` (CRM form URL), `PUBLIC_GA4_MEASUREMENT_ID`.

## Build

```bash
npm run build
```

Output: **`dist/`** — deploy this folder (or let Cloudflare Pages run `npm run build` and publish `dist`).

## Cloudflare Pages

- **Root directory:** repository root of this template (the folder containing `package.json`).
- **Build command:** `npm run build`
- **Build output:** `dist`
- **Environment variables:** add all `PUBLIC_*` values from `.env` in the Cloudflare project settings.

See also [../../docs/deploy/cloudflare-pages-github.md](../../docs/deploy/cloudflare-pages-github.md).

## New repo from this template

1. Copy `templates/leadgen-site` to a new folder or use it as the only contents of a new Git repo.
2. `git init`, commit, push to GitHub.
3. Connect Cloudflare Pages to that repo and set build settings above.
4. Attach your domain and verify in Google Search Console.
