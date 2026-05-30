export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  heroMetrics: { label: string; value: string; trend?: string; trendUp?: boolean }[];
  chartData: { name: string; value1: number; value2?: number }[];
  chartConfig: {
    type: 'area' | 'bar' | 'line' | 'funnel';
    dataKey1: string;
    label1: string;
    dataKey2?: string;
    label2?: string;
    dataKey3?: string;
    label3?: string;
    color?: string;
    color2?: string;
    color3?: string;
    colorAxis?: string;
  };
  mermaidString: string;
  githubIntegrations: {
    repo: string;
    description: string;
    language: string;
    lastCommit: string;
    hash: string;
  }[];
  contentSections?: {
    headline: string;
    content: string[];
    copyAction?: string;
    chart?: {
      data: any[];
      config: {
        type: 'area' | 'bar' | 'line' | 'pie' | 'funnel';
        dataKey1: string;
        label1: string;
        dataKey2?: string;
        label2?: string;
        dataKey3?: string;
        label3?: string;
        color?: string;
        color2?: string;
        color3?: string;
        colorAxis?: string;
      };
    };
  }[];
  marqueeItems?: string[];
}

export const servicesData: Record<string, ServiceData> = {
  'landing-pages-de-conversao': {
    title: 'A Máquina de Conversão',
    subtitle: 'Engenharia de Performance',
    description: 'Cada segundo de carregamento custa conversões. Cada elemento mal posicionado desperdiça tráfego pago. Landing pages de alta performance são a diferença entre queimar orçamento e multiplicar ROI.',
    heroMetrics: [
      { label: 'Conversão Média LP', value: '9.7%', trend: 'Unbounce', trendUp: true },
      { label: 'CPA (-1s load)', value: '-20%', trend: 'Google', trendUp: true },
      { label: 'Leads/Mês', value: '+220%', trend: 'HubSpot', trendUp: true },
    ],
    chartData: [
      { name: '5s+ (Agência)', value1: 80 },
      { name: '4s', value1: 70 },
      { name: '3s (Média)', value1: 60 },
      { name: '2s', value1: 50 },
      { name: '0.8s (tzolkin)', value1: 40 },
    ],
    chartConfig: {
      type: 'funnel',
      dataKey1: 'value1',
      label1: 'CPA (R$)',
    },
    mermaidString: `
      graph TD
        A[Tráfego Pago] --> B(Landing Page Otimizada)
        B -->|Carregamento <2s| C{Engajamento}
        C -->|Copy Persuasiva| D[Lead Capturado]
        C -->|Bounce| E[Retargeting Pixel]
        D --> F((Webhook / CRM))
    `,
    githubIntegrations: [
      { repo: 'core/landing-engine', description: 'Motor de renderização estática ultra-rápido via Next.js SSG + Edge Functions.', language: 'TypeScript', lastCommit: 'Há 2 horas', hash: 'a1b2c3d' },
      { repo: 'tracking/events-api', description: 'Sistema de hooks para disparos precisos no Meta CAPI e GTM Server-Side.', language: 'TypeScript', lastCommit: 'Ontem', hash: 'f4e5d6c' }
    ],
    marqueeItems: ['CONVERSÃO', 'TRÁFEGO PAGO', 'CRO', 'LEADS', 'CPA', 'ROI'],
    contentSections: [
      {
        headline: 'O Abismo Entre Tráfego e Faturamento',
        content: [
          'Você investe pesado em tráfego pago — Meta Ads, Google Ads, TikTok. O clique chega. Mas o lead não converte. O problema nunca foi o criativo ou a segmentação. O problema é para onde você manda esse tráfego.',
          'Uma página genérica converte em média 2.35% (WordStream). Uma landing page otimizada para conversão atinge 9.7% — mais de 4x a taxa de captura. Cada ponto percentual é receita direta perdida ou ganha.'
        ],
        copyAction: 'Se você gasta R$10.000/mês em tráfego e sua página converte 2%, você tem 200 leads. Com 9.7%, seriam 970. Com o mesmo investimento. Sem aumentar um centavo em ads.',
        chart: {
          data: [
            { name: '0.8s', value1: 4, value3: 96 },
            { name: '', value1: 8, value3: 92 },
            { name: '1.5s', value1: 15, value3: 85 },
            { name: '', value1: 22, value3: 78 },
            { name: '2.5s', value1: 34, value3: 66 },
            { name: '', value1: 45, value3: 55 },
            { name: '3.5s', value1: 54, value3: 46 },
            { name: '', value1: 62, value3: 38 },
            { name: '4.5s', value1: 71, value3: 29 },
            { name: '', value1: 78, value3: 22 },
            { name: '5.5s', value1: 85, value3: 15 },
            { name: '', value1: 90, value3: 10 },
            { name: '6.5s', value1: 94, value3: 6 },
            { name: '', value1: 96, value3: 4 },
            { name: '8.0s', value1: 98, value3: 2 },
            { name: '10s+', value1: 99, value3: 1 },
          ],
          config: {
            type: 'area',
            dataKey1: 'value3',
            label1: 'Usuários Retidos (%)',
            dataKey3: 'value1',
            label3: 'Taxa de Rejeição / Abandono (%)',
            color: '#40bb21',
            color3: '#ff4444',

          }
        }
      },
      {
        headline: 'Reduza seu CPA pela Metade com Engenharia',
        content: [
          'O Google já comprovou: cada segundo adicional de carregamento aumenta a probabilidade de bounce em 32%. Isso significa que seu Custo por Aquisição (CPA) infla a cada milissegundo desperdiçado.',
          'Nossas landing pages são construídas com SSG (Static Site Generation), Edge CDN e zero JavaScript desnecessário. O resultado: carregamento sub-segundo, Core Web Vitals perfeitos, e Quality Score máximo nos leilões de ads.'
        ],
        copyAction: 'Enquanto agências entregam templates de WordPress que carregam em 5 segundos, nossas páginas abrem em 0.8s — isso reduz seu CPA em até 50% porque o Google recompensa velocidade no Quality Score.',
        chart: {
          data: [
            { name: '5s (Agência WordPress)', value1: 80, description: 'CPA máximo. Cada segundo de lentidão infla 32% no bounce rate e você paga caro por acessos perdidos.' },
            { name: '4s', value1: 70, description: 'Sua parcela de conversão começa a melhorar, mas boa parte do orçamento ainda evapora.' },
            { name: '3s', value1: 60, description: 'Tempo médio do mercado. O custo de aquisição estagna e limita a sua escala em leilões mais caros.' },
            { name: '2s', value1: 50, description: 'O carregamento entra em uma boa zona e o Google Ads já recompensa com Quality Score melhor.' },
            { name: '0.8s (tzolkin SSG)', value1: 40, description: 'Velocidade instantânea! CPA matematicamente cortado pela metade devido ao máximo de conversão na landing page.' },
          ],
          config: {
            type: 'funnel',
            dataKey1: 'value1',
            label1: 'Custo por Aquisição - CPA (R$)',
            color: '#40bb21',
          }
        }
      },
      {
        headline: 'A Anatomia de uma Página que Vende',
        content: [
          'Não existe conversão por acidente. Cada elemento de uma landing page de alta performance é posicionado estrategicamente: headline acima da dobra, prova social visível em 0.5s, CTA contrastante, e formulário com fricção mínima.',
          'Estudos da HubSpot mostram que páginas com um único CTA convertem 266% mais que páginas com múltiplas ofertas. Menos opções, mais ação. Engenharia de decisão aplicada.'
        ],
        copyAction: 'O segredo não é design bonito — é psicologia comportamental aplicada. Cada pixel serve a uma função: eliminar objeções, gerar urgência e capturar a decisão no momento exato.',
        chart: {
          data: [
            { name: 'Headline', value1: 40 },
            { name: 'Prova Social', value1: 25 },
            { name: 'CTA', value1: 20 },
            { name: 'Velocidade', value1: 15 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Impacto na Conversão por Elemento (%)',
            colorAxis: '#888888',
          }
        }
      },
      {
        headline: 'De Lead a Cliente: A Jornada que Paga seu Investimento',
        content: [
          'Capturar o lead é só o começo. Nossas landing pages integram nativamente com seu CRM via Webhooks, disparam UTMs rastreáveis no UTMify, e alimentam fluxos de automação no momento exato da conversão.',
          'O resultado é visibilidade total do funil: você sabe de onde veio cada lead, quanto custou, qual criativo converteu, e quanto tempo levou do clique à venda. Dados que transformam marketing em ciência exata.'
        ]
      },
      {
        headline: 'Pare de Queimar Orçamento. Comece a Escalar.',
        content: [
          'Cada real investido em tráfego pago merece uma infraestrutura de destino que maximize o retorno. Não adianta ter o melhor criativo se a página mata a conversão.',
          'A diferença entre uma operação de tráfego que empata e uma que escala de verdade é a engenharia por trás da landing page. É aqui que o ROI real acontece.'
        ]
      },
      {
        headline: 'Benchmarks Reais de Performance (Dados de Mercado)',
        content: [
          'Taxa Média: A taxa de conversão média de landing pages em todos os setores é 9.7%. Pages no top 25% convertem acima de 15%. (Fonte: Unbounce Conversion Benchmark Report 2024)',
          'Velocidade é Dinheiro: Sites que carregam em 1 segundo convertem 3x mais que sites que carregam em 5 segundos. (Fonte: Portent / Google)',
          'CTA Único: Landing pages com um único CTA convertem 266% mais que páginas com 3+ links. (Fonte: HubSpot)',
          'Mobile First: 58% das conversões de landing pages já vêm de dispositivos móveis. Pages não-responsivas perdem mais da metade do tráfego. (Fonte: Statista / Google)'
        ]
      }
    ]
  },
  'sites-institucionais': {
    title: 'O Faturamento por Trás da Marca',
    subtitle: 'Engenharia de Autoridade',
    description: 'Quanto faturamento e reconhecimento sua marca perde por segundo com uma infraestrutura digital obsoleta? Engenharia web focada em ROI, velocidade e autoridade para empresas que querem dominar seu mercado.',
    heroMetrics: [
      { label: 'ROI de UX', value: '9.900%', trend: 'Forrester', trendUp: true },
      { label: 'Bounce (+2s load)', value: '+32%', trend: 'Google', trendUp: false },
      { label: 'Julgam. Visual', value: '0.05s', trend: 'ACM/CXL', trendUp: true },
    ],
    chartData: [
      { name: '1s', value1: 32 },
      { name: '3s', value1: 32 },
      { name: '5s', value1: 90 },
      { name: '6s', value1: 106 },
      { name: '10s', value1: 123 },
    ],
    chartConfig: {
      type: 'bar',
      dataKey1: 'value1',
      label1: 'Aumento do Bounce Rate (%)',
    },
    mermaidString: `
      graph TD
        A[Tráfego Qualificado] --> B{Impressão em 0.05s}
        B -->|Site Amador| C(Fuga Direta / Bounce)
        C --> D[Custo por Lead Explode]
        B -->|Design Premium| E(Retenção Ampliada)
        E --> F[Queda de Atrito / Confiança]
        F --> G((Aumento CLV/Ticket))
    `,
    githubIntegrations: [
      { repo: 'brand/ui-architecture', description: 'Metodologias sólidas de UI/UX ancoradas em performance e React Server Components.', language: 'TypeScript', lastCommit: 'Hoje', hash: 'e4d5c6b' },
      { repo: 'cms/authority-hub', description: 'Painel CMS focado na jornada do cliente para previsibilidade de caixa.', language: 'Node.js', lastCommit: 'Ontem', hash: 'b1a2c3d' }
    ],
    marqueeItems: ['AUTORIDADE', 'BRAND EQUITY', 'FATURAMENTO', 'UX/UI', 'PERFORMANCE', 'SEO'],
    contentSections: [
      {
        headline: 'O Custo Invisível de um Site Obsoleto',
        content: [
          'O mercado digital é implacável. Em questão de milissegundos, um visitante decide se a sua empresa é uma autoridade no setor ou apenas mais uma opção amadora.',
          'Um site institucional deixou de ser um "cartão de visitas" — ele é o ativo digital mais importante para o reconhecimento da sua marca. Se a sua primeira impressão falha, todo o investimento em tráfego e marketing se transforma em perda direta de receita.'
        ],
        copyAction: 'Se o seu site atual demora 5 segundos para carregar as imagens, você está literalmente jogando 90% do seu orçamento de tráfego no lixo antes mesmo do cliente ler a sua oferta.',
        chart: {
          data: [
            { name: '1\u21923s', value1: 32 },
            { name: '1\u21925s', value1: 90 },
            { name: '1\u21926s', value1: 106 },
            { name: '1\u219210s', value1: 123 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Aumento do Bounce Rate (%)',
          }
        }
      },
      {
        headline: 'O Alicerce que Escala Vendas e Constrói Autoridade',
        content: [
          'Olhe para o seu Custo de Aquisição de Clientes (CAC). Se ele está alto e a conversão de leads está travada, o gargalo não é o seu produto, mas a percepção de valor que o seu ambiente digital transmite.',
          'Um site institucional de alta performance atua como o motor do seu faturamento. Ele unifica a jornada do cliente e transmite o prestígio necessário para que você possa elevar seu ticket médio.'
        ],
        copyAction: 'Enquanto a concorrência prende seu projeto em processos lentos, nossa engenharia incremental coloca uma máquina validada no ar rapidamente, antecipando o seu retorno financeiro.',
        chart: {
          data: [
            { name: 'Mês 1', value1: 0, value2: 15 },
            { name: 'Mês 2', value1: 0, value2: 35 },
            { name: 'Mês 3', value1: 10, value2: 80 },
            { name: 'Mês 6', value1: 25, value2: 150 },
          ],
          config: {
            type: 'line',
            dataKey1: 'value2',
            label1: 'Padrão tzolkin (Incremental)',
            dataKey2: 'value1',
            label2: 'Agências Comuns (Cascata)',
          }
        }
      },
      {
        headline: 'Engenharia de Marca: Design Premium Encontra Lucratividade',
        content: [
          'Construir uma marca inesquecível exige mais do que templates prontos; exige engenharia de experiência. Nós aplicamos metodologias sólidas para criar uma plataforma robusta e visualmente impactante.',
          'Eles ancoram o reconhecimento da sua marca no subconsciente do cliente, posicionando sua empresa como líder do segmento e justificando o preço premium dos seus serviços.'
        ],
        copyAction: 'O design institucional não é apenas para ficar bonito na tela. Ele é responsável por 45% da percepção de valor que permite à sua marca cobrar mais caro do que a concorrência.',
        chart: {
          data: [
            { name: 'Brand Equity', value1: 45 },
            { name: 'Redução de Fricção UX', value1: 30 },
            { name: 'SEO Orgânico', value1: 15 },
            { name: 'Retenção e Recorrência', value1: 10 },
          ],
          config: {
            type: 'pie',
            dataKey1: 'value1',
            label1: 'Origem do Aumento de 200% no LTV (%)',
          }
        }
      },
      {
        headline: 'Transformando Tráfego Qualificado em Previsibilidade de Caixa',
        content: [
          'A união entre uma interface de alto padrão (UX/UI) e um código otimizado afeta diretamente a sua planilha de resultados. Um site que retém a atenção do usuário elimina o atrito na jornada de compra e dispara a taxa de conversão (CRO).',
          'O impacto no seu negócio é matemático: redução drástica no custo por lead, aumento do Lifetime Value (LTV) e aceleração do ciclo de vendas. Quando a sua plataforma institucional comunica excelência, o cliente confia mais, fecha contratos mais rápido e retorna com maior frequência.'
        ]
      },
      {
        headline: 'Assuma o Controle do Seu Crescimento',
        content: [
          'A sua empresa já passou da fase de depender de uma infraestrutura digital amadora que sabota o seu faturamento e enfraquece a sua imagem.',
          'É hora de transformar a sua presença online em uma máquina de conversão, projetada especificamente para multiplicar lucros e blindar o reconhecimento da sua marca.'
        ]
      },
      {
        headline: 'A Ciência do Faturamento (Dados Reais de Mercado)',
        content: [
          'Credibilidade é Dinheiro: 75% dos consumidores admitem julgar a credibilidade de uma empresa baseados exclusivamente no design do seu site. (Fonte: Stanford University)',
          'ROI do UX: A cada $1 investido em UX, o retorno médio é de $100 — ROI de 9.900%. (Fonte: Forrester Research via AWS)',
          'Métrica da Velocidade: Se o carregamento passa de 1s para 3s, o Bounce Rate aumenta em 32%. (Fonte: Think with Google)',
          'Reconhecimento em 50ms: Leva 0,05 segundos para o usuário formar opinião sobre o seu site. (Fonte: ACM / CXL)'
        ]
      }
    ]
  },
  'e-commerces-globais': {
    title: 'E-commerces Globais',
    subtitle: 'Operações em Larga Escala',
    description: 'Estruturação avançada de lojas escaláveis de alcance global (Dropshipping ou Operação Tradicional).',
    heroMetrics: [
      { label: 'Aceleração de Checkout', value: '-30%', trend: '-4s', trendUp: true },
      { label: 'Uptime', value: '99.99%', trend: '', trendUp: true },
      { label: 'Taxa de Rejeição Cart', value: '65%', trend: '-15%', trendUp: true },
    ],
    chartData: [
      { name: '00:00', value1: 100, value2: 240 },
      { name: '04:00', value1: 150, value2: 300 },
      { name: '08:00', value1: 800, value2: 1200 },
      { name: '12:00', value1: 1200, value2: 2500 },
      { name: '16:00', value1: 1800, value2: 3200 },
      { name: '20:00', value1: 2100, value2: 4000 },
      { name: '24:00', value1: 1500, value2: 2800 },
    ],
    chartConfig: {
      type: 'line',
      dataKey1: 'value2',
      label1: 'Requisições Atendidas (Novo)',
      dataKey2: 'value1',
      label2: 'Requisições (Antigo)',
    },
    mermaidString: `
      graph TD
        A[Cliente] --> B[Anúncios] 
        B -->|UTMS| C[Catálogo]
        C -->|Add to Cart| D[Carrinho]
        D -->|Initiate Checkout| E{Gateway Pagamento}
        E -->|Purchase| F[Venda Aprovada!]
        E -->|Cart_failed| G[Mail Marketing]
        G -->|Cart_recovered| H[Seu Funil]
        F --> I[Data Warehouse]
    `,
    githubIntegrations: [
      { repo: 'commerce/storefront', description: 'Headless Shopify PWA ultra otimizado.', language: 'TypeScript', lastCommit: 'Há 1 hora', hash: 'c9d8e7f' },
      { repo: 'commerce/checkout-api', description: 'Motor de pagamentos Stripe.', language: 'Node.js', lastCommit: 'Há 2 dias', hash: 'x1y2z3a' }
    ]
  },
  'tagueamento-de-fluxo': {
    title: 'Tagueamento de Fluxo',
    subtitle: 'Visibilidade Total',
    description: 'Mapeamento meticuloso de eventos para rastrear cada centavo que entra na sua operação.',
    heroMetrics: [
      { label: 'Eventos Capturados', value: '100%', trend: '+15%', trendUp: true },
      { label: 'Latência do Tracking', value: '45ms', trend: '-20ms', trendUp: true },
      { label: 'Perda de Dados', value: '< 1%', trend: '-5%', trendUp: true },
    ],
    chartData: [
      { name: 'Seg', value1: 100 },
      { name: 'Ter', value1: 99 },
      { name: 'Qua', value1: 100 },
      { name: 'Qui', value1: 98 },
      { name: 'Sex', value1: 100 },
      { name: 'Sáb', value1: 99 },
      { name: 'Dom', value1: 100 },
    ],
    chartConfig: {
      type: 'bar',
      dataKey1: 'value1',
      label1: '% Correspondência de Eventos (Server-side)',
    },
    mermaidString: `
      graph LR
        A[Usuário/Navegador] --> B(Pixel Client-Side)
        A --> C(Proxy Server-Side)
        B --> D[Meta/Tiktok API]
        C --> D
        C --> E[Data Warehouse]
        D -.-> F(UTMify Dashboard)
    `,
    githubIntegrations: [
      { repo: 'tracking/server-container', description: 'GTM Server-side container automatizado no Google Cloud.', language: 'Docker', lastCommit: 'Há 1 mês', hash: 'd4c3b2a' },
      { repo: 'analytics/utmify-sync', description: 'Worker Cloudflare para sincronizar leads.', language: 'TypeScript', lastCommit: 'Há 3 semanas', hash: 'e5f6g7h' }
    ]
  },
  'cardapios-virtuais': {
    title: 'Cardápio Digital Inteligente',
    subtitle: 'Modernize seu Atendimento',
    description: 'Restaurantes com cardápio digital aumentam em 30% o ticket médio. QR Code na mesa, atualização instantânea de preços e zero custo de impressão.',
    heroMetrics: [
      { label: 'Ticket Médio', value: '+30%', trend: 'Toast/Square', trendUp: true },
      { label: 'Tempo de Pedido', value: '-40%', trend: 'Lightspeed', trendUp: true },
      { label: 'Custo Gráfico', value: 'R$ 0', trend: 'Eliminado', trendUp: true },
    ],
    chartData: [
      { name: 'Cardápio Físico', value1: 35 },
      { name: 'PDF no WhatsApp', value1: 42 },
      { name: 'Cardápio Digital', value1: 68 },
      { name: 'Digital + Fotos', value1: 89 },
    ],
    chartConfig: {
      type: 'bar',
      dataKey1: 'value1',
      label1: 'Taxa de Engajamento com o Menu (%)',
    },
    mermaidString: `
      graph TD
        A[Cliente na Mesa] --> B(QR Code Scan)
        B --> C[Cardápio Digital]
        C --> D{Escolha do Prato}
        D -->|Com Foto| E[+30% Ticket Médio]
        D -->|Sem Foto| F[Pedido Padrão]
        E --> G((Cozinha / Sistema PDV))
    `,
    githubIntegrations: [
      { repo: 'menu/digital-engine', description: 'PWA responsiva com SSG para carregamento instantâneo via QR Code.', language: 'TypeScript', lastCommit: 'Há 3 dias', hash: 'mn1u2v3' },
      { repo: 'menu/admin-panel', description: 'Painel administrativo para gerenciar itens, preços e categorias em tempo real.', language: 'TypeScript', lastCommit: 'Há 1 semana', hash: 'ap4d5e6' }
    ],
    marqueeItems: ['QR CODE', 'CARDÁPIO', 'DELIVERY', 'TICKET MÉDIO', 'PDV', 'MENU'],
    contentSections: [
      {
        headline: 'O Cardápio de Papel Está Matando seu Ticket Médio',
        content: [
          'Cardápios físicos são caros para imprimir, impossíveis de atualizar rapidamente e limitam a experiência do cliente. Sem fotos dos pratos, o cliente escolhe pelo menor preço — não pelo que mais deseja.',
          'Pesquisas da Toast e Square mostram que cardápios digitais com fotos de alta qualidade aumentam o ticket médio em até 30%. O cliente compra com os olhos antes de provar.'
        ],
        copyAction: 'Cada dia com cardápio de papel é dinheiro perdido. Com nosso cardápio digital, você atualiza preços instantaneamente e nunca mais paga gráfica.',
        chart: {
          data: [
            { name: 'Sem Foto', value1: 28 },
            { name: 'Com Foto', value1: 58 },
            { name: 'Foto + Descrição', value1: 74 },
            { name: 'Foto + Sugestão', value1: 89 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Probabilidade de Escolher Prato Premium (%)',
          }
        }
      },
      {
        headline: 'QR Code na Mesa: Do Scan ao Pedido em Segundos',
        content: [
          'O cliente senta, escaneia o QR Code e navega pelo cardápio completo no próprio celular. Sem espera por garçom, sem cardápio sujo, sem desculpa para não escolher.',
          'A navegação é fluida com categorias inteligentes, filtros por tipo de prato e destaques do dia. Tudo responsivo, rápido e sem precisar baixar app.'
        ],
        copyAction: 'Com um único QR Code você elimina a impressão de cardápios, reduz o tempo de atendimento em 40% e libera sua equipe para o que importa: servir bem.',
        chart: {
          data: [
            { name: 'Mês 1', value1: 55, value2: 55 },
            { name: 'Mês 2', value1: 55, value2: 42 },
            { name: 'Mês 3', value1: 52, value2: 35 },
            { name: 'Mês 6', value1: 50, value2: 28 },
          ],
          config: {
            type: 'line',
            dataKey1: 'value1',
            label1: 'Tempo Médio de Pedido - Físico (min)',
            dataKey2: 'value2',
            label2: 'Tempo Médio de Pedido - Digital (min)',
          }
        }
      },
      {
        headline: 'Painel Administrativo: Controle Total',
        content: [
          'Atualize preços, adicione pratos novos, destaque promoções e desative itens esgotados — tudo em tempo real, do celular ou computador. Zero dependência de designer ou gráfica.',
          'Integra com seu sistema de PDV existente. Cada mudança reflete instantaneamente no QR Code que já está na mesa do cliente.'
        ]
      },
      {
        headline: 'Resultados Reais (Dados de Mercado)',
        content: [
          'Ticket Médio: Restaurantes com cardápio digital com fotos vendem 30% mais por mesa. (Fonte: Toast Inc. / Square)',
          'Economia: Custo médio anual com impressão de cardápios para restaurante de médio porte: R$ 3.000-8.000. Com digital: R$ 0. (Fonte: Abrasel)',
          'Velocidade: Tempo de pedido cai em média 40% quando o cliente navega sozinho pelo menu digital. (Fonte: Lightspeed POS)',
          'Retenção: 70% dos clientes preferem restaurantes que oferecem menu digital com fotos. (Fonte: National Restaurant Association)'
        ]
      }
    ]
  },
  'pagamentos-globais': {
    title: 'Pagamentos Sem Fronteiras',
    subtitle: 'Infraestrutura Financeira Global',
    description: 'Aceite pagamentos em mais de 135 moedas com Stripe Connect. Split automático, marketplace, subscriptions — tudo em uma integração.',
    heroMetrics: [
      { label: 'Moedas Aceitas', value: '135+', trend: 'Stripe', trendUp: true },
      { label: 'Conversão Checkout', value: '+35%', trend: 'Baymard', trendUp: true },
      { label: 'Fraude Bloqueada', value: '99.5%', trend: 'Stripe Radar', trendUp: true },
    ],
    chartData: [
      { name: 'Checkout Redir.', value1: 28 },
      { name: 'Checkout Modal', value1: 42 },
      { name: 'Transparente', value1: 68 },
      { name: 'Stripe Elements', value1: 82 },
    ],
    chartConfig: {
      type: 'bar',
      dataKey1: 'value1',
      label1: 'Taxa de Conversão por Tipo de Checkout (%)',
    },
    mermaidString: `
      graph TD
        A[Cliente Global] --> B(Checkout Transparente)
        B --> C{Stripe Connect}
        C -->|Cartão Internacional| D[Processamento Multi-moeda]
        C -->|Pix BR| E[Liquidação Instantânea]
        D --> F[Split Automático]
        E --> F
        F --> G((Dashboard de Recebíveis))
    `,
    githubIntegrations: [
      { repo: 'payments/stripe-connect', description: 'SDK de integração Stripe Connect com split automático e onboarding de sellers.', language: 'TypeScript', lastCommit: 'Hoje', hash: 'pg1s2t3' },
      { repo: 'payments/webhook-engine', description: 'Motor de webhooks para confirmação de pagamentos e fulfillment automático.', language: 'Node.js', lastCommit: 'Há 2 dias', hash: 'wh4e5f6' }
    ],
    marqueeItems: ['STRIPE', 'MULTI-MOEDA', 'CHECKOUT', 'SPLIT', 'MARKETPLACE', 'GLOBAL'],
    contentSections: [
      {
        headline: 'Checkout Transparente: A Diferença Entre Vender e Abandonar',
        content: [
          'Segundo o Baymard Institute, 69.8% dos carrinhos de e-commerce são abandonados. O principal motivo? Processo de checkout complexo, redirecionamentos e falta de confiança.',
          'Nosso checkout transparente via Stripe Elements mantém o cliente na sua página. Sem redirecionamento, sem formulários infinitos. O resultado: +35% de conversão comparado com checkouts tradicionais.'
        ],
        copyAction: 'Cada redirecionamento no checkout custa 10-20% de conversão. Com Stripe Elements integrado nativamente, seu cliente paga sem sair da página — e você recebe em qualquer moeda.',
        chart: {
          data: [
            { name: 'Redireciona', value1: 28 },
            { name: 'Modal', value1: 42 },
            { name: 'Transparente', value1: 68 },
            { name: 'Stripe Elements', value1: 82 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Conversão por Tipo de Checkout (%)',
          }
        }
      },
      {
        headline: 'Split de Pagamentos e Marketplace',
        content: [
          'Se sua operação envolve múltiplos sellers, parceiros ou comissões, o Stripe Connect resolve. Split automático no momento do pagamento, com cada parte recebendo sua fração instantaneamente.',
          'Ideal para marketplaces, plataformas de serviço e negócios que precisam distribuir receita entre parceiros sem planilhas ou transferências manuais.'
        ],
        copyAction: 'Monte seu marketplace sem se preocupar com compliance financeiro. O Stripe Connect faz o onboarding KYC, split e repasse automático para cada seller.',
        chart: {
          data: [
            { name: 'Mês 1', value1: 15, value2: 15 },
            { name: 'Mês 3', value1: 22, value2: 45 },
            { name: 'Mês 6', value1: 28, value2: 120 },
            { name: 'Mês 12', value1: 35, value2: 280 },
          ],
          config: {
            type: 'line',
            dataKey1: 'value1',
            label1: 'Receita Manual (milhares R$)',
            dataKey2: 'value2',
            label2: 'Receita com Split Automático (milhares R$)',
          }
        }
      },
      {
        headline: 'Antifraude Inteligente com Stripe Radar',
        content: [
          'A cada R$100 em vendas online, R$5 são perdidos para fraude (LexisNexis). O Stripe Radar usa machine learning treinado com bilhões de transações para bloquear 99.5% das fraudes sem rejeitar clientes legítimos.',
          'Zero config adicional. O Radar já vem integrado e analisa cada transação em tempo real — device fingerprinting, geolocalização, padrões comportamentais e score de risco automático.'
        ]
      },
      {
        headline: 'Dados de Mercado Global',
        content: [
          'Abandono de Carrinho: 69.8% dos carrinhos são abandonados. A causa #1 é checkout complexo. (Fonte: Baymard Institute)',
          'Conversão Global: Empresas que aceitam moeda local convertem 40% mais que as que forçam USD. (Fonte: Stripe Global Payments Report)',
          'Fraude: O custo global de fraude em e-commerce ultrapassou $48 bilhões em 2023. (Fonte: Juniper Research)',
          'Mobile Payments: 72.9% das compras e-commerce serão feitas via mobile até 2025. (Fonte: Statista)'
        ]
      }
    ]
  },
  'api-pix': {
    title: 'Pix Integrado à sua Operação',
    subtitle: 'Cobranças Instantâneas',
    description: 'QR Codes dinâmicos, confirmação em tempo real via webhook e conciliação automática. Pix não é só transferência — é infraestrutura de pagamento.',
    heroMetrics: [
      { label: 'Confirmação', value: '< 3s', trend: 'BACEN', trendUp: true },
      { label: 'Adoção BR', value: '76%', trend: 'BACEN 2024', trendUp: true },
      { label: 'Custo/Transação', value: 'R$ 0', trend: 'Para receber', trendUp: true },
    ],
    chartData: [
      { name: 'Boleto', value1: 52 },
      { name: 'Cartão Créd.', value1: 78 },
      { name: 'Pix Manual', value1: 85 },
      { name: 'Pix Integrado', value1: 96 },
    ],
    chartConfig: {
      type: 'bar',
      dataKey1: 'value1',
      label1: 'Taxa de Conclusão de Pagamento (%)',
    },
    mermaidString: `
      graph TD
        A[Sistema do Cliente] --> B(API Pix tzolkin)
        B --> C[Gera QR Code Dinâmico]
        C --> D{Cliente Paga}
        D -->|Confirmação| E[Webhook Instantâneo]
        E --> F[Conciliação Automática]
        F --> G((Liberação de Produto/Serviço))
    `,
    githubIntegrations: [
      { repo: 'payments/pix-api', description: 'API REST para geração de cobranças Pix com QR Code dinâmico e webhook.', language: 'Node.js', lastCommit: 'Hoje', hash: 'px1i2x3' },
      { repo: 'payments/pix-reconciler', description: 'Motor de conciliação automática com EFÍ, Mercado Pago e bancos.', language: 'TypeScript', lastCommit: 'Há 1 dia', hash: 'rc4o5n6' }
    ],
    marqueeItems: ['PIX', 'QR CODE', 'WEBHOOK', 'INSTANTÂNEO', 'CONCILIAÇÃO', 'BACEN'],
    contentSections: [
      {
        headline: '76% dos Brasileiros Preferem Pix. Seu Sistema Aceita?',
        content: [
          'O Pix superou cartão de crédito, débito e boleto como meio de pagamento mais usado no Brasil (BACEN 2024). Se o seu sistema não aceita Pix de forma integrada, você está perdendo a maioria dos seus clientes na hora de pagar.',
          'Não estamos falando de "chave Pix no WhatsApp". Estamos falando de QR Code dinâmico gerado automaticamente, confirmação em até 3 segundos via webhook, e conciliação automática no seu sistema.'
        ],
        copyAction: 'Boleto leva 3 dias para confirmar e 48% são abandonados. Pix integrado confirma em 3 segundos e converte 96%. A matemática é simples.',
        chart: {
          data: [
            { name: 'Boleto', value1: 52 },
            { name: 'Cartão', value1: 78 },
            { name: 'Pix Manual', value1: 85 },
            { name: 'Pix API', value1: 96 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Taxa de Conclusão de Pagamento (%)',
          }
        }
      },
      {
        headline: 'QR Code Dinâmico + Webhook = Automação Total',
        content: [
          'Cada cobrança gera um QR Code único com valor, identificação e expiração configuráveis. O cliente paga, seu sistema recebe o webhook de confirmação automaticamente e libera o produto ou serviço sem intervenção humana.',
          'Funciona com EFÍ (Gerencianet), Mercado Pago, Banco do Brasil, Itaú e outros. A integração é agnóstica — mudou de banco? Troca o provider sem alterar seu código.'
        ],
        copyAction: 'Zero conferência manual. Zero planilha de "vê se caiu o Pix". O webhook chega, o sistema confirma e o cliente recebe. 100% automático.',
        chart: {
          data: [
            { name: 'Processo Manual', value1: 15, value2: 3 },
            { name: 'Semi-automático', value1: 8, value2: 5 },
            { name: 'Pix API Básico', value1: 3, value2: 12 },
            { name: 'Pix API + Webhook', value1: 0.05, value2: 50 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Tempo de Confirmação (min)',
          }
        }
      },
      {
        headline: 'Conciliação Automática: Cada Centavo Rastreado',
        content: [
          'A cada pagamento Pix, nosso motor de conciliação cruza automaticamente com a cobrança original, atualiza o status no seu sistema e registra no histórico financeiro. Adeus planilhas de conferência.',
          'Relatórios em tempo real, alertas de pagamento pendente e exportação para seu contador. Tudo integrado, tudo rastreável.'
        ]
      },
      {
        headline: 'O Pix em Números (BACEN 2024)',
        content: [
          'Adoção: 76.4% da população bancarizada brasileira já usa Pix como meio de pagamento principal. (Fonte: Banco Central do Brasil)',
          'Volume: Mais de 42 bilhões de transações Pix em 2024, movimentando R$ 17.2 trilhões. (Fonte: BACEN)',
          'Velocidade: Tempo médio de confirmação de um Pix: menos de 3 segundos, 24h por dia, 7 dias por semana. (Fonte: BACEN)',
          'Abandono de Boleto: 48% dos boletos gerados nunca são pagos. Com Pix integrado, a taxa de conclusão sobe para 96%. (Fonte: Vindi/ABECS)'
        ]
      }
    ]
  },
  'sistemas-de-mensalidade': {
    title: 'Receita Recorrente Automatizada',
    subtitle: 'Cobranças que Não Falham',
    description: 'Academias, SaaS, cursos, clubes de assinatura — qualquer negócio baseado em recorrência precisa de uma régua de cobrança que não deixa dinheiro na mesa.',
    heroMetrics: [
      { label: 'Retenção', value: '+40%', trend: 'Recurly', trendUp: true },
      { label: 'Inadimplência', value: '-60%', trend: 'Vindi', trendUp: true },
      { label: 'Churn Involuntário', value: '-80%', trend: 'Stripe Billing', trendUp: true },
    ],
    chartData: [
      { name: 'Manual', value1: 62 },
      { name: 'Boleto Rec.', value1: 71 },
      { name: 'Cartão Rec.', value1: 85 },
      { name: 'Multi-método', value1: 94 },
    ],
    chartConfig: {
      type: 'bar',
      dataKey1: 'value1',
      label1: 'Taxa de Sucesso na Cobrança Recorrente (%)',
    },
    mermaidString: `
      graph TD
        A[Assinante] --> B(Escolhe Plano)
        B --> C{Método de Pagamento}
        C -->|Cartão| D[Cobrança Automática]
        C -->|Pix| E[QR Recorrente]
        C -->|Boleto| F[Geração Automática]
        D --> G[Régua de Cobrança]
        E --> G
        F --> G
        G --> H((Dashboard de Assinaturas))
    `,
    githubIntegrations: [
      { repo: 'billing/subscription-engine', description: 'Motor de assinaturas com gestão de planos, trial, upgrade e downgrade.', language: 'TypeScript', lastCommit: 'Hoje', hash: 'sb1i2l3' },
      { repo: 'billing/dunning-worker', description: 'Worker de régua de cobrança com retry inteligente e notificações automáticas.', language: 'Node.js', lastCommit: 'Há 1 dia', hash: 'dn4u5n6' }
    ],
    marqueeItems: ['RECORRÊNCIA', 'ASSINATURA', 'CHURN', 'RETENÇÃO', 'BILLING', 'MRR'],
    contentSections: [
      {
        headline: 'Churn Involuntário: O Dinheiro que Escapa sem Você Perceber',
        content: [
          'Estudos da Recurly mostram que até 40% do churn em negócios de assinatura é involuntário — o cliente queria continuar pagando, mas o cartão expirou, o limite estourou ou o boleto ficou perdido no e-mail.',
          'Uma régua de cobrança inteligente faz retry automático no cartão, envia notificação para atualizar dados, gera Pix alternativo e escala para comunicação direta. O resultado: até 80% menos churn involuntário.'
        ],
        copyAction: 'Cada assinante perdido por falha de cobrança é receita recorrente que nunca mais volta. Nossa régua de dunning recupera automaticamente o que você perderia.',
        chart: {
          data: [
            { name: 'Sem Régua', value1: 40 },
            { name: 'Régua Básica', value1: 22 },
            { name: 'Régua + Retry', value1: 12 },
            { name: 'Régua Completa', value1: 8 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Taxa de Churn Involuntário (%)',
          }
        }
      },
      {
        headline: 'Multi-método: Cartão, Pix e Boleto em Uma Só Plataforma',
        content: [
          'Limite de conversão de um único método de pagamento: ~70%. Com múltiplos métodos (cartão + Pix + boleto), a taxa de sucesso sobe para 94%. Cada cliente paga como preferir.',
          'Se o cartão falha, o sistema automaticamente oferece Pix. Se o Pix expira, gera boleto. A régua de cobrança escala os métodos automaticamente até conseguir a receita.'
        ],
        copyAction: 'Não perca mais assinantes por limitação de método de pagamento. Ofereça cartão, Pix e boleto — o sistema escolhe automaticamente o caminho que converte.',
        chart: {
          data: [
            { name: 'Mês 1', value1: 100, value2: 100 },
            { name: 'Mês 3', value1: 78, value2: 94 },
            { name: 'Mês 6', value1: 62, value2: 89 },
            { name: 'Mês 12', value1: 48, value2: 82 },
          ],
          config: {
            type: 'line',
            dataKey1: 'value1',
            label1: 'Retenção - Método Único (%)',
            dataKey2: 'value2',
            label2: 'Retenção - Multi-método (%)',
          }
        }
      },
      {
        headline: 'Portal do Assinante: Self-Service que Reduz Suporte',
        content: [
          'Cada assinante tem acesso ao seu próprio portal: histórico de pagamentos, atualização de cartão, upgrade/downgrade de plano e cancelamento transparente. Menos tickets de suporte, mais profissionalismo.',
          'O portal é white-label — sua marca, suas cores, seu domínio. O assinante nunca vê "powered by" de terceiros.'
        ]
      },
      {
        headline: 'Economia da Recorrência (Dados de Mercado)',
        content: [
          'Churn Involuntário: 20-40% do churn total em SaaS e assinaturas é involuntário (cartão expirado, limite, falha técnica). (Fonte: Recurly / ProfitWell)',
          'Retenção é ROI: Aumentar retenção em 5% gera entre 25-95% mais lucro. Reter é mais barato que adquirir. (Fonte: Bain & Company / Harvard Business Review)',
          'Método de Pagamento: Oferecer 3+ métodos de pagamento aumenta a taxa de sucesso de cobrança recorrente de 70% para 94%. (Fonte: Vindi / ABECS)',
          'MRR Brasil: O mercado de assinaturas no Brasil cresceu 18% em 2024, com ticket médio de R$ 89/mês. (Fonte: ABComm)'
        ]
      }
    ]
  }
};
