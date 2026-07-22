# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/content website for MDC Canada (a Canadian immigration consulting firm), rebuilding
`mdccanada.ca` in Next.js. It is largely a content site: static-ish pages with hero sections,
long-form articles, agent/team profile pages, and lead-capture CTAs (signup dialog, login).
There is no backend/API layer yet — no `app/api` routes, no database, no auth logic wired up
(the login/account/suspend pages are placeholders).

## Commands

- `npm run dev` — start dev server on **port 3001** (not the Next.js default 3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config via `eslint-config-next`, core-web-vitals + typescript rules)

There is no test suite/framework configured in this repo.

## Architecture

**Next.js 16 App Router, React 19, Tailwind CSS v4.** Path alias `@/*` → `src/*` (see `tsconfig.json`).

### Route groups (`app/`)

- `(root)` — the main public site. Its `layout.tsx` wraps children with the shared `Header` and
  `Footer` and adds top padding (`pt-23.5`) to clear the fixed header.
  - `about-us/(common)/<agent-slug>` — individual RCIC agent profile pages (e.g.
    `giovanni-mariella`, `alireza-motahari`). These follow a repeated template: hero banner,
    breadcrumb bar, bio column + `CanadaStatsSidebar`. `roli-mathur` is a top-level page rather
    than under `(common)` — check that if adding new agent pages, since the pattern isn't fully
    consistent yet.
  - `canadian-visas/*` — one page per visa type (student, tourist, express entry, etc.), long-form
    content pages built from many stacked `<section>` blocks, generally paired with
    `TableOfContents`.
  - `about-us/meet-our-team`, `known-agents`, `why-use-an-rcic`, `contact-us`, `terms-of-use`.
- `(auth)/login` — placeholder page, not implemented.
- `(user)/account`, `(user)/suspend` — placeholder pages, not implemented.
- Root `app/layout.tsx` sets `lang="fr"` on `<html>` (note: page content itself is authored in
  English — this looks unresolved/inherited from the source site rather than intentional i18n).

### Shared components (`src/components`)

- `Header.tsx` — the site nav; `navItems` is a hardcoded array of nav sections/submenus. Several
  submenu targets (e.g. `/about-canada/*`, `/news`, `/faq`, `/about-us/testimonials`) don't have
  corresponding pages yet — don't assume a nav link implies a page exists.
- `Footer.tsx`, `ContactSection.tsx`, `TableOfContents.tsx`, `CanadaStatsSidebar.tsx` — reusable
  content-page building blocks (stats sidebar takes an `{ iconSrc, label, value }[]` prop).
- `SignupDialog.tsx` — the primary lead-capture CTA, used as a wrapping component around buttons
  site-wide (`<SignupDialog><button>...</button></SignupDialog>`).
- `LoginForm.tsx` — dropdown login form rendered from `Header`; not wired to real auth.
- `ui/` — shadcn/ui primitives (button, dialog, dropdown-menu, checkbox, input, label, separator).
  Installed/configured via `components.json` (style: `radix-nova`, base color `neutral`, icon
  library `lucide`). Use the shadcn CLI conventions (aliases `@/components`, `@/components/ui`,
  `@/lib`, `@/hooks`) when adding new primitives rather than hand-rolling them.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge), the standard way to compose
  conditional Tailwind classes across the codebase.

### Styling

- Tailwind v4 with `@theme inline` in `app/globals.css`. Two parallel design-token systems coexist:
  a hand-authored brand palette (`--color-primary`, `--color-gray-*`, `--spacing-*`, etc.) used
  throughout hand-built page content, and the shadcn/ui OKLCH token set (`--background`,
  `--foreground`, `--card`, etc.) used by the `ui/` primitives. When styling raw page content,
  match the existing hand-authored palette rather than the shadcn tokens.
  - Brand primary color: `#28317c` (`--color-primary`).
  - Headings use `--font-heading` (Playfair Display), body text uses `--font-body` (Rubik); a
    third font (Geist) is loaded but not assigned to a token.
- Custom breakpoints are frequently done with arbitrary Tailwind variants like
  `max-[1088px]:` / `max-[560px]:` rather than the standard `sm:`/`md:`/`lg:` scale — follow this
  convention (mirrored from the legacy site's breakpoints) when matching existing layouts.
- `.container` utility class caps content at `max-w-7xl` with responsive horizontal padding.

### Images

- `next/image` is used with two sources: local files under `public/img/**` (organized into `bg/`,
  `flag/`, `icon/`, `pp/` (profile photos), `testimonials/`, `title/`) and remote images from
  `https://mdccanada.ca` (allowed via `remotePatterns` in `next.config.ts` — legacy assets not yet
  migrated locally).

### Content pages

Visa/agent/info pages are large, mostly single-file JSX with content and markup interleaved
(no CMS/MDX layer). When adding a new page in this style, copy the structure of an existing
sibling page (e.g. an existing `canadian-visas/*/page.tsx` or an `about-us/(common)/*` agent page)
rather than inventing a new layout pattern.
