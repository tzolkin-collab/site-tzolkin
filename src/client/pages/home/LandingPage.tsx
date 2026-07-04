'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/client/shared/ui/Button';
import { Marquee } from '@/client/shared/ui/Marquee';
import { LogoMarquee } from '@/client/shared/ui/LogoMarquee';
import { Header } from '@/client/shared/ui/Header';
import { ArrowRight, Quote } from 'lucide-react';
import { projects } from '@/client/shared/data/projects';
import { brands } from '@/client/shared/data/brands';

// Dynamic Imports for performance optimization
const PortfolioCarousel = dynamic(() => import('@/client/shared/ui/PortfolioCarousel').then(mod => mod.PortfolioCarousel), {
  loading: () => <div className="h-[400px] w-full bg-background/5 animate-pulse" />
});

const MajorPartnerships = dynamic(() => import('@/client/shared/ui/MajorPartnerships').then(mod => mod.MajorPartnerships), {
  loading: () => <div className="h-[600px] w-full bg-background/5 animate-pulse" />
});

const MethodTOISection = dynamic(() => import('@/client/shared/ui/MethodTOISection').then(mod => mod.MethodTOISection), {
  loading: () => <div className="h-[400px] w-full bg-background/5 animate-pulse" />
});

const TrafficProblemSection = dynamic(() => import('@/client/shared/ui/TrafficProblemSection').then(mod => mod.TrafficProblemSection), {
  loading: () => <div className="h-[400px] w-full bg-background/5 animate-pulse" />
});

const ServicesSection = dynamic(() => import('@/client/shared/ui/ServicesSection').then(mod => mod.ServicesSection), {
  loading: () => <div className="h-[800px] w-full bg-background/5 animate-pulse" />
});

const BrandsSection = dynamic(() => import('@/client/shared/ui/BrandsSection').then(mod => mod.BrandsSection), {
  loading: () => <div className="h-[600px] w-full bg-background/5 animate-pulse" />
});

const FounderSection = dynamic(() => import('@/client/shared/ui/FounderSection').then(mod => mod.FounderSection), {
  loading: () => <div className="h-[600px] w-full bg-background/5 animate-pulse" />
});

const PricingSection = dynamic(() => import('@/client/shared/ui/PricingSection').then(mod => mod.PricingSection), {
  loading: () => <div className="h-[800px] w-full bg-background/5 animate-pulse" />
});

const WhoIsItForSection = dynamic(() => import('@/client/shared/ui/WhoIsItForSection').then(mod => mod.WhoIsItForSection), {
  loading: () => <div className="h-[600px] w-full bg-background/5 animate-pulse" />
});

const Footer = dynamic(() => import('@/client/shared/ui/Footer').then(mod => mod.Footer));

const MARQUEE_ITEMS = ["FUNNEL", "STRATEGY", "BACKEND", "MARKETING", "BRANDING", "FUNNEL", "STRATEGY", "BACKEND", "MARKETING", "BRANDING"];

