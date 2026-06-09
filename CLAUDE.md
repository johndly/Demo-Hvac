# CLAUDE.md — WebMelior Project Context

> Your local business, upgraded.
> Read this entire file before every task. It defines who we are, how we work, and what good output looks like.

---

## ⚡ Always do first

- **Invoke `/frontend-design`** before writing any frontend code — loads brand palette, screenshot workflow, logo mark, and hard rules. No exceptions.
- **Invoke `/ui-ux-pro-max`** immediately after — loads design intelligence (67 styles, 96 palettes, 57 font pairings, 99 UX guidelines, accessibility rules).
- **Check `brand_assets/`** before designing anything — it may contain logos, color guides, or style references. Use them. Do not invent brand colors or swap in placeholders where real assets exist.
- **Read this file fully** before acting on any task.

---

## 🏢 Project overview

**Business:** WebMelior — local freelance tech services (websites, AI automations, local SEO)
**Owner:** [Your Name]
**Location:** [Your City, State]
**Target clients:** Local small businesses — restaurants, salons, home service pros, clinics
**Stage:** Pre-launch / active client delivery
**Slogan:** "Your local business, upgraded."

### What this repo contains
- Client website projects (one folder per client)
- Reusable automation scripts (email follow-ups, booking reminders, review requests)
- WebMelior's own portfolio/marketing site
- Internal tools (invoice generators, onboarding templates, proposal docs)

---

## 🛠 Tech stack

| Layer | Tool |
|---|---|
| Frontend / websites | Single `index.html` (default) or Next.js for complex builds |
| Styling | Tailwind CSS via CDN (`https://cdn.tailwindcss.com`) |
| CMS (if needed) | Sanity or Markdown-based |
| Automation scripts | Node.js or Python |
| AI integrations | Anthropic API (Claude), OpenAI as fallback |
| Email automation | Resend or Mailchimp API |
| Booking | Calendly API or Cal.com |
| Payments | Stripe |
| Version control | Git + GitHub |
| Hosting | Vercel (sites) · Railway or Render (scripts/APIs) |
| Local dev | Node.js 18+ · Python 3.11+ |
| Screenshots | Puppeteer at `C:/Users/Johndly/AppData/Local/Temp/puppeteer-test/` |

> ⚠️ Platform: Windows 11 / PowerShell — use PowerShell syntax for all shell commands.
> ⚠️ Do NOT suggest WordPress, PHP, or jQuery.
> ⚠️ Do NOT use deprecated APIs or libraries with known security issues.
> ⚠️ Do NOT use `transition-all` — ever.
> ⚠️ Do NOT use default Tailwind blue/indigo as a primary color.

---

## 📁 Folder structure

```
webmelior/
├── CLAUDE.md                   ← you are here
├── serve.mjs                   ← local dev server (serves root at localhost:3000)
├── screenshot.mjs              ← Puppeteer screenshot tool
├── temporary screenshots/      ← auto-saved screenshots (never delete manually)
├── brand_assets/               ← logos, color guides, style references — CHECK FIRST
├── clients/
│   └── [client-name]/
│       ├── site/               ← website source files
│       ├── automations/        ← client-specific scripts
│       └── assets/             ← logos, images, brand files
├── templates/
│   ├── website-starter/        ← reusable 5-page site template
│   ├── automation-starter/     ← reusable automation boilerplate
│   └── email-sequences/        ← pre-written email copy templates
├── webmelior-site/             ← our own portfolio/marketing site
├── tools/
│   ├── invoice-generator/
│   └── proposal-builder/
└── assets/
    ├── logo/                   ← WebMelior SVG, PNG, favicon files
    └── brand/                  ← color palette, fonts, style guide
```

---

## ⚡ Common commands

```powershell
# Start local dev server (always use this — never screenshot file:/// URLs)
node serve.mjs

# Screenshot from localhost
node screenshot.mjs http://localhost:3000
node screenshot.mjs http://localhost:3000 label   # saves as screenshot-N-label.png

# Build for production
npm run build

# Run automation script
node automations/[script-name].js

# Lint and format
npm run lint
npm run format

# Deploy to Vercel
vercel --prod
```

---

## 🖥 Frontend workflow (websites & UI)

### Output defaults
- Default output: single `index.html` with all styles inline
- Tailwind via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Always mobile-first responsive — most local clients browse on phones

### Reference image workflow
- **If a reference image is provided:** match layout, spacing, typography, and color exactly. Use placeholder content only where real content is absent. Do NOT improve or add to the design.
- **If no reference image:** design from scratch with high craft (see anti-generic guardrails below).

