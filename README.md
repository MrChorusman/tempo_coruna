# tempo_coruna

`tempo_coruna` es una pequeña página web estática que simula el tiempo atmosférico en A Coruña con una experiencia visual interactiva.

## Descripción

El proyecto consiste en un único archivo HTML (`tiempo-coruna.html`) que combina estilos CSS y lógica JavaScript para mostrar un panel de controles de clima con diferentes estados:

- Sol
- Viento
- Lluvia
- Nubes
- Niebla
- 3 días de buen tiempo (modo apocalipsis meteorológico)

El estilo se adapta según la condición activa y ofrece efectos animados de fondo, partículas, niebla, líneas de viento y relámpagos.

## Características

- Interfaz responsiva y estilo visual inspirado en el clima atlántico.
- Cambios dinámicos del fondo según las condiciones meteorológicas.
- Animaciones de partículas para lluvia y efecto de viento.
- Modo especial `3 días de buen tiempo` que inicia una secuencia apocalíptica con relámpagos y glitch visual.
- Botón de accesibilidad para desactivar animaciones.
- **Sonido ambiental por capas** con archivos en `audio/` (pistas comprimidas ~1,2 MB en total).
- **PWA** (manifest + iconos) y meta Open Graph / Twitter para compartir.
- Preludio del apocalipsis: cuenta **1 DÍA → 2 DÍA → 3 DÍA**, fundido y temblor del panel.
- Mensajes de estado que describen el clima actual.
- Política de seguridad básica (CSP, rutas validadas): ver `SECURITY.md`.

## Uso

