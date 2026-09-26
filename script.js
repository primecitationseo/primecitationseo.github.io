/* =========================================================
   PRIME CITATIONS — SITE CONFIGURATION
   ---------------------------------------------------------
   This is the ONLY place you need to edit to update contact
   details, social links and the WhatsApp button.
   A value left as "..._HERE" or blank is automatically treated
   as unfilled and the matching link/row is hidden or disabled
   so nothing ever looks broken to visitors.

   To add a future social profile, just add another object to
   the `social` array below — no HTML changes needed. `icon`
   should match a key in the ICONS object further down (falls
   back to a generic icon automatically if omitted/unmatched).
   ========================================================= */
const SITE_CONFIG = {
  brandName: "Prime Citations",
  username: "Primecitationsseo",
  tagline: "Local SEO • Citations • Link Building • Off-Page SEO",

  // Contact
  email: "primecitationsseo@gmail.com",
  phone: "+92 318 9566368",
  website: "YOUR_WEBSITE_URL_HERE",

  // Local SEO / address info — leave as-is until verified details are available
  address: "YOUR_ADDRESS_HERE",
  city: "YOUR_CITY_HERE",
  state: "YOUR_STATE_HERE",
  country: "YOUR_COUNTRY_HERE",
  businessHours: "YOUR_BUSINESS_HOURS_HERE",

  // WhatsApp floating button
  // number: digits only, with country code, no spaces/plus sign
  whatsapp: {
    number: "923189566368",
    message: "Hi Prime Citations, I'd like to ask about your SEO services."
  },

  // Social / profile links. Add, remove or reorder entries freely —
  // the "Connect With Me" section renders directly from this array.
  // To add a brand-new future profile, just add another object with
  // the same shape (key/label/sub/url) — no HTML changes needed.
  social: [
    { key: "fiverr", label: "Fiverr", sub: "Hire on Fiverr", url: "https://www.fiverr.com/prime_citations?public_mode=true" },
    { key: "linkedin", label: "LinkedIn", sub: "Professional profile", url: "https://www.linkedin.com/in/khalil-ahmad-primecitationsseo" },
    { key: "facebook", label: "Facebook", sub: "Business page", url: "https://www.facebook.com/primecitationsseo/" },
    { key: "instagram", label: "Instagram", sub: "Updates & visuals", url: "https://www.instagram.com/khalilahmadk88/" },
    { key: "twitter", label: "X / Twitter", sub: "Follow for updates", url: "https://x.com/khalilahmad888" },
    { key: "threads", label: "Threads", sub: "Follow for updates", url: "https://www.threads.com/@khalilahmadk88" },
    { key: "whatsapp", label: "WhatsApp", sub: "Message directly", url: "https://wa.me/923189566368" },
    { key: "mastodon", label: "Mastodon", sub: "Follow for updates", url: "https://mastodon.social/@primecitationsseo" },
    // Leave url empty to keep this card visible but inactive ("Add profile
    // later"). Set a real url (and rename the label if you like) and it
    // automatically becomes a live, clickable card — no other changes needed.
    { key: "other", label: "Other Profile", sub: "Additional platform", url: "" }
  ],

  // Local Citation Services by Country. Renders the "Countries" section
  // automatically — add, remove or reorder entries freely, no HTML changes
  // needed. `region` groups the card under a regional heading (one of:
  // "North America", "Europe", "Oceania", "Middle East", "Asia", "Africa",
  // "Latin America"). `gigUrl` is either a real Fiverr gig link or a
  // placeholder token ending in "_GIG_URL" — a placeholder shows as
  // "Service Coming Soon" and links to Contact instead of a broken/fake
  // Fiverr URL; a real URL becomes a live, working Fiverr button.
  //
  // All 40 countries below currently point to one of three real, live gigs:
  //   Europe & UK/Ireland  -> https://www.fiverr.com/s/kXLWE1W
  //   Australia/New Zealand -> https://www.fiverr.com/s/qbDvXpX
  //   Everywhere else (global business listings gig) -> https://www.fiverr.com/s/DmB6AZP
  // To point a country at a different gig later, just change its `gigUrl`.
  countries: [
    { name: "United States", region: "North America", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "Canada", region: "North America", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },

    { name: "United Kingdom", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Ireland", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Germany", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "France", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Spain", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Italy", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Netherlands", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Belgium", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Austria", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Switzerland", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Sweden", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Norway", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Denmark", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Finland", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Portugal", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Poland", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Czech Republic", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Romania", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Hungary", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },
    { name: "Greece", region: "Europe", gigUrl: "https://www.fiverr.com/s/kXLWE1W" },

    { name: "Australia", region: "Oceania", gigUrl: "https://www.fiverr.com/s/qbDvXpX" },
    { name: "New Zealand", region: "Oceania", gigUrl: "https://www.fiverr.com/s/qbDvXpX" },

    { name: "United Arab Emirates", region: "Middle East", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "Saudi Arabia", region: "Middle East", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "Qatar", region: "Middle East", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "Israel", region: "Middle East", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },

    { name: "Singapore", region: "Asia", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "Malaysia", region: "Asia", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "India", region: "Asia", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "Japan", region: "Asia", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "South Korea", region: "Asia", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "Philippines", region: "Asia", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "Indonesia", region: "Asia", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "Thailand", region: "Asia", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },

    { name: "South Africa", region: "Africa", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },

    { name: "Brazil", region: "Latin America", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "Mexico", region: "Latin America", gigUrl: "https://www.fiverr.com/s/DmB6AZP" },
    { name: "Argentina", region: "Latin America", gigUrl: "https://www.fiverr.com/s/DmB6AZP" }
  ]
};

/* Helper: treat any value ending in "_HERE" (or empty) as an unfilled placeholder */
function isPlaceholder(value) {
  return !value || /_HERE$/.test(value.trim());
}

/* Helper: treat any value ending in "_GIG_URL" (or empty) as an unfilled Fiverr gig placeholder */
function isGigPlaceholder(value) {
  return !value || /_GIG_URL$/.test(value.trim());
}

/* =========================================================
   ICONS (inline SVG, no external icon library)
   ========================================================= */
const ICONS = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.2"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M9.5 14.5l5-5"/><path d="M12 6.5l1-1a4 4 0 0 1 5.5 5.5l-1 1"/><path d="M12 17.5l-1 1a4 4 0 0 1-5.5-5.5l1-1"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M7 18a4 4 0 1 1 .7-7.94A5.5 5.5 0 0 1 18 12.5 3.5 3.5 0 0 1 17.5 18H7z"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="6" y="4" width="12" height="17" rx="1.5"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 11h6M9 15h6"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M4 10a8 8 0 0 1 14-4.9M20 14a8 8 0 0 1-14 4.9"/><path d="M18 3v4h-4M6 21v-4h4"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.3l2.3 2.3 4.7-5"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><circle cx="9" cy="9" r="3"/><path d="M3.5 19a6 6 0 0 1 11 0"/><circle cx="17" cy="9.5" r="2.3"/><path d="M15.5 19a5 5 0 0 1 5.5-3.4"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.4 3.8 8.5s-1.3 6.1-3.8 8.5c-2.5-2.4-3.8-5.4-3.8-8.5S9.5 5.9 12 3.5z"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M6 21V4"/><path d="M6 4h11l-2.5 3.5L17 11H6"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><rect x="13.5" y="13.5" width="7" height="7" rx="1"/></svg>',
  fiverr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 15V9.5a2 2 0 0 1 2-2H15"/><path d="M8 12h5"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 10v6M8 7.5v.01M12.5 16v-3.5a2 2 0 0 1 4 0V16M12.5 16v-6"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M14 21v-7h2.5l.5-3H14V9a1.5 1.5 0 0 1 1.5-1.5H17V4.5h-2A4 4 0 0 0 11 8.5V11H9v3h2v7"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.7"/><path d="M16.7 7.3h.01"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M4 4l7 9.2L4.5 20H7l5-5.6L16 20h4l-7.4-9.6L19.5 4H17l-4.6 5.1L8 4z"/></svg>',
  threads: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M12 21c-4.5 0-7-2.7-7-7.5v-3C5 5.9 7.5 3.5 12 3.5s7 2.4 7 7"/><path d="M9.5 12.5c0-1.6 1.2-2.6 3-2.6s3.2.9 3.2 2.6c0 2-1.6 3-4 3-2.1 0-3.7-1-3.7-2.8"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M6 19l1-3.4A7.5 7.5 0 1 1 10 18l-4 1z"/></svg>',
  mastodon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="4.5" y="4" width="15" height="12" rx="4"/><path d="M9 20l3-4 3 4"/></svg>',
  other: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="8.5"/><path d="M12 8v5M12 16h.01"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M4 6.5l8 6 8-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 5 6.1 1.5 1.5 0 0 1 6.5 3.5z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>'
};

