# pandoworkbench.com: film descriptions without the card (build horizon-nocard-2026-09-25)

## What this is

One visual change, approved by Jared on 2026-09-25: the six scrolling film descriptions (Code, Agents, Chat,
Brain, Review, Voice) lose their card on wide screens. The words sit on the background with a soft navy shade
behind them (no edge), and the light beam on the words' side of each window is turned off so it no longer runs
through the text. Phones, windows 900px wide and under, and reduced-motion visitors are unchanged.

No wording, link, section or colour changes. Every other edit is identical to the live horizon-2026-09-24 file.

## The file

`edits.json` is the live `horizon-2026-09-24/edits.json` with two edits changed:
- `colors-01`: the same navy block, plus a no-card block appended after `/* ==== end HORIZON NAVY COLOURS ==== */`.
- `BUILD-01`: the stamp is now `--build:"horizon-nocard-2026-09-25";`.

Still 37 edits, still exactly 33 page edits (body/js/css), same ids, same order, all ASCII.

sha256: `e669d95cc88c464384882bdc5f02dcd6aa11dd2439c5a7819cd2d7795f0d9375`

## How to apply (two constants in PandoLandingPage.tsx, nothing else)

1. The patch URL constant becomes
   `https://cdn.jsdelivr.net/gh/jbneufeld/pando-releases@<COMMIT>/site/patches/nocard-2026-09-25/edits.json`
   (the commit that added this folder).
2. The checksum constant becomes `e669d95cc88c464384882bdc5f02dcd6aa11dd2439c5a7819cd2d7795f0d9375`.

Keep the 33-edit check, the 4-second fallback and everything else as it is. Do not delete the old file at e8035f5.

**Expected build stamp:** `getComputedStyle(document.documentElement).getPropertyValue('--build')` returns
"horizon-nocard-2026-09-25" between quote characters.

## Proof

Tested through the live page's own loader (only the two constants swapped, file served locally): 33 of 33 edits
matched, patch passed, stamp as above, 0 page errors. Phone (390 wide, iPhone) and reduced-motion views are
pixel-identical to today's live page; visible words identical.
