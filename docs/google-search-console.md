# Google Search Console — InnovazionE

Guía para indexar el sitio en producción (`https://ingenieriaestructural.gt`).

## 1. Verificar la propiedad

1. Entra a [Google Search Console](https://search.google.com/search-console).
2. **Agregar propiedad** → URL del prefijo: `https://ingenieriaestructural.gt`
3. Verifica con uno de estos métodos (el que tu hosting permita):
   - **Registro DNS** (recomendado): TXT en el dominio.
   - **Archivo HTML**: sube el archivo que Google indique a la carpeta `public/` y redespliega.
   - **Etiqueta HTML**: agrega la meta en `app/layout.tsx` solo durante la verificación, luego quítala.

## 2. Enviar el sitemap

El sitio genera automáticamente:

```
https://ingenieriaestructural.gt/sitemap.xml
```

En Search Console: **Sitemaps** → escribe `sitemap.xml` → **Enviar**.

`robots.txt` ya apunta a ese sitemap:

```
Sitemap: https://ingenieriaestructural.gt/sitemap.xml
```

## 3. Solicitar indexación de las guías locales (prioridad)

Después del despliegue, en **Inspección de URLs** pega cada enlace y pulsa **Solicitar indexación**:

| Departamento   | URL |
|----------------|-----|
| San Marcos     | https://ingenieriaestructural.gt/location/san-marcos |
| Chimaltenango  | https://ingenieriaestructural.gt/location/chimaltenango |
| El Progreso    | https://ingenieriaestructural.gt/location/el-progreso |

También conviene inspeccionar:

- https://ingenieriaestructural.gt/location
- https://ingenieriaestructural.gt/services/warehouse-design
- https://ingenieriaestructural.gt/services/structural-reinforcement
- https://ingenieriaestructural.gt/services/architecture-hydrology-sanitary-geotechnical

## 4. Enlaces internos (ya en el código)

Para que Google descubra las páginas sin depender solo del sitemap:

- **Footer**: bloque destacado con San Marcos, Chimaltenango y El Progreso + enlace a `/location`.
- **Índice** `/location`: sección “Guías locales ampliadas” con las tres tarjetas arriba del listado general.
- **Sitemap**: esas tres URLs tienen `priority: 0.92` y `changeFrequency: weekly`.

## 5. Seguimiento (opcional)

En **Rendimiento** → filtra consultas que contengan:

- `ingeniería estructural` + nombre del departamento
- `San Marcos`, `Chimaltenango`, `El Progreso`
- `AGIES`, `bodegas`, `planos construcción`

Revisa cada 2–4 semanas tras el primer despliegue; la indexación local suele tardar varias semanas.

## Checklist post-despliegue

- [ ] Propiedad verificada en Search Console
- [ ] `sitemap.xml` enviado sin errores
- [ ] Indexación solicitada para las 3 URLs departamentales
- [ ] Inspección de URL en vivo muestra HTTP 200
- [ ] Página `/location` enlaza a las guías destacadas
