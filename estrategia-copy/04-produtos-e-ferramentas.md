# 04 — Produtos e Ferramentas Próprias

**Frente:** arquitetura de marca + copy verbatim para a home
**Arquivos de origem lidos:** `REVISAO-COPY.md`, `pricingData.ts`, `PricingSection.tsx`, `ServicesSection.tsx`, `LandingPage.tsx`
**Frame aplicado:** software house de alto padrão, 4 frentes (Serviços · Produtos · Ferramentas próprias · Educacional), voz PT-BR direta e premium, sentence case, marca "TZOLKIN".

---

## (a) Framing — Produtos TZOLKIN × Ferramentas TZOLKIN

### A distinção em uma frase

> **Produtos são software que vira ativo da sua empresa. Ferramentas são software que a TZOLKIN opera para você assinar.**

### Arquitetura de marca

| | **Produtos TZOLKIN** | **Ferramentas TZOLKIN** |
|---|---|---|
| O que é | Software pronto, vendido por escopo fechado | Software próprio, construído e operado pela TZOLKIN |
| Modelos | White-label (leva a sua marca) ou personalizado (segue as suas regras) | SaaS · PWAs · NaaS · Educacional |
| Quem opera | O cliente — o produto é dele | A TZOLKIN — o cliente assina e usa |
| Como se compra | Preço na página, proposta com escopo fechado | Lista de espera → acesso/assinatura no lançamento |
| Estado | **Disponível hoje** (os 9 cards do pricing) | **Em breve** (nada no ar ainda) |
| Onde vive na home | Seção de pricing (atual) | Nova seção "Ferramentas TZOLKIN" |

### Regras de nomenclatura (para todo o site)

1. **Nunca chamar os 9 cards de "serviços".** Serviço é consultoria/assessoria (frente 1, com escopo aberto). Os 9 cards são **produtos de software** — têm escopo, preço e prazo fechados.
2. **"White-label" sempre com explicação de bolso na primeira menção** da página ("leva a sua marca"). O termo é consolidado em B2B, mas parte do público vem do tráfego direto.
3. **"Em breve" é um estado, não uma promessa.** Nunca aparece sozinho: sempre acompanhado de uma linha de contexto honesta (ver seção d).
4. **Nenhuma ferramenta tem nome próprio, data ou feature list** até o dono confirmar o que existe de fato. Até lá, os formatos (SaaS, PWAs, NaaS, Educacional) carregam a seção.
5. **Educacional é uma das 4 ferramentas na home** e uma frente independente na arquitetura da marca. Na seção, ele entra como card; na narrativa maior (hero, footer), entra como frente.

---

## (b) Nova seção — "Ferramentas TZOLKIN" (copy verbatim)

**Posição recomendada na home:** logo após o `PricingSection`, antes do `WhoIsItForSection`. Fluxo narrativo: o que fazemos sob medida (Serviços) → o que está pronto para comprar (Produtos) → o que estamos construindo (Ferramentas) → para quem é.

### Eyebrow / badge

```
Ferramentas TZOLKIN · Em desenvolvimento
```

### Headline

```
Software com a nossa assinatura, em construção.
```

### Subheadline

```
A TZOLKIN está construindo suas próprias ferramentas — SaaS, PWAs, NaaS e uma frente educacional. Sem data prometida e sem feature inventada: cada uma entra no ar quando estiver no mesmo padrão dos projetos que já entregamos. Entre na lista de espera e saiba primeiro.
```

### Card 1 — SaaS

```
SaaS
Plataformas por assinatura

Software hospedado pela TZOLKIN para resolver dores reais de operação. Você assina, entra pelo navegador e usa — sem instalação, sem servidor, sem manutenção do seu lado.

[Selo: Em breve]
CTA: Quero entrar na lista de espera
```

### Card 2 — PWAs

```
PWAs
Aplicativos web progressivos

Apps que abrem como um site e funcionam como aplicativo: rápidos, instaláveis na tela do celular e sem depender de loja de aplicativos para chegar ao usuário.

[Selo: Em breve]
CTA: Quero entrar na lista de espera
```

### Card 3 — NaaS

```
NaaS
Operação contínua como serviço

Camadas de infraestrutura e operação mantidas pela TZOLKIN por assinatura: a máquina fica com a gente, o resultado fica com você.

[Selo: Em breve]
CTA: Quero entrar na lista de espera
```

> ⚠️ **Nota editorial (não publicar):** a copy do card NaaS foi escrita para não depender da expansão do acrônimo. Antes de subir, confirmar com o dono a expansão oficial (ex.: infraestrutura, rede, operação) e, se fizer sentido, explicitá-la no lugar de "Operação contínua como serviço".

### Card 4 — Educacional

