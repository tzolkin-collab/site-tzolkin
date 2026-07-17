'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EducacionalPage() {
  return (
    <div className="container mx-auto md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-foreground mb-6 text-sm font-medium tracking-wider uppercase text-background">
          <GraduationCap size={14} />
          <span>Educacional</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-brand leading-tight">
          Em breve.
        </h1>
      </motion.div>

      {/* Carta da equipe */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mx-auto max-w-[65ch] px-6 md:px-0"
      >
        <div className="rounded-2xl border border-border/40 bg-white/[0.02] dark:bg-neutral-900/30 p-8 md:p-14">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            Olá,
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
            Acreditamos que conhecimento em software não se compra em pacote — se constrói com quem vive o ofício todos os dias.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
            O educacional da TZOLKIN está sendo desenhado com o mesmo padrão que aplicamos em cada linha de código: sem fórmulas mágicas, sem atalhos, sem pressa. Quando estiver pronto, você vai saber.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-12">
            Até lá, seguimos fazendo o que nos define: software de alto padrão.
          </p>
          <p className="text-lg md:text-xl font-bold text-foreground">
            — Equipe TZOLKIN
          </p>
        </div>
      </motion.div>

      {/* CTA discreto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 mb-10 text-center"
      >
        <Link href="/forms?interesse=educacional">
          <button className="h-12 px-8 rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background text-sm font-medium inline-flex items-center justify-center gap-2 transition-all duration-300">
            Quero ser avisado
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
