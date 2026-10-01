# Documentation · English

This bilingual portal brings together Sergio Gevatschnaider’s articles, courses and simulations, and links to his **Economía y Ética** research notebook.

## Main entry points

- [English homepage](https://sgevatschnaider.github.io/en/)
- [Spanish homepage](https://sgevatschnaider.github.io/es/)
- [ZKP / Ali Baba laboratory](https://sgevatschnaider.github.io/en/simulations/zkp/)
- [Königsberg laboratory](https://sgevatschnaider.github.io/en/simulations/konigsberg/)
- [Research notebook](https://economiayetica.blogspot.com/)

## Editions and languages

The homepage, navigation, catalogue and native labs have complete English and Spanish versions. The three featured readings have revised bilingual editions. Historical Markdown files are preserved. All 32 articles are available in full in both languages inside the portal. The remaining 29 English editions were recovered from the author’s blog, with source URLs recorded in `data/article-provenance.json`.

External course materials retain their original language. A translated course card does not imply that the linked course has been translated.

## Building and maintaining the portal

Requires Node.js 22 or later.

```bash
npm ci --ignore-scripts
npm run build
npm run check
node scripts/sync.mjs
```

The generator writes a reviewable `public/` directory. The sync script copies the generated pages to the repository root used by the existing GitHub Pages configuration. Commit the generated pages together with their source files. Original Markdown articles are not overwritten.

` scripts/catalog.mjs ` contains editorial metadata. `content/es/` contains the three revisions; `content/en/` contains all English editions. `assets/` contains styles, local scripts and illustrations.

The validation workflow checks internal links and anchors, language versions, Eulerian scenarios, ZKP outcomes and the correspondence between generated and published pages.

## Local preferences

Theme, saved articles and last reading are stored only in the current browser. The hash-commitment experiment does not save or send its messages. Historic animations load only when their panel is opened.

## Study tools and notebook updates

Three pathways include objectives, prerequisites and progress tracking. Search covers both languages’ full texts and shows matching excerpts. Articles support reading position per language, read/unread status, text size, private notes and Markdown export. Formula rendering is built with locally hosted KaTeX and accessible MathML. The ZKP lab includes three guided challenges and distinguishes zero knowledge, commit–reveal and validity proofs.

Run `npm run sync:blog` to refresh the four latest notebook links. **Refresh notebook** runs daily at 03:15 UTC, validates changes and requests a Pages build when needed. The published snapshot is retained if Blogger is unavailable. The blog itself is not modified.

Reading position, notes and pathway progress are shared between the two language versions within the same browser. They are not synchronised between devices.