/* =========================================================
   CONTENT DATA
   ========================================================= */
const SERVICES = [
  // Core six services (kept first for visual hierarchy)
  { icon: "pin", title: "Local Citation Building", desc: "Accurate, consistent NAP listings across relevant local and industry directories.", href: "#local-citation-building" },
  { icon: "flag", title: "Business Listings", desc: "Creation and optimization of core local business listings.", href: "#local-citation-building" },
  { icon: "link", title: "Link Building", desc: "Relevant, quality-focused backlink outreach and placement.", href: "#link-building" },
  { icon: "layers", title: "Google Stacking", desc: "Organized supporting brand properties that reinforce entity presence.", href: "#google-stacking" },
  { icon: "cloud", title: "Cloud Stacking", desc: "Structured cloud-based supporting content tied to the core brand.", href: "#google-stacking" },
  { icon: "globe", title: "Off-Page SEO", desc: "Strategic work outside the website that supports authority and relevance.", href: "#link-building" },
  // Supporting / more granular services
  { icon: "search", title: "Local SEO", desc: "On- and off-page fundamentals that support visibility in local search results.", href: "#local-citation-building" },
  { icon: "building", title: "Business Directory Submissions", desc: "Submission to directories relevant to the business's industry and location.", href: "#local-citation-building" },
  { icon: "clipboard", title: "NAP Citation Building", desc: "Name, address and phone number consistency across the web.", href: "#local-citation-building" },
  { icon: "check", title: "Citation Audit", desc: "A full review of existing citations to find gaps and inconsistencies.", href: "#local-citation-building" },
  { icon: "refresh", title: "Citation Cleanup", desc: "Correcting inaccurate, outdated or duplicate citation data.", href: "#local-citation-building" },
  { icon: "search", title: "Duplicate Citation Research", desc: "Manual research to identify and resolve duplicate listings.", href: "#local-citation-building" },
  { icon: "users", title: "Competitor Citation Research", desc: "Understanding where competitors are listed to find realistic opportunities.", href: "#local-citation-building" },
  { icon: "grid", title: "Brand Profile Building", desc: "Consistent brand profiles across relevant platforms and directories.", href: "#google-stacking" },
  { icon: "globe", title: "International Citation Building", desc: "Citation building for businesses operating outside the USA.", href: "#local-citation-building" },
  { icon: "file", title: "Web 2.0 / Supporting Properties", desc: "Supporting content properties used where strategically appropriate.", href: "#google-stacking" }
];

