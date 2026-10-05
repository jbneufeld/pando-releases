# assemble-2026-10-05

The live patch `assemble-2026-10-04b` (@38ff29c) with one addition: a small
line under the hero buttons, "For Mac with Apple Silicon." Jared approved it on
2026-10-05 after a buyer could reach payment without being told Pando is
Mac-only.

- Built from the 04b `edits.json` byte for byte; only `PMFILM-01` (the line and
  its one CSS rule, `.pm-scope .pm-req`) and `BUILD-01` (stamp) differ.
- 69 page edits, same as 04b. Build stamp `assemble-2026-10-05`.
- sha256 `e5c610f6fe007a43168d2f4bad9fae40d5aeff7ce44438e5e9d9a70f4ea410a0`
- Does not include the unreleased 04c load changes.
- The line stays after the founding offer ends (the offer code removes only
  the "Founding price ends Monday" note).

Loader change: swap the patch URL and sha256 constants; the count stays 69.
