# Portfolio technical fixes and browser QA

Tested 2026-10-23 against http://127.0.0.1:5500 using existing Playwright and installed Microsoft Edge 155.0.4283.62, headless. No project dependencies added. Mobile tests are browser viewport/touch emulation, not physical-device tests.

## Changes

- Light skill links: #995037 on #eeebe6, calculated contrast 4.97:1 (previously 3.66:1). Underlines and dark-theme color preserved.
- Copy and Download unavailable during loading or failure. Retry fetches the file again without duplicate copy listeners. Error text is visitor-facing. Existing Markdown and case-study content untouched.
- Seven proportional, losslessly encoded PNG fallbacks in assets/optimized/*-fallback.png. Pixel comparison confirmed exact RGBA equality to the downsampled source, including transparency. Original files preserved. Responsive WebP remains the primary source; error handlers no longer request archival covers.
- Detail icons reuse the Selected work SVG helper and proportional sizing. Shidman Holding and Bil3rabi Recruitment have no matching supplied SVG; initials remain.

## Fallback file sizes

| Project | Archival PNG bytes | Fallback PNG bytes |
|---|---:|---:|
| Bil3rabi | 20,590,859 | 436,426 |
| Rukn | 45,192,253 | 776,431 |
| Technomium | 26,647,422 | 730,832 |
| Alps Driving School | 25,850,007 | 837,457 |
| Dynamic Brand | 14,572,440 | 513,934 |
| Shidman Holding | 8,057,872 | 300,665 |
| Bil3rabi Recruitment | 1,540,049 | 159,107 |

Fallbacks fit within 960x960 without cropping or distortion. Small existing Xeleration and Dynamic Brand detail PNGs remain unchanged. Edit the imageAssets registry in app.js when replacing cover assets; its fallback field must point to a lightweight file, not the archival source.

## Actual browser checks

- All eight project detail routes at 375, 390, 768, 1024, 1440px: no document horizontal overflow; main images decoded successfully. Six available detail logos render as SVG.
- All three skill routes at all five widths: no document horizontal overflow; content loads and Copy enables.
- Homepage at all five widths: no detected horizontal overflow or failed loaded images.
- All nine toolbox logos at five widths (45 checks): visible tooltips remain within horizontal viewport bounds; computed scale reaches 1.2. Keyboard focus, Escape, touch-emulated toggle, and reduced-motion behavior passed.
- Real skill-card click, project-card click, reload, skill back/forward, and return links passed. Skills return to category=skills#work; section top measured approximately 90px at desktop. Invalid project/skill URLs show their not-found states.
- All three actual clipboard reads preserve complete original text including YAML, after accounting for Windows LF-to-CRLF normalization. Actual downloaded files match original bytes exactly.
- Delayed request: Copy disabled and Download has no href. Forced 503: visitor error and Retry displayed, actions unavailable. Removing interception and clicking Retry restores content and actions.
- Forced WebP failures: all eight homepage cards load fallback/small images, and tested detail covers recover. Zero archival cover requests in monitored normal and forced-failure runs.
- No JavaScript exceptions in monitored normal runs. Final skill-loading/copy/theme checks had no console errors or failed requests. Deliberately aborted WebP and forced 503 tests produce expected network failures.
- JavaScript syntax checks passed. Desktop and mobile skill screenshots and a mobile project screenshot were visually inspected. No pre-change screenshot baseline was captured; this is not a pixel-diff regression claim.

## Local performance observations

Cold-cache Edge, localhost, DPR 1, no CPU or bandwidth throttling; single samples, not production benchmarks or before/after speed comparisons.

| Width | Page | Load event | Observed LCP |
|---|---|---:|---:|
| 390 | Home | 128 ms | 156 ms |
| 1440 | Home | 140 ms | 168 ms |
| 390 | Bil3rabi detail | 52 ms | 44 ms |
| 1440 | Bil3rabi detail | 65 ms | 56 ms |
| 390 | RTL skill | 50 ms | 108 ms |
| 1440 | RTL skill | 53 ms | 56 ms |

Transferred response bodies: homepage cards selected 640px variants at DPR 1 (48-217 KB each); mobile Bil3rabi detail selected 640px/139,630 bytes; desktop detail selected 1200px/414,866 bytes. The next-project preview used 640px/217,486 bytes. Skills requested no images. Portrait selected 256px/33,430 bytes; hero background was 20,062 bytes. Live Server injects reload code into SVG/HTML, so SVG response sizes differ from source sizes.

Follow-up: a cold-cache multi-route sample recorded layout-shift sums of approximately 0.55-0.73 on detail/skill pages; fresh direct-page reruns, including cache disabled, recorded no shifts. This is unresolved intermittent behavior, not evidence that CLS is consistently zero. Reproduce under deployed/network-throttled conditions and trace layout-shift sources before changing layout. No historical real-browser baseline establishes whether this predates the changes.

## Content still requiring Alaa's input

- Rukn, Technomium, Alps Driving School, Dynamic Brand, Xeleration, Shidman Holding: verified role, scope, process, and deliverables to replace unfinished case-study copy.
- Matching SVG logos for Shidman Holding and Bil3rabi Recruitment, if desired.

Not tested: physical mobile devices, Safari/Firefox, deployed-host performance, or external account/application workflows.
