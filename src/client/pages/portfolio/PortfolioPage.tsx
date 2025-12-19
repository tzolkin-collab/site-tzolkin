'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/client/shared/ui/Header';
import { Footer } from '@/client/shared/ui/Footer';
import { MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/client/shared/data/projects';

export function PortfolioPage() {
  const [visibleProjects, setVisibleProjects] = useState(6);


  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand selection:text-brand-foreground dark:selection:bg-brand dark:selection:text-brand-foreground">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
          <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] font-bold tracking-tight text-foreground uppercase mix-blend-normal animate-[slideUp_1s_var(--ease-sophisticated)_forwards]">
            Cases
          </h1>
        </div>

        <section className="px-4 md:px-0 bg-background relative overflow-hidden">
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
                       <div 
                         className="w-full h-full bg-brand"
                         style={{
                           maskImage: `url(${project.decoration})`,
                           maskSize: 'contain',
                           maskRepeat: 'no-repeat',
                           maskPosition: 'center',
                           WebkitMaskImage: `url(${project.decoration})`,
                           WebkitMaskSize: 'contain',
                           WebkitMaskRepeat: 'no-repeat',
                           WebkitMaskPosition: 'center'
                         }}
                       />
                    </div>
                     
                     <div className="aspect-[5/5] bg-neutral-950 dark:bg-white mb-6 overflow-hidden relative flex items-center justify-center p-12 transition-transform duration-500 group-hover:-translate-y-2 z-10 shadow-2xl rounded-sm">
                       {/* Main Content - Project Logo */}
                       <div className="relative w-full h-full z-10 transition-transform duration-500 group-hover:scale-105">
                         <Image 
                           src={project.logo} 
                           alt={`${project.name} Project`}
                           fill 
                           className={`object-contain ${project.bright ? 'brightness-0' : ''} ${project.invert ? 'invert dark:invert-0' : ''}`}
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
                   <span className="relative z-10">Carregar mais</span>
                   <div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-foreground/20 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                     <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                   </div>
                 </button>
               </div>
             )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
