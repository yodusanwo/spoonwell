# Spoonwell Living — site

Next.js (App Router) + TypeScript + Tailwind CSS. The main marketing experience is a **single long-form landing** on `/` with in-page anchors (`#our-story`, `#the-farm`, `#care-services`, `#gallery`, `#waitlist`, `#contact`).

Forms use a [Server Action](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) (`lib/actions/waitlist.ts`) — no API routes.

## Design reference

- **Landing wireframe v2 (PNG):** [`public/design-reference/wireframe-v2.png`](public/design-reference/wireframe-v2.png)
- **Legacy HTML wireframe:** [`design/spoonwell_wireframe_v1.html`](design/spoonwell_wireframe_v1.html)

## Routes

| Path | Purpose |
|------|---------|
| `/` | Full landing (all sections above) |
| `/our-story`, `/the-home`, … | Stub pages (optional); primary nav uses `/#…` anchors |

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Waitlist / interest form

`submitInterestForm` in `lib/actions/waitlist.ts` validates email and redirects to `/?waitlist=thanks#waitlist` or `invalid`. Extend the `TODO` to persist submissions.

## Build

```bash
npm run build
npm start
```
