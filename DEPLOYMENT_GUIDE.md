# Netlify Deployment Guide (Final Fixes)

If your previous deploy failed or showed a blank page, please ensure you use the latest files provided.

### Mandatory Netlify Settings:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 18+ (Netlify defaults to a recent version, which is fine)

### Troubleshooting "Blank Page":
The blank page was caused by the `importmap` block in `index.html`. We have removed it. Vite manages your imports during the build process, so an import map is not needed and actually breaks the app in production.

### Troubleshooting "ETARGET" Error:
The version of `@google/genai` in `package.json` was set to an invalid number. It has been updated to `^0.22.0`.

### Local Development:
1. Extract the downloaded ZIP.
2. Run `npm install` in the folder.
3. Run `npm run dev` to start the local server.
4. Run `npm run build` to test the production build locally (output will be in the `dist` folder).
