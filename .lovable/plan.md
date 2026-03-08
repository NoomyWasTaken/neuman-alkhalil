

## AI Software Engineer Portfolio — Implementation Plan

### Design System
- Minimal & clean aesthetic: generous whitespace, subtle animations, monochrome palette with one accent color
- Dark/light mode toggle using `next-themes`
- Mobile-first responsive design with clean typography

### Site Structure (Hybrid)
**Home page (`/`)** — Hero section with name, title, brief intro, and summary cards linking to detail pages. Includes condensed previews of experience, projects, and skills.

**Detail pages:**
- `/experience` — Timeline of roles with company, dates, descriptions
- `/projects` — Card grid showcasing AI/ML projects with tags, descriptions, links
- `/skills` — Categorized skill badges (languages, frameworks, ML/AI tools, etc.)
- `/papers` — List of publications/research papers with links
- `/contact` — Contact form (frontend only, no backend) + social links

### Layout & Navigation
- Sticky top navbar with links to all sections + dark/light toggle
- Mobile: hamburger menu with slide-out navigation
- Footer with social links and copyright

### Reusable Components
- `SectionHeading` — consistent section titles
- `ProjectCard` — reusable card for projects
- `ExperienceItem` — timeline entry component
- `SkillBadge` — categorized skill tag
- `PaperItem` — publication entry
- `ThemeToggle` — dark/light mode switch
- `Layout` — shared navbar + footer wrapper

### SEO & Accessibility
- Semantic HTML (`main`, `section`, `article`, `nav`, `header`, `footer`)
- Proper heading hierarchy, alt text placeholders, aria labels
- Meta tags and page titles per route
- All content uses proper contrast ratios for both themes

### Data Architecture
- All content stored in typed TypeScript data files (e.g., `src/data/experience.ts`, `src/data/projects.ts`) — easy to later replace with Supabase queries

