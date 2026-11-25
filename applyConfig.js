// ═══════════════════════════════════════════════════════════════════════════
// Aplica STORE_CONFIG (config/storeConfig.js) na página:
//   1. tema (variáveis CSS, fontes, título, idioma) — roda já no <head>, antes da 1ª pintura
//   2. textos, imagens e links marcados com data-* no index.html
//   3. listas (navegação, passos, diferenciais, parceiros, ...)
// Produtos, carrinho, planner e depoimentos continuam em script.js.
// Para mudar conteúdo, edite só o storeConfig.js.
// ═══════════════════════════════════════════════════════════════════════════
(function () {

  const cfg = STORE_CONFIG;

  // Lê um valor do config por caminho: get('hero.image.src'), get('story.paragraphs.0')
  function get(path) {
    const value = path.split('.').reduce((obj, key) => (obj == null ? obj : obj[key]), cfg);
    if (value === undefined) console.warn(`[storeConfig] caminho inexistente: ${path}`);
    return value ?? '';
  }

  // ── 1. TEMA ────────────────────────────────────────────────────────────────
  function applyTheme() {
    const root = document.documentElement;
    const { colors, fonts } = cfg.theme;

    // primaryDark → --primary-dark
    Object.entries(colors).forEach(([name, value]) => {
      root.style.setProperty('--' + name.replace(/[A-Z]/g, c => '-' + c.toLowerCase()), value);
    });
    root.style.setProperty('--font-body', fonts.body);
    root.style.setProperty('--font-heading', fonts.heading);

    root.lang = cfg.identity.language;
    document.title = cfg.identity.pageTitle;

    if (fonts.googleFontsUrl) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = fonts.googleFontsUrl;
      document.head.appendChild(link);
    }
  }
  applyTheme();

  // ── 2. TEXTOS, IMAGENS E LINKS (atributos data-* do index.html) ────────────
  function bindContent() {
    document.querySelectorAll('[data-text]').forEach(el => { el.textContent = get(el.dataset.text); });

    // {palavra} vira <span>palavra</span> (destaque colorido do título)
    document.querySelectorAll('[data-highlight]').forEach(el => {
      el.innerHTML = get(el.dataset.highlight).replace(/\{(.+?)\}/g, '<span>$1</span>');
    });

    document.querySelectorAll('[data-placeholder]').forEach(el => { el.placeholder = get(el.dataset.placeholder); });

    document.querySelectorAll('[data-img]').forEach(img => {
      const { src, alt } = get(img.dataset.img);
      img.src = src;
      img.alt = alt;
    });

    document.querySelectorAll('[data-icon]').forEach(el => {
      const icon = get(el.dataset.icon);
      if (icon) el.classList.add(icon);
    });

    document.querySelectorAll('[data-whatsapp]').forEach(a => { a.href = `https://wa.me/${cfg.contact.whatsapp}`; });
    document.querySelectorAll('[data-instagram]').forEach(a => { a.href = `https://instagram.com/${cfg.contact.instagram}`; });
  }

  // ── 3. LISTAS (data-render="nome" → função de mesmo nome abaixo) ───────────
  // Atraso escalonado da animação fade-up: 0s, .07s, .14s…
  const delay = (i, step) => `${+(i * step).toFixed(2)}s`;

  const renderers = {
    // Links de navegação (cabeçalho e rodapé usam a mesma lista)
    nav(el) {
      cfg.header.nav.forEach(item => {
        const a = document.createElement('a');
        a.textContent = item.label;
        if (item.opensMenu) { a.href = '#'; a.dataset.openMenu = ''; }
        else a.href = '#' + item.target;
        el.appendChild(a);
      });
    },

    hours(el) {
      cfg.contact.hours.forEach(text => {
        el.insertAdjacentHTML('beforeend', `<p><i class="ph ph-clock ph-sm"></i>${text}</p>`);
      });
    },

    trust(el) {
      el.innerHTML = cfg.hero.trust
        .map(text => `<div class="trust-item"><div class="trust-dot"></div>${text}</div>`).join('');
    },

    filterChips(el) {
      el.innerHTML = Object.entries(cfg.catalog.tags)
        .map(([tag, label]) => `<button class="filter-chip" data-filter="${tag}">${label}</button>`).join('');
    },

    steps(el) {
      el.innerHTML = cfg.howItWorks.steps.map((s, i) => `
        <div class="how-card fade-up" style="transition-delay:${delay(i, 0.1)}">
          <div class="how-step-num">${String(i + 1).padStart(2, '0')}</div>
          <h3>${s.title}</h3>
          <p>${s.text}</p>
        </div>`).join('');
    },

    differentiators(el) {
      el.innerHTML = cfg.differentiators.items.map((d, i) => `
        <div class="diff-card fade-up" style="transition-delay:${delay(i, 0.07)}"><div class="diff-icon"><i class="ph ${d.icon} ph-xl"></i></div><h3>${d.title}</h3><p>${d.text}</p></div>`).join('');
    },

    partners(el) {
      const { icon, category, items } = cfg.partners;
      el.innerHTML = items.map((name, i) => `
        <div class="partner-card fade-up" style="transition-delay:${delay(i, 0.07)}"><div class="partner-icon"><i class="ph ${icon} ph-2xl"></i></div><div class="partner-name">${name}</div><div class="partner-cat">${category}</div></div>`).join('');
    },
  };

  function renderLists() {
    document.querySelectorAll('[data-render]').forEach(el => renderers[el.dataset.render](el));
  }

  // ── INIT ───────────────────────────────────────────────────────────────────
  // Roda antes do DOMContentLoaded de script.js (este arquivo é carregado antes).
  document.addEventListener('DOMContentLoaded', () => {
    if (!cfg.planner.enabled) {
      ['openPlannerBtn', 'plannerOverlay', 'plannerDrawer'].forEach(id => document.getElementById(id)?.remove());
    }
    bindContent();
    renderLists();
  });

})();
