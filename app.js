// Verified from Alaa Jarwan's Community profile and each plugin's Details/About panel.
// Only resources explicitly labeled Plugin are included; no templates, skills or metrics.

// Figma plugin data
const plugins = [
  {
    name: 'Image to Text Converter',
    url: 'https://www.figma.com/community/plugin/1456308824226758058/image-to-text-converter',
    description: 'This Figma plugin revolutionizes your workflow by combining advanced OCR (Optical Character Recognition) technology with seamless design integration.'
  },
  {
    name: 'Psi Figma Plugin',
    url: 'https://www.figma.com/community/plugin/1455218721723156677/psi-figma-plugin',
    description: 'Instantly access Property Shop Investment LLC’s logos, colors, fonts, and more to streamline your design workflow.'
  },
  {
    name: 'Qr Code Scanner',
    url: 'https://www.figma.com/community/plugin/1449461661577889491/qr-code-scanner',
    description: 'Effortlessly scan and decode QR codes directly within Figma.'
  },
  {
    name: 'Text to file',
    url: 'https://www.figma.com/community/plugin/1447610364905605727/text-to-file',
    description: 'The Text to File Plugin allows you to easily convert your text into various file formats.'
  }
];

// Plugin card rendering
function pluginCard(p) {
  return `<a class="plugin-card reveal" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="${p.name} on Figma Community"><p class="eyebrow">Plugin · Created by Alaa Jarwan</p><h3>${p.name}</h3><p class="plugin-description">${p.description}</p><span class="plugin-cta">View plugin on Figma ↗</span></a>`;
}