export function LandingPage() {
  const { regularProjects, partnershipProjects } = useMemo(() => {
    const groups = new Map<string, typeof projects>();
    projects.forEach(p => {
      const category = p.category || 'case';
      if (!groups.has(category)) groups.set(category, []);
      groups.get(category)!.push(p);
    });
    return {
      regularProjects: groups.get('case') || [],
      partnershipProjects: groups.get('partnership') || [],
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-clip flex flex-col font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Header Responsivo */}
      <Header />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="overflow-hidden">
            <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tight text-foreground dark:text-gray-0 uppercase mix-blend-normal animate-[slideUp_0.6s_var(--ease-sophisticated)_forwards]">
              Digital
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tight text-foreground dark:text-gray-0 uppercase mix-blend-normal pl-[10vw] animate-[slideUp_0.6s_var(--ease-sophisticated)_0.08s_forwards] opacity-0 fill-mode-fowards">
              Impact
            </h1>
          </div>

          <div className="mt-12 md:mt-18 flex flex-col md:flex-row justify-between items-end gap-8 animate-[fadeIn_0.6s_var(--ease-sophisticated)_0.3s_forwards] opacity-0">
            <p className="max-w-md text-lg md:text-xl text-foreground dark:text-gray-0 dark:text-gray-0 leading-relaxed font-helvica">
              Com a <span className="text-black dark:text-white">metodologia</span> certa para alinhar <span className="text-black dark:text-white">desenvolvimento</span>, <span className="text-black dark:text-white">identidade</span> e <span className="text-black dark:text-white">estratégia</span>.
            </p>

            <div className="flex gap-4">
              <Link href="/forms">
                <Button variant="primary" size="lg" className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 hover:scale-105">
                  Iniciar Projeto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee / Divider */}
      <Marquee items={MARQUEE_ITEMS} speed={2} />

      {/* Carousel Section */}
      <section className="bg-background relative overflow-hidden md:py-0">
        <div className="w-full md:mb-24 flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 animate-[fadeIn_0.6s_var(--ease-sophisticated)_0.3s_forwards] opacity-0">
          {/* Text Content */}
          <div className="text-[0vw] md:text-[4vw] md:pt-15 md:border-t-[5px] md:border-r-2 md:rounded-tr-[1px] border-brand mx:pl-0 md:pr-4 md:pl-2 leading-[0.9] font-bold tracking-tight text-foreground dark:text-gray-0 uppercase mix-blend-normal">
            <span className="text-foreground dark:text-gray-0">CASES</span><br />
            DE<br />
            <span className="text-foreground dark:text-gray-0">SUCESSO</span><br />
            tz<span className="text-foreground dark:text-gray-0">olkin</span>
          </div>
          <p className="max-w-md px-4 md:pr-2 pr-8 bg-white font-montserrat dark:bg-background md:bg-black md:pb-6 md:dark:bg-white md:pl-[20px] md:border-l-[5px] md:border-b-[5px] transition-colors duration-500 md:rounded-bl-[1px] md:border-brand text-xl md:text-2xl text-black dark:text-white md:text-white md:dark:text-black leading-relaxed font-helvica lg:text-left text-left">
            <Quote className="w-8 h-8 text-black dark:text-white mb-2 fill-white darK:fill-black" />
            Se sua <span className="text-black dark:text-white md:text-white md:dark:text-black"> operação</span> não anda, não é por falta de esforço.
            É por falta de <span className="text-black dark:text-white md:text-white md:dark:text-black">direção</span>.
            Hoje ou você <span className="text-black dark:text-white md:text-white md:dark:text-black">vende on-line</span> ou enfrenta uma <span className="text-black dark:text-white md:text-white md:dark:text-black">competição desleal</span>.
          </p>

          {/* Center Card */}
          <div className="flex w-full bg-black dark:bg-white md:border-b-[5px] border-brand py-[45.80px] flex-col items-center justify-center group overflow-hidden transition-colors duration-500 mx-auto lg:mx-0 animate-[fadeIn_0.6s_var(--ease-sophisticated)_0.1s_forwards] opacity-0">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 text-center space-y-6 px-6 md:px-12">
              <Link href="/portfolio" className="group flex items-center justify-center text-white hover:text-black dark:text-white md:text-white md:dark:text-black text-xl md:text-xl leading-relaxed font-helvica transition-colors">

                <span>TZOLKIN</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                <ArrowRight className="w-8 h-8 -rotate-45" />
              </div>
              <h3 className="text-2xl font-bold text-white dark:text-black uppercase transition-colors duration-100">
                Sem enrolação
              </h3>
              <p className="text-neutral-200 dark:text-neutral-600 text-sm leading-relaxed transition-colors duration-500">
                A tzolkin é uma empresa B2B famosa pelo atendimento exclusivo e produtos técnologicos de alto padrão, também pela atualização de sistemas legados e desenvolvimento de novos canais de vendas para empresas de todos os nichos. Não somos agencia, nós temos a solução para o seu problema.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-full relative z-10">
          <PortfolioCarousel projects={regularProjects} />



        </div>
      </section>

      {/* Major Partnerships Section */}
      <MajorPartnerships partnerships={partnershipProjects} />

      {/* Services Section */}
      <ServicesSection />

      {/* 5th Section - Method TOI */}
      <MethodTOISection />

      {/* 6th Section - Traffic Problem */}
      <TrafficProblemSection />

      {/* 7th Section - Brands */}
      <BrandsSection />

      {/* 8th Section - Founder */}
      <FounderSection />

      {/* Logo Marquee Separator */}
      <LogoMarquee items={brands || []} speed={0.8} />

      {/* 9th Section - Form Replaced by Pricing */}
      <PricingSection />

      {/* 10th Section - Who is it for */}
      <WhoIsItForSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
