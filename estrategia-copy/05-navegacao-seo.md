# 05 — Navegação, SEO e metadata

Escopo: arquitetura de navegação (header + footer), metadata verbatim da home e das páginas novas, mapa de CTAs da home e recomendação de URLs.
Fontes lidas: `REVISAO-COPY.md`, `Header.tsx`, `Footer.tsx`, `LandingPage.tsx`, `src/app/layout.tsx`, `PricingSection.tsx`, `PricingCard.tsx`, seções de `src/client/shared/ui/`, `pricingData.ts` e rotas de `src/app/`.

---

## 0. Decisões-chave (resumo)

1. **Menu plano de 6 itens + CTA destacado**: as 4 frentes da marca (Serviços, Produtos, Ferramentas, Educacional) entram no header; Ferramentas e Educacional levam selo "Em breve" — a navegação passa a vender a marca de software inteira, não só a vitrine de serviços.
2. **Um único destino de conversão: `/forms`** — com parâmetro `?interesse=` para identificar a frente. Âncora `#contact` deixa de ser destino de CTA (hoje dois CTAs levam ao footer, que não converte).
3. **Ferramentas e Educacional viram páginas "em breve" com lista de espera** (`/ferramentas`, `/educacional`) — capturam demanda hoje sem prometer produto que não existe.
4. **`/catalogo` sobrevive, reposicionado como "Capacidades"** — e a oferta de consultoria gratuita escondida nele sobe para a home como redutor de risco.
5. **Title novo: `TZOLKIN | Software de alto padrão`** (33 caracteres) — a tagline "Sofisticação em cada linha" sai do title e volta como assinatura de marca no corpo do site.

---

## 1. Arquitetura de navegação

### 1.1 Menu principal (header desktop)

Substituir o array `menuItems` em `Header.tsx` (hoje: Cases / Institucional / Serviços / Contato) por:

| # | Rótulo (verbatim) | Destino | Observação |
|---|---|---|---|
| 1 | Serviços | `/#services` | Frente 1 — consultoria e assessoria. Âncora já existe (`ServicesSection`). |
| 2 | Produtos | `/#products` | Frente 2 — white-label e personalizados. Âncora já existe (`PricingSection` usa `id="products"`). |
| 3 | Ferramentas | `/ferramentas` | Frente 3 — SaaS, PWAs, NaaS. Página nova. Leva selo `Em breve` ao lado do rótulo. |
| 4 | Educacional | `/educacional` | Frente 4 — cursos e formações. Página nova. Leva selo `Em breve`. |
| 5 | Cases | `/#cases` | Prova. Âncora já existe. |
| 6 | Institucional | `/#about` | Âncora já existe (`FounderSection`). |
| — | **Iniciar projeto** (botão) | `/forms` | CTA destacado à direita, antes do `ModeToggle`. Estilo: mesmo botão pill do hero. |

Selo "Em breve" (verbatim, para o componente): `Em breve` — badge pequeno, `text-[10px]`, cor `brand`, ao lado do rótulo, no desktop e no mobile.

Notas de implementação:
- Os rótulos ficam em sentence case no código; o CSS já aplica `uppercase` visual — manter assim.
- Se 6 itens + botão ficarem apertados em telas médias, a alternativa é agrupar "Cases" e "Institucional" sob um item "A TZOLKIN" com dropdown. **Não recomendo dropdown agora**: menu plano é mais direto e a marca precisa que as 4 frentes sejam vistas.
- 🔴 Corrigir junto (bug já mapeado na revisão): rodapé do overlay mobile `@2023 TZOLKIN.` → `© {ano} TZOLKIN.` com ano dinâmico, igual ao `Footer.tsx`.

### 1.2 Menu mobile (overlay)

Mesma ordem do desktop, com dois acréscimos ao final da lista:

```
Serviços
Produtos
Ferramentas · Em breve
Educacional · Em breve
Cases
Institucional
Contato → /forms
```

E, abaixo da lista, o CTA pill `Iniciar projeto` → `/forms`.

### 1.3 Footer

