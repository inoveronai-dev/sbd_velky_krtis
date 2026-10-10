# SBD Veľký Krtíš — homepage prototype

Modern redesign of the homepage for **Stavebné bytové družstvo Veľký Krtíš**, a Slovak residential building management cooperative.

This is a first-version marketing homepage. Navigation and document links point to the official site [sbdvk.sk](https://www.sbdvk.sk/) where replacement pages are not yet built.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Manrope (Latin + Latin Extended for Slovak diacritics)

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server on port 4321 |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

## Assets

Official logo and residential photography were sourced from the public sbdvk.sk media library and stored under `public/images/`. Replace these files in place when higher-resolution authentic photos are available.

## Notes

- Announcements on the homepage are a static, verified preview — not a live CMS feed.
- Žiadanka na opravu links to the downloadable Word form on the official site.
