'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, XCircle, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from './Button';

export function TrafficProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      text: "Você impulsiona post, roda campanha, vê o número subir, mas o faturamento não acompanha o investimento em mídia."
    },
    {
      icon: Search,
      text: "O cliente até chega, mas não entende rápido quem você é, o que entrega e por que vale o preço."
    },
    {
      icon: XCircle,
      text: "Na prática, você está pagando para levar pessoas a um lugar que ainda não está pronto para converter."
    }
  ];

  return (
    <section className="pb-12 md:py-32 bg-background text-foreground relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-16 text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Diagnóstico TZOLKIN</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Você paga caro pelo cliente e ainda <span className="text-red-500">deixa dinheiro na mesa.</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Você compra clique, compra visualização, compra lead — mas, se a marca não estiver clara, posicionada e preparada, a maioria entra, olha rápido e vai embora.
            </motion.p>
          </div>

          {/* Problem Cards */}
          <div className="grid gap-6 md:gap-8 mb-16">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 p-6 md:p-8 rounded-2xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-colors"
              >
                <div className="shrink-0 p-3 rounded-xl bg-red-500/10 text-red-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-lg text-foreground leading-relaxed pt-1">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-8 md:p-12 rounded-3xl bg-brand/10 border border-brand/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-foreground/5 blur-3xl" />
            <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-foreground">
              Tráfego não é solução, é <span className="text-brand">amplificador</span>.
            </h3>
            <p className="relative z-10 text-xl text-foreground mt-4">
              Se a marca está confusa, você só amplia a confusão.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <Link href="/forms">
              <Button variant="primary" size="lg" className="rounded-full px-8 h-14 text-lg bg-foreground text-background hover:bg-foreground/90 group">
                Quero parar de desperdiçar verba
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
