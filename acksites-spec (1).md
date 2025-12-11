# AckSites.com — Next.js Project Spec

## Project Overview

Build a single-page marketing website for **AckSites**, a web design and hosting studio based in Nantucket, MA. The site should feel like a small, capable studio — not a solo freelancer, not a big agency. Think: confident, local expertise, understated professionalism.

---

## Brand Positioning

**Name:** AckSites (pronounced "Ack-sites" — "ACK" is the airport code for Nantucket)

**Tagline options (pick one):**
- "Nantucket's Web Studio"
- "Web Design, Island Made"
- "Digital Studio. Island Roots."

**Voice & Tone:**
- Confident but not boastful
- Professional but approachable
- Local knowledge without being kitschy
- Direct, minimal fluff
- Avoid: "passionate," "cutting-edge," "solutions," "leverage"

**Studio positioning notes:**
- Use "we" not "I" throughout
- Reference "the studio" or "our team"
- Imply capability and process without overselling
- Local expertise is a differentiator, not a gimmick

---

## Tech Stack

```
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS
Deployment: Vercel (static export compatible)
Forms: Formspree or Netlify Forms (no backend needed)
Fonts: Google Fonts (suggest: DM Sans or Inter for body, optional serif for headings)
Icons: Lucide React (minimal use)
```

### Project Structure

```
acksites/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Main single-page content
│   └── globals.css         # Tailwind imports + custom styles
├── components/
│   ├── Header.tsx          # Simple nav (logo + contact CTA)
│   ├── Hero.tsx            # Main hero section
│   ├── Services.tsx        # What we do
│   ├── Process.tsx         # How we work (optional)
│   ├── Work.tsx            # Portfolio/examples
│   ├── LocalSection.tsx    # Why Nantucket / local expertise
│   ├── Pricing.tsx         # Simple pricing tiers (optional)
│   ├── Contact.tsx         # Contact form + info
│   └── Footer.tsx          # Minimal footer
├── public/
│   ├── og-image.png        # Social share image
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Design Direction

### Logo

The logo consists of:
- **Logomark:** Nantucket island silhouette in orange (#ff9433) with a diagonal white stripe
- **Wordmark:** "AckSites" with "Ack" in dark (#191919) and "Sites" in medium gray (#4d4d4d)
- Use the full logo (mark + wordmark) in the header
- Logomark can be used alone as a favicon or small icon

### Color Palette

```css
/* Brand colors — use exactly these */
--brand-orange: #ff9433;   /* Primary accent, CTAs, highlights */
--text-dark: #191919;      /* Primary text, headings */
--text-medium: #4d4d4d;    /* Secondary text, body copy */
--bg-light: #efefef;       /* Light section backgrounds */
--bg-white: #ffffff;       /* Primary background */

/* Usage notes: */
/* - Orange is the hero color — use for CTAs, links, key highlights */
/* - Don't overuse orange; let it pop against the grays */
/* - #191919 for headlines, #4d4d4d for body text */
/* - Alternate between #ffffff and #efefef for section backgrounds */
```

### Typography

```css
/* Headings */
font-family: 'DM Sans', sans-serif;
font-weight: 500 or 600;

/* Body */
font-family: 'DM Sans', sans-serif;
font-weight: 400;

/* Optional: Use a serif for h1 only for a more editorial feel */
/* e.g., 'Libre Baskerville', 'Playfair Display' */
```

### Design Principles

1. **Generous whitespace** — let it breathe, don't cram
2. **Minimal decoration** — no gradients, no heavy shadows, no stock photos
3. **Subtle Nantucket nods** — a muted color, a simple wave motif, not lighthouses everywhere
4. **Desktop-first but fully responsive** — most clients will view on desktop initially
5. **Fast and light** — no heavy animations, no scroll hijacking
6. **Professional but warm** — not cold/corporate, not overly casual

### Visual Elements

- Simple geometric shapes or lines as section dividers
- Optional: subtle CSS pattern or texture (waves, dots) at very low opacity
- Device mockups for portfolio section (laptop/phone frames)
- No photos of people unless high quality and relevant

---

## Page Sections (In Order)

### 1. Header

- Logo left-aligned (use the full AckSites logo with island mark)
- Single CTA button right-aligned: "Get in Touch" or "Start a Project" (orange #ff9433)
- No navigation links (single page, just smooth scroll or jump to contact)
- Sticky on scroll (subtle, not heavy)

### 2. Hero Section

**Layout:** Centered or left-aligned text, clean and bold

**Content:**
```
Headline: "Web design for island businesses."
Subhead: "AckSites is a Nantucket-based studio building fast, 
         beautiful websites for local businesses."
CTA: "See Our Work" (scrolls to portfolio) + "Get in Touch" (scrolls to contact)
```

**Design notes:**
- Large headline, medium subhead
- Plenty of padding (min 40vh height)
- Optional: subtle background texture or gradient
- No hero image required — typography-forward

### 3. Services Section

**Headline:** "What We Do" or "Services"

**Three service cards (simple, not boxy):**

```
1. Website Design
   Clean, fast websites built for how your customers actually find you.
   Perfect for restaurants, shops, contractors, and service businesses.

2. Website Redesigns  
   Already have a site that's not working? We'll rebuild it right —
   faster, mobile-friendly, and easier for you to update.

3. Hosting & Support
   Reliable hosting, security updates, and ongoing support.
   We keep things running so you don't have to think about it.
