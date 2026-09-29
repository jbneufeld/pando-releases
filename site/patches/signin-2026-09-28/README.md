# pandoworkbench.com: Sign in / Get started front door, gated download (build signin-front-2026-09-28)

Jared, 2026-09-28: no "Download for Mac" on the front page; Sign in and Get started top right like
BridgeMind; the download is offered only after purchase; clearer on phones; original wording.

## What changes

- NAV-01: top right "Sign in" (quiet, `/account?signin=1`) and "Get started" (white, `/account`).
- HERO-01: hero buttons "Get started" (`/account`) and "See pricing" (`#pricing`).
- DLBAR-01: bottom section, gated: "One memory. Installed on your computer." / "Buy it here, then
  open this page on your computer to install it." / macOS card with "Sign in to download"
  (`/account?signin=1`, keeps id relLink) / "A licence is needed to run Pando. Get a licence".
- IOSDL-01 (js): the iPhone script no longer rewrites the button to "Send yourself the link" or adds
  its phone note; the `ios` class is still set.
- colors-01: CSS for the above plus `.pando-static-page{overflow-x:clip}` (no sideways scroll at 390 px).
- REFUND7-01 / REFUND7-02: the price note and its monthly/annual toggle say "Full refund within 7 days."
  (Jared 2026-09-28: 7-day refund for new purchases). Otto's pricing code also sets this text at runtime,
  so his own strings must change too.
- colors-01 also hides `[data-audos-crawler-snapshot]` (the Audos search-engine text). Live already hides it
  through html.audos-crawler-snapshot-js; the draft preview did not, so it showed as a wall of text.
- colors-01 also gives the headline reveal masks room below (`.hero-copy h1 .line` padding-bottom
  .14em, margin-bottom -.14em) so descenders like the g in "agents" are no longer clipped; spacing unchanged.
- BUILD-01: `--build:"signin-front-2026-09-28"`.

**63 page edits** (voice-2026-09-25's 57 + 6), unique ids, each matching once, all ASCII.

sha256: `5217e2829fcb4fa1a4774703fee4b5e2104b166a326237a346f08c5eef570542`

## How to apply (three constants in PandoLandingPage.tsx, nothing else)

1. Patch URL: `https://cdn.jsdelivr.net/gh/jbneufeld/pando-releases@<COMMIT>/site/patches/signin-2026-09-28/edits.json`
2. SHA-256: `5217e2829fcb4fa1a4774703fee4b5e2104b166a326237a346f08c5eef570542`
3. The page-edit count check: 57 becomes 63 (the check and its error text).

Do not edit the long embedded page strings in PandoLandingPage.tsx or pandoLandingPayload.ts.

Proven before push through Otto's real loader (live HTML with only these constants swapped, patch
served locally): passed, 63/63 matches, zero "Download for Mac", scrollWidth 390 at 390, desktop,
phone and iPhone.
