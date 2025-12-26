'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/client/shared/ui/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { brands } from '@/client/shared/data/brands';

export function BrandsSection() {
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
                Marcas que já colocamos em <span className="text-brand">movimento</span>.
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-helvica">
                <p>
                  Aqui não é teoria. A HUBDI já entrou em marcas reais, de nichos diferentes, pra organizar posicionamento, identidade e conteúdo.
                </p>
                <p>
                  Cada negócio tem um contexto, mas o objetivo é o mesmo: <span className="text-foreground font-semibold">tirar a marca do genérico e colocar em um lugar claro, forte e lembrado na cabeça do cliente.</span>
                </p>
              </div>

              <div className="pt-8">
                <Link href="#contact">
                  <Button variant="primary" size="lg" className="rounded-full px-8 h-14 text-lg bg-foreground text-background hover:bg-foreground/90 group w-full md:w-auto">
                    Quero colocar minha empresa em movimento
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Logo Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-square bg-neutral-100 dark:bg-white/5 rounded-2xl flex items-center justify-center p-6 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors group relative overflow-hidden border border-transparent hover:border-brand/20"
                >
                  <div className="relative w-full h-full filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                     <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
