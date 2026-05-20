# Audio del tiempo en A Coruña

Archivos usados por `tiempo-coruna.html`:

| Archivo | Uso |
|---------|-----|
| `gaviotas.mp3` | Con **Sol** activo |
| `viento.mp3` | Con **Viento** activo |
| `lluvia.mp3` | Con **Lluvia** activo |
| `trueno.mp3` | Golpes aleatorios junto a la lluvia |
| `tormenta.mp3` | Capa de tormenta en el **apocalipsis** |
| `apocalip.m4a` | Música épica en el **apocalipsis** (junto con lluvia, tormenta y truenos) |

Todos los bucles se mezclan según el estado de los interruptores. El trueno no hace bucle: suena **una sola vez** al activar la lluvia (o al entrar en el apocalipsis).

En **móvil** se usa `<audio>` HTML (corte inmediato al cambiar). En escritorio, Web Audio si el navegador lo permite. Hace falta **un toque** en la página para desbloquear el audio (iOS/Android).