Hoje o footer tem 3 links (Sobre / Serviços / Contato) e uma tagline genérica de agência — que contradiz o "Não somos agência" da home. Estrutura nova em 4 colunas:

**Coluna 1 — Marca (ocupa a metade esquerda, como hoje)**

Tagline nova (verbatim, substitui "Criamos experiências digitais que conectam marcas a pessoas..."):

> Software de alto padrão: consultoria, produtos sob medida e ferramentas próprias — método e sofisticação em cada linha, de código e de entrega.

CTA grande (manter como está — funciona): `Vamos conversar?` → `/forms`

**Coluna 2 — Frentes**

| Rótulo | Destino |
|---|---|
| Serviços | `/#services` |
| Produtos | `/#products` |
| Ferramentas `Em breve` | `/ferramentas` |
| Educacional `Em breve` | `/educacional` |

**Coluna 3 — A TZOLKIN**

| Rótulo | Destino |
|---|---|
| Quem somos | `/#about` |
| Cases | `/#cases` |
| Capacidades | `/catalogo` |
| Portfólio | `/portfolio` |

**Coluna 4 — Contato**

| Rótulo | Destino |
|---|---|
| Iniciar projeto | `/forms` |
| Consultor virtual | `/consultor` |
| [contato@tzolkin.com.br] | `mailto:` |
| [WhatsApp] | `[link wa.me]` |
| [Instagram] · [LinkedIn] | `[URLs]` |

**Barra inferior (verbatim):**

```
© {ano} TZOLKIN. Todos os direitos reservados.   ·   [Política de privacidade]   ·   [Termos de uso]
```

Ano dinâmico (já implementado). Links legais são placeholders até as páginas existirem.

---

## 2. Metadata da home — verbatim, pronta para colar

Substitui o bloco `metadata` em `src/app/layout.tsx`. Title com **33 caracteres** (limite ideal: 60), description com ~155 caracteres, tudo PT-BR, marca TZOLKIN em maiúsculas.

```tsx
export const metadata: Metadata = {
  title: {
    default: "TZOLKIN | Software de alto padrão",
    template: "%s | TZOLKIN",
  },
  description:
    "Software de alto padrão: consultoria, produtos white-label e sob medida, e ferramentas próprias — de IA a cybersecurity, do desenvolvimento ao educacional.",
  openGraph: {
    title: "TZOLKIN | Software de alto padrão",
    description:
      "Consultoria, produtos white-label e sob medida, e ferramentas próprias — de IA a cybersecurity, do desenvolvimento ao educacional.",
    siteName: "TZOLKIN",
    images: [
      {
        url: "/og-image.jpg",   // [criar imagem dedicada 1200×630 — ver 2.2]
        width: 1200,
        height: 630,
        alt: "TZOLKIN — Software de alto padrão",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TZOLKIN | Software de alto padrão",
    description:
      "Consultoria, produtos white-label e sob medida, e ferramentas próprias — de IA a cybersecurity, do desenvolvimento ao educacional.",
    images: ["/og-image.jpg"],
  },
  keywords: [
    "software",
    "software house",
    "consultoria de software",
    "desenvolvimento de software",
    "white-label",
    "SaaS",
    "inteligência artificial",
    "cybersecurity",
    "web design",
    "TZOLKIN",
  ],
  authors: [{ name: "TZOLKIN" }],
};
```

(Manter o bloco `icons` atual — está correto.)

### 2.1 Alternativas de title testadas (todas ≤ 60 chars)

| Opção | Chars | Quando usar |
|---|---|---|
| `TZOLKIN \| Software de alto padrão` | 33 | **Recomendada.** Categoria + padrão; curta, premium. |
| `TZOLKIN \| Consultoria e software de alto padrão` | 47 | Se quiser a frente de serviços já no title. |
| `TZOLKIN \| Sofisticação em cada linha de código` | 46 | Se o dono preferir manter a tagline no title (já diz "código", ancorando em software). |

Regra do `template`: as páginas internas passam a exportar só o nome próprio — `title: "Capacidades"` renderiza `Capacidades | TZOLKIN`. Corrige de graça o `Portfolio | TZOLKIN` (inglês) → passa a ser `Portfólio`.

