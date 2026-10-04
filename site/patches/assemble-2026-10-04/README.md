# pandoworkbench.com: new hero film on top (build assemble-2026-10-04)

Jared, 2026-10-03: "Give Otto the New page on top", then 2026-10-04: "I like how you had the pricing at the end of the page with our new design. But we can keep the facts in question section at the bottom after that."

This replaces assemble-2026-10-03, which was never applied.

## What changes

Everything in youragents-2026-09-29 (live), plus:

- PMFILM-01: the new hero film ("Assemble"), the click-around demo and the closing lines, placed at the
  top of `<main id="top">`. Its screens were captured from the current app with demo data. Its styles are
  scoped under `.pm-scope` and `.app-snap`. The old hero, film and feature sections (`#film`, `#agents`,
  `#comfort`, `#brain`, `#voice`, `#pricing`, `#intro`) stay in the page but are hidden. FAQ and footer are
  untouched. The page's own pricing block (`#plans`) closes the new section: $55 founding licence linking
  to `/account?checkout=lifetime`, with "or $24 a month" linking to `/account`. It reads the same
  `founding-offer-status` hook to show how many are left, and switches to the $24 plan when the offer
  is closed or the date has passed.
- PMNAV-01: header links now read Product, Try it, Pricing (to `#plans`), FAQ.
- PMJS-01: no opening animation, so the words show as soon as the page loads.
- PMJS-02: the page's smooth scroll is shared with the new film.
- PMJS-03: the new film script, appended after the page script. It needs only GSAP and ScrollTrigger,
  which the page already loads.
- BUILD-01: `--build:"assemble-2026-10-04"`.
- The founding banner is restyled amber with a "THIS WEEKEND ONLY" tag (CSS only; its text, countdown
  and link are still Otto's).

**69 page edits** (youragents-2026-09-29's 64 + 5), unique ids, each matching once, file is all ASCII.

sha256: `3a9367064ce05a8f5442fdf0114914f429d232a01a5fe3d65067efc1de67a4ae`

## How to apply (three constants in PandoLandingPage.tsx, nothing else)

1. Patch URL: `https://cdn.jsdelivr.net/gh/jbneufeld/pando-releases@<COMMIT>/site/patches/assemble-2026-10-04/edits.json`
2. SHA-256: `3a9367064ce05a8f5442fdf0114914f429d232a01a5fe3d65067efc1de67a4ae`
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
served locally): no fallback, all 69 edits match once, --build assemble-2026-10-04, old sections hidden,
old Pricing hidden, new pricing block shows the live count, FAQ and footer present, banner link `/account?checkout=lifetime`, no page
errors on desktop or phone, 16.7 ms frames while scrolling the film.
