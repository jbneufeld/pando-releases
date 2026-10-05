# pandoworkbench.com: sharp zoom, calmer colour, phone and tablet layout, faster start (build assemble-2026-10-05d)

Jared, 2026-10-05: "I find it too colorful. Pando is not that colorful and the site misrepresents that. Also, I
checked the mobile view and it is terrible. We need to make sure that mobile and tablet view are optimized."
Jared, 2026-10-04: "There seems to be a little bit of a lag right when you load the screen."

Jared, 2026-10-05: "When the website zooms into the Pando workspace, it is slightly blurry. I want this to look sharp!"

This replaces assemble-2026-10-05b (live) and the pushed but never applied assemble-2026-10-05c (@6e4c1b6), which
it contains in full. The one addition over 05c is the sharp zoom:
- The four tour screens are laid out larger than life (1.35 times the fit scale, at most 2 times) and shown scaled
  down, so the camera's zoom never stretches a layer past the size it was drawn at. Before, on a large 1x display
  (2019 x 1260) the last step stretched its layer 1.79 times.
- A tour screen is hidden once the next one covers it, so at most two of the large layers are drawn at a time.
- The whole-window view is capped at life size.
At 2019 x 1260 in Safari's engine this also removes about 500 slow frames per scroll of the film (05c: 498 of 1,557
frames over 33 ms; this build: 2 to 5).

Originally: this replaces assemble-2026-10-05b (live). It was rebuilt from source, so it carries everything in 05b (the hero
line "For Mac with Apple Silicon." and its entrance) plus the unreleased 04c load work. The 04c folder was never
pushed and is superseded by this one.

## What changes (PMFILM-01, PMJS-03, BUILD-01; still 69 edits)

Colour, following the app's own rule (navy ground, white accent, status colours only as dots and short labels):
- The loose hero terminals have no constant colour. They carry a soft white lit edge and drift slowly, each at its
  own pace, settling when the page scrolls (Jared picked this, option B, 2026-10-05). Each terminal takes its own
  status colour only while they come together and in the roll call.
- Founding banner: navy with white text and a white button; amber only on the small "THIS WEEKEND ONLY" label.
- Hero and pricing buttons are white, not gold. Pricing card is neutral; only "N left" stays amber.
- Section numbers, progress dots and the scrub marker are neutral. Roll-call names show a small status dot.

The line "For Mac with Apple Silicon." is also in the pricing card, above the button (Jared, 2026-10-05: "the
indication for Mac should be in this section too"). It stays when the card turns into the $24 plan.

Phone and upright tablet (900 px and under):
- The banner is one 52 px row on phones (was 156 px, fixed).
- Each feature has a picture framed on the relevant part of the app at a readable size; the four terminals are a
  swipe row. Launch is added as its own step, Voice shows its pill.
- The click-around demo is hidden at 600 px and under.

Tablet on its side and small laptops: the hero's outer terminals slide outward so they do not cover the headline.

Faster start (from 04c): each scene layer keeps only the part of the app it shows; the four tour screens stay out
of the page until needed; the stage size is read once per refresh.

sha256: `760cfcbc061c209c792c53321a4ebcfb17f44a1e4ecffd6289685c5b42cece2c`

## How to apply (two constants in PandoLandingPage.tsx, nothing else)

1. Patch URL: `https://cdn.jsdelivr.net/gh/jbneufeld/pando-releases@<COMMIT>/site/patches/assemble-2026-10-05d/edits.json`
2. SHA-256: `760cfcbc061c209c792c53321a4ebcfb17f44a1e4ecffd6289685c5b42cece2c`

The page-edit count stays 69. Do not edit the long embedded page strings. Do not publish.

## Proof before push

Through the page's real loader (live HTML with only the pin swapped, patch served locally), in Safari's engine and
Chrome, desktop and phone size: patch passed, build stamp correct, hero, pricing block, 9 FAQ items and footer
present, no page errors, no sideways scroll at 360, 390, 744, 820, 1180, 1280 and 1440 wide. Scroll film: Safari's
engine 2 frames over 33 ms in 1,600, none over 100 ms; Chrome 16.7 ms throughout.
