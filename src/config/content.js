// NEEKO — Content Config
// Atualização de textos da página.

export const content = {
  brand: {
    name: "Neeko",
    slogan: "Tecnologia inteligente para empresas que querem crescer.",
    logoMain: "/assets/logos/logo_neeko.png",
    logoLight: "/assets/logos/logo neeko fundo branco.png",
    email: "neeko.automacoes@gmail.com",
    whatsapp: "https://wa.me/5527981184118",
    instagram: "https://www.instagram.com/neeko.automacoes/",
  },

  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#portfolio" },
    { label: "Quem Somos", href: "#sobre" },
    { label: "Clientes", href: "#clientes" },
  ],

  hero: {
    title: "A Neeko transforma processos manuais em soluções digitais",
    titleHighlight: "",
    titleEnd: "",
    subtitle:
      "Utilizando automação, integração, dados e inteligência artificial para tornar as rotinas das empresas mais rápidas, organizadas e eficientes.",
    cta1: { label: "Falar com especialista", href: "#contato" },
    cta2: { label: "Ver serviços", href: "#servicos" },
    // Slides do carrossel: cada um mostra um modelo "Neeko Modelo" dentro da moldura do navegador.
    // Clique abre a imagem grande (lightbox).
    slides: [
      { name: "Automação Fiscal", img: "/assets/images/portfolio/01 · Automação Fiscal@2x.png", url: "#servicos" },
      { name: "Automação de Processos", img: "/assets/images/portfolio/02 · Automação de Processos@2x.png", url: "#servicos" },
      { name: "Inteligência Artificial", img: "/assets/images/portfolio/03 · Inteligência Artificial Aplicada@2x.png", url: "#servicos" },
      { name: "Dados e Cruzamento", img: "/assets/images/portfolio/04 · Análise e Cruzamento de Dados@2x.png", url: "#servicos" },
      { name: "Sistemas sob Medida", img: "/assets/images/portfolio/05 · Sistemas sob Medida@2x.png", url: "#servicos" },
      { name: "Presença Digital", img: "/assets/images/portfolio/06 · Presença Digital@2x.png", url: "#servicos" },
    ],
  },

  clients: {
    intro: "Conheça nossos clientes:",
    // Espaço reservado para futuras logos. Mantém apenas a CRC Mulher ativa por enquanto.
    logos: [
      { src: "/assets/images/clients/facilitar.png", alt: "Facilitar" },
      { src: "/assets/images/clients/crces-mulher.png", alt: "CRC-ES Mulher" },
    ],
  },

  services: {
    sectionTitle: "",
    intro:
      "",
    items: [],
  },

  specialty: {
    title: "Tecnologia que trabalha enquanto sua equipe pensa",
    titleHighlight: "automação",
    text1:
      "A Neeko atua em soluções digitais que eliminam retrabalho, conectam sistemas e organizam informações. Nossa proposta vai além do visual: criamos ferramentas e processos que tornam a operação da empresa mais ágil, inteligente e escalável.",
    segmentsTitle: "Nossas frentes de atuação:",
    segments: [
      "Automações",
      "IA para empresas",
      "Integrações",
      "Dados e relatórios",
      "Sistemas sob medida",
      "Presença digital",
    ],
  },

  differentials: {
    items: [
      { icon: "rocket", label: "Tecnologia Moderna" },
      { icon: "gauge", label: "Performance" },
      { icon: "search", label: "SEO" },
      { icon: "shield-check", label: "Segurança" },
      { icon: "life-buoy", label: "Suporte" },
      { icon: "cpu", label: "Automação Inteligente" },
      { icon: "smartphone", label: "Design Responsivo" },
      { icon: "puzzle", label: "Integrações" },
    ],
  },

  portfolio: {
    sectionTitle: "Projetos em Destaque",
    items: [
      {
        category: "Projetos",
        title: "Facilitar",
        img: "/assets/projetos/facilitar.png",
      },
      {
        category: "Projetos",
        title: "CRC",
        img: "/assets/projetos/crcset2026.png",
      },
    ],
  },

  // Esteira (marquee) de últimos sites — no final da página.
  latest: {
    title: "Últimos sites desenvolvidos",
    subtitle: "Uma amostra dos projetos e modelos criados pela Neeko",
    items: [
      { name: "Contábil",     img: "/assets/images/modelos/contabil.jpg" },
      { name: "Jurídico",     img: "/assets/images/modelos/juridico.jpg" },
      { name: "Gastronomia",  img: "/assets/images/modelos/gastro.jpg" },
      { name: "Eventos",      img: "/assets/images/modelos/eventos.jpg" },
      { name: "Imobiliária",  img: "/assets/images/modelos/imobiliaria.jpg" },
      { name: "Estética",     img: "/assets/images/modelos/estetica.jpg" },
      { name: "Saúde",        img: "/assets/images/modelos/saude.jpg" },
      { name: "Automações",   img: "/assets/images/modelos/automacoes.jpg" },
    ],
  },

  process: {
    sectionTitle: "Veja como funciona o nosso processo",
    steps: [
      "Briefing",
      "Protótipo",
      "Construção",
      "Publicação",
      "Suporte",
    ],
  },

  testimonials: {
    sectionTitle: "O que dizem sobre nós",
    items: [
      {
        text: '"Depoimento em breve. A Neeko está preparando a experiência real dos nossos clientes para compartilhar aqui."',
        name: "Cliente em destaque",
        company: "Em breve",
        avatarClass: "avatar-1",
      },
      {
        text: '"Depoimento em breve. Em breve compartilharemos os resultados reais de quem já trabalha com a Neeko."',
        name: "Cliente em destaque",
        company: "Em breve",
        avatarClass: "avatar-2",
      },
    ],
  },

  cta: {
    title: "Sua operação merece uma rotina mais inteligente, mais rápida e mais eficiente.",
    button: { label: "Solicitar orçamento", href: "#contato" },
  },

  footer: {
    slogan: "Automação, IA e tecnologia para empresas que querem ganhar tempo, reduzir erros e vender mais.",
    menu: [
      { label: "Serviços", href: "#servicos" },
      { label: "Projetos", href: "#portfolio" },
      { label: "Quem Somos", href: "#sobre" },
    ],
    copyright: `© ${new Date().getFullYear()} Neeko. Todos os direitos reservados.`,
  },
};
