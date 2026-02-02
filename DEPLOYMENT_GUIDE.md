# Netlify Mobile Deployment Guide

If you are seeing a **404 Page Not Found** after deploying from mobile, follow these exact steps to fix it.

### 1. The Correct Way to ZIP (Mobile)
Mobile file managers often create a ZIP that contains a single folder, which then contains your code. **Netlify cannot read this.**
- **WRONG:** Select the folder -> Compress.
- **RIGHT:** Open the folder -> Select ALL files (`index.html`, `package.json`, etc.) -> Compress these files directly.
- **The Check:** When you open the ZIP, the `index.html` file should be visible immediately, NOT inside another folder.

### 2. The Best Way: GitHub Sync
To avoid manual ZIP issues on mobile:
1. Upload your code to a **GitHub** repository.
2. Log into Netlify and click **"Add new site"** -> **"Import an existing project"**.
3. Select your GitHub repo.
4. Set **Build command** to `npm run build` and **Publish directory** to `dist`.
5. This is the most professional way and guarantees your site will work.

### 3. If you see a Blank Screen
- Make sure you are using **Vite** as the build tool (this is already configured in the provided files).
- Ensure your `index.html` does NOT have an `importmap` (I have removed it for you).

### 4. SPA Routing
We have added a `_redirects` file and a `netlify.toml` to ensure that refreshing the page doesn't cause a 404.