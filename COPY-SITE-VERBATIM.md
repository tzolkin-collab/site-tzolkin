# Copy do site TZOLKIN — extração verbatim para revisão editorial

> Todos os textos visíveis ao usuário, transcritos exatamente como estão no código, organizados por página/seção na ordem em que aparecem. Cada bloco indica o arquivo de origem entre parênteses. Textos gerados dinamicamente usam `{placeholders}`.

---

## 0. Metadata global (SEO / compartilhamento)

(src/app/layout.tsx)
- Title: `TZOLKIN | Sofisticação em cada linha`
- Description: `Sites, sistemas e identidade digital de alto padrão. A TZOLKIN une desenvolvimento, design e estratégia para empresas que levam presença digital a sério.`
- OpenGraph title: `TZOLKIN | Sofisticação em cada linha`
- OpenGraph description: `Sites, sistemas e identidade digital de alto padrão. Desenvolvimento, design e estratégia para empresas que levam presença digital a sério.`
- OpenGraph siteName: `TZOLKIN` · locale `pt_BR` · alt da imagem: `TZOLKIN Logo`
- Twitter title/description: iguais ao OpenGraph
- Keywords: `desenvolvimento web`, `sites`, `sistemas`, `branding`, `identidade visual`, `tráfego pago`, `design`, `TZOLKIN`, `tecnologia`

---

# 1. LANDING PAGE (/) — ordem das seções

## 1.1 Header (fixo, aparece em todas as páginas)

(src/client/shared/ui/Header.tsx)
- Logo: `TZOLKIN`
- Menu (desktop e mobile): `Cases` · `Institucional` · `Serviços` · `Contato`
- aria-label botão menu mobile: `Alternar menu`
- Rodapé do overlay mobile: `@2023 TZOLKIN.`

(src/client/shared/ui/ModeToggle.tsx)
- Texto screen-reader: `Alternar tema`

## 1.2 Hero

(src/client/pages/home/LandingPage.tsx)
- Headline (2 linhas gigantes): `Digital` / `Impact`
- Subheadline: `Com a metodologia certa para alinhar desenvolvimento, identidade e estratégia.`
- CTA: `Iniciar Projeto`

## 1.3 Marquee (faixa de palavras)

(src/client/pages/home/LandingPage.tsx — MARQUEE_ITEMS)
- `FUNNEL` · `STRATEGY` · `BACKEND` · `MARKETING` · `BRANDING` (lista repetida 2×)

## 1.4 Seção Cases de Sucesso + carrossel

(src/client/pages/home/LandingPage.tsx)
- Título lateral (quebrado em linhas): `CASES` / `DE` / `SUCESSO` / `tzolkin`
- Card central — link: `TZOLKIN`
- Card central — título: `Sem enrolação`
- Card central — parágrafo: `A TZOLKIN é uma empresa B2B famosa pelo atendimento exclusivo e produtos tecnológicos de alto padrão, também pela atualização de sistemas legados e desenvolvimento de novos canais de vendas para empresas de todos os nichos. Não somos agência, nós temos a solução para o seu problema.`

(src/client/shared/ui/PortfolioCarousel.tsx + src/client/shared/data/projects.ts)
- Cards do carrossel (categoria `case`): nome + ano. Alt das imagens: `Logo de {nome}`.
- Cases exibidos: `KidStok` (2024) · `Butikim da Kelly` (2024) · `Haylander` (2024) · `Motel Queen` (2024) · `Rei Da Fruta` (2024)
- (O projeto `Hotel Metrópole` está comentado no código e não aparece.)

## 1.5 Grandes Parcerias

(src/client/shared/ui/MajorPartnerships.tsx)
- Headline: `Grandes` / `Parcerias`
- Subheadline: `Mais que referências de mercado, são empresas que confiaram em nossa estrutura para escalar seus negócios.`
- Selo sob cada card: `Parceria Estratégica • {ano}`
- Alt das imagens: `Logo {nome}`

(src/client/shared/data/projects.ts — categoria `partnership`)
- `Instituto Vale` (2024) · `Embale+` (2024) · `MegaConcursos` (2024) · `Mr. Fit` (2024) · `Zander` (2024)

## 1.6 Serviços ("Você tem a ideia…")

(src/client/shared/ui/ServicesSection.tsx)
- Headline: `Você tem a ideia,` / `a TZOLKIN faz` / `acontecer`
- Subheadline: `Sem nós soltos, estruturamos sua operação inteira, do zero, de forma intercontinental.`

