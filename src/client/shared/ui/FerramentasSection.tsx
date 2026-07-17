'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Smartphone, Server, GraduationCap, LucideIcon } from 'lucide-react';
import { Button } from './Button';

interface FerramentaItem {
  icon: LucideIcon;
  title: string;
  descriptor: string;
  description: string;
  cta: string;
  href: string;
  comingSoon?: boolean;
}

const ferramentas: FerramentaItem[] = [
  {
    icon: Cloud,
    title: "SaaS",
    descriptor: "Plataformas por assinatura",
    description: "Software hospedado pela TZOLKIN para resolver dores reais de operação. Você assina, entra pelo navegador e usa — sem instalação, sem servidor, sem manutenção do seu lado.",
    cta: "Quero falar com a TZOLKIN",
    href: "/forms?interesse=ferramentas",
  },
  {
    icon: Smartphone,
    title: "PWAs",
    descriptor: "Aplicativos web progressivos",
    description: "Apps que abrem como um site e funcionam como aplicativo: rápidos, instaláveis na tela do celular e sem depender de loja de aplicativos para chegar ao usuário.",
    cta: "Quero falar com a TZOLKIN",
    href: "/forms?interesse=ferramentas",
  },
  {
    icon: Server,
    title: "NaaS",
    descriptor: "Operação contínua como serviço",
    description: "Camadas de infraestrutura e operação mantidas pela TZOLKIN por assinatura: a máquina fica com a gente, o resultado fica com você.",
    cta: "Quero falar com a TZOLKIN",
    href: "/forms?interesse=ferramentas",
  },
  {
    icon: GraduationCap,
    title: "Educacional",
    descriptor: "Educação em software",
    description: "O mesmo padrão das nossas entregas, aberto para quem quer aprender — método, não apostila.",
    cta: "Quero ser avisado",
    href: "/educacional",
    comingSoon: true,
  },
];

export function FerramentasSection() {
  return (
    <section id="ferramentas" className="py-24 bg-background relative overflow-hidden">
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
            <span>Ferramentas TZOLKIN</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-6">
            Software com a nossa assinatura, <span className="text-brand">no ar</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ferramentas próprias desenvolvidas e mantidas pela TZOLKIN: SaaS, PWAs e NaaS nascidos da nossa operação real — e um educacional a caminho.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {ferramentas.map((ferramenta, index) => (
            <motion.div
              key={ferramenta.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white dark:bg-background border border-border rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:border-brand/50 transition-colors flex flex-col"
            >
              {/* Em breve Badge */}
              {ferramenta.comingSoon && (
                <div className="absolute top-6 right-6 px-2.5 py-1 rounded-full border border-brand/30 bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider">
                  Em breve
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-brand2 flex items-center justify-center shadow-lg shadow-brand/20 mb-8">
                <ferramenta.icon size={24} strokeWidth={1.5} className="text-brand-foreground drop-shadow-md" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-1 tracking-tight">
                {ferramenta.title}
              </h3>
              <p className="text-brand font-medium mb-4">
                {ferramenta.descriptor}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                {ferramenta.description}
              </p>

              {/* CTA (secondary) */}
              <Link href={ferramenta.href} className="mt-auto">
                <Button variant="outline" className="w-full rounded-full">
                  {ferramenta.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Link href="/ferramentas">
            <Button variant="primary" size="lg" className="rounded-full px-8 h-14 text-lg bg-foreground text-background hover:bg-foreground/90">
              Conhecer as ferramentas
            </Button>
          </Link>
        </motion.div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mt-12 leading-relaxed"
        >
          Novas ferramentas a caminho — o educacional é a próxima.
        </motion.p>
      </div>
    </section>
  );
}
