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
    title: "Sua operação, em modo",
    titleHighlight: "automático",
    titleEnd: "e com mais velocidade",
    subtitle:
      "Conectamos processos, sistemas, IA e sites para eliminar retrabalho, reduzir erros e dar à sua equipe mais tempo para crescer e vender melhor.",
    cta1: { label: "Falar com especialista", href: "#contato" },
    cta2: { label: "Ver serviços", href: "#servicos" },
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
    // Espaço reservado para futuras logos. Mantém apenas a CRC Mulher ativa por enquanto.
    logos: [
      { src: "/assets/images/clients/crces-mulher.png", alt: "CRC-ES Mulher" },
      { src: "", alt: "" },
      { src: "", alt: "" },
      { src: "", alt: "" },
      { src: "", alt: "" },
      { src: "", alt: "" },
    ],
  },

  services: {
    sectionTitle: "O que fazemos",
    intro:
      "A Neeko transforma processos manuais em soluções digitais, utilizando automação, integração, dados e inteligência artificial para tornar as rotinas das empresas mais rápidas, organizadas e eficientes.",
    items: [
      {
        icon: "zap",
        title: "01. Automações",
        description:
          "Processos repetitivos → automação → economia de tempo.",
        bullets: [
          "Automação de relatórios e planilhas",
          "Envio automático de e-mails e notificações",
          "Fluxos de aprovação automatizados",
          "Robôs RPA para tarefas repetitivas",
          "Redução de erros e retrabalho",
        ],
      },
      {
        icon: "brain",
        title: "02. IA para empresas",
        description:
          "Leitura, análise, classificação, consulta e geração de informações.",
        bullets: [
          "Agentes de IA para atendimento",
          "Assistentes internos com base de conhecimento",
          "Classificação e triagem de dados",
          "Análise de documentos e contratos",
          "Automação com LLMs e IA generativa",
        ],
      },
      {
        icon: "link-2",
        title: "03. Integrações",
        description:
          "Planilhas + APIs + sistemas + bancos de dados + plataformas.",
        bullets: [
          "Conexão entre sistemas e ferramentas",
          "Integração com APIs e bancos de dados",
          "Sincronização entre plataformas",
          "Automação de dados entre áreas",
          "Conectividade entre fluxos empresariais",
        ],
      },
      {
        icon: "database",
        title: "04. Dados e relatórios",
        description:
          "Tratamento de dados + cruzamentos + dashboards + indicadores.",
        bullets: [
          "Cruzamento e organização de dados",
          "Dashboards para tomada de decisão",
          "Indicadores de performance",
          "Relatórios automatizados",
          "Visualização inteligente de informações",
        ],
      },
      {
        icon: "settings-2",
        title: "05. Sistemas sob medida",
        description:
          "Ferramentas e sistemas desenvolvidos especificamente para a rotina da empresa.",
        bullets: [
          "Sistemas internos customizados",
          "Painéis e ferramentas operacionais",
          "Desenvolvimento sob medida",
          "Automação de processos internos",
          "Estrutura específica para a operação",
        ],
      },
      {
        icon: "globe",
        title: "06. Presença digital",
        description:
          "Sites + landing pages + identidade visual + hospedagem.",
        bullets: [
          "Sites institucionais e portfólios",
          "Landing pages de alta conversão",
          "Identidade visual e branding",
          "Hospedagem e performance",
          "Presença digital alinhada ao negócio",
        ],
      },
    ],
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
