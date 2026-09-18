# BY.HASKI

Portfolio de [byhaski.com](https://byhaski.com) — edición, dirección y postproducción de videos musicales.

## Stack

- **Vue 3** (`<script setup>`) + **Vue Router** en history mode
- **Vite** como bundler
- **Tailwind CSS 4** (configuración CSS-first, sin `tailwind.config.js`)
- **Firebase** — Firestore para la lista de videos, Auth para el panel
- **EmailJS** para el formulario de contacto
- Deploy automático a **GitHub Pages** desde `main`

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # genera dist/
npm run preview  # sirve dist/ para probar el build
```

## Estructura

```
src/
  views/        Home, Projects, About, Contact, Admin
  layouts/      Header, Footer, VideoFooter
  composables/  useProjects.js  <- toda la lectura/escritura de Firestore
  firebase.js   inicializa la app, exporta db y auth
public/videos/  13 fondos de la home (+ /lowres para mobile)
scripts/        utilidades de mantenimiento de la base
```

## El panel de administración

`/admin` permite agregar, editar, reordenar y borrar videos del portfolio.

El acceso usa **Firebase Auth** con cuenta de Google. No hay registro público ni
contraseñas propias de la aplicación.

Quién puede administrar se define en **dos lugares que deben coincidir**:

1. `ALLOWED_EMAILS` en `src/views/Admin.vue` — evita mostrar un panel que no
   podría guardar nada.
2. Las reglas de Firestore — esta es la barrera real, porque se puede escribir
   en la base sin pasar por el panel.

```
match /projects/{doc} {
  allow read: if true;
  allow write: if request.auth != null
               && request.auth.token.email == "haski.audiovisual@gmail.com";
}
```

Para sumar un administrador hay que agregar su email en ambos lugares.

En la consola de Firebase, el dominio del sitio tiene que estar en
**Authentication → Settings → Authorized domains**, o el login falla con
`auth/unauthorized-domain`.

## Datos

La colección `projects` de Firestore es la única fuente de verdad. Cada documento:

| campo | tipo | |
|---|---|---|
| `id` | number | también es el ID del documento |
| `title` | string | título que se muestra |
| `work` | string | Edición / Dirección / Dirección, Edición / Oneshot |
| `yt` | string | ID de YouTube (11 caracteres) |
| `highlight` | boolean | aparece en el carrusel de /projects |
| `order` | number | posición, contigua desde 0 |

> El código **no** tiene una lista de respaldo. Una versión anterior sembraba
> valores por defecto cuando la consulta volvía vacía, y en septiembre de 2026
> eso reescribió el orden de todo el portfolio. Si Firestore falla, la UI
> muestra el error en vez de inventar datos.

## Scripts de mantenimiento

```bash
node scripts/backup-firestore.mjs   # vuelca la colección a backups/
node scripts/fix-order.mjs          # reindexa "order" (pide confirmación)
```

Si las reglas exigen login, pasarles credenciales:

```bash
FIREBASE_EMAIL=... FIREBASE_PASSWORD=... node scripts/fix-order.mjs
```
