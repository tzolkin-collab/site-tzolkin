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
      'Hospedagem GRATUITA',
      'Entrega em até 3 dias úteis',
      'Hospedagem de VSL modelo VTURB nativa',
      'Página de obrigado',
      'Formulario Personalizado | Checkout Transparente',
      'Copywriting Direto e Persuasivo',
      'Design Mobile-First Exclusivo',
      'Carregamento Super Otimizado (<1s)',
      'Bônus: Tagueamento (GA4 e Pixels de Base)'
    ]
  },
  {
    title: 'Sites Institucionais',
    slug: 'sites-institucionais',
    dropPrice: 'R$ 6.000',
    price: 'R$ 4.500',
    paymentText: 'Em até 6x no cartão de crédito',
    description: 'O hub central da sua marca, feito para transmitir autoridade e confiança instantânea ao mercado.',
    features: [
      'Suporte primeiro mês gratuito',
      'Integração personalizada com CRMs',
      'Arquitetura Visual Premium e Original',
      'Multi-páginas (Sobre, Serviços, Portfólio)',
      'Painel para Gestão de Conteúdo (CMS)',
      'Formulario Personalizado | Checkout Transparente',
      'Otimização SEO On-page para o Google',
      'Bônus: Tagueamento (GA4 e Pixels de Base)'
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
      'Storefront Headless em Next.js (Velocidade Extrema)',
      'Infraestrutura Global via Edge Computing',
      'Checkout Transparente Multi-provedores',
      'Layouts Personalizados de Alta Conversão',
      'Sincronização de Estoque & Back-office',
      'Otimização de SEO para Escala Orgânica',
      'Módulos de Upsell e Order Bump Nativos',
      'Bônus: Tagueamento Completo (GA4 e Pixels)'
    ]
  },
  {
    title: 'Tagueamento de Fluxo',
    slug: 'tagueamento-de-fluxo',
    dropPrice: 'R$ 3.000',
    price: 'R$ 2.500',
    paymentText: 'Em até 3x no cartão de crédito',
    description: 'Mapeamento meticuloso de eventos para rastrear cada centavo que entra na sua operação.',
    features: [
      'Auditoria de Eventos: De ViewContent a Purchase',
      'Configuração Server-Side (GTM Cloud)',
      'Meta Conversions API (CAPI) Anti-AdBlock',
      'Tagueamento Avançado para Google e TikTok Ads',
      'Sincronização de Dados Off-line via Webhooks',
      'Redução da Perda de Atribuição em até 95%',
      'Monitoramento de Fluxo em Tempo Real',
      'Configuração Profissional UTMify / GTM'
    ]
  },
  {
    title: 'Cardápios Virtuais',
    slug: 'cardapios-virtuais',
    dropPrice: 'R$ 2.800',
    price: 'R$ 2.400',
    paymentText: 'Em até 3x no cartão ou PIX R$ 1100 à vista',
    description: 'Cardápio digital interativo com QR Code, ideal para restaurantes, bares e deliveries que querem modernizar o atendimento.',
    features: [
      'Interface PWA (Acesso Instantâneo sem Download)',
      'Fotos de Alta Qualidade e Descrições Persuasivas',
      'Gestão em Tempo Real de Preços e Disponibilidade',
      'QR Code Dinâmico com Identificação de Mesa',
      'Integração com Pedidos via WhatsApp',
      'Categorias e Filtros por Tags Intuitivas',
      'Design Premium focado em Aumentar o Ticket Médio',
      'Bônus: Treinamento de Gestão da Plataforma'
    ]
  },
  {
    title: 'Pagamentos Globais',
    slug: 'pagamentos-globais',
    price: 'R$ 2.500',
    paymentText: 'Entrada de 50% + 50% na entrega',
    description: 'Integração completa com Stripe Connect para aceitar pagamentos em múltiplas moedas e escalar sua operação internacionalmente.',
    features: [
      'Infraestrutura Stripe Connect (Alcance Global)',
      'Checkout Transparente em 135+ Moedas',
      'Split de Pagamento Automático para Parceiros',
      'Gestão de Sellers e Marketplaces Complexos',
      'Compliance PCI-DSS e Antifraude Stripe Radar',
      'Fluxo de Recorrência e Webhooks de Status',
      'Liberação de Pagamentos via API Dinâmica',
      'Bônus: Consultoria de Compliance Financeiro'
    ]
  },
  {
    title: 'API Pix',
    slug: 'api-pix',
    price: 'R$ 1.500',
    paymentText: 'Em até 3x no cartão de crédito',
    description: 'Fuja das taxas em território nacional. Integração direta com API Pix para cobranças instantâneas, QR Codes dinâmicos e confirmação automática de pagamento.',
    features: [
      'Taxa por Transação ZERO (Custo Operacional Mínimo)',
      'Geração de QR Codes Dinâmicos em Tempo Real',
      'Webhook de Confirmação com Baixa em < 3 Segundos',
      'Conciliação com Bancos (EFÍ, Itaú, BB, Inter)',
      'Automação de Liberação de Acesso Pós-Pagamento',
      'Dashboard Operacional de Vendas Instantâneas',
      'Redução de até 48% no Churn de Boletos',
      'Integração via API REST nativa'
    ]
  },
  {
    title: 'Sistemas de Mensalidade',
    slug: 'sistemas-de-mensalidade',
    price: 'R$ 3.000',
    paymentText: 'Entrada de 50% + 50% na entrega',
    description: 'Plataforma completa de cobranças recorrentes para barbearias, academias, cursos, SaaS e qualquer negócio com assinaturas.',
    features: [
      'Motor de Recorrência Multi-método (Cartão/Pix/Boleto)',
      'Régua de Cobrança Automatizada (Email/WhatsApp)',
      'Gestão Estratégica de Planos, Trials e Upgrades',
      'Portal do Assinante Self-Service White-label',
      'Recuperação de Churn Involuntário de Cartão',
      'Relatórios de Métricas Financeiras (MRR, LTV)',
      'Webhook para Sincronização de Status de Assinatura',
      'Bônus: Estratégia de Retenção de Membros'
    ]
  },
  {
    title: 'Solução Personalizada',
    slug: 'solucao-personalizada',
    price: 'Sob Consulta',
    description: 'Desenvolvimento sob medida para necessidades específicas e complexas da sua empresa.',
    features: [
      'Arquitetura de Software Escalável',
      'Integrações via API de Terceiros',
      'Painel Administrativo Customizado',
      'Suporte Técnico Dedicado',
      'Foco Total em Regras de Negócio Únicas',
      'Escalabilidade Horizontal Infinita',
      'Segurança de Dados de Nível Bancário'
    ]
  }
];
