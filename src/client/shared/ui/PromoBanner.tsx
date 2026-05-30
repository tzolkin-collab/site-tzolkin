'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const HIDDEN_PATHS = ['/forms'];

export function PromoBanner() {
  const pathname = usePathname();
  if (HIDDEN_PATHS.some(p => pathname.startsWith(p))) return null;

  return (
    <div className="relative w-full h-10 bg-background text-foreground z-[100] flex items-center overflow-hidden">
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
