# Iqbal Khan Passport Consultant

Single-page site for passport, PAN card and driving licence assistance in Dewas, built with Next.js (App Router), Motion and Lucide icons.

## Where to edit things

| What | File |
| --- | --- |
| Phones, address, hours, geo, reviews, rating, years, photos | `src/lib/site.js` |
| Service lists, starting prices, timelines, steps, FAQs | `src/lib/content.js` |
| Colours and styling (SRS tokens) | `src/app/globals.css` |
| Page titles, descriptions, structured data | `src/app/layout.js`, `src/lib/seo.js` |

Facts that are not yet confirmed are `null` in `site.js` and are simply not shown. Set `experienceSince`, `clientsServed`, `googleRating`, `googleProfileUrl`, `reviews` or `photos` once they can be backed up. Rating and hours also flow into the structured data.

## Environment variables

- `NEXT_PUBLIC_SITE_URL`: production domain, used for canonical URLs, sitemap and Open Graph. Defaults to the Vercel URL.
- `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID. Nothing is loaded when it is unset. Events sent: `whatsapp_click`, `phone_click`, `directions_click`, `faq_expand` (no phone numbers or message text).

## Commands

```bash
npm run dev     # local development
npm run build   # production build
npm run lint
```

## Deploy and rollback

Deploys from `main` on Vercel. To roll back, promote the previous deployment in the Vercel dashboard.
