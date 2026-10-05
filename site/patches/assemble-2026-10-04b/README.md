# pandoworkbench.com: Safari fix for the hero film (build assemble-2026-10-04b)

Jared, 2026-10-04: "when I go to pandoworkbench.com on Safari, the scrolling animations is very choppy and slow
and is not working properly".

This replaces assemble-2026-10-04 (live). Same page, same 69 edits; one runtime change in the film script (PMJS-03)
and the build stamp.

## What was wrong

The page's founding-banner code appends its stylesheet (`#pando-founding-banner-responsive`) to `<head>` again every
time any text in `<body>` changes (a MutationObserver on body). The typing demo in the old, now hidden, Voice section
changes text 18 times a second, so the sheet was re-appended 18 times a second. It is already the last node in
`<head>`, so nothing moves, but Safari treats it as a stylesheet change and recalculates the style of the whole
page each time: about 0.2 to 0.3 seconds. Safari never got above 4 or 5 frames a second. Chrome is unaffected.

## What changes

- PMJS-03: at start the film script makes `document.head.appendChild(node)` do nothing when `node` is already the
  last child of `<head>`. Every other append works as before, and the banner sheet stays last, so the cascade is
  the same as today.
- BUILD-01: `--build:"assemble-2026-10-04b"`.

**69 page edits**, unique ids, each matching once, file is all ASCII.

sha256: `38da393d47b7639799f959e3eda23f7d1a26442841046effe0792af21303862e`

## How to apply (two constants in PandoLandingPage.tsx, nothing else)

1. Patch URL: `https://cdn.jsdelivr.net/gh/jbneufeld/pando-releases@<COMMIT>/site/patches/assemble-2026-10-04b/edits.json`
2. SHA-256: `38da393d47b7639799f959e3eda23f7d1a26442841046effe0792af21303862e`

The page-edit count stays 69. Do not edit the long embedded page strings in PandoLandingPage.tsx or
pandoLandingPayload.ts. Draft only. Do not publish.

## Proof before push

Through the page's real loader (live HTML with only the URL and sha swapped, patch served locally):

- Safari 27.0.1 on macOS: before, 209 ms a frame idle at the top and through the film (about 5 frames a second).
  After, 12 ms a frame; 7 to 12 frames over 33 ms in a 2,000 frame scroll of the whole film.
- Safari's engine headless (WebKit, desktop and phone size): 12 ms a frame, no stylesheet inserts while idle.
- Chrome: unchanged, 16.7 ms a frame, no frame over 33 ms.
- Patch passed, --build assemble-2026-10-04b, hero, pricing block, 9 FAQ items and footer present, old sections
  hidden, banner still amber and 64 px tall, no page errors on desktop or phone.

A better long-term fix on the host side: in the banner code, do not call `document.head.appendChild(style)` inside
the observer callback when the style is already in `<head>`.
