'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';

const menuItems = [
  { label: 'Work', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Contact', href: '/forms' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const BANNER_HEIGHT = 40;
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > BANNER_HEIGHT);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : 'unset';
      return next;
    });
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-[top,padding,background-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
          ? 'top-0 py-4 shadow-sm bg-background/80 backdrop-blur-md'
          : 'top-0 bg-transparent py-6'
          }`}
      >
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group z-50 relative"
          >
            <span className="text-xl font-semibold leading-6 uppercase text-foreground">Tzolkin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium tracking-wide hover:text-[var(--color-brand)] transition-colors uppercase ${scrolled ? 'text-foreground' : 'text-foreground'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pl-4 border-l border-foreground/20">
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50 relative">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="text-foreground p-2 -mr-2 hover:bg-foreground/5 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header >

      {/* Mobile Menu Overlay */}
      < div
        className={`fixed inset-0 bg-background z-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden flex flex-col justify-center items-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`
        }
      >
        <nav className="flex flex-col items-center gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={toggleMenu}
              className={`text-5xl font-bold tracking-tight text-foreground uppercase hover:text-muted-foreground transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Background decorative element */}
        <div className="absolute underline bottom-10 left-0 w-full text-center text-muted-foreground/20 text-sm tracking-[0.5em] uppercase">
          @2023 tzolkin.
        </div>
      </div >
    </>
  );
}
