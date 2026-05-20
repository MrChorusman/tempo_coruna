# Seguridad — tempo_coruna

Página estática sin backend. Superficie de ataque reducida; estas son las medidas aplicadas y recomendaciones.

## Medidas en la página

- **Content-Security-Policy** (meta): scripts y estilos solo del propio origen, más Google Fonts; sin `eval`, sin iframes embebidos, `frame-ancestors 'none'`.
- **Referrer** `strict-origin-when-cross-origin`.
- **Rutas en URL**: solo slugs en lista blanca (`sol`, `lluvia`, `apocalipsis`, etc.); rechazo de caracteres raros.
- **Modal de confirmación**: construido con DOM (`textContent`), sin `innerHTML` con datos externos.
- **Sin formularios** ni envío de datos a servidores propios.
- **Audio e imágenes** servidos desde el mismo origen (GitHub Pages).
- **Analítica opcional** vía `analytics-config.js` (proveedor externo); ver `ANALYTICS.md` y `privacidad.html`.

## Lo que no almacena la página

- No hay cookies propias, localStorage ni cuentas de usuario.
- No se integran analíticas de terceros en el HTML actual.

## Limitaciones (aceptadas en un HTML monolítico)

- `script-src 'unsafe-inline'` y `style-src 'unsafe-inline'`: necesarios porque CSS y JS van en el mismo archivo. Para endurecer más habría que extraer a ficheros externos con nonces.
- Fuentes de **Google Fonts**: conexión a `fonts.googleapis.com` / `fonts.gstatic.com`.

## Reportar problemas

Abre un issue en el repositorio describiendo el navegador, la URL y los pasos para reproducir.

## Despliegue

- Mantén el repositorio público solo si quieres Pages público; no subas secretos ni `.env`.
- Revisa que los archivos en `audio/` sean pistas propias o con licencia válida.
