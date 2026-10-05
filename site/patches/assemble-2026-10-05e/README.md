# pandoworkbench.com: smooth scroll film (build assemble-2026-10-05e)

Jared, 2026-10-05: "fix the smoothness".

This replaces assemble-2026-10-05d (live, @a52cb4d) and contains it in full. Same page, same look, same 69 edits;
the changes are in PMFILM-01 (one CSS rule) and PMJS-03 (the film script).

## What was wrong

The captured app resets `visibility` at its root (`.app-snap`). A film layer hidden with `visibility: hidden`
therefore still had every element inside it visible, and the browser kept drawing and compositing it on every
frame at opacity 0. That covered the four tour screens (now drawn at up to 1.79 times life size), the sidebar and
rail layers before they slide in, and the Brain layer.

## What changes

- `.pm-layer .app-snap { visibility: inherit; }` so a hidden layer is really hidden.
- Each tour screen is switched on (display, then visibility) a moment before it fades in, while the camera is
  still, and switched off with `visibility: hidden` once the next screen covers it.
- BUILD-01: `--build:"assemble-2026-10-05e"`.

sha256: `41413badbcc6af709f9dff3f6a6e17fe1c6da620492c4957d3a8c8c18cda3111`

## How to apply (two constants in PandoLandingPage.tsx, nothing else)

1. Patch URL: `https://cdn.jsdelivr.net/gh/jbneufeld/pando-releases@<COMMIT>/site/patches/assemble-2026-10-05e/edits.json`
2. SHA-256: `41413badbcc6af709f9dff3f6a6e17fe1c6da620492c4957d3a8c8c18cda3111`

The page-edit count stays 69. Do not edit the long embedded page strings. Do not publish.

## Proof before push

Safari's engine at 2019 x 1260, 1x (Jared's window), full scroll of the film through the page's real loader:
- 05d: 17 to 22 ms a frame, 6 to 62 frames over 33 ms depending on the run.
- 05e: 6 ms a frame (95th percentile 11 ms), 3 to 4 frames over 33 ms, none over 61 ms.
Still frames at 13 scroll positions are identical to 05d apart from the countdown clock. Patch passed in Safari's
engine and Chrome, desktop and phone size, no page errors; Chrome 16.7 ms throughout.
