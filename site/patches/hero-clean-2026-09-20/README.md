# Patch: clean hero, floor fades in with the film

Jared, 2026-09-20: the perspective grid in the hero section is the one part of the site he
does not like. He chose "clean hero, floor below" after comparing five treatments on the
live page: the hero keeps a plain black field with drifting dust, and the floor grid fades
in as the film starts, so every window further down still has ground under it.

Three line edits plus the build stamp, all inside the existing
`/* ---------- floor grid + dust, drawn once per frame on one canvas ---------- */` block.
Apply these and nothing else. Do NOT replace the page with `site/index.html` from this repo.

| File | sha256 |
|---|---|
| block-old.js | c77d1369b01146e27ff66860694fb61a90e07134565dcef4ca251054f2e8b8bc |
| block-new.js | 6b437332734c06cfa5cd8cd3470cabd021b110b047b10e7fc5873c0738588256 |

`block-old.js` is the twelve lines exactly as they stand in the page you serve today.
`block-new.js` is the same block after the three edits. Every line of `block-old.js`
was verified present, character for character, in the live page on 2026-09-20.

## 1. Insert two lines

Directly AFTER this line (it is unchanged):

    var cx = W / 2 - cam.x * 0.1, cy = H * 0.46, floorY = narrow() ? 200 : 380 - cam.y;

insert:

    /* the hero keeps a clean black field: the floor fades in as the film starts */
    var hero = Math.max(0, Math.min(1, (scrollY - innerHeight * 0.55) / (innerHeight * 1.05)));

## 2. Fade the depth rows

Replace `0.09 * Math.pow` with `0.09 * hero * Math.pow` in this line, changing nothing else:

    var a = 0.09 * Math.pow(1 - n / 34, 1.6); ctx.strokeStyle = 'rgba(236,236,236,' + a.toFixed(3) + ')'; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

## 3. Fade the converging verticals

Replace `0.07 * (1 -` with `0.07 * hero * (1 -` in this line, changing nothing else:

    for (var m = -14; m <= 14; m++){ var x = m * GAP - xoff, x0 = cx + x, x1 = cx + x * far; var a2 = 0.07 * (1 - Math.min(1, Math.abs(m) / 14));

## 4. Build stamp

In `:root`, change `--build:"agents-multi-2026-09-17"` to `--build:"hero-clean-2026-09-20"`.
The computed value keeps its quote characters, so it reads `hero-clean-2026-09-20` between
quote characters.

## What this does not touch

The horizon fade, the dust particles, the 3D film, the intro, the camera, and every scene
below the hero are unchanged. The grid maths are untouched: it is drawn exactly as before,
multiplied by a scroll factor that is 0 in the hero and 1 by roughly 1.6 screen heights down.
Mobile and reduced motion already hide this canvas entirely, so neither changes.

Must NOT change: the founding licence block and its `/account?checkout=lifetime` button and
founding-offer-status check, the launch banner, pricing, the FAQ including "Can I get a
refund?", every Download for Mac link to `/account`, the signed-in home route.

## Checked by Claude Code, 2026-09-20

The three edits are applied to `site/index.html` in the Pando working copy and were rendered
headless from that file at 1440x900 and 390x844:

- Hero at scroll 0: no grid, dust only. Zero console errors.
- y=1400 (Code chapter): the floor grid is back under the window, as it is today.
- iPhone 390x844: unchanged, that canvas is hidden on mobile.

The same behaviour was demonstrated on the LIVE page before Jared chose it, by intercepting
the canvas draw calls in the browser. Nothing was published.

## Outcome: LIVE 2026-09-20 on Jared's word

Applied by Otto to `components/PandoLandingPage.tsx` and published as task #140105.
Verified on www.pandoworkbench.com after publishing, signed out:

| Check | Result |
|---|---|
| Computed `--build` | `hero-clean-2026-09-20` between quote characters |
| Hero, scroll 0 | 549 light pixels on the dust canvas (dust only, no grid) |
| 0.78 screens down | 83,869 light pixels, floor fading back in |
| iPhone 390x844 | unchanged, zero console errors |
| $55 / $24 / $228 / checkout=lifetime / refund FAQ / founding-offer-status | identical counts to the pre-publish live page |
| /account | HTTP 200. Founding seats: remaining 20, claimed 0 |

### Two traps worth knowing

1. **Otto's first pass inserted the `hero` variable but did not apply it** to either
   alpha line, and still bumped the build stamp. The page therefore *claimed* the
   change while drawing the grid exactly as before. Reading the diff would not have
   caught it; counting light pixels on the canvas did (132,302 at scroll 0 before,
   549 after). Otto said plainly that it could only confirm a file was modified.
2. **The hosted page applies the patch as a runtime `.replace()` chain** on the page
   source string at module load, not as a direct edit of those lines. It works, and
   costs nothing per frame, but it fails silently if the underlying line ever changes.
   Anyone editing that draw loop again must re-check the replace literals.

Publishing needed a task named `Publish workspace draft → live (hero-clean-2026-09-20)`:
a stale draft task from an earlier session ("Revoke PANDO-3QSS-...") sat on the board and
the platform demands the exact task name whenever two drafts are staged at once.
