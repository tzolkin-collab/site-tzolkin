'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/client/shared/ui/Button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  // Decisão documentada: o hack anterior (injetar um <style> com
  // `transition:none!important` no <head> e removê-lo após 2 rAF) foi
  // removido. As transições do site são curtas (≤500ms) e as cores mudam
  // via CSS vars, então a troca de tema vira um crossfade suave, sem
  // flicker perceptível. O hack era frágil: o timing de rAF não é
  // garantido, o <style> podia vazar se algo falhasse entre append/remove
  // e a regra global matava inclusive a animação do próprio ícone.
  // Uma desativação global robusta exigiria uma regra no globals.css
  // (fora de escopo nesta rodada) — inline style no documentElement não
  // cascateia para os descendentes, então não substitui a folha de estilo.
  const toggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    // p-0! (important) vence o px-4 do size="sm" do Button: a ordem das
    // classes no atributo não resolve conflito de padding no Tailwind.
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="rounded-full w-9 h-9 p-0!"
    >
      <span className="sr-only">Alternar tema</span>
      <div className="relative w-4 h-4 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full transition-transform duration-200 scale-100 rotate-0 dark:scale-0 dark:-rotate-90"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          className="absolute inset-0 w-full h-full transition-transform duration-200 scale-0 rotate-90 dark:scale-100 dark:rotate-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </Button>
  )
}
