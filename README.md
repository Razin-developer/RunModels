# RunModels Cost Calculator

A handcrafted black-and-white static calculator for estimating AI model running costs, VRAM, RAM, DGX Spark sizing, and rough profit versus OpenRouter-style per-million-token pricing.

## Local development

```bash
npm run dev
```

Open <http://localhost:3000>.

## Vercel deployment

This repository is intentionally static: `index.html`, `styles.css`, and `app.js` are served directly from the project root.

### Deploy from the Vercel dashboard

1. Import this Git repository in Vercel.
2. Keep the framework preset as **Other**.
3. Leave **Build Command** empty, or use `npm run build` if you want Vercel to run the JavaScript syntax check.
4. Leave **Output Directory** empty because the app is served from the repository root.
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

The build script validates the JavaScript with `node --check app.js` and does not emit bundled files.