Card 1:
- Título: `PRESENÇA GLOBAL`
- Subtítulo: `A TZOLKIN fornece estrutura de pagamentos global em parceria com a STRIPE connect.`
- Descrição: `Dropshipping, E-commerce, SAAS, Info-produtos. Também fazemos integrações de pagamento com gateways terceiros dependendo da preferência do cliente.`

Card 2:
- Título: `CANAIS DE VENDAS`
- Subtítulo: `Somos especialistas em resposta direta. Com nossa metodologia de growth e escala, conseguimos oferecer MVPs rápidos e baratos para você validar sua operação.`
- Descrição: `Nossa expertise permite você manter seu foco 100% nas suas responsabilidades enquanto nós sofisticamos sua estrutura visando CONVERSÕES!`

Card 3:
- Título: `BRANDING SOB MEDIDA`
- Subtítulo: `Nossa metodologia exclusiva de comunicação. Com Heads de copy e estrutura profissionais.`
- Descrição: `UX e UI no ponto exato que seu lead gostaria. Nosso foco é o 80/20 da sua operação, desde o MVP até a produção. Tudo para você ter um produto que causa desejo no seu cliente e estar sempre à frente da competição.`

Card 4:
- Título: `FLEXIBILIDADE`
- Subtítulo: `Nós adaptamos seu negócio para a internet! Nosso foco é no resultado.`
- Descrição: `Desde desenvolver seu front, soluções personalizadas de tagueamento, estrutura de pagamentos, backend, apps[...]. São infinitas possibilidades!`

- CTA da seção: `+ Informações`

## 1.7 Método GT™

(src/client/shared/ui/MethodTOISection.tsx)
- Headline: `Na TZOLKIN, a gente para de testar coisa solta e organiza sua marca com método & velocidade`
- Título do método: `Método GT™`
- Parágrafo: `Enquanto eles empilham posts, o Método GT™ alinha funil, estrutura e recorrência.`
- CTA: `Quero aplicar o Método GT™`

Cards numerados:
- `01` `VOLUME & TESTE` — tag `Análise` — `Através de um tracking inteligente, coletamos as métricas exatas do seu público-alvo inicial.`
- `02` `SOFISTICAÇÃO` — tag `Estrutura` — `Com clareza absoluta do seu público-alvo, te ajudamos a sofisticar sua estrutura. Você gasta bem menos do que gastaria testando no escuro.`
- `03` `ESCALA & OFERTA` — tag `Escala` — `Sua marca está blindada e pronta para voar. Estruturamos ofertas agressivas e impulsionamos o negócio respeitando a visão do seu lead, com estabilidade.`

## 1.8 Problema do Tráfego

(src/client/shared/ui/TrafficProblemSection.tsx)
- Badge: `Atenção ao desperdício`
- Headline: `Você paga caro pelo cliente e ainda deixa dinheiro na mesa.`
- Subheadline: `Você compra clique, compra visualização, compra lead… mas se a marca não estiver clara, posicionada e preparada, a maioria entra, olha rápido e vai embora.`

Cards de problema:
- `Você impulsiona post, roda campanha, vê o número subir, mas o faturamento não acompanha o investimento em mídia.`
- `O cliente até chega, mas não entende rápido quem você é, o que entrega e por que vale o preço.`
- `Na prática, você está pagando pra levar gente pra um lugar que ainda não está pronto pra converter.`

Bloco de conclusão:
- `Tráfego não é solução, é amplificador.`
- `Se a marca está confusa, você só amplia a confusão.`

- CTA: `Quero parar de desperdiçar verba`

## 1.9 Integrações ("Brands")

(src/client/shared/ui/BrandsSection.tsx)
- Headline: `Sua operação conectada a uma rede ágil de integrações.`
- Parágrafos:
  - `Aqui não criamos gambiarras. A TZOLKIN constrói pipelines robustos integrando ferramentas líderes que você já usa ou precisará no futuro.`
  - `O objetivo é claro: tornar seu ecossistema fluido, rastreável e totalmente voltado para conversão e controle de dados.`
- CTA: `Centralizar minha operação`
- Grid de integrações: `META` · `UTMIFY` · `GOOGLE` · `TIKTOK` · `STRIPE` · `SHOPIFY` · `API DO PIX` · `API NFE` · `IDERIS` · `VERCEL` · `CLOUDFLARE`
- Card extra: `+ Microsserviços`

