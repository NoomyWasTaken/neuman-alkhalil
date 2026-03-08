## AI Software Engineer Portfolio — Implementation Plan

### Overview

Build a modern, minimal portfolio site for an AI software engineer using a Next.js SEO-first architecture. Hybrid navigation (single home page with previews + dedicated detail pages). Dark/light toggle with system preference. Mobile-first, statically rendered where possible, and no backend for now.

### Color & Theme

- Monochrome base with a single restrained accent (e.g., slate/zinc base + blue-600 accent)
- Update CSS variables for both light/dark modes
- `next-themes` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`, localStorage persistence

### File Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    (Home: Hero + previews of all sections + CTAs)
│   ├── experience/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── skills/
│   │   └── page.tsx               (optional, only if kept)
│   ├── papers/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── ThemeProvider.tsx
│   ├── SectionHeading.tsx
│   ├── ProjectCard.tsx
│   ├── ExperienceItem.tsx
│   ├── SkillBadge.tsx
│   ├── PaperItem.tsx
│   └── ProjectDetailLayout.tsx
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── papers.ts
│   └── social.ts
```

### Routes

- `/` — Home (hero + section previews)
- `/experience` — Full timeline
- `/projects` — Project grid
- `/projects/[slug]` — Individual project case study
- `/skills` — Categorized skills with search/filter
- `/papers` — Publications list
- `/contact` — Contact form + socials

### Key Implementation Details

**Home page:** Hero with name/title/tagline, 3 CTA buttons (Download Resume, View Projects, Contact). Below: featured projects (3 cards), experience highlights (2-3 items), skills summary (top categories), papers preview (2-3), contact CTA banner.

**Project detail pages (`/projects/:slug`):** Sections for overview, problem statement, approach, tech stack, architecture notes, screenshot placeholders, links (GitHub/demo), and outcomes. Data-driven from `projects.ts` with a `slug` field.

**Skills page:** Categorized grid with simple text filter. Categories: Languages, Frameworks, ML/AI, Cloud/DevOps, Databases, Tools.

**Papers page:** Each entry has title, authors, venue, date, abstract preview (truncated), and links (PDF/arXiv). Structure ready for embedded PDF later.

**Contact page:** Form with name, email, subject, message fields. No submission logic — just toast confirmation placeholder. Social links + direct email mailto.

**Navbar:** Sticky, transparent-to-solid on scroll. Desktop: horizontal links + Download Resume button + ThemeToggle. Mobile: hamburger → Sheet slide-out with all links.

**Footer:** Social icons (GitHub, LinkedIn, email), copyright, secondary resume download link.

**SEO:** Use framework-native metadata per route so titles, descriptions, and Open Graph metadata are available in the initial HTML response. Do not use `document.title`, `useEffect`, Helmet, or manual DOM manipulation for metadata. Prioritize static rendering where possible for strong crawlability and pre-JS visibility.

**Performance:** Prefer static rendering and route-based code splitting through the framework. Keep heavy client-side interactivity minimal, optimize images/assets, lazy-load only truly heavy components, and keep navigation smooth on both mobile and desktop.

**Data files:** Fully typed interfaces exported alongside data arrays. Each file exports both the type and the data, making future Supabase migration straightforward.

### Theme Variables Update

- Accent color: ~`220 70% 50%` (professional blue) for light, slightly lighter for dark
- Ensure all existing shadcn components inherit properly

### External Links

- Styled with subtle icon indicators (ExternalLink icon from lucide) for GitHub, LinkedIn, arXiv, demo links