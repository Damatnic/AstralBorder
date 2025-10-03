# 🚀 Deployment Guide for AstralBorder

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Repository name: `AstralBorder`
3. Description: "Borderlands 4 Legendaries Guide - Complete tier list and character builds"
4. Choose "Public" visibility
5. **Do NOT** initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository on GitHub, run these commands:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/AstralBorder.git

# Push to GitHub
git push -u origin master
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel

### Option A: Quick Deploy (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your `AstralBorder` repository from GitHub
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Wait for deployment to complete (usually 1-2 minutes)
7. Your site will be live at `https://astral-border.vercel.app` (or similar)

### Option B: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the instructions to update your DNS records

## Environment Variables

This project doesn't require any environment variables for basic functionality.

## Post-Deployment

Your site should now be live! You can access it at:
- Vercel URL: `https://YOUR_PROJECT.vercel.app`
- Custom domain (if configured)

## Updating the Site

To update your deployed site:

```bash
# Make your changes
git add .
git commit -m "Your commit message"
git push

# Vercel will automatically redeploy
```

## Troubleshooting

### Build fails on Vercel

- Check that all dependencies are in `package.json`
- Ensure `next.config.js` has correct settings
- Review build logs in Vercel dashboard

### Site doesn't load

- Check Vercel deployment logs
- Ensure the build completed successfully
- Verify the output directory is set to `out`

---

🎮 Happy Vault Hunting!

