# Patch: the Brain is the Halo

Jared, 2026-09-21: the Second Brain pipeline diagram (SOURCE FEATURES / COMPILATION BUS /
LINKED WIKI with Branch, Merge, Condition, Sort) "is confusing and doesn't make sense." The
app now shows the Brain as the Halo: a ring in space, every dot a note in its section's colour,
every chord through the middle a link, small electrodes riding the chords. The site's two
copies of the Second Brain (the Brain stop in the film, and the Brain section) become the same
Halo, drawn on a 2D canvas. Approved by Jared on the fork page.

Two block replacements, five one-line edits, and the build stamp. Apply these and nothing
else. Do NOT replace the page with `site/index.html` from this repo.

| File | sha256 | What |
|---|---|---|
| css-old.css | 090e85015c27971a3326bb1bf425ae0866e8cbf9b92b868cc499aa974026100b | 62 lines: the old `.sb*` CSS block |
| css-new.css | 90d116fe518f1def2d89edeefed31bf41b103af68b5e06bed68899b3b9f53fb3 | 21 lines: the `.halo*` CSS block |
| js-old.js | 5342c1bc6761c4379231056e083a7b93dd60efa2f224be064b3614a158f12650 | 35 lines: `buildSecondBrain()` and its two calls |
| js-new.js | 58242ff8f35de4283f47a0d7cd382f6983008bde8ae614241658fdf1f72a3c56 | 113 lines: `haloWorld()`, `buildHalo()`, the two calls, the frame loop |

Every line of the two `-old` files was checked against the page served at
https://www.pandoworkbench.com on 2026-09-21, except that your copy stores the non-ASCII
characters in two lines of `js-old.js` as escapes (`\xB7`, `→`, `’` for `·`, `→`,
`’`). Match those two lines by their ASCII start (`var log = [['06:00:12'` and
`(compact ? '' : '<footer class="sb-footer">`). Both `-new` files are pure ASCII on purpose.

## 1. Replace the CSS block

From the line `/* ---------- Second Brain, drawn the way the app draws it ---------- */` up to
but NOT including the line that starts `.brainsec .sbwrap{`, replace the whole block
(`css-old.css`) with `css-new.css`.

## 2. Two CSS lines go

Delete this line (it styled the old block inside the section):

    .brainsec .sbwrap .sb{height:auto}

Delete this line (a phone rule for the old panels):

    @media (max-width:900px){.sb-panels{grid-template-columns:1fr}.sb-panels section{border-right:0;border-bottom:1px solid var(--sb-line)}.sb-metrics{gap:12px 28px}}

## 3. Replace the builder

From the line `/* ---------- Second Brain builder (same geometry as the app) ---------- */`
through the line `buildSecondBrain($('sbFilm'), true); buildSecondBrain($('sbSection'), false);`
(inclusive), replace the whole block (`js-old.js`) with `js-new.js`.

## 4. Three film lines

The film used to fade the RUN LOG rows in at the Brain stop. It now scrubs the engine at work
on the Halo (the ledger-web hub lights and its trails flare, electrodes on them dash).

Replace:

    var sbLog = document.querySelectorAll('#sbFilm .sb-log > div'), agentMsgs = document.querySelectorAll('#agentThread .msg'), chatMsgs = document.querySelectorAll('#chatThread .msg');

with:

    var agentMsgs = document.querySelectorAll('#agentThread .msg'), chatMsgs = document.querySelectorAll('#chatThread .msg');

Replace:

    gsap.set(chatMsgs, {autoAlpha:0, y:10}); gsap.set(sbLog, {autoAlpha:0, x:-6});

with:

    gsap.set(chatMsgs, {autoAlpha:0, y:10});

Replace:

    tl.to(sbLog, {autoAlpha:1, x:0, duration:1.5, stagger:1.4, ease:'power2.out'}, 58);

with:

    tl.to(haloFilm.state, {work:1, duration:4, ease:'power2.inOut'}, 58).to(haloFilm.state, {work:0, duration:3, ease:'power2.inOut'}, 64);

## 5. One reduced-motion line goes

Inside the `if (RM){` block, delete:

      document.querySelectorAll('.sb-particle').forEach(function(p){ p.remove(); });

## 6. Build stamp

In `:root`, change the `--build` value to `"halo-brain-2026-09-21"`. The computed value keeps
its quote characters, so it reads `halo-brain-2026-09-21` between quote characters.

## How to check it, by counting pixels

Code that looks right can still draw nothing (2026-09-20). On the draft, run in the console:

    (function(){ var c = document.querySelector('#sbSection canvas'); var d = c.getContext('2d').getImageData(0,0,c.width,c.height).data, n = 0; for (var i = 3; i < d.length; i += 4) if (d[i] > 40) n++; return [c.width, c.height, n]; })()

after scrolling the Brain section into view. Expected: a canvas wider than 300 (it is 300 x 150
only if nothing ever drew) and hundreds of thousands of lit pixels (321,889 at 2556 x 1240 on
the fork). `document.querySelectorAll('#sbFilm canvas, #sbSection canvas').length` must be 2,
and `document.querySelector('.sb-graph')` must be null.

## What this does not touch

The Brain section's copy, the import block, every other film stop, the intro, the hero, the
camera, phones (the film's phone rules are untouched; `.halo` is a normal block there) and
reduced motion (the Halo draws one still frame and stops).

Must NOT change: the founding licence block and its `/account?checkout=lifetime` button and
founding-offer-status check, the launch banner, pricing, the FAQ including "Can I get a
refund?", every Download for Mac link to `/account`, the signed-in home route.
