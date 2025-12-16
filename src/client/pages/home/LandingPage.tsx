'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/client/shared/ui/Button';
import { Marquee } from '@/client/shared/ui/Marquee';
import { Header } from '@/client/shared/ui/Header';
import { Footer } from '@/client/shared/ui/Footer';
import { ArrowRight, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function LandingPage() {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const marqueeItems = [
    "Design", "Strategy", "Development", "Branding",
    "Design", "Strategy", "Development", "Branding"
  ];

  const projects = [
    { name: "KidStok", logo: "/Logo KidStok.png", year: "2024", decoration: "/bg-ecommerce.png", rotation: "rotate-[37deg]", bright: true, invert: true },
    { name: "Vale", logo: "/Logo Vale.png", year: "2024", decoration: "/bg-institutional.png", rotation: "rotate-[21deg]", bright: true, invert: true },
    { name: "Butikim da Kelly", logo: "/Logo Butikim da Kelly.png", year: "2024", decoration: "/bg-optimization.png", rotation: "rotate-[30deg]", bright: false, invert: false },
    { name: "Embale+", logo: "/Logo Embale+.png", year: "2024", decoration: "/bg-ecommerce.png", rotation: "rotate-[45deg]", bright: true, invert: true },
    { name: "Haylander", logo: "/Logo Haylander.png", year: "2024", decoration: "/bg-institutional.png", rotation: "rotate-[15deg]", bright: true, invert: true },
    { name: "Hotel Metrópole", logo: "/Logo Hotel Metrópole.png", year: "2024", decoration: "/bg-optimization.png", rotation: "rotate-[25deg]", bright: true, invert: true },
    { name: "Mega", logo: "/Logo Mega.png", year: "2024", decoration: "/bg-ecommerce.png", rotation: "rotate-[10deg]", bright: true, invert: true },
    { name: "Motel Queen", logo: "/Logo Motel Queen.png", year: "2024", decoration: "/bg-institutional.png", rotation: "rotate-[33deg]", bright: true, invert: true },
    { name: "Mr. Fit", logo: "/Logo Mr. Fit.png", year: "2024", decoration: "/bg-optimization.png", rotation: "rotate-[18deg]", bright: true, invert: true },
    { name: "Rei Da Fruta", logo: "/Logo Rei Da Fruta.png", year: "2024", decoration: "/bg-ecommerce.png", rotation: "rotate-[28deg]", bright: false, invert: false },
    { name: "Zander", logo: "/Logo Zander.png", year: "2024", decoration: "/bg-institutional.png", rotation: "rotate-[40deg]", bright: true, invert: true },
  ];

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
            <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tight text-foreground uppercase mix-blend-normal pl-[10vw] animate-[slideUp_1s_var(--ease-sophisticated)_0.1s_forwards] opacity-0 [animation-fill-mode:forwards]">
              Impact
            </h1>
          </div>
          
          <div className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-foreground/10 pt-8 animate-[fadeIn_1s_var(--ease-sophisticated)_0.5s_forwards] opacity-0">
            <p className="max-w-md text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
              Criamos experiências digitais essenciais. <br/>
              Sem excessos. Apenas o necessário.
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

      {/* Grid Minimalista */}
      <section className="py-32 px-4 md:px-0 bg-background relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-32">
             <AnimatePresence mode="popLayout">
               {projects.slice(0, visibleProjects).map((project, index) => (
                 <motion.div 
                   key={project.name} 
                   layout
                   initial={{ opacity: 0, y: 50, scale: 0.9 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                   transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                   className={`group cursor-pointer relative ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
                 >
                   {/* Decorative Background Element */}
                   <div className={`absolute -top-32 -right-16 w-64 h-64 ${project.rotation} pointer-events-none select-none z-0`}>
                      <Image 
                        src={project.decoration}
                        alt="Decoration" 
                        fill 
                        className="object-contain dark:invert"
                      />
                   </div>
                   
                   <div className="aspect-[5/5] bg-neutral-950 mb-6 overflow-hidden relative flex items-center justify-center p-12 transition-transform duration-500 group-hover:-translate-y-2 z-10 shadow-2xl">
                     {/* Main Content - Project Logo */}
                     <div className="relative w-full h-full z-10 transition-transform duration-500 group-hover:scale-105">
                       <Image 
                         src={project.logo} 
                         alt={`${project.name} Project`}
                         fill 
                         className={`object-contain ${project.bright ? 'brightness-0' : ''} ${project.invert ? 'invert' : ''}`}
                       />
                     </div>
                   </div>
                   <div className="flex justify-between items-baseline border-b border-foreground/10 pb-4 group-hover:border-foreground transition-colors duration-500 relative z-10">
                     <h3 className="text-2xl font-medium">{project.name}</h3>
                     <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{project.year}</span>
                   </div>
                 </motion.div>
               ))}
             </AnimatePresence>
           </div>

           {/* View More Button */}
           {visibleProjects < projects.length && (
             <div className="flex justify-center w-full">
               <button 
                 onClick={() => setVisibleProjects(prev => prev + 4)}
                 className="group relative flex items-center gap-4 px-8 py-4 text-xl font-medium overflow-hidden rounded-full hover:bg-foreground/5 transition-colors duration-300"
               >
                 <span className="relative z-10">Ver mais cases</span>
                 <div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-foreground/20 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                   <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                 </div>
               </button>
             </div>
           )}

           {/* Floating Close Button */}
           <AnimatePresence>
             {visibleProjects > 4 && (
               <motion.button
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 exit={{ scale: 0, opacity: 0 }}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => {
                   window.scrollTo({ top: window.scrollY - 100, behavior: 'smooth' });
                   setVisibleProjects(4);
                 }}
                 className="fixed bottom-8 right-8 z-50 bg-foreground text-background px-5 py-2 rounded-full shadow-2xl flex items-center justify-center border border-background/20 cursor-pointer text-xs font-bold uppercase tracking-widest"
                 aria-label="Fechar cases"
               >
                 fechar cases
               </motion.button>
             )}
           </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
