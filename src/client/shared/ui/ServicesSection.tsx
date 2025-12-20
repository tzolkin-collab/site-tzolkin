'use client';

import { Target, FileText, Video, TrendingUp } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';

const services = [
  {
    icon: Target,
    title: "Posicionamento",
    subtitle: "Leitura da sua marca, do seu contexto e do seu público.",
    description: "Aqui a gente define quem você é, o que promete e como quer ser percebido. É a base pra todo o resto.",
    gradient: "from-yellow-500/10 via-neutral-950/50 to-neutral-950",
    iconGradient: "from-[#FFD100] to-[#FFEA80]",
    color: "#FFD100"
  },
  {
    icon: FileText,
    title: "Conteúdo",
    subtitle: "Criação de conteúdo e gestão de redes sociais",
    description: "Planejamento, roteiros, artes e legendas alinhados ao posicionamento. A gente cuida da produção e da consistência, você cuida do negócio.",
    gradient: "from-purple-500/10 via-neutral-950/50 to-neutral-950",
    iconGradient: "from-purple-500 to-purple-300",
    color: "#A855F7"
  },
  {
    icon: Video,
    title: "Audiovisual",
    subtitle: "Captação e produção audiovisual",
    description: "Roteirizamos, gravamos e editamos vídeos e fotos que mostram o que sua marca realmente entrega. Do bastidor ao institucional, conteúdo com qualidade que posiciona você em outro nível.",
    gradient: "from-blue-500/10 via-neutral-950/50 to-neutral-950",
    iconGradient: "from-blue-500 to-blue-300",
    color: "#3B82F6"
  },
  {
    icon: TrendingUp,
    title: "Direção de Performance",
    subtitle: "Analisamos números, entendemos o que está funcionando e o que não está e ajustamos posicionamento, conteúdo e oferta.",
    description: "Você para de depender de “achismo” e passa a ter clareza do que manter, o que ajustar e o que parar de fazer pra não desperdiçar tempo e dinheiro.",
    gradient: "from-green-500/10 via-neutral-950/50 to-neutral-950",
    iconGradient: "from-green-500 to-green-300",
    color: "#22C55E"
  }
];

function ServiceCard({ service, index }: { service: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="sticky"
      style={{ top: `${150 + index * 20}px` }}
    >
      <div 
        className="relative group rounded-3xl overflow-hidden p-[2px] shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]"
        onMouseMove={handleMouseMove}
      >
        
        {/* LED Border Animation - Desktop (Mouse Follow) */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block pointer-events-none"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                ${service.color},
                transparent 50%
              )
            `,
          }}
        />

        {/* LED Border Animation - Mobile (Auto Reflection) */}
        <div className="absolute inset-0 opacity-100 md:hidden pointer-events-none">
           <div 
             className="absolute inset-[-50%] animate-[spin_4s_linear_infinite] w-[200%] h-[200%] left-[-50%] top-[-50%]"
             style={{
               backgroundImage: `conic-gradient(from 0deg, transparent 0 140deg, ${service.color} 160deg, transparent 180deg 320deg, ${service.color} 340deg, transparent 360deg)`
             }}
           />
        </div>
        
        {/* Inner Card Background & Content */}
        <div className={`relative h-full bg-black/99 dark:bg-black md:bg-gray-300/40 md:dark:bg-white/10 backdrop-blur-xl rounded-[22px] p-7 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start z-10 overflow-hidden`}>
           
           {/* Dynamic Internal Gradient/Glow */}
           <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 pointer-events-none`} />
           
           {/* Top Highlight (Reflection) */}
           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
           
           {/* Noise Texture */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

           {/* Content Container */}
           <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 w-full">
             {/* Left Side */}
             <div className="flex-1 space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center shadow-lg shadow-black/20`}>
                  <service.icon size={32} strokeWidth={1.5} className="text-white drop-shadow-md" />
                </div>
                
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white dark:text-white dark:text-white mb-4 tracking-tight drop-shadow-sm">{service.title}</h3>
                  <p className="text-white/80 dark:text-white font-medium leading-relaxed text-lg">
                    {service.subtitle}
                  </p>
                </div>
             </div>

             {/* Right Side */}
             <div className="flex-1 flex items-center h-full">
                <p className="text-lg md:text-xl text-white dark:text-white leading-relaxed font-helvica border-l-2 border-white/10 pl-4 backdrop-blur-sm bg-white/5 rounded-r-xl py-2 pr-2">
                  {service.description}
                </p>
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="w-full bg-background pb-20 relative z-10" id="services">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 space-y-6">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter max-w-4xl text-foreground">
             A Hubdi estrutura o marketing da sua empresa com <span className="text-brand">soluções sob medida</span>
           </h2>
           <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl font-helvica leading-relaxed">
             Esses são os serviços que usamos pra sua marca ser vista, lembrada e escolhida e não só aparecer no feed.
           </p>
        </div>

        <div className="flex flex-col gap-12 relative pb-24">
          {services.map((service, index) => (
             <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA Button with Glow and Border Effect */}
        <div className="flex justify-center mt-12 relative z-20">
          <div className="relative group transition-transform duration-300 hover:scale-105 active:scale-95">
             {/* Background Blur Glow */}
             <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD100]/50 to-[#FFD100]/50 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />
             
             {/* Border Container */}
             <div className="relative rounded-full p-[2px] overflow-hidden">
                {/* Spinning Border Animation - Responsive Square */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] aspect-square animate-[spin_4s_linear_infinite]"
                     style={{
                       backgroundImage: `conic-gradient(from 0deg, transparent 0 140deg, #FFD100 160deg, transparent 180deg 320deg, #FFD100 340deg, transparent 360deg)`
                     }}
                />
                
                {/* Button Content */}
                <button className="relative px-12 py-5 bg-black text-white dark:bg-black rounded-full text-black dark:text-white font-bold text-lg tracking-wide uppercase shadow-2xl z-10 flex items-center justify-center backface-hidden">
                  Quero mais informações
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
