'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from './Button';

const forYou = [
  "Sua operação precisa de software profissional — site, sistema ou produto próprio — para crescer com estabilidade.",
  "Você quer uma marca de software ao seu lado, não mais um fornecedor de páginas.",
  "Você enxerga engenharia, tagueamento e design como vantagem competitiva.",
  "Você quer acompanhar de perto as ferramentas que a TZOLKIN opera — e o educacional que ela está construindo."
];

const notForYou = [
  "Você busca templates genéricos de arrastar-e-soltar ou a opção mais barata do mercado.",
  "Você trata software como custo, não como infraestrutura de crescimento.",
  "Você prefere promessas mágicas a método, dados e execução consistente.",
  "Para você, \"no ar\" é sinônimo de \"pronto\"."
];

export function WhoIsItForSection() {

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
            Para quem a TZOLKIN <span className="text-brand">faz sentido</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">

          {/* É PARA VOCÊ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-background border border-green-500/20 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden group hover:border-green-500/50 transition-colors"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-green-500" />

            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-green-600 dark:text-green-400">
              <CheckCircle2 className="w-8 h-8" />
              É para você se:
            </h3>

            <ul className="space-y-6">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NÃO É PARA VOCÊ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-background border border-red-500/20 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden group hover:border-red-500/50 transition-colors"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-red-500" />

            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-red-600 dark:text-red-400">
              <XCircle className="w-8 h-8" />
              Não é para você se:
            </h3>

            <ul className="space-y-6">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <Link href="/forms?interesse=consultoria">
            <Button variant="primary" size="lg" className="rounded-full px-8 h-14 text-lg bg-foreground text-background hover:bg-foreground/90 group">
              Quero ser cliente TZOLKIN
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
