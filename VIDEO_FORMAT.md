# Why videos don’t play & how to fix it

**.MOV (QuickTime)** often doesn’t play in **Chrome** or **Firefox**, especially on Windows. **Safari** usually plays it.

**Fix: convert to MP4 (H.264).** Then the intro and all other videos will work in all browsers.

## Option 1: FFmpeg (one-time install, then one command per file)

1. Install [FFmpeg](https://ffmpeg.org/download.html) (e.g. `brew install ffmpeg` on Mac).
2. In Terminal, from the `videos` folder, run for each file, for example:

```bash
cd videos
ffmpeg -i INTRO.mov -c:v libx264 -preset fast -crf 23 INTRO.mp4
ffmpeg -i LIBBY.MOV -c:v libx264 -preset fast -crf 23 LIBBY.mp4
# ... repeat for each .MOV
```

Or convert everything in one go (Mac/Linux):

```bash
cd videos
for f in *.MOV *.mov; do
  [ -f "$f" ] && ffmpeg -y -i "$f" -c:v libx264 -preset fast -crf 23 "${f%.*}.mp4"
done
```

3. Keep both `.mov` and `.mp4` in the folder (or replace). The site already tries `.mp4` first, then `.mov`.

## Option 2: Online converter

Use a site like [CloudConvert](https://cloudconvert.com/mov-to-mp4) or [FreeConvert](https://www.freeconvert.com/mov-to-mp4): upload each `.MOV`, download `.mp4`, put it in the `videos` folder with the **same base name** (e.g. `INTRO.mov` → `INTRO.mp4`, `LIBBY.MOV` → `LIBBY.mp4`).

## After converting

- **Intro:** Add `INTRO.mp4` to the `videos` folder. The home page will use it automatically.
- **Other videos:** Add e.g. `LIBBY.mp4`, `GAL.mp4`, etc. The Videos page will use the MP4 when present (we’ll add that next if not already).

Then reload the site; playback should work in Chrome, Firefox, and Safari.
