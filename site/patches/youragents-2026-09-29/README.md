# pandoworkbench.com: "Your agents" heading (build youragents-2026-09-29)

Jared, 2026-09-29: "Four agents. One folder. One screen." made it sound like Pando only handles
those four agents.

## What changes

Everything in signin-2026-09-28 (live), plus:

- AGENTS-HEAD-01: the workspaces heading reads "Your agents. One folder. One screen."
- BUILD-01: `--build:"youragents-2026-09-29"`.

**64 page edits** (signin-2026-09-28's 63 + 1), unique ids, each matching once, all ASCII.

sha256: `8f8ebb1b489a31aac30a186474cdb949721b6fe96e902973eb06b91d0d74e4a0`

## How to apply (three constants in PandoLandingPage.tsx, nothing else)

1. Patch URL: `https://cdn.jsdelivr.net/gh/jbneufeld/pando-releases@<COMMIT>/site/patches/youragents-2026-09-29/edits.json`
2. SHA-256: `8f8ebb1b489a31aac30a186474cdb949721b6fe96e902973eb06b91d0d74e4a0`
3. The page-edit count check: 63 becomes 64 (the check and its error text).

Do not edit the long embedded page strings in PandoLandingPage.tsx or pandoLandingPayload.ts.

Proven before push through Otto's real loader (live HTML with only these constants swapped, patch
served locally): no fallback, heading reads "Your agents. One folder. One screen.", --build
youragents-2026-09-29, Sign in present, no "Download for Mac", 7-day refund text present.
