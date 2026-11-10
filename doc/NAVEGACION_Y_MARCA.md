# Tela Viva — navegación y marca (v1.7)

## Alcance de esta actualización

- Cambia únicamente el encabezado, la identidad gráfica y el menú.
- No incluye el carrusel de pantalla completa del ejemplo FreeFrontend.
- No modifica el carrusel de prendas, la selección de telas, el cambio de colores ni WhatsApp.
- Logo vectorial original en `assets/marca/tela-viva-simbolo.svg`.
- Estilos encapsulados en `css/navegacion.css`.
- Eventos del menú en `js/navegacion.js`.

## Menú

Navegación: Inicio, Diseña tu prenda, Catálogo de telas, Inspiración, Contáctanos.

Los desplegables se abren con el cursor, con teclado y al pulsar en pantallas táctiles.
En pantallas menores de 901 px la navegación pasa a una barra inferior con los
mismos accesos, siguiendo el ejemplo aportado por el usuario.
Los accesos directos del menú usan los parámetros de selección que ya reconoce
`js/enlaces.js`. Elegir un acceso puede recargar la página para aplicar el diseño.

## Logo

Símbolo propio de máquina de coser en SVG, con trazos dorados sobre el fondo
morado del encabezado. El logotipo textual mantiene el nombre «Tela Viva» y
el lema «Diseña a tu manera» en versiones legibles para escritorio y móvil.

## Publicación

El instalador autónomo PowerShell trabaja en `Documents/GitHub/Telaviva`, no crea
copias de seguridad ni reinicializa Git; valida la rama `main`, escribe solo los
archivos indicados, realiza un commit limitado a esos archivos y ejecuta push.
