# Tela Viva v1.9: móvil de dos paneles

## Alcance
En móvil horizontal se presentan exclusivamente los dos paneles principales del diseñador: selección a la izquierda y fotografía/carrusel a la derecha. El tercer panel (`summary-panel`) se oculta visualmente en móvil, pero se conserva en el DOM para la lógica existente de selección y cotización.

## Cotización
El botón flotante `tvMobileQuote` llama directamente a `TelaViva.quote()` (la misma función de WhatsApp que el botón de escritorio). Se mantienen tipo de prenda, diseño/modelo de licra, tela, color, talla, cantidad, notas y enlace recuperable. El número de WhatsApp continúa en `js/config.js`.

## Tallas
S, M y L aparecen como botones táctiles visibles en móvil y sincronizados con `#sizeSelect`. El menú de tallas original conserva XS, S, M, L, XL y A medida. En escritorio los botones rápidos no se muestran.

## Orientación
La página no puede bloquear horizontal de forma fiable en todos los navegadores (especialmente iOS). En vertical se ofrece una indicación de giro y una disposición accesible de dos paneles apilados. En horizontal se aprovecha la altura `dvh`, con scroll interno en el panel de selección. La fotografía usa `object-fit:contain` para impedir recortes.

## Archivos
- `css/movil-2panel.css`: distribución y estilos exclusivos de móvil.
- `js/movil-2panel.js`: botón flotante y tallas táctiles.
- `index.html`: inserta únicamente enlaces a CSS, JS y el botón flotante.

No se modifica el catálogo de imágenes, las 88 variantes de licra ni el menú/logo de escritorio. No se crean copias de seguridad.
