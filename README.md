# Levant Olivia

Website for Levant Olivia, olive oil from the family groves in Latakia, Syria.

- `index.html`: the site in German (main language)
- `en/index.html`, `ar/index.html`: English and Arabic (right to left) versions, same layout. Change text in all three when you edit the site.
- `style.css`: shared styles for all three; `fonts/`: self-hosted Lora (OFL)
- Legal pages (`impressum.html` etc.) are German only and linked from all three versions.
- `img/`: logo, photos and the bottle image

Deploy: Cloudflare Pages, no build step, output directory `/`.
The "Jetzt kaufen" button gets its Whop link in the `WHOP_LINK` variable at the bottom of `index.html`, `en/index.html` and `ar/index.html`.
