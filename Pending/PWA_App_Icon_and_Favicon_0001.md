# PWA, App Icon & Favicon

**ID**: 0001
**Created**: Aug 2026
**Status**: Pending

## Goal

1. Create a proper SVG logo/icon for Textbook++
2. Generate favicon (multi-size) from the logo
3. Set up PWA (Progressive Web App) — add to homescreen / install as app
4. Update layout.tsx metadata and manifest

## Steps

- [ ] Design SVG logo (book + ++ branding)
- [ ] Generate favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png
- [ ] Create `app/manifest.ts` (Next.js App Router native) with name, icons, theme_color, display: standalone
- [ ] Create service worker (`public/sw.js`) for offline caching
- [ ] Update `layout.tsx` with PWA meta tags (theme-color, apple-mobile-web-app-capable, etc.)
- [ ] Update Navbar logo to use the new SVG
- [ ] Build and verify install prompt appears on supported browsers

## Notes

- SVG logo was started at `public/icon.svg` (incomplete — needs redesign)
- Next.js 16 App Router supports `app/manifest.ts` natively
- `next-pwa` or `@ducanh2912/next-pwa` available if needed, but manual SW is simpler
