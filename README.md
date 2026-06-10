# Ecomembranas

Sitio web estático para venta de membranas arquitectónicas, lona tarpaulin blackout,
accesorios, asesoría, fabricación de estructuras, confección e instalación.

## Contacto configurado

- WhatsApp: +1 (385) 221-0741
- Correo: info@ecomembranas.com
- Operación: Maracaibo, Venezuela, con envíos a todo el país

## Despliegue en Cloudflare Pages

Este proyecto no requiere build ni dependencias para producción. Para Git integration en
Cloudflare Pages, conecta el repositorio `eslinmoises/ecomembranas`, deja el comando de
build vacío y usa `.` como directorio de salida.

También puede desplegarse con Wrangler:

```bash
npm run deploy
```

Los archivos `_headers` y `_redirects` están incluidos para cabeceras, caché de assets y
atajos de navegación.
