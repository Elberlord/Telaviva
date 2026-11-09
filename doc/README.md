# Tela Viva v1.2 — modelos fotográficos y colores corregidos

Publicación con GitHub Pages. Cada responsabilidad de JavaScript está en `js/`; la documentación en `doc/`.

- `js/catalogo-vista.js`: corrección de selección de colores, que ahora llama a `TV.render()`.
- `js/fotografias.js`: fuente de las fotos, autor y ruta local; todas son **referencias** de Pexels.
- `js/visualizador.js`: foto de modelo según prenda y tintado aproximado de zonas neutras de su ropa; textura visual en muestra de color.
- `js/prendas.js`: vista SVG de respaldo, cuando las fotos no cargan.
- `js/cotizaciones.js`: envía por WhatsApp tela/color/prenda/talla/cantidad/notas/enlace.
- `js/config.js`: completar `whatsappNumber` sin `+`, con código de país, p.ej. 506XXXXXXXX.

## Limitación importante
El tinte es una estimación gráfica: no cambia físicamente la caída, brillo ni confección de una fotografía de referencia. Algunas fotos pueden no admitir simulación si no hay regiones neutras adecuadas, y entonces se muestran sin recolorear. No se presentan como productos reales disponibles. Para una simulación fotográfica precisa por cada combinación hacen falta fotografías o renders autorizados específicos.

## Publicación
Ejecuta el PowerShell de actualización desde Descargas. No reinicia Git ni hace respaldos; modifica solo módulos definidos, descarga fotos desde Pexels a `assets/fotos/` cuando la red lo permite, prepara commit y push a main.
