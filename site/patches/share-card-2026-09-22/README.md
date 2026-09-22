# Share card for X / social previews (2026-09-22)

Posting pandoworkbench.com on X shows a tiny grey card because the page head has
no og:image and asks for `twitter:card = summary`. This patch adds a 2400x1260
share image and switches to the large card.

Image: https://raw.githubusercontent.com/jbneufeld/pando-releases/main/site/og/pando-share-card.png
sha256: 944831a722e3fb7982b33624357ada90239bc4f105f4770ed64fd9670075fc77

## Change (page head only, no page body changes)

1. Change the existing tag
   `<meta name="twitter:card" content="summary" />`
   to
   `<meta name="twitter:card" content="summary_large_image" />`

2. Add these tags next to the other og:/twitter: tags:

```html
<meta property="og:image" content="https://raw.githubusercontent.com/jbneufeld/pando-releases/main/site/og/pando-share-card.png" />
<meta property="og:image:width" content="2400" />
<meta property="og:image:height" content="1260" />
<meta property="og:image:alt" content="Pando: your agents, one platform, one memory. Claude Code, Codex and Gemini CLI working side by side." />
<meta name="twitter:image" content="https://raw.githubusercontent.com/jbneufeld/pando-releases/main/site/og/pando-share-card.png" />
```

## Verify

`curl -s https://www.pandoworkbench.com/ | grep -E 'og:image|twitter:(card|image)'`
must show all five tags above and `summary_large_image`. Do not publish; the founder publishes.

card-source.html is the HTML the image was rendered from.
