# RunModels Cost Calculator

A handcrafted black-and-white static calculator for estimating AI model running costs, VRAM, RAM, DGX Spark sizing, and rough profit versus OpenRouter-style per-million-token pricing.

## Local development

```bash
npm run dev
```

Open <http://localhost:3000>.

## Vercel deployment

This repository is intentionally static. The source files live at the project root, and `npm run build` copies `index.html`, `styles.css`, and `app.js` into `public/` for Vercel production output.

### Deploy from the Vercel dashboard

1. Import this Git repository in Vercel.
2. Keep the framework preset as **Other**.
3. Use **Build Command**: `npm run build`.
4. Use **Output Directory**: `public`. The build script creates this folder and copies the static assets into it.
5. Deploy.

### Deploy from the CLI

```bash
npm install -g vercel
vercel
vercel --prod
```

## Checks

```bash
npm run build
```

The build script creates `public/`, copies the static assets into it, and validates the emitted JavaScript with `node --check public/app.js`.
