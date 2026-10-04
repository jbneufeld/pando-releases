# pandoworkbench.com: new hero film on top (build assemble-2026-10-03)

Jared, 2026-10-03: "Give Otto the New page on top, live Pricing, FAQ and footer kept underneath."

## What changes

Everything in youragents-2026-09-29 (live), plus:

- PMFILM-01: the new hero film ("Assemble"), the click-around demo and the closing lines, placed at the
  top of `<main id="top">`. Its screens were captured from the current app with demo data. Its styles are
  scoped under `.pm-scope` and `.app-snap`. The old hero, film and feature sections (`#film`, `#agents`,
  `#comfort`, `#brain`, `#voice`, `#intro`) stay in the page but are hidden. Pricing, FAQ and footer are
  untouched, including the founding block and the checkout links.
- PMNAV-01: header links now read Product, Try it, Pricing, FAQ.
- PMJS-01: no opening animation, so the words show as soon as the page loads.
- PMJS-02: the page's smooth scroll is shared with the new film.
- PMJS-03: the new film script, appended after the page script. It needs only GSAP and ScrollTrigger,
  which the page already loads.
- BUILD-01: `--build:"assemble-2026-10-03"`.
- The founding banner is restyled amber with a "THIS WEEKEND ONLY" tag (CSS only; its text, countdown
  and link are still Otto's).

**69 page edits** (youragents-2026-09-29's 64 + 5), unique ids, each matching once, file is all ASCII.

sha256: `942e80a2edc4aa327d2f7770212aba2376009683d5a704f5d2f5fae5e2dfb9d9`

## How to apply (three constants in PandoLandingPage.tsx, nothing else)

1. Patch URL: `https://cdn.jsdelivr.net/gh/jbneufeld/pando-releases@<COMMIT>/site/patches/assemble-2026-10-03/edits.json`
2. SHA-256: `942e80a2edc4aa327d2f7770212aba2376009683d5a704f5d2f5fae5e2dfb9d9`
3. The page-edit count check: 64 becomes 69 (the check and its error text).

Do not edit the long embedded page strings in PandoLandingPage.tsx or pandoLandingPayload.ts.
Draft only. Do not publish.

## Notes

- The file is 1.28 MB (about 395 KB compressed), larger than the 385 KB it replaces. The loader's
  4 second timeout still applies; a visitor on a very slow connection gets the older page, as today.
- At runtime the film removes four host rules whose selector contains `[style*="background-image"`
  (the hero scrim for pages with a `#hero` block). They never match this page, but while present every
  inline style change restyles the whole subtree and the film runs at half its frame rate.
- After 2026-10-06T00:00Z the hero button goes back to "Get started" on its own.

Proven before push through Otto's real loader (live HTML with only these constants swapped, patch
served locally): no fallback, all 69 edits match once, --build assemble-2026-10-03, old sections hidden,
Pricing, FAQ, footer and the founding block present, banner link `/account?checkout=lifetime`, no page
errors on desktop or phone, 16.7 ms frames while scrolling the film.
