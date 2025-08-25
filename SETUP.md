# 🚀 Quick Setup Guide for George Armah (armahnii2000)

This guide will help you get your ONNX Codebase Explorer live on GitHub Pages in just a few minutes.

## Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com/armahnii2000
2. **Click "New repository"** (green button)
3. **Repository name**: `onnx-codebase-explorer`
4. **Description**: "Interactive website for exploring ONNX codebase architecture"
5. **Make it Public** ✅ (required for free GitHub Pages)
6. **DON'T** initialize with README, .gitignore, or license (we already have these)
7. **Click "Create repository"**

## Step 2: Push Your Code

Open PowerShell/Terminal in the `onnx-codebase-explorer` folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ONNX Codebase Explorer v1.0"

# Set main branch
git branch -M main

# Add your GitHub repository as origin
git remote add origin https://github.com/armahnii2000/onnx-codebase-explorer.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. **Go to your new repository**: https://github.com/armahnii2000/onnx-codebase-explorer
2. **Click "Settings"** tab (top menu)
3. **Click "Pages"** in left sidebar
4. **Under "Source"**: Select "Deploy from a branch"
5. **Branch**: Select "main"
6. **Folder**: Select "/ (root)"
7. **Click "Save"**

## 🎉 Your Live Site

After 2-5 minutes, your site will be live at:
**https://armahnii2000.github.io/onnx-codebase-explorer**

## 📱 Test Your Site

Visit your live URL and test:
- ✅ Navigation between sections
- ✅ Zoom controls in sidebar  
- ✅ Interactive directory tree
- ✅ Module grid functionality
- ✅ Responsive design on mobile

## 🔧 If Git Commands Don't Work

If you don't have Git installed, you can:

### Option A: Install Git
- **Windows**: Download from https://git-scm.com/download/win
- **Mac**: `brew install git`
- **Linux**: `sudo apt install git`

### Option B: Use GitHub Desktop
1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. "Add existing repository" → select your `onnx-codebase-explorer` folder
4. Publish to GitHub

### Option C: Upload Files Manually
1. Create the repository on GitHub (Step 1 above)
2. Upload files using the web interface
3. Enable GitHub Pages (Step 3 above)

## 🚨 Common Issues

**"Repository not found"**: Make sure you created the repo with exact name `onnx-codebase-explorer`

**"Permission denied"**: You may need to authenticate with GitHub:
```bash
git config --global user.name "George Armah"
git config --global user.email "your-email@example.com"
```

**"Pages not working"**: Wait 5-10 minutes after enabling Pages, then check again

## ✨ Next Steps

Once your site is live:
1. **Share it** with the ONNX community
2. **Add more features** by editing the JavaScript
3. **Update ONNX data** as the codebase evolves
4. **Customize styling** in the CSS file

---

**You're all set! Your ONNX Codebase Explorer will help developers understand the ONNX architecture better.** 🎯
