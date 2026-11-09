# Estructura modular

- `index.html`: estructura semántica.
- `css/styles.css`: diseño adaptable, acorde con maqueta v1.3.
- `js/config.js`: nombre comercial, número de WhatsApp (se conserva si ya existe).
- `js/catalogo.js`: telas, colores con fotografía propia, prendas y compatibilidades.
- `js/estado.js`: estado compartido, getters y selectores.
- `js/fotografias.js`: correspondencia entre combinación exacta, galería y fotos de referencia.
- `js/enlaces.js`: estado en enlaces compartibles y restauración por URL.
- `js/cotizaciones.js`: texto detallado de solicitud y apertura de WhatsApp; guardar enlace.
- `js/catalogo-vista.js`: tarjetas de telas y botones de color con fotos independientes.
- `js/visualizador.js`: foto principal, muestra de tejido, galería y resumen.
- `js/interfaz.js`: eventos del DOM e inicialización.
- `assets/telas/`: 16 imágenes WebP individuales (8 tejidos, 2 variantes).
- `assets/modelos/`: imágenes conceptuales de vestido sobre modelo.
- `assets/fotos/`: referencias de otras prendas ya existentes en v1.2 (se preservan).
- `doc/`: documentación y fuentes visuales.
