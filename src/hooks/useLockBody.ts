'use client';

import { useEffect } from 'react';

/**
 * Trava o scroll do body enquanto `locked` for true.
 *
 * Salva o valor original de `document.body.style.overflow`, aplica
 * 'hidden' e restaura o valor original no cleanup — assim a página
 * nunca fica travada se o componente for desmontado com o menu,
 * modal ou chat ainda aberto.
 */
export function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
}
