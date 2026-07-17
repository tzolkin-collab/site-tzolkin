# 03 — Seção de serviços: consultoria, assessoria e áreas de atuação

**Arquivo-alvo no site:** `src/client/shared/ui/ServicesSection.tsx`
**Problema que esta frente resolve:** a seção atual tem 4 cards genéricos ("Presença global", "Canais de vendas", "Branding sob medida", "Flexibilidade") com tom de agência de landing pages, texto inacabado no ar (`apps[...]`, bug 🔴 0.1 do `REVISAO-COPY.md`) e nenhuma menção às frentes reais da marca: consultoria, assessoria contínua, desenvolvimento sob medida e o território "de IA a cybersecurity".

**Decisão estrutural:** a seção passa de "lista de coisas que fazemos" para "formas de trabalhar com a TZOLKIN" — 3 cards de modelos de contratação (consultoria, assessoria, desenvolvimento) + uma faixa de "Áreas de atuação" que carrega o espectro técnico. Isso separa *como contratar* (home) de *o que entregamos* (`/catalogo`), eliminando a sobreposição atual entre os dois. Detalhes no item (d).

---

## (a) Nova arquitetura da seção — copy verbatim

### Headline da seção

> **Serviços de software, do diagnóstico à operação**

### Subheadline

> Três formas de trabalhar com a TZOLKIN: consultoria, assessoria contínua e desenvolvimento sob medida. Um único método, um único padrão — o mais alto.

*(Linha opcional de prova, exibir apenas quando o dono preencher: "Projetos entregues em [X] segmentos, de e-commerce a educação.")*

---

### Card 1 — Consultoria

**Título do card:**
> Consultoria em software

**Texto de apoio (coluna esquerda, campo `subtitle`):**
> Decisão de tecnologia é decisão de negócio. A TZOLKIN entra como parceira técnica para diagnosticar, arquitetar e priorizar — antes de qualquer linha de código.

**Texto principal (coluna direita, campo `description`):**
> Diagnóstico da operação, arquitetura de sistemas, escolha de stack, auditoria de código e de segurança, roadmap de produto. Você sai com escopo fechado, prioridades claras e estimativas realistas — mesmo que a execução fique com outro time.

**Ícone sugerido (lucide):** `Compass` (alternativa: `MessageSquareCode`)

---

### Card 2 — Assessoria

**Título do card:**
> Assessoria contínua

**Texto de apoio (`subtitle`):**
> Um time sênior de software ao lado do seu, mês após mês — sem precisar montar um departamento inteiro de tecnologia.

**Texto principal (`description`):**
> Evolução de produto, monitoramento e observabilidade, correções prioritárias, revisão de arquitetura e suporte às decisões técnicas do negócio. A TZOLKIN opera como o seu braço de engenharia, com escopo mensal e prioridades transparentes.

**Ícone sugerido:** `Handshake` (alternativa: `Infinity`)

---

### Card 3 — Desenvolvimento

**Título do card:**
> Desenvolvimento sob medida

**Texto de apoio (`subtitle`):**
> Do MVP ao sistema completo: sites, plataformas, integrações e produtos white-label ou personalizados, construídos com o método TZOLKIN.

**Texto principal (`description`):**
> Discovery, arquitetura e sprints incrementais, com observabilidade desde o primeiro deploy. Cada entrega valida uma hipótese com dados reais antes de escalar — e o código, o design e a documentação ficam com você.

**Link interno no fim do card (microcopy):** "Veja o que construímos no catálogo →" → `/catalogo`

**Ícone sugerido:** `Code2`

---

## (b) Faixa "Áreas de atuação" (chips com microdescrições)

Faixa horizontal logo abaixo dos 3 cards, antes do CTA. Estilo chips/pills, quebrando em 2 linhas no mobile.

**Lead-in da faixa:**
> De IA a cybersecurity: um só time, todo o espectro do software.

**Chips (título + microdescrição em tooltip ou legenda abaixo):**

| Chip | Microdescrição (verbatim) |
|---|---|
| Inteligência artificial | Agentes, automações e IA aplicada a processos reais de negócio. |
| Cybersecurity | Auditoria, hardening e segurança tratada como requisito, não como extra. |
| Web design & desenvolvimento | Sites, sistemas e PWAs com performance sub-segundo. |
| Dados & integrações | APIs, webhooks e analytics conectando cada ponta da sua operação. |

**Chips opcionais (só incluir se o dono quiser ampliar o território já):**

| Chip | Microdescrição (verbatim) |
|---|---|
| Cloud & infraestrutura | Deploy, escala e observabilidade sem sustos na fatura. |
| Pagamentos | Stripe, Pix, split e recorrência integrados à operação. |

*Nota de implementação: as microdescrições podem renderizar como tooltip no hover (desktop) ou em texto menor sob o chip (mobile). Não transformar os chips em links — eles comunicam território, não inventário (o inventário fica no `/catalogo`).*

