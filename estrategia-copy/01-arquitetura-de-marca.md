# 01 — Arquitetura de marca e mensagem · TZOLKIN

Documento-mãe de posicionamento. Toda a copy do site (hero, seções, páginas de serviço, pricing, footer, meta tags) deriva daqui. Textos em blocos de citação ou código são **verbatim, prontos para colar**.

Convenções: TZOLKIN sempre em maiúsculas em texto corrido · sentence case nos títulos · PT-BR como idioma padrão · termos técnicos EN consolidados permitidos (software, SaaS, white-label, IA, NaaS, PWA) · `[X]` = fato que o dono precisa preencher/validar antes de publicar.

---

## (a) Declaração de posicionamento

### Versão completa (1 frase) — uso: página institucional, apresentações, propostas comerciais

> A TZOLKIN é uma marca de software de alto padrão que atende como consultoria e assessoria, vende produtos white-label e personalizados e constrói suas próprias ferramentas e frente educacional — do desenvolvimento ao ensino, de IA a cybersecurity, web design e desenvolvimento.

### Versão curta para meta description (152 caracteres) — uso: `layout.tsx`, Open Graph, Twitter Card

> Software, consultoria e produtos digitais de alto padrão. A TZOLKIN projeta e constrói tecnologia — de IA a cybersecurity, web design e desenvolvimento.

**Decisão:** a meta description atual ("Sites, sistemas e identidade digital de alto padrão...") é boa, mas descreve uma agência de sites. A nova versão troca o substantivo-âncora: de "sites" para **"software"** e abre o território ("de IA a cybersecurity") sem prometer o que ainda não existe — ferramentas e educacional entram na versão longa e na message house, não na meta.

---

## (b) Message house

```
┌─────────────────────────────────────────────────────────────┐
│  PROMESSA CENTRAL (telhado)                                 │
│  "Software, método e sofisticação em cada linha —           │
│   de código e de entrega."                                  │
└─────────────────────────────────────────────────────────────┘
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  SERVIÇOS    │  PRODUTOS    │  FERRAMENTAS │  EDUCACIONAL │
│  consultoria │  white-label │  próprias    │  (em breve)  │
│  e assessoria│  e personal. │  (em breve)  │              │
└──────────────┴──────────────┴──────────────┴──────────────┘
┌─────────────────────────────────────────────────────────────┐
│  PROVAS (alicerce) — ver inventário abaixo                  │
└─────────────────────────────────────────────────────────────┘
```

### Telhado — promessa central (verbatim)

> **Software, método e sofisticação em cada linha — de código e de entrega.**

Uso: headline de apoio, assinatura de seções, bio de redes sociais. Funciona como expansão da tagline já existente "Sofisticação em cada linha" — mantém o patrimônio verbal e adiciona as duas pontas do negócio (engenharia + entrega).

### Pilar 1 — Serviços (consultoria e assessoria)

**Frase de valor (verbatim):**

> A TZOLKIN entra na sua operação como parceira de software: diagnóstico, arquitetura e execução de ponta a ponta — decisão técnica de alto padrão sem o custo de montar um time interno.

O que sustenta: método documentado (Discovery → Arquitetura → MVP Incremental → Otimização), páginas de serviço com fontes citadas, atendimento B2B exclusivo.

### Pilar 2 — Produtos (white-label e personalizados)

**Frase de valor (verbatim):**

> Software pronto para rodar com a sua marca — ou construído sob medida para a sua operação — com escopo, prazo e preço fechados antes de começar.

O que sustenta: catálogo com 8 produtos de preço público (R$ 1.350 a R$ 8.000) e prazo definido ("entrega em até 3 dias úteis" nas landing pages) + card "Solução personalizada — sob consulta". **A transparência de preços é a prova viva deste pilar — manter sempre.**

### Pilar 3 — Ferramentas próprias (SaaS, PWAs, NaaS — em breve)

**Frase de valor (verbatim):**

> O mesmo padrão de engenharia que a TZOLKIN entrega em projeto, em escala de produto: ferramentas próprias que nascem de problemas reais resolvidos em campo.

Regra de aplicação: ver seção (d). Nunca lidera a mensagem; sempre aparece como extensão do que já existe.

### Pilar 4 — Educacional (em breve)

**Frase de valor (verbatim):**

