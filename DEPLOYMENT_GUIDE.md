# Netlify Deployment Guide (Critical Fixes)

### 1. Fix: Package Version Error
The error `No matching version found for @google/genai@0.21.0` occurred because the version was set to an unpublished release. We have updated `package.json` to use `^0.3.0`, which is a verified stable version available on the npm registry.

### 2. Fix: Build Environment
To ensure a smooth build, make sure Netlify is using **Node 20**. 
- Go to **Site Settings > Build & Deploy > Environment**.
- Add a variable: `NODE_VERSION` = `20`.

### 3. Deploying via GitHub (Recommended)
1. Push these updated files to your GitHub repository.
2. In Netlify, click **"Add new site"** -> **"Import an existing project"**.
3. Select your GitHub repository.
4. Use these build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Netlify will now install the correct dependencies and host your site.

### 4. SPA Routing
We have included a `_redirects` file in the project. This ensures that when you refresh the page on your live site, you don't get a 404 error.