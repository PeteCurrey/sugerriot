# SUGAR RIOT — COMPLETE BUILD DOCUMENT
## Design Bible + Full Build Prompt Sequence
### Prepared by Avorria · March 2026 · Confidential

---

# ⚠️ READ THIS ENTIRE DOCUMENT BEFORE WRITING A SINGLE LINE OF CODE ⚠️

This document contains the Design Bible (your creative constraints) followed by 13 sequential build prompts. The Design Bible governs every visual and interaction decision across the entire project. Run each numbered prompt in order. Do not skip the Design Bible.

---

---

# PART ONE: DESIGN BIBLE

---

## The One Sentence That Governs Everything

**Sugar Riot is a premium editorial brand that sells sweets — not a sweet shop with a website.**

This distinction is everything. The aesthetic references are Acne Studios, Aesop, Net-A-Porter, and i-D Magazine — not Haribo, not a birthday party, not a pick-and-mix counter. A fashion-forward, editorially-led, white-canvas brand experience. Clean. Sharp. Cinematic. The sweets are the colour. The website is the gallery.

---

## The Visual Reference Points

Before writing any component, hold these references in mind:

- **Acne Studios** — white space as a design material. Typography at aggressive scale. Colour used with surgical precision.
- **Aesop** — restraint. Every element earns its place. Nothing decorative for decoration's sake.
- **Net-A-Porter** — premium white ecommerce. Sharp product photography. Editorial content alongside commerce.
- **i-D Magazine** — bold typographic scale. Unexpected layouts. Type that commands the page.
- **Ssense.com** — the confidence of emptiness. A product card that breathes.

The mood: **expensive, controlled, editorial, white, sharp**. When colour appears, it is an event — not wallpaper.

---

## Absolute Prohibitions — The "Never" List

If you produce any of the following, stop, delete it, and rebuild:

- ❌ Dark or black backgrounds — this site is white-first, always
- ❌ Rounded bubble fonts — Nunito, Poppins, Quicksand, Fredoka, Raleway, or any font with rounded terminals
- ❌ `border-radius` above `4px` on any structural element (cards, buttons, containers)
- ❌ Pill-shaped primary buttons — reserved for small filter tags and dietary badges only
- ❌ Gradient fills on card backgrounds
- ❌ Multiple accent colours appearing decoratively in the same component
- ❌ Section padding below `120px` on desktop
- ❌ Product grids at 4 columns — 3 columns maximum
- ❌ Box shadows used decoratively — elevation shadows only (drawers, modals)
- ❌ Coloured section backgrounds other than white, near-white `#F7F7F7`, or the single intentional contrast section (B2B strip)
- ❌ Inter, Roboto, Arial, or system fonts
- ❌ Confetti, balloons, sparkles, stars, or any candy-themed decorative illustration
- ❌ Overlapping content caused by insufficient spacing or z-index mismanagement
- ❌ Compressed vertical layouts — every component needs room to breathe

---

## Typography

### Font Stack
- **Display / Hero:** Clash Display — weights 700 and 800 only. Never use lighter weights in display contexts.
- **Body / UI:** Satoshi — weights 400 (Regular) and 500 (Medium). Clean and contemporary.
- **Mono / Data:** JetBrains Mono — weight 400 only. Used for prices, product codes, section labels in small caps, weights, SKUs, and technical metadata. Never for body copy.

### Type Scale
```css
--text-display-xl: clamp(72px, 9vw, 152px);   /* hero headlines */
--text-display-lg: clamp(52px, 6.5vw, 88px);  /* world titles, major section headings */
--text-display-md: clamp(36px, 4.5vw, 60px);  /* page titles */
--text-heading-lg: clamp(26px, 3vw, 44px);    /* sub-section headings */
--text-heading-md: clamp(20px, 2.5vw, 32px);  /* card headings, minor sections */
--text-body-lg: 18px;                          /* editorial body copy */
--text-body-md: 16px;                          /* standard body */
--text-body-sm: 14px;                          /* captions, UI labels */
--text-mono-sm: 11px;                          /* JetBrains Mono labels */
--text-mono-md: 13px;                          /* JetBrains Mono prices */
```

### Tracking (Letter Spacing)
- Display headings: `-0.03em` to `-0.05em` — tight. Headlines feel compressed and powerful.
- Body copy: `0em` — never add letter-spacing to body text.
- All-caps JetBrains Mono labels: `0.12em` to `0.18em` — the only place wide tracking is correct.
- Buttons (uppercase): `0.06em`.

### Line Height
- Display type: `0.88` to `0.95` — near-solid, dense, powerful.
- Body: `1.65` to `1.75` — comfortable reading rhythm.

### The Section Label Pattern
Every content section opens with a small JetBrains Mono label above the main heading. This is the typographic signature of the site:

```
NEW IN ↗                          ← 11px, JetBrains Mono, magenta, 0.15em tracking, uppercase
The Sweet Vault                   ← Clash Display display-lg, #0A0A0A
Premium confectionery from        ← Satoshi Regular, 18px, #6B6B6B
six continents, curated daily.
```

The label always sits `20px` above the heading. This three-tier rhythm appears on every section, every page.

---

## Colour System

### The Palette
```css
/* FOUNDATIONS — 95% of the site lives here */
--color-white: #FFFFFF;           /* Primary background — the canvas */
--color-off-white: #F7F7F7;       /* Surface — very subtle card differentiation */
--color-border: #E8E8E8;          /* Structural borders — clean, light grey */
--color-border-dark: #D0D0D0;     /* Stronger border for emphasis */
--color-text-primary: #0A0A0A;    /* Headlines, primary text */
--color-text-secondary: #6B6B6B;  /* Body copy, descriptions */
--color-text-muted: #A0A0A0;      /* Labels, captions, metadata */

/* BRAND ACCENTS — use with discipline */
--color-magenta: #FF3CAC;         /* Primary accent — CTAs, active states, key typographic moments */
--color-ultraviolet: #784BA0;     /* Secondary — gradients, hover transitions */
--color-deepsky: #2B86C5;         /* B2B portal primary / retail links */
--color-lime: #B8FF3C;            /* Sale badges / urgency only — never decorative */
--color-obsidian: #0A0A0A;        /* Used only for the B2B contrast section and footer */

/* GRADIENT */
--gradient-brand: linear-gradient(135deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
```

### How to Use Colour on a White Site

The white canvas is the premium. Colour is punctuation.

- **Magenta** appears on: primary CTA buttons, active nav states, hover underlines, one typographic accent word per major heading (not the whole heading), selected/active component states. If magenta appears more than 3–4 times within a single viewport scroll, there is too much.
- **The brand gradient** appears on: the hero accent layer, one or two typographic moments per page (a word, never a full sentence), the footer brand strip. Not on card borders. Not as section backgrounds.
- **Obsidian `#0A0A0A`** appears only in: the footer (dark footer on white site = strong closure), the B2B strip (intentional dark contrast), and as a button variant for specific contexts.
- **Lime** appears only as: a sale badge background with black text, and stock urgency indicators. Nowhere else. Ever.
- **White opacity for hierarchy** is not applicable on a white site — use the grey scale instead: `#0A0A0A` for primary, `#6B6B6B` for secondary, `#A0A0A0` for muted.

---

## Spacing — The Language of Premium

Premium brands breathe. Cheap brands cram.

### Base Unit: 8px
All spacing is a multiple of 8px.

### Section Vertical Padding
```css
--section-y-xl: 200px;    /* Hero-adjacent, World pages, major cinematic sections */
--section-y-lg: 160px;    /* Standard full-width sections */
--section-y-md: 120px;    /* Compact sections */
--section-y-sm: 80px;     /* Footer, narrow utility sections */
/* Mobile: divide desktop values by approximately 2.5 */
```

These are minimums, not targets. A section with 60px top padding reads as a compressed template.

### Container
```css
--container-max: 1440px;
--container-x: clamp(24px, 6vw, 120px);
```

### Component Internal Spacing
- Card padding: `40px` desktop, `24px` mobile. Not `12px`. Not `16px`.
- Heading to body copy gap: `24px` minimum.
- Body copy to CTA gap: `40px` minimum.
- Between grid items: `24px` gutter desktop, `16px` mobile.

---

## Border Radius — The Sharp Rule

This is where bubbly is born. Eliminate it.

```css
--radius-none: 0px;    /* All structural elements — sections, hero, full-bleed images, menus */
--radius-xs: 2px;      /* Primary buttons */
--radius-sm: 4px;      /* Product image containers, standard cards */
--radius-pill: 9999px; /* Filter tags, dietary badges, status chips ONLY */
```

Rules:
- **Buttons:** `2px` — almost square. Never pill. Never `8px+`.
- **Product image containers:** `4px` maximum.
- **Cards and containers:** `4px` maximum.
- **Hero / full-bleed / mega menu / drawers / modals:** `0px` — always.
- **Pill shape:** restricted to dietary badges (Vegan, Halal), filter tags, small status chips. Never on CTA buttons.

---

## Borders

```css
--border-subtle: 1px solid #F0F0F0;     /* Barely visible structural division */
--border-default: 1px solid #E8E8E8;    /* Standard — cards at rest, inputs at rest */
--border-strong: 1px solid #C0C0C0;     /* Focused inputs, hovered cards */
--border-accent: 1px solid #FF3CAC;     /* Active/selected state — magenta */
```

- Cards: `border-default` at rest → `border-strong` on hover (no glow, just a sharper line)
- Active/selected card: `border-accent`
- No thick borders. No `2px+` on decorative elements.
- `box-shadow` only for elevation: `0 8px 40px rgba(0,0,0,0.08)` for drawers and modals.

---

## Animation — The Cinematic Standard

### The Stack
- **Lenis** — smooth scroll inertia, initialised globally, fed into GSAP ScrollTrigger.
- **GSAP + ScrollTrigger** — all scroll-driven animations.
- **Framer Motion** — React component-level transitions (AnimatePresence for drawers, modals, step flows, page transitions).

### Page Load Sequence — Every Page
```
0ms:       Structural layout and background render (no flash of unstyled content)
0–200ms:   Navigation fades in — translateY(-6px) → 0, opacity 0 → 1
200–700ms: Hero headline performs word-by-word reveal (see below)
700–950ms: Hero subheading and CTA fade up into position
950ms+:    Ambient animations begin (floating orbs, parallax layers)
```