> O método TZOLKIN, aberto: formação técnica para quem quer construir software do mais alto padrão.

### Alicerce — inventário de provas existentes (reais hoje, sem invenção)

| Prova | Onde está | Como usar na copy |
|---|---|---|
| Portfólio com nomes reais: KidStok (rede de franquias), Instituto Vale, Mr. Fit, Zander, MegaConcursos, Embale+ e outros | `projects.ts`, seções Cases e Parcerias | "Marcas que confiam na TZOLKIN" + adicionar 1 métrica ou escopo por case `[X]` |
| Catálogo com preços públicos e prazos definidos | `pricingData.ts` | Prova de "escopo fechado" — citar verbatim no pilar Produtos |
| Método documentado em 4 etapas | `/catalogo`, MethodTOISection | Prova do pilar Serviços e da promessa "método" |
| Stack e integrações nomeadas (Stripe Connect, API Pix, Shopify, Meta CAPI, GTM server-side, Cloudflare, Vercel) | BrandsSection | Prova de profundidade técnica — sustenta o território "de IA a cybersecurity" |
| Fontes citadas nas páginas de serviço (Unbounce, Think with Google, BACEN, Forrester) | `servicesData.ts` | Maior ativo de credibilidade do site — estender a cases e parcerias |
| Fundador identificado: Gustavo Sales, sócio majoritário e cofundador | FounderSection | Prova de "quem responde pela entrega" |
| Frase proprietária "Tráfego não é solução, é amplificador" | TrafficProblemSection | Assinatura de pensamento — usar no pitch e no hero de apoio |

**Lacunas de prova (não inventar — preencher com `[X]` quando existirem):** nº de projetos entregues `[X]`, anos de operação `[X]`, nichos atendidos `[X]`, 1 métrica de resultado por case `[X]`, depoimento de cliente `[X]`.

---

## (c) Descriptor da marca (ao lado do logo / assinatura)

| # | Opção | Quando funciona |
|---|---|---|
| 1 | **TZOLKIN — Software de alto padrão** | Sempre. Cobre as 4 frentes, reivindica o território de qualidade e não envelhece quando ferramentas/educacional lançarem. |
| 2 | TZOLKIN — Marca de software | Correta, mas fria: descreve a categoria sem tomar posição dentro dela. |
| 3 | TZOLKIN — Engenharia de software, do código à operação | Forte tecnicamente, mas longa para lockup de logo e exclui a frente educacional. |

### ✅ Recomendação: opção 1 — "TZOLKIN — Software de alto padrão"

**Por quê:** o exemplo dado pelo dono já apontava para ela; "alto padrão" é o atributo que o dono repete no verbatim e que percorre toda a copy existente; "software" é a palavra que reposiciona a marca fora do guarda-chuva de agência. Curta o suficiente para lockup de logo, assinatura de e-mail e favicon de tagline.

**Usos verbatim:**

- Lockup: `TZOLKIN — Software de alto padrão`
- Assinatura de e-mail: `TZOLKIN · Software de alto padrão`
- Bio curta (redes): `Software de alto padrão: consultoria, produtos white-label e personalizados. Ferramentas próprias e educacional em breve.`
- Tagline do footer (substitui a genérica atual, ver REVISAO-COPY.md 3.2):

> Software de alto padrão — consultoria, produtos e método em cada entrega. De IA a cybersecurity, web design e desenvolvimento.

---

## (d) Regra de uso das 4 frentes — como falar de "em breve" sem vaporware

### Princípio: identidade no presente, disponibilidade no futuro

A TZOLKIN **é** (presente) uma marca de software com 4 frentes; duas delas **estarão disponíveis** (futuro) em breve. Nunca inverter isso — ou seja, nunca colocar ferramenta ou educacional como verbo principal de uma headline.

### As 6 regras

1. **Ordem fixa da mensagem.** Em qualquer peça, Serviços e Produtos vêm primeiro (existem, têm preço e prazo). Ferramentas e Educacional fecham a peça como "o que vem a seguir". Na home: hero e primeiras seções vendem o que existe; as frentes futuras aparecem depois das provas, nunca antes.

2. **Regra da adjacência (anti-vaporware central).** Só se anuncia uma ferramenta ou conteúdo educacional que **nasça de uma capacidade já entregue como serviço**. Fórmula obrigatória da copy: "nasce de `[X]` projetos reais em `[área]`". Se não houver projeto real por trás, a frente não é anunciada.