### 2.2 Imagem OG

Hoje o OG usa `/logotzolkin.svg` (800×600) — logo solto, sem mensagem, proporção errada. Criar `/public/og-image.jpg` (1200×630) com:

- Fundo na cor de fundo da marca, logo TZOLKIN e a linha (verbatim): `Software de alto padrão`
- Sem texto pequeno — OG é lido em miniatura.

### 2.3 Dados estruturados (JSON-LD) — adicionar ao `<body>` do root layout

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TZOLKIN",
  "url": "[https://www.tzolkin.com.br]",
  "logo": "[https://www.tzolkin.com.br]/logotzolkin.svg",
  "description": "Marca de software de alto padrão: consultoria, produtos white-label e sob medida, e ferramentas próprias — de IA a cybersecurity, do desenvolvimento ao educacional.",
  "sameAs": ["[URL Instagram]", "[URL LinkedIn]"]
}
</script>
```

### 2.4 Metadata das páginas novas (verbatim)

**`src/app/ferramentas/layout.tsx`:**

```tsx
export const metadata = {
  title: "Ferramentas",
  description:
    "SaaS, PWAs e NaaS desenvolvidos pela TZOLKIN com o mesmo padrão dos projetos sob medida. Em breve — entre na lista de espera.",
};
```

**`src/app/educacional/layout.tsx`:**

```tsx
export const metadata = {
  title: "Educacional",
  description:
    "Cursos e formações em desenvolvimento, IA, cybersecurity e web design, do básico ao alto padrão. Em breve — garanta seu lugar na primeira turma.",
};
```

**Ajuste no `/catalogo` (reposicionamento — ver 4.2):**

```tsx
export const metadata = {
  title: "Capacidades",
  description:
    "Capacidades, metodologia e integrações da TZOLKIN: software sob medida, pagamentos, tagueamento e automações de alto padrão.",
};
```

---

## 3. Mapa de CTAs da home

### 3.1 Regras de destino (a lógica por trás do mapa)

1. **`/forms` é o único destino de conversão de serviço.** Consultoria, assessoria, método, orçamento — tudo chega lá, com `?interesse=` identificando a frente (ver 3.4).
2. **Produtos passam primeiro pela página de detalhe** (`/servicos/[slug]`) — transparência de preços é um ativo do site, não pular etapa. A página de detalhe é que empurra para `/forms`.
3. **Ferramentas e Educacional vão para lista de espera**, não para `/forms` — quem quer um SaaS que ainda não existe não deve cair num formulário de projeto. Fallback: `?interesse=ferramentas|educacional` enquanto a lista não está implementada.
4. **`#contact` (footer) deixa de ser destino de CTA.** Hoje "Quero aplicar o Método GT™" e "Centralizar minha operação" rolam a página até o footer — que só tem outro link para `/forms`. É um CTA que leva a um CTA. Todos passam a ir direto ao formulário.
5. Âncoras (`/#cases`, `/#services`...) são só para navegação de menu, nunca para CTA de conversão.

### 3.2 Mapa completo — seção por seção

