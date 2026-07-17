import type { LegacyChartConfig, TzolkinChartDefinition } from '@/client/shared/ui/charts';

export type ServiceChartConfig = TzolkinChartDefinition | LegacyChartConfig;

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  heroMetrics: { label: string; value: string; trend?: string; trendUp?: boolean }[];
  chartData: { name: string; value1: number; value2?: number }[];
  chartConfig: ServiceChartConfig;
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
      data: Record<string, string | number | boolean>[];
      config: ServiceChartConfig;
    };
  }[];
  marqueeItems?: string[];
}

export const servicesData: Record<string, ServiceData> = {
  'landing-pages-de-conversao': {
    title: 'A máquina de conversão',
    subtitle: 'Engenharia de Performance',
    description: 'Cada segundo de carregamento custa conversões. Cada elemento mal posicionado desperdiça tráfego pago. Landing pages de alta performance são a diferença entre queimar orçamento e multiplicar ROI.',
    heroMetrics: [
      { label: 'Conversão média de landing page', value: '9,7%', trend: 'Unbounce', trendUp: true },
      { label: 'CPA (-1 s de carregamento)', value: '-20%', trend: 'Google', trendUp: true },
      { label: 'Leads/mês', value: '+220%', trend: 'HubSpot', trendUp: true },
    ],
    chartData: [
      { name: '5 s+ (Agência)', value1: 80 },
      { name: '4 s', value1: 70 },
      { name: '3 s (Média)', value1: 60 },
      { name: '2 s', value1: 50 },
      { name: '0,8 s (TZOLKIN)', value1: 40 },
    ],
    chartConfig: {
      type: 'funnel',
      dataKey1: 'value1',
      label1: 'CPA (R$)',
    },
    mermaidString: `
      graph TD
        A[Tráfego Pago] --> B(Landing page otimizada)
        B -->|Carregamento < 2 s| C{Engajamento}
        C -->|Copy persuasiva| D[Lead capturado]
        C -->|Bounce| E[Pixel de retargeting]
        D --> F((Webhook / CRM))
    `,
    githubIntegrations: [
      { repo: 'core/landing-engine', description: 'Motor de renderização estática via Next.js SSG + Edge Functions.', language: 'TypeScript', lastCommit: 'Há 2 horas', hash: 'a1b2c3d' },
      { repo: 'tracking/events-api', description: 'Sistema de hooks para disparos precisos no Meta CAPI e GTM Server-Side.', language: 'TypeScript', lastCommit: 'Ontem', hash: 'f4e5d6c' }
    ],
    marqueeItems: ['Conversão', 'Tráfego pago', 'CRO', 'Leads', 'CPA', 'ROI'],
    contentSections: [
      {
        headline: 'O abismo entre tráfego e faturamento',
        content: [
          'Você investe pesado em tráfego pago — Meta Ads, Google Ads, TikTok. O clique chega. Mas o lead não converte. O problema nunca foi o criativo ou a segmentação. O problema é para onde você manda esse tráfego.',
          'Uma página genérica converte em média 2,35% (WordStream). Uma landing page otimizada para conversão atinge 9,7% — mais de 4x a taxa de captura. Cada ponto percentual é receita direta perdida ou ganha.'
        ],
        copyAction: 'Se você gasta R$ 10.000/mês em tráfego e sua página converte 2%, você tem 200 leads. Com uma página a 9,7%, seriam 970 leads — mesmo investimento, sem um centavo a mais em ads.',
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
            label1: 'Usuários retidos (%)',
            dataKey3: 'value1',
            label3: 'Taxa de rejeição (%)',
            color: 'white',
            color3: 'muted',

          }
        }
      },
      {
        headline: 'Reduza seu CPA pela metade com engenharia',
        content: [
          'O Google já comprovou: quando o carregamento passa de 1 s para 3 s, a probabilidade de bounce sobe 32%. Isso significa que seu custo por aquisição (CPA) sobe a cada milissegundo desperdiçado.',
          'Nossas landing pages são construídas com SSG (Static Site Generation), Edge CDN e zero JavaScript desnecessário. O resultado: carregamento sub-segundo, Core Web Vitals no verde e Quality Score nas faixas mais altas dos leilões.'
        ],
        copyAction: 'Enquanto agências entregam templates de WordPress que carregam em 5 segundos, nossas páginas abrem em 0,8 s — isso reduz seu CPA em até 50% porque o Google recompensa velocidade no Quality Score.',
        chart: {
          data: [
            { name: '5 s (Agência WordPress)', value1: 80, description: 'CPA máximo. Cada segundo de lentidão aumenta o bounce em 32% e você paga caro por acessos perdidos.' },
            { name: '4 s', value1: 70, description: 'Sua parcela de conversão começa a melhorar, mas boa parte do orçamento ainda evapora.' },
            { name: '3 s', value1: 60, description: 'Tempo médio do mercado. O custo de aquisição estagna e limita a sua escala em leilões mais caros.' },
            { name: '2 s', value1: 50, description: 'O carregamento entra na faixa ideal e o Google Ads já recompensa com Quality Score melhor.' },
            { name: '0,8 s (TZOLKIN SSG)', value1: 40, description: 'Carregamento instantâneo — CPA cortado pela metade, com a página operando no teto de conversão.' },
          ],
          config: {
            type: 'funnel',
            dataKey1: 'value1',
            label1: 'Custo por aquisição (CPA) em R$',
            color: 'white',
          }
        }
      },
      {
        headline: 'A anatomia de uma página que vende',
        content: [
          'Não existe conversão por acidente. Cada elemento de uma landing page de alta performance é posicionado com critério de engenharia: headline acima da dobra, prova social visível em 0,5 s, CTA contrastante e formulário com fricção mínima.',
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
            label1: 'Impacto na conversão por elemento (%)',
            colorAxis: 'muted',
          }
        }
      },
      {
        headline: 'De lead a cliente: a jornada que paga seu investimento',
        content: [
          'Capturar o lead é só o começo. Nossas landing pages integram-se nativamente ao seu CRM via webhooks, registram UTMs no UTMify e alimentam fluxos de automação no momento da conversão.',
          'O resultado é visibilidade total do funil: você sabe de onde veio cada lead, quanto custou, qual criativo converteu e quanto tempo levou do clique à venda. Dados que transformam marketing em ciência exata.'
        ]
      },
      {
        headline: 'Seu orçamento de tráfego merece engenharia.',
        content: [
          'Cada real investido em tráfego pago merece uma infraestrutura de destino que maximize o retorno. Não adianta ter o melhor criativo se a página mata a conversão.',
          'A diferença entre uma operação de tráfego que empata e uma que escala de verdade é a engenharia por trás da landing page. É aqui que o ROI real acontece.'
        ]
      },
      {
        headline: 'Benchmarks reais de performance',
        content: [
          'Quartil superior: as landing pages desse grupo convertem acima de 15% — quase o dobro da média do mercado. (Fonte: Unbounce Conversion Benchmark Report 2024)',
          'Mobile First: 58% das conversões de landing pages já vêm de dispositivos móveis. Páginas não responsivas perdem mais da metade do tráfego. (Fonte: Statista / Google)'
        ]
      }
    ]
  },
  'sites-institucionais': {
    title: 'O faturamento por trás da marca',
    subtitle: 'Engenharia de autoridade',
    description: 'Quanto faturamento e reconhecimento sua marca perde por segundo com uma infraestrutura digital obsoleta? Engenharia web focada em ROI, velocidade e autoridade para empresas que querem liderar o próprio mercado.',
    heroMetrics: [
      { label: 'ROI de UX', value: '9.900%', trend: 'Forrester', trendUp: true },
      { label: 'Rejeição (+2 s de carregamento)', value: '+32%', trend: 'Google', trendUp: false },
      { label: 'Julgamento visual', value: '0,05 s', trend: 'ACM/CXL', trendUp: true },
    ],
    chartData: [
      { name: '1 s (base)', value1: 0 },
      { name: '3 s', value1: 32 },
      { name: '5 s', value1: 90 },
      { name: '6 s', value1: 106 },
      { name: '10 s', value1: 123 },
    ],
    chartConfig: {
      type: 'bar',
      dataKey1: 'value1',
      label1: 'Aumento da taxa de rejeição (%)',
    },
    mermaidString: `
      graph TD
        A[Tráfego Qualificado] --> B{Impressão em 0,05 s}
        B -->|Site amador| C(Fuga direta / rejeição)
        C --> D[Custo por lead explode]
        B -->|Design premium| E(Retenção ampliada)
        E --> F[Queda de atrito / confiança]
        F --> G((Aumento de LTV/ticket))
    `,
    githubIntegrations: [
      { repo: 'brand/ui-architecture', description: 'Metodologias sólidas de UI/UX ancoradas em performance e React Server Components.', language: 'TypeScript', lastCommit: 'Hoje', hash: 'e4d5c6b' },
      { repo: 'cms/authority-hub', description: 'Painel CMS focado na jornada do cliente para previsibilidade de caixa.', language: 'Node.js', lastCommit: 'Ontem', hash: 'b1a2c3d' }
    ],
    marqueeItems: ['Autoridade', 'Brand equity', 'Faturamento', 'UX/UI', 'Performance', 'SEO'],
    contentSections: [
      {
        headline: 'O custo invisível de um site obsoleto',
        content: [
          'O mercado digital é implacável. Em questão de milissegundos, um visitante decide se a sua empresa é uma autoridade no setor ou apenas mais uma opção amadora.',
          'Um site institucional deixou de ser um "cartão de visitas" — ele é um ativo central do reconhecimento da sua marca. Se a sua primeira impressão falha, todo o investimento em tráfego e marketing se transforma em perda direta de receita.'
        ],
        copyAction: 'Se o seu site demora 5 segundos para carregar, a probabilidade de rejeição aumenta 90% — e o orçamento de tráfego se perde antes de o cliente ler a sua oferta.',
        chart: {
          data: [
            { name: '1\u21923 s', value1: 32 },
            { name: '1\u21925 s', value1: 90 },
            { name: '1\u21926 s', value1: 106 },
            { name: '1\u219210 s', value1: 123 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Aumento da taxa de rejeição (%)',
          }
        }
      },
      {
        headline: 'O alicerce que escala vendas e constrói autoridade',
        content: [
          'Olhe para o seu Custo de Aquisição de Clientes (CAC). Se ele está alto e a conversão de leads está travada, o gargalo não é o seu produto, mas a percepção de valor que o seu ambiente digital transmite.',
          'Um site institucional de alta performance atua como o motor do seu faturamento. Ele unifica a jornada do cliente e transmite o prestígio necessário para elevar seu ticket médio.'
        ],
        copyAction: 'Enquanto a concorrência prende seu projeto em processos lentos, nossa engenharia incremental coloca uma máquina validada no ar em semanas — não meses —, antecipando o seu retorno financeiro.',
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
            label1: 'Padrão TZOLKIN (incremental)',
            dataKey2: 'value1',
            label2: 'Agências comuns (cascata)',
          }
        }
      },
      {
        headline: 'Engenharia de marca: design premium encontra lucratividade',
        content: [
          'Construir uma marca inesquecível exige mais do que templates prontos; exige engenharia de experiência. Aplicamos metodologias consolidadas de UX/UI para criar uma plataforma robusta e visualmente impactante.',
          'Essa base técnica ancora o reconhecimento da sua marca, posicionando a empresa como referência do segmento e justificando o preço premium dos seus serviços.'
        ],
        copyAction: 'O design institucional não é apenas para ficar bonito na tela. Ele é responsável por 45% da percepção de valor que permite à sua marca cobrar mais caro do que a concorrência.',
        chart: {
          data: [
            { name: 'Brand equity', value1: 45 },
            { name: 'Redução de fricção UX', value1: 30 },
            { name: 'SEO orgânico', value1: 15 },
            { name: 'Retenção e recorrência', value1: 10 },
          ],
          config: {
            type: 'pie',
            dataKey1: 'value1',
            label1: 'Origem do aumento de 200% no LTV (%)',
          }
        }
      },
      {
        headline: 'Transformando tráfego qualificado em previsibilidade de caixa',
        content: [
          'A união entre uma interface de alto padrão (UX/UI) e um código otimizado afeta diretamente a sua planilha de resultados. Um site que retém a atenção do usuário elimina o atrito na jornada de compra e alimenta a otimização da taxa de conversão (CRO).',
          'O impacto no seu negócio é matemático: redução do custo por lead, aumento do lifetime value (LTV) e aceleração do ciclo de vendas. Quando a sua plataforma institucional comunica excelência, o cliente confia mais, fecha contratos mais rápido e retorna com maior frequência.'
        ]
      },
      {
        headline: 'A ciência do faturamento (dados reais de mercado)',
        content: [
          'Credibilidade é dinheiro: 75% dos consumidores admitem julgar a credibilidade de uma empresa com base exclusiva no design do site dela. (Fonte: Stanford University)',
          'ROI de UX: a cada US$ 1 investido em UX, o retorno médio é de US$ 100 — ROI de 9.900%. (Fonte: Forrester Research via AWS)',
          'Métrica da velocidade: se o carregamento passa de 1 s para 3 s, a taxa de rejeição aumenta 32%. (Fonte: Think with Google)',
          'Reconhecimento instantâneo: o usuário forma uma opinião sobre o seu site em 0,05 s. (Fonte: ACM / CXL)'
        ]
      }
    ]
  },
  'e-commerces-globais': {
    title: 'E-commerce global',
    subtitle: 'Operações em larga escala',
    description: 'Estruturação de lojas para operação global, no modelo dropshipping ou tradicional: storefront headless, checkout transparente e estoque sincronizado.',
    heroMetrics: [
      { label: 'Tempo de checkout', value: '-30%', trend: '-4s', trendUp: true },
      { label: 'Uptime', value: '99.99%', trend: '', trendUp: true },
      { label: 'Abandono de carrinho', value: '65%', trend: '-15%', trendUp: true },
    ],
    chartData: [
      { name: '00:00', value1: 100, value2: 240 },
      { name: '04:00', value1: 150, value2: 300 },
      { name: '08:00', value1: 800, value2: 1200 },
      { name: '12:00', value1: 1200, value2: 2500 },
      { name: '16:00', value1: 1800, value2: 3200 },
      { name: '20:00', value1: 2100, value2: 4000 },
      { name: '23:59', value1: 1500, value2: 2800 },
    ],
    chartConfig: {
      type: 'line',
      dataKey1: 'value2',
      label1: 'Requisições atendidas (nova arquitetura)',
      dataKey2: 'value1',
      label2: 'Requisições atendidas (arquitetura anterior)',
    },
    mermaidString: `
      graph TD
        A[Cliente] --> B[Anúncios] 
        B -->|UTMs| C[Catálogo]
        C -->|add_to_cart| D[Carrinho]
        D -->|begin_checkout| E{Gateway de pagamento}
        E -->|purchase| F[Venda aprovada]
        E -->|cart_failed| G[E-mails de recuperação]
        G -->|cart_recovered| H[Seu funil]
        F --> I[Data warehouse]
    `,
    githubIntegrations: [
      { repo: 'commerce/storefront', description: 'Storefront headless para Shopify em PWA, ultra-otimizado.', language: 'TypeScript', lastCommit: 'Há 1 hora', hash: 'c9d8e7f' },
      { repo: 'commerce/checkout-api', description: 'Motor de pagamentos Stripe.', language: 'Node.js', lastCommit: 'Há 2 dias', hash: 'x1y2z3a' }
    ],
    marqueeItems: ['E-commerce', 'Checkout', 'Conversão', 'Escala', 'Global', 'Uptime'],
    contentSections: [
      {
        headline: 'O atrito que corrói o faturamento da sua loja',
        content: [
          'Segundo o Baymard Institute, 69,8% dos carrinhos de e-commerce são abandonados antes do pagamento. O motivo principal não é o preço: é o atrito. Redirecionamento para página externa, formulário longo demais, checkout que não passa confiança.',
          'Cada redirecionamento custa de 10% a 20% da conversão do checkout. Nosso checkout transparente mantém o cliente dentro da sua loja do primeiro clique à confirmação do pedido — com até 35% mais conversão em relação a checkouts tradicionais.'
        ],
        copyAction: 'Se sua loja fatura R$ 100.000 por mês com 69,8% de abandono, há mais de R$ 200.000 em carrinhos abandonados no mesmo período. Recuperar uma fração disso paga a engenharia inteira.',
        chart: {
          data: [
            { name: 'Redirecionado', value1: 28 },
            { name: 'Modal', value1: 42 },
            { name: 'Transparente', value1: 68 },
            { name: 'Stripe Elements', value1: 82 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Taxa de conversão por tipo de checkout (%)',
          }
        }
      },
      {
        headline: 'Storefront headless: a engenharia que aguenta o pico',
        content: [
          'Black Friday, lançamento, viralização: o tráfego de um e-commerce não é uma linha reta, é uma sequência de picos. Uma loja que trava no pico não perde só aquela venda — perde o cliente que não volta.',
          'Servimos o catálogo na edge, perto do cliente, com estoque sincronizado em tempo real e checkout desacoplado do storefront. A mesma arquitetura que atende a madrugada de terça-feira atende o pico das 20h de sexta — sem provisionamento manual.'
        ],
        copyAction: 'Uptime de 99,99% não é promessa de slide: é o resultado de isolar o checkout do catálogo. Se uma parte falha, a outra continua vendendo.',
        chart: {
          data: [
            { name: '00:00', value1: 100, value2: 240 },
            { name: '04:00', value1: 150, value2: 300 },
            { name: '08:00', value1: 800, value2: 1200 },
            { name: '12:00', value1: 1200, value2: 2500 },
            { name: '16:00', value1: 1800, value2: 3200 },
            { name: '20:00', value1: 2100, value2: 4000 },
            { name: '23:59', value1: 1500, value2: 2800 },
          ],
          config: {
            type: 'line',
            dataKey1: 'value2',
            label1: 'Requisições atendidas (nova arquitetura)',
            dataKey2: 'value1',
            label2: 'Requisições atendidas (arquitetura anterior)',
          }
        }
      },
      {
        headline: 'Moeda local para o cliente, conciliação para você',
        content: [
          'Empresas que exibem preços na moeda do cliente convertem 40% mais do que as que forçam dólar (Stripe Global Payments Report). Para uma loja global, moeda local não é detalhe de usabilidade — é decisão de receita.',
          'Dropshipping ou estoque próprio, estruturamos catálogo, checkout e liquidação para operação multimoeda: preço em real para o Brasil, em dólar para os Estados Unidos, em euro para a Europa — tudo na mesma loja, com pedidos unificados no mesmo back-office.'
        ],
        copyAction: 'O cliente vê o preço na moeda dele, paga como preferir e você recebe conciliado — sem planilha de câmbio e sem improviso.'
      },
      {
        headline: 'O mercado global em números',
        content: [
          'Abandono de carrinho: 69,8% dos carrinhos de e-commerce são abandonados; a principal causa é o checkout complexo. (Fonte: Baymard Institute)',
          'Moeda local: empresas que aceitam moeda local convertem 40% mais do que as que forçam USD. (Fonte: Stripe Global Payments Report)',
          'Compras pelo celular: 72,9% das compras no e-commerce serão feitas em dispositivos móveis até 2026. (Fonte: Statista)',
          'Velocidade: se o carregamento passa de 1 s para 3 s, a taxa de rejeição aumenta 32%. (Fonte: Think with Google)'
        ]
      }
    ]
  },
  'tagueamento-de-fluxo': {
    title: 'Tagueamento de fluxo',
    subtitle: 'Visibilidade total',
    description: 'Saiba de onde vem cada centavo da sua operação: mapeamos todos os eventos do fluxo, do primeiro clique à compra, com tracking server-side.',
    heroMetrics: [
      { label: 'Eventos capturados', value: '100%', trend: 'Benchmark', trendUp: true },
      { label: 'Latência do tracking', value: '45 ms', trend: '-20 ms', trendUp: true },
      { label: 'Perda de dados', value: '< 1%', trend: '-5%', trendUp: true },
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
      label1: 'Correspondência de eventos server-side (%)',
    },
    mermaidString: `
      graph LR
        A[Usuário/Navegador] --> B(Pixel client-side)
        A --> C(Proxy server-side)
        B --> D[Meta/TikTok API]
        C --> D
        C --> E[Data warehouse]
        D -.-> F(UTMify dashboard)
    `,
    githubIntegrations: [
      { repo: 'tracking/server-container', description: 'Container server-side do GTM automatizado no Google Cloud.', language: 'Dockerfile', lastCommit: 'Há 1 mês', hash: 'd4c3b2a' },
      { repo: 'analytics/utmify-sync', description: 'Cloudflare Worker que sincroniza leads com a UTMify.', language: 'TypeScript', lastCommit: 'Há 3 semanas', hash: 'e5f6a7c' }
    ],
    marqueeItems: ['Tagueamento', 'Server-side', 'Atribuição', 'CAPI', 'UTMify', 'Conversões'],
    contentSections: [
      {
        headline: 'Você paga pelo clique, mas não sabe qual clique pagou',
        content: [
          'Bloqueadores de anúncio e as restrições de cookies dos navegadores quebraram o tracking client-side. O pixel dispara no navegador do cliente — mas o navegador não deixa o evento sair. O resultado: o gerenciador de anúncios mostra menos conversões do que o seu caixa registra.',
          'Sem atribuição confiável, você escala o criativo errado, pausa o público que convertia e decide o orçamento no escuro. O problema não é a plataforma de anúncio: é a perda de dados entre o clique e a compra.'
        ],
        copyAction: 'Cada evento perdido é uma conversão que o algoritmo não aprende. Tracking server-side devolve ao pixel o que o navegador bloqueou — e a otimização volta a trabalhar com números reais.'
      },
      {
        headline: 'O evento sai do seu servidor, não do navegador',
        content: [
          'Em vez de depender do navegador do cliente, mapeamos cada evento do fluxo — page view, add to cart, begin checkout, purchase — e disparamos a partir do nosso servidor, via Meta CAPI e GTM server-side. Bloqueador de anúncio não alcança o que nasce no backend.',
          'Cada evento carrega UTMs, identificador de sessão e valor da transação, sincronizados com a UTMify e com o seu data warehouse. Latência média de 45 ms entre o evento e o disparo.'
        ],
        copyAction: 'É o fim do "o gerenciador mostra um número, o caixa mostra outro". Com correspondência server-side acima de 98% todos os dias, o painel e o extrato contam a mesma história.',
        chart: {
          data: [
            { name: 'Seg', value1: 100 },
            { name: 'Ter', value1: 99 },
            { name: 'Qua', value1: 100 },
            { name: 'Qui', value1: 98 },
            { name: 'Sex', value1: 100 },
            { name: 'Sáb', value1: 99 },
            { name: 'Dom', value1: 100 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Correspondência de eventos server-side (%)',
          }
        }
      },
      {
        headline: 'Atribuição real muda a decisão de orçamento',
        content: [
          'Quando cada venda carrega a origem exata — campanha, criativo, público, palavra-chave — o orçamento deixa de ser fé. Você corta o que não converte e escala o que traz receita, com o custo por aquisição real de cada canal na mesma tela.',
          'Do primeiro clique à compra, cada passo do fluxo vira um evento registrado: você enxerga onde o funil perde gente e onde ele gera receita. Marketing deixa de ser opinião e vira observabilidade.'
        ],
        copyAction: 'Decisão de tráfego sem dado de fluxo é aposta com orçamento. Com tagueamento de fluxo, cada real investido tem origem, caminho e retorno rastreados.'
      },
      {
        headline: 'O que o mercado já comprovou',
        content: [
          'Abandono de carrinho: 69,8% dos carrinhos são abandonados — sem eventos em cada etapa do funil, você não descobre onde esse abandono acontece. (Fonte: Baymard Institute)',
          'Conversão de landing pages: a taxa média de conversão é 9,7% e o quartil superior passa de 15%. Sem atribuição por página, você não sabe em qual grupo está. (Fonte: Unbounce Conversion Benchmark Report 2024)',
          'Velocidade: se o carregamento passa de 1 s para 3 s, a taxa de rejeição aumenta 32% — e rejeição sem tagueamento nem aparece no painel. (Fonte: Think with Google)',
          'Compras pelo celular: 72,9% das compras no e-commerce serão feitas em dispositivos móveis até 2026. Cada sessão mobile é um evento que o seu funil precisa enxergar. (Fonte: Statista)'
        ]
      }
    ]
  },
  'cardapios-virtuais': {
    title: 'Cardápio digital inteligente',
    subtitle: 'Modernize seu atendimento',
    description: 'Restaurantes com cardápio digital aumentam em 30% o ticket médio. QR Code na mesa, atualização instantânea de preços e zero custo de impressão.',
    heroMetrics: [
      { label: 'Ticket médio', value: '+30%', trend: 'Toast/Square', trendUp: true },
      { label: 'Tempo de pedido', value: '-40%', trend: 'Lightspeed', trendUp: true },
      { label: 'Custo gráfico', value: 'R$ 0', trend: 'Eliminado', trendUp: true },
    ],
    chartData: [
      { name: 'Cardápio físico', value1: 35 },
      { name: 'PDF no WhatsApp', value1: 42 },
      { name: 'Cardápio digital', value1: 68 },
      { name: 'Digital + fotos', value1: 89 },
    ],
    chartConfig: {
      type: 'bar',
      dataKey1: 'value1',
      label1: 'Taxa de engajamento com o cardápio (%)',
    },
    mermaidString: `
      graph TD
        A[Cliente na mesa] --> B(Leitura do QR Code)
        B --> C[Cardápio Digital]
        C --> D{Escolha do prato}
        D -->|Com Foto| E[+30% no ticket médio]
        D -->|Sem Foto| F[Pedido padrão]
        E --> G((Cozinha / Sistema PDV))
    `,
    githubIntegrations: [
      { repo: 'menu/digital-engine', description: 'PWA responsivo com SSG para carregamento instantâneo via QR Code.', language: 'TypeScript', lastCommit: 'Há 3 dias', hash: 'mn1u2v3' },
      { repo: 'menu/admin-panel', description: 'Painel administrativo para gerenciar itens, preços e categorias em tempo real.', language: 'TypeScript', lastCommit: 'Há 1 semana', hash: 'ap4d5e6' }
    ],
    marqueeItems: ['QR Code', 'Cardápio', 'Delivery', 'Ticket médio', 'PDV', 'Fotos'],
    contentSections: [
      {
        headline: 'O cardápio de papel está matando seu ticket médio',
        content: [
          'Cardápios físicos são caros para imprimir, lentos para atualizar e limitam a experiência do cliente. Sem fotos dos pratos, o cliente escolhe pelo menor preço — não pelo que mais deseja.',
          'Pesquisas da Toast e Square mostram que cardápios digitais com fotos de alta qualidade aumentam o ticket médio em até 30%. O cliente compra com os olhos antes de provar.'
        ],
        copyAction: 'Cada dia com cardápio de papel é dinheiro perdido. Com nosso cardápio digital, você atualiza preços na hora e nunca mais paga gráfica.',
        chart: {
          data: [
            { name: 'Sem foto', value1: 28 },
            { name: 'Com foto', value1: 58 },
            { name: 'Foto + descrição', value1: 74 },
            { name: 'Foto + sugestão', value1: 89 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Probabilidade de escolha de um prato premium (%)',
          }
        }
      },
      {
        headline: 'QR Code na mesa: da leitura ao pedido em segundos',
        content: [
          'O cliente senta, escaneia o QR Code e navega pelo cardápio completo no próprio celular. Sem esperar o garçom, sem cardápio sujo, sem atrito entre o cliente e o pedido.',
          'A navegação é fluida com categorias inteligentes, filtros por tipo de prato e destaques do dia. Responsivo e rápido, sem instalar nada no celular do cliente.'
        ],
        copyAction: 'Com um único QR Code você elimina a impressão de cardápios, reduz o tempo de pedido em 40% e libera sua equipe para o que importa: servir bem.',
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
            label1: 'Tempo médio de pedido — físico (min)',
            dataKey2: 'value2',
            label2: 'Tempo médio de pedido — digital (min)',
          }
        }
      },
      {
        headline: 'Painel administrativo: controle total',
        content: [
          'Atualize preços, adicione pratos novos, destaque promoções e desative itens esgotados — tudo em tempo real, do celular ou computador. Zero dependência de designer ou gráfica.',
          'Integra com o PDV que você já usa. Cada mudança aparece na hora no cardápio — o QR Code impresso na mesa nunca muda.'
        ]
      },
      {
        headline: 'Resultados de mercado',
        content: [
          'Ticket médio: Restaurantes com cardápio digital e fotos vendem 30% mais por mesa. (Fonte: Toast Inc. / Square)',
          'Economia: a impressão de cardápios custa R$ 3.000–8.000 por ano a um restaurante de médio porte. Com o digital: R$ 0. (Fonte: Abrasel)',
          'Velocidade: Tempo de pedido cai em média 40% quando o cliente navega sozinho pelo cardápio digital. (Fonte: Lightspeed POS)',
          'Preferência: 70% dos clientes preferem restaurantes que oferecem cardápio digital com fotos. (Fonte: National Restaurant Association)'
        ]
      }
    ]
  },
  'pagamentos-globais': {
    title: 'Pagamentos sem fronteiras',
    subtitle: 'Infraestrutura financeira global',
    description: 'Aceite pagamentos em mais de 135 moedas com Stripe Connect. Split automático, marketplace e assinaturas — tudo em uma integração.',
    heroMetrics: [
      { label: 'Moedas aceitas', value: '135+', trend: 'Stripe', trendUp: true },
      { label: 'Conversão do checkout', value: '+35%', trend: 'Baymard', trendUp: true },
      { label: 'Fraude bloqueada', value: '99.5%', trend: 'Stripe Radar', trendUp: true },
    ],
    chartData: [
      { name: 'Redirecionado', value1: 28 },
      { name: 'Modal', value1: 42 },
      { name: 'Transparente', value1: 68 },
      { name: 'Stripe Elements', value1: 82 },
    ],
    chartConfig: {
      type: 'bar',
      dataKey1: 'value1',
      label1: 'Taxa de conversão por tipo de checkout (%)',
    },
    mermaidString: `
      graph TD
        A[Cliente global] --> B(Checkout transparente)
        B --> C{Stripe Connect}
        C -->|Cartão internacional| D[Processamento multimoeda]
        C -->|Pix BR| E[Liquidação instantânea]
        D --> F[Split automático]
        E --> F
        F --> G((Dashboard de recebíveis))
    `,
    githubIntegrations: [
      { repo: 'payments/stripe-connect', description: 'SDK de integração Stripe Connect com split automático e onboarding de vendedores.', language: 'TypeScript', lastCommit: 'Hoje', hash: 'pg1s2t3' },
      { repo: 'payments/webhook-engine', description: 'Motor de webhooks para confirmação de pagamentos e fulfillment automático.', language: 'Node.js', lastCommit: 'Há 2 dias', hash: 'wh4e5f6' }
    ],
    marqueeItems: ['Stripe', 'Multimoeda', 'Checkout', 'Split', 'Marketplace', 'Global'],
    contentSections: [
      {
        headline: 'Checkout transparente: a diferença entre vender e abandonar',
        content: [
          'Segundo o Baymard Institute, 69.8% dos carrinhos de e-commerce são abandonados. O principal motivo? Processo de checkout complexo, redirecionamentos e falta de confiança.',
          'Nosso checkout transparente via Stripe Elements mantém o cliente na sua página. Sem redirecionamento, sem formulários infinitos. O resultado: +35% de conversão em relação a checkouts tradicionais.'
        ],
        copyAction: 'Cada redirecionamento no checkout custa 10-20% de conversão. Com o Stripe Elements integrado à sua página, seu cliente paga sem sair dela — e você recebe em qualquer moeda.',
        chart: {
          data: [
            { name: 'Redirecionado', value1: 28 },
            { name: 'Modal', value1: 42 },
            { name: 'Transparente', value1: 68 },
            { name: 'Stripe Elements', value1: 82 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Taxa de conversão por tipo de checkout (%)',
          }
        }
      },
      {
        headline: 'Split de pagamentos e marketplace',
        content: [
          'Se sua operação envolve múltiplos vendedores, parceiros ou comissões, o Stripe Connect resolve. Split automático no momento do pagamento, com cada parte recebendo sua fração instantaneamente.',
          'Ideal para marketplaces, plataformas de serviço e negócios que precisam distribuir receita entre parceiros sem planilhas ou transferências manuais.'
        ],
        copyAction: 'Monte seu marketplace sem se preocupar com compliance financeiro. O Stripe Connect cuida do onboarding KYC (verificação de identidade), do split e do repasse automático para cada vendedor.',
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
            label1: 'Receita manual (em milhares de R$)',
            dataKey2: 'value2',
            label2: 'Receita com split automático (em milhares de R$)',
          }
        }
      },
      {
        headline: 'Antifraude inteligente com Stripe Radar',
        content: [
          'A cada R$ 100 em vendas online, R$ 5 são perdidos para a fraude (LexisNexis). O Stripe Radar usa machine learning treinado com bilhões de transações para bloquear 99.5% das fraudes sem rejeitar clientes legítimos.',
          'Nenhuma configuração adicional. O Radar já vem integrado e analisa cada transação em tempo real — impressão digital do dispositivo (device fingerprinting), geolocalização, padrões comportamentais e score de risco automático.'
        ]
      },
      {
        headline: 'Dados de mercado global',
        content: [
          'Abandono de carrinho: 69.8% dos carrinhos são abandonados. A principal causa é o checkout complexo. (Fonte: Baymard Institute)',
          'Conversão global: empresas que aceitam moeda local convertem 40% mais do que as que forçam USD. (Fonte: Stripe Global Payments Report)',
          'Fraude: O custo global de fraude em e-commerce ultrapassou US$ 48 bilhões em 2023. (Fonte: Juniper Research)',
          'Compras pelo celular: 72.9% das compras no e-commerce serão feitas em dispositivos móveis até 2026. (Fonte: Statista)'
        ]
      }
    ]
  },
  'api-pix': {
    title: 'Pix integrado à sua operação',
    subtitle: 'Cobranças instantâneas',
    description: 'QR Codes dinâmicos, confirmação em tempo real via webhook e conciliação automática. Pix não é só transferência — é infraestrutura de pagamento.',
    heroMetrics: [
      { label: 'Confirmação', value: '< 3 s', trend: 'BACEN', trendUp: true },
      { label: 'Adoção BR', value: '76%', trend: 'BACEN 2024', trendUp: true },
      { label: 'Custo/Transação', value: 'R$ 0', trend: 'Para receber', trendUp: true },
    ],
    chartData: [
      { name: 'Boleto', value1: 52 },
      { name: 'Cartão', value1: 78 },
      { name: 'Pix Manual', value1: 85 },
      { name: 'Pix Integrado', value1: 96 },
    ],
    chartConfig: {
      type: 'bar',
      dataKey1: 'value1',
      label1: 'Taxa de conclusão de pagamento (%)',
    },
    mermaidString: `
      graph TD
        A[Sistema do cliente] --> B(API Pix TZOLKIN)
        B --> C[Gera QR Code dinâmico]
        C --> D{Cliente paga}
        D -->|Confirmação| E[Webhook instantâneo]
        E --> F[Conciliação automática]
        F --> G((Liberação de produto/serviço))
    `,
    githubIntegrations: [
      { repo: 'payments/pix-api', description: 'API REST para geração de cobranças Pix com QR Code dinâmico e webhook.', language: 'Node.js', lastCommit: 'Hoje', hash: 'px1i2x3' },
      { repo: 'payments/pix-reconciler', description: 'Motor de conciliação automática com Efí, Mercado Pago e bancos.', language: 'TypeScript', lastCommit: 'Há 1 dia', hash: 'rc4o5n6' }
    ],
    marqueeItems: ['Pix', 'QR Code', 'Webhook', 'Instantâneo', 'Conciliação', 'BACEN'],
    contentSections: [
      {
        headline: '76% dos brasileiros usam Pix como meio de pagamento principal. Seu sistema aceita?',
        content: [
          'O Pix superou cartão de crédito, débito e boleto como meio de pagamento mais usado no Brasil (BACEN 2024). Se o seu sistema não aceita Pix de forma integrada, você adiciona fricção justamente no meio de pagamento que 76% dos brasileiros usam como principal.',
          'Não estamos falando de "chave Pix no WhatsApp". Estamos falando de QR Code dinâmico gerado automaticamente, confirmação em até 3 segundos via webhook, e conciliação automática no seu sistema.'
        ],
        copyAction: 'Boleto leva 3 dias para confirmar e 48% são abandonados. Pix integrado confirma em 3 segundos e conclui 96% dos pagamentos. A matemática é simples.',
        chart: {
          data: [
            { name: 'Boleto', value1: 52 },
            { name: 'Cartão', value1: 78 },
            { name: 'Pix Manual', value1: 85 },
            { name: 'Pix integrado', value1: 96 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Taxa de conclusão de pagamento (%)',
          }
        }
      },
      {
        headline: 'QR Code dinâmico + webhook = automação total',
        content: [
          'Cada cobrança gera um QR Code único com valor, identificação e expiração configuráveis. O cliente paga, seu sistema recebe o webhook de confirmação automaticamente e libera o produto ou serviço sem intervenção humana.',
          'Funciona com Efí (antiga Gerencianet), Mercado Pago, Banco do Brasil, Itaú e outros. A integração é agnóstica — mudou de banco? Troca o provedor sem alterar seu código.'
        ],
        copyAction: 'Zero conferência manual. Zero planilha de "vê se caiu o Pix". O webhook chega, o sistema confirma e o cliente recebe. 100% automático.',
        chart: {
          data: [
            { name: 'Processo Manual', value1: 15 },
            { name: 'Semi-automático', value1: 8 },
            { name: 'API Pix básica', value1: 3 },
            { name: 'API Pix + webhook', value1: 0.05 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Tempo de confirmação (min)',
          }
        }
      },
      {
        headline: 'Conciliação automática: cada centavo rastreado',
        content: [
          'A cada pagamento Pix, nosso motor de conciliação cruza automaticamente com a cobrança original, atualiza o status no seu sistema e registra no histórico financeiro. Adeus planilhas de conferência.',
          'Relatórios em tempo real, alertas de pagamento pendente e exportação para seu contador. Tudo integrado, tudo rastreável.'
        ]
      },
      {
        headline: 'O Pix em números (BACEN 2024)',
        content: [
          'Adoção: 76,4% da população bancarizada brasileira já usa Pix como meio de pagamento principal. (Fonte: BACEN)',
          'Volume: Mais de 42 bilhões de transações Pix em 2024, movimentando R$ 17,2 trilhões. (Fonte: BACEN)',
          'Velocidade: confirmação média em menos de 3 segundos, 24h por dia, 7 dias por semana. (Fonte: BACEN)',
          'Abandono de Boleto: 48% dos boletos gerados nunca são pagos. Com Pix integrado, a taxa de conclusão sobe para 96%. (Fonte: Vindi/ABECS)'
        ]
      }
    ]
  },
  'sistemas-de-mensalidade': {
    title: 'Receita recorrente automatizada',
    subtitle: 'Cobranças que não falham',
    description: 'Academias, SaaS, cursos, clubes de assinatura — qualquer negócio baseado em recorrência precisa de uma régua de cobrança que não deixa dinheiro na mesa.',
    heroMetrics: [
      { label: 'Recuperação de receita', value: '+40%', trend: 'Recurly', trendUp: true },
      { label: 'Inadimplência', value: '-60%', trend: 'Vindi', trendUp: true },
      { label: 'Churn involuntário', value: '-80%', trend: 'Stripe Billing', trendUp: true },
    ],
    chartData: [
      { name: 'Manual', value1: 62 },
      { name: 'Boleto recorrente', value1: 71 },
      { name: 'Cartão recorrente', value1: 85 },
      { name: 'Multi-método', value1: 94 },
    ],
    chartConfig: {
      type: 'bar',
      dataKey1: 'value1',
      label1: 'Taxa de sucesso na cobrança recorrente (%)',
    },
    mermaidString: `
      graph TD
        A[Assinante] --> B(Escolhe o plano)
        B --> C{Método de pagamento}
        C -->|Cartão| D[Cobrança automática]
        C -->|Pix| E[QR Code recorrente]
        C -->|Boleto| F[Geração automática]
        D --> G[Régua de cobrança]
        E --> G
        F --> G
        G --> H((Dashboard de assinaturas))
    `,
    githubIntegrations: [
      { repo: 'billing/subscription-engine', description: 'Motor de assinaturas com gestão de planos, trial, upgrade e downgrade.', language: 'TypeScript', lastCommit: 'Hoje', hash: 'sb1i2l3' },
      { repo: 'billing/dunning-worker', description: 'Worker de régua de cobrança com retry inteligente e notificações automáticas.', language: 'Node.js', lastCommit: 'Há 1 dia', hash: 'dn4u5n6' }
    ],
    marqueeItems: ['Recorrência', 'Assinatura', 'Churn', 'Retenção', 'Cobrança', 'MRR'],
    contentSections: [
      {
        headline: 'Churn involuntário: o dinheiro que escapa sem você perceber',
        content: [
          'Estudos da Recurly mostram que até 40% do churn em negócios de assinatura é involuntário — o cliente queria continuar pagando, mas o cartão expirou, o limite foi excedido ou o boleto ficou perdido no e-mail.',
          'Uma régua de cobrança inteligente faz retry automático no cartão, envia notificação para atualizar dados, gera Pix alternativo e escala para comunicação direta. O resultado: até 80% menos churn involuntário.'
        ],
        copyAction: 'Cada assinante perdido por falha de cobrança é receita recorrente que nunca mais volta. Nossa régua de dunning (recuperação de cobranças falhas) recupera automaticamente o que você perderia.',
        chart: {
          data: [
            { name: 'Sem régua', value1: 40 },
            { name: 'Régua básica', value1: 22 },
            { name: 'Régua + retry', value1: 12 },
            { name: 'Régua completa', value1: 8 },
          ],
          config: {
            type: 'bar',
            dataKey1: 'value1',
            label1: 'Taxa de churn involuntário (%)',
          }
        }
      },
      {
        headline: 'Multi-método: cartão, Pix e boleto em uma só plataforma',
        content: [
          'Um único método de pagamento converte no máximo 70% das cobranças. Com múltiplos métodos (cartão + Pix + boleto), a taxa de sucesso sobe para 94%. Cada cliente paga como preferir.',
          'Se o cartão falha, o sistema oferece Pix. Se o Pix expira, gera boleto. A régua escala os métodos até a cobrança ser concluída.'
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
            label1: 'Retenção — método único (%)',
            dataKey2: 'value2',
            label2: 'Retenção — multi-método (%)',
          }
        }
      },
      {
        headline: 'Portal do assinante: autoatendimento que reduz o suporte',
        content: [
          'Cada assinante tem acesso ao seu próprio portal: histórico de pagamentos, atualização de cartão, upgrade/downgrade de plano e cancelamento transparente. Menos tickets de suporte, mais profissionalismo.',
          'O portal é white-label — sua marca, suas cores, seu domínio. O assinante nunca vê "powered by" de terceiros.'
        ]
      },
      {
        headline: 'Economia da recorrência (dados de mercado)',
        content: [
          'Churn involuntário: 20–40% do churn total em SaaS e assinaturas é involuntário (cartão expirado, limite, falha técnica). (Fonte: Recurly / ProfitWell)',
          'Retenção é ROI: Aumentar retenção em 5% gera entre 25–95% mais lucro. Reter é mais barato que adquirir. (Fonte: Bain & Company / Harvard Business Review)',
          'Método de pagamento: oferecer 3+ métodos de pagamento aumenta a taxa de sucesso de cobrança recorrente de 70% para 94%. (Fonte: Vindi / ABECS)',
          'MRR Brasil: O mercado de assinaturas no Brasil cresceu 18% em 2024, com ticket médio de R$ 89/mês. (Fonte: ABComm)'
        ]
      }
    ]
  }
};
