# assemble-2026-10-06

`assemble-2026-10-05f` (@9d112e0, live) with the new price.

- October 2026: hero and pricing card show **$15 a month** with the old **$24** struck through and a "37% OFF" badge.
  Heading "October offer. Yours for life.", "Start in October and keep $15 a month for life. Regular price $24 a month
  from November 1. ... Or $144 a year."
- From 2026-11-01T05:00:00Z (midnight Winnipeg) the page switches by the clock to the standing price: "$24 / month",
  heading "One plan. Everything included.", "... Or $228 a year." No badge, no strike-through.
- The monthly/annual toggle script (REFUND7-02) follows the same clock ($15 / $12 a month billed yearly, then $24 / $19).
- BUILD-01: `--build:"assemble-2026-10-06"`. 69 page edits (unchanged count).
- Changed edits only: PMJS-03, REFUND7-02, BUILD-01.
- sha256 `b5063b1d65cb8ee7efcd1fe73e395b6ec93889f58a83d85816b2a521e9a74ef0`

Loader change: swap the patch URL and sha256 constants; the count stays 69.
