# Prime Citations (Primecitationsseo) — Website

A fast, static, single-page website built with plain HTML5, CSS3 and vanilla
JavaScript. No build step, no framework, no backend — deploys directly to
GitHub Pages.

## File structure

```
/
├── index.html          All page content and structure
├── style.css           All styling (design tokens at the top)
├── script.js           SITE_CONFIG + all dynamic rendering (services,
│                        portfolio, testimonials, FAQ, social links, etc.)
├── robots.txt
├── sitemap.xml
├── favicon.svg
└── assets/
    ├── images/          (empty — add optimized WebP/AVIF images here if needed)
    └── icons/            (empty — all icons currently ship as inline SVG)
```

The site is a single HTML page (`index.html`) with anchor-based navigation
(`#about`, `#services`, etc.). This was chosen over a multi-page structure
because a single well-structured page loads faster (one request for markup,
no repeated header/footer downloads), is simpler to maintain, and still
supports clean SEO with descriptive section headings and anchors.

---

## A. Contact info (phone, email, address, hours)

Open **`script.js`** and edit the `SITE_CONFIG` object near the top of the
file:

```js
const SITE_CONFIG = {
  email: "primecitationsseo@gmail.com",
  phone: "+92 318 9566368",
  website: "YOUR_WEBSITE_URL_HERE",
  address: "YOUR_ADDRESS_HERE",
  city: "YOUR_CITY_HERE",
  state: "YOUR_STATE_HERE",
  country: "YOUR_COUNTRY_HERE",
  businessHours: "YOUR_BUSINESS_HOURS_HERE",
  ...
};
```

Real email and phone are already filled in and render as clickable
`mailto:` / `tel:` links on the Contact section and in the footer. `website`,
`address`, `city`, `state`, `country` and `businessHours` are intentionally
left as placeholders (no address or hours have been provided yet) — any
value left as `..._HERE` is automatically detected and hidden from visitors,
so the site never shows raw placeholder text or invented details.

Once you have a live GitHub Pages URL, replace `YOUR_WEBSITE_URL_HERE` in:
`SITE_CONFIG.website`, the `<head>` of **`index.html`** (canonical URL, Open
Graph/Twitter tags, and the JSON-LD `url` field), and inside
**`robots.txt`** / **`sitemap.xml`**.

Once you have a verified street address, add it back into the JSON-LD
schema block in `index.html` (an `address` object was intentionally left
out for now, since publishing a placeholder address in structured data can
mislead search engines).

## B. WhatsApp floating button

In `script.js`, edit:

```js
whatsapp: {
  number: "923189566368", // digits only, no + or spaces
  message: "Hi Prime Citations, I'd like to ask about your SEO services."
}
```

- `number` must contain **only digits**, including the country code, no `+`,
  spaces or dashes.
- The button already builds `https://wa.me/923189566368?text=...` and works
  on both desktop and mobile.
- If `number` is ever cleared back to a placeholder, the button stays
  visible but is dimmed and links to the Contact section instead, so it's
  never a dead link.
- The button is `position: fixed`, so it stays visible while scrolling on
  both desktop and mobile, and is positioned to avoid overlapping the footer
  or other controls.

## C. Social / profile links

In `script.js`, edit the `social` array:

```js
social: [
  { key: "fiverr", label: "Fiverr", sub: "Hire on Fiverr", url: "https://www.fiverr.com/prime_citations?public_mode=true" },
  { key: "linkedin", label: "LinkedIn", sub: "Professional profile", url: "https://www.linkedin.com/in/khalil-ahmad-primecitationsseo" },
  { key: "facebook", label: "Facebook", sub: "Business page", url: "https://www.facebook.com/primecitationsseo/" },
  { key: "instagram", label: "Instagram", sub: "Updates & visuals", url: "https://www.instagram.com/khalilahmadk88/" },
  { key: "twitter", label: "X / Twitter", sub: "Follow for updates", url: "https://x.com/khalilahmad888" },
  { key: "threads", label: "Threads", sub: "Follow for updates", url: "https://www.threads.com/@khalilahmadk88" },
  { key: "whatsapp", label: "WhatsApp", sub: "Message directly", url: "https://wa.me/923189566368" },
  { key: "mastodon", label: "Mastodon", sub: "Follow for updates", url: "https://mastodon.social/@primecitationsseo" },
  { key: "other", label: "Other Profile", sub: "Additional platform", url: "" }
]
```

All eight real profile links are already in place and render as working,
accessible cards (each opens in a new tab with `rel="noopener noreferrer"`
and its own `aria-label`).

