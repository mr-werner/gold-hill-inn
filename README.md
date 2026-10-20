# Gold Hill Inn — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://goldhillinn.com/ (Gold Hill, CO, ten miles above Boulder).
Preview: https://ghi.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `gold-hill-inn` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `ghi.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, 2026-11-24). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Their own logo: the gold woodtype "GOLD HILL INN" wordmark and the lantern roundel, hotlinked from goldhillinn.com.
- Colors from the original site and logo: bark brown #38220f, timber #634832, cream #ece0d1 and logo gold #d6b481, with a lantern-ember orange and a pine green added for contrast.
- Rye (woodtype display, echoing the wordmark) with Alegreya and Alegreya Sans.
- Motifs: stacked log-and-chinking bands like the 1924 dining hall walls, a lantern glow behind the hero, the six-course table d'hôte as a menu card, upcoming shows as ticket stubs, and a hand-drawn route map of the drive up (Mapleton Ave., then four miles of dirt road).
- Hours, season and the reservations phone number sit in the top bar, the hero and the contact card, so they are never more than a scroll away.
- All four press quotes from the original (Gourmet x2, Fortune, The Know/Denver Post), verbatim.

## What changed from the current site

- One page instead of ten: dining, music, beer garden, lodge, murder mystery, weddings, history and directions, each cut down to the essentials.
- Restaurant hours and season moved from the footer to the top of the page.
- The music calendar is shown as a short "on the bill" list with cover charges, instead of a long page of band bios.
- Wedding and lodge pricing summarized as facts instead of paragraphs; a direct email link to Brian Finn for weddings.

## Owner should confirm

- Show list is copied from goldhillinn.com/music on 2026-10-20 and will go stale; it should be fed from their calendar before launch.
- Sample menu and prices ($51 six courses / $44 three courses), wedding pricing ($79 pp, $4,970 minimum) and lodge rate ($875/night, 2-night minimum) are from the current site; confirm they are current for 2027.
- Murder mystery dates (Oct 10 and Oct 24) and the Humanitix link are this season's; confirm the next season.
- The Bluebird Lodge reopening (currently "closed for the season, will reopen in the spring").
- Whether to mention the National Register of Historic Places plaque visible in the door photo (not stated anywhere as text, so it is not on the page).
- Caption of the July 4th photo (the site's caption says 1876; the file name says 1886).
- The route map is illustrative, not to scale.
- No Google rating is shown (not confirmed). Add a Google rating badge only after checking the Business Profile.
- Photos and logo are hotlinked from goldhillinn.com and must be replaced with licensed originals before launch.
