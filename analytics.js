(function () {
  const cfg = window.TEMPO_ANALYTICS || { provider: 'none' };
  if (!cfg.provider || cfg.provider === 'none') return;

  function injectScript(attrs) {
    const s = document.createElement('script');
    Object.keys(attrs).forEach(function (k) {
      if (attrs[k] != null && attrs[k] !== '') s.setAttribute(k, attrs[k]);
    });
    s.async = true;
    document.head.appendChild(s);
  }

  function loadGa4(measurementId) {
    injectScript({ src: 'https://www.googletagmanager.com/gtag/js?id=' + measurementId });
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
  }

  function showGa4Consent(onAccept) {
    var banner = document.getElementById('analytics-consent');
    if (!banner) return onAccept();
    if (localStorage.getItem('tempo_analytics_ok') === '1') return onAccept();
    if (localStorage.getItem('tempo_analytics_ok') === '0') return;

    banner.classList.add('visible');
    document.getElementById('analytics-accept').onclick = function () {
      localStorage.setItem('tempo_analytics_ok', '1');
      banner.classList.remove('visible');
      onAccept();
    };
    document.getElementById('analytics-decline').onclick = function () {
      localStorage.setItem('tempo_analytics_ok', '0');
      banner.classList.remove('visible');
    };
  }

  if (cfg.provider === 'cloudflare' && cfg.cloudflare && cfg.cloudflare.token) {
    injectScript({
      defer: '',
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      'data-cf-beacon': JSON.stringify({ token: cfg.cloudflare.token })
    });
    return;
  }

  if (cfg.provider === 'plausible' && cfg.plausible && cfg.plausible.domain) {
    injectScript({
      defer: '',
      'data-domain': cfg.plausible.domain,
      src: cfg.plausible.src || 'https://plausible.io/js/script.js'
    });
    return;
  }

  if (cfg.provider === 'ga4' && cfg.ga4 && cfg.ga4.measurementId) {
    if (localStorage.getItem('tempo_analytics_ok') === '1') {
      loadGa4(cfg.ga4.measurementId);
      return;
    }
    if (localStorage.getItem('tempo_analytics_ok') === '0') return;

    function start() {
      showGa4Consent(function () { loadGa4(cfg.ga4.measurementId); });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start);
    } else {
      start();
    }
  }
})();
