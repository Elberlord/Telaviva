# Estructura del proyecto

```text
Telaviva/
├── index.html               # Punto de entrada / estructura HTML
├── css/
│   └── styles.css           # Apariencia adaptable
├── js/
│   ├── config.js            # Número de WhatsApp y nombre del negocio
│   ├── catalogo.js          # Telas, colores, compatibilidades y prendas
│   ├── estado.js            # Estado actual y getters
│   ├── texturas.js          # Tramas de tela y utilidades SVG
│   ├── prendas.js           # Siluetas y generador de prenda SVG
│   ├── catalogo-vista.js    # Tarjetas de tela y paleta de colores
│   ├── enlaces.js           # URL compartible y restauración
│   ├── cotizaciones.js      # Mensaje de cotización y WhatsApp
│   └── interfaz.js          # Eventos, controladores y actualización de pantalla
├── assets/                  # Preparada para imágenes reales futuras
└── doc/
    ├── README.md
    ├── ESTRUCTURA.md
    └── INSTALACION.md
```

## Arquitectura

Cada procedimiento tiene un archivo JS por responsabilidad. Los scripts no usan `import` ni requieren empaquetador, para que también funcionen al abrir `index.html` directamente desde Windows. Comparten un único espacio de nombres `window.TelaViva`; el orden de scripts en `index.html` es importante.

## Datos demostrativos y límites

Los colores son ejemplos. La compatibilidad es orientativa y debe validar el negocio. La vista previa es ilustrada con SVG, no simula físicamente la tela. El enlace compartible incluye prenda, tela, color, talla y cantidad, **nunca observaciones del cliente**, para evitar exponer datos privados en la URL.

## Versión 1.2 — imágenes
- `js/fotografias.js`: identificación de fotografías, licencia y URL.
- `js/visualizador.js`: visualizador del modelo real, recoloreo aproximado y muestras.
- `assets/fotos/`: fotografías locales que descarga el actualizador PowerShell; se recurre a enlaces Pexels si faltan.
- `doc/IMAGENES_Y_LICENCIAS.md`: registro de procedencia y atribución.
