# Hosting MindCheck on GitHub

## Complete Guide: GitHub + Deployment

This guide will help you:
1. Push your code to GitHub
2. Deploy your site for free (using Vercel or Netlify)
3. Configure environment variables for production

---

## Part 1: Push to GitHub (10 minutes)

### Step 1: Check Git Status

First, let's see if Git is already initialized:

```powershell
cd d:\solution\mindcheck-frontend
git status
```

**If you see "not a git repository"**, initialize Git:
```powershell
git init
```

### Step 2: Create .gitignore (Important!)

Make sure you have a `.gitignore` file to prevent sensitive data from being uploaded:

```
# Dependencies
node_modules/

# Environment variables (NEVER commit this!)
.env
.env.local
.env.production

# Build output
dist/
build/

# Logs
*.log
npm-debug.log*

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
```

### Step 3: Add All Files to Git

```powershell
git add .
```

### Step 4: Create First Commit

```powershell
git commit -m "Initial commit: MindCheck mental health platform with Firebase"
```

### Step 5: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository name: `mindcheck` (or your preferred name)
4. Description: `Mental health assessment platform with Firebase authentication`
5. Choose **Public** or **Private**
6. **DO NOT** check "Initialize with README" (you already have code)
7. Click **"Create repository"**

### Step 6: Connect Local Repository to GitHub

GitHub will show you commands. Use these:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/mindcheck.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)
  - Get token at: https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Select scopes: `repo` (full control)
  - Copy the token and use it as password

✅ **Your code is now on GitHub!**

---

## Part 2: Deploy to Vercel (Recommended - 5 minutes)

Vercel is free and perfect for React apps!

### Step 1: Go to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### Step 2: Import Your Project

1. Click **"Add New..."** → **"Project"**
2. Find your `mindcheck` repository
3. Click **"Import"**

### Step 3: Configure Build Settings

Vercel should auto-detect Vite. Verify these settings:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Step 4: Add Environment Variables

**CRITICAL:** Add your environment variables:

1. Click **"Environment Variables"**
2. Add each variable:

```
VITE_GEMINI_API_KEY = your_gemini_api_key
VITE_FIREBASE_API_KEY = your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN = mindcheck-xxxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID = mindcheck-xxxxx
VITE_FIREBASE_STORAGE_BUCKET = mindcheck-xxxxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID = your_sender_id
VITE_FIREBASE_APP_ID = your_app_id
```

Copy values from your local `.env` file!

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://mindcheck-xxxxx.vercel.app`

✅ **Your site is live!**

---

## Part 3: Configure Firebase for Production

### Step 1: Add Production Domain to Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your MindCheck project
3. Click **"Authentication"** → **"Settings"** → **"Authorized domains"**
4. Click **"Add domain"**
5. Add your Vercel domain: `mindcheck-xxxxx.vercel.app`
6. Click **"Add"**

### Step 2: Update Firestore Security Rules

If you haven't already, apply the security rules from `FIRESTORE_SECURITY_RULES.md`:

1. Firebase Console → Firestore Database → Rules
2. Paste the rules
3. Click **"Publish"**

✅ **Firebase is configured for production!**

---

## Alternative: Deploy to Netlify

If you prefer Netlify over Vercel:

### Step 1: Go to Netlify

1. Visit [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click **"Add new site"** → **"Import an existing project"**

### Step 2: Connect Repository

1. Choose **"GitHub"**
2. Select your `mindcheck` repository

### Step 3: Build Settings

- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Step 4: Environment Variables

1. Click **"Site settings"** → **"Environment variables"**
2. Add all `VITE_*` variables from your `.env` file

### Step 5: Deploy

Click **"Deploy site"** and wait for build to complete.

---

## Part 4: Custom Domain (Optional)

### If you have a custom domain (e.g., mindcheck.com):

**For Vercel:**
1. Vercel Dashboard → Your project → **"Settings"** → **"Domains"**
2. Add your domain
3. Update DNS records as instructed

**For Netlify:**
1. Site settings → **"Domain management"** → **"Add custom domain"**
2. Follow DNS configuration instructions

**Don't forget:** Add custom domain to Firebase authorized domains!

---

## Part 5: Future Updates

### When you make changes to your code:

```powershell
# 1. Save your changes
# 2. Add to git
git add .

# 3. Commit with a message
git commit -m "Description of changes"

# 4. Push to GitHub
git push

# 5. Vercel/Netlify will automatically rebuild and deploy!
```

✅ **Automatic deployments enabled!**

---

## Troubleshooting

### "Build failed" on Vercel/Netlify
- Check build logs for errors
- Verify all environment variables are set
- Make sure `.env` is in `.gitignore` (never commit it!)

### "Firebase auth not working"
- Add your production domain to Firebase authorized domains
- Check that environment variables are correct

### "Page not found" after deployment
- Vercel/Netlify should handle routing automatically
- If issues persist, add `vercel.json` or `netlify.toml` for SPA routing

### Git push requires authentication
- Use Personal Access Token instead of password
- Or set up SSH keys: https://docs.github.com/en/authentication

---

## Security Checklist

Before going live:

- [ ] `.env` file is in `.gitignore` ✅
- [ ] Environment variables added to Vercel/Netlify ✅
- [ ] Production domain added to Firebase authorized domains
- [ ] Firestore security rules applied
- [ ] No API keys visible in GitHub repository
- [ ] Test signup/login on production site

---

## Summary

**What you'll have:**
- ✅ Code hosted on GitHub
- ✅ Live website on Vercel/Netlify
- ✅ Automatic deployments on every push
- ✅ Free hosting (no credit card needed)
- ✅ HTTPS enabled by default
- ✅ Global CDN for fast loading

**Your site will be accessible at:**
- Vercel: `https://mindcheck-xxxxx.vercel.app`
- Netlify: `https://mindcheck-xxxxx.netlify.app`
- Custom domain (if configured)

---

Need help with any step? Just ask! 🚀