```
Educacional
Formação em software, do jeito TZOLKIN

Educação em software com o mesmo padrão das nossas entregas — de IA a cybersecurity, desenvolvimento e web design. Método, não apostila.

[Selo: Em breve]
CTA: Quero entrar na lista de espera
```

### Linha de fechamento da seção (sob os cards)

```
Uma lista de espera por ferramenta. Sem pré-venda, sem cobrança, sem spam — você escolhe o que quer conhecer e é avisado por e-mail quando abrir.
```

### Alternativa de headline (para teste A/B)

```
O próximo capítulo da TZOLKIN é software nosso.
```

---

## (c) Seção de pricing — novo título e sub (copy verbatim)

**Substitui:** título "Produtos Exclusivos, valores claros." e sub "Valores fechados por escopo, sem surpresa na fatura."
**Mantém:** o badge "Transparência TZOLKIN" (ponto forte identificado na revisão — não mexer), os 9 cards, preços e CTAs como estão.

### Título

```
Produtos de software, valores claros.
```

### Sub

```
Soluções white-label e personalizadas — do site institucional ao sistema de mensalidades. Escolha o formato: ele chega com a sua marca, as suas regras e escopo fechado. Preço na página, sem surpresa na fatura.
```

### Microcopy de apoio (linha fina sob a sub, opcional)

```
White-label: o software é seu e leva a sua marca. Personalizado: as regras do negócio são as suas.
```

### Alternativa de título (mais emocional, para teste A/B)

```
Software pronto para vestir a sua marca.
```

---

## (d) Microcopy honesta para o estado "em breve"

Sistema completo — usar sempre o conjunto **selo + contexto + segurança**, nunca o selo sozinho.

### Selo (badge nos cards)

```
Em breve
```

### Linha de contexto (acompanha o selo ou o CTA)

```
Em desenvolvimento. Sem data prometida: publicamos quando estiver no padrão TZOLKIN.
```

### Segurança pós-CTA (sob o botão de lista de espera)

```
Sem pré-venda e sem cobrança. Um e-mail quando abrir — só isso.
```

### Mensagem de sucesso do opt-in (após entrar na lista)

```
Você está na lista. Avisamos por e-mail quando esta ferramenta entrar no ar — sem compromisso e sem spam.
```

### Regras do "em breve" (o que nunca fazer)

1. **Nunca data, trimestre ou ano** ("chega em 2026", "Q3") — se atrasar, vira vaporware; se adiantar, ninguém cobrava.
2. **Nunca countdown ou barra de progresso** — progresso falso é pior que nenhum progresso.
3. **Nunca feature list** de ferramenta que não existe — a promessa do card descreve o *formato* e o *padrão*, não funcionalidades.
4. **Nunca "coming soon" em inglês** — o selo é "Em breve", em PT, mantendo o sistema de idiomas da marca.
5. **Nunca tratar lista de espera como prova social inventada** ("junte-se a [X] pessoas") até existir um número real e autorizado para o placeholder.

---

## Notas de implementação

- **Hierarquia visual dos cards de ferramentas:** nome do formato (SaaS / PWAs / NaaS / Educacional) como título do card, descriptor de uma linha abaixo, promessa como corpo, selo "Em breve" no topo direito ou acima do título, CTA como botão secundário (não competir com o CTA primário da página).
- **Lista de espera:** o formulário atual de 4 passos é pesado para um opt-in de interesse. Recomendação: captura única de e-mail por ferramenta (ou um campo + checkbox das ferramentas de interesse). Se a infra de e-mail ainda não existir, o CTA pode apontar temporariamente para o `/forms` com a ferramenta pré-selecionada — mas a microcopy de sucesso acima pressupõe captura simples.
- **O que não muda:** os 9 cards de produtos seguem como estão (títulos, preços, features). O reposicionamento acontece só no título/sub da seção e na nomenclatura usada no restante do site.
- **Conexão com as outras frentes da revisão:** esta seção é a peça que faltava para o hero e o footer poderem dizer "marca de software" com prova — Serviços (ServicesSection), Produtos (pricing), Ferramentas (esta seção) e Educacional (card 4) fecham as 4 frentes do posicionamento.

## Checklist de fidelidade à voz

- [x] PT-BR, sentence case, marca "TZOLKIN" em maiúsculas
- [x] Termos EN apenas consolidados: software, SaaS, white-label, PWA, IA
- [x] CTAs em primeira pessoa ("Quero entrar na lista de espera")
- [x] Preservados: badge "Transparência TZOLKIN", transparência de preços, estrutura dos 9 cards
- [x] Zero invenção: sem datas, features, nomes de ferramentas, números ou provas que não existem
- [x] Placeholders e notas editoriais marcados para o dono preencher/confirmar (expansão de NaaS)
