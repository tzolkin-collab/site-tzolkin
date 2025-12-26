'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export function WhoIsItForSection() {
  const forYou = [
    "Seu negócio já vende, mas você sente que a marca não acompanha o nível da operação.",
    "Seu Instagram existe, mas não traduz o tamanho do que você entrega.",
    "Você está disposto a mexer em posicionamento, visual e conteúdo pra ter uma marca mais forte.",
    "Você quer parar de tentar resolver tudo com post e tráfego e ter um eixo claro de marca."
  ];

  const notForYou = [
    "Você só quer alguém pra “fazer arte” e encher o feed.",
    "Você procura solução mágica em 7 dias sem se envolver no processo.",
    "Você não está disposto a ajustar produto, experiência ou atendimento se isso aparecer no diagnóstico.",
    "Você quer só “mais seguidor” e não está olhando pra marca, percepção e lucro."
  ];

  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Pra quem a HUBDI <span className="text-brand">faz sentido</span>.
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
                  <p className="text-lg text-foreground/80 leading-relaxed">{item}</p>
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
