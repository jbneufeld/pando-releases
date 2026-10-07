# assemble-2026-10-06c

`assemble-2026-10-06b` (@fd63709) with the magnetic hover effect on the `.pm-cta` buttons turned off
("Get started" in the hero and the pricing card no longer slides toward the cursor, which made it hard to click).
Only PMJS-03 (`show('code'); magnetic();` -> `show('code');`) and the BUILD-01 stamp differ. The drifting terminals behind the hero are unchanged.

- 69 page edits. Build stamp `assemble-2026-10-06c`.
- sha256 `71d89d8ff9e18d47523275ad59a9b71f58035cf10f5257670c6d122b6ba13433`
- Proven through the live loader, Chrome + WebKit: button offset under the pointer 13-14px before, 0px after; prices unchanged.

Loader change: swap the patch URL and sha256 constants; the count stays 69.
