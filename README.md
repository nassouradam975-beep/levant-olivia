# Levant Olivia

Website for Levant Olivia, olive oil from the family groves in Latakia, Syria.

- `index.html`: the site in German (main language)
- `en/index.html`, `ar/index.html`: English and Arabic (right to left) versions, same layout. Change text in all three when you edit the site.
- `style.css`: shared styles for all three; `fonts/`: self-hosted Lora (OFL)
- Legal pages (`impressum.html` etc.) are German only and linked from all three versions.
- `img/`: logo, photos and the bottle image

Deploy to Whop (levant-olivia.whop.site), from Windows PowerShell:

```powershell
irm https://github.com/whopio/whop-public-cli/releases/latest/download/install.ps1 | iex   # once
whop login --method oauth --account-id biz_bCuXbv7tqkxkOR                                   # once
git clone https://github.com/nassouradam975-beep/levant-olivia; cd levant-olivia            # once (later: git pull)
npm install -D vite @whop/cli                                                               # once
whop apps deploy --app app_MujJM6bogFv71g                                                   # every update
```

Roll back: Whop dashboard → the website → Versions, or `whop apps builds promote <build_id>`.

Cloudflare Pages also works: no build command, output directory `/`.
The "Jetzt kaufen" button gets its Whop link in the `WHOP_LINK` variable at the bottom of `index.html`, `en/index.html` and `ar/index.html`.