### The Word Reveal — Hero Headlines
```javascript
// Wrap each word in a span with overflow:hidden parent, then animate
const words = headline.querySelectorAll('.word');
gsap.fromTo(words,
  { yPercent: 110, opacity: 0 },
  {
    yPercent: 0,
    opacity: 1,
    duration: 0.85,
    ease: 'power4.out',
    stagger: 0.055,
    delay: 0.2
  }
);
```
Each word's parent `<span>` has `overflow: hidden` — words rise up into view from below a mask, not a fade. This is the signature entrance effect.

### Standard Scroll-Reveal — Every Below-Fold Section
```javascript
gsap.fromTo(element,
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 82%',
      toggleActions: 'play none none none'
    }
  }
);

// Staggered children
gsap.fromTo(children,
  { y: 32, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.07,
    scrollTrigger: { trigger: parent, start: 'top 78%' }
  }
);
```
Always combine Y translate with opacity. Never opacity alone.

### Hover States — Micro-interactions
- **Navigation links:** A magenta underline draws from left to right on hover (`scaleX: 0 → 1` on `::after` pseudo-element, `transform-origin: left`, `0.25s ease`). Reverses on leave.
- **Cards:** Inner image scales to `1.03` (`transition: transform 0.45s ease`). Border transitions from `border-default` to `border-strong`. No shadow. No lift.
- **Primary buttons:** Magnetic cursor pull (JS — button drifts 30% toward cursor, elastic return on leave). Background: `#FF3CAC → #ff55b8` on hover.
- **Ghost/text links:** Underline draw animation. No colour change.
- **Mega menu items:** A `3px` magenta left border slides in (`scaleY: 0 → 1` from top, `0.18s ease`).

### Magnetic Button Effect — Primary CTAs
```javascript
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    gsap.to(btn, { x, y, duration: 0.35, ease: 'power2.out' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.5)' });
  });
});
```

### Custom Cursor
```javascript
// Dot (6px circle, #0A0A0A) — follows cursor at 1:1 speed, no lag
// Ring (28px circle, border 1.5px solid #0A0A0A, no fill) — follows with lerp 0.12
// On hovering links/buttons: ring expands to 44px, border becomes magenta
// On hovering images: ring expands to 72px, filled with small uppercase text: "VIEW" or "EXPLORE" (JetBrains Mono, 9px)
// Gate behind: if ('ontouchstart' in window) return; — disable on touch devices
```

### Parallax Depth Layers
```javascript
// Background element: moves at 0.25x scroll speed
// Midground accent: 0.55x scroll speed
// Foreground text: 1x (normal)
ScrollTrigger.create({
  trigger: section,
  start: 'top top',
  end: 'bottom top',
  scrub: 1,
  onUpdate: self => {
    gsap.set(bgLayer, { y: self.progress * -180 });
    gsap.set(midLayer, { y: self.progress * -80 });
  }
});
```

### Horizontal Scroll Sections
For the Worlds carousel and any feature carousels, use GSAP horizontal ScrollTrigger pin:
```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: 'top top',
    end: () => `+=${track.scrollWidth - window.innerWidth}`,
    scrub: 1,
    pin: true
  }
});
tl.to(track, { x: () => -(track.scrollWidth - window.innerWidth) });
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) { /* all GSAP code here */ }
```

---

## Component Specifications

### Buttons
```css
/* PRIMARY */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #FF3CAC;
  color: #000000;           /* Black text on magenta */
  font-family: 'Satoshi', sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 16px 40px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

/* SECONDARY — dark outline on white */
.btn-secondary {
  background: transparent;
  color: #0A0A0A;
  border: 1px solid #0A0A0A;
  border-radius: 2px;
  /* same font/padding as primary */
}
.btn-secondary:hover { background: #0A0A0A; color: #FFFFFF; }

/* GHOST — text link with arrow */
.btn-ghost {
  background: none;
  border: none;
  color: #0A0A0A;
  font-family: 'Satoshi', sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  /* Arrow slides right on hover: translateX(4px), 0.2s ease */
}

/* DARK VARIANT — used in footer and B2B section */
.btn-dark {
  background: #0A0A0A;
  color: #FFFFFF;
  border-radius: 2px;
  /* same font/padding */
}
```

### Badges
```css
.badge {
  display: inline-flex;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 9999px;   /* pill — correct for badges */
}
.badge-new     { background: #0A0A0A; color: #FFFFFF; }
.badge-sale    { background: #FF3CAC; color: #000000; }
.badge-limited { background: #784BA0; color: #FFFFFF; }
.badge-vegan   { background: #E8F5E9; color: #2E7D32; border: 1px solid #C8E6C9; }
.badge-halal   { background: #E3F2FD; color: #1565C0; border: 1px solid #BBDEFB; }
.badge-gf      { background: #FFF8E1; color: #F57F17; border: 1px solid #FFE082; }
```

### Product Cards
```css
.product-card {
  background: #FFFFFF;
  border: 1px solid #E8E8E8;
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.3s ease;
  cursor: pointer;
}
.product-card:hover { border-color: #C0C0C0; }

.product-card__image-wrap {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #F7F7F7;
  position: relative;
}
.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}
.product-card:hover .product-card__image { transform: scale(1.04); }

.product-card__quick-add {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10,10,10,0.9);
  color: #FFFFFF;
  font-family: 'Satoshi', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 14px;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  border-radius: 0;   /* sharp — this is inside a card */
}
.product-card:hover .product-card__quick-add { transform: translateY(0); }

.product-card__body { padding: 20px 20px 24px; }
.product-card__brand {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #A0A0A0;
  margin-bottom: 6px;
}
.product-card__name {
  font-family: 'Satoshi', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #0A0A0A;
  line-height: 1.4;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.product-card__price {
  font-family: 'Clash Display', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #0A0A0A;
}
.product-card__price--sale { color: #FF3CAC; }
.product-card__price--original {
  font-size: 14px;
  color: #A0A0A0;
  text-decoration: line-through;
  margin-left: 8px;
}
```

### Navigation
```css
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: 72px;
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0);    /* transparent at top */
  border-bottom: 1px solid transparent;
  transition: background 0.3s ease, border-color 0.3s ease, height 0.3s ease;
}
.site-header.scrolled {
  background: rgba(255,255,255,0.96);
  border-bottom: 1px solid #E8E8E8;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  height: 60px;
}
.site-header__logo {
  font-family: 'Clash Display', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #0A0A0A;
  letter-spacing: -0.02em;
  text-decoration: none;
}
.site-header__nav-link {
  font-family: 'Satoshi', sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #0A0A0A;
  opacity: 0.65;
  text-decoration: none;
  position: relative;
  transition: opacity 0.2s ease;
}
.site-header__nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 100%; height: 1.5px;
  background: #FF3CAC;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}
.site-header__nav-link:hover { opacity: 1; }
.site-header__nav-link:hover::after { transform: scaleX(1); }
```

---

## The Quick Sanity Check

Before committing any component, ask: **"Does this look like it belongs on Acne Studios' website?"**

| If you see this → | Replace it with this |
|---|---|
| Dark or black background | White `#FFFFFF` |
| Bubble or rounded font | Clash Display, tight tracking |
| `border-radius` > 4px on a card or button | `2px` button, `4px` card |
| Pill-shaped primary CTA button | `border-radius: 2px` |
| Coloured card backgrounds | White or `#F7F7F7` with `1px` border |
| Section padding < 120px desktop | `160px` minimum |
| 4-column product grid | 3-column maximum |
| Decorative gradient borders on multiple cards | `1px solid #E8E8E8` at rest, magenta only on active |
| Multiple accent colours decorating one section | One colour, used once, with purpose |
| Body font = Inter or Poppins | Satoshi |
| Overlapping or cramped content | Add space. Then double it. |
| Cartoon or illustrative icons | Lucide-react — clean line icons only |
| Rainbow or full-gradient section backgrounds | White background, single accent element |

---

---

# PART TWO: THE BUILD PROMPTS

---

Run these in order. Each builds on the last. The Design Bible above applies to every single prompt without exception.

---

## PROMPT 1 — Project Foundation & Design System

Build a new Next.js 15 (App Router) project called "Sugar Riot" — a premium online sweet store for B2C retail and B2B wholesale in the UK.

**Design Direction**
This site is white-first. The primary background is `#FFFFFF`. The canvas is white. The sweets provide the colour. The design references are Acne Studios, Aesop, and Net-A-Porter — not a traditional sweet shop. Every decision must reflect a premium editorial brand, not a candy store.

**Design Tokens — globals.css and Tailwind config**
Define these as CSS custom properties:
```css
--color-white: #FFFFFF;
--color-off-white: #F7F7F7;
--color-border: #E8E8E8;
--color-border-dark: #D0D0D0;
--color-text-primary: #0A0A0A;
--color-text-secondary: #6B6B6B;
--color-text-muted: #A0A0A0;
--color-magenta: #FF3CAC;
--color-ultraviolet: #784BA0;
--color-deepsky: #2B86C5;
--color-lime: #B8FF3C;
--color-obsidian: #0A0A0A;
--gradient-brand: linear-gradient(135deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
--radius-none: 0px;
--radius-xs: 2px;
--radius-sm: 4px;
--radius-pill: 9999px;
--section-y-xl: 200px;
--section-y-lg: 160px;
--section-y-md: 120px;
--section-y-sm: 80px;
--container-max: 1440px;
--container-x: clamp(24px, 6vw, 120px);
```

**Fonts — install and configure all three**
- Clash Display (700, 800) — display and hero headings
- Satoshi (400, 500) — body and UI text
- JetBrains Mono (400) — prices, product codes, section labels

Load them via `next/font` or as local font files. Apply globally in the root layout. Set `html { background: #FFFFFF; color: #0A0A0A; }` as the base.

**Install dependencies**
```
tailwindcss@4, lenis, gsap, framer-motion, @sanity/client, next-sanity, lucide-react, clsx, tailwind-merge
```

