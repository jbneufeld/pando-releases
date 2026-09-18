# Patch: many agents, one workspace (closes the Agents section)

Four edits to the embedded landing page that the LIVE site serves today (the copy whose
`:root` carries `--build:"workbench-2026-09-15-2109"` and whose founding licence block
you edited in the Brief 12 thread). Apply these four edits and nothing else. Do NOT replace
the page with `site/index.html` from this repo: that file is older than the live founding
licence block, refund FAQ and banner.

| File | sha256 |
|---|---|
| block.html | 598a024f5dc32cc9dc9fc2b464e81588df1954aaca30950b7e253bb95fa0a361 |
| block.css | d0f80af649b80ee457bb30745c7262d2ecd234e42b4d57bfcdab27ffb69279f7 |
| fitshots-old.js | 5ec052176abdb3ac53c7339e01b86559af5dd8681a9de3530b146f92dd2a4917 |
| fitshots-new.js | 5c73b30dfbaa46daf6a293ac90bbba0d52807f117a0d0b69491ebf0874e94dec |

1. **HTML.** Inside `<section class="section agents" id="agents">`, directly after the line
   `<p class="foot">Plus any CLI you name. "Something else" adds one Pando has not heard of.</p>`
   insert the contents of `block.html` byte for byte. It must sit inside that section's
   `.wrap`, before the `.wrap` closes.
2. **CSS.** Append the contents of `block.css` at the end of the page's main `<style>`
   block (after every existing rule, before `</style>`).
3. **Script.** In `function fitShots()`, replace the one line in `fitshots-old.js` with the
   two lines in `fitshots-new.js`. Nothing else in the script changes.
4. **Build stamp.** In `:root`, change `--build:"workbench-2026-09-15-2109"` to
   `--build:"agents-multi-2026-09-17"`.

The four `<img>` tags in block.html use the same `assets/claude.svg`, `assets/codex.png`,
`assets/gemini.svg` and `assets/grok.svg` paths as the film's panes; they must resolve the
same way those do on the hosted page (no broken images).

Must NOT change: the founding licence block (its button goes to `/account?checkout=lifetime`
and the founding-offer-status check), the launch banner, pricing, the FAQ including
"Can I get a refund?", every Download for Mac link to `/account`, the signed-in home route.

Checked by Claude Code: these four edits applied to this repo's commit 557ed71 page render
the block correctly at 1440x900 and 390x844 with no console errors.