// Project data
// image powers all card covers; detailImage preserves the separate detail-page artwork.
const projects = [
  {
    image: 'assets/Bil3rabi.png',
    detailImage: 'assets/Bil3rabi.png',
    slug: 'bil3rabi',
    logo: 'assets/selected_work/bil3rabi.svg',
    name: 'Bil3rabi',
    symbol: 'B',
    color: '#000',
    url: 'https://www.bil3rabi.com/',
    type: 'Web platform',
    role: 'UI/UX design & development',
    intro: 'An Arabic platform for design templates and UX resources.',
    heading: 'A home for Arabic design resources',
    body: 'Bil3rabi brings design templates and UX resources together for an Arabic-speaking audience. My work covered the platform’s user interface and user experience, as well as its implementation.',
    subheading: 'From the interface to the content system',
    detail: 'I designed the admin dashboard for managing templates and content, integrated Firebase to display and update templates and articles, and developed the website using HTML, CSS, JavaScript and Bootstrap.',
    tools: 'Figma · HTML · CSS · JavaScript · Bootstrap · Firebase'
  },
  {
    image: 'assets/rukoan.png',
    detailImage: 'assets/rukoan.png',
    slug: 'rukn',
    logo: 'assets/selected_work/Rukoan.svg',
    name: 'Rukn',
    symbol: 'R',
    color: '#000',
    url: 'https://rukoan.com/',
    type: 'E-commerce platform',
    intro: 'A platform that helps businesses create and manage their online stores.',
    heading: 'A digital home for commerce',
    body: 'Rukn brings online store creation and business tools into one platform. This project is part of my selected live work.',
    subheading: 'Explore the live experience',
    detail: 'Visit the live website to explore the experience. A fuller account of my role, design process and deliverables will be added to this case study.'
  },
  {
    image: 'assets/technomium.png',
    detailImage:'assets/technomium.png',
    slug: 'technomium',
    logo: 'assets/selected_work/technomium.svg',
    name: 'Technomium',
    symbol: 'T',
    color: '#000',
    url: 'https://www.technomium.com/',
    type: 'Company website',
    intro: 'A digital presence for a technology and software services company.',
    heading: 'Making technology services accessible',
    body: 'Technomium presents web development, mobile applications and custom software services. This website is included in my selected live projects.',
    subheading: 'Explore the live experience',
    detail: 'The live website shows the current experience. Project responsibilities and process documentation will be added when the case study is complete.'
  },
  {
    image: 'assets/alps_driving_school.png',
    detailImage: 'assets/alps_driving_school.png',
    slug: 'alps-driving-school',
    logo: 'assets/optimized/alps_driving_school.svg',
    name: 'Alps Driving School',
    symbol: 'A',
    color: '#000',
    url: 'https://alpsdrivingschool.co.uk/',
    type: 'Service website',
    intro: 'A website connecting learners with driving education and booking services.',
    heading: 'A route into driving education',
    body: 'Alps Driving School presents lessons, learning resources and booking options for drivers. It is one of the live websites in my portfolio.',
    subheading: 'Explore the live experience',
    detail: 'Visit the website for the current experience. A detailed account of my contribution and the design process is being prepared.'
  },
  {
    image: 'assets/dynamicbrand.png',
    detailImage: 'assets/dynamic-brand.png',
    slug: 'dynamic-brand',
    logo: 'assets/selected_work/dynamicbrand.svg',
    name: 'Dynamic Brand',
    symbol: 'D',
    color: '#000',
    url: 'https://dynamicbrand.vercel.app/',
    type: 'Brand resources',
    intro: 'A resource hub bringing brand foundations and practical design tools together.',
    heading: 'Brand resources, in one place',
    body: 'Dynamic Brand brings brand resources and design utilities into a shared web experience. It is included in my selected live work.',
    subheading: 'Explore the live experience',
    detail: 'Visit the site to explore the resources and tools. A detailed case study will document my role and the work behind the experience.'
  },
  {
    image: 'assets/xeleration.png',
    detailImage: 'assets/xeleration.png',
    slug: 'xeleration',
    logo: 'assets/selected_work/xeleration.svg',
    name: 'Xeleration',
    symbol: 'X',
    color: '#000',
    url: 'https://xeleration-demo.framer.website/',
    type: 'Website demo',
    intro: 'A live website demo built with Framer, included in my selected project collection.',
    heading: 'Explore the website demo',
    body: 'Xeleration is a live Framer demo from my portfolio. You can explore the current version through the link below.',
    subheading: 'More about this project',
    detail: 'Project scope, responsibilities and process documentation will be added to this case study.'
  },
  {
    image: 'assets/shidmanholding.png',
    detailImage: 'assets/shidmanholding.png',
    slug: 'shidman-holding',
    name: 'Shidman Holding',
    symbol: 'S',
    color: '#555b53',
    url: 'https://shidmanholding.com/',
    type: 'Corporate website',
    intro: 'A corporate website from my collection of live projects.',
    heading: 'A corporate digital presence',
    body: 'Shidman Holding is included in my live project collection. The website link is provided below.',
    subheading: 'More about this project',
    detail: 'A fuller case study, including my role and the design process, will be added when the project documentation is available.'
  },
  {
    image: 'assets/bil3rabi_recruitment.png',
    detailImage: 'assets/bil3rabi_recruitment.png',
    slug: 'bil3rabi_recruitment',
    name: 'Bil3rabi Recruitment',
    symbol: 'BR',
    color: '#4a6b6c',
    type: 'UX/UI Design',
    url: 'https://www.behance.net/gallery/240439609/Bil3rabi-Recruitment-UxUi-Design',
    linkLabel: 'View on Behance',
    intro: 'Bil3rabi Recruitment / UX/UI Design.',
    heading: 'Project overview',
    body: 'Bil3rabi Recruitment is redefining the hiring experience in the MENA region, making recruitment smarter, faster, and more candidate-centric. By combining intuitive design with efficient workflows, the platform helps HR teams manage applicants seamlessly while empowering candidates to find their ideal roles.'
  }
];

// Decide the page before creating image-bearing homepage elements.
const requestedProject = new URLSearchParams(location.search).get('project');
const requestedSkill = new URLSearchParams(location.search).get('skill');
const isHome = !requestedProject && !requestedSkill;
if (isHome) {
  document.querySelector('#main').replaceChildren(document.querySelector('#home-content').content.cloneNode(true));
}

// Theme and motion preferences
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
document.documentElement.classList.add('js');
try {
  if (localStorage.getItem('alaa-theme') === 'dark') document.documentElement.dataset.theme = 'dark';
} catch {
}

