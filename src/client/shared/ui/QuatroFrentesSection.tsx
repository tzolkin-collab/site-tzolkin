'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layers, Package, Wrench, GraduationCap, ArrowRight, LucideIcon } from 'lucide-react';

interface FrenteItem {
  icon: LucideIcon;
  number: string;
  title: string;
  tagline: string;
  description: string;
  cta: string;
  href: string;
  comingSoon?: boolean;
}

const frentes: FrenteItem[] = [
  {
    icon: Layers,
    number: "01",
    title: "Serviços",
    tagline: "Consultoria e assessoria em software, da decisão técnica à execução.",
    description: "Desenvolvimento sob medida, web design, tagueamento, pagamentos e infraestrutura — execução de ponta a ponta para operações que não podem parar.",
    cta: "Ver serviços",
    href: "/#services",
  },
  {
    icon: Package,
    number: "02",
    title: "Produtos",
    tagline: "Software white-label ou personalizado, com a sua marca.",
    description: "Produtos prontos para operar sob a sua identidade — ou desenhados do zero para a sua operação. Escopo fechado, valores claros.",
    cta: "Conhecer produtos",
    href: "/#products",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Ferramentas próprias",
    tagline: "SaaS, PWAs e NaaS com o selo TZOLKIN.",
    description: "Já em operação, resolvendo de forma produtizada o que hoje exige projeto sob medida.",
    cta: "Conhecer ferramentas",
    href: "/ferramentas",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Educacional",
    tagline: "Educação em software, do código à estratégia.",
    description: "O mesmo método que aplicamos nos projetos, do jeito TZOLKIN — direto de quem opera.",
    cta: "Quero ser avisado",
    href: "/forms?interesse=educacional",
    comingSoon: true,
  },
];

export function QuatroFrentesSection() {
  return (
    <section id="frentes" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-foreground/5 mb-6 text-sm font-medium tracking-wider uppercase text-brand">
            <span>O que a TZOLKIN é</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-6">
            Uma marca de software, <span className="text-brand">quatro frentes</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Do desenvolvimento ao educacional — tudo sob o mesmo padrão.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {frentes.map((frente, index) => (
            <motion.div
              key={frente.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white dark:bg-background border border-border rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:border-brand/50 transition-colors flex flex-col"
            >
              {/* Coming Soon Badge */}
              {frente.comingSoon && (
                <div className="absolute top-6 right-6 px-2.5 py-1 rounded-full border border-brand/30 bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider">
                  Em breve
                </div>
              )}

              {/* Number + Icon */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-brand2 flex items-center justify-center shadow-lg shadow-brand/20 shrink-0">
                  <frente.icon size={24} strokeWidth={1.5} className="text-brand-foreground drop-shadow-md" />
                </div>
                <span className="text-sm font-bold tracking-[0.2em] text-muted-foreground">
                  {frente.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                {frente.title}
              </h3>
              <p className="text-foreground font-medium leading-relaxed mb-4">
                {frente.tagline}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                {frente.description}
              </p>

              {/* CTA */}
              <Link
                href={frente.href}
                className="inline-flex items-center gap-2 font-bold text-brand hover:gap-3 transition-all mt-auto"
              >
                {frente.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