**Initialise Lenis globally**
In the root layout, initialise Lenis smooth scroll and connect it to GSAP's ScrollTrigger:
```javascript
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

**Project Directory Structure**
```
/app
  layout.tsx (root — fonts, Lenis, custom cursor)
  page.tsx (homepage)
  /(retail)
    /shop / page.tsx
    /shop/[category] / page.tsx
    /shop/dietary/[type] / page.tsx
    /worlds / page.tsx
    /worlds/[world] / page.tsx
    /build-your-box / page.tsx
    /gifts-hampers / page.tsx
    /the-lab / page.tsx
    /the-lab/sweet-finder / page.tsx
    /the-lab/nostalgia-decoder / page.tsx
    /journal / page.tsx
    /journal/[slug] / page.tsx
    /brand/[slug] / page.tsx
    /product/[slug] / page.tsx
  /(trade)
    /trade / page.tsx
    /trade/apply / page.tsx
    /trade/dashboard / page.tsx
    /trade/products / page.tsx
  /api
    /claude/sweet-finder / route.ts
    /claude/nostalgia-decoder / route.ts
    /og / route.tsx
/components
  /ui — Button, Badge, SectionLabel, Container, Divider
  /navigation — Header, MegaMenu, MobileNav
  /product — ProductCard, ProductGrid, FilterDrawer
  /sections — reusable page section components
  /cursor — CustomCursor
/lib
  /sanity — client, queries, types
  /shopify — client, queries, cart-context
  /claude — api helpers
/styles
  globals.css
```

**Base Components to Build Now**

1. `<Container>` — `max-width: var(--container-max)`, `padding: 0 var(--container-x)`, `margin: 0 auto`

2. `<SectionLabel text="NEW IN" />` — JetBrains Mono, 11px, magenta, 0.15em tracking, uppercase. Renders as a `<span>` above the section heading. Always includes a subtle `↗` arrow suffix.

3. `<Button>` — four variants: `primary` (magenta fill, black text, 2px radius), `secondary` (black outline, black text, fills black on hover with white text), `ghost` (text + arrow, no border), `dark` (obsidian fill, white text — for footer and B2B sections). All uppercase, 13px Satoshi 600, 0.06em tracking, 16px/40px padding, 2px radius.

4. `<Badge>` — variants: `new`, `sale`, `limited`, `vegan`, `halal`, `gluten-free`, `vegetarian`. Pill shape (9999px radius — correct for small status chips). 10px JetBrains Mono.

5. `<Divider>` — a `1px solid var(--color-border)` horizontal rule used between sections. Full container width.

6. `<CustomCursor>` — a 6px dot (obsidian) that follows the cursor instantly, and a 28px ring (1.5px obsidian border, no fill) that follows with `lerp 0.12` lag. On hover of interactive elements: ring turns magenta and expands to 44px. On hover of images: ring expands to 72px with "VIEW" text in 9px JetBrains Mono. Disable on touch devices.

Output the complete project scaffold with all config files, globals.css with every CSS variable, the base components, the Lenis initialisation, and the CustomCursor component registered in the root layout.

---

## PROMPT 2 — Navigation & Cinematic Mega Menu

Build the complete site navigation. Every detail must match the specification below. Do not deviate toward rounded corners, dark backgrounds, or generic dropdown styling.

**Header**
```
Position: fixed, z-index: 100
Height: 72px resting → 60px on scroll (CSS transition 0.3s ease)
Background: transparent at top → rgba(255,255,255,0.96) + backdrop-filter: blur(16px) on scroll
Border-bottom: transparent at top → 1px solid #E8E8E8 on scroll

Left: "SUGAR RIOT" wordmark — Clash Display, 22px, 800 weight, #0A0A0A, -0.02em tracking
Centre: Nav links — Satoshi 500, 13px, uppercase, 0.04em tracking, #0A0A0A at 65% opacity
         Links: Shop | Worlds | Build Your Box | Gifts | The Lab | Journal
         Hover: opacity 100% + magenta underline draws left-to-right (scaleX 0→1, 0.25s)
Right: Three icon buttons — Search, Account, Cart (with item count badge in magenta)
       Plus: "TRADE" link — JetBrains Mono, 11px, var(--color-deepsky), 0.15em tracking, uppercase
