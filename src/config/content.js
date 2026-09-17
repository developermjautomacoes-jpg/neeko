// NEEKO — Content Config
// Atualização de textos da página.

export const content = {
  brand: {
    name: "Neeko",
    slogan: "Tecnologia inteligente para empresas que querem crescer.",
    logoMain: "/assets/logos/logo_neeko.png",
    logoLight: "/assets/logos/logo neeko fundo branco.png",
    email: "contato@neeko.com.br",
    whatsapp: "https://wa.me/5500000000000",
    instagram: "https://instagram.com/neeko.digital",
  },

  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#portfolio" },
    { label: "Quem Somos", href: "#sobre" },
    { label: "Clientes", href: "#clientes" },
  ],

  hero: {
    title: "Soluções Digitais que",
    titleHighlight: "Transformam",
    titleEnd: "Empresas",
    subtitle:
      "Sites modernos, Landing Pages de alta conversão, Automações Inteligentes e Sistemas personalizados para impulsionar seu negócio.",
    cta1: { label: "Solicitar orçamento", href: "#contato" },
    cta2: { label: "Conhecer serviços", href: "#servicos" },
    // Slides do carrossel: cada um mostra um modelo "Neeko Modelo" dentro da moldura do navegador.
    // Clique abre a imagem grande (lightbox).
    slides: [
      { name: "Contábil",     img: "/assets/images/modelos/contabil.jpg",    url: "neeko.com.br/modelos/contabil" },
      { name: "Jurídico",     img: "/assets/images/modelos/juridico.jpg",    url: "neeko.com.br/modelos/juridico" },
      { name: "Gastronomia",  img: "/assets/images/modelos/gastro.jpg",      url: "neeko.com.br/modelos/gastro" },
      { name: "Eventos",      img: "/assets/images/modelos/eventos.jpg",     url: "neeko.com.br/modelos/eventos" },
      { name: "Imobiliária",  img: "/assets/images/modelos/imobiliaria.jpg", url: "neeko.com.br/modelos/imobiliaria" },
      { name: "Estética",     img: "/assets/images/modelos/estetica.jpg",    url: "neeko.com.br/modelos/estetica" },
      { name: "Saúde",        img: "/assets/images/modelos/saude.jpg",       url: "neeko.com.br/modelos/saude" },
      { name: "Automações",   img: "/assets/images/modelos/automacoes.jpg",  url: "neeko.com.br/modelos/automacoes" },
    ],
  },

  clients: {
    intro: "Conheça nossos clientes:",
    // Campo de LOGOS dos clientes.
    // Para adicionar: coloque o arquivo em /public/assets/images/clients/
    // e preencha { src: "/assets/images/clients/nome.png", alt: "Nome do cliente" }.
    // Slots com src vazio ("") aparecem como espaço reservado "Sua logo aqui".
    logos: [
      { src: "/assets/images/clients/crces-mulher.png", alt: "CRC-ES Mulher" },
      { src: "/assets/images/clients/facilitar.png", alt: "Facilitar Serviços Contábeis" },
      { src: "", alt: "" },
      { src: "", alt: "" },
      { src: "", alt: "" },
      { src: "", alt: "" },
    ],
  },

  services: {
    sectionTitle: "Nossos Serviços",
    items: [
      {
        icon: "layout",
        title: "Sites Institucionais",
        description:
          "Projetos modernos, rápidos e totalmente responsivos para fortalecer sua presença digital.",
      },
      {
        icon: "monitor-smartphone",
        title: "Landing Pages",
        description:
          "Páginas de alta conversão para eventos, palestras, workshops, lançamentos e campanhas.",
      },
      {
        icon: "code-2",
        title: "Sistemas Web",
        description:
          "Desenvolvimento de sistemas personalizados para automatizar processos internos.",
      },
      {
        icon: "zap",
        title: "Automações",
        description:
          "Integração entre sistemas, planilhas, APIs e processos repetitivos.",
      },
      {
        icon: "server",
        title: "Hospedagem",
        description:
          "Hospedagem rápida, segura e otimizada para máxima performance.",
      },
      {
        icon: "lightbulb",
        title: "Consultoria Digital",
        description:
          "Planejamento tecnológico para aumentar produtividade e reduzir custos.",
      },
    ],
  },

  specialty: {
    title: "Especialistas em soluções para ",
    titleHighlight: "contabilidade",
    text1:
      "A Neeko nasceu da experiência prática dentro do setor contábil. Conhecemos as rotinas fiscais, tributárias e administrativas, permitindo desenvolver ferramentas que realmente resolvem problemas do dia a dia.",
    segmentsTitle: "Atendemos também diversos segmentos:",
    segments: [
      "Eventos",
      "Palestras",
      "Empresas",
      "Consultorias",
      "Comércio",
      "Prestadores de serviços",
      "Indústrias",
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
    // Cards reservados ("em breve"). Ao publicar um projeto real, troque por:
    // { category: "Categoria", title: "Nome do projeto", img: "/assets/images/portfolio/arquivo.jpg" }
    items: [
      { soon: true, category: "Em breve", title: "Novo projeto" },
      { soon: true, category: "Em breve", title: "Novo projeto" },
      { soon: true, category: "Em breve", title: "Novo projeto" },
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
    sectionTitle: "Nosso Processo",
    steps: [
      "Entendimento",
      "Planejamento",
      "Desenvolvimento",
      "Entrega",
      "Suporte",
    ],
  },

  testimonials: {
    sectionTitle: "O que dizem sobre nós",
    items: [
      {
        text: '"A automação que a Neeko criou nos poupou horas de trabalho manual todos os dias. O sistema é robusto e lindo!"',
        name: "Carlos Silva",
        company: "Contabilidade XYZ",
        avatarClass: "avatar-1",
      },
      {
        text: '"Nossa Landing Page de evento converteu 3x mais este ano graças ao design focado e performance."',
        name: "Mariana Costa",
        company: "Eventos Tech",
        avatarClass: "avatar-2",
      },
    ],
  },

  cta: {
    title: "Vamos transformar sua ideia em um projeto digital?",
    // href aponta para WhatsApp (não mais para a própria seção #orcamento — self-link corrigido)
    button: { label: "Falar pelo WhatsApp", href: "https://wa.me/5500000000000" },
  },

  footer: {
    slogan: "Tecnologia inteligente para empresas que querem crescer.",
    menu: [
      { label: "Serviços", href: "#servicos" },
      { label: "Projetos", href: "#portfolio" },
      { label: "Quem Somos", href: "#sobre" },
    ],
    copyright: `© ${new Date().getFullYear()} Neeko. Todos os direitos reservados.`,
  },
};
