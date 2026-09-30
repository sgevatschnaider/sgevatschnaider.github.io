# Sergio Gevatschnaider · Economía, datos e ideas

Portal personal bilingüe con artículos, cursos y laboratorios. Publicado en GitHub Pages.

- **Sitio:** https://sgevatschnaider.github.io/
- **Español:** https://sgevatschnaider.github.io/es/
- **English:** https://sgevatschnaider.github.io/en/
- **Cuaderno de notas:** https://economiayetica.blogspot.com/
- **ZKP / Alí Babá:** https://sgevatschnaider.github.io/es/simulaciones/zkp/
- **Königsberg:** https://sgevatschnaider.github.io/es/simulaciones/konigsberg/

[Documentación en español](README_es.md) · [English documentation](README_en.md)

## Contenido

32 artículos del archivo, tres recorridos de aprendizaje y dos laboratorios propios en español e inglés. Las tres lecturas destacadas incluyen ediciones revisadas bilingües; sus textos históricos completos se conservan. El resto del archivo tiene títulos y resúmenes bilingües, texto completo en español y enlaces a las ediciones inglesas del blog cuando figuran en la fuente. Los cursos externos conservan sus idiomas originales.

## Mantenimiento

Requiere Node.js 22 o posterior. Los archivos Markdown históricos permanecen en la raíz. `scripts/catalog.mjs` reúne los metadatos editoriales. `content/es` y `content/en` contienen las ediciones revisadas.

```bash
npm install --ignore-scripts
npm run build
npm run check
node scripts/sync.mjs
```

El generador crea `public/` para revisión y `sync.mjs` copia las páginas generadas a la raíz que ya publica GitHub Pages. No cambia los Markdown históricos. Los archivos generados se incluyen en el commit junto a las fuentes. La configuración existente de GitHub Pages continúa usando la rama `main`.

El workflow **Portal checks** comprueba rutas, anclas, pares de idioma, los escenarios eulerianos, la probabilidad ZKP y la correspondencia entre fuente y páginas publicadas.

## Funcionalidades

- Navegación ES/EN mediante URLs independientes, enlaces de idiomas, metadatos sociales y sitemap.
- Modo claro/oscuro, preferencias locales y navegación móvil accesible.
- Búsqueda por tema, filtros, orden por título o fecha de la fuente, guardados y última lectura.
- Páginas de lectura con índice, progreso, copia de enlace e impresión/PDF.
- Animaciones históricas opcionales: se cargan al abrir su panel.
- ZKP: cuatro pasos por ronda, vista del verificador o didáctica, ejecución de cinco rondas, Monte Carlo y compromiso SHA-256 con nonce de 128 bits.
- Königsberg: multigrafos de 7, 6 y 9 puentes, recorrido manual, prueba de conectividad/paridad y algoritmo de Hierholzer.

Las preferencias y los guardados se conservan solo en el navegador. Los mensajes del experimento de compromiso no se envían ni se guardan. Las funciones básicas de navegación y lectura no necesitan consultar la API de GitHub durante una visita.