The **Other Profile** entry has no URL yet, so it renders as a subtle,
non-clickable "Add profile later" card instead of a broken or fake link. The
moment you set a real `url` (and, if you like, rename the `label`), it
automatically becomes a live, clickable card — no other code changes needed.

To add any future profile, just add another object with the same shape
(`key`, `label`, `sub`, `url`) anywhere in the array — the Connect section
renders directly from it, so the HTML never needs to change. `key` should
match one of the icons in the `ICONS` object further down in `script.js`
(falls back to a generic icon automatically if it doesn't match).

## D. Portfolio, testimonials, and trust points

- **Portfolio:** the site now shows five real, documented projects
  (QuickestBuyer, Texas LED Neon Signs, Aghmat Cars Marrakech, Liberty
  Health Services, Michael Strickland Productions) rendered from the
  `PORTFOLIO_PROJECTS` array in `script.js`. Each entry is
  `{ name, country, location, service, description, deliverables[],
  sources[] }` — `location` can be left as `""` to omit it from a card
  (used for Liberty Health Services, since no city was documented). To add
  another project, add another object with the same shape; the card grid
  and the "View Details" modal both render from this array automatically —
  no HTML duplication needed. Keep entries factual: work completed,
  service, market and documented source/directory names only — no
  usernames, passwords, client emails, or invented rankings/traffic/
  revenue figures.
- **Portfolio details modal:** clicking "View Details" on a card opens a
  lightweight vanilla-JS modal (`#portfolio-modal-overlay` in `index.html`,
  `setupPortfolioModal()` in `script.js`) showing the project, market,
  location, service, overview, work completed, documented sources and
  deliverables. Closes via the × button, clicking outside the panel, or
  Escape. No library — pure DOM + CSS.
- **Testimonials:** four real, verified Fiverr reviews are live
  (`TESTIMONIALS` array in `script.js`) — do not edit their wording,
  ratings or usernames. To add a new verified review later, add another
  `{ quote, name, role, rating }` object to that same array.
- **Trust points:** the strip below the hero shows non-numerical trust
  points ("Manual Research", "Accurate Business Data", "International
  Support", "Clear Reporting") rather than invented statistics. If you
  later have real, verifiable numbers (years in business, projects
  completed, etc.), you can replace this section in `index.html`
  (`<section class="trust-strip">`) — but only with figures you can stand
  behind.

## E. Local Citation Services by Country

The "Countries" section (`id="countries"` in `index.html`) renders entirely
from `SITE_CONFIG.countries` in `script.js` — the HTML never needs manual
editing to add, remove or reorder a country.

```js
countries: [
  { name: "United States", region: "North America", gigUrl: "FIVERR_USA_GIG_URL" },
  { name: "Germany", region: "Europe", gigUrl: "FIVERR_EUROPE_GIG_URL" },
  ...
]
```

**To add a new country:** add another object with the same shape anywhere
in the array. `region` must be one of: `North America`, `Europe`,
`Oceania`, `Middle East`, `Asia`, `Africa`, `Latin America` — cards are
automatically grouped and sub-headed by region, in that order. If you add a
country whose name isn't already in the `COUNTRY_FLAGS` lookup just above
`renderCountries()`, add its flag emoji there too (falls back to a generic
🌍 icon if you skip this).

**To replace a Fiverr placeholder with a real gig URL:** find the country's
entry and replace its `gigUrl` value with the real Fiverr link, e.g.:

```js
{ name: "United States", region: "North America", gigUrl: "https://www.fiverr.com/your-real-usa-gig" }
```

The card updates automatically — a real URL (anything not ending in
`_GIG_URL`) becomes a live "View Service →" button that opens in a new tab
with `rel="noopener noreferrer"`; a placeholder value shows "Service Coming
Soon" and links to the Contact section instead, so nothing is ever a
broken or fake link.

Several countries intentionally share one placeholder token (e.g. every
other European country uses `FIVERR_EUROPE_GIG_URL`) so that replacing one
shared Fiverr gig link updates every country using that token at once. Six
countries have their own dedicated token instead of a shared regional one
— United States, Canada, United Kingdom, Australia, New Zealand and South
Africa — matching the individual placeholders requested for those markets.

The search box above the grid and the region groupings are both pure
vanilla JavaScript (`setupCountrySearch()` in `script.js`) — no library.
Selecting a country's button also updates the small summary panel above the
grid with a short, factual, country-specific message (no invented stats,
rankings or results).

## F. About section

The About section text in `index.html` (`id="about"`) intentionally avoids
naming specific years of experience, project counts, certifications or
awards. Edit the copy directly in `index.html` once you have real details to
add — do not add unverified claims.

---

## G. Deploying to GitHub Pages

1. Create a new GitHub repository. If your GitHub username is
   `Primecitationsseo`, name the repository
   `Primecitationsseo.github.io` so it publishes at the root domain
   `https://primecitationsseo.github.io/`. (Any other repo name works too —
   it will publish at `https://<username>.github.io/<repo-name>/`.)
2. Push all files in this project (keeping the folder structure) to the
   repository's default branch (usually `main`).
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Choose the `main` branch and the `/ (root)` folder, then **Save**.
6. Wait 1–2 minutes, then visit the URL GitHub shows on that page.
7. Update `YOUR_WEBSITE_URL_HERE` throughout the project (see section A) to
   match your real published URL, then commit and push again.

No build step, server, database or paid hosting is required.

## H. Connecting a custom domain later (optional)

1. Buy a domain from any registrar.
2. In the repository, go to **Settings → Pages → Custom domain** and enter
   your domain (e.g. `primecitationsseo.com`).
3. At your domain registrar, add:
   - A `CNAME` record pointing `www` to `<username>.github.io`, **or**
   - `A` records for the apex domain pointing to GitHub's Pages IP
     addresses (GitHub's Pages docs list the current addresses — search
     "GitHub Pages custom domain A records" for the current list).
4. Wait for DNS to propagate (can take a few minutes to a few hours).
5. Back in **Settings → Pages**, enable **Enforce HTTPS** once it becomes
   available for your domain.
6. Update `YOUR_WEBSITE_URL_HERE` everywhere in the project to the new
   custom domain.

## I. Contact form (Formspree)

The contact form is already connected to Formspree:

```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/xyezjgvn" method="POST">
```

Submissions from the Name, Email, Business/Company, Website, Service Needed
and Message fields are POSTed straight to Formspree — no backend, build
step or JavaScript fetch call involved, so it works as-is on GitHub Pages.

The first submission on a fresh Formspree form usually triggers a one-time
confirmation step (Formspree emails you a link to confirm the form before it
starts forwarding submissions) — this is normal and only happens once.

If you ever need to point the form at a different Formspree form (or
another static-form provider), just change the `action` URL above; every
input already has the `name` attribute Formspree needs to receive it.

Until the form is submitted successfully, visitors can still reach you
directly through the `mailto:` link and the WhatsApp button.

---

## J. SEO checklist

- [ ] Replace `YOUR_WEBSITE_URL_HERE` in all meta tags, canonical link,
      Open Graph tags, JSON-LD schema, `robots.txt` and `sitemap.xml`
- [ ] Replace `YOUR_EMAIL_HERE`, `YOUR_PHONE_HERE`, and address fields in
      the JSON-LD schema block in `index.html`
- [ ] Add a real `assets/images/og-cover.webp` social-share image (or
      remove the `og:image`/`twitter:image` tags if you don't have one yet)
- [ ] Confirm the page has exactly one `<h1>` (it does, in the hero)
- [ ] Confirm heading hierarchy is logical (H2 per section, H3 for cards)
- [ ] Submit `sitemap.xml` in Google Search Console once the site is live

## K. Performance checklist

- [ ] No external font requests (system font stack is used by design)
- [ ] No JavaScript frameworks or icon libraries — all icons are inline SVG
- [ ] Images (if you add any) should be WebP/AVIF, sized appropriately, and
      use `loading="lazy"` for anything below the fold
- [ ] Run the live site through Lighthouse / PageSpeed Insights once
      deployed and address any flagged issues specific to your hosting

## L. Final testing checklist

- [ ] All navigation links scroll to the correct section (verified — no
      broken anchors)
- [ ] Mobile menu opens/closes and closes after selecting a link
- [ ] FAQ accordion expands/collapses correctly
- [ ] WhatsApp button is visible while scrolling on both desktop and mobile
- [ ] Social cards show "Link coming soon" until you add real URLs (no dead
      links)
- [ ] Contact form fields are all present and labeled
- [ ] Test on a small mobile viewport (360–390px wide) for overlap or
      horizontal scrolling
- [ ] Re-test after replacing every placeholder value
- [ ] Countries section: search box filters cards correctly, region groups
      hide when empty, and selecting a country updates the summary message

---

## Design notes

- Colors, spacing and radius are all controlled by CSS variables at the top
  of `style.css` (`:root { ... }`) — change them there rather than hunting
  through individual rules.
- Typography uses a system serif for headings (`ui-serif`) paired with a
  system sans-serif for body text (`ui-sans-serif`) — no external font
  files are downloaded, which keeps the site fast.
- Motion is intentionally minimal: hover/focus transitions and the FAQ
  accordion only. `prefers-reduced-motion` is respected globally.
