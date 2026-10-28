# Afnan Kazi portfolio

A personal portfolio built around the original Kage Three.js temple. The Next.js homepage lazy-loads a full-height document host; its contents scroll natively without a visible scrollbar.

## Development

- `npm run dev`: development server.
- `npm run build`: production build and TypeScript validation.
- `npm run lint`: application linting.

## Search and sharing

The production URL defaults to `https://afnankazi.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` to an absolute HTTPS origin before building if the domain changes. The canonical URL, Open Graph metadata, structured data, `/robots.txt`, and `/sitemap.xml` share the configuration in `app/site.ts`.

The sitemap lists the homepage because the portfolio sections are anchors on one page. The embedded portfolio document sends an HTTP canonical link to the homepage; the original Kage reference sends `X-Robots-Tag: noindex, follow`. Crawlers can still fetch scripts, styles, and images. Open Graph and Twitter cards use the existing local temple preview image.

The homepage currently hosts the visual portfolio in an iframe. Metadata and structured data are server-rendered, but moving the portfolio's semantic content into the main document would improve direct content discovery further.

## Editing content

- `public/landing-pages/afnan.html`: portfolio copy, four projects, experience, achievements, scene renderer, navigation, and section structure.
- `public/landing-pages/portfolio.css`: portfolio layout, responsive rules, palette, and focus states.
- `public/landing-pages/portfolio.js`: project-detail dialogs, email copy action, mobile menu keyboard support, and context-loss fallback.
- `public/portfolio/`: supplied project screenshots and technology icons, copied from `app/assets`.
- `public/portfolio/tech/*.svg`: local Devicon logos for the twelve-tool showcase, including Python, PostgreSQL, MongoDB, and n8n; its license is included alongside the assets.
- `app/layout.tsx`: title, description, and social metadata.

Project descriptions, repository URLs, name, and contact email were drawn from the user's earlier local portfolio in the neighbouring `Afnan` project. The experience timeline uses the three roles, dates, responsibilities, and performance figures from that project's `src/components/Experience.jsx`. Its VESITRail illustration comes from `public/vesit/image.png`. No employment details or metrics have been invented. Project buttons show native dialogs; external repository links open in a new tab. Contact opens the user's email client, and a separate action copies the email address.

## Scene

`public/landing-pages/kage.html` remains the original reference document with the requested hidden scrollbar. `afnan.html` adapts its scene to the portfolio, including an AFNAN wordmark and less grain. Scene materials and camera construction remain from the supplied source. The adapted portfolio uses local fonts, images, and Three.js r146. Onest Semibold supplies the wordmark because the original font bundle was unavailable.

The scene pauses ambient time progression for reduced-motion preferences, uses the original adaptive resolution governor, and shows readable static content if WebGL is unavailable or its context is lost. Native dialogs trap focus, close with Escape, and return focus to their opening button.

The original Kage document retains its hosted image URLs. Those fourteen images are also stored in `secret-pathways-assets/`. The portfolio's visible project images use local URLs.

See `DESIGN.md` for the approved visual direction and content provenance.

The former Practice overview is now an Achievements gallery featuring the user's ISTE VESIT leadership, hackathon results, mentoring, and speaking records. The original scenic temple assets illustrate the section; the twelve-tool grid remains below it. Genesis is shown as 2nd Runner-up, omitting the contradictory first-place wording in the supplied list.

## Soundtrack

The local track at `public/sound/lokenwarrior-whispers-in-the-rain-431021.mp3` loops at 18% volume after the first click, touch, or keyboard interaction. A fixed Sound on/off control is available throughout the page. Its preference is saved locally when storage is available; disabling sound prevents automatic playback on later visits. Music pauses in background tabs and resumes when returning only if enabled.
