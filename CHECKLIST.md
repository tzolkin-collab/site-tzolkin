# ✅ CHECKLIST — tzolkin-site

> Auditoria completa: organização, boas práticas, sanitização de código bugado e regras de uso (React/Next/Tailwind).
> Gerado em 2026-07-16 a partir de inspeção do código + screenshots do site em produção.
>
> **Legenda:** 🔴 crítico (fazer hoje) · 🟠 alto (esta semana) · 🟡 médio (próximo sprint) · ⚪ baixo (contínuo)

---

## 1. Higiene do repositório

- [ ] 🔴 **Remover `public/docs/` do ar** — `clients_info.md` (pesquisa interna de clientes, com notas de rascunho) está **público** em `/docs/clients_info.md` (HTTP 200 confirmado). Mover para fora de `public/` (ex.: `docs-internal/` na raiz, ou Notion). Redeploy após remover.
- [ ] 🔴 **Resolver o working tree sujo** — 12 imagens deletadas e ~20 arquivos modificados sem commit. O repo não representa o que está no ar. Commitar ou reverter cada um; nunca deployar com tree sujo.
- [ ] 🔴 **Corrigir identidade do projeto** — `package.json` ainda é `"name": "hubdi"`; footer usa `hello@hubdi.com` (`Footer.tsx:60`). Trocar para `tzolkin` / e-mail real do domínio.
- [ ] 🟠 **Deletar lixo commitado:**
  - `src/app/voltics.code-search` (resultado de busca do VS Code dentro de `app/`)
  - `README.md` corrompido (arquivo binário ilegível — recriar do zero)
  - `public/next.svg`, `vercel.svg`, `window.svg`, `globe.svg`, `file.svg` (restos do create-next-app)
  - `public/docs/APRESENTAÇÃO ESTUDOS LOGO.pdf` (mover para fora de `public/` se for interno)
- [ ] 🟠 **Recriar `README.md`** com: o que é o projeto, stack, como rodar (`npm run dev`), como deployar, convenções adotadas (link para este checklist).
- [ ] 🟡 **Padronizar nomes de arquivos em `public/`** — sem espaços, acentos ou `+`: `Logo Butikim da Kelly.png` → `logo-butikim.png`; `Logo Embale+.png` → `logo-embale.png`. Espaços e `+` em URLs são frágeis.
- [ ] 🟡 **Decidir o destino de `.claude/`** — config de ferramenta de IA no repo: ou assume no `.gitignore` ou documenta que é intencional.

## 2. Estrutura de pastas

Estado atual: **três "casas" para código UI** (`src/app/`, `src/client/pages/` + `src/client/shared/ui/`, `src/components/ui/` com 1 arquivo solto). O padrão `src/client/` é herança de projeto Vite/SPA — no App Router não significa nada.

- [ ] 🟠 **Consolidar para a estrutura-alvo:**

```
src/
  app/                  # só rotas, layouts, loading/error, metadata
  components/
    ui/                 # Button, CardSwap, Marquee... (primitivos reutilizáveis)
    sections/           # Hero, ServicesSection, PricingSection... (blocos de página)
    charts/             # fundir components/ui/chart.tsx + client/shared/ui/charts/
    forms/              # FormContext + steps
    providers/          # ThemeProvider, ChatProvider, TrackingProvider
  lib/                  # utils, analytics, chatApi
  data/                 # projects, brands, pricing, services (um arquivo por serviço)
  hooks/                # useLockBody, useScrolled... (ver §5)
```

- [ ] 🟠 **Fundir a duplicação de charts** — `src/components/ui/chart.tsx` (shadcn) vs `src/client/shared/ui/charts/` (`legacy.ts`, `builders.ts`, `theme.ts`, `TzolkinChart`, `FunnelChart`) + `ServiceChart.tsx` órfão fora da pasta. Manter uma única arquitetura de charts.
- [ ] 🟠 **Deletar `charts/legacy.ts`** — arquivo explicitamente chamado "legacy" ainda importado por `index.ts` e `TzolkinChart.tsx`. Legado se apaga, não se mantém.
- [ ] 🟡 **Quebrar `servicesData.ts` (761 linhas)** em `data/services/landing-pages.ts`, `sites.ts`, etc., com um `index.ts` agregador. Extrair as strings Mermaid embutidas para templates próprios.
- [ ] 🟡 **Renomear componentes que mentem:**
  - `BrandsSection` → `IntegrationsSection` (não mostra marcas; quem mostra é `LogoMarquee`)
  - `MethodTOISection` → `MethodGTSection` (o método apresentado é "Método GT™")