/* Country flags — Unicode flag emoji only, no icon library/images (keeps the section lightweight) */
const COUNTRY_FLAGS = {
  "United States": "🇺🇸", "Canada": "🇨🇦", "United Kingdom": "🇬🇧", "Ireland": "🇮🇪",
  "Germany": "🇩🇪", "France": "🇫🇷", "Spain": "🇪🇸", "Italy": "🇮🇹", "Netherlands": "🇳🇱",
  "Belgium": "🇧🇪", "Austria": "🇦🇹", "Switzerland": "🇨🇭", "Sweden": "🇸🇪", "Norway": "🇳🇴",
  "Denmark": "🇩🇰", "Finland": "🇫🇮", "Portugal": "🇵🇹", "Poland": "🇵🇱", "Czech Republic": "🇨🇿",
  "Romania": "🇷🇴", "Hungary": "🇭🇺", "Greece": "🇬🇷", "Australia": "🇦🇺", "New Zealand": "🇳🇿",
  "United Arab Emirates": "🇦🇪", "Saudi Arabia": "🇸🇦", "Qatar": "🇶🇦", "Israel": "🇮🇱",
  "Singapore": "🇸🇬", "Malaysia": "🇲🇾", "India": "🇮🇳", "Japan": "🇯🇵", "South Korea": "🇰🇷",
  "Philippines": "🇵🇭", "Indonesia": "🇮🇩", "Thailand": "🇹🇭", "South Africa": "🇿🇦",
  "Brazil": "🇧🇷", "Mexico": "🇲🇽", "Argentina": "🇦🇷"
};

