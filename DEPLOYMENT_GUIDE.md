# Netlify Deployment Guide (Critical Mobile Fixes)

If you are seeing a **404 Page Not Found** on Netlify while uploading from mobile, follow these instructions carefully.

### 1. Why the 404 happens
When you ZIP a folder on mobile and upload it, Netlify often sees a "subfolder" structure (e.g., `MyProject/index.html`) instead of having `index.html` at the top level. This makes Netlify think the site is empty.

### 2. The Solution: Use GitHub (Recommended)
This is the **only guaranteed way** to deploy a React/Vite project from a mobile device correctly.
1. Create a repository on **GitHub**.
2. Upload your files to that repository.
3. Log in to **Netlify** and click **"Add new site"** -> **"Import an existing project"**.
4. Connect your GitHub account and select the repository.
5. **CRITICAL SETTINGS:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Netlify will now build the site for you. This fixes the 404 because Netlify runs the project on its own servers and automatically points to the correct folder.

### 3. If you MUST use Manual Upload (ZIP)
If you cannot use GitHub, you must ZIP the files correctly:
- **DO NOT** select the folder and ZIP it.
- **DO** enter the folder, select every file individually (`index.html`, `package.json`, `App.tsx`, etc.), and then ZIP those specific files.
- When you open the ZIP, the `index.html` file must be right there. If you see another folder first, it will fail.

### 4. Technical Configuration
We have included a `netlify.toml` and a `_redirects` file. These files tell Netlify to point all traffic to `index.html`, which is required for a React app to work correctly when you refresh the page or navigate directly to a link.