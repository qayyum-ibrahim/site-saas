# Progress log

Claude Code: read this at the start of every session. Update it at the end of every phase.

## Current status
- Site: Tallybase (SaaS Website)
- Last completed phase: Phase 1
- Next phase: Phase 2
- Live URL: (owner fills in after the first Vercel deploy)

## Phase checklist
- [x] Phase 1: Scaffold, deploy and design system
- [ ] Phase 2: Home page
- [ ] Phase 3: Main feature pages
- [ ] Phase 4: Remaining pages
- [ ] Phase 5: Polish and hand-off

## Decisions
(Write each choice you made without asking. One line each, with the phase number.)
- P1: Page split. Phase 2: Home. Phase 3: Features, Pricing (with pricing toggle, FAQ accordion). Phase 4: Login and Sign up (one brief item, two routes: /login, /signup) plus not-found page.
- P1: Home FAQ accordion and animated mockup are built in Phase 2; Pricing reuses the FAQ accordion in Phase 3.
- P1: Scaffolded with create-vite (React 19, Vite 8, oxlint) in a temp folder and copied in, so instruction files were not touched.
- P1: Fonts: Space Grotesk 500/600/700 for headings, Inter 400/500/600 for body.
- P1: Mobile menu breakpoint 860px. Container 1200px. Buttons are pill shaped with the indigo gradient.
- P1: Extra tokens derived from the brief: border #e3e5f0, surface-2 #eceefa, accent-soft #ececfe, accent-strong #4646d9.
- P1: Contact in footer: hello@tallybase.example, +234 800 000 0000.

## Blockers
(Write anything that stopped you. Say exactly what the owner must do.)

## Notes for next session
(Short. Only what the next session needs to know.)
- Shared: Header, Footer, Layout, Button (to/href/button), Section (tone default|surface), PageTitle (title + meta description), Img (gradient fallback), Logo. Utility classes in base.css: container, eyebrow, lead, gradient-text. Section head styles in styles/sections.css.
- Pages are placeholders using components/Placeholder.jsx; remove it once all pages are built.
