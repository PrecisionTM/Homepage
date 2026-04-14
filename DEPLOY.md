# Precision Telemed — Homepage · Vercel Static Deploy

This is a **fully static** deployment — no build step, no Node.js, no package.json.
Vercel serves `index.html` and `images/` directly as plain files.

---

## 📁 Files in this folder

```
vercel-package/
├── index.html        ← The complete homepage (all CSS + JS inlined)
├── images/           ← All image assets referenced by index.html
│   ├── logo-main-transparent.png
│   ├── logo-text-transparent.png
│   ├── coach-chris.jpg
│   ├── dr-palumbo.jpg
│   ├── dr-patel.jpg
│   ├── dr-ahmed.jpg
│   ├── dr-akler.jpg
│   ├── dr-cattelane.jpg
│   ├── angela-kifer-thomas.jpg
│   ├── brittany-umana.jpg
│   ├── brett-whaley.jpg
│   ├── michael-gype.jpg
│   ├── samuel-palmer.jpg
│   └── angel-colon-molero.jpg
├── vercel.json       ← Vercel routing + cache header rules
├── .gitignore        ← Ignores OS junk files
└── DEPLOY.md         ← This file
```

---

## ⚠️ Before You Push — Add the Images

The `images/` folder must contain the real image files. Copy them from the source project:

**Mac / Linux:**
```bash
# Run from your project root (one level above vercel-package/)
cp -r images/* vercel-package/images/
```

**Windows (PowerShell):**
```powershell
Copy-Item -Path "images\*" -Destination "vercel-package\images\" -Recurse
```

**Or drag-and-drop:** Copy everything from the root `images/` folder → paste into `vercel-package/images/`.

---

## 🚀 Deploy to Vercel

### Option A — Vercel Dashboard (no CLI needed)

1. Create a new GitHub repo
2. Push **only the contents of `vercel-package/`** as the repo root:
   ```bash
   cd vercel-package
   git init
   git add .
   git commit -m "Initial static deploy"
   git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository**
4. When asked for **Framework Preset** → select **"Other"** (not Vite, not React)
5. Leave **Build Command blank** and **Output Directory as `.`** (root)
6. Click **Deploy** ✅

### Option B — Vercel CLI (drag-and-drop deploy)

```bash
npm i -g vercel          # install CLI once
cd vercel-package
vercel                   # follow prompts
# Framework? → Other
# Build command? → (leave blank, press Enter)
# Output directory? → . (just a dot)
vercel --prod            # promote to production
```

---

## ⚙️ How `vercel.json` works

| Rule | What it does |
|------|-------------|
| `/images/*` | Serves image files with a 1-day browser cache |
| `/*.html` | Serves HTML with no-cache (always fresh) |
| `/` | Serves `index.html` as the root page |

No SPA routing needed — this is a single `index.html` page.

---

## 🔗 External assets loaded by `index.html`

These are fetched from CDN at runtime — no local copies needed:

| Asset | Source |
|-------|--------|
| Google Fonts (Playfair Display, DM Sans) | fonts.googleapis.com |
| Font Awesome icons | cdn.jsdelivr.net |
| Hero background image | media.base44.com |
| Press logo images | precisiontelemed.com/wp-content/uploads/ |
