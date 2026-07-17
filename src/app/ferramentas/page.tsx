'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Cloud, Smartphone, Server, GraduationCap, type LucideIcon } from 'lucide-react';
import Link from 'next/link';

type Tool = {
  icon: LucideIcon;
  title: string;
  descriptor: string;
  description: string;
  color: string;
  comingSoon: boolean;
  cta?: {
    label: string;
    href: string;
  };
};

const tools: Tool[] = [
  {
    icon: Cloud,
    title: 'SaaS',
    descriptor: 'Plataformas por assinatura',
    description: 'Software hospedado pela TZOLKIN para resolver dores reais de operação. Você assina, entra pelo navegador e usa — sem instalação, sem servidor, sem manutenção do seu lado.',
    color: '#635BFF',
    comingSoon: false
  },
  {
    icon: Smartphone,
    title: 'PWAs',
    descriptor: 'Aplicativos web progressivos',
    description: 'Apps que abrem como um site e funcionam como aplicativo: rápidos, instaláveis na tela do celular e sem depender de loja de aplicativos para chegar ao usuário.',
    color: '#22C55E',
    comingSoon: false
  },
  {
    icon: Server,
    title: 'NaaS',
    descriptor: 'Operação contínua como serviço',
    description: 'Camadas de infraestrutura e operação mantidas pela TZOLKIN por assinatura: a máquina fica com a gente, o resultado fica com você.',
    color: '#06B6D4',
    comingSoon: false
  },
  {
    icon: GraduationCap,
    title: 'Educacional',
    descriptor: 'Educação em software, do jeito TZOLKIN',
    description: 'O mesmo padrão das nossas entregas, aberto para quem quer aprender — método, não apostila.',
    color: '#A855F7',
    comingSoon: true,
    cta: {
      label: 'Quero ser avisado',
      href: '/educacional'
    }
  },
];

export default function FerramentasPage() {
  return (
    <div className="container mx-auto md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-foreground mb-6 text-sm font-medium tracking-wider uppercase text-background">
          <Sparkles size={14} />
          <span>Ferramentas TZOLKIN</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6 leading-tight">
          Software nosso,<br />
          <span className="text-brand">trabalhando por você.</span>
        </h1>
        <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto px-6 md:px-0">
          A TZOLKIN desenvolve e opera ferramentas próprias nos formatos SaaS, PWA e NaaS — nascidas da nossa operação real, em evolução contínua.
        </p>
      </motion.div>

      {/* Formatos */}
      <section className="mb-28 px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group p-8 rounded-2xl border border-border/40 bg-white/[0.02] dark:bg-neutral-900/30 hover:border-brand/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${tool.color}15` }}
                >
                  <tool.icon className="w-6 h-6" style={{ color: tool.color }} />
                </div>
                {tool.comingSoon && (
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand border border-brand/30 rounded-full px-2.5 py-1">
                    Em breve
                  </span>
                )}
              </div>
              <h3 className="text-xl font-black text-foreground mb-1 tracking-tight">{tool.title}</h3>
              <p className="text-sm font-medium text-foreground/50 mb-4">{tool.descriptor}</p>
              <p className="text-foreground/60 leading-relaxed mb-8">{tool.description}</p>
              {tool.cta && (
                <div className="mt-auto">
                  <Link href={tool.cta.href}>
                    <button className="w-full h-12 px-6 rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300">
                      {tool.cta.label}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-foreground/50 mt-10"
        >
          Novos formatos a caminho — o educacional TZOLKIN é o próximo.
        </motion.p>
      </section>

      {/* CTA — Fale com a TZOLKIN */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-foreground mx-5 text-background border-brand border rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl mb-10"
      >
        <div className="max-w-2xl text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <Sparkles className="w-8 h-8 opacity-70 hidden md:block" />
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Quer saber mais sobre as ferramentas TZOLKIN?</h3>
          </div>
          <p className="text-background text-lg font-medium">
            Fale com a equipe e conheça de perto o que já está trabalhando por você.
          </p>
        </div>
        <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
          <Link href="/forms?interesse=ferramentas">
            <button className="w-full md:w-auto h-14 px-6 text-base md:h-16 md:px-10 md:text-lg whitespace-nowrap rounded-full bg-background text-foreground hover:bg-white/20 hover:text-black hover:border hover:border-black tracking-wide font-bold flex items-center justify-center gap-3 transition-all">
              Falar com a TZOLKIN
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <p className="text-sm text-background/60 mt-4 text-center">
            Conversa direta com a equipe. Sem spam.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