const themeButton = document.querySelector('.theme-toggle');
function syncTheme() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton.setAttribute('aria-label', `Switch to ${dark?'light':'dark'} mode`);
  themeButton.innerHTML = dark ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>';
  document.querySelector('meta[name="theme-color"]').content = dark ? '#121110' : '#f4f2ee';
}

// Theme event listener
themeButton.addEventListener('click', () => {
  document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem('alaa-theme', document.documentElement.dataset.theme);
  } catch {
  }
  syncTheme();
});
syncTheme();

// Local clock and footer year
function updateClock() {
  document.querySelector('#clock').textContent = 'AMM ' + new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Amman',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date());
}

updateClock();
setInterval(updateClock, 30000);
document.querySelector('#year').textContent = new Date().getFullYear();

// Project URLs and card rendering
const projectURL = p => `?project=${p.slug}`;
// Original image fields stay independent; optimized variants share the same artwork.
const imageAssets = {
  "assets/bil3rabi.png": {
    "src": "assets/optimized/bil3rabi-1200.webp",
    "fallback": "assets/optimized/bil3rabi-fallback.png",
    "width": 1200,
    "height": 900,
    "srcset": "assets/optimized/bil3rabi-640.webp 640w, assets/optimized/bil3rabi-1200.webp 1200w, assets/optimized/bil3rabi-2000.webp 2000w"
  },
  "assets/rukoan.png": {
    "src": "assets/optimized/rukoan-1200.webp",
    "fallback": "assets/optimized/rukoan-fallback.png",
    "width": 1200,
    "height": 900,
    "srcset": "assets/optimized/rukoan-640.webp 640w, assets/optimized/rukoan-1200.webp 1200w, assets/optimized/rukoan-2000.webp 2000w"
  },
  "assets/technomium.png": {
    "src": "assets/optimized/technomium-1200.webp",
    "fallback": "assets/optimized/technomium-fallback.png",
    "width": 1200,
    "height": 900,
    "srcset": "assets/optimized/technomium-640.webp 640w, assets/optimized/technomium-1200.webp 1200w, assets/optimized/technomium-2000.webp 2000w"
  },
  "assets/alps_driving_school.png": {
    "src": "assets/optimized/alps_driving_school-1200.webp",
    "fallback": "assets/optimized/alps_driving_school-fallback.png",
    "width": 1200,
    "height": 900,
    "srcset": "assets/optimized/alps_driving_school-640.webp 640w, assets/optimized/alps_driving_school-1200.webp 1200w, assets/optimized/alps_driving_school-2000.webp 2000w"
  },
  "assets/dynamicbrand.png": {
    "src": "assets/optimized/dynamicbrand-1200.webp",
    "fallback": "assets/optimized/dynamicbrand-fallback.png",
    "width": 1200,
    "height": 900,
    "srcset": "assets/optimized/dynamicbrand-640.webp 640w, assets/optimized/dynamicbrand-1200.webp 1200w, assets/optimized/dynamicbrand-2000.webp 2000w"
  },
  "assets/shidmanholding.png": {
    "src": "assets/optimized/shidmanholding-1200.webp",
    "fallback": "assets/optimized/shidmanholding-fallback.png",
    "width": 1200,
    "height": 900,
    "srcset": "assets/optimized/shidmanholding-640.webp 640w, assets/optimized/shidmanholding-1200.webp 1200w, assets/optimized/shidmanholding-2000.webp 2000w"
  },
  "assets/bil3rabi_recruitment.png": {
    "src": "assets/optimized/bil3rabi_recruitment-1200.webp",
    "fallback": "assets/optimized/bil3rabi_recruitment-fallback.png",
    "width": 1200,
    "height": 900,
    "srcset": "assets/optimized/bil3rabi_recruitment-640.webp 640w, assets/optimized/bil3rabi_recruitment-1200.webp 1200w, assets/optimized/bil3rabi_recruitment-2000.webp 2000w"
  },
  "assets/dynamic-brand.png": {
    "src": "assets/dynamic-brand.png",
    "width": 1844,
    "height": 750
  },
  "assets/xeleration.png": {
    "src": "assets/xeleration.png",
    "width": 1280,
    "height": 630
  }
};

