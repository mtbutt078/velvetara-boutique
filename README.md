# Velvetara — Boutique Shopify Theme (GitHub-ready)

Elegant boutique theme for dresses, abayas, lawn & luxury pret. Upload this folder to GitHub, then connect to Shopify.

## 1. Upload to GitHub
1. Create new repo on GitHub, e.g. `velvetara-boutique`
2. In this folder:
```bash
git init
git add .
git commit -m "boutique theme"
git branch -M main
git remote add origin https://github.com/YOURNAME/velvetara-boutique.git
git push -u origin main
```

## 2. Connect GitHub to Shopify
1. Shopify Admin → Online Store → Themes → Add theme → **Connect from GitHub**
2. Login GitHub → select `velvetara-boutique` repo → Connect
3. Click **Customize** to edit: logo, hero, collections, promos
4. Assign a collection in Featured Collection section (e.g. create collection `New` in Products)
5. Click **Publish** when ready

## Structure
- `layout/theme.liquid` — base
- `templates/` — index, collection, product, cart, page, search, list-collections
- `sections/` — header, hero, collection-list, featured-collection, promo-grid, testimonials, newsletter, footer
- `snippets/product-card.liquid`
- `assets/theme.css`, `theme.js`
- `config/`, `locales/`

No build step. Works with Shopify OS GitHub integration + Shopify CLI (`shopify theme dev`).

Edit store name, phone, WhatsApp in `sections/footer.liquid` + `sections/header.liquid`.
