/* ═══════════════════════════════════════════════════════════════
   Precision Telemed — Homepage Scripts
   Extracted from index.html for WordPress native embedding
═══════════════════════════════════════════════════════════════ */

// ── Floating CTA Bar ──────────────────────────────────────────
(function(){
  const bar = document.getElementById('floating-cta');

  // Inject close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'fcta-close';
  closeBtn.setAttribute('aria-label', 'Dismiss');
  closeBtn.innerHTML = '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  bar.querySelector('.fcta-inner').appendChild(closeBtn);

  let dismissed = false;

  closeBtn.addEventListener('click', () => {
    dismissed = true;
    bar.classList.remove('visible');
  });

  function checkScroll() {
    if (dismissed) return;
    if (window.scrollY > 400) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();
})();

// ── Treatment filter ──────────────────────────────────────────
const tabs = document.querySelectorAll('.filter-tab');
const rows = document.querySelectorAll('#treatment-list .treatment-row');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    rows.forEach(row => {
      const cat = row.dataset.cat;
      if (filter === 'all' || cat === filter || cat === 'consult') {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
});

// ── Scroll reveal ─────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, {
  threshold: 0,
  rootMargin: '0px 0px -40px 0px'
});
revealEls.forEach(el => observer.observe(el));

// ── Doctor carousel ───────────────────────────────────────────
const carousel   = document.getElementById('providerCarousel');
const dotsWrap   = document.getElementById('carouselDots');
const CARD_W     = () => carousel.querySelector('.provider-card')?.offsetWidth + 18 || 238;
const VISIBLE    = () => Math.round(carousel.offsetWidth / CARD_W());
const TOTAL      = () => carousel.querySelectorAll('.provider-card').length;

// Build dots
function buildDots() {
  dotsWrap.innerHTML = '';
  const pages = Math.ceil(TOTAL() / VISIBLE());
  for (let i = 0; i < pages; i++) {
    const d = document.createElement('button');
    d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goToPage(i));
    dotsWrap.appendChild(d);
  }
}

function updateDots() {
  const page = Math.round(carousel.scrollLeft / (CARD_W() * VISIBLE()));
  dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
    d.classList.toggle('active', i === page);
  });
}

function goToPage(page) {
  carousel.scrollTo({ left: page * CARD_W() * VISIBLE(), behavior: 'smooth' });
}

function scrollCarousel(dir) {
  carousel.scrollBy({ left: dir * CARD_W() * Math.max(1, VISIBLE() - 1), behavior: 'smooth' });
}

// Expose scrollCarousel globally for inline onclick attributes
window.scrollCarousel = scrollCarousel;

carousel.addEventListener('scroll', updateDots, { passive: true });
window.addEventListener('resize', buildDots);

// Drag-to-scroll (mouse)
let isDragging = false, startX = 0, scrollStart = 0;
carousel.addEventListener('mousedown', e => {
  isDragging = true; startX = e.pageX; scrollStart = carousel.scrollLeft;
  carousel.style.userSelect = 'none';
});
window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  carousel.scrollLeft = scrollStart - (e.pageX - startX);
});
window.addEventListener('mouseup', () => { isDragging = false; carousel.style.userSelect = ''; });

// Touch swipe
let touchStartX = 0, touchScrollStart = 0;
carousel.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
  touchScrollStart = carousel.scrollLeft;
}, { passive: true });
carousel.addEventListener('touchmove', e => {
  const dx = touchStartX - e.touches[0].clientX;
  carousel.scrollLeft = touchScrollStart + dx;
}, { passive: true });
carousel.addEventListener('touchend', updateDots, { passive: true });

// Init dots after photos may have loaded
setTimeout(buildDots, 200);

// Rebuild dots if carousel children mutate
const dotRebuildObserver = new MutationObserver(() => buildDots());
dotRebuildObserver.observe(carousel, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
setTimeout(() => { buildDots(); dotRebuildObserver.disconnect(); }, 3000);

// ── Count-up animation for stats ──────────────────────────────
(function(){
  const statEls = document.querySelectorAll('.stat-val[data-count]');
  if (!statEls.length) return;

  function easeOutQuart(t){ return 1 - Math.pow(1 - t, 4); }

  function animateCount(el) {
    const target   = parseInt(el.dataset.count, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1600;
    const start    = performance.now();

    function tick(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value    = Math.round(easeOutQuart(progress) * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        statsObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

  statEls.forEach(el => statsObserver.observe(el));
})();
