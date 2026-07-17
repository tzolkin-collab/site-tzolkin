"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type FooterLink = { label: string; href: string; badge?: string };

const frentesLinks: FooterLink[] = [
  { label: "Serviços", href: "/#services" },
  { label: "Produtos", href: "/#products" },
  { label: "Ferramentas", href: "/ferramentas" },
  { label: "Educacional", href: "/educacional", badge: "Em breve" },
];

const tzolkinLinks: FooterLink[] = [
  { label: "Quem somos", href: "/#about" },
  { label: "Cases", href: "/#cases" },
  { label: "Capacidades", href: "/catalogo" },
  { label: "Portfólio", href: "/portfolio" },
];

const contatoLinks: FooterLink[] = [
  { label: "Iniciar projeto", href: "/forms" },
  { label: "Consultor virtual", href: "/consultor" },
  { label: "contato@tzolkin.com.br", href: "mailto:contato@tzolkin.com.br" },
];

const footerColumns: { title: string; links: FooterLink[] }[] = [
  { title: "Frentes", links: frentesLinks },
  { title: "A TZOLKIN", links: tzolkinLinks },
  { title: "Contato", links: contatoLinks },
];

const currentYear = new Date().getFullYear();

export function Footer() {

  return (
    <footer
      id="contact"
      className="bg-background text-foreground pt-24 pb-8 px-6 md:px-12 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-10">
          {/* Brand & CTA Section */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="mb-12">
              <Link href="/" className="inline-block group">
                <div className="flex items-center">
                  <div className="flex justify-center pr-5 py-8">
                    <Image
                      src="/logotzolkin.svg"
                      alt="TZOLKIN Logo"
                      width={80}
                      height={80}
                      className="rounded-2xl object-contain dark:hidden"
                    />
                    <Image
                      src="/logotzolkin-white.svg"
                      alt="TZOLKIN Logo"
                      width={80}
                      height={80}
                      className="rounded-2xl object-contain hidden dark:block"
                    />
                  </div>
                  <span className="text-4xl md:text-6xl font-bold tracking-widest text-foreground uppercase">
                    Tzolkin
                  </span>
                </div>
              </Link>
              <p className="mt-6 text-lg max-w-md leading-relaxed">
                Software de alto padrão: consultoria, produtos sob medida e
                ferramentas próprias — método e sofisticação em cada linha, de
                código e de entrega.
              </p>
            </div>

            <Link
              href="/forms"
              className="inline-flex items-center gap-2 text-2xl md:text-3xl font-medium hover:text-brand transition-colors group w-fit"
            >
              <span>Vamos conversar?</span>
              <ArrowUpRight className="w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Links Section */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-12 md:pl-12">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-8">
                  {column.title}
                </h4>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-lg text-foreground/70 hover:text-foreground transition-colors inline-block relative group"
                      >
                        {link.label}
                        {link.badge && (
                          <span className="ml-1.5 align-super text-[10px] font-semibold tracking-widest text-brand inline-flex whitespace-nowrap">
                            {link.badge}
                          </span>
                        )}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-foreground/10 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} TZOLKIN. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-foreground/50">
            <span>Política de privacidade</span>
            <span>·</span>
            <span>Termos de uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