Modal "Microsserviços":
- Título: `Microsserviços`
- Texto: `Desenvolvemos integrações via Webhooks, mensageria (Redis pub/sub, RabbitMQ), automações assíncronas e muito mais para garantir um trânsito de dados perfeito, sem travamentos de thread na sua aplicação principal.`
- Bullets: `Filas assíncronas` · `Arquitetura orientada a eventos` · `Sincronização em tempo real entre a loja e o back-office`
- Botão: `Entendi` · aria-label fechar: `Fechar`

## 1.10 Founder / Institucional

(src/client/shared/ui/FounderSection.tsx)
- Headline: `Quem puxa o movimento da TZOLKIN.`
- Parágrafos:
  - `Não acreditamos em fórmulas mágicas ou gurus de palco. Acreditamos em trabalho duro, estratégia fundamentada e execução impecável.`
  - `Nossa missão é garantir que cada projeto que sai da TZOLKIN não seja apenas "bonito", mas uma ferramenta poderosa de crescimento para o seu negócio.`
  - `Unimos a criatividade do design com a precisão dos dados para criar marcas que não apenas sobrevivem, mas lideram seus mercados.`
- Citação: `"Design sem estratégia é arte. Design com estratégia é negócio."`
- Assinatura: `Gustavo Sales | Sócio Majoritário & Co-Founder`
- CTA: `Conversar com a TZOLKIN`

## 1.11 Logo Marquee (logos de clientes)

(src/client/shared/ui/LogoMarquee.tsx + src/client/shared/data/brands.ts)
- Sem texto visível além dos logos; alt = nome da marca: `Butikim da Kelly` · `Motel Queen` · `Vale` · `Hotel Metrópole` · `Mega` · `Kid Stok` · `Mr. Fit` · `Rei da Fruta` · `Embale+` · `Haylander` · `Zander`

## 1.12 Pricing / Produtos

(src/client/shared/ui/PricingSection.tsx)
- Badge: `Transparência TZOLKIN`
- Headline: `Produtos Exclusivos,` / `valores claros.`
- Subheadline: `Valores fechados por escopo, sem surpresa na fatura.`

(src/client/shared/ui/PricingCard.tsx)
- Badge de destaque: `Mais Procurado`
- Label de preço: `A partir de`
- CTA de cada card: `Tenho Interesse`

(src/client/shared/data/pricingData.ts — os 9 cards)

Card 1 — `Landing Pages de Conversão`
- Preço: de `R$ 1.925` por `R$ 1.350` — `Em até 3x no cartão ou PIX R$ 1.050 à vista`
- Descrição: `Páginas exclusivas desenhadas para altíssima conversão de leads vindos de tráfego pago.`
- Features: `Hospedagem GRATUITA` · `Entrega em até 3 dias úteis` · `Hospedagem de VSL modelo VTURB nativa` · `Página de obrigado` · `Formulário Personalizado | Checkout Transparente` · `Copywriting Direto e Persuasivo` · `Design Mobile-First Exclusivo` · `Carregamento Super Otimizado (<1s)` · `Bônus: Tagueamento (GA4 e Pixels de Base)`

Card 2 — `Sites Institucionais`
- Preço: de `R$ 6.000` por `R$ 4.500` — `Em até 6x no cartão de crédito`
- Descrição: `O hub central da sua marca, feito para transmitir autoridade e confiança instantânea ao mercado.`
- Features: `Suporte primeiro mês gratuito` · `Integração personalizada com CRMs` · `Arquitetura Visual Premium e Original` · `Multi-páginas (Sobre, Serviços, Portfólio)` · `Painel para Gestão de Conteúdo (CMS)` · `Formulário Personalizado | Checkout Transparente` · `Otimização SEO On-page para o Google` · `Bônus: Tagueamento (GA4 e Pixels de Base)`

Card 3 — `E-commerces Globais` (badge `Mais Procurado`)
- Preço: de `R$ 10.000` por `R$ 8.000` — `Entrada de 50% + 50% na entrega`
- Descrição: `Estruturação avançada de lojas escaláveis de alcance global (Dropshipping ou Operação Tradicional).`
- Features: `Storefront Headless em Next.js (Velocidade Extrema)` · `Infraestrutura Global via Edge Computing` · `Checkout Transparente Multi-provedores` · `Layouts Personalizados de Alta Conversão` · `Sincronização de Estoque & Back-office` · `Otimização de SEO para Escala Orgânica` · `Módulos de Upsell e Order Bump Nativos` · `Bônus: Tagueamento Completo (GA4 e Pixels)`
