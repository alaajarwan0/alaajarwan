// Shared skill cards, detail template, and a safe Markdown subset.
// All content is inserted as text; Markdown HTML is never executed.
function skillURL(skill) {
  return `index.html?skill=${encodeURIComponent(skill.slug)}`;
}

function skillElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function safeSkillLink(value) {
  try {
    const url = new URL(value);
    return ['https:', 'http:', 'mailto:'].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function skillInline(parent, text) {
  const pattern = /`([^`]+)`|\[([^\]]+)\]\(([^\s)]+)\)|\*\*([^*]+)\*\*|(https?:\/\/[^\s<>`]+)/g;
  let start = 0;
  for (const match of text.matchAll(pattern)) {
    parent.append(document.createTextNode(text.slice(start, match.index)));
    if (match[1] !== undefined) {
      parent.append(skillElement('code', '', match[1]));
    } else if (match[2] !== undefined && safeSkillLink(match[3])) {
      const link = skillElement('a', '', match[2]);
      link.href = safeSkillLink(match[3]);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      parent.append(link);
    } else if (match[5] !== undefined) {
      const url = match[5].replace(/[.,;!?:]+$/, '');
      const link = skillElement('a', '', url);
      link.href = safeSkillLink(url);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      parent.append(link, document.createTextNode(match[5].slice(url.length)));
    } else if (match[4] !== undefined) {
      parent.append(skillElement('strong', '', match[4]));
    } else {
      parent.append(document.createTextNode(match[0]));
    }
    start = match.index + match[0].length;
  }
  parent.append(document.createTextNode(text.slice(start)));
}

// Frontmatter is metadata only. Never change the original source used for copying.
// Supports the plain scalar name/description fields used by these supplied files.
function splitSkillDocument(source) {
  const match = /^(?:\uFEFF)?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(source);
  if (!match) return { metadata: {}, body: source };
  const metadata = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = /^(name|description):[ \t]*(.*)$/.exec(line);
    if (field) metadata[field[1]] = field[2];
  }
  return { metadata, body: source.slice(match[0].length) };
}

