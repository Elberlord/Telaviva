# Tela Viva — Vestidos largos de licra (v1.6)

## Vista previa y funcionamiento

Al seleccionar **Vestido largo → Licra**, el visualizador presenta cuatro diseños aprobados:

1. Cuello alto y manga larga.
2. Tirantes y abertura lateral.
3. Asimétrico de un hombro.
4. Halter y abertura lateral.

Cada diseño cuenta con **tres variantes fotográficas precompuestas**: gris, negro y coral. Se muestra **una sola fotografía en el contenedor central**; las flechas anterior/siguiente cambian de diseño sin cambiar el color. Al cambiar el color, se mantiene el diseño elegido. Se utilizan imágenes estáticas, no recoloración Canvas en vivo.

El enlace compartido y la cotización de WhatsApp incluyen la prenda, tela, color, **número y nombre del diseño**, talla y cantidad. El parámetro URL `modelo=1..4` reconstruye el diseño elegido.

## Archivos

- `assets/modelos/licra-vestido/{cuello-alto,tirantes-abertura,asimetrico,halter-abertura}-{gris,negro,coral}.webp` — 12 variantes de catálogo.
- `assets/telas/licra-gris.webp` — muestra visual del nuevo gris.
- `js/fotografias.js` — catálogo de imágenes y nombres por diseño.
- `js/visualizador.js` — carrusel y sincronización visual.
- `js/catalogo.js` — colores y compatibilidades.
- `js/catalogo-vista.js` — selector de color que conserva el corte actual.
- `js/enlaces.js` — enlace que restaura modelo y color.
- `js/cotizaciones.js` — solicitud detallada por WhatsApp.

## Precisión comercial

Las fotos son **simulaciones digitales de prendas**, no fotografías de existencias físicas. Las variantes negra y coral son recoloraciones localizadas de las fotografías grises aprobadas, con rostro y fondo conservados. Los colores vistos en pantalla pueden variar según monitor, tejido y lote. El color gris añadido es de demostración hasta confirmar stock. No se deben vender tallas ni existencias sin confirmación. La textura de la muestra es ilustrativa.

## Instalación

Ejecutar el instalador `.ps1` incluido desde PowerShell en Windows. Verifica el remoto y la rama, instala solo los archivos listados y, al final, hace commit y `git push origin main`. No ejecuta `git init` ni crea respaldos. Conserva `js/config.js` con el número de WhatsApp configurado.
