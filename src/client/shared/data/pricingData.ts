import { PricingCardProps } from '../ui/PricingCard';

export const pricingData: PricingCardProps[] = [
  {
    title: 'Landing Pages de Conversão',
    slug: 'landing-pages-de-conversao',
    dropPrice: 'R$ 1.925',
    price: 'R$ 1.350',
    paymentText: 'Em até 3x no cartão ou PIX R$ 1050 à vista',
    description: 'Páginas exclusivas desenhadas para altíssima conversão de leads vindos de tráfego pago.',
    features: [
      'Copywriting Direto e Persuasivo',
      'Design Responsivo Exclusivo',
      'Carregamento Super Otimizado (<2s)',
      'Tagueamento Básico (GA4 e Pixels de Base)'
    ]
  },
  {
    title: 'Sites Institucionais',
    slug: 'sites-institucionais',
    dropPrice: 'R$ 6.000',
    price: 'R$ 4.000',
    paymentText: 'Em até 6x no cartão de crédito',
    description: 'O hub central da sua marca, feito para transmitir autoridade e confiança instantânea ao mercado.',
    features: [
      'Arquitetura Visual Premium e Original',
      'Multi-páginas (Sobre, Serviços, Portfólio)',
      'Painel para Gestão de Conteúdo (CMS)',
      'Otimização SEO On-page para o Google'
    ]
  },
  {
    title: 'E-commerces Globais',
    slug: 'e-commerces-globais',
    dropPrice: 'R$ 10.000',
    price: 'R$ 8.000',
    paymentText: 'Entrada de 50% + 50% na entrega',
    description: 'Estruturação avançada de lojas escaláveis de alcance global (Dropshipping ou Operação Tradicional).',
    popular: true,
    features: [
      'Tema Shopify ou Customizado via Next.js',
      'Checkout Transparente (Stripe/Yampi, etc.)',
      'Módulos de Upsell e Cross-sell Embutidos',
      'Estrutura preparada para Receber Alto Volume'
    ]
  },
  {
    title: 'Tagueamento de Fluxo',
    slug: 'tagueamento-de-fluxo',
    dropPrice: 'R$ 800',
    price: 'R$ 600',
    paymentText: 'Em até 3x no cartão de crédito',
    description: 'Mapeamento meticuloso de eventos para rastrear cada centavo que entra na sua operação.',
    features: [
      'Implementação via Google Tag Manager (GTM)',
      'Auditoria de Eventos de Conversão (Purchase, Lead)',
      'Solução de Perda de Dados (CAPI e Server-side)',
      'Sincronização 100% precisa com UTMify / Meta'
    ]
  },
  {
    title: 'Cardápios Virtuais',
    slug: 'cardapios-virtuais',
    dropPrice: 'R$ 1.800',
    price: 'R$ 1.400',
    paymentText: 'Em até 3x no cartão ou PIX R$ 1100 à vista',
    description: 'Cardápio digital interativo com QR Code, ideal para restaurantes, bares e deliveries que querem modernizar o atendimento.',
    features: [
      'Design Responsivo com Fotos dos Pratos',
      'Categorias e Filtros Inteligentes',
      'QR Code Personalizado para Mesa/Balcão',
      'Painel para Atualizar Preços e Itens'
    ]
  },
  {
    title: 'Pagamentos Globais',
    slug: 'pagamentos-globais',
    price: 'R$ 2.500',
    paymentText: 'Entrada de 50% + 50% na entrega',
    description: 'Integração completa com Stripe Connect para aceitar pagamentos em múltiplas moedas e escalar sua operação internacionalmente.',
    features: [
      'Checkout Transparente Multi-moeda (Stripe)',
      'Split de Pagamentos e Marketplace',
      'Dashboard de Recebíveis em Tempo Real',
      'Compliance PCI-DSS e Antifraude Nativo'
    ]
  },
  {
    title: 'API Pix',
    slug: 'api-pix',
    price: 'R$ 1.200',
    paymentText: 'Em até 3x no cartão de crédito',
    description: 'Fuja das taxas em território nacional. Integração direta com API Pix para cobranças instantâneas, QR Codes dinâmicos e confirmação automática de pagamento.',
    features: [
      'Taxa ZERO',
      'Geração de QR Code Pix Dinâmico',
      'Webhook de Confirmação Instantânea',
      'Conciliação Automática com seu Sistema',
      'Integração com Bancos (EFÍ, Mercado Pago, etc.)'
    ]
  },
  {
    title: 'Sistemas de Mensalidade',
    slug: 'sistemas-de-mensalidade',
    price: 'R$ 3.000',
    paymentText: 'Entrada de 50% + 50% na entrega',
    description: 'Plataforma completa de cobranças recorrentes para barbearias, academias, cursos, SaaS e qualquer negócio com assinaturas.',
    features: [
      'Cobrança Recorrente Automática (Cartão/Pix/Boleto)',
      'Gestão de Planos e Upgrades',
      'Portal do Assinante com Histórico',
      'Régua de Cobrança e Notificações Automáticas'
    ]
  }
];
