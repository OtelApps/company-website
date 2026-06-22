---
name: i18n-conventions
description: How translations work in this Vue site — locale files, key patterns, the canonical base language
metadata:
  type: project
---

vue-i18n (legacy mode). Locale JSON files live in `src/i18n/locales/{cs,en,de,sk,pl}.json`; registered in `src/i18n/index.js` (SUPPORTED_LOCALES = en, cs, de, sk, pl; fallback = en). **cs is the content source of truth** — pages are authored in Czech, then translated.

Pages use `$t('namespace.section.key')` in templates. Array-of-objects access works via numeric segments, e.g. `$t('tripPlanner.features.items.0.title')` — same idiom the older pages use (`hotelDirectory.section2.items.0`). Pages with data-driven lists (e.g. WebAdmin) build `computed` arrays that call `this.$t(...)`.

Shared "Discover more" cards (4 product pages) live under `common.exploreMore.cards.*`; each page keeps its own `<page>.exploreMore.desc`.

To verify after editing locales: `node -e "JSON.parse(fs.readFileSync(...))"` per file, then a deep key-path diff against cs to catch missing/typo keys, then `npm run build`.
