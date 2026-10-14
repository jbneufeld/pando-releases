# v8-2026-10-14c

v8b (the site Jared approved on 2026-10-14) plus smoother scrolling, on his note "the scrolling transitions are rough. I want this feel premium. I want nice fading transitions as someone scrolls":

- Scroll-linked fades: every block eases up into place as it enters and dissolves as it leaves the top; scrolling back plays it in reverse. CSS scroll-driven animations (`animation-timeline: view()`), no script per frame. Only when the browser supports them, motion is allowed, and the page really scrolls; otherwise the one-time entrances from v8 apply.
- The hero text fades and drifts as the live demo rises; pricing and FAQ now fade in like the rest; the closing slogan rises line by line.
- Each section's live demo is built in the background a few seconds after load instead of when you scroll near it (removes two 60-85 ms stutters).
- Smooth-scroll glide lerp .14 -> .10. `.band` overflow hidden -> clip.

Same six page edits and loader count (6) as v8b; only the loader URL and sha256 change. Build stamp `--build: "v8-2026-10-14c"`. Never delete this file once it is live.
