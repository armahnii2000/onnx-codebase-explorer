# Deployment Guide - ONNX Codebase Explorer

This guide helps you deploy the ONNX Codebase Explorer to GitHub and set up GitHub Pages hosting.

## 🚀 Quick Deployment to GitHub

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `onnx-codebase-explorer`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have files)

### 2. Push to GitHub

```bash
# In the onnx-codebase-explorer directory
git init
git add .
git commit -m "Initial commit: ONNX Codebase Explorer v1.0"
git branch -M main
git remote add origin https://github.com/armahnii2000/onnx-codebase-explorer.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

Your site will be available at: `https://armahnii2000.github.io/onnx-codebase-explorer`

## 🌐 Alternative Hosting Options

### Netlify (Recommended for advanced features)
1. Connect your GitHub repo to [Netlify](https://netlify.com)
2. Build settings: Leave empty (static site)
3. Publish directory: `/` (root)
4. Auto-deploys on every push

### Vercel
1. Import project from GitHub on [Vercel](https://vercel.com)
2. Framework preset: Other
3. Build command: Leave empty
4. Output directory: Leave empty

### Local Development Server

```bash
# Option 1: Python (if you have Python installed)
python -m http.server 8080

# Option 2: Node.js (if you have Node.js)
npx serve .

# Option 3: PHP (if you have PHP installed)  
php -S localhost:8080
```

Then open: http://localhost:8080

## 📝 Repository Structure

```
onnx-codebase-explorer/
├── index.html          # Main website file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── LICENSE             # MIT license
├── package.json        # Project metadata
├── .gitignore         # Git ignore rules
└── DEPLOYMENT.md      # This file
```

## 🔧 Customization Before Deployment

### Update Repository URLs
The `package.json` is already configured with your GitHub username (armahnii2000).
No changes needed unless you want to use a different repository name.

### Update README
Edit `README.md` to include:
- Your live site URL
- Your specific customizations
- Contact information

### Optional: Add Custom Domain
If you have a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS to point to GitHub Pages
3. Enable HTTPS in repository settings

## 📊 Analytics (Optional)

Add Google Analytics by inserting this before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 Updates and Maintenance

### Adding New Content
1. Update the `onnxCodebase` object in `script.js`
2. Add corresponding HTML sections if needed
3. Test locally, then push to GitHub

### Keeping ONNX Data Current
- Periodically re-analyze the ONNX codebase
- Update statistics and module information
- Add new features or sections as ONNX evolves

## 🎯 Performance Optimization

The site is already optimized:
- ✅ No framework dependencies
- ✅ Minimal external resources
- ✅ Compressed CSS and JavaScript
- ✅ Responsive design
- ✅ Fast loading times

## 🐛 Troubleshooting

### Site Not Loading
- Check GitHub Pages is enabled
- Verify repository is public
- Wait 5-10 minutes after enabling Pages

### Mermaid Diagrams Not Rendering
- Check CDN links in `index.html`
- Verify JavaScript console for errors

### Mobile Display Issues
- Test responsive design with browser dev tools
- Check CSS media queries

---

**Ready to share your ONNX codebase exploration tool with the world!** 🚀