/* Region display order for the Countries section */
const REGION_ORDER = ["North America", "Europe", "Oceania", "Middle East", "Asia", "Africa", "Latin America"];

/* Used to phrase the regional country message, e.g. "...and other European markets." */
const REGION_ADJECTIVES = {
  "North America": "North American",
  "Europe": "European",
  "Oceania": "Oceania",
  "Middle East": "Middle Eastern",
  "Asia": "Asian",
  "Africa": "African",
  "Latin America": "Latin American"
};

/* Countries with their own dedicated Fiverr gig placeholder get their own
   phrasing; everything else shares the regional phrasing (see the FAQ-style
   examples in the brief: USA/Canada get their own line, Germany gets the
   "...and other European markets" line). */
const DEDICATED_GIG_COUNTRIES = ["United States", "Canada", "United Kingdom", "Australia", "New Zealand", "South Africa"];

function countryMessage(c) {
  if (DEDICATED_GIG_COUNTRIES.includes(c.name)) {
    return `Explore our ${c.name} local citation and business listing services.`;
  }
  const adjective = REGION_ADJECTIVES[c.region] || c.region;
  return `Explore local citation and business listing services for ${c.name} and other ${adjective} markets.`;
}


const FAQS = [
  { q: "What are local citations?", a: "Local citations are online mentions of a business's name, address and phone number (NAP), typically found on directories, review sites and other platforms." },
  { q: "Why are local citations important?", a: "Consistent citations help search engines and potential customers verify that a business's information is accurate, which can support local search visibility." },
  { q: "Do you build citations for businesses outside the USA?", a: "Yes. International citation building is offered for businesses in a range of countries, using directories relevant to each specific market." },
  { q: "What information do you need?", a: "Generally the business's exact legal name, address, phone number, website, category and any existing listings, so everything can be kept consistent." },
  { q: "How do you handle duplicate listings?", a: "Duplicate listings are manually researched and either merged, corrected or removed depending on the platform's process, then documented in the report." },
  { q: "Do you provide citation reports?", a: "Yes. Clients receive a report documenting what was submitted, updated or cleaned up, including live URLs where a listing is publicly viewable." },
  { q: "What is link building?", a: "Link building is the process of earning or building relevant backlinks from other websites to support a site's authority and off-page SEO." },
  { q: "What is Google stacking?", a: "Google stacking involves organizing supporting brand properties on trusted platforms in a structured way that reinforces a business's entity signals." },
  { q: "What is cloud stacking?", a: "Cloud stacking is a similar concept applied to cloud-based platforms, used to build supporting, contextually relevant brand content." },
  { q: "How long does SEO take?", a: "Timelines vary based on competition, industry, location, website quality and starting point. There is no fixed timeline that applies to every business." },
  { q: "Can you work with agencies?", a: "Yes. Agencies looking for a citation building or off-page SEO partner for their own clients are welcome to reach out." },
  { q: "Do you guarantee Google rankings?", a: "No legitimate SEO provider can guarantee a specific Google ranking. Results depend on competition, industry, website quality, technical SEO, content and many other factors outside any single provider's control." }
];



