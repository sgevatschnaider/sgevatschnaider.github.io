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

32 artículos del archivo, tres recorridos de aprendizaje y dos laboratorios propios en español e inglés. Las tres lecturas destacadas y la lectura sobre grafos expander incluyen ediciones revisadas bilingües; sus textos históricos completos se conservan. Los 32 artículos tienen texto completo en español e inglés dentro del portal. Las 29 ediciones inglesas restantes se recuperaron del blog del autor; su procedencia figura en `data/article-provenance.json`. Los cursos externos conservan sus idiomas originales.

## Mantenimiento

Requiere Node.js 22 o posterior. Los archivos Markdown históricos permanecen en la raíz. `scripts/catalog.mjs` reúne los metadatos editoriales. `content/es` contiene las cuatro revisiones y `content/en` todas las ediciones inglesas.

```bash
npm ci --ignore-scripts
npm run build
npm run check
node scripts/sync.mjs
```

El generador crea `public/` para revisión y `sync.mjs` copia las páginas generadas a la raíz que ya publica GitHub Pages. No cambia los Markdown históricos. Los archivos generados se incluyen en el commit junto a las fuentes. La configuración existente de GitHub Pages continúa usando la rama `main`.

El workflow **Portal checks** comprueba rutas, anclas, pares de idioma, los escenarios eulerianos, la probabilidad ZKP y la correspondencia entre fuente y páginas publicadas.

## Funcionalidades

- Navegación ES/EN mediante URLs independientes, enlaces de idiomas, metadatos sociales y sitemap.
- Modo claro/oscuro, preferencias locales y navegación móvil accesible.
- Búsqueda dentro de los textos completos de ambos idiomas, fragmentos de resultados, filtros, orden, guardados y lecturas pendientes.
- Tres rutas con objetivos, requisitos, pasos y progreso local. El grafo de la portada permite explorar temas.
- Lectura con índice completo, fórmulas KaTeX y MathML, posición guardada por idioma, tamaño del texto, notas privadas y exportación Markdown, copia de enlace e impresión/PDF.
- Animaciones históricas opcionales: se cargan al abrir su panel.
- ZKP: tres desafíos con explicación, aplicaciones a DeFi y cuatro pasos por ronda, vista del verificador o didáctica, ejecución de cinco rondas, Monte Carlo y compromiso SHA-256 con nonce de 128 bits.
- Königsberg: multigrafos de 7, 6 y 9 puentes, recorrido manual, prueba de conectividad/paridad y algoritmo de Hierholzer.

Las preferencias y los guardados se conservan solo en el navegador. Los mensajes del experimento de compromiso no se envían ni se guardan. Las funciones básicas de navegación y lectura no necesitan consultar la API de GitHub durante una visita.

## Sincronización del blog

`npm run sync:blog` actualiza las cuatro notas recientes desde el feed público de Blogger. Si la fuente falla, se conserva la copia publicada. El workflow **Refresh notebook** se ejecuta diariamente a las 03:15 UTC o manualmente en Actions; solo confirma cambios cuando hay notas distintas, comprueba el sitio y solicita una nueva construcción de GitHub Pages. No modifica el blog.

KaTeX se genera durante la construcción y se distribuye localmente, con su licencia y fuentes. No depende de un CDN durante la lectura. Para volver a importar ediciones inglesas desde una copia del feed completo: `node scripts/import-blog.mjs /ruta/al/feed.json`.

`qa/responsive.html` permite revisar las páginas a 320, 375, 768 y 1024 píxeles. Esta vista de mantenimiento no aparece en la navegación ni se indexa. En la ejecución manual de **Refresh notebook**, `force_publish` permite solicitar una nueva construcción aunque no haya notas nuevas.
