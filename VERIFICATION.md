# Verification notes

## Observed reference

- Cream #f4f2ee, text #1a1917, muted #6b6862, border panel #e9e6e0.
- Dark background #121110, text #eeece8, muted #a09c95, accent #e08a66.
- Fraunces 400 headings, Geist body, Geist Mono labels, Inter navigation.
- Desktop heading sizes 64/44/26px; tablet 54/38px; mobile 40/32px.
- Main max width 1120px; desktop horizontal padding 40px, tablet 32px, mobile 20px.
- Desktop work covers 380px high, mobile 260px; two columns to one at 810px.
- Fixed 50px pill navigation; desktop local time disappears on mobile, contact becomes icon only.
- Rounded introduction frame, word reveals, project image parallax, card hover circle, dark theme toggle, next-project navigation.
- Cover entry uses 1300ms cubic-bezier(.16,1,.3,1); image scale 1800ms; alternating cover delay around 140ms.

## Checked locally

- Browser rendering at desktop, tablet (834×1112), and mobile (390×844).
- Project category selection and honest empty states.
- Home, About, Work and project detail navigation.
- Light/dark switching and theme persistence across navigation.
- Mobile project detail layout and footer.
- All available preview images load; four projects intentionally use labeled placeholders.
- Mailto links point to alaajarwan38@gmail.com; no message was sent.
- JavaScript syntax check; local page HTTP 200.
- The final copy in Downloads was served locally and all seven project pages were opened through next-project navigation: correct headings, correct external destinations, no horizontal overflow at 320px, no browser console errors.
- CV file returned HTTP 200. All four displayed raster assets loaded successfully.
- Exact 390×844 reference/local comparison: main heading top 446.6px versus 452.2px, with matching 40px font size and 828px introduction frame height. Text differs as required.

## Explicit limitations

- No claim of pixel-identical reproduction: content lengths, project assets, category controls, two actual employment records, tool icons and social links differ deliberately to represent Alaa truthfully.
- Static existing portrait replaces reference's animated avatar. No synthetic avatar was generated.
- Motion and hover interactions are recreated from observed behavior and available style values; exact animation parity and every browser/device combination are not verified.
- Reduced-motion overrides are implemented in CSS and JavaScript; OS-level preference switching was not available through the browser controls.
- Three project previews are website-provided social/brand images, not full case-study screenshots.
- Figma plugin and AI skill names/links were not supplied and remain unpopulated.
- Shidman and Bil3rabi availability can vary; external project links are preserved as supplied, with no claim of current service uptime.