- [ ] ⚪ **Regra permanente:** nome de componente/arquivo deve refletir o que ele renderiza. Renomeou o conceito? Renomeie o arquivo no mesmo commit.

## 3. Sanitização — classes Tailwind quebradas/inexistentes

Nenhuma dessas classes existe ou é válida — são lixo silencioso (o Tailwind ignora e o estilo morre sem erro). Corrigir todas:

- [ ] 🔴 `tzolkinChartfrom-brand/10 via-transparent to-transparent` — classe concatenada quebrada + falta `absolute inset-0` (`BrandsSection.tsx:109`)
- [ ] 🟠 `dark:bg-/90` — vazia (`PricingCard.tsx:28`); o badge "Mais Procurado" fica sem fundo no dark
- [ ] 🟠 `hover:bg-foreground-invert` — token inexistente (`PricingSection.tsx:93`)
- [ ] 🟠 `font-helvica` — typo de "helvetica", em **6 arquivos** (`LandingPage`, `ServicesSection`, `MajorPartnerships`, `MethodTOISection`, `TrafficProblemSection`, `BrandsSection`, `FounderSection`). Remover de todos (a fonte correta já vem do tema)
- [ ] 🟠 Aspas literais dentro de template string quebrando classes do primeiro set de logos (`LogoMarquee.tsx:30-36`) — `'hover:brightness-100'` vira parte do nome da classe; `item.bright`/`item.invert` ignorados
- [ ] 🟡 `flex flex-col-1` (`MethodTOISection.tsx:92`) · `flex-colum col-2` (`:109`) · `mr-150` (`:139`, fora da escala) · `py-22` (`MajorPartnerships.tsx:14`) · `md:h-30` (`LogoMarquee.tsx:31`) · `fill-mode-fowards` (`LandingPage.tsx:83`) · `mx:pl-0` (`LandingPage.tsx:111`)
- [ ] 🟡 Classes contraditórias/duplicadas: `text-white ... text-black dark:text-white` no mesmo botão (`ServicesSection.tsx:184`); `dark:text-white dark:text-white` (`ServicesSection.tsx:127`); `dark:text-gray-0 dark:text-gray-0` (`LandingPage.tsx:83,89`); `bg-white/100` (`PortfolioCarousel.tsx:64`)
- [ ] 🟡 `<br></br>` com closing tag (`ServicesSection.tsx:153`)
- [ ] ⚪ **Regra permanente:** instalar `prettier-plugin-tailwindcss` (ordena classes) e considerar lint que valida classes contra o tema. Revisar `className` com 2+ classes da mesma propriedade.

## 4. Sanitização — lógica, dados e links