/* =========================================================
   RENDER HELPERS
   ========================================================= */
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;
  SERVICES.forEach(s => {
    grid.appendChild(el(`
      <article class="service-card">
        <div class="service-icon">${ICONS[s.icon] || ICONS.grid}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <a class="service-link" href="${s.href}">Learn More &rarr;</a>
      </article>
    `));
  });
}

/* Real, documented client projects. Data comes from completed citation
   reports — only public, business-level facts are included here (no
   usernames, passwords, emails, or other account/credential data, and no
   invented rankings, traffic, leads, or revenue figures). Add a new
   project by adding another object with the same shape; the grid and the
   detail modal both render from this array automatically. */
const PORTFOLIO_PROJECTS = [
  {
    name: "QuickestBuyer",
    country: "United States",
    location: "Cape Coral, Florida",
    service: "USA Local Citation Building",
    description: "Local citation and business listing work for a USA-based business in Cape Coral, Florida.",
    deliverables: ["Local citation submissions", "Business directory listings", "Listing URL documentation", "Status/report tracking"],
    sources: ["Cataloxy", "MerchantCircle", "CitySquares", "HomePros411", "GitHub", "BizMakers America"]
  },
  {
    name: "Texas LED Neon Signs",
    country: "United States",
    location: "College Station, Texas",
    service: "USA Local Citation Building",
    description: "Local citation and business listing work for a USA-based business in College Station, Texas.",
    deliverables: ["Local citation submissions", "Business directory listings", "Listing URL documentation", "Status/report tracking"],
    sources: ["HubBiz", "Manta", "FindUsLocal", "PennySaver USA", "Free Business Directory", "Pinterest"]
  },
  {
    name: "Aghmat Cars Marrakech",
    country: "Morocco",
    location: "Marrakech, Morocco",
    service: "Local Citation Building",
    description: "Local citation and business listing work for a car rental business in Marrakech, Morocco.",
    deliverables: ["Local citation submissions", "Business/profile listings", "Listing URL documentation", "Status/report tracking"],
    sources: ["Tripadvisor", "YellowPages.ma", "Infobel", "SlideShare", "Scribd", "Academia.edu"]
  },
  {
    name: "Liberty Health Services",
    country: "United States",
    location: "",
    service: "USA Local Citation Building",
    description: "Local citation and business listing work for a USA-based health services business.",
    deliverables: ["Local citation submissions", "Business directory listings", "Listing URL documentation", "Status/report tracking"],
    sources: ["Yelp", "Manta", "PennySaver USA", "Free Business Directory", "A-Z Business Finder", "Pinterest"]
  },
  {
    name: "Michael Strickland Productions",
    country: "Canada",
    location: "Vancouver, British Columbia",
    service: "Canada Local Citation Building",
    description: "Local citation and business listing work for a Canada-based business in Vancouver, British Columbia.",
    deliverables: ["Local citation submissions", "Business directory listings", "Listing URL documentation", "Status/report tracking"],
    sources: ["Yoys.ca", "MarketLister.ca", "DistrictLocal", "PlugVancouver", "ProfileCanada", "HealthyFamilyLiving"]
  }
];