| Seção | CTA atual → destino atual | CTA novo (verbatim) → destino novo | Mudança |
|---|---|---|---|
| Hero | "Iniciar Projeto" → `/forms` | **Quero iniciar meu projeto** → `/forms?interesse=consultoria` | Rótulo em primeira pessoa (padrão do site) + microcopy abaixo (ver 3.3) |
| Card central de Cases | "TZOLKIN →" → `/portfolio` | **Ver portfólio completo** → `/portfolio` | Rótulo diz o que há do outro lado |
| Serviços | "+ Informações" → `/catalogo` | **Quero estruturar minha operação** → `/forms?interesse=consultoria` · link secundário **Ver capacidades completas** → `/catalogo` | CTA principal converte; o catálogo vira aprofundamento |
| Ferramentas (bloco novo) | — não existe | **Entrar na lista de espera** → `/ferramentas#lista-de-espera` | Novo. Microcopy: `Sem spam. Um único e-mail quando cada ferramenta abrir.` |
| Educacional (bloco novo) | — não existe | **Quero entrar na lista de espera** → `/educacional#lista-de-espera` | Novo |
| Método TOI | "Quero aplicar o Método GT™" → `#contact` | **Quero aplicar o Método GT™** → `/forms?interesse=metodo` | Só o destino muda — rótulo é dos bons |
| Problema do Tráfego | "Quero parar de desperdiçar verba" → `/forms` | **manter** → `/forms?interesse=consultoria` | Manter — melhor CTA do site |
| Brands (centralização) | "Centralizar minha operação" → `#contact` | **Centralizar minha operação** → `/forms?interesse=consultoria` | Só o destino muda |
| Founder | "Conversar com a TZOLKIN" → `/forms` | **manter** → `/forms?interesse=consultoria` | Manter |
| Cards de pricing | "Tenho Interesse" → `/servicos/[slug]` | **Tenho interesse** (sentence case) → `/servicos/[slug]` (manter destino) | Microcopy abaixo (ver 3.3). Card `solucao-personalizada`: ver correção do 404 abaixo |
| Banner "Soluções Personalizadas" (pricing) | "Solicitar Orçamento" → `/forms` | **Solicitar orçamento** → `/forms?interesse=personalizado` | Sentence case + parâmetro |
| WhoIsItFor | "Quero ser cliente TZOLKIN" → `/forms` | **manter** → `/forms?interesse=consultoria` | Manter |
| Footer | "Vamos conversar?" → `/forms` | **manter** | Manter — funciona |

Correção do bug 🔴 (revisão 0.2): o card "Solução Personalizada" do pricing aponta para `/servicos/solucao-personalizada`, que retorna 404. **Recomendação: apontar o card direto para `/forms?interesse=personalizado` com o rótulo `Desenhar minha solução`** — resolve sem criar página nova. Alternativa: criar a entrada em `servicesData.ts` (mais trabalho; só vale se houver conteúdo real para ela).

Nota cruzada (frente de quem cuidar das páginas `/servicos/[slug]`): cada página de detalhe deve fechar com CTA → `/forms?interesse=produto&produto={slug}`.

### 3.3 Microcopy de risco zero (verbatim, sob os CTAs)

- Sob o CTA do hero: `Responda 4 perguntas rápidas — retorno em até 1 dia útil.`
- Sob "Tenho interesse" (pricing): `Sem compromisso. Escopo e valores fechados antes de começar.`
- Perto do CTA final da home, trazer à tona a oferta que hoje está escondida no `/catalogo` (revisão 7.2): `Prefere começar sem custo? Agende um diagnóstico gratuito.` → `/forms?interesse=diagnostico`
- Mensagem de sucesso do formulário: `Mensagem enviada com sucesso! Nossa equipe responde em até 1 dia útil.`

### 3.4 Rastreamento por parâmetro (barato de implementar, alto valor comercial)

O site já tem tracking (GTM/Utmify). Padronizar:

| Parâmetro | Quem usa |
|---|---|
| `?interesse=consultoria` | Hero, Serviços, Brands, Founder, WhoIsItFor, Tráfego |
| `?interesse=metodo` | Método TOI |
| `?interesse=personalizado` | Banner de pricing, card solução personalizada |
| `?interesse=produto&produto={slug}` | Páginas `/servicos/[slug]` |
| `?interesse=diagnostico` | Oferta de diagnóstico gratuito |
| `?interesse=ferramentas` / `?interesse=educacional` | Fallback das listas de espera |

O formulário lê o parâmetro e pré-seleciona a etapa de serviço — menos atrito, e o dono sabe qual frente puxou cada lead.

---

## 4. Recomendação de URLs

### 4.1 Mapa final de rotas

| URL | Status | Conteúdo |
|---|---|---|
| `/` | existe | Home com as 4 frentes |
| `/servicos/[slug]` | existe | Detalhe de cada produto/serviço (8 páginas) |
| `/catalogo` | existe — **reposicionar** | "Capacidades": metodologia, integrações, diagnóstico gratuito |
| `/portfolio` | existe | Portfólio (corrigir title para `Portfólio`) |
| `/forms` | existe | Funil de conversão único |
| `/consultor` | existe | Consultor virtual (manter; link no footer) |
| `/ferramentas` | **nova** | Frente 3 "em breve" + lista de espera |
| `/educacional` | **nova** | Frente 4 "em breve" + lista de espera |

