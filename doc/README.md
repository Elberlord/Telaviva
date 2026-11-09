# Tela Viva — catálogo interactivo de telas

Sitio estático para GitHub Pages, sin framework ni servidor propio. El archivo de entrada es `index.html` en la raíz. Los scripts se distribuyen por **responsabilidad** en `js/`, la hoja de estilos se ubica en `css/` y la documentación vive exclusivamente en `doc/`.

## Incluye

- Ocho tipos de tela con colores ilustrativos y cinco tipos de prenda.
- Vista previa SVG que cambia de forma y patrón con la selección.
- Selector de talla, cantidad y observaciones.
- Compatibilidad orientativa de la tela con la prenda.
- Botón **Cotizar** que abre WhatsApp con texto prellenado. El cliente confirma el envío.
- Enlace de configuración para recuperar una selección.

**Importante:** los colores y existencias no son un inventario real, y la ilustración no equivale a una fotografía de la prenda confeccionada.

## Usar

1. Abre `index.html` para probarlo en el navegador. También funciona en GitHub Pages.
2. Edita `js/config.js` para indicar el WhatsApp comercial, por ejemplo `50688888888`.
3. Para editar telas y colores, usa `js/catalogo.js`.
4. Publica el repositorio `Elberlord/Telaviva` desde la rama `main` en GitHub Pages, origen `/ (root)`.

Consulta `doc/ESTRUCTURA.md` para localizar cada función y `doc/INSTALACION.md` para el flujo desde PowerShell y Git.