1. Abrir la página en un navegador moderno ([versión en línea](https://mrchorusman.github.io/tempo_coruna/)).
2. Hacer clic en cualquiera de los botones del panel para activar/desactivar condiciones.
3. El botón `3 días de buen tiempo` muestra un modal de confirmación antes de iniciar la secuencia apocalíptica.
4. En móvil puedes **añadir a la pantalla de inicio** (PWA ligera con icono de la torre).

## URLs para compartir

| Enlace amigable | Estado |
|-----------------|--------|
| `…/tempo_coruna/#/sol` | Sol (+ viento por reglas) |
| `…/tempo_coruna/#/lluvia` | Lluvia |
| `…/tempo_coruna/#/viento` | Viento |
| `…/tempo_coruna/#/nubes` | Nubes |
| `…/tempo_coruna/#/niebla` | Niebla |
| `…/tempo_coruna/#/apocalipsis` | Tres días / apocalipsis |

También funcionan rutas cortas vía `404.html` de GitHub Pages, por ejemplo `…/tempo_coruna/lluvia` → redirige al hash correspondiente.

## Dominio propio (GitHub Pages)

Puedes publicar el sitio en una URL corta (por ejemplo `https://tiempo.coruna.es` o `https://meteo.tudominio.com`) en lugar de `mrchorusman.github.io/tempo_coruna/`.

### Requisitos

- Un dominio o subdominio que controles (registrador: Cloudflare, Namecheap, Google Domains, etc.).
- Acceso a la **zona DNS** de ese dominio.
- Repositorio en GitHub con Pages activo en la rama `main` (como ahora).

### Paso 1 — Activar GitHub Pages (si no lo está)

1. En GitHub: repositorio **MrChorusman/tempo_coruna** → **Settings** → **Pages**.
2. **Source**: Deploy from branch → rama **`main`** → carpeta **`/ (root)`** → Save.
3. Comprueba que funciona: https://mrchorusman.github.io/tempo_coruna/

### Paso 2 — Configurar el dominio en GitHub

1. En la misma página **Settings → Pages**, sección **Custom domain**.
2. Escribe el dominio que quieras usar, por ejemplo:
   - `tiempo.coruna.es` (subdominio), o
   - `www.tudominio.com` (si quieres la raíz, suele ser más fácil usar `www`).
3. Pulsa **Save**. GitHub comprobará el DNS (puede tardar minutos u horas).

Opcional: activa **Enforce HTTPS** cuando GitHub lo permita (certificado Let's Encrypt automático).

### Paso 3 — Registros DNS en tu proveedor

En el panel DNS del dominio, crea **uno** de estos (según lo que hayas puesto en GitHub):

| Objetivo en GitHub | Tipo | Nombre / host | Valor |
|--------------------|------|---------------|--------|
| Subdominio (`tiempo.coruna.es`) | `CNAME` | `tiempo` | `mrchorusman.github.io` |
| Dominio raíz (`tudominio.com`) | `A` | `@` | `185.199.108.153` |
| | `A` | `@` | `185.199.109.153` |
| | `A` | `@` | `185.199.110.153` |
| | `A` | `@` | `185.199.111.153` |
| Raíz con redirección | `ALIAS` / `ANAME` | `@` | `mrchorusman.github.io` (solo si tu DNS lo soporta, p. ej. Cloudflare) |

Para **www**: registro `CNAME` de `www` → `mrchorusman.github.io`.

Las IPs de GitHub Pages pueden cambiar; la lista oficial está en la [documentación de GitHub](https://docs.github.com/es/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).

### Paso 4 — Comprobar y actualizar metadatos (recomendado)

Cuando el dominio responda con HTTPS:

1. Abre el sitio en el navegador y verifica audio, PWA y rutas `#/lluvia`, etc.
2. En `tiempo-coruna.html`, actualiza las URLs absolutas de compartir si quieres que las previews de redes usen tu dominio:
   - `og:url`
   - `og:image`
   - `twitter:image`
   - `link rel="canonical"`
   
   Ejemplo (sustituye por tu dominio real):

   ```html
   <meta property="og:url" content="https://tiempo.coruna.es/"/>
   <meta property="og:image" content="https://tiempo.coruna.es/og-image.jpg"/>
   <link rel="canonical" href="https://tiempo.coruna.es/"/>
   ```

3. Haz commit y push a `main`; GitHub Pages redesplegará solo.

### Paso 5 — URLs con dominio propio

Con dominio en la raíz del sitio (`tiempo.coruna.es` apuntando directamente a este repo):

| Enlace | Estado |
|--------|--------|
| `https://tiempo.coruna.es/#/sol` | Sol |
| `https://tiempo.coruna.es/lluvia` | Lluvia (vía `404.html`) |

Si el dominio sigue siendo **proyecto** (`usuario.github.io/tempo_coruna/`), las rutas cortas llevan ese prefijo; el dominio personalizado en GitHub Pages para un **repo de proyecto** suele publicarse como `tudominio.com` sirviendo **solo** ese repositorio (sin `/tempo_coruna/` en la URL).

### Problemas frecuentes

- **DNS_PROBE_FINISHED_NXDOMAIN**: el CNAME/A aún no ha propagado; espera hasta 24–48 h (a menudo &lt; 1 h).
- **Certificado HTTPS pendiente**: en Pages, desmarca y vuelve a marcar *Enforce HTTPS* tras propagar DNS.
- **404 en rutas cortas**: confirma que `404.html` está en la raíz del repo (ya incluido).
- **Audio no suena**: igual que en GitHub: hace falta un toque en la página; el dominio no cambia eso.

## Archivo principal

- `tiempo-coruna.html`: documento HTML autosuficiente con todo el CSS y JavaScript embebido.
- `audio/`: pistas MP3/M4A (gaviotas, viento, lluvia, trueno, tormenta, apocalip). Ver `audio/README.md`.

## Notas

- No requiere servidor ni instalación adicional.
- Funciona directamente desde el sistema de archivos o desde cualquier servidor estático.
- El audio se sirve desde la carpeta `audio/` junto a la página (mejor abrir con un servidor estático local si el navegador bloquea rutas relativas).
- Con `prefers-reduced-motion: reduce` el sonido arranca desactivado; puedes activarlo con el botón 🔊.
- El contenido es principalmente una demostración visual y de interacción, no una aplicación meteorológica real.
