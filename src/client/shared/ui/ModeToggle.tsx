'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/client/shared/ui/Button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    const css = document.createElement('style')
    css.textContent = '*,*::before,*::after{transition:none!important}'
    document.head.appendChild(css)
    setTheme(theme === 'dark' ? 'light' : 'dark')
    requestAnimationFrame(() => requestAnimationFrame(() => document.head.removeChild(css)))
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="rounded-full w-9 h-9 p-0"
    >
      <span className="sr-only">Toggle theme</span>
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