```

**Mega Menu — Shop**
Triggered on hover of "Shop". Full-width panel (not a dropdown box):
- Background: `#FFFFFF`
- Border-top: none (the header's border-bottom serves as the divider)
- Border-bottom: `1px solid #E8E8E8`
- Padding: `48px var(--container-x) 56px`
- Box shadow: `0 8px 40px rgba(0,0,0,0.06)` — subtle elevation
- Border-radius: `0` — this is an architectural panel

Internal layout — 6 columns with `var(--color-border)` vertical dividers between:

Column 1–2 (wider): **BY REGION**
- Column heading: `<SectionLabel>` component — "BY REGION ↗"
- Links with flag prefix: 🇬🇧 British Retro | 🇺🇸 American Candy | 🇯🇵 Japanese Sweets | 🇰🇷 Korean Snacks | 🌍 World Sweets
- Each link: Satoshi Regular, 15px, #0A0A0A at 70%. Hover: 100% opacity + 3px magenta left-border slides in (scaleY 0→1, 0.18s)

Column 3: **BY TYPE** — Gummies & Jellies | Chocolate | Boiled & Hard | Fizzy & Sour | Chewy | Lollipops | Novelty

Column 4: **BY DIET** — each link followed by its `<Badge>` component inline: Vegan | Vegetarian | Halal | Gluten-Free | Sugar-Free | Dairy-Free

Column 5: **BY OCCASION** — Birthday | Valentine's | Easter | Christmas | Halloween | Thank You | Get Well

Column 6: **TRENDING** — this column is the visual centrepiece:
- Background: `#F7F7F7` — very subtle contrast from the white mega menu
- Padding: `24px`
- A tall featured product card: `200px` image placeholder, product name, "FEATURED →" label in magenta
- Below: three text links — Staff Picks | New In | Best Sellers — with count labels in JetBrains Mono

Animation: Panel opens with `maxHeight` animation (0 → auto) + opacity (0 → 1), `200ms ease-out`. All internal links stagger in with `15ms` delay between each. Close on mouse-leave with `120ms` delay.

**Mega Menu — Worlds**
Four columns, each a card rather than a link list:
- Card height: `240px`
- Border: `1px solid #E8E8E8`
- Border-radius: `4px`
- Background: `#FFFFFF`
- Each card: World name in Clash Display 28px, one-line description in Satoshi 14px #6B6B6B, "Enter →" ghost CTA
- Top accent: a 4px top border in the World's accent colour (British Retro: amber `#F5A623`, American: red `#E63946`, Japanese: cherry `#FFB7C5`, World: emerald `#2ECC71`)
- Hover: card's top accent border expands to full left border (4px), background shifts to `#F7F7F7`, arrow animates right

**Mobile Navigation (below 1024px)**
- Hamburger icon (3 horizontal lines, 20px wide, 1.5px strokes, animates to × on open — the strokes rotate and cross)
- Full-screen white overlay drawer from the left (100vw, full height)
- Accordion sections: Shop, Worlds, etc. expand with smooth height animation
- Each top-level item: Clash Display, 28px — this is a mobile nav, not a list, let the type breathe
- Close button top-right: × in Satoshi 500
- "TRADE" at the bottom with a `1px solid #E8E8E8` top border separator
- Cart icon remains visible in mobile header

Output the complete Header, MegaMenu, and MobileNav components with all animations and responsive behaviour.

---

## PROMPT 3 — Homepage Hero Section

Build the homepage hero. This is the most important element of the entire site. It must be visually extraordinary. If it does not stop a scrolling thumb immediately, rebuild it.

**Concept: The Sweet Explosion — White Edition**

The hero is a white canvas with vivid colour explosions. The sweets are the colour story. The site is their gallery.

**Structure**
```
Height: 100svh (full viewport, no exceptions)
Background: #FFFFFF
Overflow: hidden
```

**Typographic Layer (foreground)**
The headline is the dominant visual element — not a logo, not a product image. The type commands the space.

```
Top position: vertically centred with a slight upward offset (~45% from top)
Headline: "START A SUGAR RIOT" — Clash Display, 800 weight
          Size: clamp(72px, 9.5vw, 152px)
          Colour: #0A0A0A
          Letter-spacing: -0.04em
          Line-height: 0.9
          The word "RIOT" receives the brand gradient as a text gradient:
          background: var(--gradient-brand); -webkit-background-clip: text; color: transparent;

Subheadline (below): "Premium confectionery from six continents."
          Satoshi Regular, 18px, #6B6B6B, normal tracking
          Margin-top: 32px

CTA row (below subheadline, margin-top: 48px):
  <Button variant="primary">Shop Now</Button>
  <Button variant="secondary">Explore Worlds</Button>
  Gap between: 16px
```

Headline entrance animation: word-by-word reveal (each word in `<span class="word-wrap" style="overflow:hidden">` containing `<span class="word">`). GSAP animates `.word` elements: `yPercent: 110 → 0, opacity: 0 → 1, stagger: 0.055, duration: 0.85, ease: power4.out, delay: 0.3`. The word "RIOT" animates last with a slight extra delay for emphasis.

**Ambient Layer — Floating Sweet Orbs**
16 absolutely-positioned circles distributed across the hero viewport. These are NOT behind the text — they exist in a layer between the background and the text, with the text sitting above them via z-index.

Each orb:
- Shape: circle (`border-radius: 50%`)
- Size: randomly between 48px and 140px
- Position: distributed around the viewport — some near edges, some mid-field. Not clustered in the centre (the centre is reserved for the headline).
- Fill: each orb has a solid or two-stop gradient fill. Cycle through these fills across the 16 orbs:
  `#FF3CAC` (magenta), `#FF8C42` (orange), `#FFD700` (yellow), `#784BA0` (ultraviolet), `#2B86C5` (deepsky), `#B8FF3C` (lime), `#FF6B6B` (coral), `#4ECDC4` (teal), `#FF3CAC → #784BA0` (gradient), `#FFD700 → #FF8C42` (warm gradient)
- Blur: orbs in the "background" have `filter: blur(8px)`, mid-depth have `blur(4px)`, foreground orbs have `blur(0)` — simulates depth of field
- Opacity: range from 0.7 to 1.0
- Continuous float animation (CSS keyframes): each orb has a unique `animation-duration` (5s–10s), `animation-delay` (0s–4s), infinite, alternate. Float path: `translateY(-18px) → translateY(18px)` with a slight X drift `translateX(-8px) → translateX(8px)`.

On scroll (GSAP ScrollTrigger, scrub: true):
The orbs scatter outward from their positions. Each orb gets a unique target — orbs in the upper half fly upward, lower half downward, left orbs go left, right orbs go right. The scatter distance is viewport-proportional (approximately 30–50% of viewport dimension). As the user scrolls past the hero, the orbs have dispersed and the next section is revealed cleanly. Use `gsap.to(orb, { x: targetX, y: targetY, opacity: 0, scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.5 } })` for each orb with unique target values.

**Grain Texture Overlay**
Over the entire hero section, apply a very subtle grain texture at 4% opacity using an SVG filter:
```html
<svg style="position:absolute;width:0;height:0">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
  </filter>
</svg>
<div style="position:absolute;inset:0;filter:url(#grain);opacity:0.04;pointer-events:none;z-index:5" />
```
This prevents the flat digital look and adds a subtle premium tactility.

**Scroll Indicator**
Bottom-centre of the hero:
- "SCROLL" in JetBrains Mono, 10px, 0.2em tracking, `#A0A0A0`
- An animated vertical line below it: `height: 0 → 40px` repeating pulse animation (1.8s ease-in-out infinite)
- Fades out completely by 80px scroll depth

**Performance**
No images in the hero. Purely CSS and JS. This should achieve LCP < 2.0s. The headline text is the LCP element — ensure it is not deferred.

Output the complete Hero component with all GSAP animations, Lenis integration, the orb scatter system, and scroll indicator.

---

## PROMPT 4 — Homepage: All Below-Fold Sections + Footer

Build all sections below the hero on the homepage. Every section follows the standard scroll-reveal animation (y: 50, opacity: 0 → y: 0, opacity: 1, power3.out, staggered children). Every section uses the `<SectionLabel>` component above its heading. Every section has a minimum `var(--section-y-lg)` top padding (160px desktop).

**Section 1 — Worlds Horizontal Scroll Carousel**
Full-width pinned horizontal scroll section using GSAP (as specified in the Design Bible):
- Section label above: "EXPLORE THE WORLDS ↗"
- Heading: "Four Worlds. Infinite Discovery." — Clash Display, display-lg scale, #0A0A0A
- Subheading: Satoshi Regular, 18px, #6B6B6B
- Four cards that scroll horizontally (GSAP pin + scrub):
  Each card: `560px × 400px`, border: `1px solid #E8E8E8`, border-radius: `4px`, overflow hidden
  - Top 4px border accent in world colour (amber / red / cherry pink / emerald)
  - Card background: `#FFFFFF`
  - World name: Clash Display, 36px, #0A0A0A
  - One-line description: Satoshi 16px, #6B6B6B
  - "Enter World →" ghost CTA — arrow animates right on hover
  - Background image placeholder area (200px at top of card, background: #F7F7F7)
  On hover: card border-color becomes the world's accent colour, background shifts to #FAFAFA

**Section 2 — New In Products**
- Section label: "JUST LANDED ↗"
- Heading: "New Arrivals"
- Three-column `<ProductCard>` grid — 3 columns desktop, 2 tablet, 1 mobile. NOT 4 columns.
- Cards use the ProductCard specification from the Design Bible exactly
- Below grid: a `<Divider>` then "View All New In →" as a ghost button, right-aligned

**Section 3 — The Lab AI Tools Teaser**
Background: `#F7F7F7` (the single off-white section — creates contrast without using colour)
Padding: `var(--section-y-lg)` top and bottom
- Section label: "ARTIFICIAL INTELLIGENCE ↗"
- Heading: "Sweets, Powered by Intelligence."
- Subheading: "Six AI tools that make finding your perfect sweets effortless."
- Three feature cards in a row (not all 6):
  Each card: white background, `1px solid #E8E8E8`, `border-radius: 4px`, padding `40px`, no shadow
  - Lucide-react icon at top (24px, #FF3CAC)
  - Tool name: Satoshi 600, 18px, #0A0A0A
  - One-line description: Satoshi Regular, 15px, #6B6B6B
  - "Try It →" in magenta, 13px, ghost style, arrow slides right on hover
  Featured tools: Sweet Finder Quiz | Nostalgia Decoder | Gift Concierge
- Below: "Explore The Lab →" primary button, centred

**Section 4 — Journal Editorial Teaser**
- Section label: "THE JOURNAL ↗"
- Heading: "From the Sugar Riot Journal"
- Three article cards in a row, each with:
  - Top image area: `240px` height, background `#F7F7F7` (placeholder for hero image)
  - Below image: category badge (small, uses the badge system with appropriate muted styling)
  - Article title: Satoshi 600, 20px, #0A0A0A, hover → magenta
  - Reading time: JetBrains Mono, 11px, #A0A0A0
  - Two-line excerpt: Satoshi Regular, 15px, #6B6B6B
  Placeholder articles:
  1. "TikTok's Most Viral Sweets of 2026" — Trending
  2. "The Ultimate Guide to Japanese KitKat Flavours" — World Guides
  3. "50 Retro Sweets You Forgot Existed" — Nostalgia
- "Read the Journal →" ghost button below, right-aligned

**Section 5 — B2B Trade Strip**
This is the single intentional dark contrast section:
- Background: `#0A0A0A` (obsidian)
- Padding: `80px var(--container-x)`
- Two-column layout (7-col / 5-col):
  Left: "In the trade?" — Clash Display, 44px, white. Below: "Premium wholesale pricing, dedicated accounts, next-day delivery." — Satoshi Regular, 16px, white at 65%.
  Right (flex end): `<Button variant="dark" style="border:1px solid rgba(255,255,255,0.25)">Apply for a Trade Account →</Button>`
- This is the only dark section on the page. It creates a full-stop contrast moment before the footer.

**Section 6 — Footer**
Background: `#0A0A0A`
Border-top: none (the B2B strip flows directly into the footer)
Padding: `80px var(--container-x) 48px`

Internal layout:
- Top row: "SUGAR RIOT" wordmark left (Clash Display, 20px, white), social icons right (Instagram, TikTok, Facebook, X — lucide-react, 20px, white at 60%, hover 100%)
- `1px solid rgba(255,255,255,0.1)` divider below top row, margin: `48px 0`
- 4-column link grid (Satoshi Regular, 14px, white at 60%, hover 100%):
  Column headings in JetBrains Mono, 10px, 0.15em tracking, uppercase, white at 35%
  - Shop: British Retro, American Candy, Japanese & Asian, World Sweets, New In, Best Sellers
  - Discover: Build Your Box, Gift Hampers, The Lab, The Journal
  - Company: About Us, Sustainability, Careers, Press
  - Trade: Trade Portal, Apply for Account, Trade Pricing, Contact
- Newsletter row below the link grid (margin-top 64px):
  Left: "Join the Sugar Riot." — Clash Display, 28px, white. "New arrivals, exclusive drops, and early access." — Satoshi 14px, white at 60%.
  Right: Email input (white border, white text, no fill — sharp) + "Join →" button variant dark
- Bottom bar: `1px solid rgba(255,255,255,0.08)` divider, then copyright + Privacy + Terms + Cookie Settings — all JetBrains Mono, 11px, white at 35%

Output all six sections and the footer assembled in the homepage page.tsx.

---

## PROMPT 5 — Shop, Category Pages & Product Card System

Build the shop architecture — the main shop page, category system, filter system, and product card.

**Product Card Component**
Build exactly to the ProductCard specification in the Design Bible above. Specific emphasis:
- `border-radius: 4px` on the card and image container — not 12px, not 16px, not 20px
- Card background `#FFFFFF` with `1px solid #E8E8E8` border — no coloured backgrounds
- "Quick Add" slides up from base of image: `translateY(100%) → 0`, background `rgba(10,10,10,0.90)`, white text, sharp corners (`border-radius: 0`)
- Price in Clash Display — NOT in a bubble or coloured pill, just text
- Brand label in JetBrains Mono — caps, muted, small
- The card does NOT have a box-shadow — the border IS the card boundary

**Main Shop Page (/shop)**
Hero strip (not a full-page hero — a contained banner, 240px tall):
- Background: `#F7F7F7`
- Heading: "The Sweet Vault" — Clash Display, display-md, #0A0A0A
- Subheading: "1,200+ products from six continents." — Satoshi, #6B6B6B

Below the hero strip — sticky filter bar (sticks to top of viewport when header is scrolled past):
```
Background: #FFFFFF, border-bottom: 1px solid #E8E8E8, padding: 16px var(--container-x)
Left: Active filter pills (pill shape — correct use: filter tags) each with × dismiss
      Pills: background #0A0A0A, text white, font JetBrains Mono 10px
Centre: "Filter" button (secondary variant) with active count badge
        Sort dropdown (Satoshi 13px, #0A0A0A)
Right: View toggle — grid icon / list icon, 20px lucide-react
       Product count: "48 of 340 products" — JetBrains Mono, 12px, #A0A0A0
```

Product grid: 3 columns desktop, 2 tablet, 1 mobile. 24px gutters.
Load More button (secondary variant) below grid — centred. Shows "Loading..." state.

**Filter Drawer**
Slides in from the right (400px wide desktop, full-width mobile):
- Background: `#FFFFFF`
- Border-left: `1px solid #E8E8E8`
- Border-radius: `0` on the drawer itself — architectural panel
- Header: "Filter Products" — Satoshi 600, 18px — plus "Clear All" ghost link right-aligned — plus × close
- `1px solid #E8E8E8` divider below header

Filter groups as accordions (chevron rotates on open):
- Group heading: Satoshi 500, 14px, #0A0A0A, uppercase, 0.04em tracking
- BY REGION — checkboxes with flag prefix
- BY TYPE — checkboxes
- BY DIET — checkbox list with inline `<Badge>` per item
- BY OCCASION — checkboxes
- PRICE RANGE — dual-handle range slider. Track: `#E8E8E8`. Active range: `#FF3CAC`. Handles: `#0A0A0A` circle.
- BRAND — text search input + scrollable checkbox list

Footer of drawer: "Apply Filters" primary button + "Clear All" ghost button. Sticky at bottom of drawer.

**Category Page Template — /shop/[category]**
Reusable template accepting: categoryName, categoryDescription, subcategories[], products[].
- Page header: `<SectionLabel>` + Clash Display heading + Satoshi subheading — left-aligned, NOT centred
- Breadcrumb: Home › Shop › [Category] — JetBrains Mono, 11px, #A0A0A0, links underline on hover
- Filter bar (same as shop)
- Product grid (same component, 3 columns)
- SEO: dynamic metadata, BreadcrumbList JSON-LD

**Dietary Filter Pages — /shop/dietary/[type]**
Same template. Dietary-specific headline messaging:
- `/vegan` — "Vegan Sweets. Zero Compromise."
- `/halal` — "Halal Certified. Every Product."
- `/gluten-free` — "Gluten-Free. Full Flavour."

Output: ProductCard component, shop page, filter drawer, category template, two example dietary pages.

---

## PROMPT 6 — Product Page

Build the individual product page at `/product/[slug]`. This page must convert. Every element is purposeful.

**Layout — Two Column (desktop)**
55% left — product media. 45% right — product information. Stacked on mobile.
Outer padding: `var(--container-x)`. Top padding from header: `72px + 48px = 120px`.

**Left Column — Product Media**
Primary image container:
- Background: `#F7F7F7`
- Border: `1px solid #E8E8E8`
- Border-radius: `4px`
- Aspect ratio: `1 / 1`
- The image fills the container, `object-fit: cover`

Thumbnail row below (6 thumbnails max):
- Each: `80px × 80px`, border: `1px solid #E8E8E8`, border-radius: `4px`, cursor: pointer
- Active thumbnail: `border-color: #FF3CAC` (magenta border = selected)
- Click → swaps primary image with a cross-fade transition (opacity 0→1, 0.2s)

Lightbox: clicking the primary image opens a full-screen overlay (background `rgba(0,0,0,0.92)`) with the image centred and a × close button.

**Right Column — Product Information**
Top to bottom:
1. Breadcrumb — JetBrains Mono, 11px, #A0A0A0
2. Brand name — JetBrains Mono, 11px, magenta, uppercase, 0.12em tracking, links to brand page
3. Product name — Clash Display, display-md scale, #0A0A0A, tight tracking
4. `<Badge>` row — dietary badges if applicable, left-aligned
5. Star rating + review count link — five stars (custom SVG or lucide Star icon), Satoshi 14px
6. Price — Clash Display, 32px, #0A0A0A. If on sale: original struck through in #A0A0A0, sale price in magenta, `<Badge variant="sale">` inline
7. Product description — Satoshi Regular, 16px, #6B6B6B, line-height 1.7, 3 lines max visible (expandable)
8. `1px solid #E8E8E8` divider
9. Variant selector (if applicable) — pill buttons for each size/variant. At rest: border `#E8E8E8`, white bg. Selected: border `#0A0A0A`, bg `#0A0A0A`, text white.
10. Quantity selector — `−` / number input / `+`. Borders `1px solid #E8E8E8`. Sharp corners. Width `120px`.
11. `margin-top: 32px`. "Add to Cart" — primary Button, full width. On click: transitions label to "Added ✓" + checkmark icon, 2s then resets. Cart icon in header increments.
12. "Add to Wishlist" — ghost button, heart icon from lucide-react, below
13. Delivery strip: `border-top: 1px solid #E8E8E8; border-bottom: 1px solid #E8E8E8; padding: 20px 0; margin: 32px 0`
    Three items in a row: "Free over £25 🚚" | "Next day available ⚡" | "30-day returns ↩"
    Each: JetBrains Mono, 11px, #6B6B6B, uppercase, 0.1em tracking
14. Accordions: Product Details | Delivery & Returns | Reviews
    Accordion trigger: Satoshi 500, 15px, #0A0A0A. Chevron rotates on open. Divider between each.

**Below the Fold**
"You Might Also Like" — `<SectionLabel>` + "Related Products" heading + horizontal scroll carousel of 4 ProductCards.
"From the Same Brand" — same treatment if applicable.

**Structured Data**
JSON-LD Product schema — name, description, image, brand, offers (price, currency GBP, availability, url), aggregateRating, sku.

Output the complete product page. Use a placeholder product object for now — Shopify connection comes in Prompt 13.

---

## PROMPT 7 — The Four Worlds: Immersive Landing Pages

Build the four World landing pages. These are the biggest design differentiator in the site. Each World must feel like a distinct editorial universe — different accent colour, different mood — while remaining unmistakably Sugar Riot: white canvas, Clash Display headlines, sharp lines.

**Shared World Page Template**
Structure (all four Worlds use this structure):
1. Full-viewport hero (100svh) — world-specific (see below)
2. Editorial intro block — two column: large pull quote (Clash Display italic, 32px) left / descriptive paragraph (Satoshi, 18px, #6B6B6B) right
3. "Best of [World]" — `<SectionLabel>` + heading + horizontal scroll of 6 ProductCards
4. Alternating image/text editorial blocks (3 blocks): image left/text right, text left/image right, image left/text right — each image placeholder is a `280px × 380px` container, background `#F7F7F7`, border `1px solid #E8E8E8`
5. Full product category grid (3 columns)
6. "Next World →" full-width strip in white with a large Clash Display world name and CTA

All sections: `var(--section-y-lg)` padding, standard scroll-reveal animations.

**World 1: British Retro — /worlds/british-retro**
Accent colour: `#D4890A` (warm amber)
Hero: White background. Headline: "60 Years of Corner Shop Nostalgia" — Clash Display, display-xl, #0A0A0A, word-by-word reveal. The word "Nostalgia" in amber. Below: "From sherbet fountains to flying saucers — the sweets that built Britain." A very subtle repeating halftone dot pattern (4px dots, 2% opacity, #D4890A) as the hero background texture — printed-paper nostalgic feel.
Decade navigation tabs: 60s | 70s | 80s | 90s | 00s — JetBrains Mono, active tab has amber underline and amber text.
Top 4px accent border on the page (under the header, full width): amber `#D4890A`.

**World 2: American Candy — /worlds/american-candy**
Accent colour: `#E63946` (bold red)
Hero: White background. Headline: "Stars, Stripes & Sugar Rushes" — Clash Display, display-xl. The words "Stars" and "Sugar" in red, "Stripes" in `#2B86C5` (deep sky blue — intentional Americana). Bold and high-contrast.
Background texture: very subtle diagonal stripes (1px lines, 45°, 1.5% opacity, #E63946) — like a subtle star-spangled pattern. Barely visible.
Below the hero: a "WHY WE CAN'T GET THIS IN THE UK" editorial banner — white background, red left border (4px), a teaser paragraph about import exclusivity. This is a content hook that drives engagement.
Top accent border: red.

**World 3: Japanese & Asian — /worlds/japanese-asian**
Accent colour: `#E8748A` (cherry blossom)
Hero: White background — the cleanest and most minimal of the four heroes. Headline: "From Tokyo to Seoul — One Bite at a Time" — Clash Display, display-xl, very tight tracking. The phrase "One Bite at a Time" in cherry blossom pink. Below headline: a single horizontal ink-stroke line (SVG, hand-drawn feel, black, 2px) that animates in left to right on load (SVG stroke-dashoffset animation, 1.2s ease).
No background texture on this hero — the whitespace IS the design. Breathing room is the Japanese aesthetic. 
Korean snacks sub-section at `/worlds/japanese-asian/korean` — linked from this page as a card.
Top accent border: cherry blossom.

**World 4: World Sweets — /worlds/world-sweets**
Accent colour: `#27AE60` (emerald)
Hero: White background. Headline: "Six Continents. One Obsession." — Clash Display, display-xl. "One Obsession." in emerald gradient (emerald → deepsky). A subtle world map outline (simplified SVG, stroke only, #E8E8E8, no fill) as a large background element behind the headline — like a watermark. It rotates very slowly (CSS, 60s complete rotation, barely perceptible — creates life without distraction).
Country spotlight cards below the hero intro: a 4-column grid of small geographic cards (flag emoji, country name, "X products →" in JetBrains Mono).
Top accent border: emerald.

**Worlds Hub — /worlds**
A single long-scroll hub page with all four Worlds stacked. Each World occupies `80vh`. As the user scrolls, the next World card slides up beneath the current one using GSAP ScrollTrigger stacking. Each World section: its headline, accent colour top border, a one-sentence description, and "Enter →" CTA. On the hub page, all four backgrounds are `#F7F7F7` — the individual World pages have the richer treatment.

Output all four World pages, the shared World template component, and the Worlds hub.

---

## PROMPT 8 — Build Your Box: Interactive Pick & Mix Builder

Build the "Build Your Box" experience at `/build-your-box`. This is a key conversion page. Make it tactile, clear, and satisfying to use.

**Page Header (not a hero)**
Padding top: `120px` (from fixed header). Container width.
`<SectionLabel text="INTERACTIVE ↗" />`
Heading: "Build Your Riot Box" — Clash Display, display-md, #0A0A0A
Subheading: "Pick your sweets. Choose your size. We'll do the rest." — Satoshi Regular, 18px, #6B6B6B
`1px solid #E8E8E8` divider below, `margin-top: 48px`

**Split Layout**
Below the header, full-width, sticky two-column panel:
- Left panel: `65%` width — the product picker
- Right panel: `35%` width, `position: sticky, top: 72px` — the live box summary
- Divider: `1px solid #E8E8E8` vertical line between panels
- Both panels: `min-height: calc(100vh - 72px)`; right panel sticky within the left's scroll container

**Left Panel — Box Size Selector**
Four option cards in a row at top of left panel:
- Each card: white background, `1px solid #E8E8E8`, `border-radius: 4px`, padding `20px 24px`
- Selected: `border-color: #0A0A0A` (dark border = selected — clean, no magenta here, selection = commitment)
- Box name: Satoshi 600, 15px, #0A0A0A
- Weight: JetBrains Mono, 12px, #A0A0A0
- Price: Clash Display, 22px, #0A0A0A
Options: Taster (250g, £8.99) | Classic (500g, £14.99) | Riot Box (1kg, £24.99) | Mega Box (2kg, £44.99)

Below the size selector: fill indicator bar
`border: 1px solid #E8E8E8; border-radius: 2px; height: 4px; background: #F7F7F7`
Fill: `background: #0A0A0A; transition: width 0.4s ease` — grows as weight is added
Weight label: JetBrains Mono, 11px, #6B6B6B — "350g / 1000g"

**Left Panel — Category Tabs**
Horizontal scrollable tab row:
`border-bottom: 1px solid #E8E8E8; margin-top: 32px`
Tabs: All | British Retro | American | Japanese & Asian | World Sweets | Chocolate | Fizzy | Gummies
Tab: Satoshi 500, 13px, uppercase, 0.04em tracking, #6B6B6B, `padding: 12px 20px`
Active tab: #0A0A0A, `border-bottom: 2px solid #0A0A0A` (offset by -1px to sit on the divider line)

**Left Panel — Product Selection Grid**
3 columns desktop, 2 mobile. 16px gutters.
Each selection card (more compact than a full ProductCard):
- White background, `1px solid #E8E8E8`, `border-radius: 4px`
- Image: square, `border-radius: 4px` top corners only, background `#F7F7F7`, `100% width`
- Product name: Satoshi 500, 13px, #0A0A0A, 2-line max
- Price per 100g: JetBrains Mono, 11px, #A0A0A0
- Add button: a round `36px` circle button, background `#0A0A0A`, `+` icon in white (lucide-react Plus)
  - When item is in the box: button transforms into `−` `[count]` `+` controls inline. The card gets `border-color: #FF3CAC` (magenta = in your box).
  - Count label between: JetBrains Mono, 13px, #0A0A0A

Over-capacity toast (if trying to add over the box weight limit):
Fixed toast, bottom-centre, `background: #0A0A0A, color: white, border-radius: 2px, padding: 16px 24px`
"Box is full — upgrade your size or remove something." with "Upgrade" ghost link in magenta.

**Right Panel — Live Box Summary**
`padding: 40px 32px`
Header: `<SectionLabel text="YOUR BOX ↗" />` + box size name

Fill visualisation: same bar as left panel, mirrored
`border: 1px solid #E8E8E8; border-radius: 2px; height: 6px; margin-bottom: 32px`

Selected items list:
- Each item: `display: flex, align-items: center, gap: 12px, padding: 12px 0, border-bottom: 1px solid #F0F0F0`
- Thumbnail: `48px × 48px`, `border-radius: 4px`, `border: 1px solid #E8E8E8`
- Name: Satoshi 500, 14px, #0A0A0A. Weight: JetBrains Mono 11px, #A0A0A0
- Quantity: same `−/count/+` controls, compact. × remove button, 16px, #A0A0A0
- New items: animate in from right (`translateX(20px) → 0, opacity 0→1, Framer Motion`)
- Removed items: animate out to right (`translateX(20px), opacity →0`)

Empty state: "Your box is empty." — Satoshi Regular, 15px, #A0A0A0. A simple minimal SVG outline of an open box (10-15 lines of SVG — geometric, not cartoon).

Summary totals:
```
border-top: 1px solid #E8E8E8; padding-top: 24px; margin-top: 16px
Total weight: JetBrains Mono 12px, #6B6B6B — right aligned value
Item count:   JetBrains Mono 12px, #6B6B6B — right aligned value
──────────────── (divider)
Total price:  Clash Display, 28px, #0A0A0A — right aligned
```

"Add Gift Message" — expandable section, chevron, reveals a plain textarea (border `1px solid #E8E8E8`, sharp, no radius, Satoshi Regular)
"Add to Cart" — `<Button variant="primary">` full width, large. Below: "or Save This Box" ghost link.

Output the complete Build Your Box page with all state management (React useState), animations, and the split sticky panel layout.

---

## PROMPT 9 — The Lab: AI-Powered Tools

Build The Lab at `/the-lab` with two fully functional Claude-powered tools and four coming-soon stubs.

**The Lab Hub — /the-lab**
This page has a subtle visual difference from the rest of the site to signal it is a different zone:
- Background: `#FFFFFF` (same) but a very faint grid pattern overlay (20px grid, 1px lines at 3% opacity, #0A0A0A) — like engineering paper. Subtle. Barely there.
- `<SectionLabel text="AI TOOLS ↗" />`
- Heading: "Welcome to the Lab." — Clash Display, display-lg, #0A0A0A
- Subheading: "Six tools. Powered by AI. Built for sweet discovery."

Tool cards grid — 3 columns desktop, 2 tablet, 1 mobile:
Each card: white background, `1px solid #E8E8E8`, `border-radius: 4px`, `padding: 40px`
- Lucide-react icon: `28px`, `#FF3CAC` for live tools, `#D0D0D0` for coming soon
- Tool name: Satoshi 600, 18px, #0A0A0A (or #A0A0A0 for coming soon)
- Description: Satoshi Regular, 14px, #6B6B6B
- CTA: "Try It →" ghost magenta for live / "Notify Me" ghost muted for coming soon
- Live badge: `<Badge variant="new">LIVE</Badge>` top-right of card (absolute positioned)
- Coming soon: `<Badge>Coming Soon</Badge>` — grey, muted

Live: Sweet Finder Quiz | Nostalgia Decoder
Coming Soon: Gift Concierge | Flavour Match AI | World Explorer | Trade Calculator

**Tool 1 — Sweet Finder Quiz — /the-lab/sweet-finder**
Multi-step (5 steps) with smooth Framer Motion AnimatePresence transitions between steps.
Progress indicator: a step bar at the top — `border: 1px solid #E8E8E8`, filled segments in `#0A0A0A`, thin, sharp (`border-radius: 2px, height: 3px`). Segment count = step count.

Step layout: centred, max-width 640px, generous vertical padding.
Step number: JetBrains Mono, 11px, #A0A0A0, "STEP 1 OF 5 ↗"
Step question: Clash Display, display-md, #0A0A0A
Answer options: large choice cards in a 2×2 grid. White background, `1px solid #E8E8E8`, `border-radius: 4px`, `padding: 28px`. Click selects: border becomes `2px solid #0A0A0A`, background `#F7F7F7`. Hover: border-color `#C0C0C0`.

Step 1: "What kind of sweet lover are you?" — Old School Traditionalist | Global Explorer | Sugar Rush Seeker | Sophisticated Connoisseur
Step 2: "Which flavours call to you?" (multi-select) — Fruity | Chocolate | Sour | Mint | Caramel | Spicy | Floral | Umami
Step 3: "Any dietary requirements?" (toggle switches) — Vegan | Vegetarian | Halal | Gluten-Free | No Preference
Step 4: "What's your budget?" — Under £10 | £10–£20 | £20–£40 | No Limit
Step 5: "Which world excites you most?" — British Retro | American Candy | Japanese & Asian | World Sweets

Loading state (after step 5): an animated progress bar fills over 2 seconds. Label: "SEARCHING THE VAULT..." — JetBrains Mono, 11px, #6B6B6B. No spinner. Just the bar.

**API Route — /api/claude/sweet-finder (POST)**
Accepts quiz answers. Calls Anthropic API (model: `claude-sonnet-4-20250514`, max_tokens: 1000).
System prompt:
```
You are the Sugar Riot Sweet Finder AI. Based on customer quiz answers, recommend 6 specific products from Sugar Riot's range. The range includes: British retro sweets (sherbet fountains, cola bottles, flying saucers, pear drops, milk bottles, candy shrimps, gobstoppers), American candy (Reese's Peanut Butter Cups, Warheads, Jolly Ranchers, Nerds, Pop Rocks, Twinkies, Airheads), Japanese & Asian sweets (Pocky, Hi-Chew, Mochi, Kasugai gummies, Pepero, Meiji chocolate), World Sweets (Dubai chocolate, Mexican tamarind candy, Haribo Goldbären, Belgian truffles, Turkish delight). Return ONLY a valid JSON object with no preamble, no markdown: { "recommendations": [ { "name": string, "region": string, "description": string, "reason": string, "price_estimate": string } ] }
```
Parse the JSON response. Display as a 3×2 recommendation grid using ProductCard layout (with "reason" text shown beneath each card as a small magenta-accented quote).

**Tool 2 — Nostalgia Decoder — /the-lab/nostalgia-decoder**
Minimal, focused, single-purpose interface. Centred, max-width 600px.
`<SectionLabel text="NOSTALGIA DECODER ↗" />`
Heading: "Describe it. We'll find it." — Clash Display, display-md
Subheading: "The pink fizzy one with sherbet inside. The chewy square with the picture through the middle. We know what you mean."
Satoshi Regular, 18px, #6B6B6B

Textarea: full width, `min-height: 120px`, `border: 1px solid #E8E8E8`, `border-radius: 4px`, `padding: 20px`, Satoshi Regular 16px. Focus: `border-color: #0A0A0A`. No shadow.
Placeholder: "Describe what you remember..."
Submit: `<Button variant="primary">Decode It →</Button>` full width, margin-top 16px.

Loading state: "SEARCHING THE SUGAR ARCHIVES..." — JetBrains Mono, 11px, #A0A0A0. An animated scanning line (a 1px horizontal magenta line that moves top-to-bottom over a bordered rectangle, CSS animation, 1.5s infinite — like a vintage computer scanning).

**API Route — /api/claude/nostalgia-decoder (POST)**
System prompt:
```
You are Sugar Riot's Nostalgia Decoder, an expert in British confectionery history from the 1960s to 2000s. Identify the sweet being described from childhood memory. Return ONLY a valid JSON object: { "best_match": { "name": string, "description": string, "era": string, "still_available": boolean, "confidence": "high"|"medium"|"low" }, "alternatives": [ { "name": string, "reason": string }, { "name": string, "reason": string } ] }
```

Result display:
"MATCH FOUND" — JetBrains Mono, 11px, magenta, 0.15em tracking. Animates in.
Sweet name: Clash Display, display-md, #0A0A0A. Animates in with word reveal.
Era badge: `<Badge>1980s</Badge>` (dark badge variant)
Description: Satoshi Regular, 16px, #6B6B6B
If still available: `<Button variant="primary">Find It in the Vault →</Button>`
Alternatives section below a divider: "Not quite right? Try these:" + two alternative cards (border `1px solid #E8E8E8`, compact, name + reason text)
Share prompt below: "Did we get it right?" + Twitter/share ghost CTA.

Output the Lab hub, both full tool pages with API routes, and the four coming-soon card stubs on the hub page.

---

## PROMPT 10 — B2B Trade Portal

Build the Trade Portal. It shares the Sugar Riot design DNA — white canvas, Clash Display headlines, sharp lines — but uses Deep Sky `#2B86C5` as the accent colour instead of magenta, signalling a professional shift in context.

**Trade Landing Page — /trade**
Header: reuse the main site header but replace magenta accent references with Deep Sky. Add a "TRADE" pill badge next to the wordmark (JetBrains Mono, 10px, white on deepsky, pill shape — correct use of pill shape as a status indicator).

Hero: 100svh, white background. Two-column layout (6/6 split). Left column:
`<SectionLabel text="WHOLESALE ↗" />` in Deep Sky (not magenta)
Heading: "The UK's Most Premium Sweet Supplier — Built for Business." — Clash Display, display-lg, #0A0A0A, tight tracking. The word "Premium" in Deep Sky.
Subheading: Satoshi Regular, 18px, #6B6B6B.
CTA: `<Button variant="primary" style="background:#2B86C5; color:#fff">Apply for a Trade Account →</Button>` + "Already have an account? Sign In" ghost link below.
Right column: a clean abstract placeholder (a simple geometric composition with three stacked rectangles in varying widths and deep sky tones — representing shelving/display units — CSS-drawn, no images).

Stats bar (below hero, full width, `background: #F7F7F7, border-top: 1px solid #E8E8E8, border-bottom: 1px solid #E8E8E8`):
Four stats in a row. Dividers: `1px solid #E8E8E8`.
Each: number in Clash Display 40px Deep Sky, label in JetBrains Mono 11px #6B6B6B.
Stats: "3,000+ Products" | "Next Day Delivery" | "No Min. — Gold Tier" | "Dedicated Manager"

Pricing table: three columns — Bronze | Silver | Gold.
Each tier card: white background, `1px solid #E8E8E8`, `border-radius: 4px`, `padding: 48px 40px`.
Silver: `border: 2px solid #2B86C5` (double weight border = recommended). `<Badge>Most Popular</Badge>` (deep sky background, white text) absolute top-right.
Tier header: tier name in Clash Display 28px. Tier colour accent: Bronze `#CD7F32`, Silver `#2B86C5`, Gold `#C9A84C`.
Discount: `font-family: Clash Display, 56px, colour = tier accent` — bold number, then "% OFF RRP" in JetBrains Mono 12px.
Min. monthly, min. order, features list: Satoshi Regular 15px, #6B6B6B. Feature items with a checkmark icon (lucide-react Check, 16px, tier accent colour).
CTA at bottom of each card: `<Button variant="secondary">Apply for [Tier] Account</Button>` with Deep Sky border instead of black.

**Trade Application Form — /trade/apply**
Multi-step form (3 steps). Progress: step bar as in The Lab (thin, 3px, sharp, #2B86C5 fill).
All inputs: `border: 1px solid #E8E8E8`, `border-radius: 4px` (forms get slightly more radius — `4px` is appropriate), Satoshi Regular 16px, `padding: 14px 16px`. Focus: `border-color: #2B86C5`.
Labels: Satoshi 500, 13px, #0A0A0A, uppercase, 0.04em tracking. `margin-bottom: 8px`.

Step 1 — Business Details: Business name, Trading name, Companies House number (optional label), VAT number (optional label), Business type dropdown (Independent Retailer | Chain | Online Only | Café / Food Service | Events | Wholesaler | Other).
Step 2 — Contact & Delivery: Full name, Email, Phone, Business address (Address line 1, line 2, City, Postcode), Preferred delivery days (Mon–Fri checkbox row).
Step 3 — Account Preferences: Estimated monthly spend dropdown, Primary product categories (multi-select checkboxes), How did you hear about us dropdown.

"Next Step →" primary button (deep sky) at each step. "← Back" ghost link.
Submission: full-page success state — green checkmark icon (lucide-react), "Application Received." Clash Display, "We'll be in touch within 1 business day." Satoshi.

**Trade Dashboard — /trade/dashboard** (authenticated, use mock data)
Sidebar: `width: 240px, border-right: 1px solid #E8E8E8, background: #FFFFFF`
Logo top, then nav items: Satoshi 500, 14px, #6B6B6B. Active: #0A0A0A + left `3px solid #2B86C5`. Icons from lucide-react.
Nav items: Dashboard | Products | Orders | Invoices | Account | Support

Main content: `padding: 40px`
Account tier badge (top right): Deep Sky background, white text, Clash Display, pill.
Four stat cards row: same clean card system (white, 1px border, 4px radius, 32px padding).
Stats: Orders This Month | Spend This Month | Current Tier Discount | Avg. Order Value — numbers in Clash Display, labels in JetBrains Mono.

Recent orders table: full-width, `border: 1px solid #E8E8E8, border-radius: 4px`.
Table header: JetBrains Mono 11px, #A0A0A0, uppercase, 0.12em tracking, background `#F7F7F7`, `border-bottom: 1px solid #E8E8E8`.
Columns: Order # | Date | Items | Status | Total | Action.
Rows: Satoshi Regular 15px, `border-bottom: 1px solid #F0F0F0`. Status as `<Badge>`.
"View All Orders →" ghost link below table.

Quick Reorder: `<SectionLabel text="QUICK REORDER ↗" />` + compact product row (3 items, each with thumbnail + name + case price + "Reorder" secondary button).

**Bulk Order Builder — /trade/products**
Same filter bar and product grid as the retail shop, but with trade-specific data columns:
ProductCard trade variant shows: case price (Clash Display), RRP, case quantity (JetBrains Mono), margin % (badge in green for good margin).
"Add Case" button instead of "Add to Cart".

Persistent order summary footer bar: `position: fixed, bottom: 0, left: 0, right: 0, height: 72px, background: #0A0A0A, border-top: 1px solid rgba(255,255,255,0.1)`. Shows: case count | total weight | subtotal ex. VAT | subtotal inc. VAT | "Place Order →" button (deep sky).

Output the trade landing page, application form, dashboard, and bulk order builder.

---

## PROMPT 11 — Sanity v3 CMS Schema

Build the complete Sanity v3 content layer.

**Setup**
Install and configure Sanity v3. Create `sanity.config.ts` at the project root. Embed the Sanity Studio at `/studio` using Next.js embedded studio (App Router compatible). Set up `/lib/sanity/client.ts`, `/lib/sanity/queries.ts`, `/lib/sanity/types.ts`.

**Schema Definitions — build all of these**

`product` (document): title, slug (auto-generated from title), sku, brand (reference → brand), shortDescription (text, max 200 chars), description (array — portable text with rich text, images, callouts), images (array of images — first is primary), price (number), salePrice (number, optional), weight (number — grams), category (reference → productCategory), region (string, enum: `british-retro | american | japanese-asian | world`), dietary (array of string enum: `vegan | vegetarian | halal | gluten-free | sugar-free | dairy-free`), occasion (array of string enum: `birthday | valentines | easter | christmas | halloween | thank-you | get-well`), inStock (boolean, default true), isNewIn (boolean), isBestSeller (boolean), isLimitedEdition (boolean), countryOfOrigin (string), allergens (text), ingredients (text), wholesalePrice (number), caseQuantity (number), minimumOrderQty (number, default 1), relatedProducts (array of references → product, max 6), seoTitle (string, max 60), seoDescription (string, max 155).

`brand` (document): name, slug, logo (image), countryOfOrigin, foundedYear (number), shortBio (text, max 200 chars), fullBio (portable text), heroImage (image), featuredProducts (array, references → product, max 8), seoTitle, seoDescription.

`productCategory` (document): name, slug, description (portable text), heroImage, parentCategory (reference → productCategory, optional — allows subcategories), displayOrder (number), seoTitle, seoDescription.

`world` (document): name (string enum: `british-retro | american-candy | japanese-asian | world-sweets`), slug, heroHeadline, heroSubheadline, accentColour (hex string), editorialIntro (portable text), featuredProducts (array, references → product), sections (array of block objects — each block has type: `image-text | product-carousel | editorial-card`), seoTitle, seoDescription.

`journalPost` (document): title, slug, publishedAt (datetime), category (string enum: `nostalgia | world-guides | trending | gift-guides | dietary | trade`), heroImage, excerpt (text, max 200 chars), body (portable text — full rich text with inline images, pull quotes, product embeds), tags (array of strings), readTimeMinutes (number), relatedProducts (array, references → product, max 4), seoTitle, seoDescription.

`siteSettings` (singleton document): siteName, siteTagline, socialLinks (object: instagram, tiktok, facebook, x — all strings), metaDefaults (object: title, description, ogImage), announcementBar (object: text, link, isActive, expiresAt), tradePricingTiers (array: name, discountPercent, minimumMonthlySpend, minimumOrderValue, features array of strings).

`page` (document — for flexible CMS-managed pages): title, slug, sections (array of flexible blocks: hero, text-block, product-grid, cta-strip, image-text).

**GROQ Queries — /lib/sanity/queries.ts**
Write typed GROQ queries for:
- `getAllProducts(filters?)` — optional filters: region, category, dietary, occasion, inStock. Returns slim product projection (not full portable text).
- `getProductBySlug(slug)` — full product with all fields and populated references.
- `getProductsByCategory(categorySlug)` — slim projection.
- `getNewInProducts(limit)` — where isNewIn is true.
- `getBestSellers(limit)` — where isBestSeller is true.
- `getAllBrands()` — slim: name, slug, logo.
- `getBrandBySlug(slug)` — full.
- `getWorldBySlug(slug)` — full.
- `getJournalPosts(limit, category?)` — slim projection with heroImage.
- `getJournalPostBySlug(slug)` — full with body.
- `getSiteSettings()` — full.

**Type Definitions — /lib/sanity/types.ts**
Export TypeScript interfaces: `Product`, `Brand`, `ProductCategory`, `World`, `JournalPost`, `SiteSettings`. Use `SanityImageSource` for image fields. All optional fields marked `?`. Include a `SanitySlug` type alias.

Output the complete `sanity.config.ts`, all schema files in `/sanity/schemas/`, the queries file, and the types file.

---

## PROMPT 12 — SEO Infrastructure & Technical Layer

Implement the full SEO and performance infrastructure. Every public page must meet the requirements below.

**Metadata — /lib/seo/metadata.ts**
A `generateSugarRiotMetadata(options)` helper that returns a Next.js 15 `Metadata` object:
- title: `"${pageTitle} | Sugar Riot — Premium Online Sweet Shop"` (max 60 chars for pageTitle)
- description: dynamically passed, max 155 chars
- canonical: always set
- robots: `index, follow` for all public pages; `noindex, nofollow` for `/trade/dashboard`, `/trade/orders`, `/trade/invoices`, `/studio`
- openGraph: title, description, image, `site_name: "Sugar Riot"`, type (`product` for PDPs, `article` for journal, `website` for all others)
- twitter: `card: "summary_large_image"`, `site: "@sugarriot"`

Apply to: homepage, shop, all category pages, all PDPs, all World pages, journal index, journal posts, Lab hub, Lab tools, trade landing page.

**JSON-LD Structured Data Components**
Build as server components rendering `<script type="application/ld+json">`:

`<ProductSchema>` — `@type: Product`, name, description, image array, brand (`@type: Brand`), offers (`@type: Offer`, price, `priceCurrency: "GBP"`, availability as schema URL, url), aggregateRating (if reviews > 0), sku.

`<BreadcrumbSchema>` — `@type: BreadcrumbList`, itemListElement array with position, name, item (URL).

`<ArticleSchema>` — `@type: Article`, headline, image, author, publisher (`@type: Organization`, name: "Sugar Riot", logo), datePublished, dateModified.

`<FAQSchema>` — `@type: FAQPage`, mainEntity of `@type: Question` with `acceptedAnswer`.

`<OrganizationSchema>` — in root layout, sitewide. `@type: Organization`, name: "Sugar Riot", url, logo, sameAs (social profile URLs array), contactPoint.

**Dynamic Sitemaps — Next.js Route Handlers**
`/sitemap.xml` — index sitemap pointing to sub-sitemaps.
`/sitemaps/products.xml` — all product URLs, `changefreq: weekly`, `priority: 0.8`, `lastmod` from Sanity `_updatedAt`.
`/sitemaps/categories.xml` — all category, region, dietary filter pages. `priority: 0.9`.
`/sitemaps/worlds.xml` — all four World pages. `priority: 0.9`.
`/sitemaps/journal.xml` — all journal posts with `lastmod`. `priority: 0.7`.
`/sitemaps/brands.xml` — all brand pages. `priority: 0.6`.
`/sitemaps/pages.xml` — homepage `priority: 1.0`, trade landing, about, contact. `priority: 0.8`.

Each sitemap route handler fetches slugs from Sanity at request time (ISR with 24h revalidation).

**robots.txt — Route Handler**
Allow all public routes. Disallow: `/trade/dashboard`, `/trade/orders`, `/trade/invoices`, `/studio`, `/api/`.
Sitemap: `https://sugarriot.co.uk/sitemap.xml`.

**Image Optimisation**
- All images: `next/image` with explicit `width` and `height`
- Above-fold / LCP images: `loading="eager"`, `priority={true}`
- Below-fold: `loading="lazy"` (Next.js default)
- Configure `next.config.js` image domains: `cdn.sanity.io`, `cdn.shopify.com`
- Add `<link rel="preconnect" href="https://cdn.sanity.io" />` in root layout `<head>`

**Internal Linking Architecture**
On every product page, ensure the following `<a>` tags exist in the rendered HTML (in breadcrumb, tags, or "Filed Under" section):
- Link to its `productCategory` page
- Link to its `world/region` page
- Link to its `brand` page
- Link to any applicable `/shop/dietary/[type]` page

**Dynamic OG Images — /api/og**
Using `@vercel/og` (ImageResponse):
- Products: product name (Clash Display, large, black on white) + price + "sugarriot.co.uk" in JetBrains Mono bottom-right. A magenta left-border stripe (16px wide) on the left edge.
- Journal: article title + category badge + "The Sugar Riot Journal" label bottom-left. White background.
- Category/World pages: category name large + world accent colour top stripe.
All OG images: 1200×630, white background (`#FFFFFF`), brand fonts embedded.

**Environment Variables — document in `.env.example`**
```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_TOKEN=
ANTHROPIC_API_KEY=
NEXT_PUBLIC_BASE_URL=https://sugarriot.co.uk
```

Output the metadata helper, all structured data components, all sitemap route handlers, robots.txt handler, OG image route, and the updated `.env.example`.

---

## PROMPT 13 — Shopify Storefront API Integration & Cart

Connect the Shopify Storefront API for cart, checkout, and product data. Headless: Next.js is the front end, Shopify handles inventory, cart, checkout, and payments.

**Shopify Client — /lib/shopify/client.ts**
Typed Storefront API client using `graphql-request` or `@shopify/storefront-api-client`.
Endpoint: `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`
Header: `X-Shopify-Storefront-Access-Token`.
Export a `shopifyFetch<T>` helper that wraps queries with error handling.

Wrap in demo mode: if `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` is not set, return mock data from `/lib/shopify/mock-data.ts`. This allows the site to run and demo without live Shopify credentials.

**GraphQL Queries — /lib/shopify/queries.ts**
```graphql
GET_PRODUCTS — id, title, handle, description, priceRange{minVariantPrice{amount,currencyCode}},
               compareAtPriceRange, images(first:5){edges{node{url,altText}}},
               variants(first:20){edges{node{id,title,selectedOptions,price{amount},
               compareAtPrice{amount},availableForSale,quantityAvailable}}},
               availableForSale, tags, vendor

GET_PRODUCT_BY_HANDLE — same as above plus: descriptionHtml, metafields (for nutritional info)

GET_COLLECTIONS — id, title, handle, image{url}, description

CREATE_CART (mutation) — creates cart, returns cartId (store as cookie/localStorage), checkoutUrl

ADD_TO_CART (mutation) — adds lineItems (merchandiseId, quantity, attributes for custom box config)

UPDATE_CART_LINE (mutation) — updates quantity on a specific lineId

REMOVE_FROM_CART (mutation) — removes lineIds from cart

GET_CART — lines{edges{node{id, quantity, merchandise{...on ProductVariant{id,title,product{...}}},
           cost{totalAmount,compareAtAmountPerQuantity}}}}, cost{subtotalAmount,totalAmount},
           checkoutUrl
```

**Cart Context — /lib/shopify/cart-context.tsx**
Global React context wrapped in the root layout:
State: `cartId | null`, `cart | null` (full cart object), `isCartOpen: boolean`, `isLoading: boolean`.
Functions:
- `addToCart(variantId, quantity, customAttributes?)` — optimistic UI: update local state immediately then sync. `customAttributes` is used for Build Your Box selections.
- `removeFromCart(lineId)` — optimistic removal.
- `updateQuantity(lineId, newQuantity)` — optimistic update.
- `openCart()` / `closeCart()` — controls drawer state.
On mount: check `localStorage` for existing `cartId`, fetch cart if found.

**Cart Drawer Component**
Slides in from the right (Framer Motion: `x: '100%' → 0`, overlay fades in).
Width: `440px` desktop, full-width mobile.
Background: `#FFFFFF`.
Border-left: `1px solid #E8E8E8`.
Border-radius: `0` — architectural panel.
Box-shadow: `0 0 60px rgba(0,0,0,0.1)`.

Header: "Your Cart" — Satoshi 600, 18px, #0A0A0A. Item count in `(n)` JetBrains Mono. `×` close button right-aligned.
`1px solid #E8E8E8` divider.

Free shipping progress bar:
`border: 1px solid #E8E8E8, border-radius: 2px, height: 3px, margin: 16px 0`
Fill in `#0A0A0A` proportional to distance from £25 free shipping threshold.
Label: "Add £X.XX more for free delivery" — JetBrains Mono, 11px, #6B6B6B.
When threshold met: "✓ Free delivery applied!" — magenta, JetBrains Mono.

Line items list: scrollable, `max-height: calc(100vh - 340px)`.
Each line: thumbnail (56×56, border `1px solid #E8E8E8`, radius 4px), product name (Satoshi 500, 14px), variant (Satoshi Regular, 13px, #6B6B6B), quantity controls (−/n/+, compact), line price (Clash Display, 16px), × remove (lucide-react X, 16px, #A0A0A0). `border-bottom: 1px solid #F0F0F0`.

"You might also like" row: 3 compact ProductCards (horizontal thumbnail + name + price). Shown only when cart has items. Fetches best sellers.

Footer (sticky at bottom of drawer, `border-top: 1px solid #E8E8E8, padding: 24px`):
Subtotal label (JetBrains Mono, 12px, #6B6B6B) + amount (Clash Display, 24px, #0A0A0A) — right-aligned row.
"Checkout →" primary button, full width (links to `cart.checkoutUrl` — Shopify-hosted checkout).
"Continue Shopping" ghost button, full width, below.

Empty cart state: lucide-react ShoppingBag icon (40px, #D0D0D0), "Your cart is empty." Satoshi, "Start exploring →" ghost link.

**Wire Up Add to Cart**
Update: ProductCard `Quick Add` → `addToCart(defaultVariantId, 1)`, triggers `openCart()` after.
Update: Product page `Add to Cart` → `addToCart(selectedVariantId, quantity)`, triggers `openCart()` after.
Update: Build Your Box `Add to Cart` → `addToCart(boxVariantId, 1, boxSelectionAttributes)`.

Output the Shopify client, all GraphQL queries, the cart context, the cart drawer component, and the updated addToCart hooks across all three integration points. Include the mock data file so the site runs without live Shopify credentials.

---

---

# EXECUTION CHECKLIST

Run this before submitting each prompt's output for review:

**Typography**
- [ ] Headlines use Clash Display, weight 700 or 800 only
- [ ] Body uses Satoshi Regular or Medium only
- [ ] Prices, labels, codes use JetBrains Mono only
- [ ] Hero headline is at display-xl scale (clamp min 72px)
- [ ] Tight tracking (`-0.03em` to `-0.05em`) on all headlines

**Colour**
- [ ] All backgrounds are `#FFFFFF` or `#F7F7F7` (or the intentional `#0A0A0A` B2B/footer sections)
- [ ] No dark or coloured section backgrounds
- [ ] Magenta used fewer than 4 times per viewport
- [ ] No gradient fills on cards or section backgrounds

**Spacing**
- [ ] Section top padding ≥ 120px on desktop
- [ ] Card internal padding ≥ 32px
- [ ] Heading-to-body gap ≥ 24px

**Borders & Radius**
- [ ] Buttons at `border-radius: 2px`
- [ ] Cards at `border-radius: 4px` maximum
- [ ] No `border-radius` above 4px on structural elements
- [ ] Pill shape used only for badges and filter tags

**Layout**
- [ ] Product grids at 3 columns desktop maximum (NOT 4)
- [ ] Container max-width 1440px with `clamp(24px, 6vw, 120px)` horizontal padding
- [ ] No content overlapping other content
- [ ] All content has room to breathe — nothing cramped

**Animation**
- [ ] Hero headline uses word-by-word reveal (yPercent 110 → 0)
- [ ] All scroll reveals combine Y translate + opacity
- [ ] Lenis + GSAP ScrollTrigger integration intact
- [ ] Custom cursor active on desktop
- [ ] `prefers-reduced-motion` wrapper on all GSAP code

---

*Sugar Riot — Complete Build Document*
*Avorria · March 2026 · Confidential · Version 2.0*