function renderPortfolio() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  PORTFOLIO_PROJECTS.forEach((p, i) => {
    const deliverables = p.deliverables.map(d => `<li>${d}</li>`).join("");
    grid.appendChild(el(`
      <article class="portfolio-card">
        <span class="portfolio-market">${p.country}</span>
        <h3>${p.name}</h3>
        <p class="portfolio-service">${p.service}</p>
        ${p.location ? `<p class="portfolio-location">${p.location}</p>` : ""}
        <p class="portfolio-desc">${p.description}</p>
        <ul class="portfolio-deliverables">${deliverables}</ul>
        <button type="button" class="btn btn-outline btn-sm portfolio-details-btn" data-project-index="${i}">View Details</button>
      </article>
    `));
  });
}

function setupPortfolioModal() {
  const overlay = document.getElementById("portfolio-modal-overlay");
  const panel = document.getElementById("portfolio-modal-panel");
  const body = document.getElementById("portfolio-modal-body");
  const closeBtn = document.getElementById("portfolio-modal-close");
  const grid = document.getElementById("portfolio-grid");
  if (!overlay || !panel || !body || !closeBtn || !grid) return;

  let lastFocused = null;

  function openModal(project) {
    body.innerHTML = `
      <p class="modal-label">Project</p>
      <h3 class="modal-title" id="portfolio-modal-title">${project.name}</h3>

      <p class="modal-label">Market</p>
      <p class="modal-value">${project.country}</p>

      ${project.location ? `<p class="modal-label">Location</p><p class="modal-value">${project.location}</p>` : ""}

      <p class="modal-label">Service</p>
      <p class="modal-value">${project.service}</p>

      <p class="modal-label">Overview</p>
      <p class="modal-value">${project.description}</p>

      <p class="modal-label">Work Completed</p>
      <p class="modal-value">Citation submissions and business/profile listing work with documented listing status tracking.</p>

      <p class="modal-label">Documented Sources</p>
      <p class="modal-value">${project.sources.join(", ")}</p>

      <p class="modal-label">Deliverables</p>
      <p class="modal-value">${project.deliverables.join(", ")}</p>
    `;
    lastFocused = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add("modal-open");
    closeBtn.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocused) lastFocused.focus();
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".portfolio-details-btn");
    if (!btn) return;
    const project = PORTFOLIO_PROJECTS[Number(btn.getAttribute("data-project-index"))];
    if (project) openModal(project);
  });

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeModal();
  });
}

/* Real, verified client reviews (Fiverr). Do not edit the wording — only
   add new entries here as new verified reviews come in, using the same
   shape: { quote, name, role, rating }. */
const TESTIMONIALS = [
  { quote: "looking forward to working with you again", name: "mykails1970", role: "Fiverr Client", rating: 5 },
  { quote: "I had a great experience with their services. The team was professional, responsive, and helped improve my business\u2019s online visibility. I\u2019m very satisfied with the service and highly recommend them.", name: "raymond_diane", role: "Fiverr Client", rating: 5 },
  { quote: "Fast delivery and excellent communication. The work was exactly as requested. Highly satisfied!", name: "theodore_032", role: "Fiverr Client", rating: 5 },
  { quote: "Excellent service from start to finish. Accurate work, timely delivery, and great support. I would gladly work with this seller again!", name: "stevie_callan", role: "Fiverr Client", rating: 5 }
];

function renderTestimonials() {
  const grid = document.getElementById("testimonial-grid");
  if (!grid) return;
  TESTIMONIALS.forEach(t => {
    const stars = "\u2605".repeat(t.rating) + "\u2606".repeat(5 - t.rating);
    grid.appendChild(el(`
      <article class="testimonial-card">
        <div class="testimonial-stars" aria-label="${t.rating} out of 5 stars">${stars}</div>
        <p class="testimonial-quote">&ldquo;${t.quote}&rdquo;</p>
        <p class="testimonial-name">${t.name}</p>
        <p class="testimonial-role">${t.role}</p>
      </article>
    `));
  });
}

