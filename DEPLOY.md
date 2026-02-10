# Deploying to GitHub Pages

## After pushing

1. **Settings → Pages** in your repo: Source = **Deploy from a branch**, branch = **main**, folder = **/ (root)**.
2. Your site will be at: **https://veviks.github.io/tahel_site/**

## If the live site looks different from local

- **Hard refresh:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac) to avoid cached old files.
- **Check what’s on GitHub:** In the repo, confirm that these are present:
  - `styles.css`, `script.js`, `lineup.js`, `unlock.js`
  - `80-kb-Soft.otf` (font)
  - `videos/` folder with `INTRO.mp4` and the other `.mp4` files
- **File size limit:** GitHub allows max **100 MB per file**. If `INTRO.mp4` or any video is larger, it won’t be in the repo and won’t load on the live site. Options:
  - Compress the video (e.g. lower resolution or bitrate) so it’s under 100 MB, or
  - Host big videos elsewhere (e.g. YouTube, Vimeo) and link/embed them.

The base-URL script in each page makes asset paths work when the site is served from `/tahel_site/`.
