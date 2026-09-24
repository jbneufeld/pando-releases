# pandoworkbench.com: Horizon pictures and navy colours (build horizon-2026-09-24)

## What this is

Two changes to the live page, plus one new section Jared asked for:

1. **The pictures.** Every drawn app window on the page (the HTML "screenshots" of Pando) is redrawn to match
   the current app, Pando 0.3.16 (the Horizon design). That covers the six film chapters (Code, Agents, Chat,
   Brain, Review, Voice), the two setup windows in #agents, the four-agents window in #workspaces, the Halo in
   #brain, and the Voice demo in #voice.
2. **The colours.** The site's own colours move from graphite to the app's navy scheme.
3. **A new Comfort section** (`COMFORT-01`), inserted just before the Brain section. These are the only new
   words on the page, approved by Jared on 2026-09-24.

**No other wording changes.** Headings, stop cards, ledes, captions, facts, pricing, FAQ, banner, buttons, footer,
title and meta are untouched, down to the character. No links change. No sections move. The only new words are
inside the drawn windows, because they are part of the picture (side list rows, pane heads, pills).

## The file

`edits.json`: 37 edits (14 body, 17 js, 2 css, 4 doc).

sha256: `551660852a97777d5d9fa6868790ba72bd35e1b8fe77ff188baf09fb8b6400f6`

Each edit is `{"id", "target", "find", "replace", "count", "why"}` (plus a `lane` note you can ignore). Every
`find` is exact text that must match exactly `count` times (all are 1). Apply edits **in the order they appear
in the file**. All new text is ASCII, with no em or en dashes, no new hrefs and no `<img>`.

## How to apply (a final replace chain)

Add these as the last step of what you already do, in this order:

1. **doc edits (4): changes to your shell component.** They are described here in plain words; the `find`
   and `replace` text shows exactly what changes in the served code.
   - `colors-09`: in the function that paints the html and body background with inline `!important`
     (`su()`), change `#0a0a0a` to navy `#050c17` (both places in that one call).
   - `FA-02`: in `dc()`, remove the part that builds the injected icon rail over the workspaces picture (from
     `let i=[],l=[],g=document.querySelector("#workspaces .shot-in > .win-body")...` through
     `g.insertBefore(U,g.firstChild)}`), leaving just `let i=[],l=[];`. The pane-stagger code right after it
     stays and still runs.
   - `FA-03`: remove the rail's CSS block, from the comment
     `/* --- Draft: workspace demo icon rail (floats over the sidebar mock) --- */` down to just before
     `/* --- Draft: workspace demo terminal panes stagger in; their text is instant --- */`.
   - `FA-04`: in the reduced-motion `@media` block, remove the four `.pando-rail` / `.pando-tile` /
     `.pando-rail-item .pr-label` / `.pando-rail-toggle svg` lines and keep the stagger line.
   Why: the redrawn window now has Pando's real side list, so the rail was a second copy of it. After these,
   nothing named `pando-rail` or `pando-tile` is left.
2. **body edits (14): on the page markup, after your `tu()` rewrite** (the value that becomes `nu`).
   `KIT-01` must go first: it inserts the shared `<style id="hz-kit">` and the `#hz-sprite` icon sprite that
   every window uses.
3. **js edits (17): on the page script `Xp`**, before it is set as the script text. These recolour the hero
   field and the Halo, rebuild the Halo's frame to match the app, and switch the review card's chevron to the
   app's icon. No id or class the script reads is lost.
4. **css edits (2): on the stylesheet text**, before it is appended to the head, and after the doc edits,
   because `colors-01` anchors on the last lines of that same stylesheet.
   - `colors-01` appends the navy colour block at the end.
   - `BUILD-01` sets the build stamp: `--build:"halo-brain-2026-09-21";` becomes
     `--build:"horizon-2026-09-24";`. If you would rather change the target of your existing
     `.replace('--build:"agents-multi-2026-09-17"', ...)` to `horizon-2026-09-24` instead, that is the same result.

**Expected build stamp:** `getComputedStyle(document.documentElement).getPropertyValue('--build')` returns
`"horizon-2026-09-24"`, with the quote characters included.

## Checks to run on the hosted copy

Check each of these signed out **and** signed in (a browser that has ever signed in gets a different front
door), on desktop (1440 wide) **and** on iPhone (390 wide):

- The build stamp reads `"horizon-2026-09-24"`.
- **0 page errors** in the console.
- The words outside the pictures are identical to today's page (headings, cards, captions, pricing, FAQ,
  footer), apart from the new Comfort section (`#comfort`) before the Brain section.
- **Checkout links unchanged:** the same 18 hrefs, in the same order, as today (Download for Mac, Get a
  founding licence, Start Pando and the rest). Do not press them to test.
- No sideways scroll on the iPhone (scrollWidth equals the window width).
- **The Halo is lit:** the canvases in the film's Brain chapter (`#sbFilm`) and in the #brain section
  (`#sbSection`) each show the ring and its dots, at least 10,000 lit pixels each.
- The four-agents picture has no floating icon rail over it.

## Share card

Nothing to do. `site/og/pando-share-card.png` (the file your og:image and twitter:image already point to, 2400x1260)
was replaced in this same commit with the new picture: same words, the app in its new look. No head tag changes.

## Raw file URLs

- https://raw.githubusercontent.com/jbneufeld/pando-releases/main/site/patches/horizon-2026-09-24/edits.json
- https://raw.githubusercontent.com/jbneufeld/pando-releases/main/site/patches/horizon-2026-09-24/README.md

## Proof from this folder (on Jared's Mac)

- `check.cjs` (run `node check.cjs`): runs the preview harness with every edit, with `--dump`, on desktop,
  iPhone and Reduce Motion, and loads the live page before and after in each mode. Last run: **PASS**.
  0 problems, 0 page errors, outside text identical (4,661 / 6,784 / 6,757 characters), 18 of 18 hrefs
  identical, no overflow growth, no "Maya" outside the pictures, no "jaredneufeld" or "Delegation", no Agents
  mode row, rail gone, Halo lit 102,659 and 129,141 px (desktop), 198,152 and 98,070 (iPhone), 95,286 and
  120,897 (Reduce Motion), stamp `"horizon-2026-09-24"`. The full report is in `check/report.json`.
- The headings, sections, captions and footer sit at the same page positions before and after (0 px shift,
  desktop and iPhone), and the page height is unchanged (17,981 desktop, 14,144 iPhone).
- `shots/desktop/` holds whole-page shots before and after, every 700 px. `shots/phone/` holds iPhone shots
  every 800 px. `shots/rm/` holds the top of the page with Reduce Motion, on desktop and iPhone.
- `merge.py` rebuilds `edits.json` from the ten lane files. The one conflict: two lanes both used the id
  `FA-01`, so the film Agents window's edit is now `FAG-01`. No find text changed.
