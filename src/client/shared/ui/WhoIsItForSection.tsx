'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export function WhoIsItForSection() {
  const forYou = [
    "Operações que precisam de infraestrutura digital profissional, rápida e escalável para crescer.",
    "Negócios cansados de páginas amadoras que travam e derrubam as taxas de conversão.",
    "Empresas que buscam tagueamento avançado (UTMify, CAPI, GTM) para otimizar o ROAS.",
    "Você que entende que design premium e performance técnica são fundamentais."
  ];

  const notForYou = [
    "Quem busca soluções genéricas de arrastar-e-soltar ou templates engessados e lentos.",
    "Operações que não dão importância para velocidade de carregamento e design exclusivo.",
    "Quem quer o 'mais barato hoje', mesmo que isso custe vendas perdidas amanhã.",
    "Você que acredita que uma landing page sem tagueamento profissional não afeta resultados."
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Pra quem a VOLTICS <span className="text-brand">faz sentido</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">

          {/* É PRA VOCÊ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-background border border-green-500/20 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden group hover:border-green-500/50 transition-colors"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-green-500" />

            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-green-600 dark:text-green-400">
              <CheckCircle2 className="w-8 h-8" />
              É pra você se:
            </h3>

            <ul className="space-y-6">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <p className="text-lg text-foreground  leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NÃO É PRA VOCÊ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-background border border-red-500/20 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden group hover:border-red-500/50 transition-colors"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-red-500" />

            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-red-600 dark:text-red-400">
              <XCircle className="w-8 h-8" />
              Não é pra você se:
            </h3>

            <ul className="space-y-6">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <p className="text-lg text-foreground/80 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
