# CLAUDE.md — Webmelior Hub

> Marketing/landing site for the Webmelior brand.
> Read this file before every task. It extends the root `../CLAUDE.md` — follow all rules there as well.

---

## Project overview

**Project:** Webmelior Hub — public-facing marketing and landing site
**Purpose:** Showcase WebMelior's services, attract local business clients, and convert visitors to leads
**Status:** Not started
**Owner:** WebMelior

---

## Folder structure

```
webmelior-hub/
├── CLAUDE.md               ← you are here
├── site/
│   └── index.html          ← main entry point (single-file default)
└── assets/
    ├── images/             ← page images, hero art, client logos
    └── fonts/              ← any self-hosted font files
```

---

## Tech

- Single `index.html` (no build step)
- Tailwind CSS via CDN: `https://cdn.tailwindcss.com`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Served locally with `node ../serve.mjs` from the workspace root

---

## Brand

Inherit from root CLAUDE.md. Key tokens:

| Token        | Value       |
|---|---|
| Primary teal | `#0F6E56`   |
| Light teal   | `#E1F5EE`   |
| Accent teal  | `#9FE1CB`   |
| Dark         | `#2C2C2A`   |
| Light bg     | `#F1EFE8`   |

---

## Pages / sections (planned)

| Section        | Purpose                                              |
|---|---|
| Hero           | Headline, subheadline, primary CTA                   |
| Services       | What WebMelior offers (websites, AI, SEO)            |
| How it works   | 3-step simple process                                |
| Social proof   | Testimonials or before/after results                 |
| Pricing        | Optional — tiers or "starting at" anchor             |
| Contact / CTA  | Lead capture form or Calendly booking link           |

---

## Rules specific to this project

- Match the WebMelior brand exactly — no placeholder colors, no generic blues
- Target audience: non-technical local business owners — keep copy plain and benefit-focused
- Mobile-first — assume 60%+ traffic from phones
- Primary CTA: booking/contact form (Calendly link or inline form)
- Do not add sections not listed above without confirming first
- Anti-generic guardrails from root CLAUDE.md apply in full

---

*Last updated: 2026-06-04*