function artwork(p, image = p.image, placement = 'card') {
  if (!image) {
    return `<div class="placeholder-art"><strong>${p.name}</strong><small>Temporary preview · image pending</small></div>`;
  }
  const asset = imageAssets[image.toLowerCase()];
  const src = asset ? asset.src : image;
  const sizes = placement === 'main'
    ? '(max-width: 809px) calc(100vw - 40px), (max-width: 1199px) calc(100vw - 64px), 1040px'
    : placement === 'preview'
      ? '(max-width: 809px) 110px, 300px'
      : '(max-width: 809px) calc(100vw - 40px), (max-width: 1199px) calc((100vw - 84px) / 2), 510px';
  const responsive = asset && asset.srcset ? ` srcset="${asset.srcset}" sizes="${sizes}"` : '';
  const dimensions = asset ? ` width="${asset.width}" height="${asset.height}"` : '';
  const priority = placement === 'main' ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
  return `<img class="cover-art" src="${src}" data-fallback-src="${asset ? (asset.fallback || asset.src) : image}"${responsive}${dimensions} alt="${p.name} website preview" ${priority} decoding="async">`;
}

// Selected work logos retain their original SVG colors and transparent canvas.
function projectLogo(p, loading = 'lazy') {
  return p.logo ? `<img class="project-logo" src="${p.logo}" alt="" width="32" height="32" loading="${loading}" decoding="async">` : p.symbol;
}

function card(p) {
  return `<a class="project-card reveal" href="${projectURL(p)}" aria-label="View ${p.name} project" style="--tile:${p.color}"><div class="project-cover"><div class="cover-inner">${artwork(p)}</div><span class="project-token" aria-hidden="true">${projectLogo(p)}</span><span class="view-case" aria-hidden="true">View case ↗</span></div><h3>${p.name}</h3><p class="eyebrow">${p.type}</p></a>`;
}

// Homepage rendering
if (isHome) {
  document.querySelector('#dock').innerHTML = projects.slice(0, 6).map(p => `<a class="dock-item" href="${projectURL(p)}" style="--tile:${p.color}" data-title="${p.name}" aria-label="${p.name} project">${projectLogo(p,'eager')}</a>`).join('') + '<a class="dock-item dock-mail" href="mailto:alaajarwan38@gmail.com" aria-label="Email me" data-title="Email me"><svg class="email-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z" fill="currentColor"/><path d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z" fill="currentColor"/></svg></a>';
}

// Project and skill detail routing (skill content lives in skills-data.js and content/skills/)

if (requestedProject) {
  const p = projects.find(p => p.slug === requestedProject);
  if (p) {
    const next = projects[(projects.indexOf(p) + 1) % projects.length];
    document.title = p.name + ' — Alaa Jarwan';
    document.querySelector('meta[name="description"]').content = p.intro;
    document.querySelector('#main').innerHTML = `<article class="detail"><a href="index.html#work" class="small-pill all-work">←&nbsp; All work</a><div class="detail-heading"><div><div class="detail-icon enter" style="--tile:${p.color}">${projectLogo(p, 'eager')}</div><p class="eyebrow">UI/UX Projects &nbsp;/&nbsp; ${p.type}</p><h1 class="reveal words">${p.name}</h1></div><p class="detail-description reveal">${p.intro}</p></div><div class="detail-cover reveal" style="--tile:${p.color}">${artwork(p, p.detailImage, 'main')}</div><div class="detail-body"><aside class="project-meta reveal"><p class="eyebrow">(Project details)</p><dl><div><dt>Project</dt><dd>${p.name}</dd></div><div><dt>Type</dt><dd>${p.type}</dd></div>${p.role?`<div><dt>Role</dt><dd>${p.role}</dd></div>`:''}${p.tools?`<div><dt>Tools</dt><dd>${p.tools}</dd></div>`:''}</dl><a class="pill" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.linkLabel || 'Visit live website'} ↗</a></aside><div class="detail-copy reveal"><h2>${p.heading}</h2><p>${p.body}</p>${p.subheading ? `<h3>${p.subheading}</h3>` : ''}${p.detail ? `<p>${p.detail}</p>` : ''}</div></div><a class="next-project reveal" href="${projectURL(next)}"><div><p class="eyebrow">Next project</p><h2>${next.name}</h2></div><div class="next-preview" style="--tile:${next.color}">${artwork(next, next.image, 'preview')}</div><span class="arrow">→</span></a></article>`;
  } else {
    document.querySelector('#main').innerHTML = '<section class="section" style="padding-top:160px"><h1>Project not found.</h1><p style="margin:28px 0">Explore the current collection of selected work.</p><a class="pill" href="index.html#work">Back to selected work ↗</a></section>';
  }
}

