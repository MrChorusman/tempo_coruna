# Estadísticas de visitas

La página carga `analytics-config.js` + `analytics.js`. Hasta que configures un proveedor, **no se envía nada** (`provider: 'none'`).

## Opción recomendada (gratis, 500k+ visitas): Cloudflare Web Analytics

1. Cuenta en [Cloudflare](https://dash.cloudflare.com/sign-up) (gratis).
2. **Analytics & Logs** → **Web Analytics** → **Add a site**.
3. Nombre: `mrchorusman.github.io` (o tu dominio si cambias).
4. Copia el **token** del snippet (solo el valor de `token`, no todo el script).
5. En `analytics-config.js`:

```javascript
window.TEMPO_ANALYTICS = {
  provider: 'cloudflare',
  cloudflare: { token: 'TU_TOKEN_AQUI' }
};
```

6. Commit, push a `main`. En unos minutos verás visitas, países, dispositivos y referrers en el panel.

No usa cookies; no hace falta banner de cookies solo por esto (sigue siendo buena idea el enlace a `privacidad.html`).

## Plausible (privado, panel sencillo)

1. [plausible.io](https://plausible.io) → añade el sitio `mrchorusman.github.io`.
2. En `analytics-config.js`:

```javascript
provider: 'plausible',
plausible: { domain: 'mrchorusman.github.io' }
```

Tras la prueba gratuita, el plan de pago depende del volumen.

## Google Analytics 4 (gratis, más datos)

1. [analytics.google.com](https://analytics.google.com) → propiedad → ID `G-XXXXXXXX`.
2. Config:

```javascript
provider: 'ga4',
ga4: { measurementId: 'G-XXXXXXXX' }
```

En la UE la página mostrará un aviso de cookies hasta que el usuario acepte.

## Comprobar que funciona

1. Despliega con `provider` distinto de `none`.
2. Abre la web en el móvil (o ventana privada).
3. En el panel del proveedor, mira **tiempo real** / visitas de los últimos minutos.

## Privacidad

Detalle en [privacidad.html](privacidad.html). Chimeno Software no almacena visitas en servidor propio; solo el proveedor que elijas.
