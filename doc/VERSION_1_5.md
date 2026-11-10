# Tela Viva v1.5 — simulador fotográfico

## Qué cambió

Cinco fotografías base obtenidas de una composición fotográfica generada para este catálogo: vestido, traje de baño de dos piezas, blusa, pantalón y falda. Cada estilo usa una sola imagen fija; al elegir un color, un algoritmo local recolorea únicamente los píxeles delimitados por una máscara de la prenda, preservando modelo, pose y fondo. No se requieren APIs, servidores ni claves.

## Límites importantes

- Las imágenes son **simulaciones**, no fotos de mercancía confeccionada ni pruebas de disponibilidad.
- El color elegido se aproxima digitalmente. La tela y sus características (mezclilla, lino, satén, etc.) NO se sustituyen físicamente en la fotografía: la muestra fotográfica de tela a la derecha identifica el material elegido.
- Las cinco fotografías se recortaron de una sola composición. La identidad de la modelo es similar entre estilos, pero no puede garantizarse que sea exactamente la misma persona en cada imagen. Dentro de cada estilo, sí se mantiene idéntica.
- Las máscaras se calcularon por color y ubicación: algunas áreas muy pequeñas pueden no recolorearse o recibir color adicional. Validar visualmente antes de usar como catálogo comercial definitivo.
- Shorts y cacheteros están previstos para una futura ampliación; aún no tienen fotografía propia.

## Archivos

- `js/fotografias.js`: mapea estilo a fotografía y máscara.
- `js/recoloracion.js`: recolorea localmente usando Canvas y máscara PNG.
- `js/visualizador.js`: vista previa, controles y resumen.
- `assets/modelos/{estilo}-base.webp`: fotografías base.
- `assets/modelos/{estilo}-mascara.png`: máscaras de recoloración.
- `js/catalogo.js`: catálogo y colores disponibles.

## Publicación

El instalador conserva `js/config.js` si ya existe para no sobrescribir el WhatsApp comercial. Los cambios se realizan sobre el repositorio local y se publican con `git push origin main` desde la PC del usuario. El instalador no hace copias de seguridad. No borra archivos no incluidos en el paquete.
