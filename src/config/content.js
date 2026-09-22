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
    instagram: "https://instagram.com/neeko.digital",
  },

  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#portfolio" },
    { label: "Quem Somos", href: "#sobre" },
    { label: "Clientes", href: "#clientes" },
  ],

  hero: {
    title: "Automação que",
    titleHighlight: "libera tempo",
    titleEnd: "e acelera resultados",
    subtitle:
      "Transformamos processos repetitivos em sistemas inteligentes para sua equipe focar no que realmente importa e sua empresa crescer com mais velocidade.",
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
      "Quatro frentes, um mesmo objetivo: tirar o repetitivo do seu caminho e colocar tecnologia de verdade a serviço do seu negócio.",
    items: [
      {
        icon: "zap",
        title: "Automação de Rotinas",
        description:
          "Libere sua equipe das tarefas repetitivas — deixe a máquina trabalhar.",
        bullets: [
          "Automação de relatórios e planilhas",
          "Envio automático de e-mails e notificações",
          "Integração entre sistemas e plataformas",
          "Fluxos de aprovação automatizados",
          "Robôs RPA para tarefas repetitivas",
        ],
      },
      {
        icon: "lightbulb",
        title: "Ferramentas com IA",
        description:
          "Agentes e assistentes inteligentes feitos sob medida para o seu negócio.",
        bullets: [
          "Agentes de IA para atendimento ao cliente",
          "Assistentes internos com base de conhecimento",
          "Análise automática de documentos e contratos",
          "IA para classificação e triagem de dados",
          "Automação com modelos de linguagem (LLMs)",
        ],
      },
      {
        icon: "code-2",
        title: "Desenvolvimento de Sites",
        description:
          "Site profissional que vende — mesmo quando você está dormindo.",
        bullets: [
          "Sites institucionais e portfólios",
          "Landing pages de alta conversão",
          "Lojas virtuais (e-commerce)",
          "Sites com integração de sistemas",
          "SEO e performance otimizados",
        ],
      },
      {
        icon: "palette",
        title: "Identidade Visual",
        description:
          "A primeira impressão do seu negócio — feita para ser inesquecível.",
        bullets: [
          "Logotipo profissional e variações",
          "Manual de identidade visual",
          "Paleta de cores e tipografia",
          "Templates para redes sociais",
          "Papelaria e materiais impressos",
        ],
      },
    ],
  },

  specialty: {
    title: "Tecnologia que trabalha enquanto sua equipe pensa",
    titleHighlight: "automação",
    text1:
      "Quatro frentes, um mesmo objetivo: tirar o repetitivo do seu caminho e colocar tecnologia de verdade a serviço do seu negócio. A Neeko desenvolve soluções para reduzir retrabalho, acelerar processos e dar mais espaço para a sua equipe focar no que gera valor.",
    segmentsTitle: "Nossas frentes de atuação:",
    segments: [
      "Automação de rotinas",
      "Ferramentas com IA",
      "Desenvolvimento de sites",
      "Identidade visual",
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
    title: "Vamos automatizar o que está travando seu crescimento?",
    // href aponta para WhatsApp (não mais para a própria seção #orcamento — self-link corrigido)
    button: { label: "Falar pelo WhatsApp", href: "https://wa.me/5527981184118" },
  },

  footer: {
    slogan: "Automação, IA e tecnologia para empresas que querem crescer sem retrabalho.",
    menu: [
      { label: "Serviços", href: "#servicos" },
      { label: "Projetos", href: "#portfolio" },
      { label: "Quem Somos", href: "#sobre" },
    ],
    copyright: `© ${new Date().getFullYear()} Neeko. Todos os direitos reservados.`,
  },
};
