# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio / interactive resume built with **Angular 21** and SSR (prerendered). Deployed to GitHub Pages at https://asanchezed.github.io/portfolio/.

Node version pinned in `.nvmrc`: **22.12.0**.

## Commit policy

Do **not** add a `Co-Authored-By: Claude ...` trailer (or any other Claude/Anthropic attribution) to commit messages in this repo. Commit as the user only.

## Commands

```bash
npm start                 # dev server on http://localhost:4200/
npm run start:host        # dev server bound to 0.0.0.0 (LAN / tunneling)
npm run build             # default build (production — see angular.json)
npm run build:prod        # explicit production build
npm run build:gh          # production build with --base-href /portfolio/ (needed for gh-pages)
npm run deploy            # build:gh + copy index.html → 404.html + npx gh-pages -d dist/portfolio/browser
npm run watch             # development build in watch mode
npm test                  # unit tests (Angular @angular/build:unit-test, Vitest under the hood)
npm run serve:ssr:portfolio   # serve the built SSR bundle from dist/portfolio/server/server.mjs
```

Interactive helper wrapping the common flows (local / build / deploy with colors + git-clean check):

```bash
./scripts/run.sh
```

To run a single test file, pass it through the Angular test runner:

```bash
npx ng test --test-path-pattern=src/app/sections/hero/hero.spec.ts
```

## Deployment notes (GitHub Pages)

- The `base-href` **must** be `/portfolio/` for the deployed site to resolve assets. Only `build:gh` / `deploy` set this — a plain `build` will produce broken asset paths on gh-pages.
- `deploy` duplicates `index.html` as `404.html` to make client-side routing work on gh-pages (it rewrites unknown paths back to the SPA).
- `allowedHosts` in `angular.json` includes a DuckDNS entry (`asanchez.guretxea.duckdns.org`) used for remote dev-server access; don't remove it unless asked.

## Architecture

### Rendering model

SSR with prerendering is enabled (`angular.json` → `outputMode: "server"`, `src/server.ts`, `src/main.server.ts`). `app.routes.server.ts` sets **every** route to `RenderMode.Prerender`, so the deployed output on gh-pages is effectively a static prerender of the whole app with client hydration (`provideClientHydration(withEventReplay())` in `app.config.ts`). Runtime SSR is only relevant when using `serve:ssr:portfolio` locally — gh-pages serves the static prerendered files.

### Component structure

Single-page app composed in `src/app/app.ts`, which imports standalone components from `src/app/sections/`:

- `hero/`, `experience/`, `skills/`, `education/`, `contact/`

Each section is a standalone component (Angular 21 style — no NgModules). The root `App` component owns the sticky-header scroll state and exposes `toggleTheme()` / `print()` bindings consumed by the template.

### State — two singleton services

- `theme.service.ts` — minimal: toggles `light` class on `document.body`. All theme styling is driven by CSS variables in `src/styles.scss` reacting to that class.
- `language.service.ts` — holds `currentLanguage` and `data` as **signals**; `toggleLanguage()` swaps between `'es'` and `'en'` and replaces the whole `data` signal from `RESUME_DATA`. Components read `language.data()` in templates — changing language re-renders reactively. When adding a new section or field, update both halves of `RESUME_DATA` in `resume.data.ts` (not separate i18n JSON files for the resume content).

The `src/i18n/texts.{es,en}.json` files exist but are separate from the resume data signal — check where a string lives before editing.

### Content source of truth

**`src/app/resume.data.ts`** is the canonical content. The `ResumeData` interface defines the shape; `RESUME_DATA.es` and `RESUME_DATA.en` are the two localized copies. Editing resume content almost always means editing this file, not the component templates.

### Styling

- SCSS with CSS variables for theming (light/dark via `body.light` class).
- `anyComponentStyle` budget is tight: **warn 4kB / error 8kB** per component stylesheet. Keep per-section SCSS small; shared styles belong in `src/styles.scss`.
- Initial bundle budget: warn 500kB / error 1MB.
- Print styles are a first-class concern (Ctrl+P generates the PDF CV) — verify changes still print cleanly.

### TypeScript strictness

`tsconfig.json` enables `strict`, `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, plus Angular's `strictTemplates` and `strictInputAccessModifiers`. Index-signature access must use bracket notation (e.g. `RESUME_DATA['es']`, not `RESUME_DATA.es`).