- [ ] 🔴 **Botão "+ Informações" morto** — `<button>` sem link nem `onClick` (`ServicesSection.tsx:184`). Apontar para `/catalogo` ou remover.
- [ ] 🔴 **Links sociais mortos** — Instagram/LinkedIn/Twitter com `href="#"` (`Footer.tsx:9-11`). Colocar URLs reais ou remover os ícones.
- [ ] 🔴 **Página quebrada** — `/servicos/solucao-personalizada` não tem entrada em `servicesData.ts`. Criar os dados ou tirar o card do ar.
- [ ] 🔴 **Preço inconsistente** — Cardápios Virtuais: R$ 2.400 vs "PIX R$ 1100 à vista" (`pricingData.ts:81-83`). "R$ 1050" sem milhar no card de Landing Pages → "R$ 1.050".
- [ ] 🔴 **Portfólio com 6 projetos dummy idênticos** (mesmo logo KidStok, mesma descrição — `projects.ts:19-114`), incluindo advogado com logo de loja infantil. Substituir por cases reais ou reduzir a seção.
- [ ] 🔴 **Galerias apontam para arquivos deletados** (`/projects/*.png`) — imagens quebradas em produção.
- [ ] 🟠 **Commits falsos** — `lastCommit: 'Há 2 horas'` hardcoded (`servicesData.ts:63`). Remover a seção de "github integrations" ou torná-la real (API do GitHub).
- [ ] 🟠 **Revisar claim "Enterprise Partnership" com a Vale** (`projects.ts`, `MajorPartnerships`) — risco jurídico/reputacional.
- [ ] 🟠 **Eliminar dois cards "Personalizados" duplicados** na mesma esteira de preços (`pricingData` item 9 + card hardcoded em `PricingSection.tsx:92-106`).
- [ ] 🟡 **i18n caótico** — padronizar 100% PT-BR: "About/Services/Contact" (`Footer.tsx:15-17`), "Privacy Policy"/"Terms of Service" (`:121-126`), "Enterprise Partnership" (`MajorPartnerships.tsx:80`), "DRAW YOUR BRANDING" (`ServicesSection`), "direct responsive" → "resposta direta".
- [ ] 🟡 **Erros de português:** "agencia" → agência (`LandingPage.tsx:136`); "técnologicos" → tecnológicos (`:136`); "referencias" → referências (`MajorPartnerships.tsx:28`); "a frente" → à frente (`ServicesSection`); "Formulario Personalizado" → Formulário (2× em `pricingData.ts`); "para internet" → para a internet.
- [ ] 🟡 **Remover `console.log` de produção** — `ServiceStep.tsx:35` (vaza dados do formulário no console!) e `analytics.ts:27`. Trocar por logger com flag de debug.

## 5. Regras React / Next.js — o que NÃO fazer

### 5.1 `useEffect` — você provavelmente não precisa dele

Regra-mãe (docs oficiais do React): *Effect é para **sincronizar com sistemas externos** (DOM, rede, timers, listeners) — não para lógica de render.*

- [ ] ⚪ **Não usar `useEffect` para estado derivado** — se um valor pode ser calculado no render (ou com `useMemo`), não use `useState` + `useEffect`. ✅ O projeto já faz certo em `LandingPage.tsx:56` (`useMemo` para filtrar projetos).
- [ ] ⚪ **Não usar `useEffect` para responder a eventos** — lógica de "quando clicar, faça X" fica no event handler, não num Effect observando state.
- [ ] ⚪ **Não usar `useEffect` para data fetching em App Router** — buscar no Server Component (async) ou Route Handler. Hoje não há fetching client-side — manter assim.
- [ ] ⚪ **Todo Effect precisa de cleanup** quando adiciona listener/timer/subscription. Verificar: `ChatWindow.tsx` (4 Effects), `WebPreviewModal.tsx` (3), `CardSwap.tsx:174-184` (interval), `Antigravity.tsx` (3).
- [ ] ⚪ **Dependências honestas** — nunca omitir deps do array para "calar" o lint (`eslint-disable-next-line react-hooks/exhaustive-deps` é dívida registrada, só com comentário justificando).

### 5.2 Manipulação direta do DOM — proibida fora de Effect/ref

Padrão repetido no projeto: **trava de scroll do body duplicada em 3 componentes**:

- [ ] 🟠 **Extrair hook `useLockBody()`** e substituir as 3 implementações:
  - `Header.tsx:39` — `document.body.style.overflow` dentro de `toggleMenu` (event handler que altera DOM global **sem cleanup**: se o componente desmontar com o menu aberto, o body fica travado)
  - `ChatWindow.tsx:47-53`
  - `WebPreviewModal.tsx:44-49`

  ```tsx
  // hooks/useLockBody.ts
  export function useLockBody(locked: boolean) {
    useEffect(() => {
      if (!locked) return;
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = original; };
    }, [locked]);
  }
  ```

- [ ] 🟠 **Eliminar o hack de `<style>` injetado no `document.head`** (`ModeToggle.tsx:11-15`) — criar `<style>`, anexar e remover após 2 `requestAnimationFrame` é frágil. Mover a regra para `globals.css`.
- [ ] ⚪ **`window`/`document` só dentro de Effect, handler ou `'use client'`** — nunca no corpo de Server Component (quebra SSR). Hoje está correto; manter a regra.
- [ ] ⚪ **Prefira refs a `getElementById`/`querySelector`** em componentes React.

### 5.3 Componentes e render