function renderSkillMarkdown(source) {
  const output = document.createDocumentFragment();
  const lines = source.replace(/\r\n?/g, '\n').split('\n');
  const listMatch = line => /^(\s*)([-+*]|\d+[.)])\s+(.*)$/.exec(line);
  const isBlock = line => /^\s*$/.test(line) || /^\s*(`{3,}|~{3,})/.test(line) || /^(#{1,6})\s+/.test(line) || listMatch(line);
  const tableCells = line => line.trim().replace(/^\|/, '').replace(/\|$/, '').split(/(?<!\\)\|/).map(cell => cell.trim().replace(/\\\|/g, '|'));
  const tableStart = at => lines[at]?.includes('|') && lines[at + 1]?.includes('|') && tableCells(lines[at + 1]).every(cell => /^:?-{3,}:?$/.test(cell));
  let index = 0;

  function readList(indent) {
    const first = listMatch(lines[index]);
    const ordered = /^\d/.test(first[2]);
    const list = skillElement(ordered ? 'ol' : 'ul');
    if (ordered) list.start = parseInt(first[2], 10);
    while (index < lines.length) {
      const match = listMatch(lines[index]);
      if (!match || match[1].length !== indent || /^\d/.test(match[2]) !== ordered) break;
      const item = skillElement('li');
      skillInline(item, match[3]);
      index++;
      while (index < lines.length) {
        const nested = listMatch(lines[index]);
        if (nested && nested[1].length > indent) {
          item.append(readList(nested[1].length));
        } else if (!nested && lines[index].trim() && lines[index].search(/\S/) > indent && !isBlock(lines[index])) {
          item.append(document.createTextNode('\n'));
          skillInline(item, lines[index++].trim());
        } else break;
      }
      list.append(item);
    }
    return list;
  }

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) { index++; continue; }
    const fence = /^\s*(`{3,}|~{3,})(.*)$/.exec(line);
    if (fence) {
      const code = [];
      index++;
      const end = new RegExp('^\\s*' + fence[1][0] + '{' + fence[1].length + ',}\\s*$');
      while (index < lines.length && !end.test(lines[index])) code.push(lines[index++]);
      if (index < lines.length) index++;
      const pre = skillElement('pre');
      pre.tabIndex = 0;
      pre.setAttribute('aria-label', 'Code block');
      pre.append(skillElement('code', '', code.join('\n')));
      output.append(pre);
      continue;
    }
    if (tableStart(index)) {
      const table = skillElement('table');
      const head = skillElement('thead');
      const row = skillElement('tr');
      for (const cell of tableCells(lines[index])) {
        const th = skillElement('th');
        th.setAttribute('scope', 'col');
        skillInline(th, cell);
        row.append(th);
      }
      head.append(row);
      table.append(head);
      index += 2;
      const body = skillElement('tbody');
      while (index < lines.length && lines[index].trim() && lines[index].includes('|')) {
        const row = skillElement('tr');
        for (const cell of tableCells(lines[index++])) {
          const td = skillElement('td');
          skillInline(td, cell);
          row.append(td);
        }
        body.append(row);
      }
      table.append(body);
      output.append(table);
      continue;
    }
    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      const element = skillElement('h' + Math.min(6, heading[1].length + 1));
      skillInline(element, heading[2]);
      output.append(element);
      index++;
      continue;
    }
    const list = listMatch(line);
    if (list) { output.append(readList(list[1].length)); continue; }
    if (/^( {4}|\t)/.test(line)) {
      const code = [];
      while (index < lines.length && /^( {4}|\t)/.test(lines[index])) code.push(lines[index++].replace(/^( {4}|\t)/, ''));
      const pre = skillElement('pre');
      pre.tabIndex = 0;
      pre.setAttribute('aria-label', 'Code block');
      pre.append(skillElement('code', '', code.join('\n')));
      output.append(pre);
      continue;
    }
    const paragraph = [lines[index++]];
    while (index < lines.length && !isBlock(lines[index]) && !tableStart(index)) paragraph.push(lines[index++]);
    const element = skillElement('p');
    skillInline(element, paragraph.join('\n'));
    output.append(element);
  }
  return output;
}

function renderSkillCards(grid) {
  grid.replaceChildren();
  for (const skill of skills) {
    const card = skillElement('a', 'plugin-card skill-card reveal');
    card.href = skillURL(skill);
    card.append(
      skillElement('p', 'eyebrow', skill.placeholder ? 'AI Skill · Temporary placeholder' : 'AI Skill · Created by Alaa Jarwan'),
      skillElement('h3', '', skill.title),
      skillElement('p', 'plugin-description', skill.description),
      skillElement('span', 'plugin-cta', 'Read skill ↗')
    );
    grid.append(card);
  }
}

async function copySkillText(text, button, status) {
  button.disabled = true;
  status.textContent = '';
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    button.textContent = 'Copied!';
    status.textContent = 'Skill copied to clipboard.';
    setTimeout(() => {
      button.textContent = 'Copy skill';
      status.textContent = '';
      button.disabled = false;
    }, 2000);
  } catch {
    button.disabled = false;
    status.textContent = 'Could not copy automatically. Select and copy the original Markdown below.';
    const fallback = document.querySelector('#skill-copy-fallback');
    fallback.hidden = false;
    fallback.querySelector('textarea').value = text;
    fallback.querySelector('textarea').focus();
    fallback.querySelector('textarea').select();
  }
}

