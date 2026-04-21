# Precision Telemed — Homepage · Vercel Static Deploy

This is a **fully static** deployment — no build step, no Node.js, no package.json.
Vercel serves `index.html` and `images/` directly as plain files.

---

## 📁 Files in this folder

```
vercel-package/
├── index.html        ← Complete homepage (all CSS + JS inline)
├── vercel.json       ← { "cleanUrls": true }
├── DEPLOY.md         ← This file
├── download          ← Blank file (required by repo convention)
└── images/
    ├── logo-main-transparent.png
    ├── logo-text-transparent.png
    ├── coach-chris.jpg
    ├── dr-palumbo.jpg
    ├── dr-patel.jpg
    ├── dr-ahmed.jpg
    ├── dr-akler.jpg
    ├── dr-cattelane.jpg
    ├── angela-kifer-thomas.jpg
    ├── brittany-umana.jpg
    ├── brett-whaley.jpg
    ├── michael-gype.jpg
    ├── samuel-palmer.jpg
    └── angel-colon-molero.jpg
```

**Not included (per conventions.md §2):**
- No `public/` folder
- No `.gitignore`
- No `node_modules/`
- No build artifacts

---

## ⚠️ Before You Push — Add the Images

The `images/` folder must contain the real image files. Copy them from the source project:

**Mac / Linux:**
```bash
cp -r images/* vercel-package/images/
```

**Windows (PowerShell):**
```powershell
Copy-Item -Path "images\*" -Destination "vercel-package\images\" -Recurse
```

---

## 🚀 Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push **only the contents of `vercel-package/`** as the root of a new GitHub repo:
   ```bash
   cd vercel-package
   git init
   git add .
   git commit -m "Initial static deploy"
   git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository**
3. **Framework Preset → "Other"**
4. **Build Command → leave blank**
5. **Output Directory → `.`** (just a dot)
6. Click **Deploy** ✅

### Option B — Vercel CLI

```bash
npm i -g vercel
cd vercel-package
vercel
# Framework? → Other
# Build command? → (blank)
# Output directory? → .
vercel --prod
```

---

## ✅ Pre-Release Checklist (conventions.md §1.8)

- [x] No `vh`, `dvh`, or `svh` in any section `height` or `min-height`
- [x] Hero uses `min-height: clamp(560px, 60vw, 860px); height: auto`
- [x] Hero image uses `object-fit: cover`
- [x] All `position: absolute` layers inside parent with explicit non-viewport height
- [x] All image paths are relative (`images/x.jpg` not `/images/x.jpg`)
- [x] `vercel.json` is `{ "cleanUrls": true }` only — no rewrites
- [x] No `public/` folder, no `.gitignore`
- [x] `download` blank file present
- [ ] **Standalone tab** — open index.html directly, verify hero renders at all widths
- [ ] **Embedded iframe** — test in WordPress iframe with auto-height script

---

## 🔗 External assets (no local copies needed)

| Asset | Source |
|-------|--------|
| Google Fonts (Playfair Display, DM Sans) | fonts.googleapis.com |
| Font Awesome icons | cdn.jsdelivr.net |
| Hero background image | media.base44.com |
| Press logo images | precisiontelemed.com/wp-content/uploads/ |