---

## (c) CTA da seção + microcopy

**Botão primário (mesmo estilo do botão atual com glow, mantendo o padrão de primeira pessoa do site):**
> **Quero um diagnóstico do meu projeto**

Destino: `/forms` (mantém o formulário de 4 passos existente).

**Microcopy sob o botão (redutor de risco, alinhado ao item 7.1 do `REVISAO-COPY.md`):**
> Responda 4 perguntas rápidas — retorno em até 1 dia útil. Sem compromisso.

**Link secundário (texto simples, ao lado ou abaixo do botão):**
> Ou veja o catálogo completo de soluções → `/catalogo`

*O "+ Informações" atual é aposentado (item 3.3 da revisão).*

---

## (d) Relação com a página `/catalogo` — recomendação

**Recomendação: reaproveitar, não fundir.** Manter as duas superfícies, com papéis distintos e sem duplicar conteúdo:

1. **Home (esta seção) = como contratar.** Modelos de trabalho (consultoria, assessoria, desenvolvimento) + território (áreas de atuação). Estratégica, fala de relação e método.
2. **`/catalogo` = o que entregamos.** Inventário de entregáveis (capabilities grid: sites, pagamentos, cardápios, recorrência, tagueamento, APIs) + stack + metodologia. Tática, fala de escopo e prova.

**Ajustes necessários no `/catalogo` para fechar o encaixe:**

- **Header:** manter "Cada projeto é único. A solução também." (já alinhado ao posicionamento), mas trocar a sub "Não vendemos pacotes genéricos..." por:
  > Infraestrutura digital sob medida para a realidade da sua operação — de sites e pagamentos a IA e cybersecurity. Tudo com o mesmo método e o mesmo padrão.
- **Adicionar bloco de entrada para consultoria/assessoria:** hoje o catálogo só vende "projeto". Incluir acima do CTA final uma faixa com dois atalhos: "Preciso de direção técnica → consultoria" e "Preciso de um time contínuo → assessoria", ambos apontando para `/forms?service=Consultoria` e `/forms?service=Assessoria`.
- **Resolver o 404 do card "Solução Personalizada" (bug 🔴 0.2):** apontar o card 9 do `pricingData.ts` para `/catalogo` (que já é a página de "projetos específicos") — em vez de criar uma 9ª entrada em `servicesData.ts`. O CTA "Consultoria Gratuita" do catálogo já cobre a conversão.
- **Fluxo cruzado:** card 3 da home linka para `/catalogo`; CTA final do catálogo leva a `/forms`. Nenhum conteúdo de capabilities/stack se repete na home.

**O que acontece com o conteúdo dos 4 cards atuais (rastreabilidade):**

| Card atual | Destino |
|---|---|
| "Presença global" (Stripe) | Já coberto pela página `/servicos/pagamentos-globais` e pelo chip opcional "Pagamentos". Benefício "venda para o mundo" pode ser reaproveitado lá (item 3.1 da revisão). |
| "Canais de vendas" (MVPs) | Absorvido pelo card "Desenvolvimento sob medida" e pela seção "Problema do Tráfego" (que permanece intacta). |
| "Branding sob medida" (UX/UI) | Absorvido pelo chip "Web design & desenvolvimento" e pelo `/catalogo`. |
| "Flexibilidade" (`apps[...]`) | Removido — era o bug 🔴 0.1. A ideia de "infinitas possibilidades" vive melhor no lead-in da faixa de áreas. |

---

## Mapeamento para o componente (handoff de dev)

O `ServicesSection.tsx` atual usa um array `services` com os campos `icon`, `title`, `subtitle`, `description`, `glow`, `iconGradient`, `color`. A nova copy encaixa 1:1:

- `services` passa a ter **3 itens** (Consultoria, Assessoria, Desenvolvimento) — remover o 4º card;
- títulos saem do CAIXA ALTA no dado (a estilização uppercase, se desejada, fica no CSS) — sentence case conforme sistema de voz;
- headline da seção: trocar "Você tem a ideia, a TZOLKIN faz acontecer" e a sub "Sem nós soltos... intercontinental" (item 1.3/4.2) pela headline/sub acima;
- novo bloco `areas` (array de chips) entre a lista de cards e o CTA;
- CTA: trocar label e href, adicionar `<p>` de microcopy sob o botão.

## Placeholders a preencher pelo dono

- `[X] segmentos` na linha opcional de prova (só publicar com número real).
- Confirmar se "retorno em até 1 dia útil" é um compromisso operacional real (já usado na revisão global; se não for, trocar por "retorno em até [X] dias úteis").
- Decidir se os 2 chips opcionais (Cloud, Pagamentos) entram já ou ficam para a próxima iteração.
