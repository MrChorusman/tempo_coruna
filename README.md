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
- **Sonido ambiental por capas** con archivos en `audio/` (gaviotas, viento, lluvia, truenos, tormenta y pista de apocalipsis).
- Mensajes de estado que describen el clima actual.

## Uso

1. Abrir `tiempo-coruna.html` en un navegador moderno.
2. Hacer clic en cualquiera de los botones del panel para activar/desactivar condiciones.
3. El botón `3 días de buen tiempo` muestra un modal de confirmación antes de iniciar la secuencia apocalíptica.

## Archivo principal

- `tiempo-coruna.html`: documento HTML autosuficiente con todo el CSS y JavaScript embebido.
- `audio/`: pistas MP3/M4A (gaviotas, viento, lluvia, trueno, tormenta, apocalip). Ver `audio/README.md`.

## Notas

- No requiere servidor ni instalación adicional.
- Funciona directamente desde el sistema de archivos o desde cualquier servidor estático.
- El audio se sirve desde la carpeta `audio/` junto a la página (mejor abrir con un servidor estático local si el navegador bloquea rutas relativas).
- Con `prefers-reduced-motion: reduce` el sonido arranca desactivado; puedes activarlo con el botón 🔊.
- El contenido es principalmente una demostración visual y de interacción, no una aplicación meteorológica real.
