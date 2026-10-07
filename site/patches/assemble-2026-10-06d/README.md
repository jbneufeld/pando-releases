# assemble-2026-10-06d

Same as assemble-2026-10-06c, plus one change: a "Get started" button (any link to /account) opens the
account page the moment it is pressed with a mouse or trackpad.

Why: the hero is part of the scroll film and keeps gliding for about a second after even a small trackpad
scroll (12 px of scroll moved the button 12 px over one second). A click needs the press and the release on
the same element, so a press near the button's edge was lost when the button slid out from under the
pointer. Touch, keyboard and modified clicks (Cmd/Ctrl/Shift/Alt) behave as before.
