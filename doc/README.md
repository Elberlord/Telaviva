# Tela Viva v1.3 — galería fotográfica estática

Interfaz inspirada en la maqueta visual seleccionada: tres columnas, controles de prenda/tela/color/talla/cantidad, galería de modelos, fotografía de la muestra seleccionada, resumen y cotización por WhatsApp. Se publica en GitHub Pages, sin backend.

## Fotografías

- `assets/telas`: 16 recortes individuales de una generación fotorealista (dos colores de cada una de 8 telas), **no fotos de inventario físico**. Son demostraciones visuales.
- `assets/modelos`: dos fotografías conceptuales originales para vestido de lino verde salvia y satén vino.
- `assets/fotos/modelos-*`: referencias de prendas procedentes de la v1.2, seleccionadas de Pexels. Los derechos de las fotografías se describen en `IMAGENES_Y_LICENCIAS.md`.
- Cuando falta una fotografía para una combinación concreta, se muestra la foto del tipo de prenda con etiqueta de referencia, **no se recolorea** ni se representa como resultado exacto. La muestra de tejido seleccionada siempre cambia.

El menú presenta solamente colores que tienen muestra propia en la primera entrega. Para añadir más, agrega imagen a `assets/telas` y entrada en `js/catalogo.js`.

## WhatsApp

Define `whatsappNumber` en `js/config.js` (por ejemplo, un número costarricense con prefijo 506). Sin número, WhatsApp abre el flujo para seleccionar contacto.

## Publicación

Subir a la rama `main` del repositorio `Elberlord/Telaviva`. GitHub Pages: `main` + `/(root)`.
