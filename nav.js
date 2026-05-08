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

  const setWeatherEffect = (effect) => {
    document.body.classList.remove('weather-snow', 'weather-rain');
    if (effect === 'snow') document.body.classList.add('weather-snow');
    if (effect === 'rain') document.body.classList.add('weather-rain');
  };

  if (!document.querySelector('.weather-effects')) {
    const weatherEffects = document.createElement('div');
    weatherEffects.className = 'weather-effects';
    weatherEffects.setAttribute('aria-hidden', 'true');

    const snowLayer = document.createElement('div');
    snowLayer.className = 'snow-layer';
    const rainLayer = document.createElement('div');
    rainLayer.className = 'rain-layer';
    weatherEffects.append(snowLayer, rainLayer);
    document.body.prepend(weatherEffects);

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

    const rainCount = window.matchMedia('(max-width: 640px)').matches ? 42 : 76;
    for (let i = 0; i < rainCount; i += 1) {
      const drop = document.createElement('span');
      drop.className = 'raindrop';
      drop.style.setProperty('--left', `${Math.random() * 100}%`);
      drop.style.setProperty('--length', `${18 + Math.random() * 18}px`);
      drop.style.setProperty('--opacity', `${0.18 + Math.random() * 0.28}`);
      drop.style.setProperty('--fall', `${0.72 + Math.random() * 0.78}s`);
      drop.style.setProperty('--drift', `${-18 + Math.random() * 12}px`);
      drop.style.setProperty('--delay', `${Math.random() * -2.6}s`);
      rainLayer.appendChild(drop);
    }
  }

  const weatherOverride = new URLSearchParams(window.location.search).get('weather');
  const weatherToEffect = (weather) => {
    const code = Number(weather.weather_code);
    const snow = Number(weather.snowfall || 0);
    const rain = Number(weather.rain || 0) + Number(weather.showers || 0) + Number(weather.precipitation || 0);
    if (weatherOverride === 'snow' || weatherOverride === 'rain' || weatherOverride === 'clear') return weatherOverride;
    if (snow > 0 || [71, 73, 75, 77, 85, 86].includes(code)) return 'snow';
    if (rain > 0 || [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code)) return 'rain';
    return 'clear';
  };

  const readCachedWeather = () => {
    try {
      const cached = JSON.parse(localStorage.getItem('msToitureWeather') || 'null');
      if (cached && Date.now() - cached.time < 30 * 60 * 1000) return cached.current;
    } catch (error) {
      return null;
    }
    return null;
  };

  const applyWeather = (current) => setWeatherEffect(weatherToEffect(current));
  const cachedWeather = readCachedWeather();
  if (cachedWeather && !weatherOverride) applyWeather(cachedWeather);
  if (weatherOverride) {
    setWeatherEffect(weatherOverride);
  } else {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=45.45&longitude=-73.47&current=weather_code,precipitation,rain,showers,snowfall&timezone=America%2FToronto', { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : null)
      .then((data) => {
        if (!data || !data.current) return;
        localStorage.setItem('msToitureWeather', JSON.stringify({ time: Date.now(), current: data.current }));
        applyWeather(data.current);
      })
      .catch(() => {
        if (!cachedWeather) setWeatherEffect('snow');
      });
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