function renderFAQ() {
  const list = document.getElementById("faq-list");
  if (!list) return;
  FAQS.forEach((f, i) => {
    const id = `faq-${i}`;
    const item = el(`
      <div class="faq-item">
        <button class="faq-question" id="${id}-q" aria-expanded="false" aria-controls="${id}-a">
          <span>${f.q}</span>
          <span class="plus" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" id="${id}-a" role="region" aria-labelledby="${id}-q">
          <p>${f.a}</p>
        </div>
      </div>
    `);
    list.appendChild(item);
  });

  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-question");
    if (!btn) return;
    const answer = document.getElementById(btn.getAttribute("aria-controls"));
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    answer.style.maxHeight = expanded ? "0px" : answer.scrollHeight + "px";
  });
}

function renderSocial() {
  const grid = document.getElementById("social-grid");
  if (!grid) return;
  SITE_CONFIG.social.forEach(s => {
    const isOther = s.key === "other";
    const placeholder = isPlaceholder(s.url);

    if (isOther && placeholder) {
      // No "Other Profile" URL configured yet — show an inert, non-clickable
      // card rather than a link to nowhere. Becomes a real link automatically
      // the moment a url (and optionally a custom label) is added above.
      grid.appendChild(el(`
        <li>
          <div class="social-card" data-placeholder="true">
            <span class="social-icon">${ICONS.other}</span>
            <span>
              <span class="social-name">${s.label}</span>
              <span class="social-sub">Add profile later</span>
            </span>
          </div>
        </li>
      `));
      return;
    }

    const linkAttrs = placeholder
      ? `href="#contact" data-placeholder="true" aria-disabled="true" aria-label="${s.label} — link coming soon"`
      : `href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.label} (opens in a new tab)"`;
    grid.appendChild(el(`
      <li>
        <a class="social-card" ${linkAttrs}>
          <span class="social-icon">${ICONS[s.key] || ICONS.other}</span>
          <span>
            <span class="social-name">${s.label}</span>
            <span class="social-sub">${placeholder ? "Link coming soon" : s.sub}</span>
          </span>
        </a>
      </li>
    `));
  });
}

function renderContactDetails() {
  const wrap = document.getElementById("contact-details");
  const footerList = document.getElementById("footer-contact-list");
  if (!wrap && !footerList) return;

  const items = [];
  if (!isPlaceholder(SITE_CONFIG.email)) {
    items.push({ label: "Email", icon: ICONS.mail, html: `<a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a>` });
  }
  if (!isPlaceholder(SITE_CONFIG.phone)) {
    const telHref = SITE_CONFIG.phone.replace(/[^0-9+]/g, "");
    items.push({ label: "Phone", icon: ICONS.phone, html: `<a href="tel:${telHref}">${SITE_CONFIG.phone}</a>` });
  }
  if (!isPlaceholder(SITE_CONFIG.businessHours)) {
    items.push({ label: "Hours", icon: ICONS.clock, html: SITE_CONFIG.businessHours });
  }

  if (wrap) {
    wrap.innerHTML = items.length
      ? items.map(i => `<div class="detail-row"><span class="detail-label">${i.label}</span><span>${i.html}</span></div>`).join("")
      : `<p class="contact-fallback">Direct contact details will be listed here soon. In the meantime, please use the form to reach out.</p>`;
  }

  if (footerList) {
    footerList.innerHTML = items.length
      ? items.map(i => `<li>${i.icon} ${i.html}</li>`).join("")
      : `<li>Contact details coming soon</li>`;
  }
}

function setupWhatsApp() {
  const btn = document.getElementById("whatsapp-float");
  if (!btn) return;
  const number = SITE_CONFIG.whatsapp.number;
  if (isPlaceholder(number)) {
    btn.setAttribute("data-disabled", "true");
    btn.setAttribute("aria-label", "WhatsApp contact coming soon — use the contact form instead");
    btn.href = "#contact";
    btn.removeAttribute("target");
    return;
  }
  const digits = number.replace(/[^0-9]/g, "");
  const msg = encodeURIComponent(SITE_CONFIG.whatsapp.message || "");
  btn.href = `https://wa.me/${digits}?text=${msg}`;
}

function setupNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

function setupFooterYear() {
  const y = document.getElementById("footer-year");
  if (y) y.textContent = new Date().getFullYear();
}

function renderCountries() {
  const wrap = document.getElementById("country-groups");
  if (!wrap) return;

  const byRegion = {};
  SITE_CONFIG.countries.forEach(c => {
    (byRegion[c.region] = byRegion[c.region] || []).push(c);
  });

  const regions = REGION_ORDER.filter(r => byRegion[r] && byRegion[r].length);

  regions.forEach(region => {
    const group = el(`
      <div class="country-region" data-region-group="${region}">
        <h3 class="country-region-title">${region}</h3>
        <div class="country-grid"></div>
      </div>
    `);
    const grid = group.querySelector(".country-grid");

    byRegion[region].forEach(c => {
      const flag = COUNTRY_FLAGS[c.name] || "🌍";
      const message = countryMessage(c);
      const slug = c.name.toLowerCase();

      let cta;
      if (isGigPlaceholder(c.gigUrl)) {
        cta = `<button type="button" class="btn btn-outline btn-sm country-cta" data-placeholder="true" data-message="${message}" aria-label="${c.name} service coming soon">Service Coming Soon</button>`;
      } else {
        cta = `<a class="btn btn-outline btn-sm country-cta" href="${c.gigUrl}" target="_blank" rel="noopener noreferrer" data-message="${message}" aria-label="${c.name} — view Fiverr service (opens in a new tab)">View Service &rarr;</a>`;
      }

      grid.appendChild(el(`
        <article class="country-card" data-country="${slug}">
          <span class="country-flag" aria-hidden="true">${flag}</span>
          <h4 class="country-name">${c.name}</h4>
          <p class="country-desc">Local citations &amp; business listings</p>
          ${cta}
        </article>
      `));
    });

    wrap.appendChild(group);
  });
}

function setupCountrySearch() {
  const input = document.getElementById("country-search");
  const wrap = document.getElementById("country-groups");
  const empty = document.getElementById("country-empty");
  if (!input || !wrap) return;

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    let anyVisible = false;

    wrap.querySelectorAll(".country-region").forEach(group => {
      let groupHasMatch = false;
      group.querySelectorAll(".country-card").forEach(card => {
        const match = !query || card.getAttribute("data-country").includes(query);
        card.hidden = !match;
        if (match) groupHasMatch = true;
      });
      group.hidden = !groupHasMatch;
      if (groupHasMatch) anyVisible = true;
    });

    if (empty) empty.hidden = anyVisible;
  });
}

function setupCountrySelection() {
  const wrap = document.getElementById("country-groups");
  const messageEl = document.getElementById("country-selected-message");
  const ctaEl = document.getElementById("country-selected-cta");
  if (!wrap || !messageEl || !ctaEl) return;

  wrap.addEventListener("click", (e) => {
    const cta = e.target.closest(".country-cta");
    if (!cta) return;

    messageEl.textContent = cta.getAttribute("data-message") || messageEl.textContent;

    if (cta.hasAttribute("data-placeholder")) {
      ctaEl.textContent = "Contact Us";
      ctaEl.href = "#contact";
      ctaEl.removeAttribute("target");
    } else {
      ctaEl.textContent = "View Service \u2192";
      ctaEl.href = cta.getAttribute("href");
      ctaEl.setAttribute("target", "_blank");
      ctaEl.setAttribute("rel", "noopener noreferrer");
    }
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderPortfolio();
  setupPortfolioModal();
  renderTestimonials();
  renderFAQ();
  renderSocial();
  renderContactDetails();
  renderCountries();
  setupCountrySearch();
  setupCountrySelection();
  setupWhatsApp();
  setupNav();
  setupFooterYear();
});
