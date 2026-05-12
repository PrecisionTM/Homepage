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
    ├── logo-main-transparent.png      ← ⚠️ must copy from source
    ├── logo-text-transparent.png      ← ⚠️ must copy from source
    ├── dr-palumbo.jpg                 ← ⚠️ must copy from source
    ├── dr-patel.jpg                   ← ⚠️ must copy from source
    ├── dr-ahmed.jpg                   ← ⚠️ must copy from source
    ├── dr-akler.jpg                   ← ⚠️ must copy from source
    ├── dr-cattelane.jpg               ← ⚠️ must copy from source
    ├── angela-kifer-thomas.jpg        ← ⚠️ must copy from source
    ├── brittany-umana.jpg             ← ⚠️ must copy from source
    ├── brett-whaley.jpg               ← ⚠️ must copy from source
    ├── michael-gype.jpg               ← ⚠️ must copy from source
    ├── samuel-palmer.jpg              ← ⚠️ must copy from source
    ├── angel-colon-molero.jpg         ← ⚠️ must copy from source
    ├── ugc-1-unboxing.jpg             ← already present ✓
    ├── ugc-2-day5-update.jpg          ← already present ✓
    ├── ugc-3-nad-clarity.jpg          ← already present ✓
    ├── ugc-4-massive-difference.jpg   ← already present ✓
    ├── ugc-5-reviews.jpg              ← already present ✓
    └── ugc-6-day1.jpg                 ← already present ✓
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
- [x] Hero uses `min-height: clamp(480px, 52vw, 720px); height: auto`
- [x] Hero image uses `object-fit: cover`
- [x] All `position: absolute` layers inside parent with explicit non-viewport height
- [x] All image paths are relative (`images/x.jpg` not `/images/x.jpg`)
- [x] `vercel.json` is `{ "cleanUrls": true }` only — no rewrites
- [x] No `public/` folder, no `.gitignore`
- [x] `download` blank file present
- [ ] **Standalone tab** — open index.html directly, verify hero renders at all widths
- [ ] **Embedded iframe** — test in WordPress iframe with auto-height script

---

## 🗑️ Removed / no longer referenced

| File | Reason |
|------|---------|
| `coach-chris.jpg` | Workout section removed — no longer referenced in HTML |

---

## 🔗 External assets (no local copies needed)

| Asset | Source |
|-------|--------|
| Google Fonts (Playfair Display, DM Sans) | fonts.googleapis.com |
| Google Fonts (Cormorant Garamond) | fonts.googleapis.com |
| Hero background image | media.base44.com |
| Press logo images | precisiontelemed.com/wp-content/uploads/ |
