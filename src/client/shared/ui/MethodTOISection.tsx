'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/client/shared/ui/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function MethodTOISection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-32 lg:gap-24">
          
          {/* Content Side */}
          <div className="flex-1 space-y-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Na HUBDI, a gente para de testar coisa solta e organiza sua marca com um <span className="text-brand">método próprio</span>
              </h2>
              
              <div className="space-y-6">
                <h3 className="text-4xl md:text-6xl font-bold text-brand tracking-tight">
                  Método TOI™
                </h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-helvica">
                  Enquanto eles empilham posts, o Método TOI™ alinha <span className="text-foreground font-semibold">marca</span>, <span className="text-foreground font-semibold">mensagem</span> e <span className="text-foreground font-semibold">venda</span>.
                </p>

                <div className="pt-8">
                  <Link href="#contact">
                    <Button variant="primary" size="lg" className="rounded-full px-8 h-14 text-lg bg-foreground text-background hover:bg-foreground/90 group">
                      Quero aplicar o Método TOI™
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Side - 3 Words Representation */}
          <div className="flex-1 w-full relative flex justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-square flex flex-col items-center justify-center"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand/5 rounded-full blur-3xl" />
              
              {/* Central Concept - The Method */}
              <div className="relative w-full h-full p-8 flex flex-col justify-center items-center gap-6">
                
                {/* T - TRAÇÃO */}
                <motion.div 
                  variants={itemVariants}
                  className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-xl hover:border-brand/50 transition-all group relative z-30 transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand/60">T</span>
                      <span className="text-xl md:text-2xl font-bold ml-3 text-foreground tracking-wide">TRAÇÃO</span>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded">Venda</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-[3.2rem]">
                    O motor do crescimento. Transformamos atenção em receita recorrente com sistemas de vendas previsíveis.
                  </p>
                </motion.div>

                {/* O - ORGANIZAÇÃO */}
                <motion.div 
                  variants={itemVariants}
                  className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-xl hover:border-brand/50 transition-all group relative z-20 transform hover:-translate-y-1 hover:shadow-2xl -mt-4 ml-8 md:ml-12"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand/60">O</span>
                      <span className="text-xl md:text-2xl font-bold ml-3 text-foreground tracking-wide">ORGANIZAÇÃO</span>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded">Processos</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-[3.5rem]">
                    A estrutura que sustenta a escala. Processos claros e comunicação alinhada para eliminar o caos operacional.
                  </p>
                </motion.div>

                {/* I - IDENTIDADE */}
                <motion.div 
                  variants={itemVariants}
                  className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-xl hover:border-brand/50 transition-all group relative z-10 transform hover:-translate-y-1 hover:shadow-2xl -mt-4 mr-4 md:mr-8"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand/60">I</span>
                      <span className="text-xl md:text-2xl font-bold ml-3 text-foreground tracking-wide">IDENTIDADE</span>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded">Branding</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-[2.8rem]">
                    A alma do negócio. Posicionamento único que torna sua marca irrelevante para a concorrência e desejada pelo público.
                  </p>
                </motion.div>

                {/* Connecting Line Visual */}
                <svg className="mr-150 absolute inset-0 z-0 w-full h-full pointer-events-none opacity-90" viewBox="0 0 400 400">
                  {/* Desktop Path - Smooth Curve */}
                  <path 
                    d="M200 00 C 500 100, 250 150, 250 200 C 250 250, 150 250, 150 300" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeDasharray="15 12" 
                    className="text-brand/80 hidden md:block" 
                    strokeLinecap="round"
                  />
                  
                  {/* Mobile Path - Smooth Vertical Curve */}
                  <path 
                    d="M200 80 C 200 120, 200 280, 200 320" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="6" 
                    strokeDasharray="12 12" 
                    className="text-brand/80 md:hidden" 
                    strokeLinecap="round"
                  />
                </svg>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
