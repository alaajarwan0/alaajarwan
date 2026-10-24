# Alaa Jarwan portfolio

A local, dependency-free HTML/CSS/JavaScript portfolio. No Framer runtime or build step.

## Preview

Open `index.html` directly for a build-free preview, or run `python -m http.server 4173 --bind 127.0.0.1` from this folder, then open http://127.0.0.1:4173.
The Windows launcher `Start-Portfolio.ps1` uses the bundled Python installation when available.

## Content

- Home layout and reusable visual styles: `index.html`, `styles.css`.
- Project content, category controls, themes and motion: `app.js`.
- Project URLs use `?project=bil3rabi` and work on any static host without rewrite rules.
- Contact: alaajarwan38@gmail.com. Existing Behance URL and CV retained.
- Images marked “Temporary preview · image pending” are intentional placeholders.
- Plugins contain verified Community entries. AI Skills use the three original supplied Markdown files.
- Bil3rabi responsibilities are documented in the supplied CV. Other project details do not assert an unverified individual role, date or outcome.
- Employment dates are reproduced from the supplied CV; confirm current employment before publication.

## Reference and limits

Reference: https://leomarlowe.framer.website/
Inspected desktop, 834×1112 tablet and 390×844 mobile layouts; project detail layout; fixed navigation; theme toggle; scroll-based reveals, cover parallax and card hover state.

Fonts: Fraunces, Geist, Geist Mono and Inter, self-hosted from the font URLs loaded by the reference. These families are distributed under the SIL Open Font License. Font source links are recorded in `ASSETS.md`.

The reference portrait/avatar is replaced by Alaa's existing photograph. This is a static photo, not the reference's direction-changing avatar. Work category controls were added inside the existing work section to meet the requested three-way organization. Font sizes, colors, breakpoints, containers and cover timings follow observed reference values. Motion is a close recreation, not an assertion of exact proprietary implementation parity.

No borrowed biography, projects, testimonials, metrics, client results or social profiles are presented as Alaa's. No hosting or domain changes have been made.

## Editing Figma AI Skills

- Original files live in `content/skills/arabic-ux-writing.md`, `content/skills/design-handoff-review.md`, and `content/skills/rtl-ui-review.md`. Edit these plain Markdown files to update full instructions. Their original contents, including YAML and line endings, are retained for Copy skill.
- YAML frontmatter is excluded from the readable instructions. The supplied `name` and `description` fields are metadata; the display title comes from each file's H1. The short description uses the first sentence verbatim.
- `skills-data.js` holds card titles, short descriptions, stable slugs, relative Markdown paths, and optional verified Community URLs. Update its title/description if you change the corresponding Markdown metadata. No Community links are assumed.
- Routes: `index.html?skill=arabic-ux-writing`, `index.html?skill=design-handoff-review`, and `index.html?skill=rtl-ui-review`. The back link returns to `index.html?category=skills#work`.
- Add another skill by adding a Markdown file and a metadata entry with a unique stable slug. All entries share the template in `skills.js` and styles in `skills.css`.
- Preview with `Start-Portfolio.ps1` or a local HTTP server. Markdown uses deployment-safe relative paths and requires HTTP hosting rather than `file://`.
- The safe renderer supports headings, paragraphs, lists, tables, links, bold text, inline code, and code blocks. Raw HTML is text, never executable. Copy uses the complete untouched original, including frontmatter; clipboard denial offers manual copying. Clipboard API requires HTTPS or localhost.

## Optimized images and rendering

See `PERFORMANCE.md` for the measured file-size audit, validation limits, and update instructions. Original source images are retained; pages use responsive copies in `assets/optimized/`. The homepage template in `index.html` is instantiated only for homepage routes so inactive pages do not load its images.