3. **Zero promessa datada.** Proibido: data de lançamento, countdown, nome de produto, lista de features, mockup apresentado como produto, preço fictício. Permitido e recomendado: status honesto — "em desenvolvimento" ou "em breve".

4. **Nenhum CTA de espera.** Toda menção a uma frente futura termina em ação possível **hoje**: entrar na lista de interesse, conversar com a TZOLKIN, ou contratar a capacidade equivalente como serviço. O visitante nunca sai com "volte depois".

5. **Blindagem de credibilidade.** Nunca usar os superlativos do marketing de lançamento ("revolucionário", "o primeiro", "definitivo") para algo que não existe. O tom é o de quem informa um roadmap, não de quem vende uma promessa.

6. **Consistência de rótulo.** Usar sempre os mesmos dois selos em todo o site: `Em breve` (tag visual) e, no máximo, `Em desenvolvimento` quando houver build real em andamento. Não criar variações ("coming soon", "novidade", "aguarde").

### Copy verbatim pronta — bloco "Ferramentas próprias" (seção ou card)

> **Ferramentas próprias — em breve**
>
> SaaS, PWAs e NaaS com a assinatura TZOLKIN. Cada ferramenta nasce de um problema real que já resolvemos em projeto — o mesmo padrão de engenharia, agora em escala de produto.
>
> CTA: **Quero entrar na lista de interesse**
> Microcopy: Sem data prometida, sem enrolação: quando estiver no ar, você é avisado.

### Copy verbatim pronta — bloco "Educacional" (seção ou card)

> **Educacional TZOLKIN — em breve**
>
> O método que usamos para construir software de alto padrão, aberto para quem quer aprender a construir. Do desenvolvimento à segurança, com o mesmo rigor de quem entrega em produção.
>
> CTA: **Quero ser avisado**
> Microcopy: Enquanto isso, o método já trabalha por você — conheça nossos serviços.

### Frase-ponte verbatim (para usar quando as duas frentes aparecem juntas, ex.: footer ou seção "O que vem a seguir")

> Serviços e produtos hoje. Ferramentas próprias e educacional em breve — construídos com o mesmo método, anunciados só quando estiverem prontos.

---

## (e) Elevator pitch — 30 segundos (PT-BR, verbatim)

> A TZOLKIN é uma marca de software de alto padrão. A gente atua de dois jeitos: como consultoria, entrando na operação do cliente para diagnosticar, arquitetar e construir — de IA a cybersecurity, web design e desenvolvimento; e como produto, com soluções white-label e personalizadas de escopo, prazo e preço fechados antes de começar. E o mesmo padrão que a gente entrega em projeto está virando ferramentas próprias — SaaS, PWAs, NaaS — e uma frente educacional. Tráfego não é solução, é amplificador: a TZOLKIN constrói o que o tráfego amplifica.

(~90 palavras ≈ 30 segundos em fala natural. A última frase aproveita o patrimônio verbal mais forte do site e reposiciona a frente de tráfego/CRO como *consequência* do software, não como negócio.)

### Versão de 10 segundos (corte curto, para bio ou abertura de reunião)

> A TZOLKIN é uma marca de software de alto padrão: consultoria e produtos white-label e personalizados hoje, ferramentas próprias e educacional em breve.

---

## Resumo de decisões (para o dono)

1. Palavra-âncora do reposicionamento: **"software"** — entra no posicionamento, na meta description e no descriptor, desalojando "sites/agência".
2. Promessa central estende a tagline existente: **"Software, método e sofisticação em cada linha — de código e de entrega"** (mantém patrimônio verbal).
3. Descriptor recomendado: **"TZOLKIN — Software de alto padrão"** (opção 1 de 3; cobre as 4 frentes e não envelhece).
4. Regra anti-vaporware: **identidade no presente, disponibilidade no futuro + regra da adjacência** (só se anuncia o que nasce de projeto real), com CTA sempre acionável hoje.
5. Blocos "em breve" de Ferramentas e Educacional entregues verbatim, com selos fixos `Em breve` / `Em desenvolvimento`.
6. Provas limitadas ao que existe no site (portfólio, preços públicos, método, integrações, fontes, fundador); lacunas marcadas com `[X]` para o dono preencher — nada inventado.
