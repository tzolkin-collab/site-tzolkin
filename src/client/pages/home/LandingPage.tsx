'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/client/shared/ui/Button';
import { Marquee } from '@/client/shared/ui/Marquee';
import { Header } from '@/client/shared/ui/Header';
import { Footer } from '@/client/shared/ui/Footer';
import { PortfolioCarousel } from '@/client/shared/ui/PortfolioCarousel';
import { MajorPartnerships } from '@/client/shared/ui/MajorPartnerships';
import { ArrowRight, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/client/shared/data/projects';

export function LandingPage() {
  const marqueeItems = [
    "Design", "Strategy", "Marketing", "Branding",
    "Design", "Strategy", "Marketing", "Branding"
  ];

  const regularProjects = projects.filter(p => p.category !== 'partnership');
  const partnershipProjects = projects.filter(p => p.category === 'partnership');

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Header Responsivo */}
      <Header />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="overflow-hidden">
            <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tight text-foreground uppercase mix-blend-normal animate-[slideUp_1s_var(--ease-sophisticated)_forwards]">
              Digital
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tight text-brand uppercase mix-blend-normal pl-[10vw] animate-[slideUp_1s_var(--ease-sophisticated)_0.1s_forwards] opacity-0 [animation-fill-mode:forwards]">
              Impact
            </h1>
          </div>
          
          <div className="mt-12 md:mt-18 flex flex-col md:flex-row justify-between items-end gap-8 animate-[fadeIn_1s_var(--ease-sophisticated)_0.5s_forwards] opacity-0">
            <p className="max-w-md text-lg md:text-xl text-muted-foreground dark:text-gray-0 leading-relaxed font-helvica">
              Com a <span className="text-brand font-bold">metodologia</span> certa para alinhar <span className="text-brand font-bold">estratégia</span>, <span className="text-brand font-bold">identidade </span>e <span className="text-brand font-bold">comunicação</span>, <br/>
               tirar sua marca do genérico e construir uma presença que é clara, desejada e preparada pra vender todos os dias.
            </p>
            
            <div className="flex gap-4">
              <Button variant="primary" size="lg" className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 hover:scale-105">
                Iniciar Projeto
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Marquee / Divider */}
      <Marquee items={marqueeItems} speed={2} />

      {/* Carousel Section */}
      <section className="bg-background relative overflow-hidden md:py-0">
        <div className="w-full md:mb-24 flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 animate-[fadeIn_1s_var(--ease-sophisticated)_0.5s_forwards] opacity-0">
            {/* Text Content */}
            <div className="text-[0vw] md:text-[4vw] md:pt-15 md:border-t-[5px] md:border-r-[2px] md:rounded-tr-[1px] border-brand mx:pl-0 md:pr-4 md:pl-2 leading-[0.9] font-bold tracking-tight text-foreground uppercase mix-blend-normal">
             <span className="text-brand">CASES</span><br/>
             DE<br/>
            <span className="text-brand">SUCESSO</span><br/>
            HUB<span className="text-brand">DI</span>
            </div>
            <p className="max-w-md px-4 md:pr-2 pr-8 bg-white dark:bg-background md:bg-black md:py-4 md:dark:bg-white md:pl-[20px] md:border-l-[5px] md:border-b-[5px] md:rounded-bl-[1px] md:border-brand text-xl md:text-2xl text-black dark:text-white md:text-white md:dark:text-black leading-relaxed font-helvica lg:text-left text-left">
              Se sua <span className="text-brand font-bold">marca</span> não anda, não é por falta de esforço.
              É por falta de <span className="text-brand font-bold">direção</span>.
              Hoje ou você <span className="text-brand font-bold">tem números</span> e não tem <span className="text-brand font-bold">venda</span>, ou não tem nem números. 
              Nos dois casos, o problema é o mesmo: sua <span className="text-brand font-bold">marca</span> não está forte o suficiente na cabeça de quem decide comprar.
            </p>
            
            {/* Center Card */}
             <div className="flex w-full bg-black dark:bg-white md:border-b-[5px] border-brand py-[45.80px] flex flex-col items-center justify-center group overflow-hidden mx-auto lg:mx-0 transition-colors duration-500 animate-[fadeIn_1s_var(--ease-sophisticated)_0.1s_forwards] opacity-0">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 text-center space-y-6 px-6 md:px-12">
                  <Link href="/portfolio" className="group flex items-center justify-center text-white dark:text-black hover:text-brand font-bold text-xl md:text-xl leading-relaxed font-helvica transition-colors">
                     <span className="text-brand">HUB</span>
                     <span>DI</span>
                     <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    <ArrowRight className="w-8 h-8 -rotate-45" />
                  </div>
                  <h3 className="text-2xl font-bold text-white dark:text-black uppercase tracking-tight transition-colors duration-500">
                    Sem enrolação
                  </h3>
                  <p className="text-neutral-400 dark:text-neutral-600 text-sm leading-relaxed transition-colors duration-500">
                    A Hubdi é uma estrutura de crescimento para marcas que buscam se destacar. Unimos posicionamento e conteúdo para transformar negócios em movimentos autênticos e desejados.
                  </p>
                </div>
             </div>
        </div>
        <div className="max-w-full relative z-10">
           <PortfolioCarousel projects={regularProjects} />
           

           {/* View More Button */}
           <div className="flex justify-center w-full mt-20">
             <Link href="/portfolio">
               <button 
                 className="group relative flex items-center gap-4 px-8 py-4 text-xl font-medium overflow-hidden rounded-full hover:bg-foreground/5 transition-colors duration-300"
               >
                 <span className="relative z-10">Ver todos cases</span>
                 <div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-foreground/20 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                   <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                 </div>
               </button>
             </Link>
           </div>
        </div>
      </section>

      {/* Major Partnerships Section */}
      <MajorPartnerships partnerships={partnershipProjects} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
