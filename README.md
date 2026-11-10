# Netflix 2

Nombre interno de la segunda instalación de Temporadas de Nosotros, de ROTF Studio. El cliente ve la marca y el diseño de **Temporadas de Nosotros**.

## Estructura

- `docs/<pedido>/config.js` contiene la pareja, fechas, acceso, títulos, episodios, escenas, juegos, preguntas, carta final y destino de las respuestas.
- `docs/<pedido>/assets/` guarda fotos, videos y audios del pedido. Dentro de su configuración usa rutas como `assets/fotos/portada.webp`, `assets/video/final.mp4` y `assets/audio/cancion.mp3`. Para un clip en una escena, configura `img` con la ruta MP4 y `poster` con la imagen de carga.
- `docs/comun/` guarda una sola copia de estilos, reproductor, juegos y medios de muestra. Las rutas que empiezan en `../comun/` usan esa carpeta.
- `plantilla/` contiene el punto de partida de un nuevo pedido y los créditos del material de muestra. La demo conserva el catálogo original de 12 películas y tres series. La música de muestra y el sonido de entrada se sintetizaron para esta copia. Los clips de muestra del original se recodificaron a H.264, a un máximo de 720 px de ancho.

## Preparar el siguiente pedido

1. Desde esta carpeta, ejecuta `node herramientas/pedido.cjs nombre-del-pedido`. Usa minúsculas, números y guiones.
2. Edita `docs/nombre-del-pedido/config.js`. Sustituye los datos ficticios, ajusta el catálogo y agrega los medios a `docs/nombre-del-pedido/assets/`. Configura el estreno y el contacto solo cuando apliquen.
3. Ejecuta `node herramientas/pedido.cjs nombre-del-pedido --actualizar` para actualizar las páginas y la vista previa de redes sin sobrescribir el contenido del pedido. Puedes agregar una portada propia de 1200 × 630 en `assets/og.jpg`.
4. Ejecuta `node herramientas/verificar.cjs` para comprobar rutas y tamaño. Revisa en localhost y luego sube los cambios de este repositorio a `main`.

GitHub Pages sirve los archivos de `main /docs`. Cada enlace apunta a un `index.html` real, por ejemplo `/demo-regalo/`. Las pantallas internas y los medios se resuelven con rutas relativas y funcionan bajo el prefijo `/streaming-us-2/` de GitHub Pages y desde la raíz del dominio propio. Cada carpeta tiene sus propias claves de progreso, contraseña y perfil en el navegador. La contraseña se comprueba en el cliente, como en el original.

## Prueba y dominio

La pantalla de acceso de la demo y de los pedidos nuevos acepta cualquier carácter. Puedes ejecutar `node herramientas/preview.cjs` y abrir `http://127.0.0.1:8802/streaming-us-2/demo-regalo/` o `http://127.0.0.1:8802/demo-regalo/`.

- Repositorio [rotfflores/streaming-us-2](https://github.com/rotfflores/streaming-us-2).
- Demo publicada [Pedido ficticio](https://streaming-us-2.rotfstudio.com/demo-regalo/).

El dominio propio se configura en **Settings → Pages** del repositorio nuevo. Cloudflare dirige `streaming-us-2` a `rotfflores.github.io` mediante un CNAME en modo **Solo DNS**.
