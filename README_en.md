# Documentation · English

This bilingual portal brings together Sergio Gevatschnaider’s articles, courses and simulations, and links to his **Economía y Ética** research notebook.

## Main entry points

- [English homepage](https://sgevatschnaider.github.io/en/)
- [Spanish homepage](https://sgevatschnaider.github.io/es/)
- [ZKP / Ali Baba laboratory](https://sgevatschnaider.github.io/en/simulations/zkp/)
- [Königsberg laboratory](https://sgevatschnaider.github.io/en/simulations/konigsberg/)
- [Research notebook](https://economiayetica.blogspot.com/)

## Editions and languages

The homepage, navigation, catalogue and native labs have complete English and Spanish versions. The three featured readings have revised bilingual editions. Historical Markdown files are preserved. Other English archive pages provide English titles and summaries, link to English blog editions when the original file includes one, and clearly identify when the full text is available only in Spanish.

External course materials retain their original language. A translated course card does not imply that the linked course has been translated.

## Building and maintaining the portal

Requires Node.js 22 or later.

```bash
npm install --ignore-scripts
npm run build
npm run check
node scripts/sync.mjs
```

The generator writes a reviewable `public/` directory. The sync script copies the generated pages to the repository root used by the existing GitHub Pages configuration. Commit the generated pages together with their source files. Original Markdown articles are not overwritten.

` scripts/catalog.mjs ` contains editorial metadata. `content/es/` and `content/en/` contain revised articles. `assets/` contains styles, local scripts and illustrations.

The validation workflow checks internal links and anchors, language versions, Eulerian scenarios, ZKP outcomes and the correspondence between generated and published pages.

## Local preferences

Theme, saved articles and last reading are stored only in the current browser. The hash-commitment experiment does not save or send its messages. Historic animations load only when their panel is opened.
