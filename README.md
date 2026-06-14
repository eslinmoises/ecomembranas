# Ecomembranas

Sitio web estático para venta de membranas arquitectónicas, lona tarpaulin blackout,
accesorios, asesoría, fabricación de estructuras, confección e instalación.

## Contacto configurado

- WhatsApp: +1 (385) 221-0741
- Correo: info@ecomembranas.com
- Operación: Maracaibo, Venezuela, con envíos a todo el país
- Producto principal: rollo de lona tarpaulin blackout de 125 m², 2,5 m x 50 m,
  venta por rollo a USD 1.800

## Despliegue en Cloudflare Pages

Dominio de producción: `https://ecomembranas.com/`

Este proyecto no requiere build ni dependencias para producción. Para Git integration en
Cloudflare Pages, conecta el repositorio `eslinmoises/ecomembranas` y usa esta configuración:

- Framework preset: `None`
- Build command: vacío o `npm run build`
- Deploy command: vacío
- Build output directory: `.`
- Root directory: `/`

No uses `npx wrangler deploy`, `npx wrangler pages deploy` ni `npm run deploy` como comando
de Cloudflare Pages cuando el despliegue está conectado a GitHub. Pages se encarga de publicar
automáticamente el directorio de salida después de cada push a `main`.

Los archivos `_headers` y `_redirects` están incluidos para cabeceras, caché de assets y
atajos de navegación.