Regras de naming: slugs em PT-BR, kebab-case, sem acentos, substantivos no plural para hubs (`/ferramentas`, não `/ferramenta`).

**Não criar agora** (realismo para empresa em crescimento): `/produtos` (a seção `/#products` da home resolve enquanto o catálogo tem 9 cards), `/consultoria` (coberta por Serviços + Capacidades + formulário). Criar quando houver conteúdo real para sustentar a página.

### 4.2 O que fazer com `/catalogo`

Manter a URL (já indexada, já recebe tráfego dos CTAs), mas reposicionar:

1. **Retitular para "Capacidades"** (metadata na seção 2.4) — "Catálogo" sugere vitrine de produtos à venda; o conteúdo real é capacidades, metodologia e integrações.
2. **Tirar dele a função de destino de CTA principal** — vira link de aprofundamento ("Ver capacidades completas") e item de footer.
3. **Subir a oferta de consultoria/diagnóstico gratuito para a home** (ver 3.3) — é o melhor redutor de risco do site e hoje está escondido aqui.
4. Na página, trocar a promessa de "sites, sistemas, pagamentos..." pela cobertura completa do território: software sob medida, IA, cybersecurity, web design e desenvolvimento.

### 4.3 Redirects e correções

| De | Para | Motivo |
|---|---|---|
| `/servicos/solucao-personalizada` | `/forms?interesse=personalizado` | Mata o 404 sem criar página (redirect 301 no `next.config` caso a URL já tenha sido indexada/compartilhada) |

Nenhuma outra rota precisa de redirect — nenhuma URL existente morre.

### 4.4 Copy das páginas "em breve" (verbatim, pronta para colar)

**`/ferramentas`:**

> Eyebrow: `Ferramentas próprias · Em breve`
>
> H1: `Software nosso, trabalhando por você.`
>
> Sub: `SaaS, PWAs e NaaS desenvolvidos pela TZOLKIN com o mesmo método e o mesmo padrão de entrega dos nossos projetos sob medida. Entre na lista de espera e seja o primeiro a testar.`
>
> Cards (placeholders até os nomes serem públicos): `[Nome da ferramenta 1] — [uma linha de promessa]` · `[Nome da ferramenta 2] — [uma linha de promessa]` · `[Nome da ferramenta 3] — [uma linha de promessa]`
>
> CTA: `Entrar na lista de espera`
> Microcopy: `Sem spam. Um único e-mail quando cada ferramenta abrir.`

**`/educacional`:**

> Eyebrow: `Educacional · Em breve`
>
> H1: `O método TZOLKIN, aberto para quem quer aprender.`
>
> Sub: `Cursos e formações em desenvolvimento, IA, cybersecurity e web design — do básico ao alto padrão. A lista de espera garante prioridade na primeira turma.`
>
> CTA: `Quero entrar na lista de espera`
> Microcopy: `Turmas com vagas limitadas a [X] alunos. A lista de espera entra primeiro.`

Implementação da lista de espera (realista): campo único de e-mail por página → [integrar ferramenta de e-mail, ex.: Resend/Mailchimp]. Enquanto não há integração, o CTA aponta para `/forms?interesse=ferramentas` / `?interesse=educacional`.

---

## 5. Checklist de implementação (ordem sugerida)

1. Criar `/ferramentas` e `/educacional` com a copy de 4.4 (mesmo que com fallback para `/forms`).
2. Atualizar `menuItems` do `Header.tsx` + CTA "Iniciar projeto" + correção do `@2023`.
3. Reorganizar o `Footer.tsx` em 4 colunas + tagline nova.
4. Trocar o bloco `metadata` do root layout + criar `og-image.jpg`.
5. Corrigir destinos dos CTAs `#contact` → `/forms` (Método, Brands) e o 404 do card solução personalizada.
6. Implementar leitura de `?interesse=` no formulário.
7. Reposicionar `/catalogo` → "Capacidades" (metadata + referências de menu).
