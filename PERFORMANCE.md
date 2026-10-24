# Portfolio performance audit — 2026-10-23

## Verified findings

- Seven large project covers were 6,000–9,000 pixels wide, with individual files up to 45.19 MB. Eight card cover files together totaled 142,481,689 bytes. These were much larger than their approximately 510px desktop card containers.
- The Alps SVG contained a 3,563 × 3,281 embedded PNG and totaled 1,056,074 bytes for a small icon.
- Homepage cards were built before project/skill routing replaced the main content, and before a category query could replace the grid. This was redundant DOM creation and allowed unnecessary image discovery; actual browser request counts were not available.
- Scroll frames repeatedly queried all covers and interleaved layout reads with style writes. Those measurements are now cached and refreshed on resize, main-content resize, font readiness, page restoration, and category changes.
- No remote image/font/script dependencies were found in the site loading paths. External Community/Behance/site links are navigation destinations, not image requests. The Bil3rabi source path used lowercase casing although the source filename is `Bil3rabi.png`; references now respect the exact source casing and the generated lowercase WebP filenames.
- There was one wheel controller, not duplicate smoothing libraries. Its easing, cancellation, native mobile/trackpad bypass, and reduced-motion behavior were retained.

## Changes

- Originals remain untouched. `assets/optimized/` contains lossless WebP copies resized to 640, 1200 and 2000 pixels wide, plus 256/512px portrait variants. The lossless output was checked pixel-for-pixel against each resized RGBA image, including alpha.
- `imageAssets` in `app.js` maps existing source fields to generated paths, dimensions and responsive candidates. Card cover and detail image fields remain independent. Small existing `dynamic-brand.png` and `xeleration.png` files remain unchanged.
- The Alps logo remains an SVG. Its optimized copy preserves its wrapper, geometry and colors while downsizing the embedded raster; original SVG retained.
- Homepage markup is held in an inert HTML template until the homepage route is selected. Detail/skill routes do not instantiate the hero, toolbox, dock or homepage cards. Only the selected category is rendered; selecting it again does not rerender it.
- Below-fold covers, next-project previews, toolbox images and card logos are lazy-loaded. The visible homepage portrait or current detail's main cover is eager/high-priority; no image preloads were added. Intrinsic cover dimensions and existing CSS containers prevent layout jumps.
- Image error handling is delegated once, including cards created after filtering. Existing animations, container styling, navigation and skill content were preserved.

## File-size results (bytes)

| Source | Original dimensions | Original bytes | Optimized bytes |
| --- | --- | ---: | --- |
| assets/Bil3rabi.png | 9000 × 6750 | 20,590,859 | 640px: 139,630, 1200px: 414,866, 2000px: 1,054,004 |
| assets/rukoan.png | 9000 × 6750 | 45,192,253 | 640px: 217,486, 1200px: 789,352, 2000px: 2,128,646 |
| assets/technomium.png | 6000 × 4500 | 26,647,422 | 640px: 214,492, 1200px: 760,668, 2000px: 2,119,706 |
| assets/alps_driving_school.png | 6000 × 4500 | 25,850,007 | 640px: 213,584, 1200px: 747,804, 2000px: 2,075,718 |
| assets/dynamicbrand.png | 6000 × 4500 | 14,572,440 | 640px: 117,110, 1200px: 396,508, 2000px: 1,103,078 |
| assets/shidmanholding.png | 6000 × 4500 | 8,057,872 | 640px: 82,420, 1200px: 261,682, 2000px: 663,926 |
| assets/bil3rabi_recruitment.png | 6000 × 4500 | 1,540,049 | 640px: 48,234, 1200px: 117,812, 2000px: 240,724 |
| assets/portrait.png | 720 × 720 | 417,649 | 256px: 33,430, 512px: 127,086 |

The eight card-cover sources total **142,481,689 bytes** before, **3,519,479 bytes** using the 1200px candidates (97.53% less), or **1,063,743 bytes** using the 640px candidates. These totals include unchanged Xeleration; browsers choose candidates according to viewport and device pixel ratio, and lazy loading means the full set is not necessarily transferred initially.

Alps SVG: **1,056,074 → 42,971 bytes**. Portrait: **417,649 → 127,086 bytes** at 512px, or 33,430 at 256px.

## Validation and limits

- Verified original-file hashes, all generated image decodes/dimensions, exact path casing and complete HTTP transfers of original and optimized files under the same server conditions.
- Live Server on localhost:5500 served the portfolio. Verified 31 original/optimized asset transfers against disk bytes. No Live Server configuration changes were needed. Its overhead was not isolated, so it is not established as a cause of sluggishness.
- Automated desktop/mobile and reduced-motion simulations initialized all eight project routes, the missing-project route, homepage categories and all three skill routes without script exceptions. They confirmed no homepage rendering on detail routes, only one selected-category render, correct image priority, unchanged gallery separation, one wheel/error listener and no layout reads during scroll updates.
- Existing wheel-settling, interruption, trackpad, zoom, mobile/reduced-motion, skill rendering, original-text copy and clipboard-denial checks passed.
- Inspected side-by-side source/optimized Bil3rabi, Rukn and Technomium previews at card size; no obvious visual change. Browser Network/Performance panels and live desktop/mobile rendering were unavailable. Therefore no claims are made about measured page-load time, LCP, frame rate, actual request counts or browser-console/visual regression results.

## Updating images later

Keep the original files as sources. When changing an image, regenerate its WebP variants and update `imageAssets` in `app.js` if filenames/dimensions change. `assets/optimized/manifest.json` records current sizes and variant paths. The portrait candidates are referenced in `index.html`.