### Screenshot & comparison workflow
1. Start the local server: `node serve.mjs` (background — do not start a second instance if already running)
2. Screenshot: `node screenshot.mjs http://localhost:3000`
3. Screenshots auto-save to `./temporary screenshots/screenshot-N.png` (never overwritten)
4. Read the PNG with the Read tool and analyze it directly
5. Compare against reference — be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
6. Fix mismatches, re-screenshot. **Minimum 2 comparison rounds.**
7. Stop only when no visible differences remain OR user says stop
8. Check every round: spacing/padding · font size/weight/line-height · colors (exact hex) · alignment · border-radius · shadows · image sizing

### Anti-generic guardrails (no-reference builds)
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Derive from the WebMelior brand palette or the client's brand.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Use spring-style easing. Never `transition-all`.
- **Interactive states:** Every clickable element needs `hover`, `focus-visible`, and `active` states. No exceptions.
- **Images:** Add gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces must have a layering system (base → elevated → floating) — not all at the same z-plane.

### Frontend hard rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

---

## 📐 Coding standards

### General
- Write clean, readable code — client code may be handed off later
- Comment *why*, not just *what*
- Use `async/await` over `.then()` chains
- Wrap all API calls in `try/catch` with meaningful error messages
- Never hardcode API keys or secrets — use `.env` files always

### Naming conventions
| Type | Convention | Example |
|---|---|---|
| Files | `kebab-case` | `booking-reminder.js` |
| Components | `PascalCase` | `ContactForm.jsx` |
| Variables / functions | `camelCase` | `sendFollowUp()` |
| CSS classes | `kebab-case` | `.hero-section` |
| Constants | `UPPER_SNAKE_CASE` | `MAX_RETRIES` |

### Git workflow
- Branch naming: `feat/description`, `fix/description`, `client/client-name`
- Commit format: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`
- Never commit directly to `main`
- Never commit `.env` or any file containing secrets
- One logical change per commit — don't bundle unrelated edits

---

## 🤖 Automation guidelines

1. **Dry-run mode first** — log what would happen before making real API calls or sending emails
2. **Rate limit all external API calls** — local business clients often have free-tier limits
3. **Log everything** to a timestamped local file — clients will ask "did it run?"
4. **Graceful failures** — if one record fails, continue with the rest and report errors at the end
5. **Plain English logs** — output should be readable by a non-technical client if needed

### Common automation patterns
- **Review request:** SMS/email 24hrs after service completion → Google review link
- **Appointment reminder:** 24hrs + 1hr before booking
- **Lead follow-up:** Auto-reply to contact form within 5 minutes
- **Monthly report:** Simple traffic + automation activity summary emailed to client

---

## 🎨 WebMelior brand

| Token | Value |
|---|---|
| Primary teal | `#0F6E56` |
| Light teal | `#E1F5EE` |
| Accent teal | `#9FE1CB` |
| Dark | `#2C2C2A` |
| Light bg | `#F1EFE8` |
| Font | `system-ui, -apple-system, sans-serif` |

**Tone:** Friendly, clear, no jargon — knowledgeable neighbor, not tech vendor.

### Logo editing rules (`/assets/logo/`)
- Preserve viewBox and aspect ratio
- Keep the teal palette consistent — do not invent new colors
- Export both: light version (teal bg) and dark version (white bg)
- Always save a backup before editing any SVG

---

## 🧠 Behavior guidelines

- **Ask before assuming** — one clarifying question before writing code if a task is ambiguous
- **Explain changes** — briefly explain what changed and why when editing existing files
- **Suggest, don't override** — propose a better approach if you see one, but implement what was asked unless agreed otherwise
- **Confirm before destructive actions** — anything that deletes, overwrites, or deploys: ask first
- **Keep it simple** — clients are small businesses, not tech companies. Simple and working beats clever and fragile
- **No over-engineering** — a 50-line script that works beats a 500-line framework

---

## 🔐 Security (non-negotiable)

- [ ] Never log or print API keys, tokens, or passwords
- [ ] `.env` must be in `.gitignore` — never commit it
- [ ] Validate and sanitize all user inputs on contact forms
- [ ] HTTPS-only for all API endpoints
- [ ] Never store client personal data (emails, phone numbers) in plain text files

---

## 📋 Active projects

> Update as clients are onboarded.

| Client | Type | Status | Notes |
|---|---|---|---|
| Nexora demo | Static HTML demo site (`demo/index.html`) | In progress | Single-file landing page, no build step |
| Webmelior Hub | Marketing/landing site (`webmelior-hub/site/index.html`) | Not started | Public-facing site for WebMelior brand |
| WebMelior portfolio site | Own site | Not started | |
| [Client 1] | Website + Google SEO | Not started | |
| [Client 2] | AI automation | Not started | |

---

## 📎 References

- Anthropic API: https://docs.anthropic.com
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel: https://vercel.com/docs
- Resend: https://resend.com/docs
- Cal.com: https://cal.com/docs
- Stripe: https://stripe.com/docs

---

*Last updated: 2026-06-01 · Owner: [Your Name] · webmelior.com*
