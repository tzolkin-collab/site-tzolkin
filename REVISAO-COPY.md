# Revisão de Copy — Site TZOLKIN

Revisão editorial completa (framework Seven Sweeps: Clareza → Voz → So What → Prove It → Especificidade → Emoção → Risco Zero).
Cada item traz o texto atual (verbatim), o problema e a correção sugerida. Arquivo de origem entre parênteses.

**Legenda de prioridade:** 🔴 bug/bloqueio · 🟠 impacto alto em conversão · 🟡 consistência/polimento

---

## 0. Bugs críticos (corrigir primeiro)

### 🔴 0.1 Texto inacabado visível em produção
> "Desde desenvolver seu front, soluções personalizadas de tagueamento, estrutura de pagamentos, backend, apps[...]. São infinitas possibilidades!"
— Card 4 "FLEXIBILIDADE" (`ServicesSection.tsx:43`)

O `[...]` literal vaza para o usuário. Além disso, "Desde desenvolver" é construção truncada.
**Sugestão:** "Desenvolvemos seu front, tagueamento personalizado, estrutura de pagamentos, backend, apps e o que mais a operação precisar. As possibilidades são infinitas."

### 🔴 0.2 Card "Solução Personalizada" leva a uma página 404
O card 9 de pricing (`pricingData.ts:149`) aponta para `/servicos/solucao-personalizada`, mas não existe entrada correspondente em `servicesData.ts` — a página retorna 404 (`notFound()` em `servicos/[slug]/page.tsx:26,46`).
**Correção:** criar a entrada `solucao-personalizada` em `servicesData.ts` **ou** apontar o card diretamente para `/forms` / `/catalogo`.

### 🔴 0.3 Ano desatualizado no header mobile
> "@2023 TZOLKIN." (`Header.tsx`, rodapé do overlay mobile)

Estamos em 2026 e o formato "@" está errado para copyright. O footer já usa ano dinâmico.
**Sugestão:** "© {ano} TZOLKIN." (dinâmico, igual ao `Footer.tsx`).

