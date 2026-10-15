# v8-2026-10-15h

v8g (edge-only Strong fades, agent colours, soft light pools) on a black page, Jared's pick ("I like black") from Navy / Graphite / Black:

- Ground #050506, surface #0e0e11, raised #151519, neutral hairlines; header bar, ghost buttons and price cards follow; the light behind each picture is neutral instead of ice. The navy app windows now stand out against the page.
- The host paints html and body navy (inline, important) when it mounts the page; page.js keeps both on --ground with a MutationObserver, so no navy shows at the edges or in Safari's bounce. `#root` is black in the CSS edit too.
- Go-live also needs the loading-screen style (`pando-loader-paint`) in black, in the live file and in custom_head_html, plus a rule for the host's "Loading Pando" panel: see `marketing/site/` task for v8h.

Same six page edits and loader count (6); only the loader URL and sha256 change. Build stamp `--build: "v8-2026-10-15h"`. Never delete this file once it is live.
