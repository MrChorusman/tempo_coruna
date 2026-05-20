/**
 * Configuración de estadísticas — edita y sube a GitHub.
 * Guía: ANALYTICS.md
 *
 * provider: 'cloudflare' | 'plausible' | 'ga4' | 'none'
 */
window.TEMPO_ANALYTICS = {
  provider: 'none',

  // Gratis, sin cookies, aguanta mucho tráfico — recomendado si crece el viral
  // Dashboard: https://dash.cloudflare.com → Analytics & Logs → Web Analytics → Add site
  cloudflare: {
    token: '' // pega aquí el token del beacon (ej. "a1b2c3d4-...")
  },

  // Privado, panel claro; de pago tras prueba según volumen
  // https://plausible.io → Add website → dominio: mrchorusman.github.io
  plausible: {
    domain: 'mrchorusman.github.io',
    src: 'https://plausible.io/js/script.js'
  },

  // Gratis ilimitado; en la UE conviene banner de cookies (se muestra solo con ga4)
  ga4: {
    measurementId: '' // ej. G-XXXXXXXXXX
  }
};