if (requestedSkill && !requestedProject) renderSkillDetail(requestedSkill);

// Animations: scroll reveals and staggered words
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  }
}), {
  threshold: .1
});
function initReveals() {
  document.querySelectorAll('.words').forEach(el => {
    let i = 0;
    function wrap(node) {
      [... node.childNodes].forEach(child => {
        if (child.nodeType === 3) {
          const fragment = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(word => {
            if (!word.trim()) fragment.append(document.createTextNode(word));
            else {
              const span = document.createElement('span');
              span.className = 'word';
              span.style.setProperty('--i', i++);
              span.textContent = word;
              fragment.append(span);
            }
          });
          child.replaceWith(fragment);
        } else if (child.nodeType === 1) wrap(child);
      });
    }
    wrap(el);
  });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

initReveals();

// Navigation: project category filters
let activeCategory = '';

function filterProjects(category) {
  if (!['uiux', 'plugins', 'skills'].includes(category)) category = 'uiux';
  if (activeCategory === category) return;
  document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === category)));
  const grid = document.querySelector('#projects'), empty = document.querySelector('#empty-state'), intro = document.querySelector('#plugin-intro');
  if (!grid) return;
  activeCategory = category;
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.unobserve(el));
  intro.hidden = category !== 'plugins';
  document.querySelector('#plugin-community').hidden = category !== 'plugins';
  grid.hidden = false;
  empty.hidden = true;
  const categoryURL = new URL(location.href);
  categoryURL.searchParams.set('category', category);
  history.replaceState(null, '', categoryURL);
  if (category === 'plugins') grid.innerHTML = plugins.map(pluginCard).join('');
  else if (category === 'uiux') grid.innerHTML = projects.map(card).join('');
  else renderSkillCards(grid);
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  scheduleMeasurements();
}

// Category event listeners
document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => filterProjects(b.dataset.filter)));
document.querySelectorAll('[data-category]').forEach(a => a.addEventListener('click', () => filterProjects(a.dataset.category)));
// Cache layout outside scrolling; each frame performs arithmetic before style writes.
let scheduled = false;
let measurementFrame = 0;
let coverMetrics = [];
let sectionMetrics = [];
let activeSection = null;
const navLinks = [...document.querySelectorAll('.nav-link')];

function layoutTop(element) {
  let top = 0;
  for (let node = element; node; node = node.offsetParent) {
    top += node.offsetTop;
    if (node.offsetParent) top += node.offsetParent.clientTop;
  }
  return top;
}

function scheduleMeasurements() {
  if (measurementFrame) return;
  measurementFrame = requestAnimationFrame(() => {
    measurementFrame = 0;
    coverMetrics = [...document.querySelectorAll('.cover-inner')].map(element => ({
      element,
      top: layoutTop(element.parentElement),
      height: element.parentElement.offsetHeight,
      value: null
    }));
    sectionMetrics = isHome ? ['about', 'work'].map(id => {
      const element = document.getElementById(id);
      return { id, top: layoutTop(element), height: element.offsetHeight };
    }) : [];
    onScroll();
  });
}

