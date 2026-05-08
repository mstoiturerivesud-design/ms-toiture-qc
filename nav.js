/* ═══════════════════════════════
   MS Toiture — Navigation & Footer
   ═══════════════════════════════ */

const NAV_HTML = `
<header class="topbar">
  <div class="wrap">
    <div class="nav">
      <a class="brand" href="index.html" aria-label="MS Toiture - accueil">
        <span class="brand-logo-wrap">
          <img src="logo.png" alt="MS Toiture - Couvreur Rive-Sud"/>
        </span>
      </a>
      <nav class="menu" aria-label="Navigation">
        <a href="index.html"       data-page="index">Accueil</a>
        <a href="services.html"    data-page="services">Services</a>
        <a href="realisations.html" data-page="realisations">Réalisations</a>
        <a href="methode.html"     data-page="methode">Notre méthode</a>
        <a href="zones.html"       data-page="zones">Zones desservies</a>
        <a href="contact.html"     data-page="contact">Contact</a>
      </nav>
      <div class="nav-cta">
        <a class="btn" href="tel:+15798860202">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 3.18 2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          Appeler
        </a>
        <a class="btn primary" href="contact.html">Soumission gratuite</a>
      </div>
    </div>
  </div>
</header>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="wrap">
    <div class="footer-inner">
      <div>
        <strong>MS Toiture</strong>
        <div>© <span id="yr"></span> MS Toiture — Brossard, QC · NEQ 2281489999</div>
        <div style="margin-top:4px">
          <a href="tel:+15798860202">1 (579) 886-0202</a> ·
          <a href="mailto:mstoiture.rivesud@gmail.com">mstoiture.rivesud@gmail.com</a>
        </div>
      </div>
      <div class="flinks">
        <a href="index.html">Accueil</a>
        <a href="services.html">Services</a>
        <a href="realisations.html">Réalisations</a>
        <a href="methode.html">Notre méthode</a>
        <a href="zones.html">Zones</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  </div>
  <div style="text-align:center;padding:10px 0 6px"><span class="qc-badge">Fier artisan québécois</span></div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Injecter nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  // Injecter footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  // Année footer
  document.getElementById('yr').textContent = new Date().getFullYear();
  // Marquer page active
  const page = document.body.dataset.page;
  const link = document.querySelector(`.menu a[data-page="${page}"]`);
  if (link) link.classList.add('active');

  if (!document.querySelector('.snow-layer')) {
    const snowLayer = document.createElement('div');
    snowLayer.className = 'snow-layer';
    snowLayer.setAttribute('aria-hidden', 'true');
    document.body.prepend(snowLayer);

    const snowCount = window.matchMedia('(max-width: 640px)').matches ? 24 : 42;
    for (let i = 0; i < snowCount; i += 1) {
      const flake = document.createElement('span');
      flake.className = 'snowflake';
      flake.innerHTML = `
        <svg viewBox="-16 -16 32 32" aria-hidden="true" focusable="false">
          <g fill="none" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round">
            <path d="M0-14v28"/>
            <path d="M-12.1-7 12.1 7"/>
            <path d="M12.1-7-12.1 7"/>
            <path d="M-3.8-12.3 0-8.8l3.8-3.5"/>
            <path d="M-3.8 12.3 0 8.8l3.8 3.5"/>
            <path d="M-12.4-2.7-7.6-1.5-8.8-6.3"/>
            <path d="M12.4 2.7 7.6 1.5 8.8 6.3"/>
            <path d="M12.4-2.7 7.6-1.5 8.8-6.3"/>
            <path d="M-12.4 2.7-7.6 1.5-8.8 6.3"/>
            <circle cx="0" cy="0" r="1.45"/>
          </g>
        </svg>`;
      flake.style.setProperty('--left', `${Math.random() * 100}%`);
      flake.style.setProperty('--size', `${10 + Math.random() * 12}px`);
      flake.style.setProperty('--opacity', `${0.20 + Math.random() * 0.36}`);
      flake.style.setProperty('--fall', `${12 + Math.random() * 14}s`);
      flake.style.setProperty('--sway', `${2.8 + Math.random() * 4.4}s`);
      flake.style.setProperty('--spin', `${9 + Math.random() * 13}s`);
      flake.style.setProperty('--drift', `${-90 + Math.random() * 180}px`);
      flake.style.setProperty('--delay', `${Math.random() * -24}s`);
      snowLayer.appendChild(flake);
    }
  }

  const revealItems = document.querySelectorAll('.section, .panel, .photo-box, .stat, .hero-card');
  revealItems.forEach((item) => item.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
});
