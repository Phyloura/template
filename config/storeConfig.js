// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURAÇÃO DA LOJA
// Único arquivo a editar para criar uma nova loja a partir deste template.
// Cores, fontes, textos, produtos e imagens saem daqui; o layout fica em
// index.html + style.css e a lógica em applyConfig.js + script.js.
// Tudo entre parênteses, ex.: "(produto 1)", é placeholder a ser substituído.
// ═══════════════════════════════════════════════════════════════════════════

// Valores repetidos em vários textos (use ${STORE_NAME} / ${STORE_CITY} nos templates)
const STORE_NAME = '(nome da loja)';
const STORE_CITY = '(cidade)';

// Textos de exemplo para visualizar o layout com conteúdo de tamanho real
const LOREM_SHORT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const LOREM_LONG = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

// Imagem provisória usada em todos os campos de imagem (troque por arquivos em assets/)
const IMG = 'assets/placeholder.svg';

const STORE_CONFIG = {

  // ── 1. IDENTIDADE ────────────────────────────────────────────────────────
  identity: {
    name: STORE_NAME,
    slug: 'loja',                       // prefixo das chaves do localStorage (carrinho/endereço)
    language: 'pt-BR',
    pageTitle: `${STORE_NAME} — (slogan da loja)`,
    logoText: '(logo)',                 // texto ao lado do ícone no cabeçalho e no rodapé
    logoIcon: 'ph-storefront',          // ícone Phosphor: https://phosphoricons.com
  },

  // ── 2. CONTATO ───────────────────────────────────────────────────────────
  contact: {
    whatsapp: '5500000000000',          // só dígitos: DDI + DDD + número (recebe os pedidos)
    phoneDisplay: '(00) 0 0000-0000',   // como o telefone aparece no rodapé
    email: '(e-mail da loja)',
    instagram: '(instagram)',           // usuário, sem @
    location: `${STORE_CITY}, (UF)`,
    locationFull: `${STORE_CITY}, (estado)`,
    hours: ['(dias e horários 1)', '(dias e horários 2)'],
  },

  // ── 3. TEMA: PALETA E TIPOGRAFIA ─────────────────────────────────────────
  // Cada cor vira uma variável CSS (primaryDark → --primary-dark).
  theme: {
    colors: {
      cream:        '#FAF7F2',   // fundo da página
      creamDark:    '#F2EDE4',
      white:        '#FFFFFF',
      primary:      '#5F8A65',   // cor principal da marca
      primaryMid:   '#4A7050',
      primaryDark:  '#2F5234',
      primaryLight: '#EAF2EB',
      accent:       '#E8845A',   // destaque (botões de ação)
      accentLight:  '#FBE8DC',
      accentDark:   '#C96A42',
      charcoal:     '#1E2620',   // texto principal e rodapé
      gray:         '#6C7A6E',   // texto secundário
      border:       '#DDE4DC',
      borderLight:  '#EEF2ED',
    },
    fonts: {
      body:    "'Nunito', sans-serif",          // texto corrido
      heading: "'Playfair Display', serif",     // títulos e logo
      // Link do Google Fonts com as famílias acima (deixe '' para não carregar nada)
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap',
    },
  },

  // ── 4. CABEÇALHO ─────────────────────────────────────────────────────────
  header: {
    // target = id da seção na página; opensMenu = abre o catálogo (drawer)
    nav: [
      { label: 'Nossa História', target: 'historia' },
      { label: 'Como Funciona',  target: 'como-funciona' },
      { label: 'Catálogo',       opensMenu: true },
      { label: 'Parceiros',      target: 'parceiros' },
    ],
    plannerButton: 'Planner',
    menuButton: 'Ver Catálogo',
  },

  // ── 5. HERO ──────────────────────────────────────────────────────────────
  hero: {
    badge: '(selo ou localização)',
    title: '(Título principal) {(destaque)}',   // {texto} = destaque colorido
    text: LOREM,
    menuButton: 'Ver Catálogo',
    whatsappButton: 'WhatsApp',
    trust: ['(diferencial 1)', '(diferencial 2)', '(diferencial 3)'],
    image: { src: IMG, alt: '(descrição da imagem principal)' },
  },

  // ── 6. DESTAQUES (produtos com bestseller: true) ─────────────────────────
  featured: {
    label: 'Mais Pedidos',
    title: '(título da seção de destaques)',
    subtitle: LOREM_SHORT,
    badge: 'Mais pedido',
    addToCartTitle: 'Adicionar ao carrinho',
    maxItems: 4,
  },

  // ── 7. NOSSA HISTÓRIA ────────────────────────────────────────────────────
  story: {
    label: 'Nossa História',
    title: '(título da seção sobre a loja)',
    image: { src: IMG, alt: '(descrição da imagem)' },
    imageBadge: '(selo da imagem)',
    quote: '(frase motivacional)',
    paragraphs: [LOREM, LOREM],         // exatamente 2 parágrafos
    author: { name: '(nome do responsável)', role: '(cargo do responsável)' },
  },

  // ── 8. COMO FUNCIONA ─────────────────────────────────────────────────────
  howItWorks: {
    label: 'Como Funciona',
    title: '(título da seção)',
    subtitle: LOREM_SHORT,
    steps: [                            // numeração 01, 02, 03… automática
      { title: '(passo 1)', text: LOREM_SHORT },
      { title: '(passo 2)', text: LOREM_SHORT },
      { title: '(passo 3)', text: LOREM_SHORT },
    ],
  },

  // ── 9. DIFERENCIAIS ──────────────────────────────────────────────────────
  differentiators: {
    label: 'Nossos Diferenciais',
    title: '(título da seção de diferenciais)',
    subtitle: LOREM_SHORT,
    items: [
      { icon: 'ph-star',         title: '(diferencial 1)', text: LOREM_SHORT },
      { icon: 'ph-heart',        title: '(diferencial 2)', text: LOREM_SHORT },
      { icon: 'ph-check-circle', title: '(diferencial 3)', text: LOREM_SHORT },
      { icon: 'ph-shield-check', title: '(diferencial 4)', text: LOREM_SHORT },
      { icon: 'ph-truck',        title: '(diferencial 5)', text: LOREM_SHORT },
      { icon: 'ph-sparkle',      title: '(diferencial 6)', text: LOREM_SHORT },
    ],
  },

  // ── 10. PARCEIROS ────────────────────────────────────────────────────────
  partners: {
    label: 'Parceiros',
    title: '(título da seção de parceiros)',
    subtitle: LOREM_SHORT,
    icon: 'ph-buildings',
    category: '(categoria)',            // legenda abaixo do nome de cada parceiro
    items: [
      '(parceiro 1)', '(parceiro 2)', '(parceiro 3)', '(parceiro 4)', '(parceiro 5)',
      '(parceiro 6)', '(parceiro 7)', '(parceiro 8)', '(parceiro 9)', '(parceiro 10)',
    ],
  },

  // ── 11. DEPOIMENTOS ──────────────────────────────────────────────────────
  testimonials: {
    label: 'Depoimentos',
    title: '(título da seção de depoimentos)',
    subtitle: LOREM_SHORT,
    steps: 3,                           // nº de bolinhas/etapas do carrossel
    stepAriaLabel: 'Etapa',
    items: [
      { name: '(nome do cliente 1)', role: '(descrição do cliente)', stars: 5, text: LOREM_LONG },
      { name: '(nome do cliente 2)', role: '(descrição do cliente)', stars: 5, text: LOREM },
      { name: '(nome do cliente 3)', role: '(descrição do cliente)', stars: 5, text: LOREM },
      { name: '(nome do cliente 4)', role: '(descrição do cliente)', stars: 5, text: LOREM },
      { name: '(nome do cliente 5)', role: '(descrição do cliente)', stars: 5, text: LOREM },
    ],
  },

  // ── 12. RODAPÉ ───────────────────────────────────────────────────────────
  footer: {
    tagline: LOREM_SHORT,
    navTitle: 'Navegação',             // links = header.nav
    contactTitle: 'Contato',            // dados = contact
    copyright: '© (ano) (razão social). Todos os direitos reservados.',
  },

  // ── 13. CATÁLOGO ─────────────────────────────────────────────────────────
  catalog: {
    currency: { symbol: 'R$', decimalSeparator: ',' },

    // Filtros do catálogo: chave usada em products[].tags → rótulo exibido
    tags: {
      'tag-1': '(filtro 1)',
      'tag-2': '(filtro 2)',
      'tag-3': '(filtro 3)',
    },

    // id único por produto; bestseller: true aparece em "Destaques"
    products: [
      { id: 'produto_1', name: '(produto 1)', desc: LOREM_SHORT, price: 10.00, tags: ['tag-1', 'tag-2'], img: IMG, bestseller: true },
      { id: 'produto_2', name: '(produto 2)', desc: LOREM_SHORT, price: 10.00, tags: ['tag-2'],          img: IMG, bestseller: true },
      { id: 'produto_3', name: '(produto 3)', desc: LOREM_SHORT, price: 10.00, tags: ['tag-1', 'tag-3'], img: IMG, bestseller: true },
      { id: 'produto_4', name: '(produto 4)', desc: LOREM_SHORT, price: 10.00, tags: ['tag-3'],          img: IMG, bestseller: true },
      { id: 'produto_5', name: '(produto 5)', desc: LOREM_SHORT, price: 10.00, tags: ['tag-1'],          img: IMG },
      { id: 'produto_6', name: '(produto 6)', desc: LOREM_SHORT, price: 10.00, tags: ['tag-2', 'tag-3'], img: IMG },
      { id: 'produto_7', name: '(produto 7)', desc: LOREM_SHORT, price: 10.00, tags: ['tag-1', 'tag-2'], img: IMG },
      { id: 'produto_8', name: '(produto 8)', desc: LOREM_SHORT, price: 10.00, tags: ['tag-3'],          img: IMG },
    ],
  },

  // ── 14. CATÁLOGO (drawer) E CARRINHO ─────────────────────────────────────
  menu: {
    title: 'Catálogo',
    filtersLabel: 'Filtros',
    addressLabel: 'Endereço de Entrega',
    addressPlaceholder: 'Rua, número, bairro, CEP e complemento…',
  },

  cart: {
    emptyText: 'Nenhum item adicionado ainda.',
    addressRequiredText: 'Preencha o endereço de entrega para finalizar',
    totalLabel: 'TOTAL',
    checkoutButton: 'Finalizar Pedido no WhatsApp',
    // Mensagem enviada ao WhatsApp da loja
    message: {
      title: `NOVO PEDIDO - ${STORE_NAME}`,
      addressLabel: 'Endereço',
      payment: 'Pagamento: (formas de pagamento)',
    },
  },

  // ── 15. PLANEJADOR SEMANAL ───────────────────────────────────────────────
  // enabled: false remove o botão e o painel do planner da página.
  planner: {
    enabled: true,
    title: 'Planejador Semanal',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    slots: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4', 'Opção 5', 'Opção 6'],
    weekLabels: { current: 'Esta semana', previous: 'Semana passada', next: 'Próxima semana', other: 'Semana' },
    pickerTitle: 'Catálogo',
    pickerHint: 'Selecione uma célula no grid →',
    searchPlaceholder: 'Buscar produto…',
    emptySearch: 'Nenhum produto encontrado.',
    slotsLabel: 'slots',
    totalLabel: 'semana',
    removeTitle: 'Remover',
    clearButton: 'Limpar',
    clearConfirm: 'Limpar todos os itens desta semana?',
    orderButton: 'Pedir via WhatsApp',
    message: {
      title: `PLANEJAMENTO SEMANAL — ${STORE_NAME}`,
      totalLabel: 'Total estimado',
      weekLabel: 'Semana:',
      noAddress: '(não informado)',
    },
  },
};