- [ ] ⚪ **`'use client'` no menor escopo possível** — páginas inteiras como client (ex.: `LandingPage`) empurram tudo para o browser. Meta: seções interativas são client; texto estático sobe para Server Components.
- [ ] ⚪ **`dangerouslySetInnerHTML` exige sanitização** — usado em `MermaidDiagram.tsx:77` (SVG gerado — risco baixo, mas documentar a origem confiável), `chart.tsx:95`, `TrackingProvider.tsx:16`. Regra: só com string gerada localmente, nunca com input de usuário.
- [ ] ⚪ **Nada de data/hora "relativa" hardcoded** — "Há 2 horas" nunca muda. Ou calcula de verdade (`date-fns`) ou remove.
- [ ] ⚪ **`next/image` para todas as imagens** com `sizes` coerente — hoje há divergência (`sizes="154px"` vs `"128px"` no mesmo marquee, `LogoMarquee.tsx`).
- [ ] ⚪ **Estado de formulário**: já usam `react-hook-form` — manter; proibido criar `useState` por campo.

### 5.4 Next.js específico

- [ ] ⚪ **Metadata por rota** — hoje só o layout raiz tem `metadata`. Cada `page.tsx` (portfolio, catálogo, serviços/[slug]) deve exportar `metadata` ou `generateMetadata` (título/descrição próprios).
- [ ] ⚪ **OG image real** — hoje aponta `/logoTZOLKIN.svg` 800×600 (SVG não funciona como OG image na maioria das redes). Gerar PNG 1200×630.
- [ ] ⚪ **`loading.tsx`/`error.tsx`/`not-found.tsx`** nas rotas dinâmicas (`servicos/[slug]` hoje renderiza vazio quando não há dados — deveria ser `notFound()`).

## 6. Regras Tailwind / CSS

- [ ] 🟡 **Proibido hardcode de cor em site com tema** — `bg-black`, `bg-white`, `text-white`, `bg-neutral-950` fixos quebram o dark/light. Sempre tokens: `bg-background`, `bg-foreground`, `bg-card`, `text-foreground`. Hoje: `ServicesSection.tsx:108` (cards pretos invisíveis no dark), `Marquee.tsx:17` (texto em risco no light), `PortfolioCarousel.tsx:64 vs 78` (dois esquemas opostos no mesmo carrossel).
- [ ] 🟡 **Valores mágicos viram tokens ou escala** — `py-[45.80px]` (`LandingPage.tsx:119`), `md:rounded-[240px]` (`PortfolioCarousel.tsx:64`), `pl-[3.2rem]/[3.5rem]/[3.8rem]` para o mesmo padrão em cards irmãos (`MethodTOISection.tsx:99,116,133`), `top: 150 + index*20` inline (`ServicesSection.tsx:75`), rotações por item no data (`projects.ts`).
- [ ] 🟡 **Neon fora da paleta** — gradientes `#635BFF/#FFD100/#A855F7/#22C55E` (`ServicesSection`) rompem o sistema monocromático+violeta. Ou entram no tema como tokens, ou saem.
- [ ] ⚪ **Hover não pode causar layout shift** — `pl-0 group-hover:pl-8` desloca texto 32px (`MajorPartnerships.tsx:78`). Animar `transform`/`opacity`, nunca padding/margin/width.
- [ ] ⚪ **Um radius, uma escala** — `rounded-sm` no mobile vs `rounded-[240px]` no desktop no mesmo card é mudança de identidade, não de responsividade.

## 7. Acessibilidade (a11y)

- [ ] 🟠 **Overflow horizontal no mobile (390px)** — hero (parágrafo + botão cortados) e grid de integrações (`BrandsSection`) vazam da viewport. Testar cada seção em 360/390/768px.
- [ ] 🟡 **Modal sem Escape nem focus trap** — `BrandsSection` (microsserviços). Fechar com Esc, focar no open, devolver foco no close, `aria-modal`.
- [ ] 🟡 **Alt texts em PT e descritivos** — hoje `${project.name} Project` (inglês) em `MajorPartnerships`.
- [ ] 🟡 **Autoplay do carrossel não pode brigar com o usuário** — `stopOnInteraction: false` (`PortfolioCarousel`) — pausar após interação e respeitar `prefers-reduced-motion`.
- [ ] ⚪ **Contraste**: manter a disciplina documentada em `globals.css` (comentários AA) — validar os pares novos com https://contrast-ratio.com antes de introduzir cor.
- [ ] ⚪ **Texto não clicável por hack** — `Link` absoluto cobrindo card + `pointer-events-none` no conteúdo (`PricingSection.tsx:95`) impede seleção de texto. Usar padrão "stretched link" com texto selecionável.

