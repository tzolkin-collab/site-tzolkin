'use client';

import { Compass, Handshake, Code2, ArrowRight, LucideIcon } from 'lucide-react';
import { useCallback } from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Button } from './Button';

const services = [
  {
    icon: Compass,
    title: "Consultoria em software",
    subtitle: "Decisão de tecnologia é decisão de negócio. A TZOLKIN entra como parceira técnica para diagnosticar, arquitetar e priorizar — antes de qualquer linha de código.",
    description: "Diagnóstico da operação, arquitetura de sistemas, escolha de stack, auditoria de código e de segurança, roadmap de produto. Você sai com escopo fechado, prioridades claras e estimativas realistas — mesmo que a execução fique com outro time.",
    glow: "from-brand/10 via-transparent to-transparent",
    iconGradient: "from-brand to-brand2",
    color: "var(--brand)"
  },
  {
    icon: Handshake,
    title: "Assessoria contínua",
    subtitle: "Um time sênior de software ao lado do seu, mês após mês — sem precisar montar um departamento inteiro de tecnologia.",
    description: "Evolução de produto, monitoramento e observabilidade, correções prioritárias, revisão de arquitetura e suporte às decisões técnicas do negócio. A TZOLKIN opera como o seu braço de engenharia, com escopo mensal e prioridades transparentes.",
    glow: "from-brand2/10 via-transparent to-transparent",
    iconGradient: "from-brand2 to-brand",
    color: "var(--brand2)"
  },
  {
    icon: Code2,
    title: "Desenvolvimento sob medida",
    subtitle: "Do MVP ao sistema completo: sites, plataformas, integrações e produtos white-label ou personalizados, construídos com o método TZOLKIN.",
    description: "Discovery, arquitetura e sprints incrementais, com observabilidade desde o primeiro deploy. Cada entrega valida uma hipótese com dados reais antes de escalar — e o código, o design e a documentação ficam com você.",
    linkText: "Veja o que construímos no catálogo",
    linkHref: "/catalogo",
    glow: "from-brand/10 via-transparent to-transparent",
    iconGradient: "from-brand to-brand2",
    color: "var(--brand)"
  }
];

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  subtitle: React.ReactNode;
  description: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  glow: string;
  iconGradient: string;
  color: string;
}

const areas = [
  {
    title: "Inteligência artificial",
    description: "Agentes, automações e IA aplicada a processos reais de negócio."
  },
  {
    title: "Cybersecurity",
    description: "Auditoria, hardening e segurança tratada como requisito, não como extra."
  },
  {
    title: "Web design & desenvolvimento",
    description: "Sites, sistemas e PWAs com performance sub-segundo."
  },
  {
    title: "Dados & integrações",
    description: "APIs, webhooks e analytics conectando cada ponta da sua operação."
  }
];

function ServiceCard({ service, index }: { service: ServiceItem, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="sticky"
      style={{ top: `${150 + index * 20}px` }}
    >
      <div
        className="relative group rounded-3xl overflow-hidden p-[2px] shadow-2xl"
        onMouseMove={handleMouseMove}
      >

        {/* LED Border Animation - Desktop (Mouse Follow) */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block pointer-events-none"
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
            className="absolute inset-[-50%] animate-[spin_8s_linear_infinite] w-[200%] h-[200%] left-[-50%] top-[-50%]"
            style={{
              backgroundImage: `conic-gradient(from 0deg, transparent 0 140deg, ${service.color} 160deg, transparent 180deg 320deg, ${service.color} 340deg, transparent 360deg)`,
              willChange: 'transform'
            }}
          />
        </div>

        {/* Inner Card Background & Content */}
        <div className="relative h-full bg-card border border-border rounded-[22px] p-7 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start z-10 overflow-hidden">

          {/* Dynamic Internal Gradient/Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.glow} opacity-50 pointer-events-none`} />

          {/* Top Highlight (Reflection) */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-50" />


          {/* Content Container */}
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 w-full">
            {/* Left Side */}
            <div className="flex-1 space-y-6">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center shadow-lg shadow-brand/20`}>
                <service.icon size={32} strokeWidth={1.5} className="text-brand-foreground drop-shadow-md" />
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4 tracking-tight">{service.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                  {service.subtitle}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col justify-center h-full gap-4">
              <p className="text-lg md:text-xl text-card-foreground leading-relaxed border-l-2 border-border pl-4 bg-foreground/5 rounded-r-xl py-2 pr-2">
                {service.description}
              </p>
              {service.linkText && service.linkHref && (
                <Link
                  href={service.linkHref}
                  className="group inline-flex items-center self-start text-brand font-semibold hover:underline underline-offset-4"
                >
                  {service.linkText}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
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
            Serviços de software, <span className="text-brand"><br />do diagnóstico</span>{' '}
            à operação
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Três formas de trabalhar com a TZOLKIN: consultoria, assessoria contínua e desenvolvimento sob medida. Um único método, um único padrão.
          </p>
        </div>

        <div className="flex flex-col gap-12 relative pb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Faixa Áreas de atuação */}
        <div className="mt-4 space-y-8 relative z-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-bold text-foreground"
          >
            De IA a cybersecurity: <span className="text-brand">um só time, todo o espectro do software.</span>
          </motion.p>

          <div className="flex flex-wrap gap-4">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-card border border-border rounded-2xl px-6 py-5 shadow-lg hover:border-brand/50 transition-colors"
              >
                <p className="font-bold text-foreground">{area.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1 max-w-xs">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button with Glow and Border Effect */}
        <div className="flex flex-col items-center mt-16 relative z-20 space-y-6">
          <div className="relative group transition-transform duration-300 hover:scale-105 active:scale-95">
            {/* Background Blur Glow */}
            <div className="absolute -inset-1 bg-brand/50 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />

            {/* Border Container */}
            <div className="relative rounded-full p-[2px] overflow-hidden">
              {/* Spinning Border Animation - Responsive Square */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] aspect-square animate-[spin_8s_linear_infinite]"
                style={{
                  backgroundImage: `conic-gradient(from 0deg, transparent 0 140deg, var(--brand) 160deg, transparent 180deg 320deg, var(--brand) 340deg, transparent 360deg)`,
                  willChange: 'transform'
                }}
              />

              {/* Button Content */}
              <Link href="/forms?interesse=consultoria" className="relative z-10 block">
                <Button
                  size="lg"
                  className="h-14! px-12! rounded-full! bg-brand! text-brand-foreground! font-bold! text-lg tracking-wide uppercase shadow-2xl"
                >
                  Quero um diagnóstico do meu projeto
                </Button>
              </Link>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Responda 4 perguntas rápidas — retorno em até 1 dia útil. Sem compromisso.
          </p>

          <Link
            href="/catalogo"
            className="group inline-flex items-center text-brand font-semibold hover:underline underline-offset-4"
          >
            Ou veja o catálogo completo de soluções
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
