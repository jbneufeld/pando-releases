# v8-2026-10-14b

The site Jared approved on 2026-10-14 ("This is it!"): slogan hero, Explore the real app, featured Pando Voice.

Six page edits for the loader in PandoLandingPage.tsx (body, js and css targets, two each):
- V8-BODY-IN / V8-BODY-OUT: the v8 page goes in front of the old body; the old body is wrapped in an inert `<template>`.
- V8-JS-IN / V8-JS-OUT: the v8 script (Motion 11.11.17, Lenis 1.1.13, page) runs first; the old script is wrapped in a function that is never called.
- V8-CSS-IN / V8-CSS-OUT: the old page CSS is fenced inside `@media not all`; v8 brings its own styles in the body.

Loader constants to set: this file's jsDelivr URL, its sha256, and the page-edit count **6** (it was 69).
Buy buttons are unchanged: `/account`, `/account?checkout=lifetime`, `/account?signin=1`.
Build stamp: `--build: "v8-2026-10-14b"` on `:root`.
Never delete this file once it is live.

v8b = v8 plus one rule: `[data-audos-crawler-snapshot="1"] { display: none !important; }`, so the host's own copy of the search-engine text never shows to people, even when an Audos publish drops the rule that used to hide it (2026-10-14).