### 🔴 0.4 Feature copiada no produto errado
Card "Sites Institucionais" (pricing #2) lista **"Formulário Personalizado | Checkout Transparente"** — checkout não faz sentido num site institucional (provável copy-paste do card de Landing Pages).
**Sugestão:** trocar por algo como "Formulário inteligente com integração ao seu CRM".

---

## 1. Sweep de Clareza

### 🟠 1.1 Hero não diz o que a TZOLKIN faz
> Headline: "Digital / Impact" · Sub: "Com a metodologia certa para alinhar desenvolvimento, identidade e estratégia." (`LandingPage.tsx`)

Um visitante novo não entende em 3 segundos **o que** é vendido (sites? tráfego? consultoria?). A própria meta description do site resolve isso melhor que o hero.
**Sugestão:** manter o impacto visual, mas trocar a sub por algo concreto:
> "Sites, sistemas e identidade digital de alto padrão — desenvolvimento, design e estratégia sob um único método."

(ou promover parte da meta description para o hero).

### 🟠 1.2 Frase contraditória/confusa nos Cases
> "Não somos agência, nós temos a solução para o seu problema." (`LandingPage.tsx`, card "Sem enrolação")

Vírgula onde deveria haver corte; o contraste pretendido ("não somos X, somos Y") se perde.
**Sugestão:** "Não somos uma agência. Somos a solução completa para o seu problema."

### 🟡 1.3 Construção truncada nos Serviços
> "Sem nós soltos, estruturamos sua operação inteira, do zero, de forma intercontinental." (`ServicesSection.tsx`)

O trocadilho "nós soltos" é bom, mas "de forma intercontinental" é vago e improvável (ver também 4.2).
**Sugestão:** "Sem nós soltos: estruturamos sua operação inteira, do zero, de ponta a ponta."

### 🟡 1.4 Gramática
- "Nossa expertise **permite você manter** seu foco" → "**permite que você mantenha** o foco" (`ServicesSection.tsx`, card 2)
- "Nossa metodologia exclusiva de comunicação. **Com Heads de copy e estrutura profissionais.**" — fragmento + concordância → "Metodologia exclusiva de comunicação, com heads de copy e estrutura profissional dedicados." (`ServicesSection.tsx`, card 3)
- "o comportamento do **ecosistema** proposto" → "**ecossistema**" (`servicos/[slug]/page.tsx`)
- "Nenhuma arquitetura é definida baseada em instinto, **utilizamos** observabilidade..." — orações coladas → "Nenhuma arquitetura é definida por instinto: usamos observabilidade e telemetria profunda para comprovar resultados." (`servicos/[slug]/page.tsx`)

### 🟡 1.5 Pronomes sem referente
- "Enquanto **eles** empilham posts, o Método GT™ alinha funil..." → "Enquanto **agências** empilham posts..." (`MethodTOISection.tsx`)
- "**Eles** ancoram o reconhecimento da sua marca no subconsciente do cliente..." — "Eles" não tem referente claro (metodologias? plataforma?) → "Esses elementos ancoram o reconhecimento da sua marca..." (`servicesData.ts`, sites-institucionais, seção 3)

### 🟡 1.6 Rótulo de métrica truncado
> "Julgam. Visual — 0.05s" (`servicesData.ts`, sites-institucionais, métricas)

**Sugestão:** "Julgamento visual — 0,05s".

### 🟡 1.7 Fragmento como abertura de parágrafo
> "Limite de conversão de um único método de pagamento: ~70%." (`servicesData.ts`, sistemas-de-mensalidade, seção 2)

**Sugestão:** "Um único método de pagamento converte no máximo ~70% das cobranças."

---

## 2. Sweep de Voz e Tom

### 🟠 2.1 Registro oscila entre "sofisticação" e gíria
A marca se posiciona como premium ("Sofisticação em cada linha", "Engenharia de Performance", dados e fontes), mas a copy escorrega para gírias em pontos-chave:

| Trecho | Arquivo | Sugestão |
|---|---|---|
| "a gente para de testar **coisa solta**" | MethodTOISection | "a gente para de testar **ações isoladas**" (ou formalizar: "na TZOLKIN, paramos...") |
| "Aqui não criamos **gambiarras**" | BrandsSection | "Aqui não existe improviso" / "Nada de soluções remendadas" |
| "**pra** levar gente pra um lugar" | TrafficProblemSection | "para levar pessoas a um lugar" |
| "**Pra** quem a TZOLKIN faz sentido" | WhoIsItForSection | "Para quem a TZOLKIN faz sentido" |
| "sua marca está blindada e pronta **para voar**" | MethodTOISection | manter (funciona como metáfora de escala) |

"Sem enrolação" (título do case TZOLKIN) pode ficar — funciona como assinatura de personalidade **se** for a exceção, não a regra. Recomendação: fixar o registro em "direto e confiante, sem gíria".

### 🟠 2.2 Mistura PT/EN sem sistema
Hoje o inglês aparece de forma aleatória:
- Hero: **"Digital Impact"** (o texto mais importante do site) — em inglês, enquanto a tagline da marca é em PT
- Marquee: FUNNEL / STRATEGY / BACKEND / MARKETING / BRANDING
- Chat: "Powered by AI" · Founder: "Co-Founder" · Página: "Portfolio | TZOLKIN"
- Sugestão do chat: "Preciso de um **s**istema **P**ersonalizado" (capitalização errada no meio da frase)

**Recomendação de sistema:**
1. Headlines e UI chrome em PT: "Impacto Digital" (ou reescrita), "Portfólio", "Inteligência artificial • Sempre disponível", "Sócio majoritário e cofundador".
2. Termos técnicos consolidados do mercado podem ficar em EN: ROAS, MVP, checkout, tracking, server-side.
3. Corrigir "Preciso de um sistema personalizado" (`ChatWindow.tsx`, quick replies).

### 🟡 2.3 Capitalização inconsistente
O site mistura Title Case ("A Máquina de Conversão", "Cada Projeto é Único.") com sentence case ("Pronto para escalar?"). Em PT-BR, o padrão editorial é **sentence case**.
**Recomendação:** adotar sentence case em títulos: "A máquina de conversão", "Cada projeto é único. A solução também."

### 🟡 2.4 Marca
"TZOLKIN" (maiúsculas) nos textos, mas "tzolkin" (minúsculas) no título vertical da seção de cases. Padronizar para TZOLKIN em texto corrido (minúsculas só como estilização de logo).

---

## 3. Sweep "So What" (benefício)

### 🟠 3.1 Card "Presença Global" descreve tecnologia, não resultado
> "A TZOLKIN fornece estrutura de pagamentos global em parceria com a STRIPE connect."

**Sugestão:** inverter para benefício primeiro: "Venda para o mundo: estrutura de pagamentos global em parceria com a Stripe Connect — aceite 135+ moedas sem trocar de plataforma." (também corrige "STRIPE connect" → "Stripe Connect")

### 🟡 3.2 Tagline do footer é genérica — e contradiz o posicionamento
> "Criamos experiências digitais que conectam marcas a pessoas através de design estratégico e tecnologia de ponta." (`Footer.tsx`)

É o slogan de qualquer agência — e a home diz "Não somos agência".
**Sugestão:** alinhar com o posicionamento: "Sites, sistemas e identidade digital de alto padrão — método, velocidade e sofisticação em cada entrega."

### 🟡 3.3 CTA fraco
"+ Informações" (Serviços) é o CTA mais genérico possível. O restante do site usa CTAs em primeira pessoa com intenção ("Quero parar de desperdiçar verba").
**Sugestão:** "Quero estruturar minha operação" ou "Ver como funciona".

---

## 4. Sweep "Prove It" (prova)

### 🟠 4.1 "Famosa" sem prova
> "A TZOLKIN é uma empresa B2B **famosa** pelo atendimento exclusivo..." (`LandingPage.tsx`)

Superlativo não conquistado quebra credibilidade — ainda mais numa seção chamada "Cases de Sucesso".
**Sugestão:** "A TZOLKIN é uma empresa B2B reconhecida pelo atendimento exclusivo e por produtos tecnológicos de alto padrão..." — melhor ainda se seguida de uma prova (nº de projetos, anos, nichos atendidos).

### 🟠 4.2 "Intercontinental" sem evidência
"de forma intercontinental" (Serviços) é uma alegação forte sem nenhum case internacional citado. Remover (ver 1.3) ou provar.

### 🟠 4.3 Cases sem resultado nenhum
Os cards de "Cases de Sucesso" e "Grandes Parcerias" mostram apenas **logo + ano**. Nenhum número, nenhum resultado, nenhum depoimento. É a seção de prova do site — e ela não prova.
**Sugestão:** adicionar uma métrica por case, mesmo simples: "KidStok — rede de franquias atendida em X estados", "Rei da Fruta — +X% em pedidos online". Se não houver números autorizados, adicionar uma frase de escopo entregue ("e-commerce headless + tagueamento completo").

### 🟡 4.4 Overclaim no Pix
> "Se o seu sistema não aceita Pix de forma integrada, **você está perdendo a maioria dos seus clientes** na hora de pagar." (`servicesData.ts`, api-pix)

76% de adoção ≠ perder a maioria dos clientes. A fonte (BACEN) sustenta preferência, não abandono.
**Sugestão:** "Se o seu sistema não aceita Pix de forma integrada, você adiciona fricção justamente no meio de pagamento que 76% dos brasileiros preferem."

### ✅ Ponto positivo
As páginas de serviço citam fontes reais (Unbounce, Think with Google, BACEN, Forrester). Esse padrão é o maior ativo de credibilidade do site — estender a mesma disciplina às seções de cases e parcerias.

---

## 5. Sweep de Especificidade

### 🟡 5.1 "MVPs rápidos e baratos"
> "...conseguimos oferecer MVPs rápidos e baratos para você validar sua operação." (`ServicesSection.tsx`, card 2)

O site já prova que sabe ser específico ("Entrega em até 3 dias úteis" no pricing). Aplicar aqui:
**Sugestão:** "...MVPs no ar em semanas — não meses — por uma fração do custo de desenvolvimento tradicional."

### 🟡 5.2 Hero (ver 1.1) — a vagueza do hero é também falha de especificidade.

### 🟡 5.3 Mensagem de sucesso do formulário
> "Mensagem enviada com sucesso! Nossa equipe entrará em contato."

**Sugestão:** "Mensagem enviada com sucesso! Nossa equipe responde em até 1 dia útil." (cria expectativa concreta — ver também 7.2)

---

## 6. Sweep de Emoção

### ✅ Pontos fortes (manter)
- "Você paga caro pelo cliente e ainda deixa dinheiro na mesa." (`TrafficProblemSection`) — melhor headline do site: dor concreta, segunda pessoa.
- "Se você gasta R$10.000/mês em tráfego e sua página converte 2%, você tem 200 leads. Com uma página que converte de verdade, seriam 970." (`servicesData.ts`) — aritmética emocional perfeita.
- "Tráfego não é solução, é amplificador." — frase de efeito memorável.

### 🟠 6.1 Hero é o ponto mais frio do site
"Digital Impact" não evoca dor nem desejo. Todo o restante da página vende transformação (parar de desperdiçar verba, escalar, blindar marca) — o hero deveria prometer essa transformação.
**Sugestão de direção (testar A/B):** headline PT orientada a resultado, ex.: "Sua marca, pronta para converter." + sub concreta da 1.1.

### 🟡 6.2 Parágrafo do case TZOLKIN perde o gancho
"Sem enrolação" é um ótimo gancho emocional, mas o parágrafo seguinte cai em institucional ("empresa B2B famosa pelo atendimento exclusivo e produtos tecnológicos..."). Reescrever mantendo o tom do gancho: o que o cliente ganha, não o que a TZOLKIN é.

---

## 7. Sweep de Risco Zero

### 🟠 7.1 Nenhum redutor de risco perto dos CTAs principais
"Iniciar Projeto" (hero) e "Tenho Interesse" (pricing) não dizem o que acontece depois do clique. O site tem um formulário de 4 passos — diga isso.
**Sugestão:** microcopy sob o CTA do hero: "Responda 4 perguntas rápidas — retorno em até 1 dia útil." E sob "Tenho Interesse": "Sem compromisso. Escopo e valores fechados antes de começar."

### 🟡 7.2 "Consultoria Gratuita" é o melhor redutor de risco do site — e está escondido no /catalogo
Replicar a oferta de consultoria gratuita (ou "diagnóstico gratuito") perto do CTA final da home.

### 🟡 7.3 Expectativa pós-formulário
Ver 5.3 — adicionar prazo de resposta na mensagem de sucesso e, idealmente, o que acontece em seguida ("Vamos analisar seu projeto e propor um escopo fechado").

### 🟡 7.4 Garantias
Nenhuma garantia é mencionada em lugar algum. Se houver política real (ex.: suporte do 1º mês gratuito — que já existe no card de Sites Institucionais), destacá-la como redutor de risco perto do pricing, não só como feature.

---

## Resumo executivo — ordem de ataque

1. 🔴 Corrigir `apps[...]` (ServicesSection) — texto inacabado no ar.
2. 🔴 Resolver o 404 de `/servicos/solucao-personalizada`.
3. 🔴 "@2023" → © dinâmico no header mobile; remover "Checkout Transparente" do card de Sites Institucionais.
4. 🟠 Reescrever o hero (clareza + emoção + idioma) — é o maior ganho único de conversão.
5. 🟠 Adicionar prova aos cases/parcerias (métrica ou escopo por case) e remover "famosa"/"intercontinental" não comprovados.
6. 🟠 Fixar sistema de voz: registro direto sem gíria; PT como idioma padrão com lista de termos EN permitidos.
7. 🟡 Adicionar microcopy de risco zero sob os CTAs principais e prazo de resposta no formulário.
8. 🟡 Padronizar capitalização (sentence case) e marca (TZOLKIN).

**Pontos fortes a preservar:** seção "Problema do Tráfego" (inteira), transparência de preços com parcelamento, disciplina de fontes nas páginas de serviço, CTAs em primeira pessoa, frase "Tráfego não é solução, é amplificador."
