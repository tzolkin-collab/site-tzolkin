'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Twitter', href: '#', icon: Twitter },
  ];

  const quickLinks = [
    { label: 'Work', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <footer className="bg-white dark:bg-background text-foreground pt-24 pb-8 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          {/* Brand & CTA Section */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="mb-12">
              <Link href="/" className="inline-block group">
                <div className="flex items-center">
                  <span className="text-4xl md:text-6xl font-bold tracking-widest uppercase text-brand">HUB</span>
                  <span className="text-4xl md:text-6xl font-bold tracking-widest text-foreground uppercase">Di</span>
                </div>
              </Link>
              <p className="mt-6 text-black dark:text-white text-lg max-w-md leading-relaxed">
                Criamos experiências digitais que conectam marcas a pessoas através de design estratégico e tecnologia de ponta.
              </p>
            </div>
            
            <a 
              href="mailto:hello@hubdi.com" 
              className="inline-flex items-center gap-2 text-2xl md:text-3xl font-medium hover:text-brand transition-colors group w-fit"
            >
              <span>Vamos conversar?</span>
              <ArrowUpRight className="w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Links Section */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12 md:pl-12">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-8">Menu</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-lg text-foreground/70 hover:text-foreground transition-colors inline-block relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-8">Social</h4>
              <ul className="space-y-4">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a 
                      href={social.href}
                      className="flex items-center gap-3 text-lg text-foreground/70 hover:text-foreground transition-colors group"
                    >
                      <social.icon size={20} className="group-hover:text-brand transition-colors" />
                      <span>{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-foreground/10 text-black dark:text-white text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} HUBDi Digital. Todos os direitos reservados.
          </div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
