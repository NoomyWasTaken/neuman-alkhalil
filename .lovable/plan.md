# Seeding the site with your real content

All placeholder content gets replaced with your resume + LinkedIn details.

## Identity and links

- Name: Neuman Alkhalil. Title: Founding AI Software Engineer & Chief Science Officer @ Horalix.
- Hero intro rewritten from your About: end-to-end production AI systems across backend, AI workflows, databases, deployment and evaluation; clinical AI, recruiting AI, and full-stack products.
- Links: GitHub (NoomyWasTaken), LinkedIn (neuman-alkhalil), email neuman.alkhalil@outlook.com. Twitter link removed. No phone numbers shown.
- Your resume PDF is added to the site so the "Download Resume" button gives the real file.
- Page titles and descriptions updated with your real name and role.

## Experience

Five roles, newest first: Horalix (Jul 2025 – Present), Authority Partners (Mar–Jun 2026), Tardigrade Development (Dec 2024 – Jul 2025), Sarajevo Unlimited (Oct–Dec 2021), ZIRA (Sep–Nov 2021). Each with location, bullets from your resume, and its technologies.

## Projects

Eight projects with summary, problem, approach, stack and outcomes: LPX.GG, Real-Time Speech Emotion Recognition, GAN-Based Image Restoration, Search Engine (IR), Multilingual Grammatical Error Detection, Yelp Review Analysis, English Language Learning Chatbot, Idi.ba. LPX.GG, speech emotion, and GAN restoration are featured.

Each project can optionally carry a paper link and a GitHub link — both are optional, so projects without one simply don't show the button. Send me the paper PDFs/links and the repo for the project you mentioned and I'll attach them.

Where your source didn't state a measurable outcome, I use what you actually wrote rather than inventing numbers.

## Papers page

Replaced with a "Research" page that lists your academic project write-ups and links to any paper you attach later. It stays out of the way when nothing is linked.

## Skills

Rebuilt from your resume: Languages; AI & Machine Learning; Backend & Data; Frontend; Cloud & DevOps.

## Home page additions

- Education block: Georgetown M.S. Computer Science, University of Buckingham B.S., Sarajevo School of Science and Technology B.S. (dual degree).
- Awards & recognition block: MedReCon Hackathon winner, Discover ViennaUP grant, Adria Future special recognition, FutureMinds Lab winner, SSST academic achievement, plus the NVIDIA CUDA certificate and your languages (English native, Bosnian, Arabic).

## Technical notes

- Content stays in typed files under `src/data/` (`experience.ts`, `projects.ts`, `skills.ts`, `social.ts`, plus new `education.ts` and `awards.ts`); `papers.ts` becomes `research.ts`.
- `Project` gains optional `paperUrl`; `githubUrl`/`demoUrl` stay optional and their buttons render conditionally.
- Resume PDF served as a static asset and referenced by `resumeUrl`.

## Gaps I'll flag, not invent

Tardigrade's technologies list is thin; several projects have no public demo or repo. Anything missing is left out rather than made up.
