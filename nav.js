/* ═══════════════════════════════
   MS Toiture — Navigation & Footer
   ═══════════════════════════════ */

const NAV_HTML = `
<header class="topbar">
  <div class="wrap">
    <div class="nav">
      <a class="brand" href="index.html">
        <div class="brand-logo">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M4 14L16 4L28 14V28H20V20H12V28H4V14Z" fill="white" fill-opacity=".92"/>
            <rect x="13" y="20" width="6" height="8" rx="1" fill="#2a6dd9" fill-opacity=".85"/>
          </svg>
        </div>
        <div>
          <strong>MS Toiture</strong>
          <span>Brossard, QC · Rive-Sud</span>
        </div>
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
});
