# Atelier de Telas — sitio web interactivo

Primera versión funcional de un catálogo para GitHub Pages. No necesita compilación ni dependencias.

## Funciones
- Ocho familias de telas con paletas de ejemplo.
- Cinco prendas: vestido largo, enagua/falda, pantalón, blusa y traje de baño de dos piezas.
- Vista previa ilustrada en SVG que cambia de silueta, color y patrón de tejido instantáneamente.
- Indicador de compatibilidad sugerida de tela y prenda.
- Talla, cantidad y observaciones libres.
- Botón **Cotizar**: abre WhatsApp con la selección actual y un enlace para reconstruir el diseño.
- Botón **Copiar enlace del diseño** para compartir la configuración.
- Diseño responsive adaptable a móviles y escritorio.

## Antes de publicar
1. Abre `config.js` y escribe el número real de WhatsApp del negocio como `whatsappNumber: '506XXXXXXXX'` (sin `+`, espacios ni guiones). Si se deja vacío, WhatsApp pedirá elegir un contacto.
2. Cambia en `config.js` el nombre del negocio si lo deseas.
3. Revisa las telas, colores y su disponibilidad en `app.js`: **son datos demostrativos**, no un inventario real.
4. Para reemplazar las muestras de texturas ilustradas por fotografías de las telas reales se necesitarán los archivos originales y una etapa posterior de implementación.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub.
2. Sube **los archivos internos** de esta carpeta (`index.html`, `styles.css`, `app.js`, `config.js`) a la raíz del repositorio.
3. En **Settings > Pages > Build and deployment**, selecciona **Deploy from a branch**, branch `main`, carpeta `/ (root)`.
4. Guarda los cambios. GitHub mostrará la dirección pública de tu sitio al completar la publicación.

No se requiere token de GitHub en la página pública. No coloques contraseñas ni secretos en `config.js` porque es visible al público.

## Límites de esta versión
- La representación es una ilustración de diseño, **no una simulación fotográfica o física** de la caída, elasticidad o corte real de cada tejido.
- No hay gestión privada de inventario ni persistencia de pedidos. El cliente confirma manualmente el envío de WhatsApp.
- El enlace recupera prenda, tela, color, talla y cantidad; no incluye notas personales para evitar ponerlas en una URL pública.
- No incorpora precios automáticos: las cotizaciones las realiza el negocio.

## Próximas fases
- Importación de fotos y texturas reales de telas.
- Plantillas más detalladas y vistas frontal/trasera.
- Panel privado para gestionar telas, inventario, modelos y fotografías con autenticación y base de datos.
- Identificadores de solicitud, registro de cotizaciones y opciones avanzadas de tallas.
