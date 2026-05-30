'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/client/shared/data/projects';

interface MajorPartnershipsProps {
  partnerships: Project[];
}

export function MajorPartnerships({ partnerships }: MajorPartnershipsProps) {
  return (
    <section className="py-20 md:py-22 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 items-start"
        >
          <h2 className="text-[8vw] md:text-[4vw] leading-[0.9] font-bold tracking-tight text-foreground uppercase mix-blend-normal">
            Grandes <br />
            <span className="text-brand">Parcerias</span>
          </h2>
          <p className="mt-8 text-lg text-black dark:text-white font-helvica max-w-xl">
            Mais que referencias de mercado, são empresas que confiaram em nossa estrutura para escalar seus negócios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
          {partnerships.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`group cursor-pointer relative ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              {/* Decorative Background Element - Larger and more subtle for partnerships */}
              <div className={`absolute -top-16 -right-16 w-48 h-48 md:-top-32 md:-right-32 md:w-96 md:h-96 ${project.rotation} pointer-events-none select-none z-0 opacity-20 group-hover:opacity-60 transition-opacity duration-700 ease-in-out`}>
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

              {/* Card Container */}
              <div className="aspect-[16/10] bg-neutral-950 dark:bg-white mb-8 overflow-hidden relative flex items-center justify-center p-8 md:p-16 transition-all duration-700 group-hover:-translate-y-4 z-10 shadow-2xl border border-white/5 dark:border-black/5 group-hover:border-brand/30">

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

                {/* Main Content - Project Logo */}
                <div className="relative w-full h-full z-10 transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={project.logo}
                    alt={`${project.name} Project`}
                    fill
                    sizes="(max-width: 1000px) 100vw, 50vw"
                    className={`object-contain brightness-0 invert dark:invert-0`}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col border-l-2 border-transparent group-hover:border-brand pl-0 group-hover:pl-8 transition-all duration-500 relative z-10">
                <h3 className="text-4xl font-bold mb-3 tracking-tight group-hover:text-brand transition-colors">{project.name}</h3>
                <span className="text-base text-muted-foreground uppercase tracking-widest font-medium">Enterprise Partnership &bull; {project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
