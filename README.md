# Iqbal Khan Passport Consultant

Multi-page site for passport, PAN card and driving licence assistance in Dewas,
built with Next.js (App Router), Motion/Framer Motion and Lucide icons.

## Where to edit things

| What | File |
| --- | --- |
| Phones, address, hours, geo, logo/photo paths, reviews, rating, years, social links | `src/lib/site.js` |
| Home page: service summaries, starting prices, timelines, steps, FAQs | `src/lib/content.js` |
| Service detail pages (`/passport-services-dewas/...`, `/pan-card-services-dewas/...`, `/driving-licence-services-dewas/...`) | `src/lib/pages.js` |
| Guide articles (`/guides/...`) | `src/lib/guides.js` |
| Hindi (Devanagari) pages (`/hi/...`) | `src/lib/content-hi.js` |
| Colours and styling | `src/app/globals.css` |
| Page titles, descriptions, structured data (JSON-LD), hreflang | `src/app/layout.js`, `src/lib/seo.js` |

Facts that are not yet confirmed are `null` in `site.js` and are simply not shown. Set
`experienceSince`, `clientsServed`, `googleRating`, `googleProfileUrl`, `reviews` or
`photos` once they can be backed up. Rating is shown on the page but deliberately kept
out of structured data, since Google penalises a business rating itself in its own markup.

### Self-hosted fonts

Plus Jakarta Sans and Noto Sans Devanagari are vendored as `.woff2` files under
`src/fonts/` and loaded with `next/font/local` in `src/app/layout.js`, so
`npm run build` never needs to reach `fonts.googleapis.com` / `fonts.gstatic.com`. If a
different weight, style or subset is needed, re-fetch the file from
`https://fonts.googleapis.com/css2?family=...` and update `src/fonts/` and the
`localFont()` call.

## Adding a new page

- **Service sub-page**: add an entry to the relevant array in `src/lib/pages.js` with a
  unique `path`; the `[slug]` route picks it up automatically via
  `generateStaticParams`.
- **Guide**: add an entry to `src/lib/guides.js`; same pattern.
- **Hindi page**: add to `HI_PAGES` in `src/lib/content-hi.js`, and if it mirrors an
  English page, add the pairing to `HI_TWINS` in `src/lib/seo.js` so hreflang links both
  ways.
- Remember to add the new path to `src/app/sitemap.js` if it isn't already covered by an
  existing loop over `pages.js` / `guides.js` / `content-hi.js`.

## Environment variables

- `NEXT_PUBLIC_SITE_URL`: the production domain, used to build canonical URLs, the
  sitemap, Open Graph/Twitter image URLs and JSON-LD. **Must be set once a custom domain
  is live** — otherwise every one of those falls back to the Vercel preview URL
  (`SITE.url` in `src/lib/site.js`).
- `NEXT_PUBLIC_GA_ID`: optional override for the Google Analytics 4 measurement ID.
  `SITE.gaId` in `src/lib/site.js` is the default; set this env var only if you need a
  different ID per environment (e.g. staging vs production). Events sent:
  `whatsapp_click`, `phone_click`, `directions_click`, `faq_expand`, `review_click`,
  `social_click` (no phone numbers or message text are sent).

## Commands

```bash
npm run dev     # local development
npm run build   # production build
npm run lint
```

## Deploy and rollback

Deploys from `main` on Vercel. To roll back, promote the previous deployment in the
Vercel dashboard.

## Search engine / analytics verification files

- `public/BingSiteAuth.xml` — Bing Webmaster Tools site verification.
- `verification.google` / `verification.other["msvalidate.01"]` in `src/app/layout.js`
  — Google Search Console and Bing meta-tag verification (backup method).