function onScroll() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    const viewport = innerHeight;
    const position = scrollY;
    for (const metric of coverMetrics) {
      const top = metric.top - position;
      if (top + metric.height <= 0 || top >= viewport) continue;
      const value = reduced.matches ? '0px' : Math.max(-21, Math.min(21, (viewport / 2 - top - metric.height / 2) * .045)) + 'px';
      if (metric.value !== value) {
        metric.element.style.setProperty('--parallax', value);
        metric.value = value;
      }
    }
    if (isHome) {
      let active = '';
      for (const metric of sectionMetrics) {
        const top = metric.top - position;
        if (top < viewport * .45 && top + metric.height > viewport * .25) active = metric.id;
      }
      if (active !== activeSection) {
        navLinks.forEach(link => link.classList.toggle('active', link.hash === '#' + active));
        activeSection = active;
      }
    }
    scheduled = false;
  });
}

// Restore only the requested category; do not build hidden cards first.
if (isHome) filterProjects(new URLSearchParams(location.search).get('category') || 'uiux');
addEventListener('resize', scheduleMeasurements, { passive: true });
addEventListener('pageshow', scheduleMeasurements);
reduced.addEventListener('change', scheduleMeasurements);
if (document.fonts) document.fonts.ready.then(scheduleMeasurements);
if (typeof ResizeObserver !== 'undefined') {
  const layoutObserver = new ResizeObserver(scheduleMeasurements);
  layoutObserver.observe(document.querySelector('#main'));
}
scheduleMeasurements();

// Scroll and back-to-top event listeners
addEventListener('scroll', onScroll, {
  passive: true
});
onScroll();
document.querySelector('.back-top').addEventListener('click', e => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: reduced.matches ? 'instant' : 'smooth'
  });
});
// Keep a failed image from becoming a broken-image icon in the portfolio.

// Image loading fallback
// Capture errors once, including cards created after changing categories.
document.addEventListener('error', event => {
  const img = event.target;
  if (!(img instanceof HTMLImageElement) || !img.classList.contains('cover-art')) return;
  // Retry a lightweight fallback; archival originals are never requested.
  const original = img.dataset.fallbackSrc;
  if (original && img.getAttribute('src') !== original) {
    img.removeAttribute('srcset');
    img.removeAttribute('sizes');
    img.src = original;
    return;
  }
  console.error(`Project image failed to load: ${original || img.getAttribute('src')}`);
  const fallback = document.createElement('div');
  fallback.className = 'placeholder-art';
  const title = document.createElement('strong');
  title.textContent = img.alt.replace(' website preview', '');
  const label = document.createElement('small');
  label.textContent = `Image unavailable: ${original || img.getAttribute('src')}`;
  fallback.append(title, label);
  img.replaceWith(fallback);
  scheduleMeasurements();
}, true);
// One desktop-only wheel controller; native scrolling still drives reveals and sticky UI.

// Desktop wheel smoothing
function initializeWheelSmoothing() {
  const desktopWheel = matchMedia('(min-width: 810px) and (hover: hover) and (pointer: fine)');
  let frame = 0, target = scrollY, position = scrollY, lastTime = 0;
  const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - innerHeight);
  const clamp = y => Math.max(0, Math.min(maxScroll(), y));
  function cancel() {
    cancelAnimationFrame(frame);
    frame = 0;
    target = scrollY;
    position = scrollY;
    lastTime = 0;
  }
  function tick(time) {
    if (reduced.matches || !desktopWheel.matches) {
      cancel();
      return;
    }
    target = clamp(target);
    const elapsed = Math.min(40, Math.max(1, time - lastTime));
    lastTime = time;
    const distance = target - position;
    if (Math.abs(distance) < .75) {
      scrollTo({
        top: target,
        behavior: 'instant'
      });
      frame = 0;
      return;
    }
    position += distance * (1 - Math.exp(-elapsed / 65));
    scrollTo({
      top: position,
      behavior: 'instant'
    });
    frame = requestAnimationFrame(tick);
  }
  function nestedScroller(element) {
    for (let node = element instanceof Element ? element : null; node && node !== document.body && node !== document.documentElement; node = node.parentElement) {
      if (node.matches('input,textarea,select,[contenteditable="true"],[role="dialog"]')) return true;
      const css = getComputedStyle(node);
      if (/auto|scroll|overlay/.test(css.overflowY) && node.scrollHeight > node.clientHeight + 1) return true;
    }
    return false;
  }
  function wheel(event) {
    if (reduced.matches || !desktopWheel.matches || event.defaultPrevented || !event.cancelable || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || nestedScroller(event.target)) {
      cancel();
      return;
    }
    // Small pixel deltas already represent smooth trackpad movement.
    if (!event.deltaY || (event.deltaMode === 0 && Math.abs(event.deltaY) < 40)) {
      cancel();
      return;
    }
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
    if (!frame || Math.sign(delta) !== Math.sign(target - scrollY)) target = scrollY;
    const next = clamp(target + delta);
    if (next === scrollY) {
      cancel();
      return;
    }
    event.preventDefault();
    target = next;
    if (!frame) {
      position = scrollY;
      lastTime = performance.now();
      frame = requestAnimationFrame(tick);
    }
  }
  addEventListener('wheel', wheel, {
    passive: false
  });
  // Cancel pending wheel motion before native navigation or direct manipulation.
  addEventListener('keydown', cancel, {
    passive: true
  });
  addEventListener('pointerdown', cancel, {
    passive: true
  });
  addEventListener('touchstart', cancel, {
    passive: true
  });
  addEventListener('resize', cancel, {
    passive: true
  });
  addEventListener('pagehide', cancel, {
    passive: true
  });
  document.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('a')) cancel();
  }, true);
  document.addEventListener('visibilitychange', cancel);
  reduced.addEventListener('change', cancel);
  desktopWheel.addEventListener('change', cancel);
}

