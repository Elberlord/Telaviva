# Tela Viva — Licra de 22 colores (v1.8)

## Alcance

Exclusivamente el catálogo de **Licra > Vestido largo**, con 4 diseños aprobados y 22 tonos visuales: **88 referencias fotográficas precalculadas** (resolución original de cada diseño, sin deformación). Además, 22 muestras textiles (640 × 640). La primera foto gris de cada vestido está preservada; las variantes cromáticas son simulaciones de tintura digital sobre la **misma fotografía**, para evitar cambio de rostro, pose, peinado y fondo.

## Diseños
1. Cuello alto, manga larga
2. Tirantes con abertura lateral
3. Asimétrico, un hombro
4. Halter con abertura lateral

## Tonos
- Gris (`gris`): #777581
- Negro (`negro`): #29282c
- Blanco (`blanco`): #f2f0eb
- Beige (`beige`): #c9ac8f
- Café (`cafe`): #775644
- Coral (`coral`): #f67577
- Rojo (`rojo`): #bf2639
- Vino (`vino`): #74283f
- Rosa (`rosa`): #e9a0b5
- Fucsia (`fucsia`): #c82988
- Morado (`morado`): #7550a1
- Lila (`lila`): #b6a0d5
- Azul marino (`azul-marino`): #183252
- Azul rey (`azul-rey`): #2659be
- Azul índigo (`azul-indigo`): #365780
- Celeste (`celeste`): #89bfdf
- Turquesa (`turquesa`): #19acb4
- Verde esmeralda (`verde-esmeralda`): #07865a
- Verde oliva (`verde-oliva`): #64734a
- Verde menta (`verde-menta`): #9cccb0
- Amarillo (`amarillo`): #edcb54
- Naranja (`naranja`): #ee8d36

## Funcionamiento
- La selección de color **no** reinicia el slide actual.
- Las flechas cambian el diseño, conservando el color.
- La cotización por WhatsApp incluye diseño y número de slide.
- La URL guarda el diseño (`modelo=1..4`) para recuperar la selección.
- El panel derecho muestra la muestra del mismo color de licra.
- Los otros tejidos y prendas conservan la lógica original.
- Los selectores muestran hasta ~3 filas de muestras visibles con desplazamiento interno.

## Importante: muestras de diseño, no inventario
Estos tonos NO representan existencias verificadas ni reproducciones físicas exactas. La apariencia y el brillo de la licra dependen de composición, iluminación, tratamiento y proveedor. Confirmar color, ancho y disponibilidad antes de cotizar.

## Publicación
La actualización incluye un instalador PowerShell autónomo que identifica `Documentos\GitHub\Telaviva`, sobrescribe únicamente rutas listadas en el ZIP incrustado, no crea respaldos, no inicializa Git, no usa `force push`, y realiza commit + `git push origin main`. El teléfono en `js/config.js` permanece intacto.