```

**Design notes:**
- Three columns on desktop, stacked on mobile
- Minimal icons (optional) — if used, keep them simple line icons
- No "learn more" links — this is all the info they need

### 4. Work / Portfolio Section

**Headline:** "Recent Work" or "Selected Projects"

**Content:** 3-4 project cards with:
- Screenshot/mockup of the site
- Business name
- One-line description
- Optional: link to live site

**Placeholder projects (until real ones exist):**
```
- Island Contractor Co. — "Service business site with booking integration"
- Nantucket Provisions — "E-commerce for a local specialty food shop"  
- Harbor Property Management — "Portfolio site for vacation rentals"
```

**Design notes:**
- Grid layout (2 columns desktop, 1 mobile)
- Device mockups (laptop frames) look more polished than flat screenshots
- Hover state: subtle lift or border change

### 5. Local / About Section

**Headline:** "Nantucket-Based. Island-Focused."

**Content:**
```
We're not a mainland agency that's never set foot on the island. 
AckSites is based in Nantucket — we understand seasonal rhythms, 
local customers, and what island businesses actually need.

That means:
- We're available for in-person meetings
- We know the local market and competition  
- We build for tourist season surges and year-round residents
- We're here for the long term, not a one-off project
```

**Design notes:**
- Can be a simple two-column layout (text + subtle image/graphic)
- Or full-width text block with background color change
- Don't overdo the "local" angle — state it once, clearly, move on

### 6. Pricing Section (Optional)

**Headline:** "Simple Pricing"

**Content:**
```
Starter Site — $1,500
For new businesses that need a clean, professional web presence.
5-page site, mobile-friendly, basic SEO, contact form.

Custom Site — from $3,000  
For established businesses that need more. 
Custom design, integrations, booking systems, e-commerce.

Hosting & Maintenance — $50/month
Hosting, security, backups, and up to 2 hours of updates monthly.
```

**Design notes:**
- Keep it simple — don't over-engineer pricing cards
- "Starting at" language gives flexibility
- Optional: "Let's talk about your project" CTA instead of pricing

### 7. Contact Section

**Headline:** "Start a Project" or "Get in Touch"

**Content:**
```
Ready to talk? Tell us a bit about your project and we'll get back 
to you within one business day.

[Contact Form]
- Name
- Email  
- Business name (optional)
- Message / Project description
- Submit button: "Send Message"

Or email us directly: hello@acksites.com
```

**Design notes:**
- Form should be clean, not cramped
- Light background or subtle card treatment
- Success state: "Thanks! We'll be in touch soon."
- Consider adding a note: "Based in Nantucket, MA"

### 8. Footer

**Content:**
```
© 2025 AckSites
Nantucket, MA
hello@acksites.com
```

**Design notes:**
- Minimal — just copyright, location, email
- No complex footer navigation (single page)
- Optional: subtle wave or line decoration

---

## Responsive Breakpoints

```css
/* Mobile first, then: */
sm: 640px   /* Large phones */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

- Mobile: Single column, stacked sections, hamburger menu not needed (just CTA)
- Tablet: Two columns where appropriate
- Desktop: Full layout, generous spacing

---

## SEO & Metadata

```tsx
// app/layout.tsx metadata
export const metadata = {
  title: 'AckSites — Nantucket Web Design Studio',
  description: 'Web design and hosting for Nantucket businesses. Fast, beautiful websites built by a local studio.',
  keywords: 'Nantucket web design, Nantucket website, island web designer, ACK web studio',
  openGraph: {
    title: 'AckSites — Nantucket Web Design Studio',
    description: 'Web design and hosting for Nantucket businesses.',
    url: 'https://acksites.com',
    siteName: 'AckSites',
    locale: 'en_US',
    type: 'website',
  },
}
```

---

## Form Handling

Use Formspree for simplest setup:

```tsx
<form action="https://formspree.io/f/{your-form-id}" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required />
  <button type="submit">Send Message</button>
</form>
```

Or use a simple API route with Resend/SendGrid if preferred.

---

## Performance Goals

- Lighthouse score: 95+ across all categories
- First Contentful Paint: < 1.5s
- No layout shift
- Total page weight: < 500kb (excluding fonts)

---

## Files to Generate

1. `app/layout.tsx` — Root layout with metadata, fonts
2. `app/page.tsx` — Main page composing all sections
3. `app/globals.css` — Tailwind imports, custom properties
4. `components/Header.tsx`
5. `components/Hero.tsx`
6. `components/Services.tsx`
7. `components/Work.tsx`
8. `components/LocalSection.tsx`
9. `components/Pricing.tsx` (optional)
10. `components/Contact.tsx`
11. `components/Footer.tsx`
12. `tailwind.config.ts` — Extended with custom colors
13. `next.config.js` — Basic config, static export ready

---

## Final Notes

- Keep it simple. A great one-page site beats a mediocre multi-page site.
- Every section should be skimmable in 5 seconds.
- The goal is to get potential clients to the contact form.
- Don't over-design — let whitespace and typography do the work.
- Test on mobile early and often.

---

## Example Sites for Inspiration (aesthetic reference)

- https://www.oak.is — clean studio aesthetic
- https://www.instrument.com — confident, minimal
- https://basecamp.com — straightforward, no-nonsense
- https://linear.app — modern but restrained

---

*End of spec.*