initializeWheelSmoothing();

// Toolbox names are available by hover, keyboard focus, or tapping a tool.
function initializeToolbox() {
  const buttons = [...document.querySelectorAll('.tool-button')];
  if (!buttons.length) return;

  const tooltip = document.createElement('div');
  tooltip.id = 'toolbox-tooltip';
  tooltip.className = 'toolbox-tooltip';
  tooltip.setAttribute('role', 'tooltip');
  tooltip.setAttribute('aria-hidden', 'true');
  document.body.append(tooltip);
  let active = null;
  let pointerType = '';

  function hide() {
    if (active) {
      active.parentElement.removeAttribute('data-tool-open');
      active.removeAttribute('aria-describedby');
    }
    active = null;
    tooltip.classList.remove('is-visible');
    tooltip.setAttribute('aria-hidden', 'true');
  }

  function show(button) {
    if (active && active !== button) hide();
    active = button;
    tooltip.textContent = button.getAttribute('aria-label');
    const box = button.getBoundingClientRect();
    const label = tooltip.getBoundingClientRect();
    // Center above the tool, clamping at the viewport edges without moving the grid.
    const half = label.width / 2;
    const center = Math.max(half + 8, Math.min(innerWidth - half - 8, box.left + box.width / 2));
    tooltip.style.left = center + 'px';
    tooltip.style.top = (box.top - label.height - 10 >= 8 ? box.top - label.height - 10 : box.bottom + 10) + 'px';
    button.parentElement.setAttribute('data-tool-open', '');
    button.setAttribute('aria-describedby', tooltip.id);
    tooltip.setAttribute('aria-hidden', 'false');
    tooltip.classList.add('is-visible');
  }

  for (const button of buttons) {
    button.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') show(button);
    });
    button.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse' && active === button && !button.matches(':focus-visible')) hide();
    });
    button.addEventListener('pointerdown', event => { pointerType = event.pointerType; });
    button.addEventListener('focus', () => {
      if (button.matches(':focus-visible')) show(button);
    });
    button.addEventListener('blur', () => { if (active === button) hide(); });
    button.addEventListener('keydown', event => {
      pointerType = 'keyboard';
      if (event.key !== 'Escape') show(button);
    });
    button.addEventListener('click', event => {
      if (event.detail !== 0 && (pointerType === 'touch' || pointerType === 'pen') && active === button) hide();
      else show(button);
    });
  }
  document.addEventListener('pointerdown', event => {
    if (active && !active.contains(event.target)) hide();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') hide(); });
  addEventListener('resize', hide, { passive: true });
  addEventListener('scroll', hide, { passive: true });
}

initializeToolbox();
