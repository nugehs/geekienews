# GeekieNews

Publication on **AI software reliability** — essays, audits, and tool releases.

**Thesis:** static analysis, never the model.

- **Site:** [geekienews.com](https://geekienews.com)
- **Stack:** Astro 5 · Keystatic · Tailwind v4 · GitHub Pages

## Quick start

```bash
npm install
npm run dev
```

- Site: http://localhost:4321
- CMS: http://localhost:4321/keystatic

## CMS workflow

Articles are git-based Markdoc files under `src/content/articles/`. Keystatic provides the editorial UI.

1. Run `npm run dev`
2. Open `/keystatic`
3. Create or edit an article
4. Commit the generated `.mdoc` files
5. Push — GitHub Actions builds and deploys to geekienews.com

### GitHub storage (optional)

For editing on a deployed instance, set:

```bash
KEYSTATIC_STORAGE=github
KEYSTATIC_GITHUB_REPO=nugehs/geekienews
```

Configure GitHub OAuth in Keystatic Cloud or self-hosted auth per [Keystatic docs](https://keystatic.com/docs/github-mode).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server + Keystatic admin |
| `npm run build` | Static production build |
| `npm run preview` | Preview production build |
| `npm run check` | Astro type check |

## Content schema

Each article has: title, description, publishDate, author, category (`essay` \| `audit` \| `release` \| `comparison`), tags, draft, featured, and Markdoc body.

## Deploy

Push to `main`. Requires GitHub Pages enabled (source: GitHub Actions) and DNS for `geekienews.com` pointing at Pages.

## Part of the toolchain

By [Oluwasegun Olumbe](https://segunolumbe.com) — [gate](https://www.npmjs.com/package/@nugehs/gate) · [repoctx](https://nugehs.github.io/repoctx-web/) · [tieline](https://www.npmjs.com/package/@nugehs/tieline) · [bouncer](https://nugehs.github.io/bouncer-web/) · [aiglare](https://nugehs.github.io/aiglare-web/)
