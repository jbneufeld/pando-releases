# pandoworkbench.com: the Voice chapter as the included finale (build horizon-voice-2026-09-25)

## What this is

Jared, 2026-09-25: the last part of the scroll film is Pando Voice, "but I want it to look like a special feature of
Pando and that it is included with the platform." He picked option C of three mockups:

- chapter tag: "One more thing"
- headline: "Pando Voice. Included." (the second word with a soft white glow)
- text: "Hold a key, speak, and the cleaned-up words land at your cursor in any app, terminals included. It comes with
  every Pando licence at no extra cost."
- the two fact rows (Runs, Cleanup) unchanged; the Voice pill in the drawn window gets a soft white halo.

## The file

`edits.json` is the live `nocli-2026-09-25/edits.json` plus one body edit `VOICEFIN-01` (replaces the chapter 06
description block), a small CSS block appended inside `colors-01`, and the build stamp in `BUILD-01`.
**57 page edits** (body/js/css), unique ids, each matching once, all ASCII.

sha256: `bd832078b5719f8e5c50a7a669e4a9eb2f089b2ad0aa53878fbae977ff26037d`

## How to apply (three constants in PandoLandingPage.tsx, nothing else)

1. Patch URL: `https://cdn.jsdelivr.net/gh/jbneufeld/pando-releases@<COMMIT>/site/patches/voice-2026-09-25/edits.json`
2. SHA-256: `bd832078b5719f8e5c50a7a669e4a9eb2f089b2ad0aa53878fbae977ff26037d`
3. The page-edit count check: 56 becomes 57.

Do not edit the long embedded page strings in PandoLandingPage.tsx or pandoLandingPayload.ts.

**Expected:** --build "horizon-voice-2026-09-25" between quote characters; window.__pandoHorizonPatch.passed true,
57 matches.

## Proof

Tested through the live page's own loader (only URL, checksum and count swapped): 57 of 57 edits matched, 0 page
errors, desktop, iPhone and reduced motion.
