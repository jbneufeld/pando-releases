# pandoworkbench.com: product names without "CLI" (build horizon-nocli-2026-09-25)

## What this is

Jared, 2026-09-25: "One thing that keeps bothering me: the phrase 'Gemini CLI'. This doesn't need to say CLI
anywhere like that." Product names lose the CLI suffix everywhere on the page, including inside the drawn app
windows and the intro animation:

- Gemini CLI -> Gemini
- Grok CLI -> Grok
- GitHub Copilot CLI -> GitHub Copilot
- Cursor CLI -> Cursor

Sentences that use "CLI" as an ordinary word (for example "every coding CLI") are unchanged.

## The file

`edits.json` is the live `nocard-2026-09-25/edits.json` (all 37 edits, unchanged except the build stamp) plus 23
new edits `CLI-01` to `CLI-23` at the end (21 body, 2 js). **56 page edits** (body/js/css), all exact, each
matching once, all ASCII. `BUILD-01` now stamps `--build:"horizon-nocli-2026-09-25";`.

The hero logo's alt text becomes "Gemini" (CLI-04) and the intro animation's logo list uses the same name
(CLI-23), so the Gemini logo still flies in.

sha256: `124d87904e052f437c6dbc6878d6261eea6f7bef4d224a4584516a8638ca6db7`

## How to apply (three constants in PandoLandingPage.tsx)

1. Patch URL: `https://cdn.jsdelivr.net/gh/jbneufeld/pando-releases@<COMMIT>/site/patches/nocli-2026-09-25/edits.json`
2. SHA-256: `124d87904e052f437c6dbc6878d6261eea6f7bef4d224a4584516a8638ca6db7`
3. The page-edit count check: 33 becomes 56.

Do not edit the long embedded page markup, script or style strings in that file: the edits anchor on them exactly.

**Expected build stamp:** "horizon-nocli-2026-09-25" between quote characters; `window.__pandoHorizonPatch.passed`
true with 56 matches.

## Proof

Tested through the live page's own loader (only URL, checksum and count swapped, file served locally): 56 of 56
edits matched, patch passed, 0 page errors, desktop and iPhone. No "Gemini CLI", "Grok CLI", "Copilot CLI" or
"Cursor CLI" left in the page text.
