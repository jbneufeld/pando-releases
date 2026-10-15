# v8-2026-10-15d

v8c (live since 2026-10-15) with fades you can actually see, on Jared's note "the transitions are still the same. I want professional fading in and out scrolling transitions":

- v8c's fade-out ran only while a block crossed the top edge, under the header, so it was invisible. Now every block fades and rises in across the bottom third of the screen (top edge 100% to 64% down), holds in the middle, and fades and lifts away across the top third (bottom edge 36% to 4% down). Scrolling back plays it in reverse.
- Bands are in screen heights (`cover 0% cover 36vh`, `cover calc(100% - 36vh) cover calc(100% - 4vh)`), so tall pictures and short lines fade at the same places. Rise 64px with scale .97 in; lift 48px with scale .97 out. Gentle ease-in-out curves.
- Lead paragraphs, the Voice button and the second plan start 5vh later for a slight stagger. The closing slogan's lines use the same screen-height bands.

Same six page edits and loader count (6); only the loader URL and sha256 change. Build stamp `--build: "v8-2026-10-15d"`. Never delete this file once it is live.
