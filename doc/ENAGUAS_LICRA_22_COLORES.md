# Tela Viva v1.10 — Licra: Enagua / Falda

## Dos modelos aprobados

1. **Falda corta plisada**: short skirt with pleats, no third-party logos, photographed on our studio model.
2. **Falda larga sirena**: fitted long skirt with flared hem, matching the same studio model.

## Cómo funciona

- Elegir **Enagua / falda**, luego **Licra**.
- Los 22 tonos siguen la paleta de Licra ya establecida para Vestido largo.
- Dos fotografías por color, 44 archivos WebP en `assets/modelos/licra-enagua/`.
- Flechas del visualizador cambian entre *Plisada* y *Sirena*. El color permanece al cambiar de modelo.
- Cambiar el color conserva el modelo seleccionado; no cambia el rostro, fondo ni postura.
- El enlace compartido incorpora `modelo=1` o `modelo=2`, y el mensaje de WhatsApp incluye el nombre del modelo.
- En pantalla móvil horizontal se conservan dos paneles y el botón flotante de cotización de la v1.9.
- Sin cambios en `index.html`, `js/config.js`, navegación, logo o fotografías ya existentes.

## Colores (demostración)

Gris, Negro, Blanco, Beige, Café, Coral, Rojo, Vino, Rosa, Fucsia, Morado, Lila, Azul marino, Azul rey, Azul índigo, Celeste, Turquesa, Verde esmeralda, Verde oliva, Verde menta, Amarillo y Naranja.

Estas imágenes son **simulaciones cromáticas** producidas a partir de los dos diseños grises aprobados; NO muestran necesariamente la textura física exacta de cada tejido ni confirman que esos colores estén en inventario. El precio y disponibilidad se confirman al cotizar.

## Organización técnica

- `js/catalogo.js`: compatibilidad Licra + Enagua.
- `js/fotografias.js`: rutas y nombres de dos modelos.
- `js/catalogo-vista.js`: preservación de modelo al cambiar tono.
- `js/enlaces.js`: enlace compartible con número de modelo.
- `js/visualizador.js`: descripción de la vista activa.
- `js/cotizaciones.js`: ya incorpora el nombre del diseño; **no se modifica**.
- `doc/`: documentos solamente.

## Recomendación comercial

Validar las muestras y la disponibilidad real antes de anunciar los 22 colores como existencias. Las fotografías son demostraciones de producto a medida.
