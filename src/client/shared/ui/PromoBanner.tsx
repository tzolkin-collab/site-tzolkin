'use client';

import React from 'react';

export function PromoBanner() {
  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-background text-foreground z-[100] flex items-center overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap items-center font-bold text-sm tracking-widest uppercase">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="mx-4 flex items-center gap-4">
            <span>OFFERTA EXCLUSIVA: 20% DE DESCONTO EM TODOS OS PROJETOS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
