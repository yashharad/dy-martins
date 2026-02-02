# Netlify Deployment Guide (Resolving Build Failures)

If your Netlify deployment is failing at the "Starting to install dependencies" stage, follow these steps:

### 1. Fix: Node.js Version
We have added a `.node-version` file set to `20`. Vite 6 requires Node 18 or higher. Netlify's default environment can sometimes be older, causing the dependency installation to crash.

### 2. Fix: Import Map Conflict
The redundant `importmap` block has been removed from `index.html`. This block was causing conflicts with Vite's module resolution during the build process.

### 3. Deployment via GitHub (Highly Recommended)
Deploying via GitHub is the most stable method because Netlify manages the build environment directly:
1. Create a new GitHub repository.
2. Upload all project files to it.
3. In Netlify, choose **"Import from Git"**.
4. **Build Settings:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Netlify will handle the `npm install` and `npm run build` automatically.

### 4. Deploying via Manual Upload (Mobile ZIP)
If you are uploading a ZIP directly to Netlify:
- **Netlify "Drag & Drop" only accepts pre-built files.**
- You cannot upload the *source code* (the files you downloaded) to the Drag & Drop area.
- You must either:
  1. Use the **GitHub Integration** (see Step 3).
  2. Build the project locally on a computer first, then upload the contents of the `dist` folder.

**Summary:** For the best experience on mobile, always use the **GitHub Integration** method. It bypasses the limitations of manual ZIP uploads and correctly triggers the build process.