## 8. Performance

- [ ] 🟡 **Animações `whileInView` precisam de fallback** — na captura desktop, seções inteiras ficaram em branco por timing. `once: true`, threshold baixo, e conteúdo visível sem JS (ou `initial={false}` onde fizer sentido).
- [ ] 🟡 **Placeholders de dynamic import com tamanho real** — `loading: () => <div className="h-[400px]">` fixos (`LandingPage.tsx:15-49`) causam saltos. Medir altura real das seções.
- [ ] ⚪ **Manter**: `next/font` (correto), dynamic imports (correto), `will-change` só em elementos animados.
- [ ] ⚪ **Imagens de logo otimizadas** — PNGs de logo em `public/` sem dimensão declarada; converter para WebP/AVIF ou SVG quando possível.

## 9. SEO / Metadata / Posicionamento

- [ ] 🟠 **Resolver dissonância de posicionamento** — metadata diz "Desenvolvimento de softwares", hero diz "Digital Impact", corpo vende tráfego/branding. Definir UMA promessa e alinhar title/description/copy.
- [ ] 🟡 **Padronizar a marca:** sempre "TZOLKIN" (caps) — hoje alterna com "tzolkin" minúsculo (`ServicesSection.tsx:152`).
- [ ] 🟡 **Tom de voz único** — hoje oscila entre corporativo ("Soluções B2B de alto padrão") e informal ("a gente para de testar coisa solta", "Gasta bem menos!"). Escolher um registro por seção, no mínimo.
- [ ] ⚪ **`sitemap.ts` + `robots.ts`** do App Router.

## 10. Git / CI / Disciplina

- [ ] 🟠 **Conventional Commits** a partir de agora: `fix:`, `feat:`, `refactor:`, `chore:`, `docs:`. Nunca mais "fix" / "hello world - i have bugs".
- [ ] 🟠 **CI mínimo** (GitHub Actions ou Vercel checks): `npm run lint` + `npm run build` em todo push. Hoje o lint existe mas claramente não barra nada.
- [ ] 🟡 **Branch por frente de trabalho** (`chore/reorg`, `fix/p0-credibilidade`, `feat/founder-photo`) com merge na `main` via PR — mesmo solo, o diff revisável evita regressão.
- [ ] 🟡 **`npm run lint` limpo antes de commitar** — adicionar `husky` + `lint-staged` se quiser enforcement local.
- [ ] ⚪ **Deletar código morto no commit, não "comentar para depois".**

## 11. Segurança / Privacidade

- [ ] 🔴 **Nada interno em `public/`** — regra permanente após o incidente `clients_info.md`. `public/` = só assets públicos finais.
- [ ] 🟠 **`.env.local` nunca commitado** (`.gitignore` já cobre `.env*` — verificar histórico: se alguma vez entrou, rotacionar as chaves).
- [ ] 🟡 **Dados de clientes em `data/`** — `brands.ts`/`projects.ts` são públicos por natureza (vão pro bundle). Nunca colocar contato interno, valores de contrato ou notas de bastidor ali.
- [ ] ⚪ **Claims verificáveis apenas** — parcerias, métricas ("ROI 9.900%", `servicesData.ts:179`) e cases precisam ser reais e defensáveis.

---

## Ordem de execução sugerida

| # | Bloco | Itens | Esforço |
|---|---|---|---|
| 1 | Segurança + identidade | §1 (docs público, tree sujo, hubdi→tzolkin) | ~1 h |
| 2 | Sanitização P0 | §3 classes quebradas · §4 links mortos, preço, dummy | ~3 h |
| 3 | Estrutura de pastas | §2 consolidação + charts + legado | ~3 h |
| 4 | Mobile + a11y | §7 overflow, modal, alts | ~2 h |
| 5 | Regras permanentes | §5 React · §6 Tailwind (aplicar ao refatorar cada arquivo) | contínuo |
| 6 | Posicionamento | §9 promessa única + metadata por rota | ~2 h |
| 7 | Disciplina | §10 commits/CI/branches | setup 1 h |
