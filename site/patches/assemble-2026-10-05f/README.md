# assemble-2026-10-05f

`assemble-2026-10-05e` (@4f155ca, live) byte for byte, plus the October offer in the
after-close hero and pricing card. Jared, 2026-10-05: "I would also like to have a 50%
badge on the website to really promote it", "Can we try a solid amber badge?", "The
people who purchase in October will keep the $24/month for life".

- PMJS-03, `offerOver()`: the hero price gets a struck-through $49 and a "50% OFF" badge;
  the pricing card gets the same pair under the price, the heading "October offer.
  Yours for life." and the line "Start in October and keep $24 a month for life.
  Regular price $49 a month from November 1."
- PMFILM-01: five CSS rules (`.pm-was`, `.pm-badge` in solid amber #ffbe6e, `.pm-deal`).
- BUILD-01: `--build:"assemble-2026-10-05f"`. 69 page edits.
- Nothing changes before the founding offer closes (2026-10-06T00:00Z).
- sha256 `c7a4421fd647dd316f416f7ffc80c0ad3708146b44d18744d0762f9861a4a9be`

The offer text must come out again on November 1, 2026 (regular price $49 a month).
The film source (`reviews/hero-motion-2026-10-03/src/film.js`) does not have this yet;
fold it in before building the next patch from source.

Loader change: swap the patch URL and sha256 constants; the count stays 69.
