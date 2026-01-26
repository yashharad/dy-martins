# Deployment Guide for DYmartins

Follow these steps to ensure a successful deployment on Netlify.

### 1. Repository Structure
Ensure your files are in the root directory (not in a `src/` folder):
- `index.html`
- `index.tsx`
- `App.tsx`
- `package.json`
- `netlify.toml`
- `vite.config.ts`

### 2. Netlify Build Settings
When connecting your repository to Netlify, use these exact settings:

| Setting | Value |
| :--- | :--- |
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |
| **Node.js Version** | `18` or `20` (Netlify default is usually fine) |

### 3. SPA Routing
This app uses client-side routing. If you refresh a page like `/special` and get a 404, ensure the `netlify.toml` file is present in your root. It contains the redirect rule:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 4. Common Issues
- **Blank Page**: Usually caused by a missing `<script type="module" src="/index.tsx"></script>` in `index.html`. We have fixed this in the latest update.
- **Images Not Loading**: Ensure external image URLs (like GitHub raw links) are accessible from the production domain.
- **API Key Errors**: If using Gemini features, set the `API_KEY` in Netlify's **Environment Variables** section.

### 5. Deployment command (Local CLI)
If deploying via Netlify CLI:
```bash
npm install
npm run build
netlify deploy --prod --dir=dist
```