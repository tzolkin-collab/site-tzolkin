import React from 'react'

interface MarqueeProps {
  items: string[]
  speed?: number
}

/**
 * Carrossel infinito de palavras.
 *
 * Implementado com animação CSS pura (keyframes `marquee` do globals.css),
 * o mesmo padrão do LogoMarquee. Sem Embla/JS/rAF: não trava em refresh,
 * troca de aba ou interação — o navegador gerencia a animação.
 *
 * O track renderiza 4 conjuntos; o keyframe desloca -50% (= 2 conjuntos),
 * um múltiplo exato do conteúdo, então o loop é contínuo e sem salto.
 * Pausa no hover via `.animate-marquee:hover` (padrão do site).
 */
export function Marquee({ items, speed = 1 }: MarqueeProps) {
  const duration = 50 / speed;

  const renderSet = (keyPrefix: string) =>
    items.map((item, index) => (
      <div
        key={`${keyPrefix}-${index}`}
        className="flex-[0_0_auto] min-w-0 mr-12 text-background font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap"
      >
        {item}
      </div>
    ));

  return (
    <div className="w-full overflow-hidden bg-foreground py-4 transition-colors duration-500">
      <div
        className="flex animate-marquee touch-pan-y"
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        {renderSet('a')}
        {renderSet('b')}
        {renderSet('c')}
        {renderSet('d')}
      </div>
    </div>
  )
}
