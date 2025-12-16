'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

interface MarqueeProps {
  items: string[]
  speed?: number // pixels per frame, approx.
}

export function Marquee({ items, speed = 1 }: MarqueeProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ speed, stopOnInteraction: false, stopOnMouseEnter: false })
  ])

  return (
    <div className="w-full overflow-hidden bg-foreground py-4" ref={emblaRef}>
      <div className="flex touch-pan-y">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex-[0_0_auto] min-w-0 mr-12 text-background font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap"
          >
            {item}
          </div>
        ))}
        {/* Duplicate items to ensure smooth infinite loop if items are few, though embla handles loop well */}
        {items.map((item, index) => (
           <div 
             key={`dup-${index}`} 
             className="flex-[0_0_auto] min-w-0 mr-12 text-background font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap"
           >
             {item}
           </div>
         ))}
      </div>
    </div>
  )
}
