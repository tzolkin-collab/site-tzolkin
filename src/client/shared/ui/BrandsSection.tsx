'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/client/shared/ui/Button';
import Link from 'next/link';
import { ArrowRight, Plus, X, Network } from 'lucide-react';

const integrations = [
  "META", "UTMIFY", "GOOGLE", "TIKTOK", "STRIPE", "SHOPIFY", "API DO PIX", "API NFE", "IDERIS", "VERCEL", "CLOUDFLARE"
];

export function BrandsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pb-12 bg-background relative overflow-hidden border-t md:py-12 border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-32 lg:gap-24 items-start">

          {/* Text Content */}
          <div className="flex-1 space-y-8 sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Sua operação conectada a uma rede ágil de <span className="text-brand">integrações</span>.
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-helvica">
                <p>
                  Aqui não criamos gambiarras. A VOLTICS constrói pipelines robustos integrando ferramentas líderes que você já usa ou precisará no futuro.
                </p>
                <p>
                  O objetivo é claro: <span className="text-foreground font-semibold">tornar seu ecossistema fluido, rastreável e totalmente voltado para conversão e controle de dados.</span>
                </p>
              </div>

              <div className="pt-8">
                <Link href="#contact">
                  <Button variant="primary" size="lg" className="rounded-full px-8 h-14 text-lg bg-foreground text-background hover:bg-foreground/90 group w-full md:w-auto">
                    Centralizar minha operação
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Integration Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="aspect-square bg-neutral-100 dark:bg-white/5 rounded-2xl flex items-center justify-center p-6 hover:bg-neutral-200 dark:hover:bg-brand/20 transition-colors group relative overflow-hidden border border-transparent hover:border-brand/40"
                >
                  <span className="font-extrabold text-center text-foreground uppercase tracking-widest text-lg md:text-xl transform group-hover:scale-110 transition-transform duration-300">
                    {integration}
                  </span>
                </motion.div>
              ))}

              {/* + Microsserviços Card */}
              <motion.div
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: integrations.length * 0.05 }}
                className="aspect-square bg-brand/10 dark:bg-brand/20 cursor-pointer rounded-2xl flex flex-col items-center justify-center p-6 hover:bg-brand/20 dark:hover:bg-brand/30 transition-colors group relative overflow-hidden border border-brand/50 hover:border-brand shadow-[0_0_15px_rgba(255,209,0,0.2)]"
              >
                <Plus className="w-10 h-10 mb-2 text-brand group-hover:scale-125 transition-transform duration-300" />
                <span className="font-bold text-center text-foreground uppercase tracking-widest text-sm md:text-base">
                  Microsserviços
                </span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Microsserviços Popup Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background border border-border/50 max-w-lg w-full rounded-3xl p-8 relative shadow-2xl overflow-hidden"
            >
              {/* Dynamic Internal Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent pointer-events-none" />

              <button
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand">
                  <Network className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Microsserviços</h3>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed relative z-10">
                <p>
                  Desenvolvemos integrações via <strong className="text-foreground">Webhooks, mensageria (Redis pub/sub, RabbitMQ), automações assíncronas</strong> e muito mais para garantir um trânsito de dados perfeito, sem travamentos de thread na sua aplicação principal.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-sm md:text-base">
                  <li>Filas Assíncronas</li>
                  <li>Arquitetura Event-driven</li>
                  <li>Sincronização em tempo real da loja com o Back-office</li>
                </ul>
              </div>

              <div className="mt-8 relative z-10">
                <Button variant="primary" onClick={() => setIsModalOpen(false)} className="w-full rounded-full h-12 bg-foreground text-background">
                  Entendi
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
