# Netlify Deployment Guide (Resolving Build Failures)

### 1. Fix: Dependency Not Found (@google/genai)
If you saw an error like `No matching version found for @google/genai@^0.22.0`, we have fixed this by setting the version to a known stable release (`0.21.0`) in `package.json`. This ensures that Netlify's build servers can find and install the package correctly.

### 2. Fix: Node.js Version
We have a `.node-version` file set to `20`. This is required for Vite 6. If Netlify still fails, go to **Site Settings > Build & Deploy > Environment** and add a variable:
- **Key:** `NODE_VERSION`
- **Value:** `20`

### 3. Fix: Import Map Conflict
The `importmap` in `index.html` has been removed. It was intended for "no-build" environments, but since Netlify uses a build step (Vite), keeping it causes conflicts.

### 4. Deployment via GitHub (Highly Recommended)
1. Create a GitHub repository.
2. Upload all project files.
3. In Netlify, choose **"Import from Git"**.
4. **Build Settings:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Netlify will now automatically install dependencies and build the site.

### 5. Summary for Mobile Users
On mobile, the easiest way is to use the **GitHub Integration**. Manual ZIP uploads of source code directly to the Netlify "Drag & Drop" box will NOT work because that area expects a pre-built `dist` folder, not raw code. Use GitHub to let Netlify handle the build for you.