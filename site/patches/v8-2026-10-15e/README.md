# v8-2026-10-15e

v8d (live since 2026-10-15 12:44) with stronger fades, on Jared's note "make the fades stronger":

- Blocks travel further (rise 110px in, lift 80px out, scale .93) and text blocks also blur (8px) as they fade; the big pictures move and fade the same way without blur (a blur that large costs frames).
- The bands reach deeper into the screen: in over the bottom 44vh, out over the top 42vh down to 3vh. Ease-in-out curves, so a block stays faint longer before it settles.
- Strength lives in CSS variables on :root (`--sf-rise`, `--sf-lift`, `--sf-scale`, `--sf-blur`, `--sf-in`, `--sf-out`, `--sf-ease-in`, `--sf-ease-out`), used inside the keyframes and the ranges.
- The closing price line and buttons finish arriving within 22vh and never fade out, so the end of the page is always fully visible. The hero headline fades and drifts without blur.

Same six page edits and loader count (6); only the loader URL and sha256 change. Build stamp `--build: "v8-2026-10-15e"`. Never delete this file once it is live.