function renderSkillDetail(slug) {
  const main = document.querySelector('#main');
  const article = skillElement('article', 'detail skill-detail');
  const back = skillElement('a', 'small-pill all-work', '← All Figma AI Skills');
  back.href = 'index.html?category=skills#work';
  article.append(back);
  const skill = skills.find(item => item.slug === slug);
  main.replaceChildren(article);
  if (!skill) {
    document.title = 'Skill not found — Alaa Jarwan';
    article.append(skillElement('h1', '', 'Skill not found.'));
    return;
  }
  document.title = skill.title + ' — Alaa Jarwan';
  document.querySelector('meta[name="description"]').content = skill.description;
  const layout = skillElement('div', 'skill-layout');
  const summary = skillElement('div', 'skill-summary');
  summary.append(
    skillElement('p', 'eyebrow', 'Figma AI Skill'),
    skillElement('h1', '', skill.title),
    skillElement('p', 'skill-description', skill.description),
    skillElement('p', 'skill-creator', 'Created by Alaa Jarwan')
  );
  if (skill.placeholder) summary.append(skillElement('p', 'skill-placeholder', 'Temporary content — details will be added.'));
  if (/^https:\/\/www\.figma\.com\/community\/skill\/\d+(?:\/|$)/.test(skill.communityUrl)) {
    const link = skillElement('a', 'pill', 'View on Figma ↗');
    link.href = skill.communityUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    summary.append(link);
  }
  const panel = skillElement('section', 'skill-panel');
  panel.setAttribute('aria-labelledby', 'skill-instructions-heading');
  const toolbar = skillElement('div', 'skill-toolbar');
  const heading = skillElement('h2', '', 'Instructions');
  heading.id = 'skill-instructions-heading';
  const copy = skillElement('button', 'pill', 'Copy skill');
  copy.type = 'button';
  copy.disabled = true;
  const download = skillElement('a', 'pill', 'Download skill');
  download.setAttribute('aria-disabled', 'true');
  download.setAttribute('role', 'link');
  download.tabIndex = 0;
  download.download = skill.slug + '.md';
  const actions = skillElement('div', 'skill-actions');
  const retry = skillElement('button', 'pill', 'Retry');
  retry.type = 'button';
  retry.hidden = true;
  actions.append(copy, download, retry);
  toolbar.append(heading, actions);
  const status = skillElement('p', 'skill-copy-status');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  const content = skillElement('div', 'skill-markdown', 'Loading instructions…');
  const fallback = skillElement('div', 'skill-copy-fallback');
  fallback.id = 'skill-copy-fallback';
  fallback.hidden = true;
  const label = skillElement('label', '', 'Original Markdown');
  label.htmlFor = 'skill-original-text';
  const textarea = skillElement('textarea');
  textarea.id = 'skill-original-text';
  textarea.readOnly = true;
  textarea.rows = 8;
  fallback.append(label, textarea);
  panel.append(toolbar, status, content, fallback);
  layout.append(summary, panel);
  article.append(layout);
  let originalText = '';
  let loading = false;
  copy.addEventListener('click', () => copySkillText(originalText, copy, status));
  retry.addEventListener('click', loadInstructions);

  async function loadInstructions() {
    if (loading) return;
    loading = true;
    copy.disabled = true;
    download.removeAttribute('href');
    download.setAttribute('aria-disabled', 'true');
    retry.disabled = true;
    retry.hidden = true;
    fallback.hidden = true;
    status.textContent = 'Loading instructions…';
    content.textContent = 'Loading instructions…';
    panel.setAttribute('aria-busy', 'true');
    try {
      const response = await fetch(skill.instructionsPath, { cache: 'no-cache' });
      if (!response.ok) throw new Error('Instructions unavailable');
      const text = await response.text();
      const { metadata, body } = splitSkillDocument(text);
      if (metadata.description) {
        const description = metadata.description.split('. ')[0].replace(/\.$/, '') + '.';
        summary.querySelector('.skill-description').textContent = description;
        document.querySelector('meta[name="description"]').content = metadata.description;
      }
      content.replaceChildren(renderSkillMarkdown(body));
      // Copy retains the exact file, including frontmatter and original line breaks.
      originalText = text;
      download.href = skill.instructionsPath;
      download.removeAttribute('aria-disabled');
      copy.disabled = false;
      status.textContent = '';
    } catch {
      content.textContent = 'We couldn’t load these instructions. Please try again.';
      status.textContent = 'Instructions unavailable. Select Retry to load them again.';
      retry.hidden = false;
    } finally {
      loading = false;
      retry.disabled = false;
      panel.setAttribute('aria-busy', 'false');
    }
  }
  loadInstructions();
}
