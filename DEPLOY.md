# Precision Telemed — Homepage · WordPress Deploy Guide

This package contains everything needed to embed the Precision Telemed homepage
natively into WordPress. No iframe, no Vercel dependency — content lives directly
on precisiontelemed.com for full SEO credit.

---

## 📁 Files in this package

```
Homepage-package/
├── index.html    ← Full homepage HTML (no inline CSS or JS)
├── styles.css    ← All styles
├── script.js     ← All JavaScript
└── DEPLOY.md     ← This file
```

Images are **not** in this folder — they are served directly from the
WordPress Media Library at:
`https://precisiontelemed.com/wp-content/uploads/2026/05/[filename]`

All `src` attributes in `index.html` already use those absolute URLs.
**No edits needed to index.html after images are uploaded.**

---

## 🖼️ Step 1 — Upload Images to WordPress Media Library

Upload all 19 image files from `vercel-package/images/` to the WordPress
Media Library. WordPress will store them at the expected URL path automatically
as long as you upload in May 2026 (date-based folder).

| Filename | Used in |
|----------|---------|
| `logo-text-transparent.png` | Floating CTA bar |
| `logo-main-transparent.png` | Reserved / alternate |
| `dr-palumbo.jpg` | Provider carousel |
| `dr-patel.jpg` | Provider carousel |
| `brittany-umana.jpg` | Provider carousel |
| `dr-ahmed.jpg` | Provider carousel |
| `brett-whaley.jpg` | Provider carousel |
| `michael-gype.jpg` | Provider carousel |
| `dr-cattelane.jpg` | Provider carousel |
| `angela-kifer-thomas.jpg` | Provider carousel |
| `samuel-palmer.jpg` | Provider carousel |
| `dr-akler.jpg` | Provider carousel |
| `angel-colon-molero.jpg` | Provider carousel |
| `ugc-1-unboxing.jpg` | UGC grid |
| `ugc-2-day5-update.jpg` | UGC grid |
| `ugc-3-nad-clarity.jpg` | UGC grid |
| `ugc-4-massive-difference.jpg` | UGC grid |
| `ugc-5-reviews.jpg` | UGC grid |
| `ugc-6-day1.jpg` | UGC grid |

> **Verify:** After uploading, click any image in the Media Library → "Copy URL".
> It should match `https://precisiontelemed.com/wp-content/uploads/2026/05/[filename]`.
> If the year/month folder differs, find-replace the base URL in `index.html` before pasting.

---

## 🎨 Step 2 — Add CSS

1. In WordPress admin go to **Appearance → Customize → Additional CSS**
2. Paste the entire contents of `styles.css`
3. Click **Publish**

> **Alternative:** If using a child theme, paste into the child theme's `style.css`
> after the theme header comment block.

---

## 📄 Step 3 — Add HTML

1. Open (or create) the target WordPress page in the block editor
2. Add a **Custom HTML** block
3. Paste the entire contents of `index.html` into that block
4. The WordPress theme provides the nav and footer — nothing extra needed
5. **Update / Publish** the page

---

## ⚙️ Step 4 — Add JavaScript

Use the **Code Snippets** plugin (free, wordpress.org/plugins/code-snippets):

1. Go to **Snippets → Add New**
2. Title: `Precision Telemed Homepage JS`
3. Code type: **JavaScript**
4. Run location: **Front end only**
5. Insert at: **End of body (footer)**
6. Paste the entire contents of `script.js`
7. **Save and Activate**

> **Why footer?** The script references DOM elements (`#floating-cta`,
> `#providerCarousel`, etc.) that must exist before the script runs.
> Footer placement guarantees this without needing a DOMContentLoaded wrapper.

---

## ✅ Pre-Launch Checklist

### Images
- [ ] All 19 images uploaded to Media Library
- [ ] Spot-check 2–3 URLs in browser — confirm 200 OK, not 404
- [ ] Provider carousel photos display correctly (not broken)
- [ ] UGC grid photos display correctly

### CSS
- [ ] Additional CSS saved and published
- [ ] No existing theme CSS visibly conflicts with the homepage sections

### JavaScript
- [ ] Code Snippet activated
- [ ] Scroll down 400px — floating CTA bar appears
- [ ] Close (✕) button on floating CTA dismisses it
- [ ] Filter tabs (All / Weight Loss / Hormones / Longevity) filter the treatment list
- [ ] Provider carousel scrolls left/right with arrow buttons
- [ ] Provider carousel drag-scrolls with mouse and touch swipe
- [ ] Stats section counts up when scrolled into view
- [ ] Scroll reveal fade-ins trigger on each section

### Responsive
- [ ] Test on mobile (375px) — hero, carousel, UGC grid all correct
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1280px+)
- [ ] Floating CTA collapses to compact layout on mobile (<560px)

---

## 🔗 External assets loaded by index.html (no action needed)

| Asset | Source |
|-------|--------|
| Playfair Display, DM Sans fonts | fonts.googleapis.com |
| Cormorant Garamond font | fonts.googleapis.com |
| Hero background photo | media.base44.com |
| News banner logos (img-1 through img-6) | precisiontelemed.com/wp-content/uploads/2025/11/ |

---

## 🔑 Key CTA URLs (all hardcoded in index.html)

| Button | URL |
|--------|-----|
| Find Your Treatment | precisiontelemed.com/get-started/ |
| Not Sure? Consult First | precisiontelemed.com/start-general-consultation-program/ |
| Floating CTA — Get Started | precisiontelemed.com/get-started/ |
| Mid-page CTA banner | precisiontelemed.com/get-started/ |
| Compounded Semaglutide | precisiontelemed.com/compounded-semaglutide/ |
| Compounded Tirzepatide | precisiontelemed.com/compounded-tirzepatide/ |
| Testosterone (TRT) | precisiontelemed.com/testosterone/ |
| Sermorelin Peptide | precisiontelemed.com/sermorelin/ |
| NAD+ | precisiontelemed.com/nad/ |
| Certificates of Analysis | precisiontelemed.com/cofas/ |
| Trustpilot reviews | trustpilot.com/review/precisiontelemed.com |
| Instagram | instagram.com/precisiontelemed |
